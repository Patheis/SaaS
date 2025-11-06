// src/components/Layout/Header.tsx
import { User } from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  const currentDate = new Date().toLocaleDateString('pt-BR');

  return (
    <header className="bg-white p-6 border-b shadow-sm sticky top-0 z-40 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-500">Data: {currentDate}</span>
        <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
          <User className="w-6 h-6 text-blue-500" />
          <span className="text-sm font-medium text-gray-700">João Vitor</span> 
        </div>
      </div>
    </header>
  );
}