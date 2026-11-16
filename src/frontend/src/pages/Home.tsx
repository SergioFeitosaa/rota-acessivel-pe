import { useNavigate } from 'react-router-dom';
import { MapPin, Accessibility, Compass } from 'lucide-react';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full bg-rota-dark text-white relative flex flex-col pt-12 pb-8 px-6 overflow-y-auto">
      {/* Background Image / Overlay - representing the tree and street */}
      <div 
        className="absolute inset-0 z-0 opacity-40" 
        style={{
          backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Rua_do_Bom_Jesus_-_Recife.jpg/800px-Rua_do_Bom_Jesus_-_Recife.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-rota-dark/30 via-rota-dark/80 to-rota-dark z-0" />

      {/* Header */}
      <div className="relative z-10 flex justify-between items-start mb-auto pt-4">
        <div className="bg-white/90 backdrop-blur text-rota-text py-2 px-3 rounded-2xl flex items-center gap-2 max-w-[200px]">
          <div className="bg-rota-primary p-1 rounded-full text-white">
            <MapPin size={16} />
          </div>
          <div>
            <h1 className="font-bold text-sm leading-tight flex items-center gap-1">
              Rota Acessível <span className="bg-rota-accent text-rota-dark text-[10px] px-1 rounded font-black">PE</span>
            </h1>
            <p className="text-[10px] font-medium text-rota-text/70 leading-tight">Recife Antigo · Olinda</p>
          </div>
        </div>
        
        <div className="bg-black/40 backdrop-blur rounded-full p-2 flex flex-col items-center justify-center w-16 h-16 cursor-pointer">
           <Accessibility size={20} className="mb-1 text-white" />
           <span className="text-[10px] font-medium">Acessibilidade</span>
        </div>
      </div>

      {/* Hero Text */}
      <div className="relative z-10 mt-20 mb-8">
        <h2 className="text-4xl font-extrabold leading-tight tracking-tight mb-4">
          Você diz o que <br />
          precisa.<br />
          <span className="text-rota-accent">A gente encontra o roteiro.</span>
        </h2>
        <p className="text-white/80 font-medium text-sm pr-12">
          Experiências culturais e turísticas em Recife Antigo e Olinda, do seu jeito.
        </p>
        <div className="w-10 h-1 bg-rota-primary mt-4 rounded-full" />
      </div>

      {/* Actions */}
      <div className="relative z-10 flex flex-col gap-4 mt-auto">
        <button 
          onClick={() => navigate('/necessidades')}
          className="bg-rota-primary hover:bg-rota-primary-dark transition-colors text-white py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 w-full"
        >
          Encontrar meu roteiro <span className="text-xl">›</span>
        </button>

        <button 
          onClick={() => navigate('/roteiros')}
          className="border border-white/30 bg-black/20 hover:bg-black/40 transition-colors text-white py-3 rounded-full font-medium text-base flex items-center justify-center gap-2 w-full"
        >
          <Compass size={18} /> Explorar sem conta <span className="text-xl">›</span>
        </button>

        <div className="text-center mt-2">
          <p className="text-sm font-medium text-white/70">
            Já tenho conta · <a href="#" className="text-white underline decoration-rota-primary decoration-2 underline-offset-4">Entrar</a>
          </p>
        </div>

        {/* Footer Graphic Placeholder */}
        <div className="mt-8 pt-4 border-t border-white/10 text-center relative">
           <p className="text-xs font-bold text-white mb-2">Saiba antes de ir.</p>
           <p className="text-[8px] text-white/40">Demo MVP Rota Acessível PE</p>
        </div>
      </div>
    </div>
  );
}
