// src/app/page.tsx
import Header from '@/components/Layout/Header';
import DashboardContent from '@/components/Dashboard/DashboardContent';
import ActionIndicator from '@/components/Dashboard/ActionIndicator'; // Criaremos este em seguida

// Dados de exemplo para o indicador (Você pode colocar isto em data/mockData.ts depois)
const actionsData = {
  total: 25,
  vencidas: 5,
  vendidas: 20,
};

export default function DashboardPage() {
  return (
    <div>
      <Header title="EMPRESA TESTE" subtitle="Olá, João Vitor" />
      
      <div className="p-8">
        
        {/* Indicador de Ações no topo */}
        <div className="mb-8">
          {/* Implementação do componente ActionIndicator */}
          <ActionIndicator data={actionsData} /> 
        </div>

        {/* Módulos principais */}
        <DashboardContent />
        
      </div>
    </div>
  );
}