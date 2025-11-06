// src/app/page.tsx (Modificado)

'use client'; // <-- Adicione esta linha!


// Use o alias '@/...' para importar de src/
import Header from '@/components/Layout/Header';
import DashboardContent from '@/components/Dashboard/DashboardContent';
import ActionIndicator from '@/components/Dashboard/ActionIndicator'; 

// 1. Importar a tipagem centralizada
import { ActionData } from '@/data/types';

// 2. Aplicar o tipo ActionData ao nosso mock de dados
const actionsData: ActionData = {
  total: 25,
  vencidas: 5,
  concluidas: 20, // Mudamos 'vendidas' para 'concluidas' para consistência
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