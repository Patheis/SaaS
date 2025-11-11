import Header from '@/components/Layout/Header';
import DashboardContent from '@/components/Dashboard/DashboardContent';
import ActionIndicator from '@/components/Dashboard/ActionIndicator'; 
import DashboardLayout from '@/components/Layout/DashboardLayout'; // Importação essencial

// Dados de exemplo para o indicador
const actionsData = {
  total: 25,
  vencidas: 5,
  concluidas: 20,
};

export default function DashboardPage() {
  return (
    // ⬅️ ENVOLVENDO A PÁGINA COM O NOVO LAYOUT
    <DashboardLayout>
      <Header title="EMPRESA TESTE" subtitle="Olá, João Vitor" />
      
      <div className="p-8">
        
        {/* Indicador de Ações no topo */}
        <div className="mb-8">
          <ActionIndicator data={actionsData} /> 
        </div>

        {/* Módulos principais */}
        <DashboardContent />
        
      </div>
    </DashboardLayout>
  );
}