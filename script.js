const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

const universities = ['IE University','Universidad Complutense de Madrid','Universidad Carlos III de Madrid','Universidad Autónoma de Madrid','Universidad Politécnica de Madrid','Universidad Europea','Universidad Francisco de Vitoria','ESIC','ESADE','IESE','Universidad de Navarra'];
const activeCampuses = new Set(['IE University','Universidad Carlos III de Madrid','Universidad Complutense de Madrid','Universidad Europea','ESIC']);
const list = document.getElementById('universities');
const select = document.getElementById('university-select');
const input = document.getElementById('university-input');
const statusEl = document.getElementById('coverage-status');
select.innerHTML = '<option value="">Universidades populares</option>';
universities.forEach((u) => {
  const a = document.createElement('option'); a.value = u; list.appendChild(a);
  const b = document.createElement('option'); b.value = u; b.textContent = u; select.appendChild(b);
});
const checkCoverage = (name) => { if (!name) return; statusEl.textContent = activeCampuses.has(name.trim()) ? 'Ya operamos aquí. Puedes reservar tu recogida.' : 'Todavía no operamos aquí, pero déjanos tus datos y te avisaremos pronto.'; };
input.addEventListener('input', (e) => checkCoverage(e.target.value));
select.addEventListener('change', (e) => { input.value = e.target.value; checkCoverage(e.target.value); });

const form = document.getElementById('lead-form');
const result = document.getElementById('form-result');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) { result.textContent = 'Revisa los campos obligatorios antes de enviar.'; return; }
  result.textContent = 'Gracias. Hemos recibido tu solicitud y te contactaremos pronto.';
  form.reset();
});

const slides = [...document.querySelectorAll('.slide')];
let current = 0;
setInterval(() => { slides[current].classList.remove('active'); current = (current + 1) % slides.length; slides[current].classList.add('active'); }, 3500);

const observer = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')), { threshold: .12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
