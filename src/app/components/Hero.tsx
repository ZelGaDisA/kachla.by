export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 bg-[url('/hero-bg.jpg')] bg-cover bg-center">
      {/* Затемняющий градиент поверх картинки */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/80 to-transparent z-10" />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left space-y-6">
          <div className="text-gold text-xs uppercase tracking-[0.3em] flex items-center gap-2">
            <span className="w-6 h-[1px] bg-gold" /> Традиции. Мастерство. Наследие
          </div>
          
          <h1 className="text-4xl md:text-6xl text-text-light leading-tight">
            Мастерская <br />
            <span className="text-gold-light italic font-light">исторических печей</span> <br />
            и изразцовой керамики
          </h1>
          
          <p className="text-text-muted text-sm md:text-base max-w-md font-light leading-relaxed">
            Реставрация, изготовление и реконструкция исторических печей и каминов ручной работы по традиционным технологиям.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="btn-gold">Консультация</button>
            <button className="btn-outline">Наши работы →</button>
          </div>
        </div>
        
        {/* Правая часть может оставаться пустой, чтобы показывать красивый фон печи */}
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
