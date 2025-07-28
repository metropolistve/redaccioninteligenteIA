async function cargarGlosario() {
  const response = await fetch('data/glosario.json');
  const data = await response.json();
  const select = document.getElementById('terminos');
  data.forEach(item => {
    const option = document.createElement('option');
    option.value = item.Término;
    option.textContent = item.Término;
    select.appendChild(option);
  });
  window.definiciones = data;
}

function mostrarDefinicion() {
  const termino = document.getElementById('terminos').value;
  const div = document.getElementById('definicion');
  const definicion = window.definiciones.find(item => item.Término === termino);
  div.innerHTML = definicion ? `<strong>${termino}</strong>: ${definicion.Definición}` : "";
}
window.onload = cargarGlosario;

