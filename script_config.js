// Guardar evento en localStorage
function guardarEvento(horario, lugar, cursos) {
  const eventos = JSON.parse(localStorage.getItem('eventos')) || [];
  eventos.push({ horario, lugar, cursos });
  localStorage.setItem('eventos', JSON.stringify(eventos));
}

// Mostrar eventos en la tabla
function mostrarEventos() {
  const tabla = document.getElementById('tablaEventos');
  if (tabla) {
    const tbody = tabla.querySelector('tbody');
    const eventos = JSON.parse(localStorage.getItem('eventos')) || [];
    tbody.innerHTML = '';
    eventos.forEach(ev => {
      const fila = document.createElement('tr');
      fila.innerHTML = `<td>${ev.horario}</td><td>${ev.lugar}</td><td>${ev.cursos}</td>`;
      tbody.appendChild(fila);
    });
  }
}

// Llama a mostrarEventos al cargar la página
document.addEventListener('DOMContentLoaded', mostrarEventos);