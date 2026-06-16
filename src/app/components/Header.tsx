export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 border-b border-border-gold bg-bg-dark/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Здесь будет логотип */}
          <div className="text-left">
            <span className="block text-gold text-sm tracking-widest uppercase font-serif">Исторические</span>
            <span className="block text-text-light text-xs tracking-tight uppercase">печи и изразцы</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-text-muted">
          <a href="#" className="hover:text-gold transition">О нас</a>
          <a href="#" className="hover:text-gold transition">Услуги</a>
          <a href="#" className="hover:text-gold transition">Производство</a>
          <a href="#" className="hover:text-gold transition">Объекты</a>
          <a href="#" className="hover:text-gold transition">Галерея</a>
        </nav>
        
        <div className="text-right">
          <a href="tel:+375256453014" className="block text-text-light font-medium hover:text-gold transition">+375 25 645 30 14</a>
          <span className="text-[10px] uppercase tracking-widest text-gold cursor-pointer border-b border-gold/30">Заказать звонок</span>
        </div>
      </div>
    </header>
  );
}
