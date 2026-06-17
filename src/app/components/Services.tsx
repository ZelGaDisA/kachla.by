import Image from "next/image";

const services = [
  { 
    title: "Проектирование", 
    desc: "Исторический анализ и разработка проекта",
    image: "service-1.jpg"
  },
  { 
    title: "Реставрация", 
    desc: "Профессиональное восстановление исторических печей",
    image: "service-2.jpeg" 
  },
  { 
    title: "Изготовление", 
    desc: "Печи и изразцы ручной работы по технологиям",
    image: "service-3.jpeg"
  },
  { 
    title: "Реконструкция", 
    desc: "Воссоздание утраченных элементов и complexes",
    image: "service-4.jpg"
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-card-dark/40 border-y border-border-gold">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center md:text-left mb-16">
          <span className="section-title">Наши услуги</span>
          <h2 className="text-3xl md:text-4xl text-text-light mt-2">Чем мы занимаемся</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-[#111111] border border-border-gold p-6 hover:border-gold/60 transition-all duration-300 group shadow-lg">
              <div className="aspect-[4/3] w-full bg-[#090909] mb-6 overflow-hidden relative border border-border-gold/10">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-gold text-lg mb-2 font-serif">{service.title}</h3>
              <p className="text-text-muted text-xs font-light leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
