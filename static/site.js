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

  // 2. Keyboard shortcut for search: "/" or "Ctrl+K" / "Cmd+K" to open, "Escape" to close

  document.addEventListener('keydown', function(e) {
    var searchBar = document.getElementById('search-bar');
    var searchToggle = document.getElementById('search-toggle');
    var searchContainer = document.getElementById('search-container');
    
    // Press "/" (when not typing in an input/textarea) or "Ctrl+K" / "Cmd+K"
    var isInput = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName) || document.activeElement.isContentEditable;
    if ((e.key === '/' && !isInput) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) {
      e.preventDefault();
      if (searchContainer && !searchContainer.classList.contains('active')) {
        if (searchToggle) searchToggle.click();
      } else if (searchBar) {
        searchBar.focus();
        searchBar.select();
      }
    } else if (e.key === 'Escape' && searchContainer && searchContainer.classList.contains('active')) {
      if (searchToggle) searchToggle.click();
    }
  });
});

