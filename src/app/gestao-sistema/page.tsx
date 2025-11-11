'use client';

import Header from '@/components/Layout/Header';
import React, { useState, useMemo } from 'react';
import { Search, User, CheckCircle, RotateCcw } from 'lucide-react';
import PaginationControls from '@/components/UI/PaginationControls'; 
import DashboardLayout from '@/components/Layout/DashboardLayout'; // ⬅️ IMPORTADO!

// NOTA: A tipagem LogEntry precisa estar em src/data/types.ts para o projeto compilar
interface LogEntry {
  id: number;
  usuario: string;
  nome: string;
  responsabilidade: string;
  acao: string;
  data: string;
  status: 'Sucesso' | 'Falha' | 'Aviso';
}

// Dados Mockados de Log (Simulando uma API)
const mockLogs: LogEntry[] = [
  { id: 1, usuario: 'jvictor', nome: 'João Victor', responsabilidade: 'Admin', acao: 'Login no Sistema', data: '2025-11-06 09:00', status: 'Sucesso' },
  { id: 2, usuario: 'amaria', nome: 'Ana Maria', responsabilidade: 'Auditor', acao: 'Download de Relatório', data: '2025-11-06 09:15', status: 'Sucesso' },
  { id: 3, usuario: 'carlos', nome: 'Carlos Silva', responsabilidade: 'Equipe', acao: 'Tentativa de Acesso', data: '2025-11-06 09:20', status: 'Falha' },
  { id: 4, usuario: 'jvictor', nome: 'João Victor', responsabilidade: 'Admin', acao: 'Criação de Novo Usuário', data: '2025-11-06 10:30', status: 'Sucesso' },
  { id: 5, usuario: 'amaria', nome: 'Ana Maria', responsabilidade: 'Auditor', acao: 'Alteração de Permissão', data: '2025-11-06 11:00', status: 'Aviso' },
  { id: 6, usuario: 'teste', nome: 'Usuário Teste', responsabilidade: 'Equipe', acao: 'Relatório Gerencial', data: '2025-11-06 11:30', status: 'Sucesso' },
  { id: 7, usuario: 'carlos', nome: 'Carlos Silva', responsabilidade: 'Equipe', acao: 'Logout', data: '2025-11-06 12:00', status: 'Sucesso' },
];

// Componente da Tabela de Logs
const LogsTable = ({ data }: { data: LogEntry[] }) => {
    const getStatusColor = (status: LogEntry['status']) => {
        if (status === 'Falha') return 'bg-red-100 text-red-800 border-red-500';
        if (status === 'Sucesso') return 'bg-green-100 text-green-800 border-green-500';
        return 'bg-yellow-100 text-yellow-800 border-yellow-500';
    };

    return (
        <div className="overflow-x-auto shadow-lg rounded-xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100 border-b border-gray-300"> 
                    <tr>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-800 uppercase tracking-wider">Usuário</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-800 uppercase tracking-wider">Nome</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-800 uppercase tracking-wider">Responsabilidade</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-800 uppercase tracking-wider">Ação Executada</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-800 uppercase tracking-wider">Data/Hora</th>
                        <th className="px-6 py-4 text-center text-sm font-bold text-gray-800 uppercase tracking-wider">Status</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100"> 
                    {data.map((item) => (
                        <tr key={item.id} className="hover:bg-blue-50/50 transition duration-150"> 
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.usuario}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.nome}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.responsabilidade}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.acao}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.data}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${getStatusColor(item.status)} shadow-sm`}>
                                    {item.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


// Componente da Página (GestaoSistemaPage)
export default function GestaoSistemaPage() {
  const [searchText, setSearchText] = useState('');
  const [selectedResponsabilidade, setSelectedResponsabilidade] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); 

  const filteredLogs = useMemo(() => {
    let list = mockLogs;

    if (searchText) {
      list = list.filter(p => p.nome.toLowerCase().includes(searchText.toLowerCase()) || p.acao.toLowerCase().includes(searchText.toLowerCase()));
    }
    if (selectedResponsabilidade) {
      list = list.filter(p => p.responsabilidade === selectedResponsabilidade);
    }
    if (selectedStatus) {
      list = list.filter(p => p.status === selectedStatus);
    }

    return list;
  }, [searchText, selectedResponsabilidade, selectedStatus]);

  const totalPages = Math.ceil(filteredLogs.length / itemsPerPage);
  const currentData = filteredLogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  
  const responsabilidadesUnicas = useMemo(() => ['Admin', 'Auditor', 'Equipe'], []);
  const statusLogUnicos = useMemo(() => ['Sucesso', 'Falha', 'Aviso'], []);

  return (
    // ⬅️ ENVOLVIMENTO CORRETO
    <DashboardLayout>
      <div>
        <Header title="Gestão do Sistema" subtitle="Logs de Acesso e Auditoria" />
        
        <div className="p-8">
          
          {/* Componente de Filtros (Sem alteração) */}
          <div className="bg-white p-4 rounded-xl shadow-lg flex space-x-4 mb-6 items-center border border-gray-200">
              <h3 className="text-sm font-semibold uppercase text-gray-600">Filtros de Log:</h3>

              {/* Filtro de Busca */}
              <div className="relative flex items-center">
                  <input 
                      type="text" 
                      placeholder="Buscar Usuário ou Ação..."
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-400 bg-white rounded-md text-sm focus:ring-blue-500 focus:border-blue-500 placeholder-gray-700 text-gray-900"
                  />
                  <Search className="w-4 h-4 text-gray-900 absolute left-3" />
              </div>

              {/* Filtro de Responsabilidade */}
              <div className="relative flex items-center">
                  <select 
                      value={selectedResponsabilidade}
                      onChange={(e) => setSelectedResponsabilidade(e.target.value)}
                      className="pl-8 pr-4 py-2 border border-gray-400 bg-white rounded-md text-sm text-gray-900"
                  >
                      <option value="" className="text-gray-900">TODAS RESPONSABILIDADES</option>
                      {responsabilidadesUnicas.map(r => <option key={r} value={r} className="text-gray-900">{r}</option>)}
                  </select>
                  <User className="w-4 h-4 text-gray-900 absolute left-2" />
              </div>

              {/* Filtro de Status do Log */}
              <div className="relative flex items-center">
                  <select 
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="pl-8 pr-4 py-2 border border-gray-400 bg-white rounded-md text-sm text-gray-900"
                  >
                      <option value="" className="text-gray-900">TODOS OS STATUS</option>
                      {statusLogUnicos.map(s => <option key={s} value={s} className="text-gray-900">{s}</option>)}
                  </select>
                  <CheckCircle className="w-4 h-4 text-gray-900 absolute left-2" />
              </div>

              <button onClick={() => { setSearchText(''); setSelectedResponsabilidade(''); setSelectedStatus(''); setCurrentPage(1); }}
                  className="ml-4 text-sm font-semibold text-gray-500 hover:text-gray-700 transition-colors flex items-center space-x-1"
              >
                  <RotateCcw className="w-4 h-4" />
                  <span>Limpar Filtros</span>
              </button>
          </div>

          {/* Tabela de Logs */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <LogsTable data={currentData} />
              
              {/* SUBSTITUIÇÃO PELA PAGINAÇÃO REUTILIZÁVEL */}
              <PaginationControls
                  currentPage={currentPage}
                  totalPages={totalPages}
                  currentItemsCount={currentData.length}
                  totalFilteredItems={filteredLogs.length}
                  itemsPerPage={itemsPerPage}
                  setItemsPerPage={setItemsPerPage}
                  setCurrentPage={setCurrentPage}
              />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}