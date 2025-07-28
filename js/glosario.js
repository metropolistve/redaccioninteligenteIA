
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
cargarGlosario();
function mostrarDefinicion() {
  const select = document.getElementById("terminos");
  const definicion = document.getElementById("definicion");
  const termino = select.value;

  if (termino) {
    // Reemplaza esto con tu lógica real de búsqueda en el glosario
    const definicionTexto = obtenerDefinicion(termino);
    definicion.innerText = definicionTexto;
    definicion.classList.add("visible");
  } else {
    definicion.innerText = "";
    definicion.classList.remove("visible");
  }
}
