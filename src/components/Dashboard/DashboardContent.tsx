// src/components/Dashboard/DashboardContent.tsx
import CardBlock from '@/components/UI/CardBlock'; // Usando o alias!
import { Layout, CheckSquare, BarChart3, Users, Database, Shield, Hourglass, ClipboardList } from 'lucide-react';

// Dados simulados para os Cards (Baseado no layout do seu vídeo)


const dashboardModules = [
  { 
    title: 'Planejamento', 
    subtitle: 'Definição de escopo e riscos.', 
    bgColor: 'bg-red-600', 
    icon: Layout, 
    link: '/planejamento' 
  },
  { 
    title: 'Execução', 
    subtitle: 'Follow-up de atividades e testes de controle.', 
    bgColor: 'bg-orange-500', 
    icon: CheckSquare, 
    link: '/execucao' 
  },
  { 
    title: 'Conclusão - ✅', 
    subtitle: 'Validação de itens obrigatórios e revisão.', 
    bgColor: 'bg-yellow-500', 
    icon: BarChart3, 
    link: '/dashboard-detalhe' 
  },
  { 
    title: 'Dados Mestres', 
    subtitle: 'Atualização e gerenciamento de informações críticas.', 
    bgColor: 'bg-red-700', 
    icon: Database, 
    link: '/dados-mestres' 
  },
  { 
    title: 'Gestão do Sistema - ✅', 
    subtitle: 'Usuários, perfis, atribuições e workflow.', 
    bgColor: 'bg-green-600', 
    icon: Users, 
    link: '/gestao-sistema' 
  },
  { 
    title: 'Matriz Riscos', 
    subtitle: 'Controle de versão e gestão de compliance.', 
    bgColor: 'bg-blue-600', 
    icon: Shield, 
    link: '/matriz-riscos' 
  },
  
  { 
    title: 'Monitoramento de Processos - ✅', 
    subtitle: 'Visualização e filtragem de todos os itens de trabalho.', 
    bgColor: 'bg-indigo-700', 
    icon: ClipboardList, 
    link: '/processos' 
  }, 

  { 
    title: 'TESTE DE COMPONENTES', 
    subtitle: 'sim', 
    bgColor: 'bg-pink-600', 
    icon: Hourglass, 
    link: '/matriz-riscos' 
  },
];

export default function DashboardContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {dashboardModules.map((module) => (
        <CardBlock
          key={module.title}
          title={module.title}
          subtitle={module.subtitle}
          bgColor={module.bgColor}
          icon={module.icon}
          link={module.link}
        />
      ))}
    </div>
  );
}