"use client";
import { useState } from "react";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section 
      className="relative min-h-screen flex items-center pt-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/90 to-transparent z-10" />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-20 grid md:grid-cols-2 gap-12 md:gap-24 items-center py-24">
        <div className="text-left space-y-6">
          <div className="text-gold text-xs uppercase tracking-[0.3em] flex items-center gap-2">
            <span className="w-6 h-[1px] bg-gold" /> Традиции. Мастерство. Наследие
          </div>
          
          <h1 className="text-4xl md:text-6xl text-text-light leading-[0.95] tracking-[-0.03em]">
            Мастерская <br />
            <span className="text-gold-light italic font-light">исторических печей</span> <br />
            и изразцовой керамики
          </h1>
          
          <p className="text-text-muted text-sm md:text-base max-w-md font-light leading-relaxed">
            Реставрация, изготовление и реконструкция исторических печей и каминов ручной работы по традиционным технологиям.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button onClick={() => setIsOpen(true)} className="btn-gold">
              Консультация
            </button>
          </div>
        </div>
        
        <div className="hidden md:flex justify-end w-full">
          <div className="relative aspect-[2/3] w-full max-w-[480px] bg-[#111111] border border-border-gold overflow-hidden group shadow-2xl">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/hero-side.jpeg')" }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4">
          <div className="bg-[#090909] border border-border-gold max-w-sm w-full p-8 relative space-y-6 text-center shadow-2xl animate-fade-in">
            
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-text-muted hover:text-gold text-xl transition-colors duration-300"
            >
              ✕
            </button>

            <div className="space-y-2">
              <h3 className="text-gold text-xl font-serif">Выберите мессенджер</h3>
              <p className="text-text-muted text-xs font-light leading-relaxed">
                Где вам удобнее обсудить проект или задать интересующие вопросы?
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              {/* Telegram */}
              <a
                href="https://t.me/Stanislau_Kos" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-border-gold bg-[#111111] text-text-light text-sm uppercase tracking-widest py-3 hover:bg-gold hover:text-bg-dark transition-all duration-300 font-medium"
              >
                Telegram
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/kachla.by?igsh=bGRtMDh0eGRidWk2" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-border-gold bg-[#111111] text-text-light text-sm uppercase tracking-widest py-3 hover:bg-gold hover:text-bg-dark transition-all duration-300 font-medium"
              >
                Instagram
              </a>

              {/* Viber */}
              <a
                href="https://viber.click://chat?number=%2B375256453014" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-border-gold bg-[#111111] text-text-light text-sm uppercase tracking-widest py-3 hover:bg-gold hover:text-bg-dark transition-all duration-300 font-medium"
              >
                Viber
              </a>
            </div>

            <button 
              onClick={() => setIsOpen(false)}
              className="text-text-muted text-[11px] uppercase tracking-widest border-b border-transparent hover:border-text-muted/40 transition-all pt-2"
            >
              Вернуться на сайт
            </button>

          </div>
        </div>
      )}
    </section>
  );
}
