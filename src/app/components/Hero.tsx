export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center items-start pt-40 bg-[url('/hero-bg.jpg')] bg-cover bg-center">
      {/* Затемняющий градиент поверх картинки */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/80 to-transparent z-10" />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left space-y-22">
          <div className="text-gold text-xs uppercase tracking-[0.3em] flex items-center gap-2">
            <span className="w-6 h-[1px] bg-gold" /> Традиции. Мастерство. Наследие
          </div>
          
          <h1 className="text-4xl md:text-6xl text-text-light leading-[0.75] tracking-[-0.03em]" >
            Мастерская <br />
            <span className="text-gold-light italic font-light">исторических печей</span> <br />
            и изразцовой керамики
          </h1>
          
          <p className="text-text-muted text-sm md:text-base max-w-md font-light leading-relaxed">
            Реставрация, изготовление и реконструкция исторических печей и каминов ручной работы по традиционным технологиям.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="btn-gold">Консультация</button>
          </div>
        </div>
        <div className="hidden md:flex justify-end w-full">
          <div className="relative aspect-[3/4] w-full max-w-[480px] bg-card-dark border border-border-gold overflow-hidden group shadow-2xl">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/hero-side.jpeg')" }}
            />
            {/* Мягкая тень снизу картинки для глубины */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 to-transparent" />
          </div>
        </div>
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
