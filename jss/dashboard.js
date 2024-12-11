document.addEventListener('DOMContentLoaded', () => {
    const sidebarItems = document.querySelectorAll('.sidebar nav ul li');
    
    sidebarItems.forEach(item => {
      item.addEventListener('click', () => {
        sidebarItems.forEach(el => el.classList.remove('active'));
        item.classList.add('active');
      });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
  
    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
  });
  
    