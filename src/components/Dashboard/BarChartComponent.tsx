// src/components/Dashboard/BarChartComponent.tsx
'use client'; 

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Tipagem básica para os dados de gráfico de barras (usando interface local por simplicidade)
interface BarData {
    name: string;
    Meta: number;
    Realizado: number;
    [key: string]: string | number;
}

interface BarChartComponentProps {
    data: BarData[];
}

export default function BarChartComponent({ data }: BarChartComponentProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis dataKey="name" stroke="#333" />
        <YAxis stroke="#333" />
        <Tooltip cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }} contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}/>
        <Legend />
        <Bar dataKey="Meta" fill="#ff6347" /> 
        <Bar dataKey="Realizado" fill="#00bfff" /> 
      </BarChart>
    </ResponsiveContainer>
  );
}