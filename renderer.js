function generateCalendar() {
  const calendar = document.getElementById('calendar');
  const monthYear = document.getElementById('monthYear');

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  monthYear.textContent = `${monthNames[month]} ${year}`;

  let html = '<tr>';
  const days = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
  for (let d of days) html += `<th>${d}</th>`;
  html += '</tr><tr>';

  let day = 1;
  for (let i = 0; i < 42; i++) {
    if (i < firstDay || day > lastDate) {
      html += '<td></td>';
    } else {
      const isToday = day === now.getDate();
      html += `<td class="${isToday ? 'today' : ''}">${day}</td>`;
      day++;
    }
    if ((i + 1) % 7 === 0) html += '</tr><tr>';
  }

  html += '</tr>';
  calendar.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', generateCalendar);
