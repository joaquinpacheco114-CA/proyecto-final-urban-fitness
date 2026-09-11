// =========================================================
// site.js — comportamiento compartido de Urban Fitness
// =========================================================

document.addEventListener('DOMContentLoaded', function () {

  // ---------- Animaciones al hacer scroll (AOS) ----------
  if (window.AOS) {
    AOS.init({
      duration: 600,
      easing: 'ease-out',
      once: true,
      offset: 60
    });
  }

  // ---------- Cerrar el menú mobile al tocar un link ----------
  var navCollapseEl = document.getElementById('navMenu');
  if (navCollapseEl && window.bootstrap) {
    var bsCollapse = new bootstrap.Collapse(navCollapseEl, { toggle: false });
    navCollapseEl.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        if (navCollapseEl.classList.contains('show')) {
          bsCollapse.hide();
        }
      });
    });
  }

  // ---------- Filtro de productos (tienda.html) ----------
  var filterBar = document.querySelector('[data-filter-bar]');
  if (filterBar) {
    var pills = filterBar.querySelectorAll('.filter-pill');
    var cards = document.querySelectorAll('[data-product]');
    var countEl = document.querySelector('[data-product-count]');

    function applyFilter(value) {
      var visible = 0;
      cards.forEach(function (card) {
        var match = value === 'todos' || card.getAttribute('data-category') === value;
        card.closest('.col-12') ? null : null;
        var col = card.parentElement;
        if (match) {
          col.style.display = '';
          visible++;
        } else {
          col.style.display = 'none';
        }
      });
      if (countEl) {
        countEl.textContent = visible + (visible === 1 ? ' producto' : ' productos');
      }
      pills.forEach(function (p) {
        p.classList.toggle('is-active', p.getAttribute('data-filter') === value);
      });
    }

    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        applyFilter(pill.getAttribute('data-filter'));
      });
    });

    // Si venimos desde un link de categoría en el home (index.html?cat=hombre)
    var params = new URLSearchParams(window.location.search);
    var catParam = params.get('cat');
    if (catParam && filterBar.querySelector('[data-filter="' + catParam + '"]')) {
      applyFilter(catParam);
    } else {
      applyFilter('todos');
    }
  }

  // ---------- Formulario de contacto ----------
  var contactForm = document.querySelector('.needs-validation');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();
      contactForm.classList.add('was-validated');

      if (contactForm.checkValidity()) {
        var successBox = document.querySelector('[data-form-success]');
        if (successBox) {
          successBox.classList.remove('d-none');
          successBox.setAttribute('tabindex', '-1');
          successBox.focus();
        }
        contactForm.reset();
        contactForm.classList.remove('was-validated');
      }
    });
  }

  // ---------- Newsletter (index.html) ----------
  var newsletterForm = document.querySelector('[data-newsletter-form]');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (event) {
      event.preventDefault();
      var msg = newsletterForm.querySelector('[data-newsletter-msg]');
      if (msg) {
        msg.textContent = '¡Listo! Ya sos parte de la comunidad Urban Fitness.';
        msg.classList.remove('d-none');
      }
      newsletterForm.reset();
    });
  }

});
