import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Footprints, Clock, Building2, Brain, Accessibility } from 'lucide-react';
import clsx from 'clsx';

const prefOptions = [
  { 
    id: 'curtos', 
    title: 'Trajetos mais curtos', 
    desc: 'Percursos de menor distância e com menos deslocamento.', 
    icon: Footprints,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Rua_do_Bom_Jesus_-_Recife.jpg/400px-Rua_do_Bom_Jesus_-_Recife.jpg'
  },
  { 
    id: 'pausas', 
    title: 'Mais pausas', 
    desc: 'Locais com bancos, áreas de descanso e sombra.', 
    icon: Clock,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Pra%C3%A7a_Rio_Branco_%28Marco_Zero%29_-_Recife.jpg/400px-Pra%C3%A7a_Rio_Branco_%28Marco_Zero%29_-_Recife.jpg'
  },
  { 
    id: 'banheiro', 
    title: 'Banheiro acessível', 
    desc: 'Locais com banheiro adaptado no percurso.', 
    icon: Building2,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Olinda_panorama.jpg/400px-Olinda_panorama.jpg'
  },
  { 
    id: 'tranquilos', 
    title: 'Locais mais tranquilos', 
    desc: 'Menos aglomeração e ambientes mais calmos.', 
    icon: Brain,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Pa%C3%A7o_do_Frevo.jpg/400px-Pa%C3%A7o_do_Frevo.jpg'
  },
];

export function Preferences() {
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
        <div className="flex gap-1 flex-1 justify-center mr-2">
          <div className="h-1.5 w-8 bg-rota-primary rounded-full"></div>
          <div className="h-1.5 w-8 bg-rota-primary rounded-full"></div>
        </div>
        <div className="text-xs font-medium text-rota-text/50 mr-2">Opcional</div>
        <div className="bg-rota-tag-bg text-rota-primary p-2 rounded-full">
           <Accessibility size={16} />
        </div>
      </div>

      <h1 className="text-2xl font-extrabold text-rota-text mb-2 tracking-tight">
        Quais são as suas<br/>preferências no roteiro?
      </h1>
      <p className="text-sm text-rota-text/70 mb-6 font-medium">
        Selecione o que torna sua experiência mais confortável. Você pode escolher mais de uma opção — ou pular.
      </p>

      {/* Grid options */}
      <div className="grid grid-cols-2 gap-3 mb-24">
        {prefOptions.map(opt => {
          const isSelected = selected.includes(opt.id);
          const Icon = opt.icon;
          return (
            <div 
              key={opt.id}
              onClick={() => toggle(opt.id)}
              className={clsx(
                "bg-white rounded-2xl p-4 cursor-pointer border-2 transition-all shadow-sm flex flex-col h-full",
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
              <p className="text-[10px] text-rota-text/60 font-medium leading-tight mb-3 flex-1">{opt.desc}</p>
              
              <div 
                className="h-12 w-full rounded-lg bg-gray-200 mt-auto overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${opt.image})`}}
              />
            </div>
          );
        })}
      </div>

      {/* Floating Footer Actions */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-rota-light via-rota-light to-transparent">
        <button 
          onClick={() => navigate('/roteiros')}
          className="bg-rota-primary-dark text-white w-full py-4 rounded-full font-bold text-base flex items-center justify-center gap-2 shadow-xl shadow-rota-primary-dark/20 mb-3"
        >
          Ver roteiros <span className="text-xl">›</span>
        </button>
        
        <button 
          onClick={() => navigate('/roteiros')}
          className="text-rota-primary-dark font-bold text-sm text-center py-2 w-full"
        >
          Pular por agora <span className="inline-block ml-1 text-lg leading-none">›</span>
        </button>
      </div>
    </div>
  );
}
