// src/app/configuracoes/page.tsx
'use client';

import Header from '@/components/Layout/Header';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import React, { useState } from 'react';
import { User, Zap, DollarSign, Clock, Settings, GitMerge, MoreHorizontal, Trash2 } from 'lucide-react';
import PaginationControls from '@/components/UI/PaginationControls';

// Dados do Menu de Navegação da Configuração
const menuItems = [
    { id: 'usuarios', label: 'Usuários e Perfis', icon: User },
    { id: 'ia', label: 'Inteligência Artificial', icon: Zap },
    { id: 'financeiro', label: 'Conta e Pagamento', icon: DollarSign },
    { id: 'logs', label: 'Logs de Atividades', icon: Clock },
    { id: 'tarefas', label: 'Configuração de Tarefas', icon: Settings },
    { id: 'integracoes', label: 'Integrações e API', icon: GitMerge, badge: 'Novo' },
];

// Dados Mockados da Tabela de Usuários
const mockUsers = [
    { id: 1, nome: 'José Henrique', perfil: 'Gestor', acessoFinanceiro: true, cadastro: '18/08/2025' },
    { id: 2, nome: 'Maria Clara', perfil: 'Administrador', acessoFinanceiro: false, cadastro: '18/08/2025' },
    { id: 3, nome: 'Suporte ADVBOX', perfil: 'Administrador', acessoFinanceiro: true, cadastro: '18/08/2025' },
    { id: 4, nome: 'Zé Gabriel', perfil: 'Auditor', acessoFinanceiro: false, cadastro: '20/08/2025' },
    { id: 5, nome: 'Usuário Teste', perfil: 'Equipe', acessoFinanceiro: true, cadastro: '21/08/2025' },
];

// --- Componente da Seção de Usuários (Tabela de Dados) ---
const UserSettingsSection = () => {
    // Adicionando lógica básica de paginação para usar o PaginationControls
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const totalFilteredItems = mockUsers.length;
    const totalPages = Math.ceil(totalFilteredItems / itemsPerPage);
    const currentData = mockUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Usuários e Perfis</h2>
            
            {/* Toggle Habilitar registro de acessos */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border">
                <label className="text-lg font-medium text-gray-700">Habilitar registro de acessos</label>
                <label htmlFor="toggle-register" className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="toggle-register" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
            </div>

            <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Colaboradores</h3>
            
            {/* Barra de Ações (Filtros, Adicionar, Buscar) */}
            <div className="flex items-center space-x-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Adicionar novo usuário</span>
                </button>
                {/* Outros filtros e busca... */}
                <select className="px-3 py-2 border border-gray-400 rounded-lg text-gray-900 bg-white">
                    <option className="text-gray-900">Ativos</option>
                    <option className="text-gray-900">Inativos</option>
                </select>
                <select className="px-3 py-2 border border-gray-400 rounded-lg text-gray-900 bg-white">
                    <option className="text-gray-900">Perfil</option>
                    <option className="text-gray-900">Admin</option>
                    <option className="text-gray-900">Gestor</option>
                </select>
                <input type="text" placeholder="Buscar..." className="px-4 py-2 border border-gray-400 rounded-lg flex-1 min-w-[200px] text-gray-900 placeholder-gray-500" />
                <button className="text-gray-500 hover:text-gray-700 p-2 rounded-lg flex items-center space-x-1">
                    <Trash2 className="w-4 h-4" />
                    <span>Limpar</span>
                </button>
            </div>

            {/* Tabela de Colaboradores (AJUSTADA PARA TEMA CLARO) */}
            <div className="overflow-x-auto rounded-xl border border-gray-300 bg-white shadow-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100 border-b border-gray-300">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">NOME</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">PERFIL</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">META DE PONTOS</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">ACESSO FINANCEIRO</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">CADASTRO</th>
                            <th className="px-6 py-4 text-center text-xs font-bold text-gray-800 uppercase tracking-wider">AÇÕES</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {currentData.map((user) => (
                            <tr key={user.id} className="hover:bg-blue-50/50 transition duration-150">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center">
                                    <div className="w-8 h-8 bg-blue-500 rounded-full mr-3 flex items-center justify-center text-xs font-bold text-white">
                                        {user.nome.charAt(0)}
                                    </div>
                                    {user.nome}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.perfil}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">N/A</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <label htmlFor={`toggle-access-${user.id}`} className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" id={`toggle-access-${user.id}`} className="sr-only peer" defaultChecked={user.acessoFinanceiro} />
                                        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                    </label>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.cadastro}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <button className="text-gray-500 hover:text-blue-600 transition-colors p-1 rounded">
                                        <MoreHorizontal className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Controle de Paginação */}
            <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                currentItemsCount={currentData.length}
                totalFilteredItems={totalFilteredItems}
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};


export default function ConfiguracoesPage() {
    const [activeSection, setActiveSection] = useState('usuarios'); 

    const renderContent = () => {
        switch (activeSection) {
            case 'usuarios':
                return <UserSettingsSection />;
            case 'ia':
                return <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Configurações de Inteligência Artificial</h2>;
            case 'integracoes':
                return <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Gerenciamento de APIs</h2>;
            case 'financeiro':
                return <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Conta e Pagamento</h2>;
            case 'logs':
                return <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Logs de Atividades</h2>;
            case 'tarefas':
                return <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Configuração de Tarefas</h2>;
            default:
                return null;
        }
    };

    return (
        <DashboardLayout>
            <div>
                <Header title="Configurações do Sistema" subtitle="Ajustes de Usuários, Finanças e Integrações" />
                
                <div className="p-8">
                    
                    {/* Layout Principal de 2 Colunas (Menu de Configurações na Esquerda) */}
                    <div className="flex bg-white rounded-xl shadow-lg border border-gray-200 min-h-[700px]">
                        
                        {/* Coluna 1: Menu Lateral de Configurações (Navegação Interna) */}
                        <nav className="w-1/4 p-6 border-r bg-gray-50 rounded-l-xl">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 border-b pb-3">Opções</h3>
                            {menuItems.map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveSection(item.id)}
                                    className={`w-full text-left flex items-center p-3 my-1 rounded-lg transition-colors text-sm font-medium ${
                                        activeSection === item.id
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    <item.icon className={`w-5 h-5 mr-3 ${activeSection === item.id ? 'text-white' : 'text-gray-500'}`} />
                                    <span>{item.label}</span>
                                    {item.badge && (
                                        <span className="ml-auto text-xs font-semibold px-2 py-0.5 rounded-full bg-orange-100 text-orange-600">
                                            {item.badge}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </nav>

                        {/* Coluna 2: Conteúdo da Configuração */}
                        <div className="flex-1 p-8">
                            {renderContent()}
                        </div>
                    </div>

                </div>
            </div>
        </DashboardLayout>
    );
}