/**
 * PipeFlow CRM — Global TypeScript Types
 * Strict mode, no `any`, explicit types on all exports
 */

// ============================================================================
// Union Types (Enums)
// ============================================================================

/** Lead status in the sales funnel */
export type LeadStatus =
  | "novo-lead"
  | "contato-realizado"
  | "qualificado"
  | "proposta-enviada"
  | "negociacao"
  | "convertido"
  | "perdido";

/** Deal stage — matches Kanban pipeline columns */
export type DealStage =
  | "novo-lead"
  | "contato-realizado"
  | "proposta-enviada"
  | "negociacao"
  | "fechado-ganho"
  | "fechado-perdido";

/** Activity type for timeline and audit */
export type ActivityType = "call" | "email" | "meeting" | "note";

/** Workspace subscription plan */
export type WorkspacePlan = "free" | "pro";

/** Workspace member role */
export type WorkspaceRole = "admin" | "member";

// ============================================================================
// Workspace Types
// ============================================================================

/**
 * Workspace — SaaS tenant for multi-tenant isolation
 */
export interface Workspace {
  id: string; // UUID
  name: string;
  plan: WorkspacePlan;
  stripe_customer_id: string | null;
  created_at: string; // ISO date
  updated_at: string; // ISO date
}

/**
 * WorkspaceMember — User role and permissions within a workspace
 */
export interface WorkspaceMember {
  id: string; // UUID
  workspace_id: string; // FK → workspace
  user_id: string; // FK → auth.users
  role: WorkspaceRole;
  created_at: string; // ISO date
  updated_at: string; // ISO date
  // Optional join fields
  user?: {
    id: string;
    email: string;
  };
}

// ============================================================================
// Lead Types
// ============================================================================

/**
 * Lead — prospect or customer in the CRM
 */
export interface Lead {
  id: string; // UUID
  workspace_id: string; // FK → workspace (RLS scoped)
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  job_title: string | null;
  status: LeadStatus;
  owner_id: string; // FK → workspace_members.user_id
  created_at: string; // ISO date
  updated_at: string; // ISO date
}

// ============================================================================
// Deal Types
// ============================================================================

/**
 * Deal — sales opportunity linked to a lead
 */
export interface Deal {
  id: string; // UUID
  workspace_id: string; // FK → workspace (RLS scoped)
  lead_id: string; // FK → leads
  title: string;
  value: number; // Deal amount in cents or primary currency
  stage: DealStage;
  owner_id: string; // FK → workspace_members.user_id
  due_date: string | null; // ISO date
  created_at: string; // ISO date
  updated_at: string; // ISO date
}

// ============================================================================
// Activity Types
// ============================================================================

/**
 * Activity — timeline entry for calls, emails, meetings, notes
 */
export interface Activity {
  id: string; // UUID
  workspace_id: string; // FK → workspace (RLS scoped)
  lead_id: string; // FK → leads
  author_id: string; // FK → workspace_members.user_id
  type: ActivityType;
  description: string;
  created_at: string; // ISO date
  updated_at: string; // ISO date
}

// ============================================================================
// API & UI Helper Types
// ============================================================================

/**
 * PaginationParams — standard pagination for list endpoints
 */
export interface PaginationParams {
  page: number;
  per_page: number;
}

/**
 * PaginatedResponse — generic paginated list response
 */
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  per_page: number;
}

/**
 * ApiError — standardized error response
 */
export interface ApiError {
  message: string;
  code?: string;
  details?: Record<string, unknown>;
}

/**
 * ApiResponse — generic success response wrapper
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
}
