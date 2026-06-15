"use client";
import { useState, useEffect } from "react";

// Типизация для наших работ
interface WorkItem {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  mainImage: string;
  processImages: string[];
}

const galleryData: WorkItem[] = [
  {
    id: 1,
    title: "Изразцовый камин в замке",
    shortDesc: "Классический стиль, ручная роспись",
    fullDesc: "Полный цикл воссоздания изразцового камина по чертежам XVIII века. Каждая деталь отливалась вручную из специальной шамотной глины. Процесс включал три этапа высокотемпературного обжига и нанесение уникальной глазури под золото.",
    mainImage: "/gallery/work1.jpg",
    processImages: ["/gallery/proc1-1.jpg", "/gallery/proc1-2.jpg"],
  },
  {
    id: 2,
    title: "Реставрация дворцовой печи",
    shortDesc: "Восстановление элементов лепнины",
    fullDesc: "Кропотливая работа по очистке старинной печи от слоев краски, укрепление внутреннего каркаса и бережное восстановление утраченных фрагментов изразцовой керамики. Использовались только аутентичные материалы.",
    mainImage: "/gallery/work2.jpg",
    processImages: ["/gallery/proc2-1.jpg", "/gallery/proc2-2.jpg"],
  },
  {
    id: 3,
    title: "Печь-голландка в резиденции",
    shortDesc: "Современная адаптация старинных чертежей",
    fullDesc: "Проектирование и монтаж классической голландской печи с адаптацией под современные стандарты дымоудаления. Облицовка выполнена глянцевыми белыми изразцами с кобальтовой росписью.",
    mainImage: "/gallery/work3.jpg",
    processImages: ["/gallery/proc3-1.jpg"],
  },
];


export default function Gallery() {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  // Дублируем массив для создания эффекта бесконечной бесшовной ленты
  const duplicatedData = [...galleryData, ...galleryData, ...galleryData];

  return (
    <section className="py-24 bg-card-dark/20 border-y border-border-gold overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <span className="section-title">Галерея работ</span>
          <h2 className="text-3xl md:text-4xl text-text-light mt-2">Наши проекты</h2>
        </div>
        <span className="text-xs text-text-muted uppercase tracking-widest hidden sm:block">
          Нажмите для подробностей
        </span>
      </div>

      {/* Обертка для слайдера с бесконечной анимацией */}
      <div className="relative w-full flex items-center mask-gradient">
        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] whitespace-nowrap py-4 cursor-pointer">
          {duplicatedData.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onClick={() => setSelectedWork(item)}
              className="inline-block w-[300px] md:w-[400px] bg-card-dark border border-border-gold p-4 transition-all duration-300 hover:border-gold/60"
            >
              <div className="aspect-[4/3] w-full bg-bg-dark mb-4 overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                  style={{ backgroundImage: `url(${item.mainImage})` }}
                />
              </div>
              <h3 className="text-gold text-lg font-serif truncate whitespace-normal">{item.title}</h3>
              <p className="text-text-muted text-xs font-light mt-1 whitespace-normal">{item.shortDesc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* МОДАЛЬНОЕ ОКНО (ПОП-АП) */}
      {selectedWork && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-bg-dark border border-border-gold max-w-4xl w-full p-6 md:p-8 relative max-h-[90vh] overflow-y-auto custom-scrollbar space-y-8">
            
            {/* Кнопка закрытия */}
            <button
              onClick={() => setSelectedWork(null)}
              className="absolute top-4 right-4 text-text-muted hover:text-gold text-2xl transition"
            >
              ✕
            </button>

            {/* Заголовок */}
            <div>
              <h2 className="text-2xl md:text-4xl text-gold font-serif">{selectedWork.title}</h2>
              <p className="text-text-muted text-sm mt-1">{selectedWork.shortDesc}</p>
            </div>

            {/* Основное описание */}
            <p className="text-text-light/90 text-sm md:text-base leading-relaxed font-light">
              {selectedWork.fullDesc}
            </p>

            {/* Сетка с фотографиями процесса */}
            <div className="space-y-4">
              <h4 className="text-gold text-xs uppercase tracking-widest border-b border-gold/20 pb-2">
                Процесс создания и готовый результат
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Главное фото в поп-апе */}
                <div className="aspect-[4/3] bg-card-dark border border-border-gold relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${selectedWork.mainImage})` }} />
                </div>
                {/* Фотографии процесса */}
                {selectedWork.processImages.map((img, index) => (
                  <div key={index} className="aspect-[4/3] bg-card-dark border border-border-gold relative overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${img})` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
