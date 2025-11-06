// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // A CHAVE MÁGICA PARA GERAÇÃO ESTÁTICA
  output: 'export', 
  
  // CORREÇÃO: DESCOMENTE E USE O NOME DO SEU REPOSITÓRIO!
  basePath: '/SaaS', // <--- CORRIGIDO
  
  // Desativa o servidor de imagem para garantir compatibilidade com exportação estática
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;