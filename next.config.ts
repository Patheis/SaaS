// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // A CHAVE MÁGICA PARA GERAÇÃO ESTÁTICA
  output: 'export', 
  
  // Opcional: Configura o prefixo do caminho base para o GitHub Pages
  // Substitua 'contador' pelo nome do seu repositório no GitHub (Ex: 'meu-dashboard-gestao')
  // basePath: '/contador', 
  
  // Desativa o servidor de imagem para garantir compatibilidade com exportação estática
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;