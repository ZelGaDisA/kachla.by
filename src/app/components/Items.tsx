"use client";
import { useState } from "react";
import Image from "next/image"; // 1. Импортируем компонент Image

const objectsData = [
  {
    id: 1,
    title: "Усадьба Жиличи",
    region: "Могилевская область",
    // Прямая качественная ссылка на дворец в Жиличах
    image: "/objects/zhilichi.jpg",
  },
  {
    id: 2,
    title: "Дворец Пусловских",
    region: "Брестская область",
    // Прямая ссылка на Коссовский замок
    image: "/objects/kossovo.jpg",
  },
  {
    id: 3,
    title: "Старый замок",
    region: "Гродненская область",
    // Прямая ссылка на замок/крепость
    image: "/objects/grodno.jpg",
  },
];

export default function Items() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Левая часть: Список объектов */}
        <div className="space-y-8">
          <div>
            <span className="section-title text-sm tracking-[0.25em]">Исторические объекты</span>
            <h2 className="text-3xl md:text-4xl text-text-light mt-2 font-serif">Наше наследие</h2>
          </div>

          <div className="divide-y divide-border-gold">
            {objectsData.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActiveIdx(idx)}
                className={`py-6 flex items-center justify-between cursor-pointer group transition-all ${
                  activeIdx === idx ? "text-gold" : "text-text-muted hover:text-text-light"
                }`}
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-serif">{item.title}</h3>
                  <p className="text-xs tracking-wide opacity-60 mt-1 font-light">{item.region}</p>
                </div>
                <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  activeIdx === idx ? "border-gold bg-gold/10 text-gold" : "border-gold/20 text-text-muted group-hover:border-gold group-hover:text-gold"
                }`}>
                  →
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Правая часть: Контейнер для отображения фотографии */}
        <div className="relative aspect-[4/3] w-full bg-card-dark border border-border-gold overflow-hidden shadow-2xl">
          <Image
            src={objectsData[activeIdx].image}
            alt={objectsData[activeIdx].title}
            fill
            unoptimized // 2. Защита от ошибки статического экспорта
            className="object-cover transition-all duration-700 animate-fade-in"
          />
          {/* Элегантное затемнение снизу для интеграции в темный интерфейс */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
