import { Phone, Shield, CheckCircle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPhoto from "@/assets/hero-photo.jpg";
import logo from "@/assets/logo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        {/* Logo grande e centralizada */}
        <div className="mb-8 sm:mb-12 lg:mb-14 flex justify-center">
          <img src={logo} alt="Erick Costa Cunha Advocacia" className="h-28 sm:h-44 lg:h-64 w-auto drop-shadow-2xl" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <div>
              <p className="text-gold font-bold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
                Advogado Criminalista
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                Você Não Precisa de Sorte.{" "}
                <span className="text-gold font-black">Precisa da Defesa Certa.</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-silver leading-relaxed max-w-lg mx-auto lg:mx-0">
              Acusações criminais podem destruir seu futuro. Erick Cunha luta para proteger sua liberdade, sua reputação e sua vida.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all" asChild>
                <a href="https://wa.me/5534996550410" target="_blank" rel="noopener noreferrer">
                  Fale Com Erick Cunha Agora
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 font-semibold border-border hover:bg-secondary" asChild>
                <a href="https://wa.me/5534996550410" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Assistência Jurídica Imediata
                </a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 pt-2 items-center sm:items-start justify-center lg:justify-start">
              {[
                { icon: Shield, text: "Especialista em Defesa Criminal" },
                { icon: CheckCircle, text: "Estratégia Comprovada" },
                { icon: Lock, text: "Atendimento Sigiloso e Imediato" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-silver">
                  <item.icon className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Foto com OAB embaixo */}
          <div className="flex flex-col items-center order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[hsl(var(--gold)/.2)] via-transparent to-[hsl(var(--silver)/.15)] rounded-2xl blur-2xl" />
              <img
                src={heroPhoto}
                alt="Erick Cunha - Advogado Criminalista"
                className="relative rounded-2xl w-48 sm:w-72 lg:w-80 object-cover shadow-2xl"
              />
            </div>
            <p className="mt-3 sm:mt-4 text-silver text-sm font-bold tracking-wider">OAB/MG 223.211</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
