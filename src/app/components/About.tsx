import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div className="space-y-6">
        <span className="section-title">О нас</span>
        <h2 className="text-3xl md:text-4xl text-text-light leading-tight">
          Сохраняем прошлое. <br />Создаём наследие.
        </h2>
        <p className="text-text-muted text-sm leading-relaxed font-light">
          Мы — мастерская, специализирующаяся на реставрации, изготовлении и реконструкции исторических печей и изразцовой керамики. Работаем с объектами культурного наследия, частными резиденциями и музеями. Наша цель — сохранить подлинность и вернуть величие ушедших эпох.
        </p>
        <a href="#" className="inline-block text-gold text-xs uppercase tracking-widest border-b border-gold/40 pb-1 hover:text-gold-light transition">
          Подробнее о мастерской →
        </a>
      </div>
      
      <div className="relative aspect-[4/3] w-full bg-card-dark border border-border-gold overflow-hidden group shadow-2xl">
       <Image
          src="/azz.png"
          alt="Процесс реставрации печи"
          fill
          unoptimized
          sizes="(max-w-7xl) 50vw, 600px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/20 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
