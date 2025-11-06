// src/data/types.ts

// 1. Tipagem para os itens da Sidebar (embora a Sidebar em si não use tipos externos)
export interface NavItem {
  href: string;
  label: string;
  // Usamos 'any' aqui porque o tipo LucideIcon é complexo de importar globalmente,
  // mas 'React.ElementType' ou 'any' funciona para este propósito
  icon: any; 
}

// 2. Tipagem para os Cards de Módulo no Dashboard
export interface ModuleCard {
  title: string;
  subtitle: string;
  bgColor: string;
  icon: any; 
  link: string;
}

// 3. Tipagem para o Indicador de Ações (Ações a Concluir)
export interface ActionData {
  total: number;
  vencidas: number;
  concluidas: number;
}

// 4. Tipagem para os dados de Processos (Usado na Tabela)
export type ProcessoStatus = 'Aberto' | 'Concluído' | 'Em Análise';

export interface Processo {
  id: number;
  item: string;
  dataCriacao: string;
  processo: string;
  status: ProcessoStatus;
  previsao: 'Alta' | 'Média' | 'Baixa';
  vencimento?: string; // Opcional para dados simulados
}