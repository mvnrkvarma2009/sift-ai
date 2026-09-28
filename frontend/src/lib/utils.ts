export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatTimestamp(date: Date = new Date()): string {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

export function getFeedCategoryColor(category?: string): string {
  const c = (category || '').toUpperCase().trim();
  if (c === 'AI') return 'text-[var(--teal)]';
  if (c === 'STARTUP' || c === 'STARTUPS') return 'text-[var(--copper)]';
  if (c === 'TECH') return 'text-[var(--accent)]';
  if (c === 'FUNDING') return 'text-[var(--success)]';
  if (c === 'PRODUCT') return 'text-[var(--accent)]';
  return 'text-[var(--accent)]';
}
