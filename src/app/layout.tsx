// src/app/layout.tsx (Versão Simplificada)
import './globals.css';
import Sidebar from '@/components/Layout/Sidebar'; // Apenas a Sidebar

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="flex h-screen bg-gray-50">
          <Sidebar />
          
          {/* pl-16 define o espaçamento fixo para a Sidebar de 16 unidades de largura (w-16) */}
          <main className="flex-1 overflow-y-auto pl-16 transition-all duration-300"> 
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}