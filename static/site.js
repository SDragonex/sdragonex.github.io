// Dany Chaker (SDragonex) - Site Utilities
// High performance, zero dependency scripts

document.addEventListener('DOMContentLoaded', function() {
  // Wrap markdown tables inside .table-wrapper to enable smooth horizontal scrolling on mobile
  var tables = document.querySelectorAll('main table');
  tables.forEach(function(table) {
    if (table.closest('pre')) return; // Ignore syntax-highlighting line number tables
    if (!table.parentElement.classList.contains('table-wrapper')) {
      var wrapper = document.createElement('div');
      wrapper.className = 'table-wrapper';
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    }
  });
});
