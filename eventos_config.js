// Guardar evento en localStorage
function guardarEvento(horario, lugar, cursos) {
  const eventos = JSON.parse(localStorage.getItem('eventos')) || [];
  eventos.push({ horario, lugar, cursos });
  localStorage.setItem('eventos', JSON.stringify(eventos));
}

// Obtener todos los eventos
function obtenerEventos() {
  return JSON.parse(localStorage.getItem('eventos')) || [];
}

// Exportar funciones si usas módulos
// export { guardarEvento, obtenerEventos };

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('formEvento');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const horario = document.getElementById('horario').value;
      const lugar = document.getElementById('lugar').value;
      const cursos = document.getElementById('cursos').value;
      guardarEvento(horario, lugar, cursos);
      mostrarEventos(); // Opcional: para actualizar la tabla sin recargar
      form.reset();
    });
  }
});