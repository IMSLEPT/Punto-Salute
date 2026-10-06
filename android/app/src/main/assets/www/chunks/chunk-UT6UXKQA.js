import{j as P}from"./chunk-ANUMQYKE.js";import{a as z,b as M}from"./chunk-FL3EBUDH.js";import{B as S,D as C,d as L,f as u,g as T,s as k}from"./chunk-X262WRGD.js";import{c as h,e as c,f as l,g as E,i as w}from"./chunk-DWGLXEXU.js";function m(a,e="",s={}){let t=u[a.type],v=e?M(a.title,e):c(a.title),d=s.sub??C(a.summary||"");return`<button class="item" data-go="${S(a)}">
    <div class="tile-ic sm" style="--c:var(${t.c})">${l(s.icon||t.icon)}</div>
    <div class="grow"><div class="t">${v}</div>${d?`<div class="d">${c(d)}</div>`:""}</div>
    ${s.badge?`<span class="badge" style="--c:var(${t.c})">${c(s.badge)}</span>`:""}
    ${l("chevron-right","go")}</button>`}function H(a,e="",s={}){return`<div class="list">${a.map(t=>m(t,e,s)).join("")}</div>`}function I({title:a,sub:e,icon:s,c:t}){return`<div class="phead" style="--c:var(${t})"><div class="tile-ic">${l(s)}</div><div><h1>${c(a)}</h1>${e?`<p>${c(e)}</p>`:""}</div></div>`}function j(a,e,s){return`<div class="empty">${l(a)}<h3>${c(e)}</h3><p>${c(s)}</p></div>`}var N=`<div class="disclaimer">${l("shield-check")}<div>Punto Salute \xE8 uno strumento didattico e di consultazione. Non sostituisce linee guida, protocolli aziendali, prescrizioni mediche n\xE9 il giudizio clinico. Verifica sempre fonti ufficiali aggiornate.</div></div>`;var q=["iperkaliemia","PICC","emocoltura","BPCO","drenaggio toracico","potassio","catetere vescicale","ematemesi","NEWS2","Braden"],n=null;function b(){if(!n)return;let a=n;n=null,a.classList.remove("show"),setTimeout(()=>a.remove(),220)}document.addEventListener("ps:close-search",b);function st(a=""){if(n)return;n=E(`<div class="searchov" id="searchov" role="dialog" aria-label="Ricerca">
    <div class="sbar">
      <button class="iconbtn" data-x aria-label="Chiudi ricerca">${l("arrow-left")}</button>
      <input class="input" type="search" enterkeyhint="search" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Cerca patologie, procedure, esami, farmaci\u2026" value="${c(a)}">
      <button class="iconbtn" data-clear aria-label="Cancella">${l("x")}</button>
    </div>
    <div class="sres"></div></div>`),document.body.append(n),requestAnimationFrame(()=>n&&n.classList.add("show"));let e=h("input",n),s=h(".sres",n),t="all",v=()=>{let o=L.list().map(k).filter(Boolean).slice(0,6);s.innerHTML=`
      <div class="res-group">${l("sparkles")} Prova a cercare</div>
      <div class="chips wrap">${q.map(r=>`<button class="chip" data-q="${c(r)}">${c(r)}</button>`).join("")}</div>
      ${o.length?`<div class="res-group">${l("history")} Visti di recente</div><div class="list">${o.map(r=>m(r)).join("")}</div>`:""}
      <div class="disclaimer">${l("network")}<div>La ricerca collega automaticamente anatomia, fisiologia, patologie, segni e sintomi, esami, assistenza infermieristica e procedure correlate.</div></div>`},d=()=>{let o=e.value.trim();if(!o){v();return}let r=z(o,{limit:200});if(!r.length){s.innerHTML=j("search-x","Nessun risultato","Prova con un sinonimo, un\u2019abbreviazione (es. \u201CK\u201D, \u201CCVC\u201D, \u201CEGA\u201D) o meno parole.");return}let p={};r.forEach(i=>p[i.e.type]=(p[i.e.type]||0)+1);let $=T.filter(i=>p[i]),y=t==="all"?r:r.filter(i=>i.e.type===t),f=r[0],O=f.score>=60&&t==="all",x={};y.forEach(i=>(x[i.e.type]||=[]).push(i.e)),s.innerHTML=`
      <div class="chips" style="padding-left:0;margin:6px 0 4px">
        <button class="chip ${t==="all"?"active":""}" data-type="all">Tutto \xB7 ${r.length}</button>
        ${$.map(i=>`<button class="chip ${t===i?"active":""}" data-type="${i}">${c(u[i].plural)} \xB7 ${p[i]}</button>`).join("")}
      </div>
      ${O?`<div class="res-group">${l("network")} Percorso clinico</div>
        <div class="list" style="margin-bottom:6px">${m(f.e,o)}</div>${P(f.e.id,{limit:5,title:"Collegato a "+f.e.title})}`:""}
      ${Object.entries(x).map(([i,g])=>`<div class="res-group">${l(u[i].icon)} ${c(u[i].plural)}</div>
        <div class="list">${g.slice(0,t==="all"?6:60).map(R=>m(R,o)).join("")}</div>
        ${t==="all"&&g.length>6?`<button class="chip" style="margin-top:8px" data-type="${i}">Mostra tutti (${g.length})</button>`:""}`).join("")}`},B=w(d,90);e.addEventListener("input",()=>{t="all",B()}),e.addEventListener("keydown",o=>{o.key==="Enter"&&e.blur()}),n.addEventListener("click",o=>{if(o.target.closest("[data-x]")){b();return}if(o.target.closest("[data-clear]")){e.value="",t="all",v(),e.focus();return}let r=o.target.closest("[data-q]");if(r){e.value=r.dataset.q,t="all",d();return}let p=o.target.closest("[data-type]");if(p){t=p.dataset.type,d(),h(".sres",n).scrollTop=0;return}let $=o.target.closest("[data-more]");o.target.closest("[data-go]")&&b()},!0),d(),setTimeout(()=>e.focus(),120)}export{m as a,H as b,I as c,j as d,N as e,b as f,st as g};
