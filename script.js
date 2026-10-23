// One entry per friend. Put character PNGs in images/ and location photos in places/.
// If an image file is missing, the page shows a coloured badge or a plain gradient instead.
const CHARS=[
{name:"Kin",role:"o Doutor",color:"#c8a2ff",ini:"K",img:["images/kin.png", "images/umbreon.png"],bg:"places/athena.jpg",place:"Templo de Athena, Grécia",msg:"placeholder de mensagem"},
{name:"Bruce",role:"Rose Tyler",color:"#ff9ec4",ini:"Br",img:["images/bruce.png", "images/jolteon.png"],bg:"places/bruce.jpg",place:"??, ?",msg:"placeholder de mensagem"},
{name:"Ceci",role:"?",color:"#676767",ini:"C",img:["images/ceci.png", "images/flareon.png"],bg:"places/ceci.jpg",place:"??, ?",msg:"placeholder de mensagem"},
{name:"Lice",role:"Dalek",color:"#123456",ini:"L",img:["images/lice.png", "images/leafeon.png"],bg:"places/lice.jpg",place:"??, ?",msg:"placeholder de mensagem"},
{name:"Dan",role:"?",color:"#abcdef",ini:"D",img:["images/dan.png", "images/espeon.png"],bg:"places/dan.jpg",place:"??, ?",msg:"placeholder de mensagem"},
{name:"Bea",role:"Martha Jones",color:"#a1b2c3",ini:"Be",img:["images/bea.png", "images/sylveon.png"],bg:"places/bea.jpg",place:"??, ?",msg:"placeholder de mensagem"}
];
const $=s=>document.querySelector(s);
const show=id=>{document.querySelectorAll('.scene').forEach(e=>e.classList.toggle('on',e.id===id))};
const flash=(fn)=>{const f=$('#fade');f.classList.add('on');setTimeout(()=>{fn();f.classList.remove('on')},900)};

$('#box').addEventListener('click',()=>{
  const b=$('#box');if(b.classList.contains('open'))return;
  b.classList.add('open');
  setTimeout(()=>{b.style.transition='transform 1.2s ease-in';b.style.transform='scale(4)'},900);
  setTimeout(()=>flash(()=>{show('in');b.classList.remove('open');b.style.transform='';b.style.transition=''}),1700);
});
$('#leave').onclick=()=>flash(()=>show('out'));

const grid=$('#grid');
CHARS.forEach((c,i)=>{
  const b=document.createElement('button');b.className='card';
  b.innerHTML='<div class="av" style="background:'+c.color+'">'+c.ini+'</div><div><b>'+c.name+'</b><span>'+c.role+'</span></div>';
  b.onclick=()=>openMsg(i);grid.appendChild(b);
});

let idx=0;
function openMsg(i){
  idx=(i+CHARS.length)%CHARS.length;const c=CHARS[idx];
  $('#chat').style.backgroundImage='linear-gradient(to top,rgba(3,11,26,.5),transparent 55%),url("'+c.bg+'"),linear-gradient(#12356b,#030b1a)';
  $('#place').textContent=c.place;
  $('#msg').textContent=c.msg;
  $('#who').textContent='— '+c.name+', '+c.role;
  const box=$('#actor'),fb=$('#pfall');
  box.querySelectorAll('img').forEach(e=>e.remove());
  fb.style.background=c.color;fb.textContent=c.ini;fb.style.display='none';
  const list=[].concat(c.img);let failed=0;
  list.forEach(src=>{
    const im=new Image();im.alt='';
    im.onerror=()=>{im.remove();if(++failed===list.length)fb.style.display='grid'};
    im.src=src;box.insertBefore(im,fb);
  });
  show('chat');
}
$('#prev').onclick=()=>openMsg(idx-1);$('#next').onclick=()=>openMsg(idx+1);
$('#back').onclick=()=>show('in');
