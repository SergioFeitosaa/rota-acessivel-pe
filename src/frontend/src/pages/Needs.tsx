import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Accessibility, Eye, Ear, Brain, Footprints, Building2 } from 'lucide-react';
import clsx from 'clsx';

const needsOptions = [
  { id: 'mobilidade', title: 'Mobilidade', desc: 'Evitar escadas, rampas, facilitar a circulação', icon: Accessibility },
  { id: 'visao', title: 'Visão', desc: 'Piso tátil, áudio, orientação e contraste', icon: Eye },
  { id: 'audicao', title: 'Audição', desc: 'Libras, legendas e conteúdo visual', icon: Ear },
  { id: 'sensorial', title: 'Sensorial', desc: 'Menos ruído, lugares tranquilos e menos estímulos', icon: Brain },
  { id: 'percurso', title: 'Percurso', desc: 'Trajetos curtos e pouca inclinação', icon: Footprints },
  { id: 'estrutura', title: 'Estrutura', desc: 'Banheiro acessível e áreas de descanso', icon: Building2 },
];

export function Needs() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="h-full w-full bg-rota-light flex flex-col pt-12 pb-8 px-5 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => navigate(-1)} className="bg-white p-2 rounded-full shadow-sm text-rota-primary">
          <ArrowLeft size={20} />
        </button>
        <div className="flex gap-1 flex-1 justify-center mr-8">
          <div className="h-1.5 w-8 bg-rota-primary rounded-full"></div>
          <div className="h-1.5 w-8 bg-rota-primary/20 rounded-full"></div>
        </div>
      </div>

      <h1 className="text-2xl font-extrabold text-rota-text mb-2 tracking-tight">
        Como podemos adaptar <br/>seu roteiro?
      </h1>
      <p className="text-sm text-rota-text/70 mb-6 font-medium">
        Selecione o que você precisa.<br />
        Pode escolher mais de uma opção.
      </p>

      {/* Grid options */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        {needsOptions.map(opt => {
          const isSelected = selected.includes(opt.id);
          const Icon = opt.icon;
          return (
            <div 
              key={opt.id}
              onClick={() => toggle(opt.id)}
              className={clsx(
                "bg-white rounded-2xl p-4 cursor-pointer border-2 transition-all shadow-sm",
                isSelected ? "border-rota-primary ring-2 ring-rota-primary/20" : "border-transparent"
              )}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="bg-rota-tag-bg text-rota-primary p-2 rounded-xl">
                  <Icon size={20} />
                </div>
                <div className={clsx(
                  "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors",
                  isSelected ? "border-rota-primary bg-rota-primary" : "border-gray-200"
                )}>
                  {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
              </div>
              <h3 className="font-bold text-rota-text text-sm mb-1">{opt.title}</h3>
              <p className="text-[10px] text-rota-text/60 font-medium leading-tight">{opt.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Footer Actions */}
      <div className="mt-auto flex flex-col gap-4">
        <button 
          onClick={() => navigate('/preferencias')}
          disabled={selected.length === 0}
          className={clsx(
            "py-4 rounded-full font-bold text-base flex items-center justify-center gap-2 transition-colors",
            selected.length > 0 
              ? "bg-rota-primary text-white shadow-lg shadow-rota-primary/30" 
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          )}
        >
          {selected.length > 0 ? "Continuar" : "Escolha ao menos uma opção"} <span className="text-xl">›</span>
        </button>
        
        <button 
          onClick={() => navigate('/roteiros')}
          className="text-rota-primary font-bold text-sm text-center py-2"
        >
          Prefiro explorar primeiro <span className="inline-block ml-1 text-lg leading-none">›</span>
        </button>
      </div>
    </div>
  );
}
