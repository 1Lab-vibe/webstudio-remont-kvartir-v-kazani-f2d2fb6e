import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ремонт полов в Казани — стяжка, ламинат, паркет под ключ" },
      {
        name: "description",
        content:
          "Ремонт полов в Казани под ключ: стяжка, выравнивание, укладка ламината, паркета, плитки. Опыт 5 лет, гарантия 2 года. Бесплатный замер и расчёт.",
      },
      { property: "og:title", content: "Ремонт полов в Казани — под ключ" },
      { property: "og:description", content: "Стяжка, ламинат, паркет, плитка. Опыт 5 лет, гарантия 2 года." },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Landing,
});

const PHONE = "+7 (843) 000-00-00";
const PHONE_HREF = "tel:+78430000000";
const WA_HREF = "https://wa.me/78430000000";

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <Portfolio />
      <Process />
      <Pricing />
      <Reviews />
      <RequestForm />
      <Contacts />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2 font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-[var(--wood-dark)] text-primary-foreground">П</span>
          <span className="text-base sm:text-lg">ПолМастер · Казань</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a href="#services" className="hover:text-foreground">Услуги</a>
          <a href="#portfolio" className="hover:text-foreground">Работы</a>
          <a href="#pricing" className="hover:text-foreground">Цены</a>
          <a href="#reviews" className="hover:text-foreground">Отзывы</a>
          <a href="#contacts" className="hover:text-foreground">Контакты</a>
        </nav>
        <a
          href={PHONE_HREF}
          className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          Позвонить
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, var(--wood-dark) 0 2px, transparent 2px 96px), repeating-linear-gradient(0deg, var(--wood-dark) 0 1px, transparent 1px 220px)",
        }}
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:py-20 md:gap-12">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--wood)]" /> Казань · работаем с 2020 года
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl">
            Ремонт полов в Казани <span className="text-[var(--wood-dark)]">под ключ</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Стяжка, выравнивание, ламинат, паркет, плитка. Бесплатный замер по городу,
            фиксированная смета и гарантия 2 года на работы.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#request"
              className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Бесплатный замер
            </a>
            <a
              href={WA_HREF}
              className="rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold hover:bg-secondary"
            >
              Написать в WhatsApp
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6 text-left">
            <Stat k="5 лет" v="на рынке Казани" />
            <Stat k="120+" v="объектов сдано" />
            <Stat k="2 года" v="гарантия по договору" />
          </dl>
        </div>

        <aside className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-center gap-3 border-b border-border pb-4">
            <div className="grid h-10 w-10 place-items-center rounded-md bg-[var(--wood)]/15 text-[var(--wood-dark)] font-bold">
              Я
            </div>
            <div>
              <div className="text-sm font-semibold">Яндекс Карты · Казань</div>
              <div className="text-xs text-muted-foreground">Подтверждённая компания</div>
            </div>
          </div>
          <div className="flex items-baseline gap-3 py-4">
            <span className="text-4xl font-bold text-[var(--wood-dark)]">4.9</span>
            <Stars />
            <span className="text-xs text-muted-foreground">из отзывов клиентов</span>
          </div>
          <ul className="space-y-2 text-sm">
            {[
              "Замер бесплатно — выезд в день обращения",
              "Договор и фиксированная смета",
              "Свои мастера, без субподряда",
              "Уборка после работ",
            ].map((t) => (
              <li key={t} className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--wood)]" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <a
            href={PHONE_HREF}
            className="mt-5 block rounded-md border border-[var(--wood-dark)] px-4 py-2.5 text-center text-sm font-semibold text-[var(--wood-dark)] hover:bg-[var(--wood)]/10"
          >
            {PHONE}
          </a>
        </aside>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-xl font-bold sm:text-2xl">{k}</dt>
      <dd className="text-xs text-muted-foreground sm:text-sm">{v}</dd>
    </div>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-[var(--wood)]" aria-label="Оценка 5 из 5">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9 4.8 17.6l1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </div>
  );
}

function TrustBar() {
  const items = [
    "Договор",
    "Гарантия 2 года",
    "Расчёт за 30 минут",
    "Своя бригада",
    "Работаем по Казани и пригороду",
  ];
  return (
    <div className="border-b border-border bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-4 text-xs text-muted-foreground sm:text-sm">
        {items.map((t) => (
          <span key={t} className="flex items-center gap-2">
            <Check /> {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" className="text-[var(--wood-dark)]" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Services() {
  const items = [
    { t: "Стяжка пола", d: "Полусухая и мокрая стяжка, перепад до 1 мм/м.", p: "от 650 ₽/м²" },
    { t: "Наливной пол", d: "Самовыравнивающиеся смеси под финишное покрытие.", p: "от 450 ₽/м²" },
    { t: "Укладка ламината", d: "С подложкой и плинтусом, любые схемы укладки.", p: "от 350 ₽/м²" },
    { t: "Паркет и инженерная доска", d: "Штучный, массив, паркетная доска. Шлифовка и лак.", p: "от 900 ₽/м²" },
    { t: "Плитка и керамогранит", d: "Кухня, прихожая, санузел. Тёплый пол под ключ.", p: "от 1 200 ₽/м²" },
    { t: "Демонтаж старых полов", d: "Аккуратный демонтаж, вывоз мусора.", p: "от 200 ₽/м²" },
  ];
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <SectionHead eyebrow="Услуги" title="Что делаем" sub="Полный цикл работ по полам — от демонтажа до финишного покрытия." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <div key={s.t} className="group rounded-xl border border-border bg-card p-6 transition hover:border-[var(--wood)]">
              <h3 className="text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="text-sm font-semibold text-[var(--wood-dark)]">{s.p}</span>
                <a href="#request" className="text-xs font-semibold text-muted-foreground group-hover:text-foreground">
                  Заказать →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl">
      <span className="text-xs font-semibold uppercase tracking-widest text-[var(--wood-dark)]">{eyebrow}</span>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Portfolio() {
  const items = [
    { t: "Квартира 62 м², ЖК «Весна»", d: "Стяжка + ламинат, 4 дня", grad: "linear-gradient(135deg, oklch(0.55 0.10 50), oklch(0.40 0.08 45))" },
    { t: "Студия 38 м², Ново-Савиновский", d: "Наливной пол + плитка, 3 дня", grad: "linear-gradient(135deg, oklch(0.65 0.08 60), oklch(0.45 0.07 50))" },
    { t: "Дом 140 м², Дербышки", d: "Инженерная доска по всему этажу", grad: "linear-gradient(135deg, oklch(0.50 0.12 45), oklch(0.30 0.06 40))" },
    { t: "Офис 90 м², ул. Спартаковская", d: "Демонтаж + керамогранит", grad: "linear-gradient(135deg, oklch(0.60 0.09 55), oklch(0.38 0.07 45))" },
  ];
  return (
    <section id="portfolio" className="border-b border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <SectionHead eyebrow="Работы" title="Сделано в Казани" sub="Несколько последних объектов. Полное портфолио — по запросу." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p) => (
            <div key={p.t} className="overflow-hidden rounded-xl border border-border bg-card">
              <div
                className="relative aspect-[4/3] w-full"
                style={{ background: p.grad }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, rgba(0,0,0,0.25) 0 1px, transparent 1px 28px), repeating-linear-gradient(0deg, rgba(0,0,0,0.18) 0 1px, transparent 1px 110px)",
                  }}
                />
                <span className="absolute left-3 top-3 rounded bg-background/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground">
                  Готово
                </span>
              </div>
              <div className="p-4">
                <h4 className="text-sm font-semibold">{p.t}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Заявка", d: "Звонок или форма — уточняем объём и адрес." },
    { n: "02", t: "Замер", d: "Бесплатный выезд по Казани, проверка основания." },
    { n: "03", t: "Смета и договор", d: "Фиксированная цена, сроки и материалы." },
    { n: "04", t: "Работы", d: "Своя бригада, ежедневные фотоотчёты." },
    { n: "05", t: "Сдача и гарантия", d: "Уборка, акт, гарантия 2 года." },
  ];
  return (
    <section id="process" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <SectionHead eyebrow="Как работаем" title="5 шагов от заявки до сдачи" />
        <ol className="mt-10 grid gap-4 md:grid-cols-5">
          {steps.map((s) => (
            <li key={s.n} className="rounded-xl border border-border bg-card p-5">
              <div className="text-xs font-bold tracking-widest text-[var(--wood)]">{s.n}</div>
              <h4 className="mt-2 font-semibold">{s.t}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Pricing() {
  const rows = [
    ["Демонтаж старого покрытия", "от 200 ₽/м²"],
    ["Полусухая стяжка", "от 650 ₽/м²"],
    ["Наливной пол", "от 450 ₽/м²"],
    ["Укладка ламината / SPC", "от 350 ₽/м²"],
    ["Укладка паркетной доски", "от 600 ₽/м²"],
    ["Штучный паркет, ёлка", "от 1 100 ₽/м²"],
    ["Плитка / керамогранит", "от 1 200 ₽/м²"],
    ["Тёплый пол (электрический)", "от 800 ₽/м²"],
    ["Установка плинтуса", "от 150 ₽/м.п."],
  ];
  return (
    <section id="pricing" className="border-b border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <SectionHead
          eyebrow="Цены"
          title="Прозрачный прайс"
          sub="Итоговая стоимость — после замера. Никаких скрытых доплат."
        />
        <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card">
          <table className="w-full text-sm">
            <tbody>
              {rows.map(([k, v], i) => (
                <tr key={k} className={i % 2 ? "bg-secondary/40" : ""}>
                  <td className="px-5 py-3.5 text-foreground">{k}</td>
                  <td className="px-5 py-3.5 text-right font-semibold text-[var(--wood-dark)]">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const items = [
    {
      n: "Айрат М.",
      where: "ЖК «Весна», Казань",
      t: "Делали стяжку и ламинат в трёшке. Уложились в срок, мусор вывезли. Цена не выросла относительно сметы.",
    },
    {
      n: "Лилия С.",
      where: "Ново-Савиновский р-н",
      t: "Положили плитку в санузле и на кухне, сделали тёплый пол. Аккуратно, по договору. Рекомендую.",
    },
    {
      n: "Дмитрий К.",
      where: "Дербышки",
      t: "Перестелили инженерную доску в доме 140 м². Понравилась прозрачность: фотоотчёт каждый вечер.",
    },
  ];
  return (
    <section id="reviews" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHead eyebrow="Отзывы" title="Что говорят клиенты" />
          <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-2.5">
            <Stars />
            <span className="text-sm font-semibold">4.9 на Яндекс Картах</span>
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map((r) => (
            <figure key={r.n} className="rounded-xl border border-border bg-card p-6">
              <Stars />
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground">«{r.t}»</blockquote>
              <figcaption className="mt-4 border-t border-border pt-3 text-sm">
                <div className="font-semibold">{r.n}</div>
                <div className="text-xs text-muted-foreground">{r.where}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function RequestForm() {
  const [sent, setSent] = useState(false);
  return (
    <section id="request" className="border-b border-border bg-[var(--wood-dark)] text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--wood)]">Заявка</span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Бесплатный замер и расчёт</h2>
          <p className="mt-3 max-w-md text-sm text-primary-foreground/75">
            Оставьте номер — перезвоним в течение 15 минут в рабочее время.
            Уточним адрес и подберём удобное время для замера.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-primary-foreground/85">
            <li className="flex gap-2"><Check /> Выезд по Казани — бесплатно</li>
            <li className="flex gap-2"><Check /> Смета в день замера</li>
            <li className="flex gap-2"><Check /> Без предоплаты до начала работ</li>
          </ul>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-xl bg-background p-6 text-foreground shadow-lg"
        >
          {sent ? (
            <div className="py-10 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[var(--wood)]/15 text-[var(--wood-dark)]">
                <Check />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Спасибо, заявка принята</h3>
              <p className="mt-2 text-sm text-muted-foreground">Мы перезвоним в течение 15 минут.</p>
            </div>
          ) : (
            <>
              <Field label="Имя" id="name" placeholder="Как к вам обращаться" />
              <Field label="Телефон" id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
              <div className="mb-4">
                <label htmlFor="type" className="mb-1.5 block text-sm font-medium">Тип работ</label>
                <select id="type" className="w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-[var(--wood-dark)]">
                  <option>Стяжка</option>
                  <option>Ламинат / SPC</option>
                  <option>Паркет</option>
                  <option>Плитка / керамогранит</option>
                  <option>Не знаю — нужна консультация</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="area" className="mb-1.5 block text-sm font-medium">Площадь, м² (необязательно)</label>
                <input id="area" type="number" inputMode="numeric" className="w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-[var(--wood-dark)]" placeholder="например, 60" />
              </div>
              <button type="submit" className="w-full rounded-md bg-[var(--wood-dark)] px-4 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
                Отправить заявку
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label, id, type = "text", placeholder, required,
}: { label: string; id: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <input
        id={id} name={id} type={type} placeholder={placeholder} required={required}
        className="w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-[var(--wood-dark)]"
      />
    </div>
  );
}

function Contacts() {
  return (
    <section id="contacts" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-3">
        <div>
          <SectionHead eyebrow="Контакты" title="На связи" />
          <p className="mt-3 text-sm text-muted-foreground">
            Работаем по Казани и пригороду: Иннополис, Зеленодольск, Высокая Гора.
          </p>
        </div>
        <div className="md:col-span-2 grid gap-4 sm:grid-cols-2">
          <ContactCard t="Телефон" v={PHONE} href={PHONE_HREF} />
          <ContactCard t="WhatsApp" v="Написать в чат" href={WA_HREF} />
          <ContactCard t="Часы работы" v="Пн–Сб, 9:00 – 21:00" />
          <ContactCard t="Адрес" v="г. Казань, ул. Спартаковская, 2" />
        </div>
      </div>
    </section>
  );
}

function ContactCard({ t, v, href }: { t: string; v: string; href?: string }) {
  const Inner = (
    <div className="rounded-xl border border-border bg-card p-5 transition hover:border-[var(--wood)]">
      <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t}</div>
      <div className="mt-1.5 font-semibold">{v}</div>
    </div>
  );
  return href ? <a href={href} className="block">{Inner}</a> : Inner;
}

function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
        <div>© {new Date().getFullYear()} ПолМастер · Ремонт полов в Казани</div>
        <div>ИП · ИНН 0000000000</div>
      </div>
    </footer>
  );
}
