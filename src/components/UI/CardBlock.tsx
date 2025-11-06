// src/components/UI/CardBlock.tsx
import Link from 'next/link';
// Removida importação de LucideIcon, pois o tipo é definido em ModuleCard (types.ts)
import { ModuleCard } from '@/data/types'; // Importando a tipagem centralizada!

// Definimos a interface do componente usando a tipagem importada.
// NOTE: Estamos usando o nome 'Icon' para o componente, por isso a renomeação é feita na desestruturação.
interface CardBlockProps {
    title: ModuleCard['title'];
    subtitle: ModuleCard['subtitle'];
    bgColor: ModuleCard['bgColor'];
    icon: ModuleCard['icon']; 
    link: ModuleCard['link'];
}

export default function CardBlock({ title, subtitle, bgColor, icon: Icon, link }: CardBlockProps) {
  return (
    <Link href={link} 
          className={`flex flex-col justify-between p-6 h-48 ${bgColor} text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer`}
    >
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-bold uppercase tracking-wider">{title}</h2>
        <Icon className="w-8 h-8 opacity-70" />
      </div>
      <p className="text-sm opacity-90">{subtitle}</p>
      
      <div className="self-end mt-4">
        <span className="flex items-center text-sm font-semibold">
          Acessar <span className="ml-1">→</span>
        </span>
      </div>
    </Link>
  );
}