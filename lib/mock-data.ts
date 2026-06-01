/**
 * PipeFlow CRM — Mock Data
 * Realistic Brazilian data for development and testing
 */

import type {
  Lead,
  Deal,
  Activity,
  Workspace,
  WorkspaceMember,
} from "@/types";

// ============================================================================
// Mock Workspaces
// ============================================================================

export const mockWorkspaces: Workspace[] = [
  {
    id: "ws-1",
    name: "Agência Digital Ltda",
    plan: "pro",
    stripe_customer_id: "cus_mock_001",
    created_at: "2024-01-15T08:30:00Z",
    updated_at: "2024-11-20T14:45:00Z",
  },
  {
    id: "ws-2",
    name: "Freelancer Bruno",
    plan: "free",
    stripe_customer_id: null,
    created_at: "2024-06-10T10:00:00Z",
    updated_at: "2024-11-25T09:15:00Z",
  },
];

// ============================================================================
// Mock Workspace Members
// ============================================================================

export const mockWorkspaceMembers: WorkspaceMember[] = [
  {
    id: "member-1",
    workspace_id: "ws-1",
    user_id: "user-1",
    role: "admin",
    created_at: "2024-01-15T08:30:00Z",
    updated_at: "2024-01-15T08:30:00Z",
    user: {
      id: "user-1",
      email: "admin@agenciadigital.com",
    },
  },
  {
    id: "member-2",
    workspace_id: "ws-1",
    user_id: "user-2",
    role: "member",
    created_at: "2024-02-01T14:20:00Z",
    updated_at: "2024-02-01T14:20:00Z",
    user: {
      id: "user-2",
      email: "vendas@agenciadigital.com",
    },
  },
  {
    id: "member-3",
    workspace_id: "ws-2",
    user_id: "user-3",
    role: "admin",
    created_at: "2024-06-10T10:00:00Z",
    updated_at: "2024-06-10T10:00:00Z",
    user: {
      id: "user-3",
      email: "bruno@freelancer.com",
    },
  },
];

// ============================================================================
// Mock Leads
// ============================================================================

export const mockLeads: Lead[] = [
  {
    id: "lead-1",
    workspace_id: "ws-1",
    name: "Carlos Mendes",
    email: "carlos.mendes@empresa.com.br",
    phone: "(11) 98765-4321",
    company: "Tech Solutions Brasil",
    job_title: "Diretor de Marketing",
    status: "novo-lead",
    owner_id: "user-1",
    created_at: "2024-11-01T09:00:00Z",
    updated_at: "2024-11-01T09:00:00Z",
  },
  {
    id: "lead-2",
    workspace_id: "ws-1",
    name: "Fernanda Silva",
    email: "fernanda.silva@startup.com.br",
    phone: "(21) 99876-5432",
    company: "inovaTech",
    job_title: "CEO",
    status: "contato-realizado",
    owner_id: "user-2",
    created_at: "2024-10-28T14:30:00Z",
    updated_at: "2024-11-15T11:20:00Z",
  },
  {
    id: "lead-3",
    workspace_id: "ws-1",
    name: "Roberto Costa",
    email: "roberto.costa@industria.com.br",
    phone: "(31) 3333-2222",
    company: "Manufatura Ltda",
    job_title: "Gerente de Vendas",
    status: "qualificado",
    owner_id: "user-1",
    created_at: "2024-10-20T10:15:00Z",
    updated_at: "2024-11-18T15:45:00Z",
  },
  {
    id: "lead-4",
    workspace_id: "ws-1",
    name: "Juliana Oliveira",
    email: "juliana.oliveira@consultoria.com.br",
    phone: "(85) 98888-7777",
    company: "Consultoria Estratégica",
    job_title: "Sócia",
    status: "proposta-enviada",
    owner_id: "user-2",
    created_at: "2024-10-10T13:00:00Z",
    updated_at: "2024-11-19T10:30:00Z",
  },
  {
    id: "lead-5",
    workspace_id: "ws-1",
    name: "Michel Pereira",
    email: "michel.pereira@ecommerce.com.br",
    phone: "(47) 99999-1111",
    company: "eCommerce Plus",
    job_title: "Diretor de Operações",
    status: "negociacao",
    owner_id: "user-1",
    created_at: "2024-09-30T11:45:00Z",
    updated_at: "2024-11-20T16:20:00Z",
  },
  {
    id: "lead-6",
    workspace_id: "ws-1",
    name: "Beatriz Santos",
    email: "beatriz.santos@financeira.com.br",
    phone: "(61) 98765-1234",
    company: "Financeira ABC",
    job_title: "Analista de Negócios",
    status: "convertido",
    owner_id: "user-2",
    created_at: "2024-09-15T08:30:00Z",
    updated_at: "2024-11-10T09:00:00Z",
  },
  {
    id: "lead-7",
    workspace_id: "ws-1",
    name: "Diego Ferreira",
    email: "diego.ferreira@logistica.com.br",
    phone: "(71) 3333-4444",
    company: "Logística Express",
    job_title: "Gerente Regional",
    status: "perdido",
    owner_id: "user-1",
    created_at: "2024-08-20T14:15:00Z",
    updated_at: "2024-11-05T12:30:00Z",
  },
  {
    id: "lead-8",
    workspace_id: "ws-1",
    name: "Amanda Torres",
    email: "amanda.torres@comercio.com.br",
    phone: "(48) 99000-2222",
    company: "Comércio Varejo",
    job_title: "Gerente de Loja",
    status: "novo-lead",
    owner_id: "user-2",
    created_at: "2024-11-18T09:30:00Z",
    updated_at: "2024-11-18T09:30:00Z",
  },
  {
    id: "lead-9",
    workspace_id: "ws-1",
    name: "Lucas Almeida",
    email: "lucas.almeida@servicos.com.br",
    phone: "(82) 98765-9999",
    company: "Serviços Gerenciais",
    job_title: "Diretor Comercial",
    status: "contato-realizado",
    owner_id: "user-1",
    created_at: "2024-11-12T10:00:00Z",
    updated_at: "2024-11-22T14:50:00Z",
  },
  {
    id: "lead-10",
    workspace_id: "ws-1",
    name: "Patricia Gomes",
    email: "patricia.gomes@saude.com.br",
    phone: "(67) 3333-5555",
    company: "Clínica de Saúde",
    job_title: "Administradora",
    status: "qualificado",
    owner_id: "user-2",
    created_at: "2024-11-05T15:20:00Z",
    updated_at: "2024-11-20T11:15:00Z",
  },
];

// ============================================================================
// Mock Deals
// ============================================================================

export const mockDeals: Deal[] = [
  {
    id: "deal-1",
    workspace_id: "ws-1",
    lead_id: "lead-1",
    title: "Projeto Site Corporativo - Tech Solutions",
    value: 18000,
    stage: "novo-lead",
    owner_id: "user-1",
    due_date: "2024-12-15T00:00:00Z",
    created_at: "2024-11-01T09:00:00Z",
    updated_at: "2024-11-01T09:00:00Z",
  },
  {
    id: "deal-2",
    workspace_id: "ws-1",
    lead_id: "lead-2",
    title: "App Mobile - inovaTech",
    value: 45000,
    stage: "contato-realizado",
    owner_id: "user-2",
    due_date: "2024-12-20T00:00:00Z",
    created_at: "2024-10-28T14:30:00Z",
    updated_at: "2024-11-15T11:20:00Z",
  },
  {
    id: "deal-3",
    workspace_id: "ws-1",
    lead_id: "lead-3",
    title: "Sistema ERP - Manufatura Ltda",
    value: 75000,
    stage: "proposta-enviada",
    owner_id: "user-1",
    due_date: "2024-12-10T00:00:00Z",
    created_at: "2024-10-20T10:15:00Z",
    updated_at: "2024-11-18T15:45:00Z",
  },
  {
    id: "deal-4",
    workspace_id: "ws-1",
    lead_id: "lead-4",
    title: "Consultoria de Transformação Digital",
    value: 35000,
    stage: "negociacao",
    owner_id: "user-2",
    due_date: "2024-12-05T00:00:00Z",
    created_at: "2024-10-10T13:00:00Z",
    updated_at: "2024-11-19T10:30:00Z",
  },
  {
    id: "deal-5",
    workspace_id: "ws-1",
    lead_id: "lead-5",
    title: "Integração de Pagamentos - eCommerce Plus",
    value: 25000,
    stage: "negociacao",
    owner_id: "user-1",
    due_date: "2024-11-30T00:00:00Z",
    created_at: "2024-09-30T11:45:00Z",
    updated_at: "2024-11-20T16:20:00Z",
  },
  {
    id: "deal-6",
    workspace_id: "ws-1",
    lead_id: "lead-6",
    title: "Plataforma de Gestão Financeira",
    value: 60000,
    stage: "fechado-ganho",
    owner_id: "user-2",
    due_date: "2024-10-30T00:00:00Z",
    created_at: "2024-09-15T08:30:00Z",
    updated_at: "2024-11-10T09:00:00Z",
  },
  {
    id: "deal-7",
    workspace_id: "ws-1",
    lead_id: "lead-7",
    title: "Software de Rastreamento",
    value: 15000,
    stage: "fechado-perdido",
    owner_id: "user-1",
    due_date: "2024-09-20T00:00:00Z",
    created_at: "2024-08-20T14:15:00Z",
    updated_at: "2024-11-05T12:30:00Z",
  },
  {
    id: "deal-8",
    workspace_id: "ws-1",
    lead_id: "lead-9",
    title: "Automação de Processos",
    value: 22000,
    stage: "contato-realizado",
    owner_id: "user-2",
    due_date: "2024-12-25T00:00:00Z",
    created_at: "2024-11-12T10:00:00Z",
    updated_at: "2024-11-22T14:50:00Z",
  },
];

// ============================================================================
// Mock Activities
// ============================================================================

export const mockActivities: Activity[] = [
  {
    id: "activity-1",
    workspace_id: "ws-1",
    lead_id: "lead-1",
    author_id: "user-1",
    type: "call",
    description:
      "Primeira ligação com o diretor. Interesse em redesign do site. Agendado para segunda reunião.",
    created_at: "2024-11-18T10:30:00Z",
    updated_at: "2024-11-18T10:30:00Z",
  },
  {
    id: "activity-2",
    workspace_id: "ws-1",
    lead_id: "lead-2",
    author_id: "user-2",
    type: "email",
    description:
      "Enviado proposta técnica para desenvolvimento do app mobile. Aguardando retorno.",
    created_at: "2024-11-17T14:15:00Z",
    updated_at: "2024-11-17T14:15:00Z",
  },
  {
    id: "activity-3",
    workspace_id: "ws-1",
    lead_id: "lead-3",
    author_id: "user-1",
    type: "meeting",
    description:
      "Reunião presencial com Gerente de Vendas. Demonstração do ERP. Prospect muito interessado.",
    created_at: "2024-11-16T15:00:00Z",
    updated_at: "2024-11-16T15:00:00Z",
  },
  {
    id: "activity-4",
    workspace_id: "ws-1",
    lead_id: "lead-4",
    author_id: "user-2",
    type: "note",
    description:
      "Cliente pediu desconto de 15% para assinatura anual. Aguardando aprovação interna.",
    created_at: "2024-11-19T11:45:00Z",
    updated_at: "2024-11-19T11:45:00Z",
  },
  {
    id: "activity-5",
    workspace_id: "ws-1",
    lead_id: "lead-5",
    author_id: "user-1",
    type: "call",
    description:
      "Conversa de negociação. Cliente quer implementação em 2 semanas. Verificando viabilidade técnica.",
    created_at: "2024-11-20T09:00:00Z",
    updated_at: "2024-11-20T09:00:00Z",
  },
  {
    id: "activity-6",
    workspace_id: "ws-1",
    lead_id: "lead-6",
    author_id: "user-2",
    type: "email",
    description:
      "Contrato assinado! Cliente será onboarded próxima semana. Projeto iniciando dia 25.",
    created_at: "2024-11-10T10:20:00Z",
    updated_at: "2024-11-10T10:20:00Z",
  },
  {
    id: "activity-7",
    workspace_id: "ws-1",
    lead_id: "lead-7",
    author_id: "user-1",
    type: "note",
    description:
      "Cliente escolheu solução concorrente. Budget insuficiente para nossa solução. Perdido.",
    created_at: "2024-11-05T13:30:00Z",
    updated_at: "2024-11-05T13:30:00Z",
  },
  {
    id: "activity-8",
    workspace_id: "ws-1",
    lead_id: "lead-8",
    author_id: "user-2",
    type: "email",
    description:
      "Enviado proposta inicial para gerente de loja. Aguardando retorno com disponibilidade para reunião.",
    created_at: "2024-11-18T16:45:00Z",
    updated_at: "2024-11-18T16:45:00Z",
  },
  {
    id: "activity-9",
    workspace_id: "ws-1",
    lead_id: "lead-9",
    author_id: "user-1",
    type: "call",
    description:
      "Ligação inicial. Interessado em automação de processos internos. Marcada visita técnica para 28/11.",
    created_at: "2024-11-22T14:00:00Z",
    updated_at: "2024-11-22T14:00:00Z",
  },
  {
    id: "activity-10",
    workspace_id: "ws-1",
    lead_id: "lead-10",
    author_id: "user-2",
    type: "meeting",
    description:
      "Reunião com administradora da clínica. Apresentação da solução de gestão. Respondeu positivamente.",
    created_at: "2024-11-20T10:30:00Z",
    updated_at: "2024-11-20T10:30:00Z",
  },
];
