const EXP=[
  {t:'edu',p:'2022 – PRESENT',r:'B.Tech Computer Science & Engineering',o:'University / College',d:'Core CS: DSA, DBMS, OS, Computer Networks, and Software Engineering.'},
  {t:'edu',p:'2020 – 2022',r:'Class 11–12 (PCM + CS)',o:'Senior Secondary School',d:'First programming with C++. Studied Physics, Chemistry, Maths and CS.'}
];

/* Skills — icon emoji, name, proficiency (1-5 dots), category */
const SKILLS=[
  /* Languages */
  {e:'🐍',n:'Python',dots:4,cat:'lang',lv:'Proficient'},
  {e:'📜',n:'JavaScript',dots:3,cat:'lang',lv:'Intermediate'},
  {e:'🌐',n:'HTML & CSS',dots:5,cat:'lang',lv:'Expert'},
  {e:'🗄️',n:'SQL',dots:3,cat:'lang',lv:'Intermediate'},
  /* Frameworks */
  {e:'🎸',n:'Django',dots:4,cat:'fw',lv:'Proficient'},
  {e:'🔌',n:'DRF',dots:2,cat:'fw',lv:'Learning'},
  {e:'⚛️',n:'React.js',dots:3,cat:'fw',lv:'Intermediate'},
  {e:'🎨',n:'Bootstrap',dots:4,cat:'fw',lv:'Proficient'},
  {e:'💨',n:'Tailwind CSS',dots:3,cat:'fw',lv:'Intermediate'},
  /* Dev Tools */
  {e:'🐙',n:'Git & GitHub',dots:4,cat:'tools',lv:'Proficient'},
  {e:'🐧',n:'Linux',dots:3,cat:'tools',lv:'Intermediate'},
  {e:'🐋',n:'Docker',dots:3,cat:'tools',lv:'Intermediate'},
  {e:'☁️',n:'AWS',dots:2,cat:'tools',lv:'Learning'},
  {e:'🔥',n:'VS Code',dots:5,cat:'tools',lv:'Expert'},
  /* Databases */
  {e:'🪶',n:'SQLite',dots:4,cat:'db',lv:'Proficient'},
  {e:'🐬',n:'MySQL',dots:3,cat:'db',lv:'Intermediate'},
];

const PROJECTS = [
  {
    n: 'Expense-Tracker',
    yr: '2025',
    cat: 'web',
    feat: true,
    d: 'Expense tracking application built with JavaScript for managing daily expenses, tracking spending patterns, and organizing financial records.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    gh: 'https://github.com/DheerajDev-leper/Expense-Tracker',
    live: null
  },

  {
    n: 'Face Attendance System',
    yr: '2025',
    cat: 'ai',
    feat: true,
    d: 'Face recognition attendance system developed using Python, OpenCV, and LBPH algorithms. Captures face samples, trains models, and automates attendance marking.',
    tags: ['Python', 'OpenCV', 'Face Recognition', 'LBPH'],
    gh: 'https://github.com/DheerajDev-leper/Face-attendance-system',
    live: null
  },

  {
    n: 'Library Management System',
    yr: '2025',
    cat: 'desktop',
    feat: true,
    d: 'Python-based library management system for handling book records, issue-return operations, and user management.',
    tags: ['Python', 'SQLite', 'Management System'],
    gh: 'https://github.com/DheerajDev-leper/Library_Management_System',
    live: null
  },

  {
    n: 'Movie Recommendation System',
    yr: '2025',
    cat: 'ai',
    feat: true,
    d: 'Machine learning based movie recommendation system that suggests movies based on user preferences and similarity analysis.',
    tags: ['Python', 'Machine Learning', 'Pandas'],
    gh: 'https://github.com/DheerajDev-leper/Movie-recommendation-system',
    live: null
  },

  {
    n: 'Clothing Store',
    yr: '2026',
    cat: 'web',
    feat: true,
    d: 'E-commerce clothing website with product catalog, responsive UI, and Django-based backend integration.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Django'],
    gh: 'https://github.com/DheerajDev-leper/Clothing',
    live: null
  },

  {
    n: 'Portfolio Website',
    yr: '2026',
    cat: 'web',
    feat: true,
    d: 'Personal portfolio website showcasing projects, skills, and experience with a modern design and responsive layout.',
    tags: ['HTML', 'CSS', 'JavaScript','Django'],
    gh: 'https://github.com/DheerajDev-leper/Portfolio',
    live: null
  },
];

const MARQUEE=['Python','Django','React.js','JavaScript','REST APIs','Git','Linux','Docker','Tailwind','Bootstrap','AWS'];

/* ─── CURSOR (pointer devices only) ─── */
const isTouchDevice = window.matchMedia('(pointer:coarse)').matches;
if(!isTouchDevice){
  const cur=document.getElementById('cur'),ring=document.getElementById('cur-ring');
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'});
  (function loop(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(loop)})();
  document.querySelectorAll('a,button,.chip,.sk-card,.comp-card,.pc,.cl,.soc,.learn-item,.tl-item').forEach(el=>{
    el.addEventListener('mouseenter',()=>document.body.classList.add('link-hover'));
    el.addEventListener('mouseleave',()=>document.body.classList.remove('link-hover'));
  });
}

/* ─── THEME ─── */
const html=document.documentElement;
const savedTheme=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
html.setAttribute('data-theme',savedTheme);
document.getElementById('themeBtn').addEventListener('click',()=>{
  const next=html.getAttribute('data-theme')==='light'?'dark':'light';
  html.setAttribute('data-theme',next);
  localStorage.setItem('theme',next);
});

/* ─── NAV scroll + active ─── */
const nav=document.getElementById('nav');
const navAs=document.querySelectorAll('.nav-a');
const sections=document.querySelectorAll('section[id]');

function updateNav(){
  nav.classList.toggle('scrolled',window.scrollY>20);
  document.getElementById('btt').classList.toggle('on',window.scrollY>400);
  let cur2='';
  sections.forEach(s=>{if(window.scrollY>=s.offsetTop-90)cur2=s.id});
  navAs.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur2));
}
window.addEventListener('scroll',updateNav,{passive:true});
/* Run once on load so active state & background are correct immediately */
updateNav();
document.getElementById('burger').addEventListener('click',()=>document.getElementById('navLinks').classList.toggle('open'));
navAs.forEach(a=>a.addEventListener('click',()=>document.getElementById('navLinks').classList.remove('open')));
document.getElementById('btt').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

/* ─── SCROLL REVEAL ─── */
const srObs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');srObs.unobserve(e.target)}})},{threshold:.1});
document.querySelectorAll('.sr,.sr-l,.sr-s').forEach(el=>srObs.observe(el));

/* ─── COUNTER ─── */
function countUp(el){
  const t=+el.dataset.count,dur=1400,step=16,inc=t/(dur/step);let c=0;
  const tm=setInterval(()=>{c=Math.min(c+inc,t);el.textContent=Math.round(c)+(t>=10?'+':'');if(c>=t)clearInterval(tm)},step);
}
const cObs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){countUp(e.target);cObs.unobserve(e.target)}})},{threshold:.5});
document.querySelectorAll('[data-count]').forEach(el=>cObs.observe(el));

/* ─── TICKER ─── */
const doubled=[...MARQUEE,...MARQUEE];
document.getElementById('tickerTrack').innerHTML=doubled.map(s=>`<div class="ticker-item"><span class="ticker-bullet"></span><strong>${s}</strong></div>`).join('');

/* ─── TIMELINE ─── */
document.getElementById('timeline').innerHTML=EXP.map(e=>`
  <div class="tl-item">
    <div class="tl-dot${e.t==='edu'?' edu':''}"></div>
    <div class="tl-period">${e.p}</div>
    <div class="tl-role">${e.r}</div>
    <div class="tl-org${e.t==='edu'?' edu':''}">${e.o}</div>
    <div class="tl-desc">${e.d}</div>
  </div>`).join('');

/* ─── SKILL CARDS ─── */
const catClass={lang:'sk-lang',fw:'sk-fw',tools:'sk-tool',db:'sk-db'};
function makeDots(n,cat){
  let s='<div class="sk-dots">';
  for(let i=0;i<5;i++)s+=`<div class="sk-dot${i<n?' filled':''}"></div>`;
  return s+'</div>';
}
function makeCard(sk){
  return`<div class="sk-card ${catClass[sk.cat]}">
    <div class="sk-icon">${sk.e}</div>
    <div>
      <div class="sk-name">${sk.n}</div>
      <div class="sk-level">${sk.lv}</div>
      ${makeDots(sk.dots,sk.cat)}
    </div>
  </div>`;
}
function populateCards(containerId,skills){
  document.getElementById(containerId).innerHTML=skills.map(makeCard).join('');
}
populateCards('cards-lang', SKILLS.filter(s=>s.cat==='lang'));
populateCards('cards-fw',   SKILLS.filter(s=>s.cat==='fw'));
populateCards('cards-tools',SKILLS.filter(s=>s.cat==='tools'));
populateCards('cards-db',   SKILLS.filter(s=>s.cat==='db'));
populateCards('cards-all',  SKILLS);

/* Tabs */
document.querySelectorAll('.skill-tab').forEach(tab=>{
  tab.addEventListener('click',()=>{
    document.querySelectorAll('.skill-tab').forEach(t=>t.classList.remove('active'));
    document.querySelectorAll('.skill-panel').forEach(p=>p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-'+tab.dataset.tab).classList.add('active');
  });
});

/* ─── PROJECTS ─── */
let cF='all',cS='';
const GH_SVG=`<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`;
const EXT_SVG=`<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>`;
function renderProjects(){
  const f=PROJECTS.filter(p=>{
    const mf=cF==='all'||(cF==='featured'&&p.feat)||p.cat===cF;
    const ms=!cS||p.n.toLowerCase().includes(cS)||p.d.toLowerCase().includes(cS)||p.tags.some(t=>t.toLowerCase().includes(cS));
    return mf&&ms;
  });
  document.getElementById('pcount').textContent=f.length;
  const g=document.getElementById('projGrid');
  if(!f.length){g.innerHTML='<div class="proj-empty">No projects match your search.</div>';return}
  g.innerHTML=f.map(p=>`
    <div class="pc">
      <div class="pc-accent"></div>
      ${p.feat?'<div class="pc-feat">Featured Project</div>':''}
      <div class="pc-head">
        <div class="pc-ico"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg></div>
        <div class="pc-yr">${p.yr}</div>
        <div class="pc-links">
          ${p.gh?`<a href="${p.gh}" target="_blank" rel="noopener" title="GitHub">${GH_SVG}</a>`:''}
          ${p.live?`<a href="${p.live}" target="_blank" rel="noopener" title="Live">${EXT_SVG}</a>`:''}
        </div>
      </div>
      <div class="pc-name">${p.n}</div>
      <div class="pc-desc">${p.d}</div>
      <div class="pc-tags">${p.tags.map(t=>`<span class="ptag">${t}</span>`).join('')}</div>
    </div>`).join('');
}
document.querySelectorAll('.fb').forEach(b=>{
  b.addEventListener('click',()=>{
    document.querySelectorAll('.fb').forEach(x=>x.classList.remove('on'));
    b.classList.add('on');cF=b.dataset.f;renderProjects();
  });
});
document.getElementById('si').addEventListener('input',e=>{cS=e.target.value.toLowerCase().trim();renderProjects()});
renderProjects();

/* ─── CONTACT CHIPS & SEND ─── */
document.querySelectorAll('.sc').forEach(c=>{
  c.addEventListener('click',()=>{
    document.querySelectorAll('.sc').forEach(x=>x.classList.remove('on'));
    c.classList.add('on');document.getElementById('subject').value=c.dataset.v;
  });
});
/* Read Django CSRF token from the cookie (set automatically by Django) */
function getCsrfToken(){
  const name='csrftoken';
  const cookies=document.cookie.split(';');
  for(let c of cookies){
    c=c.trim();
    if(c.startsWith(name+'=')) return decodeURIComponent(c.slice(name.length+1));
  }
  return '';
}

document.getElementById('sendBtn').addEventListener('click', async ()=>{
  const fn=document.getElementById('fname').value.trim();
  const ln=document.getElementById('lname').value.trim();
  const em=document.getElementById('email').value.trim();
  const su=document.getElementById('subject').value.trim();
  const ms=document.getElementById('message').value.trim();
  const al=document.getElementById('falert');

  /* ── Client-side validation ── */
  if(!fn||!ln||!em||!su||!ms){
    al.style.display='flex';al.className='falert falert-err';
    al.innerHTML='<svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg> Please fill in all fields.';
    return;
  }

  const btn=document.getElementById('sendBtn');
  btn.disabled=true;
  btn.innerHTML='<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="animation:spin .8s linear infinite"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg> Sending…';
  al.style.display='none';

  /* ── Build form data ── */
  const body=new URLSearchParams({fname:fn,lname:ln,email:em,subject:su,message:ms});

  try{
    const res = await fetch('/contact/', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRFToken': getCsrfToken(),
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: body.toString(),
    });

    const text = await res.text();
    console.log(text);

    const data = JSON.parse(text);

    if(data.status==='success'){
      /* Show success state */
      document.getElementById('formBody').style.display='none';
      document.getElementById('formOk').style.display='block';
    } else {
      /* Show server-side error message */
      al.style.display='flex';al.className='falert falert-err';
      al.innerHTML=`<svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg> ${data.message||'Something went wrong.'}`;
      btn.disabled=false;
      btn.innerHTML='<svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg> Send Message';
    }
  } catch(err){
    al.style.display='flex';al.className='falert falert-err';
    al.innerHTML='<svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg> Network error. Please try again.';
    btn.disabled=false;
    btn.innerHTML='<svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg> Send Message';
  }
});

/* spinner keyframe */
const _s=document.createElement('style');
_s.textContent='@keyframes spin{to{transform:rotate(360deg)}}';
document.head.appendChild(_s);