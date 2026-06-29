import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JS Service - Guincho 24 Horas | Reboque e Socorro Automotivo" },
      { name: "description", content: "Guincho 24 horas perto de você. Reboque rápido e seguro para carros, motos e veículos leves. Atendimento emergencial via WhatsApp." },
      { property: "og:title", content: "JS Service - Guincho 24 Horas" },
      { property: "og:description", content: "Reboque e socorro automotivo rápido. Chame pelo WhatsApp." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Inter:wght@400;500;600;700&display=swap" },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" },
    ],
  }),
  component: Index,
});

const WA = "https://wa.me/5500000000000";

function Index() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{CSS}</style>
      <div className="js-site">
        <header className="header">
          <nav className="nav">
            <a href="#" className="logo"><i className="fa-solid fa-truck-pickup"></i> JS <span>Service</span></a>
            <a href={`${WA}?text=Ol%C3%A1!%20Preciso%20de%20um%20guincho%20agora.`} target="_blank" rel="noreferrer" className="nav-cta">
              <i className="fa-brands fa-whatsapp"></i> <span className="hide-sm">Chamar Guincho</span>
            </a>
          </nav>
        </header>

        <section className="hero">
          <div className="container hero-grid">
            <div className="reveal">
              <div className="badge-emerg"><span className="dot-blink"></span> Atendimento Emergencial 24h</div>
              <h1>Guincho <span className="accent">Rápido e Seguro</span> Quando Você Mais Precisa</h1>
              <p className="lead">Atendimento ágil para carros, motos e veículos leves. Fale agora pelo WhatsApp e solicite seu guincho com praticidade — socorro automotivo profissional onde você estiver.</p>
              <div className="cta-row">
                <a href={`${WA}?text=Preciso%20de%20guincho%20agora!`} target="_blank" rel="noreferrer" className="btn btn-whats btn-lg">
                  <i className="fa-brands fa-whatsapp"></i> Chamar no WhatsApp
                </a>
                <a href="#contato" className="btn btn-outline btn-lg">
                  <i className="fa-solid fa-bolt"></i> Solicitar Agora
                </a>
              </div>
              <div className="hero-trust">
                <div className="trust-item"><i className="fa-solid fa-clock"></i> Atendimento 24h</div>
                <div className="trust-item"><i className="fa-solid fa-shield-halved"></i> Reboque Seguro</div>
                <div className="trust-item"><i className="fa-solid fa-gauge-high"></i> Resposta Rápida</div>
              </div>
            </div>
            <div className="hero-image reveal">
              <img src="/images/hero-guincho.jpg" alt="Guincho JS Service em ação" />
              <div className="floating-card">
                <div className="icon-circle"><i className="fa-solid fa-headset"></i></div>
                <div className="fc-text"><strong>24/7</strong><span>Socorro automotivo agora</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="servicos">
          <div className="container">
            <div className="head-center reveal">
              <span className="section-tag">Nossos Serviços</span>
              <h2 className="section-title">Soluções de <span className="accent">Guincho e Reboque</span></h2>
              <p className="section-sub">Atendimento completo de socorro automotivo para qualquer situação — carro quebrado, moto parada, pane mecânica ou elétrica.</p>
            </div>
            <div className="services-grid">
              {[
                { icon: "fa-car", img: "service-carro", title: "Guincho para Carros", desc: "Reboque rápido e seguro para automóveis em caso de pane, acidente ou emergência." },
                { icon: "fa-motorcycle", img: "service-moto", title: "Guincho para Motos", desc: "Transporte seguro de motocicletas com equipamento adequado. Sua moto sem riscos." },
                { icon: "fa-truck-ramp-box", img: "service-carro", title: "Reboque de Veículos Leves", desc: "Reboque profissional para utilitários e veículos comerciais leves com cuidado total." },
                { icon: "fa-triangle-exclamation", img: "service-emergencia", title: "Socorro Automotivo", desc: "Suporte emergencial para pane mecânica, pane elétrica e veículos parados na rua." },
                { icon: "fa-route", img: "hero-guincho", title: "Transporte de Veículos", desc: "Remoção e transporte para oficinas, residências ou destino solicitado, com segurança." },
                { icon: "fa-bolt", img: "service-emergencia", title: "Atendimento Emergencial", desc: "Equipe pronta para responder rapidamente — guincho 24 horas perto de você." },
              ].map((s) => (
                <div key={s.title} className="service-card reveal">
                  <div className="service-img">
                    <div className="service-icon"><i className={`fa-solid ${s.icon}`}></i></div>
                    <img src={`/images/${s.img}.jpg`} alt={s.title} loading="lazy" />
                  </div>
                  <div className="service-body">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <a href={WA} target="_blank" rel="noreferrer" className="service-link">Solicitar agora <i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="diferenciais">
          <div className="container">
            <div className="head-center reveal">
              <span className="section-tag">Por Que Escolher</span>
              <h2 className="section-title">Por que chamar a <span className="accent">JS Service</span>?</h2>
              <p className="section-sub">Profissionalismo, agilidade e cuidado no transporte do seu veículo. Confiança que faz diferença na hora da urgência.</p>
            </div>
            <div className="diff-grid">
              {[
                { i: "fa-stopwatch", t: "Atendimento Rápido", d: "Resposta ágil para que você não fique parado por muito tempo na rua ou rodovia." },
                { i: "fa-user-shield", t: "Equipe Preparada", d: "Profissionais experientes em reboque, socorro automotivo e transporte de veículos." },
                { i: "fa-shield-halved", t: "Reboque com Segurança", d: "Equipamentos adequados que garantem o transporte sem danos ao seu veículo." },
                { i: "fa-brands fa-whatsapp", t: "Direto pelo WhatsApp", d: "Comunicação prática e rápida. Solicite seu guincho com poucos cliques." },
                { i: "fa-medal", t: "Serviço Profissional", d: "Padrão de atendimento focado em qualidade, transparência e respeito ao cliente." },
                { i: "fa-car-burst", t: "Para Emergências e Panes", d: "Ideal para imprevistos, panes mecânicas, elétricas e situações inesperadas." },
              ].map((d) => (
                <div key={d.t} className="diff-card reveal">
                  <div className="ic"><i className={d.i.startsWith("fa-brands") ? d.i : `fa-solid ${d.i}`}></i></div>
                  <h4>{d.t}</h4><p>{d.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="urgency" style={{ padding: 0 }}>
          <div className="container urgency-inner">
            <div className="reveal">
              <h2>Ficou na rua? Seu carro parou? Precisa de guincho agora?</h2>
              <p>Clique no botão ao lado e fale diretamente com a JS Service pelo WhatsApp.</p>
            </div>
            <a href={`${WA}?text=Preciso%20de%20guincho%20urgente!`} target="_blank" rel="noreferrer" className="btn btn-urgent reveal">
              <i className="fa-brands fa-whatsapp"></i> Pedir Guincho Agora
            </a>
          </div>
        </section>

        <section id="como-funciona">
          <div className="container">
            <div className="head-center reveal">
              <span className="section-tag">Como Funciona</span>
              <h2 className="section-title">Seu guincho em <span className="accent">3 passos simples</span></h2>
            </div>
            <div className="steps-grid">
              <div className="step reveal"><div className="step-num">1</div><h4>Clique no WhatsApp</h4><p>Toque no botão e abra uma conversa direta com nossa equipe.</p></div>
              <div className="step reveal"><div className="step-num">2</div><h4>Informe a Localização</h4><p>Envie sua localização e o tipo de veículo que precisa de reboque.</p></div>
              <div className="step reveal"><div className="step-num">3</div><h4>Aguarde o Guincho</h4><p>Nossa equipe se desloca rapidamente até você para o atendimento.</p></div>
            </div>
          </div>
        </section>

        <section className="areas" id="areas">
          <div className="container">
            <div className="head-center reveal">
              <span className="section-tag">Áreas de Atendimento</span>
              <h2 className="section-title">Guincho <span className="accent">perto de você</span></h2>
              <p className="section-sub">Atendimento com guincho para motoristas que precisam de reboque, socorro automotivo, transporte de veículos, remoção de carros e motos, pane mecânica, pane elétrica, veículo parado, carro quebrado, moto quebrada e emergência automotiva.</p>
            </div>
            <div className="areas-grid">
              {[
                { i: "fa-location-dot", t: "Região Central" },
                { i: "fa-city", t: "Bairros Próximos" },
                { i: "fa-road", t: "Rodovias" },
                { i: "fa-building", t: "Áreas Urbanas" },
                { i: "fa-map-location-dot", t: "Local e Regional" },
              ].map((a) => (
                <div key={a.t} className="area-chip reveal">
                  <i className={`fa-solid ${a.i}`}></i>
                  <strong>{a.t}</strong>
                  <span>Editar localidade</span>
                </div>
              ))}
            </div>
            <div className="kw-block reveal">
              <p>A <strong>JS Service</strong> é referência em <strong>guincho 24 horas</strong> e <strong>guincho perto de mim</strong>, oferecendo <strong>guincho rápido</strong> e <strong>guincho barato</strong>. Realizamos <strong>guincho para carro</strong>, <strong>guincho para moto</strong>, <strong>reboque de veículos</strong> e <strong>socorro automotivo</strong> com agilidade. Se você está com <strong>carro quebrado</strong>, <strong>moto quebrada</strong>, sofreu <strong>pane mecânica</strong> ou <strong>pane elétrica</strong>, conte com nosso <strong>guincho emergencial</strong>. Solicite seu <strong>guincho via WhatsApp</strong> — fazemos <strong>transporte de veículos</strong>, <strong>remoção de veículos</strong> e <strong>atendimento de guincho urgente</strong> na sua região. Precisa <strong>chamar guincho agora</strong>? Estamos prontos para o seu <strong>serviço de guincho</strong>.</p>
            </div>
          </div>
        </section>

        <section id="confianca">
          <div className="container trust-section">
            <div className="trust-img reveal">
              <img src="/images/service-emergencia.jpg" alt="Atendimento profissional" loading="lazy" />
            </div>
            <div className="reveal">
              <span className="section-tag">Confiança</span>
              <h2 className="section-title">Seu veículo em <span className="accent">boas mãos</span></h2>
              <p style={{ color: "var(--muted)", fontSize: 17 }}>A JS Service oferece atendimento de guincho com foco em segurança, agilidade e cuidado no transporte do seu veículo. Seja em caso de pane, emergência ou necessidade de remoção, nossa equipe está pronta para ajudar.</p>
              <div className="trust-features">
                {["Atendimento Profissional", "Cuidado com o Veículo", "Suporte Rápido", "Contato Direto"].map((t) => (
                  <div key={t} className="tf"><i className="fa-solid fa-check"></i><div><strong>{t}</strong><span>Padrão JS Service</span></div></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cta-final" id="contato">
          <div className="container reveal">
            <h2>Precisa de <span className="accent">guincho agora?</span></h2>
            <p>Não fique esperando. Fale com a JS Service pelo WhatsApp e solicite atendimento.</p>
            <a href={`${WA}?text=Preciso%20de%20guincho%20agora!`} target="_blank" rel="noreferrer" className="btn btn-whats btn-lg">
              <i className="fa-brands fa-whatsapp"></i> Chamar no WhatsApp
            </a>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <a href="#" className="logo"><i className="fa-solid fa-truck-pickup"></i> JS <span>Service</span></a>
                <p style={{ marginTop: 14, maxWidth: 340 }}>Serviço especializado em guincho, reboque e socorro automotivo 24 horas. Atendimento rápido, seguro e profissional.</p>
                <div className="social-row">
                  <a href={WA} target="_blank" rel="noreferrer" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
                  <a href="https://instagram.com/jsservice" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                </div>
              </div>
              <div>
                <h5>Serviço</h5>
                <ul><li>Guincho 24h</li><li>Reboque</li><li>Socorro Automotivo</li><li>Transporte de Veículos</li></ul>
              </div>
              <div>
                <h5>Contato</h5>
                <ul>
                  <li><i className="fa-brands fa-whatsapp"></i> (00) 00000-0000</li>
                  <li><i className="fa-brands fa-instagram"></i> @jsservice</li>
                  <li><i className="fa-solid fa-location-dot"></i> Endereço editável</li>
                </ul>
              </div>
              <div>
                <h5>Horário</h5>
                <ul>
                  <li><i className="fa-solid fa-clock"></i> Atendimento 24h</li>
                  <li><i className="fa-solid fa-calendar"></i> Todos os dias</li>
                  <li><i className="fa-solid fa-bolt"></i> Emergências sempre</li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <span>© {new Date().getFullYear()} JS Service — Guincho e Reboque. Todos os direitos reservados.</span>
              <span>Desenvolvido para atendimento rápido pelo WhatsApp.</span>
            </div>
          </div>
        </footer>

        <a href={`${WA}?text=Preciso%20de%20guincho!`} target="_blank" rel="noreferrer" className="float-whats" aria-label="WhatsApp">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </>
  );
}

const CSS = `
.js-site{--bg:#0b0d10;--bg-2:#13171c;--surface:#1a1f26;--line:rgba(255,255,255,.08);--text:#f5f6f8;--muted:#a3acb8;--yellow:#ffcc00;--orange:#ff7a00;--red:#e53935;--whats:#25d366;--whats-d:#128c7e;--grad:linear-gradient(135deg,#ff7a00 0%,#ffcc00 100%);--grad-red:linear-gradient(135deg,#e53935 0%,#ff7a00 100%);--shadow-glow:0 12px 40px -10px rgba(255,122,0,.55);font-family:'Inter',sans-serif;background:var(--bg);color:var(--text);line-height:1.6;overflow-x:hidden}
.js-site *{box-sizing:border-box}
.js-site h1,.js-site h2,.js-site h3,.js-site h4,.js-site h5{font-family:'Barlow Condensed',sans-serif;font-weight:800;letter-spacing:.5px;line-height:1.1;text-transform:uppercase;margin:0}
.js-site a{color:inherit;text-decoration:none}
.js-site img{max-width:100%;display:block}
.js-site ul{list-style:none;padding:0;margin:0}
.js-site .container{max-width:1240px;margin:0 auto;padding:0 24px}
.js-site .header{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(11,13,16,.85);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}
.js-site .nav{display:flex;align-items:center;justify-content:space-between;padding:14px 24px;max-width:1240px;margin:0 auto}
.js-site .logo{display:flex;align-items:center;gap:10px;font-family:'Barlow Condensed';font-size:26px;font-weight:900;letter-spacing:1px}
.js-site .logo i{color:var(--yellow);font-size:28px}
.js-site .logo span{color:var(--yellow)}
.js-site .nav-cta{display:inline-flex;align-items:center;gap:8px;background:var(--whats);color:#fff;padding:10px 18px;border-radius:50px;font-weight:700;font-size:14px;transition:all .2s}
.js-site .nav-cta:hover{transform:translateY(-2px);box-shadow:0 8px 20px rgba(37,211,102,.4)}
.js-site .hero{position:relative;min-height:100vh;padding:120px 0 60px;background:radial-gradient(ellipse at 20% 30%,rgba(255,122,0,.18),transparent 60%),radial-gradient(ellipse at 80% 70%,rgba(229,57,53,.15),transparent 60%),linear-gradient(180deg,#0b0d10 0%,#13171c 100%);overflow:hidden}
.js-site .hero::before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,204,0,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,204,0,.04) 1px,transparent 1px);background-size:60px 60px;mask-image:radial-gradient(ellipse at center,#000 30%,transparent 70%);pointer-events:none}
.js-site .hero-grid{display:grid;grid-template-columns:1.1fr 1fr;gap:60px;align-items:center;position:relative;z-index:2}
.js-site .badge-emerg{display:inline-flex;align-items:center;gap:10px;background:rgba(229,57,53,.12);border:1px solid rgba(229,57,53,.4);color:#ff8d8a;padding:8px 16px;border-radius:50px;font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;margin-bottom:24px}
.js-site .dot-blink{width:8px;height:8px;background:var(--red);border-radius:50%;animation:blink 1.2s infinite}
@keyframes blink{0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(229,57,53,.6)}50%{opacity:.5;box-shadow:0 0 0 8px rgba(229,57,53,0)}}
.js-site .hero h1{font-size:clamp(40px,5.4vw,76px);margin-bottom:20px}
.js-site .accent{background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent}
.js-site .lead{font-size:clamp(16px,1.4vw,19px);color:var(--muted);max-width:560px;margin-bottom:32px}
.js-site .cta-row{display:flex;flex-wrap:wrap;gap:14px;margin-bottom:36px}
.js-site .btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:18px 28px;border-radius:12px;font-weight:700;font-size:16px;border:none;cursor:pointer;transition:all .25s;text-transform:uppercase;letter-spacing:.5px}
.js-site .btn-whats{background:var(--whats);color:#fff;box-shadow:0 10px 30px -8px rgba(37,211,102,.55)}
.js-site .btn-whats:hover{background:var(--whats-d);transform:translateY(-3px)}
.js-site .btn-outline{background:transparent;color:var(--text);border:2px solid var(--line)}
.js-site .btn-outline:hover{border-color:var(--yellow);color:var(--yellow)}
.js-site .btn-lg{padding:22px 38px;font-size:18px}
.js-site .hero-trust{display:flex;gap:24px;flex-wrap:wrap}
.js-site .trust-item{display:flex;align-items:center;gap:10px;color:var(--muted);font-size:14px}
.js-site .trust-item i{color:var(--yellow);font-size:18px}
.js-site .hero-image{position:relative}
.js-site .hero-image img{border-radius:20px;box-shadow:0 30px 80px -20px rgba(0,0,0,.7),0 0 0 1px var(--line);aspect-ratio:4/5;object-fit:cover;width:100%}
.js-site .hero-image::after{content:"";position:absolute;inset:-20px;border-radius:24px;background:var(--grad);opacity:.25;filter:blur(60px);z-index:-1}
.js-site .floating-card{position:absolute;bottom:-20px;left:-20px;background:rgba(26,31,38,.95);backdrop-filter:blur(10px);border:1px solid var(--line);border-radius:16px;padding:18px 22px;display:flex;align-items:center;gap:14px;box-shadow:0 20px 40px -10px rgba(0,0,0,.5)}
.js-site .icon-circle{width:46px;height:46px;border-radius:50%;background:var(--grad);display:flex;align-items:center;justify-content:center;color:#0b0d10;font-size:20px}
.js-site .fc-text strong{display:block;font-size:18px;font-family:'Barlow Condensed';font-weight:800}
.js-site .fc-text span{font-size:12px;color:var(--muted)}
.js-site section{padding:90px 0;position:relative}
.js-site .section-tag{display:inline-block;color:var(--yellow);font-weight:700;font-size:13px;letter-spacing:3px;text-transform:uppercase;margin-bottom:14px}
.js-site .section-title{font-size:clamp(32px,4vw,52px);margin-bottom:14px;max-width:760px}
.js-site .section-sub{color:var(--muted);font-size:17px;max-width:680px;margin-bottom:50px}
.js-site .head-center{text-align:center;margin:0 auto 50px}
.js-site .head-center .section-title,.js-site .head-center .section-sub{margin-left:auto;margin-right:auto}
.js-site .services{background:var(--bg-2)}
.js-site .services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.js-site .service-card{background:var(--surface);border:1px solid var(--line);border-radius:18px;overflow:hidden;transition:all .3s;display:flex;flex-direction:column}
.js-site .service-card:hover{transform:translateY(-8px);border-color:rgba(255,204,0,.4);box-shadow:0 20px 40px -10px rgba(0,0,0,.5)}
.js-site .service-img{position:relative;aspect-ratio:16/10;overflow:hidden}
.js-site .service-img img{width:100%;height:100%;object-fit:cover;transition:transform .5s}
.js-site .service-card:hover .service-img img{transform:scale(1.08)}
.js-site .service-img::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 40%,rgba(11,13,16,.9) 100%)}
.js-site .service-icon{position:absolute;top:16px;left:16px;z-index:2;width:48px;height:48px;border-radius:12px;background:var(--grad);display:flex;align-items:center;justify-content:center;color:#0b0d10;font-size:20px}
.js-site .service-body{padding:24px}
.js-site .service-body h3{font-size:24px;margin-bottom:10px}
.js-site .service-body p{color:var(--muted);font-size:15px;margin-bottom:16px}
.js-site .service-link{color:var(--yellow);font-weight:700;font-size:14px;display:inline-flex;align-items:center;gap:6px}
.js-site .diff-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.js-site .diff-card{background:linear-gradient(180deg,var(--surface) 0%,var(--bg-2) 100%);border:1px solid var(--line);border-radius:16px;padding:28px;transition:all .3s}
.js-site .diff-card:hover{transform:translateY(-5px);border-color:var(--orange)}
.js-site .diff-card .ic{width:54px;height:54px;border-radius:14px;background:rgba(255,122,0,.15);color:var(--orange);display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:18px}
.js-site .diff-card h4{font-size:22px;margin-bottom:8px}
.js-site .diff-card p{color:var(--muted);font-size:15px}
.js-site .urgency{background:var(--grad-red);padding:70px 0;position:relative;overflow:hidden}
.js-site .urgency::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(45deg,rgba(0,0,0,.08) 0 20px,transparent 20px 40px)}
.js-site .urgency-inner{position:relative;z-index:2;display:grid;grid-template-columns:1fr auto;gap:40px;align-items:center;padding:70px 24px}
.js-site .urgency h2{font-size:clamp(28px,3.5vw,46px);color:#fff;margin-bottom:8px}
.js-site .urgency p{color:rgba(255,255,255,.92);font-size:17px}
.js-site .btn-urgent{background:#0b0d10;color:#fff;font-size:18px;padding:22px 36px}
.js-site .btn-urgent:hover{background:#000;transform:translateY(-3px)}
.js-site .steps-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:30px}
.js-site .step{text-align:center;padding:36px 24px;background:var(--surface);border:1px solid var(--line);border-radius:18px}
.js-site .step-num{width:64px;height:64px;border-radius:50%;background:var(--grad);color:#0b0d10;display:flex;align-items:center;justify-content:center;font-family:'Barlow Condensed';font-size:32px;font-weight:900;margin:0 auto 20px;box-shadow:var(--shadow-glow)}
.js-site .step h4{font-size:22px;margin-bottom:8px}
.js-site .step p{color:var(--muted);font-size:15px}
.js-site .areas{background:var(--bg-2)}
.js-site .areas-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-top:30px}
.js-site .area-chip{background:var(--surface);border:1px solid var(--line);padding:22px 18px;border-radius:14px;text-align:center;transition:all .25s}
.js-site .area-chip:hover{border-color:var(--yellow);transform:translateY(-3px)}
.js-site .area-chip i{color:var(--yellow);font-size:22px;margin-bottom:10px;display:block}
.js-site .area-chip strong{display:block;font-size:15px;font-weight:700}
.js-site .area-chip span{display:block;font-size:12px;color:var(--muted);margin-top:4px}
.js-site .kw-block{background:var(--surface);border:1px solid var(--line);padding:32px;border-radius:18px;margin-top:40px}
.js-site .kw-block p{color:var(--muted);font-size:15px;line-height:1.8}
.js-site .kw-block strong{color:var(--yellow);font-weight:600}
.js-site .trust-section{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}
.js-site .trust-img{position:relative;border-radius:20px;overflow:hidden;aspect-ratio:4/3}
.js-site .trust-img img{width:100%;height:100%;object-fit:cover}
.js-site .trust-features{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin-top:30px}
.js-site .tf{display:flex;gap:14px;align-items:flex-start}
.js-site .tf i{width:40px;height:40px;border-radius:10px;background:rgba(255,204,0,.12);color:var(--yellow);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px}
.js-site .tf strong{display:block;font-size:16px;margin-bottom:2px}
.js-site .tf span{color:var(--muted);font-size:13px}
.js-site .cta-final{background:radial-gradient(ellipse at center,rgba(255,122,0,.25),transparent 70%),var(--bg);text-align:center;padding:120px 0}
.js-site .cta-final h2{font-size:clamp(38px,5vw,68px);margin-bottom:16px}
.js-site .cta-final p{color:var(--muted);font-size:18px;max-width:580px;margin:0 auto 36px}
.js-site .footer{background:#070809;padding:60px 0 30px;border-top:1px solid var(--line)}
.js-site .footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px}
.js-site .footer h5{font-size:18px;margin-bottom:18px;color:var(--yellow)}
.js-site .footer p,.js-site .footer li{color:var(--muted);font-size:14px;line-height:1.9}
.js-site .footer li i{color:var(--orange);width:18px;margin-right:8px}
.js-site .footer-bottom{border-top:1px solid var(--line);padding-top:24px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;color:var(--muted);font-size:13px}
.js-site .social-row{display:flex;gap:10px;margin-top:14px}
.js-site .social-row a{width:38px;height:38px;border-radius:10px;background:var(--surface);display:flex;align-items:center;justify-content:center;color:var(--yellow);transition:all .25s}
.js-site .social-row a:hover{background:var(--grad);color:#0b0d10}
.js-site .float-whats{position:fixed;bottom:24px;right:24px;z-index:99;width:64px;height:64px;border-radius:50%;background:var(--whats);color:#fff;display:flex;align-items:center;justify-content:center;font-size:30px;box-shadow:0 10px 30px rgba(37,211,102,.5);animation:pulse 2s infinite}
@keyframes pulse{0%,100%{box-shadow:0 10px 30px rgba(37,211,102,.5),0 0 0 0 rgba(37,211,102,.6)}50%{box-shadow:0 10px 30px rgba(37,211,102,.5),0 0 0 18px rgba(37,211,102,0)}}
.js-site .float-whats:hover{transform:scale(1.1)}
.js-site .reveal{opacity:0;transform:translateY(30px);transition:opacity .8s,transform .8s}
.js-site .reveal.in{opacity:1;transform:none}
@media(max-width:980px){.js-site .hero-grid,.js-site .trust-section,.js-site .urgency-inner{grid-template-columns:1fr;gap:40px}.js-site .services-grid,.js-site .diff-grid,.js-site .steps-grid{grid-template-columns:repeat(2,1fr)}.js-site .areas-grid{grid-template-columns:repeat(2,1fr)}.js-site .footer-grid{grid-template-columns:1fr 1fr}.js-site .hide-sm{display:none}.js-site section{padding:70px 0}}
@media(max-width:600px){.js-site .services-grid,.js-site .diff-grid,.js-site .steps-grid,.js-site .footer-grid{grid-template-columns:1fr}.js-site .areas-grid{grid-template-columns:1fr 1fr}.js-site .urgency-inner{text-align:center}.js-site .floating-card{left:50%;transform:translateX(-50%);bottom:-30px}.js-site .btn{width:100%}.js-site .cta-row{flex-direction:column}.js-site .float-whats{width:56px;height:56px;font-size:26px;bottom:18px;right:18px}}
`;
