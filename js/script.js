const $ = s => document.querySelector(s);

// title letters
function letters(el, str, start){
  [...str].forEach((c,i)=>{const s=document.createElement('span');s.textContent=c;s.style.setProperty('--t',(start+i*.2)+'s');el.appendChild(s)});
}
letters($('#t1'), CONFIG.line1, 1.2);
letters($('#t2'), CONFIG.line2, 2.3);
$('#nm').textContent = CONFIG.name;

// bunting flags
(function(){
  const cols=['#ff7882','#fff','#ffc4c9','#ff9aa3'];let h='<path d="M0 8 Q500 28 1000 8" stroke="#333" stroke-width="3" fill="none"/>';
  for(let i=0;i<20;i++){const x=25+i*48,y=8+Math.sin(i/19*Math.PI)*10+ (i/19)*0;const yy=11+Math.sin(i/19*Math.PI)*10;
    h+=`<polygon points="${x-18},${yy} ${x+18},${yy} ${x},${yy+40}" fill="${cols[i%4]}" stroke="#333" stroke-width="3"/>`}
  $('#bunt').innerHTML=h;
})();

// rotating badge text
(function(){const t='happy-birthday-';[...t].forEach((c,i)=>{const s=document.createElement('span');s.textContent=c;s.style.setProperty('--i',i+1);$('#ring').appendChild(s)})})();

// date typewriter
setTimeout(()=>{
  const d=$('#date');let i=0;
  const iv=setInterval(()=>{ if(i<CONFIG.date.length){d.textContent+=CONFIG.date[i++]}else{d.textContent='⭐ '+CONFIG.date+' ⭐';clearInterval(iv)} },100);
},5800);

const REASONS=[["Your Pure Heart 💗", "You have one of the purest hearts I have ever known. Your kindness is so genuine, and the goodness you carry makes you such a beautiful soul."], ["Your Beautiful Smile 🌷", "Your smile is one of those little things that can make an ordinary day feel special. I hope you always have a thousand reasons to smile."], ["Your Unmatched Kindness 🦋", "You are so kind and sweet that sometimes I wonder how one person can have so much goodness in their heart."], ["The Way You Care 🧸", "The way you care about people is beautiful. You have a special way of making others feel important, valued, and loved."], ["Your Beautiful Soul ✨", "Your beauty goes far beyond your appearance. It shines through your heart, your actions, your thoughts, and the person you are."], ["Your Adorable Little Self 🎀", "There is something so effortlessly adorable about you. You don’t even have to try to be cute; being yourself is more than enough."], ["The Happiness You Bring 🌸", "You make little moments feel magical and ordinary days feel brighter. Sometimes, just having you around makes everything better."], ["Your Uniqueness 💕", "There is nobody quite like you in this entire world. Your personality, your little habits, your expressions, and your way of being make you one of a kind."], ["Your Precious Heart 💌", "Your heart deserves all the love, care, and appreciation this world can offer. I hope life always gives you reasons to keep that beautiful heart happy."], ["Your Irreplaceable Presence 🫶🏻", "You have a special place in my life that nobody else could ever fill. You are not just another person I met; you are someone I will always treasure."], ["The Comfort You Bring ☁️", "There is something beautiful about your presence that makes moments feel warmer and life feel a little softer. You are a person worth feeling safe and comfortable around."], ["Your Inner Strength 🌻", "You are stronger than you sometimes realise. Even when life gets difficult, I hope you remember how capable you are of getting through the hardest days."], ["Your Little Imperfections 🩷", "You don’t have to be perfect to be precious to me. Your little flaws, silly habits, and imperfect moments are all part of what makes you beautifully YOU."], ["The Memories We Make 🎞️", "Every little moment, every laugh, every conversation, and every memory becomes more special because you are a part of it. These are the little things I will always cherish."], ["Your Beautiful Mind 🌙", "The way you think, the way you see things, and the person you are beyond what everyone sees make you even more special than you know."], ["Your Ability to Make People Feel Loved 💐", "You have the kind of heart that can make people feel appreciated in ways you may not even notice. Never underestimate the difference your kindness makes."], ["The Little Things That Make You YOU 🧸", "Your expressions, your laughter, your reactions, your little moods, and all those tiny things you probably don’t even notice are part of what makes you so incredibly special to me."], ["The Happiness I Wish for You 🎂", "You deserve every beautiful thing life has to offer. I want you to experience the kind of happiness that makes your heart feel full and your eyes sparkle with excitement."], ["Simply Because You Are YOU, MY GIRL! 🥹💖", "I could spend forever writing reasons why you are special, and I would still run out of words before I could explain everything. You are special because of who you are, because of the beautiful heart you carry, and because nobody else in this entire universe could ever be YOU. You don’t need to prove your worth or change a single thing about yourself to deserve love. You are already so precious, so beautiful, and so incredibly irreplaceable. And if I had to choose my favourite reason of all, it would always be this one: <b>the world has you in it, and I am so lucky that my world got to meet you.</b> 💗🎀🧸"]];
const rs=$('#reasons');
REASONS.forEach((r,i)=>{const d=document.createElement('div');d.className='rc'+(i==18?' last':'');
 d.innerHTML=`<div class="n">${i+1}</div><div><h3>${r[0]}</h3><p>${r[1]}</p></div>`;rs.appendChild(d)});
// reasons slide down as you scroll the letter
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{root:$('.letter'),threshold:.15});
document.querySelectorAll('.rc,.hpanel').forEach(e=>io.observe(e));
// "I love you" heart animation
(function(){const ui=$('#ui');for(let i=1;i<=100;i++){const l=document.createElement('div');l.className='love';l.style.setProperty('--i',i);
 l.innerHTML='<div class="love_horizontal"><div class="love_vertical"><div class="love_word">I love you</div></div></div>';ui.appendChild(l)}})();
function fitHeart(){const p=$('.hpanel'),w=p.clientWidth||320,s=Math.min(1,w/700);$('#hwrap').style.transform='scale('+s+')';p.style.height=(540*s)+'px'}
$('#open').addEventListener('click',()=>setTimeout(fitHeart,60));addEventListener('resize',fitHeart);

// letter
let timers=[],iv1,iv2;
function later(fn,ms){timers.push(setTimeout(fn,ms))}
$('#open').onclick=()=>{
  $('#overlay').style.display='flex';
  const lt=$('#lt'),tx=$('#txt');lt.textContent='';tx.textContent='';
  const T=[...CONFIG.letterTitle],L=[...CONFIG.letter];let a=0;
  later(()=>{iv1=setInterval(()=>{ if(a<T.length){lt.textContent+=T[a++]}else clearInterval(iv1)},70)},500);
  later(()=>$('#lleft').classList.add('go'),1200);
  later(()=>{let b=0;iv2=setInterval(()=>{ if(b<L.length){tx.textContent+=L[b++]}else clearInterval(iv2)},45)},3600);
};
$('#close').onclick=()=>{
  timers.forEach(clearTimeout);clearInterval(iv1);clearInterval(iv2);timers=[];
  $('#overlay').style.display='none';$('#lleft').classList.remove('go');$('#lt').textContent='';$('.letter').scrollTop=0;document.querySelectorAll('.rc,.hpanel').forEach(e=>e.classList.remove('show'));
};

// floating hearts that follow the cursor / finger
const cols=['#ff3366','#ff6699','#ff33cc','#ff99cc','#ff66b2','#ff0066'];let last=0;
function heart(x,y){
  const n=Date.now();if(n-last<45)return;last=n;
  const h=document.createElement('div');h.textContent='♥';
  const sz=14+Math.random()*14;
  h.style.cssText=`position:fixed;left:${x-sz/2}px;top:${y-sz}px;font-size:${sz}px;color:${cols[Math.floor(Math.random()*6)]};pointer-events:none;z-index:1001;opacity:.8;transition:transform 1.4s ease-out,opacity 1.4s ease-out`;
  document.body.appendChild(h);
  requestAnimationFrame(()=>{h.style.transform=`translate(${(Math.random()-.5)*60}px,-${70+Math.random()*60}px)`;h.style.opacity=0});
  setTimeout(()=>h.remove(),1500);
}
addEventListener('mousemove',e=>heart(e.clientX,e.clientY));
addEventListener('touchmove',e=>{const t=e.touches[0];heart(t.clientX,t.clientY)},{passive:true});
