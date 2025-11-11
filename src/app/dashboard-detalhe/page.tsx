'use client'; 

import Header from '@/components/Layout/Header';
import BarChartComponent from '@/components/Dashboard/BarChartComponent';
import PieChartComponent from '@/components/Dashboard/PieChartComponent';
import DashboardLayout from '@/components/Layout/DashboardLayout'; // ⬅️ IMPORTADO!

// Dados mockados (sem alteração)
const barData = [
  { name: 'Jan', Meta: 4000, Realizado: 2400 },
  { name: 'Fev', Meta: 3000, Realizado: 1398 },
  { name: 'Mar', Meta: 2000, Realizado: 9800 },
  { name: 'Abr', Meta: 2780, Realizado: 3908 },
  { name: 'Mai', Meta: 1890, Realizado: 4800 },
  { name: 'Jun', Meta: 2390, Realizado: 3800 },
];

const pieData = [
  { name: 'Risco Alto', value: 400 },
  { name: 'Risco Médio', value: 300 },
  { name: 'Risco Baixo', value: 300 },
  { name: 'Em Análise', value: 200 },
];

export default function DashboardDetalhePage() {
  return (
    // ⬅️ ENVOLVIMENTO CORRETO
    <DashboardLayout>
      <div>
        <Header title="VISÃO GERAL" subtitle="Análise Detalhada dos Processos" />

        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Gráficos de Indicadores</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Card para o Gráfico de Barras */}
            <div className="bg-white p-6 rounded-xl shadow-lg h-96">
              <h3 className="font-extrabold text-xl text-gray-900 mb-4 border-b pb-2">Meta vs. Realizado (Mensal)</h3>
              <div className="h-4/5">
                  <BarChartComponent data={barData} />
              </div>
            </div>

            {/* Card para o Gráfico de Pizza */}
            <div className="bg-white p-6 rounded-xl shadow-lg h-96">
              <h3 className="font-extrabold text-xl text-gray-900 mb-4 border-b pb-2">Distribuição de Riscos</h3>
              <div className="h-4/5">
                  <PieChartComponent data={pieData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}