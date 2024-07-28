document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.profile-nav ul li a');
    const indicator = document.querySelector('.profile-nav .indicator');

    function setIndicatorPosition(link) {
      const rect = link.getBoundingClientRect();
      const navRect = link.closest('.profile-nav').getBoundingClientRect();
      indicator.style.left = `${rect.left - navRect.left}px`;
      indicator.style.width = `${rect.width}px`;
    }

    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
        setIndicatorPosition(link);
      });
    });

    const activeLink = document.querySelector('.profile-nav ul li a.active');
    if (activeLink) {
      setIndicatorPosition(activeLink);
    }
  });

