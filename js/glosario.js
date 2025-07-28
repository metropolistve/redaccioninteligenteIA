
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
  const select = document.getElementById("terminos");
  const definicion = document.getElementById("definicion");
  const termino = select.value;

  if (termino === "") {
    definicion.innerHTML = "";
    definicion.classList.remove("mostrar");
    return;
  }

  // Aquí se asume que tienes un diccionario llamado "glosario"
  const texto = glosario[termino] || "Definición no disponible.";
  definicion.innerHTML = texto;
  definicion.classList.add("mostrar");
}

