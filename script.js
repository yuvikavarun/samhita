// Initialize Vanta Topology (Green)
VANTA.TOPOLOGY({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0xffdab9 
});

// Switch between sections
function showSection(id) {
    document.querySelectorAll('.section-content').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo(0, 0);
}
