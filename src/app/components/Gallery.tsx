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
    title: "Каминная печь",
    shortDesc: "Каминная печь в Коссовском дворце — результат точной исторической реконструкции.",
    fullDesc: "Каминная печь в Коссовском дворце — результат точной исторической реконструкции. Мы воссоздали её по архивным фотографиям и уцелевшим старинным изразцам. На некоторых из них сохранились клейма знаменитой фабрики, располагавшейся на территории современной Чехии.Поиск оригинала и точность деталейНам удалось найти оригинальный аналог этой печи конца XIX века в чешском замке. Благодаря содействию зарубежных коллег, мы детально изучили конструкцию, чтобы восстановить её до мельчайших нюансов. Стилистически её архитектурные элементы и рельеф относятся к неоренессансу — одному из ярких направлений историзма того времени.Главная доминанта интерьераСложнейшая детализация скульптурных элементов, безупречное качество глазури и выверенные пропорции делают её центральным элементом интерьера. Это не просто каминная печь, а доминанта пространства, подчеркивающая его уникальность и высокую художественную ценность.",
    mainImage: "/gallery/kos1.jpg",
    processImages: ["/gallery/kos2.jpg", "/gallery/kos3.jpg"],
  },
  {
    id: 2,
    title: "Полихромная печь",
    shortDesc: "Старый замок Гродно",
    fullDesc: "Одним из ключевых объектов нашей проектно-реконструкторской работы в Старом замке в Гродно стало воссоздание монументальной полихромной печи. Ее внешний вид и устройство характерны для второй половины XVI — первой половины XVII века. Эта печь представляет собой яркий образец расцвета цехового ремесленного производства ВКЛ.В основу проекта легли материалы гродненских археологических раскопок, дополненные артефактами из профильных музейных коллекций по всей территории Беларуси. Главной художественной особенностью печи является сложная пластика изразцового набора. Она сочетает в себе полихромную роспись и богатые орнаментальные композиции, которые включают рельефы в виде букетов в вазонах, геральдические элементы, а также детализированные растительные узоры. Данный проект наглядно демонстрирует интеграцию уникальных достижений белорусского изразцового искусства эпохи Позднего Ренессанса и Раннего Барокко в структуру замкового интерьера..",
    mainImage: "/gallery/pol1.jpg",
    processImages: ["/gallery/pol2.jpg", "/gallery/pol3.jpg"],
  },
  {
    id: 3,
    title: "Портретная печь",
    shortDesc: "Старый замок",
    fullDesc: "Воссоздание портретной изразцовой печи конца XVI — начала XVII века — это триумф ренессансной пластики в Старом замке.Проектирование этого уникального объекта требовало глубоких знаний на стыке архитектуры, археологии и истории материальной культуры. В отличие от стандартных интерьерных решений, данный проект базируется на строгой верификации первоисточников. В его основу легли материалы гродненской археологии, анализ артефактов из музейных фондов Беларуси, а также сопоставление находок с аналогами в архитектурных памятниках Польши, Литвы, Германии и Австрии. Конструкция печи наглядно демонстрирует изящную тектонику Возрождения и имеет строгое двухъярусное деление. Нижний ярус представляет собой массивный прямоугольный короб, собранный из квадратных коробчатых изразцов со ступенчатым углублением в центре. Этот прием создает ритмичную игру света и тени, подчеркивая устойчивость формы, а тонкие кованые ножки визуально приподнимают конструкцию над полом, придавая ей легкость. Верхний ярус выполнен в виде высокой цилиндческой части, которая доминирует в пространстве и наделена богатой изобразительной пластикой. Венец печи представляет собой ажурную керамическую корону, состоящую из расположенных по кругу объемных фигурок людей.Почти каждый изразец — это точная копия археологических находок, хранящихся в музейных собраниях. Главная художественная ценность ансамбля заключается в его иконографическом наполнении. Цилиндрический барабан облицован изразцами с поясными портретами известных европейских реформаторов. Персонажи помещены в глубокие арочные ниши, имитирующие классические архитектурные формы. В рельефах безупречно передана пластика костюмов эпохи Ренессанса: объемные береты с перьями, гофрированные воротники и массивные нашейные цепи. В основании ниш вырезаны латинские надписи-аббревиатуры. На стыке ярусов проходят горизонтальные карнизы с геральдическими сюжетами, где разнообразные фантастические существа чередуются со стилизованными растительными орнаментами. Блестящая зеленая глазурь объединяет все элементы, подчеркивая выразительность и глубину рельефа. Благодаря глубокому пониманию художественных канонов прошлого нам удалось объединить разрозненные музейные материалы в завершенный, стилистически цельный ансамбль. Эта печь стала ключевым смысловым арт-объектом интерьера, полностью воссоздающим дух материальной культуры Беларуси той эпохи.",
    mainImage: "/gallery/port1.jpg",
    processImages: ["/gallery/port2.jpg", "/gallery/port3.jpg"],
  },
  {
    id: 4,
    title: "Печь с росписью",
    shortDesc: "Дворец Коссово",
    fullDesc: "Реконструкция изразцовой печи  со сложной надглазурной росписью стала одним из самых значимых элементов интерьера, который мы восстановили в Коссовском дворце. Именно эта виртуозная роспись, кропотливо воссозданная нашими мастерами, составляет главную ценность объекта. Реставрация велась на базе сохранившихся подлинных фрагментов, архивных фотографий, а также найденных аналогов таких печей в Чехии и Польше. Благодаря труду реставраторов, уникальное художественное наследие возвращается на свое законное место",
    mainImage: "/gallery/ros1.jpg",
    processImages: ["/gallery/ros2.jpg", "/gallery/ros3.jpg"],
  },
];


export default function Gallery() {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  const duplicatedData = [...galleryData, ...galleryData, ...galleryData];

  return (
    <section id="gallery" className="py-24 bg-card-dark/20 border-y border-border-gold overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <span className="section-title">Галерея работ</span>
          <h2 className="text-3xl md:text-4xl text-text-light mt-2">Наши проекты</h2>
        </div>
        <span className="text-xs text-text-muted uppercase tracking-widest hidden sm:block">
          Нажмите для подробностей
        </span>
      </div>

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

      {selectedWork && (
        /* Клик «мимо» окна: закрываем при нажатии на темный фон */
        <div 
          onClick={() => setSelectedWork(null)}
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4 overflow-y-auto cursor-pointer"
        >
          {/* Стоп-пропогейшн: предотвращает закрытие при клике ВНУТРИ самого контентного окна */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-bg-dark border border-border-gold max-w-4xl w-full p-6 md:p-8 relative max-h-[90vh] overflow-y-auto custom-scrollbar space-y-8 cursor-default"
          >
            
            {/* Исправленная кнопка: теперь она содержит крестик и правильно позиционирована */}
            <button
              onClick={() => setSelectedWork(null)}
              className="absolute top-4 right-4 text-text-muted hover:text-gold text-3xl transition-colors duration-200 z-10 p-2 leading-none"
              aria-label="Закрыть модальное окно"
            >
              &times;
            </button>

            <div>
              <h2 className="text-2xl md:text-4xl text-gold font-serif">{selectedWork.title}</h2>
              <p className="text-text-muted text-sm mt-1">{selectedWork.shortDesc}</p>
            </div>

            <p className="text-text-light/90 text-sm md:text-base leading-relaxed font-light">
              {selectedWork.fullDesc}
            </p>

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
