"use client";
import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setStatus("loading");

    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwpH-tyi-Bih9A79U4ozDSg-flUfGc8KaygYl_cO0y6Ybv09M_ncXeug0zGjfXAE7Y/exec";

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone }),
      });

      setStatus("success");
      setName("");
      setPhone("");
    } catch (error) {
      console.error("Ошибка отправки:", error);
      setStatus("error");
    }
  };

  return (
    <section className="py-8 max-w-xl mx-auto px-6 text-center">
      <div className="mb-12">
        <span className="section-title justify-center">Обратная связь</span>
        <h2 className="text-3xl md:text-4xl text-text-light mt-2 font-serif">Заказать звонок</h2>
        <p className="text-text-muted text-xs font-light mt-3 max-w-sm mx-auto leading-relaxed">
          Оставьте ваши контактные данные. Мастер свяжется с вами для подробной консультации в течение рабочего дня.
        </p>
      </div>

      {status === "success" ? (
        <div className="border border-gold bg-gold/5 p-8 text-center space-y-3">
          <h3 className="text-gold text-xl font-serif">Заявка успешно принята!</h3>
          <p className="text-text-muted text-xs font-light">Спасибо за обращение. Мы перезвоним вам в ближайшее время.</p>
          <button 
            onClick={() => setStatus("idle")} 
            className="text-gold text-xs uppercase tracking-widest border-b border-gold/30 pb-0.5 mt-2 hover:text-gold-light"
          >
            Отправить еще одну заявку
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          {/* Поле имени */}
          <div className="space-y-2">
            <label className="text-gold text-[11px] uppercase tracking-widest block font-light">Ваше имя</label>
            <input
              type="text"
              required
              disabled={status === "loading"}
              placeholder="Константин"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#111111] border border-border-gold px-4 py-3 text-sm text-text-light placeholder-text-muted/40 focus:outline-none focus:border-gold/60 transition disabled:opacity-50"
            />
          </div>

          <div className="space-y-2">
            <label className="text-gold text-[11px] uppercase tracking-widest block font-light">Телефон</label>
            <input
              type="tel"
              required
              disabled={status === "loading"}
              placeholder="+375 (29) 000-00-00"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-[#111111] border border-border-gold px-4 py-3 text-sm text-text-light placeholder-text-muted/40 focus:outline-none focus:border-gold/60 transition disabled:opacity-50"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full btn-gold disabled:opacity-50"
            >
              {status === "loading" ? "Отправка..." : "Отправить заявку"}
            </button>
          </div>

          {status === "error" && (
            <p className="text-red-500 text-xs text-center font-light">
              Произошла ошибка при отправке. Пожалуйста, попробуйте позже.
            </p>
          )}
        </form>
      )}
    </section>
  );
}
