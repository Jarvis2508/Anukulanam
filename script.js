// year + tiny interactions
document.getElementById('year').textContent = new Date().getFullYear();

// fake cart counter (demo)
const cartCount = document.getElementById('cartCount');
let count = Number(localStorage.getItem('demoCart') || 0);
cartCount.textContent = count;
document.querySelectorAll('.link, .btn.primary').forEach(el=>{
  el.addEventListener('click', e=>{
    if(el.textContent.toLowerCase().includes('shop')){
      e.preventDefault();
      count++;
      localStorage.setItem('demoCart', count);
      cartCount.textContent = count;
    }
  });
});

// mobile menu
const burger = document.getElementById('burger');
const nav = document.querySelector('.nav');
burger?.addEventListener('click', ()=>{
  nav.style.display = nav.style.display==='flex' ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.gap = '12px';
  nav.style.background = '#fff';
  nav.style.position = 'absolute';
  nav.style.top = '64px';
  nav.style.left = '0';
  nav.style.right = '0';
  nav.style.padding = '14px 20px';
  nav.style.borderBottom = '1px solid #e6e0d9';
});

// newsletter demo
document.getElementById('nlForm')?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const email = document.getElementById('nlEmail').value.trim();
  if(!email){ alert('please enter email'); return; }
  alert('thanks for subscribing, we\'ll be in touch!');
  e.target.reset();
});
