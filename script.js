const CHARS=[
{name:"Kin",role:"o Doutor",color:"#400b8b",ini:"K",img:["images/kin.png", "images/umbreon.png"],bg:"places/athena.jpg",place:"Templo de Athena, Grécia",msg:`Você já sabe do costume de começar e não saber o que falar e blablabla, mas acho que você sabe o quanto esse costume não serve apenas para os textos de aniversário. 
  
Hoje além de seu aniversário nós completamos 9 (!!!) meses juntos e não existe nada que me faça mais feliz no mundo do que ter a oportunidade de comemorar o seu dia. Estar contigo e aprender todos os dias mais sobre você e sobre mim mesmo é um privilégio e eu agradeço todos os dias por ter você na minha vida, poder desfrutar de momentos simples como rir de um gatinho olhando pra câmera ou rir de algo do nada porque um número apareceu é o que torna meu dia melhor, você me faz melhor.

Eu te amo do fundo do meu coração, minha vivi, feliz aniversário e feliz 9 meses. 🧛 👻`},


{name:"Bruce",role:"Rose Tyler",color:"#3bc420",ini:"Br",img:["images/bruce.png", "images/jolteon.png"],bg:"places/bruce.png",place:"O Sol, Espaço",msg:`EI, EVIE!!! Feliz aniversário, vida! Fico muito, muito, muito, feliz de ter decidido começar a odiar todo mundo numa conta do Andrew porque isso proporcionou a doideira incrível que foi te conhecer. Mentir com você, roubar foto dos outros e perturbar todo mundo é uma das coisas mais legais do mundo todo. Muito obrigado mesmo por existir, vida, você é uma das melhores pessoas do mundo e é um privilégio poder passar todos os dias do resto da minha vida como seu amigo. Te amo, feliz aniversário, meu bem ❤️`},


{name:"Ceci",role:"Donna Noble",color:"#ff4a4a",ini:"C",img:["images/ceci.png", "images/flareon.png"],bg:"places/ceci.jpeg",place:"Bucareste, Romênia",msg:`Oi evi eu fico muito feliz de ter vc como cunhada pra gente estar ligada pra sempre fico muito feliz tbm pelo fato da gente ser amiga além de cunhadas! Amo você demais e sou grata por todos os momentos, te perdoo por defender o raciskachu espero que vc aproveite bastante com a tique vote 13 bem forte e ganhe de presente a democracia no Brasil por mais quatro anos me esforcei muito pra mudar votos e manifestar pra vc ter esse presentao te amo fica bem aproveita seu dia com o gato fujão e a quietinha tbm que eu nao lembro o nome mas sei que vc gosta deles 💞`},


{name:"Lice",role:"Dalek",color:"#cb59f8",ini:"L",img:["images/lice.png", "images/leafeon.png"],bg:"places/lice.jpeg",place:"Roma, Itália",msg:`OI EVI VIDA FELIZ ANIVERSÁRIO 🎂 
PAW✨✨✨PAPAPAPA POW🎆🎇🎇 POW POW🎆🎉🎆TRATRATRA🎆🎇💥POW 🎆🧨🎇PÁ PÁ ✨🎇✨🎆🧨🎇✨🎇🧨TRA TRA TRA 

Ev primeiramente feliz aniversário!!!!!!! Eu sempre vou te desejar tudo de bom, e sempre vou torcer pelo seu melhor todos os dias das nossas vidas 
Segundamente, obrigado por estar viva e por ter entrado naquele squad. Ter feito amizade com vc foi uma das melhores coisas que poderiam ter acontecido na minha vida. Eu te amo muito, voce é como uma irmã pra mim e eu fico muito feliz por comemorar seus aniversários com você, espero que voce saiba o quão importantes você é na minha vida e o quanto eu te amo 
Feliz aniversário ivi, aproveita muito o seu dia ♡`},


{name:"Dan",role:"Jack Harkness",color:"#2926e4",ini:"D",img:["images/dan.png", "images/espeon.png"],bg:"places/dan.png",place:"Lyon, França",msg:`FELIZ VIDA EVII TRAYRATRA POWPOWPOWPOW FILLL FIILLL 🎉🎉💥💥🎉💥🎉💥 espero  q seu dia seja incrivel e vc se divirta mt sdda da beelie diva abelhuda e da polter minhaa irma do corasao  tranque essa sua faculdade ta atrapalhando nosso rpg. vc eh mt legal apesar de mentirosa dramática e defensora de racista mas saiba q aoesar de tudo isso eu ti amo muito * figurinha do bruce bestalhado *  no seu proximo aniversário eu vou estar na sua casa qurbrando ovo(com tinta rosa e verde dentro) na sua cabeca 😀`},


{name:"Bea",role:"Martha Jones",color:"#4e0755",ini:"Be",img:["images/bea.png", "images/sylveon.png"],bg:"places/bea.jpg",place:"Espaço, Espaço",msg:`FELIZ ANIVERSÁRIO, ANDY!!! 🎉🎉🎉 sou muito feliz por ter te conhecido e por ter você na minha vida. você se tornou alguém muito especial pra mim, e eu espero que saiba o quanto te considero e o carinho enorme que tenho por você. espero continuar sendo sua amiga por muitos e muitos anos, compartilhando momentos e criando novas memórias juntas. te desejo tudo de mais lindo nesse mundo, porque você merece muito!! eu te amo muitooo, Andy, feliz aniversário!! 🤍🎉🎉`}
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
