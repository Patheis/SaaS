// src/components/Dashboard/ActionIndicator.tsx
import { Target } from 'lucide-react';
import { ActionData } from '@/data/types'; // Importando a tipagem centralizada!

// A tipagem local do componente usa o tipo importado
interface ActionIndicatorProps {
  data: ActionData;
}

export default function ActionIndicator({ data }: ActionIndicatorProps) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-orange-500 max-w-xs transition-shadow hover:shadow-xl">
      
      {/* Título e Ícone */}
      <div className="flex items-center space-x-2 text-gray-700 mb-3">
        <Target className="w-5 h-5 text-orange-500" />
        <h3 className="font-semibold text-lg uppercase">Ações a Concluir</h3>
      </div>

      {/* Indicador Principal (Total) */}
      <div className="text-5xl font-extrabold text-orange-600 mb-4 ml-1">
        {data.total}
      </div>

      {/* Detalhes (Vencidas / Concluídas) */}
      <div className="space-y-1 text-sm pt-2 border-t border-gray-100">
        <div className="flex justify-between items-center text-red-500">
          <span className="font-medium">Vencidas</span>
          <span className="font-bold">{data.vencidas}</span>
        </div>
        <div className="flex justify-between items-center text-green-600">
          <span className="font-medium">Concluídas</span>
          <span className="font-bold">{data.concluidas}</span>
        </div>
      </div>
      
      {/* Botão de detalhe, simulando a interação do vídeo */}
      <button className="mt-4 w-full text-center text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors">
        Ver Detalhes →
      </button>
    </div>
  );
}