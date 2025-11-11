'use client'; 

import Header from '@/components/Layout/Header';
import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Zap, MoreHorizontal, Trash2 } from 'lucide-react';
import { Processo, ProcessoStatus } from '@/data/types'; // Tipagem

import PaginationControls from '@/components/UI/PaginationControls'; // Importa o componente de paginação
import DashboardLayout from '@/components/Layout/DashboardLayout'; // ⬅️ IMPORTADO!

// Dados Mockados
const mockProcessos: Processo[] = [
  { id: 1, item: 'Análise de Risco Regulatório', dataCriacao: '2025-05-01', processo: 'Processo A', status: 'Aberto', previsao: 'Alta' },
  { id: 2, item: 'Auditoria de Segurança Trimestral', dataCriacao: '2025-05-15', processo: 'Processo B', status: 'Concluído', previsao: 'Média' },
  { id: 3, item: 'Revisão de Compliance e Políticas', dataCriacao: '2025-06-10', processo: 'Processo A', status: 'Em Análise', previsao: 'Baixa' },
  { id: 4, item: 'Treinamento em Novas Ferramentas', dataCriacao: '2025-07-01', processo: 'Processo C', status: 'Aberto', previsao: 'Alta' },
  { id: 5, item: 'Migração de Dados Legados', dataCriacao: '2025-07-20', processo: 'Processo B', status: 'Concluído', previsao: 'Média' },
  { id: 6, item: 'Elaboração de Relatório Final', dataCriacao: '2025-08-05', processo: 'Processo A', status: 'Aberto', previsao: 'Baixa' },
  { id: 7, item: 'Validação de Escopo', dataCriacao: '2025-09-10', processo: 'Processo C', status: 'Em Análise', previsao: 'Média' },
];

// Componente de Tabela
const ProcessosTable = ({ data }: { data: Processo[] }) => {
    const getStatusColor = (status: ProcessoStatus) => {
        if (status === 'Aberto') return 'bg-red-100 text-red-800 border-red-500';
        if (status === 'Concluído') return 'bg-green-100 text-green-800 border-green-500';
        return 'bg-yellow-100 text-yellow-800 border-yellow-500';
    };

    return (
        <div className="overflow-x-auto shadow-lg rounded-xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100 border-b border-gray-300"> 
                    <tr>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-800 uppercase tracking-wider">Item</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-800 uppercase tracking-wider">Data Criação</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-800 uppercase tracking-wider">Processo</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-800 uppercase tracking-wider">Previsões</th>
                        <th className="px-6 py-4 text-center text-sm font-bold text-gray-800 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-4 text-center text-sm font-bold text-gray-800 uppercase tracking-wider">Ações</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100"> 
                    {data.map((item) => (
                        <tr key={item.id} className="hover:bg-blue-50/50 transition duration-150"> 
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.item}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.dataCriacao}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.processo}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.previsao}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${getStatusColor(item.status)} shadow-sm`}>
                                    {item.status}
                                </span>
                            </td>
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
    );
};


// --- Componente da Página (ProcessosPage) ---

export default function ProcessosPage() {
  const [searchText, setSearchText] = useState('');
  const [selectedProcesso, setSelectedProcesso] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Estado para itens por página

  const filteredProcessos = useMemo(() => {
    let list = mockProcessos;

    if (searchText) {
      list = list.filter(p => p.item.toLowerCase().includes(searchText.toLowerCase()));
    }
    if (selectedProcesso) {
      list = list.filter(p => p.processo === selectedProcesso);
    }
    if (selectedStatus) {
      list = list.filter(p => p.status === selectedStatus);
    }

    return list;
  }, [searchText, selectedProcesso, selectedStatus]);

  const totalPages = Math.ceil(filteredProcessos.length / itemsPerPage);
  const currentData = filteredProcessos.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const processosUnicos = useMemo(() => ['Processo A', 'Processo B', 'Processo C'], []);
  const statusUnicos = useMemo(() => ['Aberto', 'Concluído', 'Em Análise'], []);

  return (
    // ⬅️ ENVOLVIMENTO CORRETO
    <DashboardLayout>
      <div>
        <Header title="Gestão de Processos" subtitle="Monitoramento e Controle de Itens" />
        
        <div className="p-8">
          
          {/* Componente de Filtros (Com alto contraste e funcionalidade) */}
          <div className="bg-white p-4 rounded-xl shadow-lg flex space-x-4 mb-6 items-center border border-gray-200">
              
              <h3 className="text-sm font-semibold uppercase text-gray-600">Filtros Ativos:</h3>

              {/* Filtro de Busca (Search) */}
              <div className="relative flex items-center">
                  <input 
                      type="text" 
                      placeholder="Buscar Item..."
                      value={searchText}
                      onChange={(e) => {
                          setSearchText(e.target.value);
                          setCurrentPage(1);
                      }}
                      className="pl-10 pr-4 py-2 border border-gray-400 bg-white rounded-md text-sm focus:ring-blue-500 focus:border-blue-500 placeholder-gray-700 text-gray-900" 
                  />
                  <Search className="w-4 h-4 text-gray-900 absolute left-3" />
              </div>

              {/* Filtro de Processos */}
              <div className="relative flex items-center">
                  <select 
                      value={selectedProcesso}
                      onChange={(e) => {
                          setSelectedProcesso(e.target.value);
                          setCurrentPage(1);
                      }}
                      className="pl-8 pr-4 py-2 border border-gray-400 bg-white rounded-md text-sm text-gray-900" 
                  >
                      <option value="" className="text-gray-900">TODOS OS PROCESSOS</option>
                      {processosUnicos.map(p => <option key={p} value={p} className="text-gray-900">{p}</option>)}
                  </select>
                  <SlidersHorizontal className="w-4 h-4 text-gray-900 absolute left-2" />
              </div>

              {/* Filtro de Status */}
              <div className="relative flex items-center">
                  <select 
                      value={selectedStatus}
                      onChange={(e) => {
                          setSelectedStatus(e.target.value);
                          setCurrentPage(1);
                      }}
                      className="pl-8 pr-4 py-2 border border-gray-400 bg-white rounded-md text-sm text-gray-900" 
                  >
                      <option value="" className="text-gray-900">TODOS OS STATUS</option>
                      {statusUnicos.map(s => <option key={s} value={s} className="text-gray-900">{s}</option>)}
                  </select>
                  <Zap className="w-4 h-4 text-gray-900 absolute left-2" />
              </div>

              {/* Botão Limpar Filtros (Com ícone Trash2) */}
              <button 
                  onClick={() => {
                      setSearchText('');
                      setSelectedProcesso('');
                      setSelectedStatus('');
                      setCurrentPage(1);
                  }}
                  className="ml-4 text-sm font-semibold text-gray-500 hover:text-gray-700 transition-colors flex items-center space-x-1"
              >
                  <Trash2 className="w-4 h-4" /> 
                  <span>Limpar Filtros</span>
              </button>

          </div>

          {/* Componente de Tabela e Paginação */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <ProcessosTable data={currentData} />
              
              {/* Componente de Paginação Reutilizável */}
              <PaginationControls
                  currentPage={currentPage}
                  totalPages={totalPages}
                  currentItemsCount={currentData.length}
                  totalFilteredItems={filteredProcessos.length}
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