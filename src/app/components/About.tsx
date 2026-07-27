import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-3 grid md:grid-cols-2 gap-16 items-center mt-0">
      <div className="space-y-6">
        <span className="section-title text-2xl tracking-[0.25em] my-10">О нас</span>
        <p className="text-text-muted text-sm leading-relaxed font-light">
          Мы занимаемся реставрацией, реконструкцией и изготовлением архитектурной керамики. Наш опыт включает работу
           с историческими изразцовыми печами в музеях и на памятниках архитектуры. 
           Наша цель — сохранить историческое наследие и возродить величие ушедшей эпохи, блиставшей шедеврами декоративно-прикладного искусства.Мы бережно восстанавливаем аутентичные элементы интерьера и экстерьера, 
           а также помогаем адаптировать эстетику прошлых веков к пространствам современных домов.
        </p>
        <span className="section-title text-xl tracking-[0.25em] mt-10 mb-4">Направления работы</span>
        <span className="section-title text-xm tracking-[0.25em] mt-0 mb-2">Печи и камины:</span>
        <p className="text-text-muted text-sm leading-relaxed font-light mb-2">
          реставрация исторических объектов и создание новых по индивидуальным проектам.
        </p>
        <span className="section-title text-xm tracking-[0.25em] mt-0 mb-2">Фасады и архитектура:</span>
        <p className="text-text-muted text-sm leading-relaxed font-light mb-2">
          изготовление керамических элементов отделки зданий.
        </p>
        <span className="section-title text-xm tracking-[0.25em] mt-0 mb-2">Предметы интерьера:</span>
        <p className="text-text-muted text-sm leading-relaxed font-light">
          авторская интерьерная керамика — светильники, вазы, скульптуры.
        </p>
        <span className="section-title text-xl tracking-[0.25em] mt-0 mb-2">Стилистические решения</span>
        <p className="text-text-muted text-sm leading-relaxed font-light">
          Разрабатываем проекты в ключевых исторических стилях: ренессанс, барокко, классицизм, историзм, модерн, ар-деко.
        </p>
        <span className="section-title text-xl tracking-[0.25em] mt-0 mb-2">Наш подход</span>
         <p className="text-text-muted text-sm leading-relaxed font-light">
          Выполняем весь комплекс работ под ключ: от предпроектных изысканий и чертежей до профессионального монтажа на объекте.
        </p>
        {/* <a href="#" className="inline-block text-gold text-xs uppercase tracking-widest border-b border-gold/40 pb-1 hover:text-gold-light transition">
          Подробнее о мастерской →
        </a> */}
      </div>
      
      <div className="relative aspect-[3/4] w-full bg-card-dark border border-border-gold overflow-hidden group shadow-2xl">
       <Image
          src="/azz.jpg"
          alt="Процесс реставрации печи"
          fill
          unoptimized
          sizes="(max-w-7xl) 100vw, 600px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/20 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
