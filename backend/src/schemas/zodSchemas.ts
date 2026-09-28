import { z } from 'zod';

// Strict email regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const RequirementSchema = z.object({
  task_type: z.string().min(1),
  constraints: z.object({
    budget: z.enum(['free', 'paid', 'any']).nullable(),
    signup_required: z.boolean().nullable(),
    export_format: z.string().nullable(),
    slide_count: z.number().positive().nullable(),
    other_constraints: z.array(z.string()).optional(),
  }),
});

export type ExtractedRequirements = z.infer<typeof RequirementSchema>;

export const IntentSchema = z.object({
  intent: z.enum(['TASK', 'GENERAL']),
  reason: z.string().min(1),
});

export const GeneralResponseSchema = z.object({
  mode: z.literal('GENERAL'),
  reply: z.string().min(1),
  intent_reason: z.string(),
});

export const TaskResponseSchema = z.object({
  mode: z.literal('TASK'),
  requirements: RequirementSchema,
  intent_reason: z.string(),
});

export const QueryResponseSchema = z.discriminatedUnion('mode', [GeneralResponseSchema, TaskResponseSchema]);

export type Intent = z.infer<typeof IntentSchema>;
export type GeneralResponse = z.infer<typeof GeneralResponseSchema>;
export type TaskResponse = z.infer<typeof TaskResponseSchema>;
export type QueryResponse = z.infer<typeof QueryResponseSchema>;

export const RegisterSchema = z.object({
  email: z.string().regex(emailRegex, { message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
}).strict();

export const LoginSchema = z.object({
  email: z.string().regex(emailRegex, { message: 'Invalid email address' }),
  password: z.string().min(1, { message: 'Password is required' }),
}).strict();

export const QuerySubmitSchema = z.object({
  raw_description: z.string().min(1, { message: 'Query is required' }),
}).strict();

export const FeedItemCreateSchema = z.object({
  category: z.enum(['AI', 'STARTUP', 'TECH', 'FUNDING']),
  headline: z.string().min(3),
  summary: z.string().optional(),
  source: z.string().min(1),
  source_url: z.string().url().optional(),
  published_at: z.string().datetime().optional(),
}).strict();
