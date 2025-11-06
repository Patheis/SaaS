// src/components/Dashboard/PieChartComponent.tsx

'use client'; // MANTÉM O USO DE RECHARTS E HOOKS

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// Não precisamos importar tipos de 'data/types.ts' aqui, pois a tipagem será passada via props (para ser flexível).
// O componente precisa apenas de uma tipagem genérica para os dados.

// Tipagem básica para os dados do gráfico de pizza (Ainda necessária para o TypeScript local)
interface ChartData {
    name: string;
    value: number;
    [key: string]: any; // Permite outros campos, como cor
}

interface PieChartComponentProps {
    data: ChartData[];
}

const COLORS = ['#FF8042', '#00C49F', '#FFBB28', '#0088FE']; 

// Tooltip customizado (sem mudanças)
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-300 rounded shadow-md">
        <p className="text-sm font-semibold">{`${payload[0].name} : ${payload[0].value}`}</p>
        <p className="text-xs text-gray-500">{(payload[0].percent * 100).toFixed(2)}%</p>
      </div>
    );
  }

  return null;
};


export default function PieChartComponent({ data }: PieChartComponentProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%" 
          cy="50%" 
          outerRadius={80}
          fill="#8884d8"
          labelLine={false}
          label 
        >
          {/* Asseguramos que o Cell está mapeando corretamente o índice de cores */}
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend layout="vertical" align="right" verticalAlign="middle" wrapperStyle={{ paddingLeft: '10px' }} />
      </PieChart>
    </ResponsiveContainer>
  );
}