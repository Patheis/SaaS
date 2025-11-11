import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {/* O children agora renderiza o conteúdo de tela cheia (como Login) ou o DashboardLayout (nas outras páginas) */}
        {children}
      </body>
    </html>
  );
}