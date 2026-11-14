
/*  TEXTOS DO SITE (português e inglês)
   Para mudar um texto, procure pela frase e edite aqui. */
const T = {
  pt: {
    /* menu */
    n_home: "Página Inicial",
    n_about: "Sobre mim",
    n_tools: "Tecnologias",
    n_proj: "Projetos",
    n_contact: "Contato",

    /* início */
    hi: "Olá, eu sou",
    role: "Estudante de Engenharia de Software, apaixonada por front-end e interfaces bonitas.",
    b_proj: "Ver projetos",
    b_contact: "Fale comigo",

    /* sobre mim */
    about1: "Sou estudante de Engenharia de Software com foco em desenvolvimento front-end. Gosto de transformar ideias em interfaces claras, acessíveis e agradáveis de usar.",
    about2: "Estou sempre aprendendo e construindo projetos para evoluir na prática. Aqui você encontra um pouco do meu trabalho.",
    photo: "Sua foto aqui",

    /* tecnologias */
    t_title: "Ferramentas e tecnologias",

    /* projetos */
    more: "Ver mais",
    all_t: "Todos os projetos",
    pub: "publicado(s)",
    back: "← Voltar aos projetos",
    live: "Ver projeto ao vivo",
    gh_btn: "Ver no GitHub",
    ch_t: "Desafios e soluções",
    dc_t: "Decisões técnicas",
    pname: "Nome do projeto",
    pdesc: "Descrição curta do projeto. Edite com o que ele faz e o que você aprendeu.",

    /* formulário */
    l_name: "Nome",
    l_mail: "E-mail",
    l_subj: "Assunto",
    l_msg: "Mensagem",
    p_name: "Seu nome",
    p_mail: "email@exemplo.com",
    p_subj: "Sobre o que é?",
    p_msg: "Conte um pouco sobre seu projeto...",
    f_send: "Enviar mensagem",
    thanks: "Mensagem enviada! Obrigada 💜",
    err: "Não foi possível enviar. Tente pelo e-mail.",

    /* rodapé e privacidade */
    rights: "Todos os direitos reservados.",
    priv_l: "Política de Privacidade",
    back_home: "← Voltar ao início",
    priv_p1: "Este site é um portfólio pessoal. As informações enviadas pelo formulário de contato (nome, e-mail, assunto e mensagem) são usadas apenas para responder ao seu contato.",
    priv_p2: "Seus dados não são vendidos nem compartilhados com terceiros, e o site não usa cookies de rastreamento.",
    priv_p3: "Para pedir a exclusão dos seus dados, escreva para contatovitoriacavallro@gmail.com."
  },

  en: {
    /* menu */
    n_home: "Home",
    n_about: "About me",
    n_tools: "Technologies",
    n_proj: "Projects",
    n_contact: "Contact",

    /* início */
    hi: "Hi, I am",
    role: "Software Engineering student, passionate about front-end and beautiful interfaces.",
    b_proj: "View projects",
    b_contact: "Get in touch",

    /* sobre mim */
    about1: "I am a Software Engineering student focused on front-end development. I love turning ideas into clear, accessible and enjoyable interfaces.",
    about2: "I am always learning and building projects to grow through practice. Here you can see a bit of my work.",
    photo: "Your photo here",

    /* tecnologias */
    t_title: "Tools and technologies",

    /* projetos */
    more: "See more",
    all_t: "All projects",
    pub: "published",
    back: "← Back to projects",
    live: "View live project",
    gh_btn: "View on GitHub",
    ch_t: "Challenges and solutions",
    dc_t: "Technical decisions",
    pname: "Project name",
    pdesc: "Short project description. Edit with what it does and what you learned.",

    /* formulário */
    l_name: "Name",
    l_mail: "Email",
    l_subj: "Subject",
    l_msg: "Message",
    p_name: "Your name",
    p_mail: "email@example.com",
    p_subj: "What is it about?",
    p_msg: "Tell me a bit about your project...",
    f_send: "Send message",
    thanks: "Message sent! Thank you 💜",
    err: "Could not send. Please try by email.",

    /* rodapé e privacidade */
    rights: "All rights reserved.",
    priv_l: "Privacy Policy",
    back_home: "← Back to home",
    priv_p1: "This site is a personal portfolio. Information sent through the contact form (name, email, subject and message) is used only to reply to you.",
    priv_p2: "Your data is not sold or shared with third parties, and the site does not use tracking cookies.",
    priv_p3: "To request deletion of your data, write to contatovitoriacavallro@gmail.com."
  }
};

let lang = "pt";
const $ = s => document.querySelector(s);


/* ÍCONES DAS TECNOLOGIAS*/
const ic = {
  ux: '<svg viewBox="0 0 48 48"><rect x="5" y="8" width="38" height="28" rx="5" fill="none" stroke="currentColor" stroke-width="3"/><path d="M5 17h38" stroke="currentColor" stroke-width="3"/><path d="M18 43h12M24 36v7" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>',

  js: '<svg viewBox="0 0 48 48"><rect width="48" height="48" rx="6" fill="#F7DF1E"/><text x="43" y="42" text-anchor="end" font-size="22" font-weight="800" font-family="Arial,sans-serif" fill="#000">JS</text></svg>',

  ts: '<svg viewBox="0 0 48 48"><rect width="48" height="48" rx="6" fill="#3178C6"/><text x="43" y="42" text-anchor="end" font-size="22" font-weight="800" font-family="Arial,sans-serif" fill="#fff">TS</text></svg>',

  html: '<svg viewBox="0 0 48 48"><polygon points="6,4 10,42 24,46 38,42 42,4" fill="#E44D26"/><polygon points="24,8 24,42 35,39 38,8" fill="#F16529"/><text x="24" y="32" text-anchor="middle" font-size="22" font-weight="800" font-family="Arial,sans-serif" fill="#fff">5</text></svg>',

  css: '<svg viewBox="0 0 48 48"><polygon points="6,4 10,42 24,46 38,42 42,4" fill="#1572B6"/><polygon points="24,8 24,42 35,39 38,8" fill="#33A9DC"/><text x="24" y="32" text-anchor="middle" font-size="22" font-weight="800" font-family="Arial,sans-serif" fill="#fff">3</text></svg>',

  vs: '<svg viewBox="0 0 48 48"><path d="M34 5 17 21 8 14l-3 2v16l3 2 9-7 17 16 9-4V9z" fill="#007ACC"/><path d="M34 16v16L22 24z" fill="#fff" opacity=".92"/></svg>',

  git: '<svg viewBox="0 0 48 48"><rect x="8" y="8" width="32" height="32" rx="4" fill="#F05032" transform="rotate(45 24 24)"/><path d="M19 15v17M19 24q0 4 12 4" fill="none" stroke="#fff" stroke-width="3"/><circle cx="19" cy="15" r="3.5" fill="#fff"/><circle cx="19" cy="32" r="3.5" fill="#fff"/><circle cx="31" cy="28" r="3.5" fill="#fff"/></svg>',

  gh: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>',

  fg: '<svg viewBox="0 0 38 57"><path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/><path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/><path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19z" fill="#FF7262"/><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/></svg>',

  cv: '<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="22" fill="#00C4CC"/><text x="24" y="32" text-anchor="middle" font-size="24" font-weight="800" font-family="Arial,sans-serif" fill="#fff">C</text></svg>'
};


/* FAIXA DE TECNOLOGIAS PASSANDO NA TELA
   Formato: ["nome que aparece", ícone]
   Para tirar uma tecnologia, apague a linha dela. */
const techs = [
  ["UI/UX", ic.ux],
  ["JavaScript", ic.js],
  ["TypeScript", ic.ts],
  ["HTML", ic.html],
  ["CSS", ic.css],
  ["VS Code", ic.vs],
  ["Git", ic.git],
  ["GitHub", ic.gh],
  ["Figma", ic.fg],
  ["Canva", ic.cv]
];

const mi = techs
  .map(t => `<div class="mi">${t[1]}<span>${t[0]}</span></div>`)
  .join("");

$("#mtrack").innerHTML = mi + mi + mi + mi;


/*  PROJETOS: EDITE AQUI
   Os 3 primeiros aparecem na página inicial.
   Todos aparecem em "Ver mais". */
const PR = [
  {
    nome: "Lista de Tarefas",                 // título do projeto
    ano: "2026",
    tipo: "Web",                              // Web, Mobile, Design...
    descricao: {                              // pode ser só um texto: descricao: "..."
      pt: "Aplicativo para organizar as tarefas do dia a dia, feito com JavaScript puro.",
      en: "App to organize daily tasks, built with vanilla JavaScript."
    },
    techs: ["js", "html", "css"],             // opções: js, ts, html, css, git, ux
    foto: "assets/images/listadetarefas.png",   // print do projeto (opcional)
    github: "https://github.com/vitoriacdev/todo-list-js",      // troque pelo seu link
    ao_vivo: "https://vitoriacdev.github.io/todo-list-js/",     // opcional: sem ele, o botão some
    desafios: {                               // cada item vira um número (01, 02...)
      pt: [
        "Salvar as tarefas mesmo depois de fechar a página.",
        "Filtrar tarefas concluídas e pendentes."
      ],
      en: [
        "Keeping tasks saved after closing the page.",
        "Filtering completed and pending tasks."
      ]
    },
    decisoes: {
      pt: [
        "Usei localStorage para guardar os dados.",
        "Mantive o código simples, sem bibliotecas."
      ],
      en: [
        "I used localStorage to store the data.",
        "I kept the code simple, with no libraries."
      ]
    }
  },

  {
    nome: "Página de Login",                
    ano: "2026",
    tipo: "Web e Mobile",                            
    descricao: {                    
      pt: "AO Patinhas & Cia é uma interface web moderna de autenticação (Login e Cadastro) desenvolvida com foco em experiência do usuário (UX) e design lúdico, voltada para o segmento de petshops. A aplicação conta com um painel deslizante animado, formulários dinâmicos, seleção estilizada de tipos de pets, modal de Termos de Uso integrado e validações visuais nativas.",
      en: "Patinhas & Cia is a modern web authentication interface (Login and Sign-Up) built with a focus on User Experience (UX) and a playful, pet-friendly aesthetic. The application features an animated sliding panel, dynamic forms, custom-styled pet type selectors, an integrated Terms of Use modal, and native visual form validations.."
    },
    techs: ["html", "css", "ux"],            
    foto: "assets/images/login.petshop.png",  
    github: "https://github.com/vitoriacdev/pagelogin_petshop",      
    ao_vivo: "https://vitoriacdev.github.io/pagelogin_petshop/",     
    desafios: {                               
      pt: [
        "Criar uma transição fluida entre as telas de login e cadastro dentro de um único container (card), alterando a visibilidade dos campos e deslizando o painel lateral sem utilizar bibliotecas externas de animação.",
        "Substituir os inputs nativos (caixas de seleção e botões de rádio) por elementos visuais personalizados (como a caixa com ícone de check e os botões de seleção de tipo de pet) sem perder a acessibilidade e garantindo que toda a área do rótulo (label) fosse clicável de forma natural.", 
        "Sincronizar o checkbox de aceite dos (Termos de Uso) localizado no formulário principal de cadastro com o checkbox presente dentro do modal de leitura, garantindo que o usuário pudesse marcar em qualquer um dos locais e o estado fosse refletido instantaneamente."
      ],
      en: [
        "Creating a smooth transition between the login and registration views within a single container card—toggling field visibility and sliding the overlay panel—without relying on external animation libraries.",
        "Replacing native browser inputs with custom-styled UI elements (custom checkmarks and pill-shaped pet type selectors) while maintaining full accessibility and ensuring the entire <label> area remains naturally clickable without z-index or pointer-event conflicts.",
        "Keeping the (Terms of Use) acceptance checkbox on the main registration form synchronized with the checkbox inside the reading modal, allowing users to toggle agreement from either location seamlessly."
      ]
      },
    decisoes: {
      pt: [
        "Para evitar complexidade desnecessária com JavaScript em animações de layout, utilizou-se um input de tipo checkbox oculto em conjunto com seletores de irmãos gerais (~). Isso permitiu controlar a alternância de visibilidade e o deslizamento do painel lateral de forma altamente performática e nativa.",
        "Ocultou-se o input de seleção mantendo a estrutura semântica dentro da tag <label>, permitindo que o navegador gerenciasse nativamente os eventos de clique tanto no ícone visual quanto no texto correspondente.", 
        "O modal de Termos de Uso foi construído utilizando a pseudo-classe CSS :target, dispensando scripts complexos apenas para abrir e fechar a janela.", 
        "Para a comunicação entre o checkbox do formulário e o do modal, implementou-se um script leve em JavaScript puro (DOMContentLoaded) que escuta o evento change em ambos os elementos e reflete o estado bid Mapeamento mútuo, garantindo validação fluida." 
      ],
      en: [
        "To avoid unnecessary JavaScript overhead for layout animations, a hidden checkbox input paired with general sibling combinators (~) was implemented to control panel sliding and form visibility natively and performantly.",
        "Inputs were visually hidden using accessible CSS patterns while remaining nested inside semantic <label> elements, allowing the browser to handle click events across both the custom visual box and text labels natively.",
        "The Terms of Use modal leverages the CSS :target pseudo-class to open and close without heavy scripting.",
        "For cross-element state synchronization, a lightweight Vanilla JavaScript (DOMContentLoaded) listener monitors change events on both checkboxes to mirror their checked states in real time."
      ]
    }
  },

  {
    // exemplo mínimo: só o que você quiser preencher
    nome: "Terceiro Projeto",
    ano: "2025",
    techs: ["ts", "css"],
    github: "https://github.com/vitoriacdev"
  },

  // Para adicionar outro: coloque uma vírgula depois do último },
  // copie um bloco inteiro { ... } e cole aqui.
];


/* DAQUI PARA BAIXO NÃO PRECISA MEXER */


/* FOTO DE EXEMPLO (usada quando o projeto não tem "foto") */
const art = i => {
  const h = [200, 215, 190, 230, 175, 245, 205, 185, 222][i % 9];
  const c = l => `hsl(${h} 45% ${l}%)`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c(58)}"/><stop offset="1" stop-color="${c(80)}"/></linearGradient></defs><rect width="400" height="240" fill="url(#g)"/><circle cx="${80 + (i * 55) % 240}" cy="70" r="26" fill="#fff" opacity=".55"/><path d="M0 170 L90 110 L170 165 L250 95 L330 150 L400 120 V240 H0Z" fill="${c(42)}"/><path d="M0 200 L70 160 L150 205 L240 150 L320 200 L400 170 V240 H0Z" fill="${c(26)}"/></svg>`;

  return `url('data:image/svg+xml,${encodeURIComponent(svg)}')`;
};


/* Escolhem o idioma e usam um texto padrão se algo estiver vazio. */
const L = v => (v && v.pt !== undefined ? (v[lang] || v.pt) : v);

const nome = (p, i) => L(p.nome) || `${T[lang].pname} ${i + 1}`;

const desc = p => L(p.descricao) || T[lang].pdesc;

const bg = (p, i) => (p.foto ? `url('${p.foto}')` : art(i));

const ph = p => `<div class="ico">${(p.techs || []).map(k => `<span>${ic[k]}</span>`).join("")}</div>`;


/*  CARDS DOS PROJETOS */

/* card de destaque (página inicial) */
const card = (p, i) => `
  <div class="pj" tabindex="0">
    <div class="img" style="background-image:${bg(p, i)}">
      <div class="ov">${ph(p)}</div>
    </div>
    <div class="more">
      <span class="pn">${nome(p, i)}</span>
      <a class="btn fill sm" href="#projeto-${i + 1}">${T[lang].more}</a>
    </div>
  </div>`;

/* card da grade "Todos os projetos" */
const gitem = (p, i) => `
  <a class="gi" href="#projeto-${i + 1}">
    <div class="img" style="background-image:${bg(p, i)}">${ph(p)}</div>
    <div class="b">
      <small>${String(i + 1).padStart(2, "0")}</small>
      <h3>${nome(p, i)}</h3>
      <p>${desc(p)}</p>
    </div>
    <div class="ar">↗</div>
  </a>`;


/* PÁGINA DE DETALHE DO PROJETO */
function detail(i) {
  const p = PR[i];
  const t = T[lang];
  const d = $("#dt");
  if (!d) return;

  /* lista numerada (desafios e decisões) */
  const lista = a => (L(a) || [t.pdesc])
    .map((x, n) => `<p class="np"><b>0${n + 1}</b><span>${x}</span></p>`)
    .join("");

  const tipo = p.tipo || "Web";

  /* botão "ao vivo" só aparece se o projeto tiver o link */
  const live = p.ao_vivo
    ? `<a class="btn fill" href="${p.ao_vivo}" target="_blank" rel="noopener">${t.live} ↗</a>`
    : "";

  const gh = `<a class="btn ${p.ao_vivo ? "out" : "fill"}" href="${p.github || "https://github.com/vitoriacdev"}" target="_blank" rel="noopener">${t.gh_btn} ↗</a>`;

  d.innerHTML = `
    <a class="back" href="#todos">${t.back}</a>

    <div class="dcard">
      <div class="dtop">
        <div class="dl">
          <span class="tag">${tipo}</span>
          <span class="tag">${p.ano || ""}</span>
          <h1>${nome(p, i)}</h1>
          <p>${desc(p)}</p>
        </div>
        <div class="dr">
          <div class="big" style="background-image:${bg(p, i)}">${ph(p)}</div>
        </div>
      </div>
      <div class="dbar">
        <div class="bt">${live}${gh}</div>
        <span>${p.ano || ""} · ${tipo}</span>
      </div>
    </div>

    <div class="dcols">
      <div>
        <h4>${t.ch_t}</h4>
        ${lista(p.desafios)}
      </div>
      <div>
        <h4>${t.dc_t}</h4>
        ${lista(p.decisoes)}
      </div>
    </div>`;
}


/* MONTAR OS PROJETOS NA TELA */
function projects() {
  $("#feat").innerHTML = PR.slice(0, 3).map(card).join("");
  $("#allp").innerHTML = PR.map(gitem).join("");
  $("#cnt").textContent = PR.length + " " + T[lang].pub;

  const m = location.hash.match(/^#projeto-(\d+)$/);
  if (m && PR[+m[1] - 1]) detail(+m[1] - 1);
}


/* NAVEGAÇÃO ENTRE AS "PÁGINAS"
   (início, todos os projetos, projeto, privacidade) */
function route() {
  const h = location.hash;
  const m = h.match(/^#projeto-(\d+)$/);
  const ok = m && PR[+m[1] - 1];
  const all = h === "#todos";
  const pv = h === "#privacidade";

  document.body.classList.toggle("all", all);
  document.body.classList.toggle("pv", pv);
  document.body.classList.toggle("det", !!ok);

  if (ok) detail(+m[1] - 1);

  if (all || ok || pv) {
    scrollTo(0, 0);
  } else {
    const t = h && document.querySelector(h);
    if (t) t.scrollIntoView();
  }
}

addEventListener("hashchange", route);


/* IDIOMA (botões PT / EN)*/
function setLang(l) {
  lang = l;
  document.documentElement.lang = l === "pt" ? "pt-BR" : "en";

  document.querySelectorAll("[data-i18n]").forEach(e => {
    e.textContent = T[l][e.dataset.i18n];
  });

  document.querySelectorAll("[data-ph]").forEach(e => {
    e.placeholder = T[l][e.dataset.ph];
  });

  document.querySelectorAll("#lang button").forEach(b => {
    b.classList.toggle("on", b.dataset.l === l);
  });

  projects();
}

document.querySelectorAll("#lang button").forEach(b => {
  b.onclick = () => setLang(b.dataset.l);
});


/* TEMA CLARO / ESCURO (botão <>) */
const root = document.documentElement;

const isDark = () => root.dataset.theme
  ? root.dataset.theme === "dark"
  : matchMedia("(prefers-color-scheme:dark)").matches;

function icon() {
  $("#theme").textContent = "<>";
}

$("#theme").onclick = () => {
  root.dataset.theme = isDark() ? "light" : "dark";
  icon();
};


/* FORMULÁRIO DE CONTATO (Formspree) */
$("#form").onsubmit = async e => {
  e.preventDefault();

  const f = e.target;
  const btn = f.querySelector("button");
  btn.disabled = true;

  try {
    const r = await fetch("https://formspree.io/f/xqppngdo", {
      method: "POST",
      body: new FormData(f),
      headers: { Accept: "application/json" }
    });

    $("#ok").textContent = r.ok ? T[lang].thanks : T[lang].err;
    if (r.ok) f.reset();
  } catch {
    $("#ok").textContent = T[lang].err;
  }

  btn.disabled = false;
};


/* MENU: destaca a seção que está na tela*/
const links = [...document.querySelectorAll("#nav a")];

const io = new IntersectionObserver(
  es => es.forEach(x => {
    if (x.isIntersecting) {
      links.forEach(a => {
        a.classList.toggle("on", a.getAttribute("href") === "#" + x.target.id);
      });
    }
  }),
  { rootMargin: "-45% 0px -50% 0px" }
);

document.querySelectorAll("section").forEach(s => io.observe(s));


/* INICIAR O SITE */
icon();
projects();
route();