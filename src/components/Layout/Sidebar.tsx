// src/components/Layout/Sidebar.tsx

import Link from 'next/link';
import { Home, ClipboardList, AlertTriangle, Settings, Layout, BarChart3, Users } from 'lucide-react';

const navItems = [
  { href: '/', icon: Home, label: 'Início' },
  { href: '/dashboard-detalhe', icon: BarChart3, label: 'Conclusao' }, 
  { href: '/processos', icon: ClipboardList, label: 'Processos' },
  { href: '/gestao-sistema', icon: Users, label: 'Gestao' },
  { href: '/configuracoes', icon: Settings, label: 'Configurações' },
];

export default function Sidebar() {
  // Configuração para o modo FIXO e compacto (w-16)
  return (
    <nav className={`fixed left-0 top-0 h-full w-16 bg-gray-800 text-white flex flex-col items-center py-4 space-y-4 shadow-xl z-50`}>
      
      <div className={`flex items-center justify-center mb-6 text-2xl font-bold text-orange-500`}>
        {/* Logo/Ícone Fixo */}
        😁
      </div>

      {/* Ítens de Navegação */}
      {navItems.map((item) => (
        <Link 
          key={item.href} 
          href={item.href} 
          className={`flex items-center p-3 hover:bg-gray-700 rounded-lg transition-colors mx-2 justify-center relative group`}
        >
          <item.icon className="w-6 h-6 flex-shrink-0" />
          
          {/* Tooltip no hover (opcional) */}
          <span className="sr-only group-hover:not-sr-only group-hover:absolute group-hover:left-full group-hover:ml-4 group-hover:bg-gray-700 group-hover:text-white group-hover:px-3 group-hover:py-1 group-hover:rounded group-hover:whitespace-nowrap">
            {item.label}
          </span>
        </Link>
      ))}

      {/* Removemos o botão de Expansão/Colapso */}
    </nav>
  );
}