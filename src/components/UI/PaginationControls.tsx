// src/components/UI/PaginationControls.tsx
'use client';

import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  currentItemsCount: number; // Quantidade de itens visíveis na página atual
  totalFilteredItems: number; // Total de itens após a filtragem
  itemsPerPage: number;
  setItemsPerPage: (count: number) => void;
  setCurrentPage: (page: number) => void;
}

const ITEMS_OPTIONS = [5, 10, 20, 50]; // Opções de quantidade

export default function PaginationControls({
  currentPage,
  totalPages,
  currentItemsCount,
  totalFilteredItems,
  itemsPerPage,
  setItemsPerPage,
  setCurrentPage,
}: PaginationProps) {

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Resetar para a primeira página ao mudar a quantidade
  };
  
  const handlePageChange = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentPage(Math.max(currentPage - 1, 1));
    } else {
      setCurrentPage(Math.min(currentPage + 1, totalPages));
    }
  };

  return (
    <div className="mt-4 flex justify-between items-center text-sm text-gray-600 border-t pt-4 border-gray-100">
      
      {/* Lado Esquerdo: Indicador de Quantidade e Seletor de Itens */}
      <div className="flex items-center space-x-3"> 
        <span>Mostrando {currentItemsCount} de {totalFilteredItems} itens</span>
        
        {/* Seletor de Itens por Página */}
        <select 
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          className="px-2 py-1 border border-gray-400 bg-white rounded-md text-gray-900"
        >
          {ITEMS_OPTIONS.map(value => (
            <option key={value} value={value} className="text-gray-900">
              {value} 
            </option>
          ))}
        </select>
      </div>

      {/* Lado Direito: Botões Anterior/Próxima */}
      <div className="space-x-2">
        <button 
          onClick={() => handlePageChange('prev')} 
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100 transition-colors"
        >
          Anterior
        </button>
        <button 
          onClick={() => handlePageChange('next')} 
          disabled={currentPage === totalPages || totalFilteredItems === 0}
          className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100 transition-colors"
        >
          Próxima
        </button>
      </div>
    </div>
  );
}