const services = [
  { title: "Проектирование", desc: "Исторический анализ и разработка проекта" },
  { title: "Реставрация", desc: "Профессиональное восстановление исторических печей" },
  { title: "Изготовление", desc: "Печи и изразцы ручной работы по технологиям" },
  { title: "Реконструкция", desc: "Воссоздание утраченных элементов и комплексов" },
];

export default function Services() {
  return (
    <section className="py-24 bg-card-dark/40 border-y border-border-gold">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center md:text-left mb-16">
          <span className="section-title">Наши услуги</span>
          <h2 className="text-3xl md:text-4xl text-text-light">Чем мы занимаемся</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-card-dark border border-border-gold p-6 hover:border-gold/60 transition-all duration-300 group">
              <div className="aspect-[4/3] w-full bg-bg-dark mb-6 overflow-hidden relative">
                {/* Здесь картинка услуги */}
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('/service-${idx+1}.jpg')` }} />
              </div>
              <h3 className="text-gold text-lg mb-2">{service.title}</h3>
              <p className="text-text-muted text-xs font-light leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
