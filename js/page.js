const $=s=>document.querySelector(s);
const mp=$("#mp"),mb=$("#menu");
function tog(o){mp.classList.toggle("open",o);mb.setAttribute("aria-expanded",o);mb.setAttribute("aria-label",o?"Close menu":"Open menu");document.body.classList.toggle("lock",o)}
matchMedia("(min-width:901px)").addEventListener("change",e=>{if(e.matches)tog(false)});
mb.onclick=()=>tog(!mp.classList.contains("open"));mp.onclick=e=>{if(e.target.closest("a"))tog(false)};
addEventListener("keydown",e=>{if(e.key==="Escape")tog(false)});
$("#theme").onclick=()=>{const r=document.documentElement,d=getComputedStyle(r).getPropertyValue("--bg").trim()==="#1d100e";r.dataset.theme=d?"light":"dark"};

/* scroll reveal: characters zoom and bounce in as they enter the screen */
(function(){
if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;
const T="h1,h2,h3,.eyebrow,.lede,.sp p,footer small";
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
        for(const c of seg){const s=document.createElement("span");s.className="ch";s.dataset.c=c;s.style.setProperty("--i",n++);word.append(s)}
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
function scan(root){root.querySelectorAll(T).forEach(el=>{if(split(el))watch(el)});root.querySelectorAll(".card,.rel li").forEach(el=>{el.classList.add("rv");watch(el)})}
scan(document);window.scanReveal=scan;
})();
