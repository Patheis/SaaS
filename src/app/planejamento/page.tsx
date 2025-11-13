// src/app/planejamento/page.tsx

'use client';

import Header from '@/components/Layout/Header';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import React, { useState } from 'react';
import { Edit, Users, ClipboardList, Shield, DollarSign, Calendar, ChevronLeft, ChevronRight, Menu, CheckCircle, ChevronDown, X } from 'lucide-react'; 

// Dados do Menu de Navegação da Configuração (baseado no seu escopo)
const planejamentoMenu = [
    { id: 'escopo', label: 'Definição do Escopo', icon: Edit },
    { id: 'equipe', label: 'Definição de Equipe', icon: Users },
    { id: 'materialidade', label: 'Definição de Materialidade', icon: ClipboardList },
    { id: 'riscos', label: 'Riscos e Controle', icon: Shield },
    { id: 'balancete', label: 'Importação Balancete', icon: DollarSign },
];

// Componente para simular um evento no calendário
const CalendarEvent = ({ title, day }: { title: string, day: number }) => (
    <div className="bg-orange-500/90 text-white text-xs p-1 rounded mt-1 shadow-md hover:shadow-lg transition duration-200">
        {title}
    </div>
);

// Componente principal que renderiza o conteúdo (o calendário)
const PlanningContent = () => {
    // ESTADOS PARA FILTROS
    const [showConcluidos, setShowConcluidos] = useState(true);
    const [selectedStatus, setSelectedStatus] = useState('pendentes'); 
    const [selectedDate, setSelectedDate] = useState('Data do compromisso'); 
    
    const daysInMonth = Array.from({ length: 35 }, (_, i) => ({
        day: i < 7 ? i + 26 : (i - 7) % 30 + 1,
        isEvent: [10, 11, 23].includes((i - 7) % 30 + 1),
        isCurrentMonth: i >= 7 && i < 37,
    }));

    return (
        <div className="space-y-6">
            {/* Cabeçalho do Calendário */}
            <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl border border-gray-200">
                <div className="flex items-center space-x-2">
                    <button className="text-gray-700 hover:text-gray-900 p-1 rounded"><ChevronLeft /></button>
                    <button className="text-gray-700 hover:text-gray-900 p-1 rounded"><ChevronRight /></button>
                    <span className="text-xl font-semibold text-gray-900">Novembro 2025</span>
                </div>
                <div className="flex space-x-2">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm shadow">Mês</button>
                    <button className="text-gray-700 hover:bg-gray-200 px-3 py-1 rounded text-sm">Semana</button>
                    <button className="text-gray-700 hover:bg-gray-200 px-3 py-1 rounded text-sm">Dia</button>
                </div>
            </div>

            {/* Layout de Agenda e Status (Filtros Laterais) */}
            <div className="flex space-x-6">
                
                {/* Agenda e Status (Painel de Filtros - FINALIZADO) */}
                <div className="w-1/4 p-4 bg-gray-50 rounded-xl border space-y-6">
                    <h4 className="font-bold text-gray-800 border-b pb-2">Agenda</h4>
                    <div className="text-sm space-y-3">
                        
                        {/* 1. Filtro Botão com X (Usuário Fixo) */}
                        <div className="relative p-2 bg-gray-700 text-white rounded-lg font-medium flex justify-between items-center">
                            <div className='flex items-center space-x-2'>
                                <Users className="w-4 h-4" />
                                <span>ADMIN</span>
                            </div>
                            <button className="text-gray-300 hover:text-white p-1 rounded" onClick={() => alert("Remover filtro de usuário")}>
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* 2. Filtro Dropdown (Data do Compromisso) */}
                        <div className="relative">
                            <select 
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="w-full pl-3 pr-8 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium text-center"
                            >
                                <option className="text-gray-900">Data do compromisso</option>
                                <option className="text-gray-900">Data de Criação</option>
                                <option className="text-gray-900">Prazo Final</option>
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                        </div>
                        
                        {/* 3. Checkbox (Mostrar Concluídos) */}
                        <div className="flex items-center pt-2">
                            <input 
                                type="checkbox" 
                                id="show-concluidos"
                                checked={showConcluidos} 
                                onChange={() => setShowConcluidos(!showConcluidos)}
                                className="form-checkbox h-4 w-4 text-green-600 border-gray-400 rounded focus:ring-green-500" 
                            />
                            <label htmlFor="show-concluidos" className="ml-2 text-gray-800 font-medium cursor-pointer">Mostrar concluídos</label>
                        </div>
                    </div>
                    
                    {/* Status (Filtros de Radio Button - CORRIGIDO) */}
                    <h4 className="font-bold text-gray-800 border-t pt-4 mt-6">Status</h4>
                    <ul className="text-sm space-y-3">
                        {['Atrasadas', 'Concluídas', 'Pendentes'].map(status => {
                            const statusKey = status.toLowerCase() as 'atrasadas' | 'concluidas' | 'pendentes';
                            let colorClass = '';
                            let accentColorString = ''; 
                            
                            // ⬅️ LÓGICA DE CORREÇÃO FINAL
                            if (statusKey === 'atrasadas') {
                                colorClass = 'text-red-500';
                                accentColorString = 'red'; 
                            } else if (statusKey === 'pendentes') {
                                colorClass = 'text-yellow-500'; 
                                accentColorString = 'orange'; 
                            } else if (statusKey === 'concluidas') {
                                colorClass = 'text-green-500';
                                accentColorString = 'green'; // ⬅️ VAI SER VERDE
                            }
                            
                            return (
                                <li key={statusKey} className="flex items-center cursor-pointer hover:bg-gray-200 p-1 rounded transition-colors" onClick={() => setSelectedStatus(statusKey)}>
                                    <input 
                                        type="radio" 
                                        name="status-filter" 
                                        checked={selectedStatus === statusKey}
                                        onChange={() => setSelectedStatus(statusKey)}
                                        className={`form-radio h-4 w-4 border-gray-300 ${colorClass} focus:ring-2`}
                                        style={{ accentColor: accentColorString }} // ⬅️ CORREÇÃO
                                    />
                                    <span className={`ml-3 text-gray-800 font-medium ${selectedStatus === statusKey ? 'font-bold' : ''}`}>
                                        {status}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                
                {/* Calendário Principal (Grid) - Sem alteração */}
                <div className="flex-1">
                    {/* Headers dos Dias */}
                    <div className="grid grid-cols-7 text-center font-semibold text-gray-600 border-b pb-2">
                        {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
                            <div key={day} className="py-2">{day}</div>
                        ))}
                    </div>
                    
                    {/* Células do Calendário */}
                    <div className="grid grid-cols-7 border-collapse">
                        {daysInMonth.map((dayData, index) => (
                            <div 
                                key={index} 
                                className={`font-bold text-gray-800 border border-gray-200 h-28 p-1 transition-colors ${
                                    dayData.isCurrentMonth 
                                        ? 'bg-white hover:bg-blue-50' 
                                        : 'bg-gray-50 text-gray-400'
                                }`}
                            >
                                <div className="text-sm font-medium">
                                    {dayData.day}
                                    {dayData.isEvent && (
                                        <span className="w-2 h-2 bg-blue-600 rounded-full inline-block ml-1"></span>
                                    )}
                                </div>
                                
                                {dayData.day === 10 && dayData.isCurrentMonth && <CalendarEvent title="Revisão Contestações" day={10} />}
                                {dayData.day === 23 && dayData.isCurrentMonth && <CalendarEvent title="Deadline Balancete" day={23} />}
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default function PlanejamentoPage() {
    const [activeSection, setActiveSection] = useState('calendario');

    const renderContent = () => {
        switch (activeSection) {
            case 'calendario':
                return <PlanningContent />;
            case 'escopo':
                return <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Definição do Escopo</h2>;
            case 'equipe':
                return <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Definição de Equipe</h2>;
            default:
                return <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">{planejamentoMenu.find(item => item.id === activeSection)?.label || 'Detalhes do Planejamento'}</h2>;
        }
    };

    return (
        <DashboardLayout>
            <div>
                <Header title="Planejamento de Projetos" subtitle="Controle de Escopo, Riscos e Cronograma" />
                
                <div className="p-8">
                    
                    {/* Layout Principal de 2 Colunas */}
                    <div className="flex bg-white rounded-xl shadow-lg border border-gray-200 min-h-[850px]">
                        
                        {/* Coluna 1: Menu Lateral de Planejamento */}
                        <nav className="w-1/5 p-6 border-r bg-gray-50 rounded-l-xl">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 border-b pb-3">Opções</h3>
                            
                            {/* Adiciona o item Calendário ao menu interno */}
                            <button
                                key="calendario"
                                onClick={() => setActiveSection('calendario')}
                                className={`w-full text-left flex items-center p-3 my-1 rounded-lg transition-colors text-sm font-medium ${
                                    activeSection === 'calendario'
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                <Calendar className={`w-5 h-5 mr-3 ${activeSection === 'calendario' ? 'text-white' : 'text-gray-500'}`} />
                                <span>Calendário Geral</span>
                            </button>

                            {planejamentoMenu.map(item => (
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
                                </button>
                            ))}
                        </nav>

                        {/* Coluna 2: Conteúdo Principal (Calendário) */}
                        <div className="flex-1 p-8">
                            {renderContent()}
                        </div>
                    </div>

                </div>
            </div>
        </DashboardLayout>
    );
}