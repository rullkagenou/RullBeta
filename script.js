// Scroll smooth
document.querySelectorAll('header nav a').forEach(link => {
  link.onclick = function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  };
});
// Tombol beli
document.querySelectorAll('.card button').forEach(btn => {
  btn.onclick = () => alert('Fungsi beli dalam pengembangan');
});