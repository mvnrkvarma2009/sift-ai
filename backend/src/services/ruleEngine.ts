export interface RuleResult {
  rule_name: string;
  verdict: 'PASS' | 'FLAG' | 'FAIL';
  reason: string;
}

export function evaluateRules(requirements: any, tool: any): RuleResult[] {
  const results: RuleResult[] = [];

  // Rule 1: Budget check
  if (requirements.constraints?.budget === 'free') {
    if (tool.pricing === 'paid') {
      results.push({
        rule_name: 'budget_check',
        verdict: 'FAIL',
        reason: 'Paid-only tool but user requested free tier',
      });
    } else if (tool.pricing === 'free_tier' || tool.pricing === 'freemium') {
      results.push({
        rule_name: 'budget_check',
        verdict: 'FLAG',
        reason: 'Free tier available with usage quotas',
      });
    } else {
      results.push({
        rule_name: 'budget_check',
        verdict: 'PASS',
        reason: 'Free tier matches budget requirement',
      });
    }
  } else {
    results.push({
      rule_name: 'budget_check',
      verdict: 'PASS',
      reason: 'No strict free budget constraint specified',
    });
  }

  // Rule 2: Signup check
  if (requirements.constraints?.signup_required === false && tool.signup_required === true) {
    results.push({
      rule_name: 'signup_check',
      verdict: 'FAIL',
      reason: 'Signup required but user requested no signup',
    });
  } else {
    results.push({
      rule_name: 'signup_check',
      verdict: 'PASS',
      reason: tool.signup_required ? 'Standard account authentication required' : 'No account signup required for access',
    });
  }

  // Rule 3: Export format check
  if (requirements.constraints?.export_format && tool.export_formats) {
    const requestedFormat = String(requirements.constraints.export_format).toUpperCase();
    const availableFormats = (tool.export_formats || []).map((f: string) => f.toUpperCase());
    const matches = availableFormats.some((f: string) => f.includes(requestedFormat) || requestedFormat.includes(f));
    if (!matches) {
      results.push({
        rule_name: 'export_format_check',
        verdict: 'FAIL',
        reason: `Export format ${requirements.constraints.export_format} not supported`,
      });
    } else {
      results.push({
        rule_name: 'export_format_check',
        verdict: 'PASS',
        reason: `Export format ${requirements.constraints.export_format} confirmed supported`,
      });
    }
  } else {
    results.push({
      rule_name: 'export_format_check',
      verdict: 'PASS',
      reason: 'Standard export options available',
    });
  }

  // Rule 4: Slide count check
  if (requirements.constraints?.slide_count && tool.free_tier_slide_limit) {
    if (requirements.constraints.slide_count > tool.free_tier_slide_limit) {
      results.push({
        rule_name: 'slide_count_check',
        verdict: 'FAIL',
        reason: `Free tier limited to ${tool.free_tier_slide_limit} slides, user requested ${requirements.constraints.slide_count}`,
      });
    } else {
      results.push({
        rule_name: 'slide_count_check',
        verdict: 'PASS',
        reason: 'Slide count within free tier quota',
      });
    }
  } else {
    results.push({
      rule_name: 'slide_count_check',
      verdict: 'PASS',
      reason: 'No restrictive slide limit specified',
    });
  }

  // Rule 5: Category match
  const taskCategory = (requirements.task_type || '').toLowerCase().trim();
  const toolCategory = (tool.category || '').toLowerCase().trim();

  // Helper matching synonyms
  const isMatch = () => {
    if (!taskCategory || !toolCategory) return true;
    if (toolCategory.includes(taskCategory) || taskCategory.includes(toolCategory)) return true;
    if ((taskCategory.includes('code') || taskCategory.includes('dev')) && (toolCategory.includes('code') || toolCategory.includes('coding'))) return true;
    if ((taskCategory.includes('pres') || taskCategory.includes('slide')) && toolCategory.includes('pres')) return true;
    if ((taskCategory.includes('write') || taskCategory.includes('chat') || taskCategory.includes('text')) && (toolCategory.includes('write') || toolCategory.includes('reason') || toolCategory.includes('chat'))) return true;
    if ((taskCategory.includes('audio') || taskCategory.includes('sound') || taskCategory.includes('pod')) && toolCategory.includes('audio')) return true;
    return false;
  };

  if (taskCategory && !isMatch()) {
    results.push({
      rule_name: 'category_match',
      verdict: 'FAIL',
      reason: `Tool category (${tool.category}) does not match task requirement (${requirements.task_type})`,
    });
  } else {
    results.push({
      rule_name: 'category_match',
      verdict: 'PASS',
      reason: `Category verified: ${tool.category || 'General'}`,
    });
  }

  return results;
}

export function computeFinalVerdict(results: RuleResult[]): 'MEETS_REQUIREMENTS' | 'PARTIALLY_MEETS' | 'DOES_NOT_MEET' {
  if (results.some(r => r.verdict === 'FAIL')) return 'DOES_NOT_MEET';
  if (results.some(r => r.verdict === 'FLAG')) return 'PARTIALLY_MEETS';
  return 'MEETS_REQUIREMENTS';
}
