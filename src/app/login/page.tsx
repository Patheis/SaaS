'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LogIn, Mail, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation'; // ⬅️ 1. IMPORTAR ROUTER

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const router = useRouter(); // ⬅️ 2. INICIALIZAR ROUTER

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulação de login
    setTimeout(() => {
      setLoading(false);
      
      // Validação usando credenciais mockadas
      if (email === 'teste@com' && password === '123') {
        
        // ⬅️ 3. REDIRECIONAMENTO CORRIGIDO: usa router.push para a rota raiz (/).
        // O Next.js tratará automaticamente o prefixo /SaaS/ se você estiver no GitHub Pages.
        router.push('/');
        
      } else {
        alert('Credenciais inválidas. Tente novamente.');
      }
    }, 1500);
  };

  return (
    // Fundo cinza e altura total
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      
      {/* Card de Login Centralizado */}
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-gray-200">
        
        {/* Cabeçalho */}
        <div className="text-center mb-8">
          <LogIn className="w-10 h-10 mx-auto text-blue-600 mb-3" />
          <h1 className="text-3xl font-extrabold text-gray-900">
            Acesso ao Sistema
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            NOME DA EMPRESA - Dashboard de Gestão
          </p>
        </div>
        
        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Campo de Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              disabled={loading}
            />
          </div>

          {/* Campo de Senha */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              disabled={loading}
            />
          </div>

          {/* Botão de Submissão */}
          <button
            type="submit"
            className={`w-full py-3 px-4 font-bold text-white rounded-lg transition-colors duration-200 shadow-md ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-orange-600 hover:bg-orange-700'
            }`}
            disabled={loading}
          >
            {loading ? (
              <span className="animate-pulse">ENTRANDO...</span> 
            ) : (
              'ENTRAR NO DASHBOARD'
            )}
          </button>
        </form>

        {/* Rodapé com Link de Recuperação */}
        <div className="mt-6 text-center">
          <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-80o transition-colors">
            Esqueceu sua senha?
          </Link>
        </div>
      </div>
    </div>
  );
}
