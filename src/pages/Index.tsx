import heroFloor from "@/assets/hero-floor.jpg";
import beforeAfter from "@/assets/before-after.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, MapPin, Star, ShieldCheck, Clock, FileCheck, Hammer, Ruler, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const PHONE = "+7 (843) 000-00-00";
const PHONE_HREF = "tel:+78430000000";

const services = [
  { title: "Стяжка пола", desc: "Полусухая и мокрая, ровность ±2 мм/2 м.", price: "от 750 ₽/м²" },
  { title: "Наливные полы", desc: "Самовыравнивающиеся смеси под финиш.", price: "от 450 ₽/м²" },
  { title: "Ламинат и SPC", desc: "Укладка с подложкой и плинтусом.", price: "от 350 ₽/м²" },
  { title: "Паркет и инженерная доска", desc: "Ёлочка, палуба, шлифовка, лак.", price: "от 1 200 ₽/м²" },
  { title: "Плитка и керамогранит", desc: "Кухни, санузлы, прихожие.", price: "от 1 100 ₽/м²" },
  { title: "Демонтаж старых полов", desc: "С выносом мусора по Казани.", price: "от 250 ₽/м²" },
];

const reviews = [
  { name: "Алия Г.", area: "ЖК «Салават Купере»", text: "Сделали стяжку и уложили ламинат в трёшке за 6 дней. Чисто, без сюрпризов по цене. Рекомендую." },
  { name: "Марат Х.", area: "Ново-Савиновский р-н", text: "Нужно было срочно поменять полы перед переездом. Приехали на замер на следующий день, смета прозрачная." },
  { name: "Екатерина С.", area: "Советский р-н", text: "Уложили паркет ёлочкой — выглядит как из журнала. Аккуратные ребята, убрали за собой." },
];

const Index = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", area: "", comment: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: "Заполните имя и телефон", variant: "destructive" });
      return;
    }
    toast({ title: "Заявка отправлена", description: "Перезвоним в течение 15 минут." });
    setForm({ name: "", phone: "", area: "", comment: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
        <div className="container flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-gradient-warm grid place-items-center text-primary-foreground font-bold">П</div>
            <div className="leading-tight">
              <div className="font-semibold text-sm sm:text-base">ПолМастер Казань</div>
              <div className="text-[11px] text-muted-foreground">Ремонт полов под ключ</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground">Услуги</a>
            <a href="#works" className="hover:text-foreground">Работы</a>
            <a href="#process" className="hover:text-foreground">Этапы</a>
            <a href="#reviews" className="hover:text-foreground">Отзывы</a>
            <a href="#contacts" className="hover:text-foreground">Контакты</a>
          </nav>
          <a href={PHONE_HREF} className="hidden sm:flex items-center gap-2 text-sm font-semibold">
            <Phone className="h-4 w-4 text-primary" />
            {PHONE}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-10 lg:gap-14 py-12 lg:py-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" /> Казань и пригород · выезд за 1 день
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Ремонт полов в Казани <span className="text-primary">под ключ</span> — без переделок
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Стяжка, ламинат, паркет, плитка. Работаем по договору, фиксируем цену в смете. Гарантия 2 года.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-gradient-warm hover:opacity-95 shadow-soft">
                <a href="#request">Бесплатный замер</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={PHONE_HREF} className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> Позвонить
                </a>
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              <div>
                <div className="text-2xl font-bold">5 лет</div>
                <div className="text-xs text-muted-foreground">опыт работы</div>
              </div>
              <div>
                <div className="text-2xl font-bold flex items-center gap-1">4.9 <Star className="h-4 w-4 fill-accent text-accent" /></div>
                <div className="text-xs text-muted-foreground">Яндекс Карты</div>
              </div>
              <div>
                <div className="text-2xl font-bold">2 года</div>
                <div className="text-xs text-muted-foreground">гарантия</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroFloor}
              alt="Ровный ламинат в квартире после ремонта в Казани"
              width={1600}
              height={1100}
              className="w-full h-auto rounded-2xl shadow-card object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-5 -left-3 sm:left-6 bg-card border border-border rounded-xl shadow-card p-4 max-w-[260px]">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
                </div>
                4.9 / 5
              </div>
              <div className="text-xs text-muted-foreground mt-1">по отзывам клиентов на Яндекс Картах</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container py-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: FileCheck, t: "Договор и смета", d: "Цена фиксируется до начала работ" },
            { icon: ShieldCheck, t: "Гарантия 2 года", d: "На материалы и монтаж" },
            { icon: Clock, t: "Сроки в договоре", d: "Без затягивания и доплат" },
            { icon: Hammer, t: "Свои мастера", d: "Без субподряда и случайных бригад" },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex items-start gap-3">
              <Icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <div className="font-semibold text-sm">{t}</div>
                <div className="text-xs text-muted-foreground">{d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="container py-16 lg:py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <div className="text-sm text-primary font-semibold">Отзывы клиентов</div>
            <h2 className="text-3xl lg:text-4xl font-bold mt-1">Нам доверяют жители Казани</h2>
          </div>
          <a href="https://yandex.ru/maps/" target="_blank" rel="noreferrer" className="text-sm font-medium text-primary hover:underline">
            Все отзывы на Яндекс Картах →
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map(r => (
            <article key={r.name} className="bg-card border border-border rounded-xl p-6 shadow-card">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
              </div>
              <p className="text-sm text-foreground/90 mt-3 leading-relaxed">«{r.text}»</p>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="font-semibold text-sm">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.area}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-secondary/40 border-y border-border">
        <div className="container py-16 lg:py-24">
          <div className="max-w-2xl">
            <div className="text-sm text-primary font-semibold">Услуги</div>
            <h2 className="text-3xl lg:text-4xl font-bold mt-1">Что делаем</h2>
            <p className="text-muted-foreground mt-3">Все этапы — от демонтажа до финишного покрытия. Можно заказать комплексно или отдельную работу.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {services.map(s => (
              <div key={s.title} className="bg-card border border-border rounded-xl p-6 hover:shadow-card transition-shadow">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                  <span className="text-sm font-semibold text-primary whitespace-nowrap">{s.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works / Before–After */}
      <section id="works" className="container py-16 lg:py-24">
        <div className="max-w-2xl mb-10">
          <div className="text-sm text-primary font-semibold">Наши работы</div>
          <h2 className="text-3xl lg:text-4xl font-bold mt-1">До и после</h2>
          <p className="text-muted-foreground mt-3">Объекты в Казани за последние месяцы. Больше фото покажем на замере.</p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-border shadow-card">
          <img src={beforeAfter} alt="Полы до и после ремонта" loading="lazy" width={1400} height={900} className="w-full h-auto" />
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mt-4">
          {[
            { src: work1, alt: "Укладка ламината", cap: "Ламинат, ЖК «Светлая долина»" },
            { src: work2, alt: "Полусухая стяжка", cap: "Стяжка, Приволжский р-н" },
            { src: work3, alt: "Паркет ёлочка", cap: "Паркет ёлочкой, центр Казани" },
          ].map(w => (
            <figure key={w.cap} className="rounded-xl overflow-hidden border border-border bg-card">
              <img src={w.src} alt={w.alt} loading="lazy" width={1000} height={800} className="w-full aspect-[5/4] object-cover" />
              <figcaption className="p-3 text-xs text-muted-foreground">{w.cap}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-secondary/40 border-y border-border">
        <div className="container py-16 lg:py-24">
          <div className="max-w-2xl mb-10">
            <div className="text-sm text-primary font-semibold">Как работаем</div>
            <h2 className="text-3xl lg:text-4xl font-bold mt-1">4 шага до готового пола</h2>
          </div>
          <ol className="grid md:grid-cols-4 gap-5">
            {[
              { n: "01", t: "Заявка", d: "Звоните или оставляете форму. Уточняем адрес и объём." },
              { n: "02", t: "Замер", d: "Бесплатный выезд по Казани. Считаем смету при вас." },
              { n: "03", t: "Договор", d: "Фиксируем цену, сроки и гарантию." },
              { n: "04", t: "Работа", d: "Делаем чисто, сдаём по чек-листу." },
            ].map(s => (
              <li key={s.n} className="bg-card border border-border rounded-xl p-6">
                <div className="text-primary font-bold text-sm">{s.n}</div>
                <div className="font-semibold mt-2">{s.t}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.d}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Request form */}
      <section id="request" className="container py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="text-sm text-primary font-semibold">Заявка на замер</div>
            <h2 className="text-3xl lg:text-4xl font-bold mt-1">Бесплатный замер и смета за 1 день</h2>
            <p className="text-muted-foreground mt-4">
              Оставьте телефон — перезвоним в течение 15 минут, согласуем удобное время. Замер ничего не обязывает.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Выезд по Казани и в радиусе 30 км",
                "Расчёт стоимости при вас, без скрытых доплат",
                "Подскажем по материалам — без навязывания",
              ].map(x => (
                <li key={x} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> {x}
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={submit} className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-card space-y-4">
            <div>
              <label className="text-sm font-medium">Имя</label>
              <Input className="mt-1.5" placeholder="Как к вам обращаться" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <label className="text-sm font-medium">Телефон *</label>
              <Input className="mt-1.5" type="tel" placeholder="+7 (___) ___-__-__" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div>
              <label className="text-sm font-medium">Адрес или район Казани</label>
              <Input className="mt-1.5" placeholder="Например, Ново-Савиновский р-н" value={form.area} onChange={e => setForm({ ...form, area: e.target.value })} />
            </div>
            <div>
              <label className="text-sm font-medium">Что нужно сделать</label>
              <Textarea className="mt-1.5 min-h-[90px]" placeholder="Площадь, тип покрытия, сроки" value={form.comment} onChange={e => setForm({ ...form, comment: e.target.value })} />
            </div>
            <Button type="submit" size="lg" className="w-full bg-gradient-warm hover:opacity-95">
              <Ruler className="h-4 w-4" /> Записаться на замер
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="bg-foreground text-background">
        <div className="container py-14 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-md bg-gradient-warm grid place-items-center text-primary-foreground font-bold">П</div>
              <div className="font-semibold">ПолМастер Казань</div>
            </div>
            <p className="text-sm text-background/70 mt-3 max-w-xs">
              Бригада с 5-летним опытом. Делаем полы в квартирах, домах и офисах Казани.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-background/50">Контакты</div>
            <a href={PHONE_HREF} className="block mt-3 text-xl font-semibold">{PHONE}</a>
            <a href="mailto:info@polmaster-kzn.ru" className="block text-sm text-background/70 mt-1">info@polmaster-kzn.ru</a>
            <div className="text-sm text-background/70 mt-3">Ежедневно 8:00 – 21:00</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-background/50">Адрес</div>
            <div className="mt-3 text-sm text-background/80 flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              г. Казань, выезд по всему городу и пригороду
            </div>
            <a href="https://yandex.ru/maps/" target="_blank" rel="noreferrer" className="inline-block mt-3 text-sm text-background underline underline-offset-4">
              Мы на Яндекс Картах
            </a>
          </div>
        </div>
        <div className="border-t border-background/10">
          <div className="container py-5 text-xs text-background/50 flex justify-between flex-wrap gap-2">
            <div>© {new Date().getFullYear()} ПолМастер Казань</div>
            <div>ИП Иванов И.И. · ИНН 0000000000</div>
          </div>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <a href={PHONE_HREF} className="sm:hidden fixed bottom-4 left-4 right-4 z-50 bg-gradient-warm text-primary-foreground rounded-xl py-3.5 text-center font-semibold shadow-soft flex items-center justify-center gap-2">
        <Phone className="h-4 w-4" /> Позвонить · {PHONE}
      </a>
    </div>
  );
};

export default Index;
