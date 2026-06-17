export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark border-t border-border-gold mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        <div className="space-y-4">
          <div className="text-left">
            <span className="block text-gold text-sm tracking-widest uppercase font-serif">Исторические</span>
            <span className="block text-text-light text-xs tracking-tight uppercase">печи и изразцы</span>
          </div>
          <p className="text-text-muted text-xs font-light leading-relaxed max-w-[240px]">
            Воссоздание, реставрация и сохранение традиций изразцового искусства и печного мастерства.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-gold text-xs uppercase tracking-widest border-b border-gold/10 pb-2">Навигация</h4>
          <nav className="flex flex-col gap-2 text-xs uppercase tracking-widest text-text-muted">
            <a href="#" className="hover:text-gold transition">О мастерской</a>
            <a href="#" className="hover:text-gold transition">Наши услуги</a>
            <a href="#" className="hover:text-gold transition">Исторические объекты</a>
            <a href="#" className="hover:text-gold transition">Галерея работ</a>
          </nav>
        </div>

        <div className="space-y-4">
          <h4 className="text-gold text-xs uppercase tracking-widest border-b border-gold/10 pb-2">Контакты</h4>
          <div className="space-y-2 text-sm font-light">
            <a href="tel:+375291234567" className="block text-text-light hover:text-gold transition font-medium">
              +375 (25) 645-30-14
            </a>
            <p className="text-text-muted text-xs">Минск, Респ. Беларусь</p>
            <p className="text-text-muted text-xs">info@kachla.by</p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-gold text-xs uppercase tracking-widest border-b border-gold/10 pb-2">Режим работы</h4>
          <div className="space-y-1 text-xs text-text-muted font-light leading-relaxed">
            <p>Пн — Пт: 09:00 — 18:00</p>
            <p>Сб — Вс: Выходной</p>
            <p className="text-gold/60 pt-2 text-[11px]">Прием заявок на сайте — круглосуточно</p>
          </div>
        </div>

      </div>

      <div className="border-t border-gold/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex flex-col sm:flex-row items-center justify-between text-[11px] text-text-muted tracking-wider uppercase gap-2 py-4 sm:py-0">
          <div>© {currentYear} kachla.by. Все права защищены.</div>
          <div className="flex gap-6 text-[10px]">
            <a href="#" className="hover:text-gold transition">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
