/**
 * LuxMist — Script principal
 * Page d'atterrissage bilingue (FR/EN) pour un service B2B premium.
 * Vanilla JS · ES6+ · Mode strict · IIFE
 */
'use strict';

(() => {
  /* ============================================================
   *  1. SÉLECTEUR DE LANGUE (FR / EN)
   * ============================================================ */

  const LANG_KEY = 'luxmist-lang';
  const DEFAULT_LANG = 'fr';

  /** Applique la langue choisie à tout le DOM. */
  function applyLanguage(lang) {
    // Mettre à jour l'attribut lang du <html>
    document.documentElement.lang = lang === 'fr' ? 'fr-CA' : 'en-CA';

    // Boutons — activer/désactiver
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('lang-btn--active', btn.dataset.lang === lang);
    });

    // Contenu textuel — éléments avec data-fr / data-en
    document.querySelectorAll('[data-fr][data-en]').forEach((el) => {
      el.textContent = el.dataset[lang];
    });

    // Placeholders — inputs et textareas bilingues
    document.querySelectorAll('[data-placeholder-fr][data-placeholder-en]').forEach((el) => {
      el.placeholder = lang === 'fr' ? el.dataset.placeholderFr : el.dataset.placeholderEn;
    });

    // Persister le choix
    localStorage.setItem(LANG_KEY, lang);
  }

  /** Retourne la langue courante (depuis localStorage ou défaut). */
  function getCurrentLang() {
    return localStorage.getItem(LANG_KEY) || DEFAULT_LANG;
  }

  // Écouter les clics sur les boutons de langue
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.dataset.lang);
    });
  });

  // Appliquer la langue sauvegardée au chargement
  applyLanguage(getCurrentLang());

  /* ============================================================
   *  2. EFFET DE SCROLL SUR LA BARRE DE NAVIGATION
   * ============================================================ */

  const navbar = document.getElementById('navbar');

  function handleNavbarScroll() {
    if (!navbar) return;
    if (window.scrollY > 50) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  // État initial
  handleNavbarScroll();

  /* ============================================================
   *  3. DÉFILEMENT FLUIDE (smooth scroll)
   * ============================================================ */

  const NAVBAR_OFFSET = 80; // hauteur réservée pour la navbar fixe

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return; // lien vide, ignorer

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const top = target.getBoundingClientRect().top + window.pageYOffset - NAVBAR_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ============================================================
   *  4. VALIDATION DU FORMULAIRE DE CONTACT
   * ============================================================ */

  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  // Messages bilingues
  const MESSAGES = {
    success: {
      fr: 'Merci pour votre demande! Nous vous contacterons dans les 24 heures.',
      en: "Thank you for your request! We'll contact you within 24 hours.",
    },
    error: {
      fr: 'Veuillez corriger les champs en erreur avant de soumettre.',
      en: 'Please correct the highlighted fields before submitting.',
    },
  };

  /** Regex simple pour courriel. */
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /** Regex pour téléphone canadien : +1XXXXXXXXXX ou 10 chiffres. */
  const PHONE_REGEX = /^(\+1\d{10}|\d{10})$/;

  /**
   * Valide un champ et bascule la classe d'erreur.
   * @returns {boolean} true si valide
   */
  function validateField(field, isValid) {
    field.classList.toggle('input--error', !isValid);
    return isValid;
  }

  /** Attache un listener « input » pour retirer l'erreur en temps réel. */
  function clearErrorOnInput(field) {
    field.addEventListener('input', () => {
      field.classList.remove('input--error');
    });
  }

  if (contactForm) {
    // Retirer les erreurs au fur et à mesure de la saisie
    contactForm.querySelectorAll('input, textarea').forEach(clearErrorOnInput);

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const lang = getCurrentLang();
      let isFormValid = true;

      // --- Nom (requis, min 2 caractères)
      const nom = contactForm.querySelector('[name="nom"]');
      if (nom) {
        const ok = nom.value.trim().length >= 2;
        if (!validateField(nom, ok)) isFormValid = false;
      }

      // --- Courriel (requis, format valide)
      const email = contactForm.querySelector('[name="email"]');
      if (email) {
        const ok = EMAIL_REGEX.test(email.value.trim());
        if (!validateField(email, ok)) isFormValid = false;
      }

      // --- Établissement (requis, min 2 caractères)
      const etablissement = contactForm.querySelector('[name="etablissement"]');
      if (etablissement) {
        const ok = etablissement.value.trim().length >= 2;
        if (!validateField(etablissement, ok)) isFormValid = false;
      }

      // --- Téléphone (optionnel — si rempli, format canadien)
      const telephone = contactForm.querySelector('[name="telephone"]');
      if (telephone) {
        const val = telephone.value.replace(/[\s\-().]/g, '');
        const ok = val === '' || PHONE_REGEX.test(val);
        if (!validateField(telephone, ok)) isFormValid = false;
      }

      // --- Ville (requis, min 2 caractères)
      const ville = contactForm.querySelector('[name="ville"]');
      if (ville) {
        const ok = ville.value.trim().length >= 2;
        if (!validateField(ville, ok)) isFormValid = false;
      }

      // --- Afficher le statut
      if (formStatus) {
        // Nettoyer les classes précédentes
        formStatus.classList.remove(
          'contact__form-status--success',
          'contact__form-status--error'
        );

        if (isFormValid) {
          formStatus.textContent = MESSAGES.success[lang];
          formStatus.classList.add('contact__form-status--success');

          // Réinitialiser le formulaire après 3 secondes
          setTimeout(() => {
            contactForm.reset();
            formStatus.textContent = '';
            formStatus.classList.remove('contact__form-status--success');
          }, 3000);
        } else {
          formStatus.textContent = MESSAGES.error[lang];
          formStatus.classList.add('contact__form-status--error');
        }
      }
    });
  }

  /* ============================================================
   *  5. ANIMATIONS AU DÉFILEMENT (Intersection Observer)
   * ============================================================ */

  const fadeElements = document.querySelectorAll('.fade-in');

  if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in--visible');
            observer.unobserve(entry.target); // une seule fois
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-30px',
      }
    );

    fadeElements.forEach((el) => fadeObserver.observe(el));
  }

  /* ============================================================
   *  6. EFFET PARALLAXE SUBTIL SUR LE HÉROS
   * ============================================================ */

  const heroContent = document.querySelector('.hero__content');

  function handleParallax() {
    if (!heroContent) return;

    if (window.scrollY < window.innerHeight) {
      const offset = window.scrollY * 0.3;
      heroContent.style.transform = `translateY(-${offset}px)`;
    }
  }

  window.addEventListener('scroll', handleParallax, { passive: true });
  // État initial
  handleParallax();
})();
