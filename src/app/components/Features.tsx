const features = [
  { title: "Традиционные технологии", desc: "Изучаем и воссоздаем старинные методы производства израсцов с XIV по XX век." },
  { title: "Ручная работа", desc: "Каждая печь - уникальное произведение исскуства, созданное мастерами вручную." },
  { title: "Премиальное качество", desc: "Гарантируем художественное исполнение высочайшего класса и безупречность каждой детали." },
  { title: "Исключительный опыт", desc: "Опираемся на глубоуие исследования в области истории, археологии и традиционного производства." },
];

export default function Features() {
  return (
    <section className="border-b border-border-gold bg-bg-dark py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((item, idx) => (
          <div key={idx} className="space-y-2 border-l border-gold/20 pl-4">
            <h3 className="text-gold text-sm tracking-wider uppercase">{item.title}</h3>
            <p className="text-text-muted text-xs font-light">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
