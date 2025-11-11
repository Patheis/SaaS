import React from 'react';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

// Este layout contém a Sidebar e o padding de 16 unidades, 
// e só deve ser usado em páginas que PRECISAM da navegação.
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      {/* O pl-16 reserva o espaço da Sidebar */}
      <main className="flex-1 overflow-y-auto pl-16 transition-all duration-300"> 
        {children}
      </main>
    </div>
  );
}