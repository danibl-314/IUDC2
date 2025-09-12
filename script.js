function agregarNombre() {
  const input = document.getElementById('nombreInput');
  const nombre = input.value.trim();
  if(nombre) {
    const lista = document.getElementById('listaNombres');
    const li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);
    input.value = '';
    input.focus();
  }
}

function eliminarNombre() {
  const lista = document.getElementById('listaNombres');
  if(lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
}
