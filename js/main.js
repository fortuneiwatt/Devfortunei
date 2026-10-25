const CFG={email:"iwattfortune5@gmail.com",github:"https://github.com/fortuneiwatt",Twitter:"https://x.com/iwattfortune?s=21"}; /* add your real links here */
const $=s=>document.querySelector(s);
const P=[
{g:"Web apps",c:"Restaurant platform",t:"AfroCaribb",s:"Restaurant website and digital ordering experience",d:"A responsive restaurant site that presents African and Caribbean cuisine, the menu and brand, and sends customers to the restaurant\u2019s third-party ordering platform for orders and payment.",k:[],l:[["Source Code","https://github.com/fortuneiwatt/Granny-s-Original-Takeway"]]},
{g:"Web3",c:"Hackathon project",t:"Pocket Switch",s:"Switch blockchain RPC providers",d:"A hackathon project for switching blockchain RPC providers between Infura, Alchemy and Pocket Network.",k:["Infura","Alchemy","Pocket Network"],l:[["Live demo","https://pocket-switch.onrender.com"],["Source code","https://github.com/fortuneiwatt/pocket-switch"]]},
{g:"Security",c:"Security lab",t:"Metasploitable 2 Penetration Testing Lab",s:"Hands-on security lab",d:"A hands-on lab covering reconnaissance, Nmap scanning, vulnerability exploitation and SSH access.",k:["Nmap","Metasploitable 2","SSH"],l:[["Source code","https://github.com/fortuneiwatt/metasploitable2-penetration-test-lab"]]},
{g:"AI",c:"AI engineering",t:"Fortune Assistant",s:"AI-powered personal assistant",d:"An assistant project exploring intelligent interaction, automation and software integration, with a user-facing interface and backend services that talk to AI models.",k:[],l:[["Source Code","https://github.com/fortuneiwatt/fortune-assistant"]]},
{g:"Concepts",c:"Academic concept",t:"3D Computer Graphics E-Learning Platform",s:"Interactive 3D graphics learning",d:"An academic project concept for interactive 3D graphics learning, with student and teacher accounts and practical learning activities.",k:[],l:[["Source Code",""]]},
{g:"Concepts",c:"Planned product",t:"Developer Tools & Image Editor Platform",s:"Browser-based developer toolkit",d:"A planned browser-based toolkit for image editing, compression and conversion, JSON formatting, JWT decoding, QR generation and other developer utilities.",k:[],l:[["Source Code","https://github.com/fortuneiwatt/toolkits"]]},
{g:"Web apps",c:"Client website",t:"Global Personal Brand & Book Sales Platform",s:"Personal branding and book sales",d:"A client website project covering personal branding, book sales, digital downloads, global payments, content management and an administrative dashboard.",k:[],l:[]},
{g:"Concepts",c:"Web app concept",t:"Food Delivery Web Application",s:"Online food ordering",d:"A web application concept for online food ordering, customer authentication, checkout and email-based order notifications.",k:[],l:[["Source Code","https://github.com/fortuneiwatt/food-delivery-app"]]},
{g:"Concepts",c:"Construction",t:"RobonQuas",s:"A Construction Company Demo website",d:"A Private Construction Company website.",k:[],l:[["Live Demo",""],["Source Code","https://github.com/fortuneiwatt/robonquas"]]},
{g:"AI",c:"AI concepts",t:"Continuum AI / NEXO AI",s:"AI-focused product concepts",d:"AI-focused product concepts.",k:[],l:[["Source Code","https://github.com/fortuneiwatt/NEXO"]]},
{g:"AI",c:"AI concepts",t:"ChatBot",s:"Business customer-care chatbot",d:"A chatbot for businesses that answers the basic questions a customer would ask customer care (for example, listing goods under a given price) and, in the rare cases that need a person, connects the user to the main customer care service.",k:[],l:[["Source Code","https://github.com/fortuneiwatt/sapphire"]]}];
const COL=["#FF858E","#FFD15B","#8FC8E8","#A8D2BE"],G=["Everything","Web apps","Web3","Security","AI","Concepts"];
let pf="Everything";
const pchips=document.createElement("div");pchips.className="chips";pchips.setAttribute("role","group");pchips.setAttribute("aria-label","Filter projects");$("#pg").before(pchips);
function drawP(){
pchips.innerHTML=G.map(g=>`<button class="chip" aria-pressed="${g===pf}" data-g="${g}">${g}<b>${g==="Everything"?P.length:P.filter(p=>p.g===g).length}</b></button>`).join("");
$("#pg").innerHTML=P.map((p,i)=>[p,i]).filter(o=>pf==="Everything"||o[0].g===pf).map(([p,i])=>`<article class="card pc" style="background:${COL[i%4]}"><div class="slot"><img src="images/${p.img||"project-"+(i+1)+".jpg"}" ${p.img?"":`data-n="${i+1}"`} alt="${p.t} preview" loading="lazy" width="1600" height="1000"></div><span class="cat">${String(i+1).padStart(2,"0")} \u00b7 ${p.c}</span><h3>${p.t}</h3><p><b>${p.s}</b></p><p>${p.d}</p>${p.k.length?`<div class="tags">${p.k.map(k=>`<span>${k}</span>`).join("")}</div>`:""}${p.l.filter(l=>l[1]).length?`<div class="pl">${p.l.filter(l=>l[1]).map((l,j)=>`<a class="btn ${j?"":"d"}" href="${l[1]}" target="_blank" rel="noopener">${l[0]}</a>`).join("")}</div>`:""}</article>`).join("");
if(window.scanReveal)window.scanReveal($("#pg"))}
pchips.onclick=e=>{const b=e.target.closest(".chip");if(b){pf=b.dataset.g;drawP()}};
drawP();
/* project images: tries project-N.jpg, then .png, .webp, .jpeg, and finally the grey .svg placeholder */
document.addEventListener("error",e=>{const im=e.target;if(!im.dataset||!im.dataset.n)return;const x=["png","webp","jpeg","svg"],k=+im.dataset.t||0;if(k<x.length){im.dataset.t=k+1;im.src="images/project-"+im.dataset.n+"."+x[k]}},true);
const S=[["Full-stack web development","Responsive web apps with modern frontends, reliable backends, databases and deployment.",["Frontend","Backend","APIs","Databases","Authentication","Deployment"]],["Software engineering","Maintainable systems with clean architecture and long-term scalability in mind.",["Architecture","Integration","Performance","Testing","Maintenance"]],["AI-powered applications","Intelligent features through AI APIs, language models and automation workflows.",["AI assistants","LLM features","Automation","Document processing"]],["Cybersecurity-aware development","Security built into the architecture, implementation and deployment.",["Secure authentication","Access control","API security","Input validation","Basic security testing"]]];
$("#sg").innerHTML=S.map(s=>`<article class="card sv"><h3>${s[0]}</h3><p>${s[1]}</p><ul>${s[2].map(x=>`<li>${x}</li>`).join("")}</ul></article>`).join("");
const L=[["GitHub",CFG.github],["Twitter",CFG.Twitter],["Email",CFG.email&&"mailto:"+CFG.email]];
const soc=L.map(l=>l[1]?`<a href="${l[1]}" target="_blank" rel="noopener">${l[0]}</a>`:`<a class="off" aria-disabled="true" role="link">Add ${l[0]}</a>`).join("");
$("#soc").innerHTML=soc;$("#soc2").innerHTML=soc;
document.querySelectorAll("[data-link=github]").forEach(a=>{if(CFG.github){a.href=CFG.github;a.target="_blank";a.rel="noopener"}else{a.removeAttribute("href");a.textContent="Add your GitHub link"}});
/* toolbox map */
const C=[
{id:"Frontend",l:["Frontend"],x:250,y:230,f:"#FFD15B",t:["JavaScript","TypeScript","React","Next.js","Vite","Tailwind CSS","React Native"]},
{id:"Backend",l:["Backend"],x:750,y:230,f:"#A8D2BE",t:["Node.js","Express.js","NestJS","Python","FastAPI","PostgreSQL","Prisma","REST APIs"]},
{id:"Payments",l:["Payments","&amp; email"],x:1250,y:230,f:"#FF858E",t:["Stripe","Paystack","PayPal","Webhooks","Nodemailer","Resend","SMTP","SSE"]},
{id:"Security",l:["Security"],x:250,y:640,f:"#8FC8E8",t:["Kali Linux","Nmap","Metasploit","Burp Suite","Wireshark","Splunk","OWASP Top 10"]},
{id:"DevOps",l:["DevOps","&amp; infra"],x:750,y:640,f:"#FFD15B",t:["Linux VPS","OpenLiteSpeed","HTTPS/SSL","DNS","Render","CI/CD","Git","GitHub"]},
{id:"AI3D",l:["AI, Web3","&amp; 3D"],x:1250,y:640,f:"#A8D2BE",t:["LLM APIs","Ollama","Hugging Face","Infura","Alchemy","Pocket Network","Three.js","GSAP"]}];
const X=[["TypeScript","React"],["React","Next.js"],["React","Three.js"],["Three.js","GSAP"],["Next.js","Node.js"],["Node.js","Express.js"],["Node.js","NestJS"],["NestJS","Prisma"],["Prisma","PostgreSQL"],["Express.js","REST APIs"],["Express.js","Webhooks"],["Stripe","Webhooks"],["Nodemailer","SMTP"],["Python","FastAPI"],["FastAPI","LLM APIs"],["Ollama","LLM APIs"],["Python","Hugging Face"],["Infura","Alchemy"],["Alchemy","Pocket Network"],["Infura","Pocket Network"],["Kali Linux","Nmap"],["Kali Linux","Metasploit"],["Kali Linux","Burp Suite"],["Nmap","Wireshark"],["Splunk","Wireshark"],["Burp Suite","OWASP Top 10"],["Git","GitHub"],["GitHub","CI/CD"],["CI/CD","Render"],["Linux VPS","OpenLiteSpeed"],["OpenLiteSpeed","HTTPS/SSL"],["DNS","HTTPS/SSL"]];
const N={},E=[],adj={};
C.forEach(c=>{N[c.id]={x:c.x,y:c.y,f:c.f,cat:1,l:c.l};const n=c.t.length,r=n>=8?168:n>=7?158:138;c.t.forEach((t,i)=>{const a=i/n*Math.PI*2-Math.PI/2;N[t]={x:c.x+Math.cos(a)*r,y:c.y+Math.sin(a)*r,f:c.f};E.push([c.id,t])})});
X.forEach(e=>E.push(e));
Object.keys(N).forEach(k=>adj[k]=new Set([k]));E.forEach(([a,b])=>{adj[a].add(b);adj[b].add(a)});
const svg=$("#map");svg.setAttribute("viewBox","0 0 1500 860");let pin=null,hov=null;
svg.innerHTML=E.map(([a,b],i)=>`<line data-e="${i}" x1="${N[a].x}" y1="${N[a].y}" x2="${N[b].x}" y2="${N[b].y}"/>`).join("")+Object.entries(N).map(([k,n])=>{if(n.cat){const ls=n.l,y0=n.y-(ls.length-1)*10;return `<g class="cn" data-id="${k}" tabindex="0" role="button" aria-label="${ls.join(" ")}"><circle cx="${n.x}" cy="${n.y}" r="58" fill="${n.f}"/><text>${ls.map((t,j)=>`<tspan x="${n.x}" y="${y0+j*20}">${t}</tspan>`).join("")}</text></g>`}const w=k.length*9.2+34;return `<g data-id="${k}" tabindex="0" role="button" aria-label="${k}"><rect x="${n.x-w/2}" y="${n.y-18}" width="${w}" height="36" rx="18" fill="var(--surface)" stroke="${n.f}" stroke-width="2.5"/><text x="${n.x}" y="${n.y}">${k}</text></g>`}).join("");
function paint(){const a=pin||hov,s=a?adj[a]:null;svg.querySelectorAll("[data-id]").forEach(g=>{const id=g.dataset.id;g.classList.toggle("dim",!!s&&!s.has(id));g.classList.toggle("pin",id===pin)});svg.querySelectorAll("line").forEach((l,i)=>{const[x,y]=E[i],on=a&&(x===a||y===a);l.classList.toggle("hl",!!on);l.classList.toggle("dim",!!a&&!on)})}
svg.addEventListener("pointerover",e=>{const g=e.target.closest("[data-id]");hov=g?g.dataset.id:null;paint()});
svg.addEventListener("pointerleave",()=>{hov=null;paint()});
svg.addEventListener("click",e=>{const g=e.target.closest("[data-id]");pin=g&&g.dataset.id!==pin?g.dataset.id:null;paint()});
svg.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){const g=e.target.closest("[data-id]");if(g){e.preventDefault();pin=g.dataset.id!==pin?g.dataset.id:null;paint()}}});
$("#reset").onclick=()=>{pin=null;hov=null;paint()};
const KIT=[["Backend","Express.js, NestJS"],["Frontend frameworks","Next.js, Vite"],["Styling","Tailwind CSS"],["Mobile","React Native"],["Databases and ORM","PostgreSQL, Prisma"],["Payments","Stripe, Paystack, PayPal"],["Email and notifications","SMTP, Nodemailer, Resend, Webhooks, Server-Sent Events (SSE)"],["Authentication and security","Session-based authentication, Signed cookies, Role-based access control (RBAC)"],["Deployment and infrastructure","Linux VPS administration, OpenLiteSpeed, HTTPS/SSL, DNS configuration, Render, CI/CD"],["Cybersecurity","Kali Linux, Nmap, Metasploit, Metasploitable 2, Burp Suite Community, Wireshark, John the Ripper, Splunk, OWASP Top 10"],["Security testing environments","VirtualBox, DVWA, OWASP Juice Shop, TryHackMe"],["Graphics and interactive interfaces","Three.js, React Three Fiber, GSAP, Fabric.js, Konva, HTML Canvas"],["Blockchain and Web3","RPC provider integration, Infura, Alchemy, Pocket Network"],["Content and media","Sanity, Strapi, Cloudinary"],["Other engineering areas","REST APIs, Payment webhooks, Database design, Image processing, Technical SEO, Accessibility, Server deployment and maintenance"]];
document.querySelector(".mapbox").insertAdjacentHTML("afterend",'<p class="eyebrow" style="margin-top:46px">Full toolkit</p><div class="kit">'+KIT.map(g=>`<div class="kg"><h3>${g[0]}</h3><ul>${g[1].split(", ").map(x=>`<li>${x}</li>`).join("")}</ul></div>`).join("")+'</div>');
/* nav */
const mp=$("#mp"),mb=$("#menu");
function tog(o){mp.classList.toggle("open",o);mb.setAttribute("aria-expanded",o);mb.setAttribute("aria-label",o?"Close menu":"Open menu");document.body.classList.toggle("lock",o)}
matchMedia("(min-width:901px)").addEventListener("change",e=>{if(e.matches)tog(false)});
mb.onclick=()=>tog(!mp.classList.contains("open"));mp.onclick=e=>{if(e.target.closest("a"))tog(false)};
addEventListener("keydown",e=>{if(e.key==="Escape")tog(false)});
const links=[...document.querySelectorAll("#nav a")];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
["work","about","toolbox","services"].forEach(i=>io.observe($("#"+i)));
$("#theme").onclick=()=>{const r=document.documentElement,d=getComputedStyle(r).getPropertyValue("--bg").trim()==="#1d100e";r.dataset.theme=d?"light":"dark"};

/* center the toolbox map on small screens */
const ms=document.querySelector(".mscroll");
function centerMap(){ms.scrollLeft=(ms.scrollWidth-ms.clientWidth)/2}
centerMap();addEventListener("load",centerMap);

/* scroll reveal: characters zoom and bounce in as they enter the screen */
(function(){
if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;
const T="h1,h2,h3,.eyebrow,.lede,.meta,.big p,.contact p,.about p,.letter p,.note,.pc p,.sv p,footer small";
function split(el){
  const label=el.textContent.replace(/\s+/g," ").trim();
  const w=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),nodes=[];
  while(w.nextNode())nodes.push(w.currentNode);
  let n=0;
  nodes.forEach(t=>{
    const f=document.createDocumentFragment();
    t.nodeValue.split(/(\s+)/).forEach(part=>{
      if(!part)return;
      if(/^\s+$/.test(part)){f.append(" ");return}
      (part.match(/[^-]*-?/g)||[]).filter(Boolean).forEach(seg=>{
        const word=document.createElement("span");word.className="w";word.setAttribute("aria-hidden","true");
        for(const c of seg){const s=document.createElement("span");s.className="ch";s.textContent=c;s.style.setProperty("--i",n++);word.append(s)}
        f.append(word)})});
    t.replaceWith(f)});
  if(!n)return 0;
  const sr=document.createElement("span");sr.className="sr";sr.textContent=label;el.prepend(sr);
  el.style.setProperty("--st",Math.min(26,1100/n)+"ms");
  return n}
const pend=new Set();
const show=el=>{el.classList.add("in");io.unobserve(el);pend.delete(el)};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)show(e.target)}),{threshold:.1,rootMargin:"0px"});
const watch=el=>{pend.add(el);io.observe(el)};
let tm;addEventListener("scroll",()=>{clearTimeout(tm);tm=setTimeout(()=>pend.forEach(el=>{const r=el.getBoundingClientRect();if(r.top<innerHeight)show(el)}),140)},{passive:true});
function scan(root){root.querySelectorAll(T).forEach(el=>{if(split(el))watch(el)});root.querySelectorAll(".card,.photo,.mapbox,.pw,.code,.kg").forEach(el=>{el.classList.add("rv");watch(el)})}
scan(document);window.scanReveal=scan;
})();
