export interface ExtractedConstraints {
  budget: 'free' | 'paid' | 'any' | null;
  signup_required: boolean | null;
  export_format: string | null;
  slide_count: number | null;
  other_constraints?: string[];
}

export interface ExtractedRequirements {
  task_type: string;
  constraints: ExtractedConstraints;
}

export interface Query {
  id: string;
  user_id: string;
  raw_description: string;
  extracted_requirements?: ExtractedRequirements | null;
  status: 'processing' | 'completed' | 'failed';
  created_at: Date;
}
