import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Accessibility, Volume2, Undo2, X, Heart, Info, MapPin, Hand, AlignLeft, BarChart2, TriangleAlert, Home as HomeIcon, Map, User } from 'lucide-react';
import clsx from 'clsx';

// MOCK DATA just in case API is down
const MOCK_PLACES = [
  {
    id: 1,
    name: "Recife Antigo – Rota Cultural",
    description: "História, arquitetura e cultura, com acessibilidade.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Rua_do_Bom_Jesus_-_Recife.jpg/800px-Rua_do_Bom_Jesus_-_Recife.jpg",
    difficulty: "Fácil",
    distanceKm: 3.2,
    durationMinutes: 150,
    tags: ["Acessível", "História", "Cultura"],
    compatibility: 89,
    location: "Recife Antigo",
    alert: "Calçamento de pedra em parte da Rua do Bom Jesus."
  },
  {
    id: 2,
    name: "Centro Histórico de Olinda",
    description: "Ladeiras, igrejas e casarios coloniais.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Olinda_panorama.jpg/800px-Olinda_panorama.jpg",
    difficulty: "Difícil",
    distanceKm: 5.0,
    durationMinutes: 240,
    tags: ["História", "Religioso"],
    compatibility: 45,
    location: "Olinda",
    alert: "Muitas ladeiras e calçamento irregular dificultam a mobilidade."
  }
];

export function RoutesPage() {
  const navigate = useNavigate();
  const [places, setPlaces] = useState<any[]>(MOCK_PLACES);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState(0);
  const [disliked, setDisliked] = useState(0);

  useEffect(() => {
    // Attempt to fetch from real API if available
    fetch('http://localhost:8080/api/places')
      .then(res => res.json())
      .then(data => {
        if(data && data.length > 0) {
           // We adapt real data to our card format
           const adapted = data.map((p: any) => ({
              ...p,
              compatibility: Math.floor(Math.random() * 40) + 50, // fake comp
              location: p.id === 1 ? "Recife Antigo" : "Olinda",
              alert: p.tags?.includes('Mobilidade') ? "Atenção a obstáculos na via." : undefined
           }));
           setPlaces(adapted);
        }
      })
      .catch(err => console.log('API not available, using mock data', err));
  }, []);

  const handleNext = (action: 'like' | 'dislike') => {
    if (action === 'like') setLiked(l => l + 1);
    if (action === 'dislike') setDisliked(d => d + 1);
    
    if (currentIndex < places.length - 1) {
      setCurrentIndex(i => i + 1);
    }
  };

  const handleUndo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(i => i - 1);
    }
  };

  const currentPlace = places[currentIndex];

  if (!currentPlace) {
    return <div className="p-8 text-center mt-20">Fim dos roteiros.</div>;
  }

  return (
    <div className="h-full w-full bg-rota-light flex flex-col pt-12 pb-24 overflow-hidden relative">
      {/* Header */}
      <div className="px-5 flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="bg-white p-2 rounded-full shadow-sm text-rota-primary">
            <ArrowLeft size={20} />
          </button>
          <div className="flex gap-1">
            <div className="h-1.5 w-8 bg-rota-primary rounded-full"></div>
            <div className="h-1.5 w-8 bg-rota-primary rounded-full"></div>
            <div className="h-1.5 w-8 bg-rota-primary/30 rounded-full"></div>
          </div>
          <span className="text-xs font-medium text-rota-text/50">2 de 2</span>
        </div>
        <div className="bg-rota-tag-bg text-rota-primary p-2 rounded-full">
           <Accessibility size={16} />
        </div>
      </div>

      <div className="px-5 mb-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-extrabold text-rota-text tracking-tight leading-none mb-1">
            Roteiros para você
          </h1>
          <p className="text-xs text-rota-text/70 font-medium">Arraste o card ou use os botões.</p>
        </div>
        <button className="bg-rota-tag-bg p-2 rounded-full text-rota-primary">
          <Volume2 size={18} />
        </button>
      </div>

      {/* View Toggles */}
      <div className="px-5 mb-4 flex gap-2">
        <div className="bg-white rounded-full p-1 shadow-sm flex flex-1">
          <button className="flex-1 py-1.5 bg-white shadow-sm rounded-full text-rota-primary font-bold text-xs flex justify-center items-center gap-1 border border-gray-100">
            <Hand size={14} /> Deslizar
          </button>
          <button className="flex-1 py-1.5 text-rota-text/50 font-medium text-xs flex justify-center items-center gap-1">
            <AlignLeft size={14} /> Lista
          </button>
        </div>
        <button className="bg-white shadow-sm rounded-full px-4 text-rota-primary font-bold text-xs flex items-center gap-1">
          <MapPin size={14} /> Todas <span className="text-xs ml-1">v</span>
        </button>
      </div>

      {/* Progress Line */}
      <div className="px-5 flex items-center gap-3 mb-4">
        <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
           <div 
             className="h-full bg-rota-primary transition-all duration-300"
             style={{ width: `${((currentIndex + 1) / places.length) * 100}%` }}
           />
        </div>
        <span className="text-[10px] font-bold text-rota-text/50">{currentIndex + 1} de {places.length}</span>
        <div className="flex gap-2">
           <span className="bg-rota-primary/10 text-rota-primary px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1">
             <Heart size={10} className="fill-current" /> {liked}
           </span>
           <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1">
             <X size={10} /> {disliked}
           </span>
        </div>
      </div>

      {/* Card Area */}
      <div className="flex-1 px-5 relative">
        <div className="w-full h-full bg-black rounded-3xl overflow-hidden relative shadow-2xl flex flex-col justify-end p-5">
          <div 
            className="absolute inset-0 z-0 opacity-80" 
            style={{
              backgroundImage: `url("${currentPlace.imageUrl}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0" />
          
          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex justify-between z-10">
            <div className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1.5 text-rota-primary font-bold text-xs">
               <BarChart2 size={14} /> {currentPlace.compatibility}% compatível
            </div>
            <div className="bg-black/40 backdrop-blur text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 font-medium text-xs">
               <MapPin size={12} /> {currentPlace.location}
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-white">
            <h2 className="text-2xl font-bold leading-tight mb-1">{currentPlace.name}</h2>
            <p className="text-xs text-white/80 font-medium mb-3">{currentPlace.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {currentPlace.tags.map((tag: string) => (
                <span key={tag} className="bg-white/20 backdrop-blur border border-white/10 px-2.5 py-1 rounded-full text-[10px] font-medium flex items-center gap-1">
                  {tag === 'Acessível' ? <Accessibility size={10} /> : null}
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 text-xs font-medium text-white/90 mb-3">
               <span className="flex items-center gap-1"><MapPin size={12} /> {currentPlace.distanceKm} km</span>
               <span className="flex items-center gap-1"><Clock size={12} /> {Math.floor(currentPlace.durationMinutes/60)}h a {Math.floor(currentPlace.durationMinutes/60)+1}h</span>
               <span className="flex items-center gap-1"><Footprints size={12} /> {currentPlace.difficulty}</span>
            </div>

            {currentPlace.alert && (
              <div className="bg-orange-950/60 border border-orange-500/30 text-orange-200 text-[10px] p-2 rounded-lg flex items-start gap-2 backdrop-blur">
                <TriangleAlert size={14} className="text-orange-400 shrink-0 mt-0.5" />
                <p className="font-medium leading-tight">{currentPlace.alert}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 mt-6 mb-2 flex justify-between items-center">
         <button onClick={handleUndo} className="flex flex-col items-center gap-1 text-rota-accent/80 hover:text-rota-accent">
           <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
             <Undo2 size={18} />
           </div>
           <span className="text-[9px] font-bold">Desfazer</span>
         </button>
         
         <button onClick={() => handleNext('dislike')} className="flex flex-col items-center gap-1 text-red-500 hover:text-red-600">
           <div className="w-14 h-14 rounded-full bg-white shadow-lg border border-red-100 flex items-center justify-center">
             <X size={28} />
           </div>
           <span className="text-[10px] font-bold">Não curti</span>
         </button>

         <button onClick={() => handleNext('like')} className="flex flex-col items-center gap-1 text-rota-primary hover:text-rota-primary-dark">
           <div className="w-16 h-16 rounded-full bg-white shadow-xl border-2 border-rota-tag-bg flex items-center justify-center">
             <Heart size={32} className="fill-current" />
           </div>
           <span className="text-[11px] font-bold bg-rota-primary text-white px-2 rounded">Curti</span>
         </button>

         <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-700">
           <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center border border-gray-100">
             <Info size={18} />
           </div>
           <span className="text-[9px] font-bold">Detalhes</span>
         </button>
      </div>

      {/* Bottom Nav */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around items-center pt-3 pb-5 px-2 z-50">
        <div className="flex flex-col items-center gap-1 text-rota-primary">
          <div className="relative">
            <MapPin size={20} />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-rota-primary rounded-full" />
          </div>
          <span className="text-[9px] font-bold">Início</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400">
          <Map size={20} />
          <span className="text-[9px] font-medium">Mapa</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400">
          <Heart size={20} />
          <span className="text-[9px] font-medium">Favoritos</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400">
          <User size={20} />
          <span className="text-[9px] font-medium">Perfil</span>
        </div>
      </div>
    </div>
  );
}
