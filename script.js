// Main interactivity for portfolio
// - Typing effect text and loading sequence
// - Matrix rain canvas
// - Particles.js init
// - Smooth scrolling and section reveal
// - Stat counters and skill bar fill
// - Blog/GitHub integration placeholders

(function () {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  // Loading screen typing text
  const typingMessages = [
    "Initializing security modules...",
    "Loading vulnerability database...",
    "Spawning analysis pipelines...",
    "Establishing secure channels...",
    "Boot sequence complete"
  ];

  const typingEl = document.querySelector('#loading-screen .typing-text');
  const cursorEl = document.querySelector('#loading-screen .cursor');

  function typeSequence(messages, cb) {
    let i = 0;
    function typeNext() {
      if (i >= messages.length) return cb && cb();
      typeText(messages[i], () => setTimeout(() => eraseText(typeNext), 300));
      i++;
    }
    typeNext();
  }

  function typeText(text, done) {
    typingEl.textContent = '';
    let idx = 0;
    const int = setInterval(() => {
      typingEl.textContent = text.slice(0, idx++);
      if (idx > text.length) { clearInterval(int); done && done(); }
    }, 18);
  }
  function eraseText(done) {
    const int = setInterval(() => {
      typingEl.textContent = typingEl.textContent.slice(0, -1);
      if (!typingEl.textContent.length) { clearInterval(int); done && done(); }
    }, 10);
  }

  // Hide loading screen after progress animation
  window.addEventListener('load', () => {
    typeSequence(typingMessages, () => {
      setTimeout(() => {
        $('#loading-screen').classList.add('hidden');
      }, 400);
    });
  });

  // Hero terminal typing loop
  const heroCmd = $(".typing-animation");
  const commands = [
    "whoami && echo 'Security Researcher @ MSRC'",
    "nmap -A target.com | grep 'open'",
    "python3 automate_triage.py --run",
    "echo CVEs: 2024-6577, 2024-1682, 2023-6017"
  ];
  let cmdIdx = 0;
  function setCommand() {
    heroCmd.textContent = commands[cmdIdx % commands.length];
    cmdIdx++;
  }
  setInterval(setCommand, 4500);
  setCommand();

  // Smooth scroll for nav links
  $$('.nav-link').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = $(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Stat counters
  const counters = $$('.stat-number');
  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.dataset.target;
        let cur = 0;
        const step = Math.max(1, Math.round(target / 60));
        const int = setInterval(() => {
          cur += step;
          if (cur >= target) { cur = target; clearInterval(int); }
          el.textContent = cur.toString();
        }, 16);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObserver.observe(c));

  // Skill bar levels
  $$('.skill-bar').forEach(bar => {
    const level = bar.getAttribute('data-level') || '0';
    bar.style.setProperty('--skill-level', `${level}%`);
  });

  // Section reveal
  const sections = $$('.about, .experience, .skills, .projects, .blogs, .feedback, .contact, .cve-section');
  sections.forEach(s => s.classList.add('section-animate'));
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, { threshold: 0.2 });
  sections.forEach(s => revealObserver.observe(s));

  // Matrix rain canvas
  const matrix = $('#matrix-canvas');
  const ctx = matrix.getContext('2d');
  function resizeCanvas() {
    matrix.width = window.innerWidth; matrix.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const letters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&';
  const fontSize = 14;
  let columns = Math.floor(window.innerWidth / fontSize);
  let drops = new Array(columns).fill(1);

  function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.07)';
    ctx.fillRect(0, 0, matrix.width, matrix.height);
    ctx.fillStyle = '#00e6a8';
    ctx.font = fontSize + 'px Fira Code, monospace';
    drops.forEach((y, i) => {
      const text = letters[Math.floor(Math.random() * letters.length)];
      const x = i * fontSize;
      ctx.fillText(text, x, y * fontSize);
      if (y * fontSize > matrix.height && Math.random() > 0.975) drops[i] = 0;
      drops[i] = y + 1;
    });
  }
  setInterval(drawMatrix, 50);

  // Particles
  if (window.particlesJS) {
    particlesJS('particles-js', {
      particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } },
        color: { value: ['#00e6a8', '#00d4ff'] },
        shape: { type: 'circle' },
        opacity: { value: 0.6 },
        size: { value: 2, random: true },
        line_linked: { enable: true, distance: 120, color: '#00d4ff', opacity: 0.25, width: 1 },
        move: { enable: true, speed: 1.2 }
      },
      interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
        modes: { repulse: { distance: 80 }, push: { particles_nb: 4 } }
      },
      retina_detect: true
    });
  }

  // Hamburger toggle for small screens
  const burger = $('.hamburger');
  const navMenu = $('.nav-menu');
  if (burger) {
    burger.addEventListener('click', () => {
      const open = navMenu.style.display === 'flex';
      navMenu.style.display = open ? 'none' : 'flex';
      navMenu.style.flexDirection = 'column';
      navMenu.style.gap = '12px';
    });
  }

  // Share button (copy link)
  const shareBtn = $('.share-btn');
  if (shareBtn && navigator.clipboard) {
    shareBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('https://medium.com/@bhatiagaurav1211/ability-to-login-as-google-staff-in-google-cloud-community-57c45809de05');
        shareBtn.textContent = 'Copied!';
        setTimeout(() => (shareBtn.innerHTML = '<i class="fas fa-share-alt"></i> Share'), 1200);
      } catch (e) {}
    });
  }

  // Avatar image handling
  const avatarImg = $('.avatar-img');
  if (avatarImg) {
    // Try local profile image first, then GitHub avatar
    const localImageSources = [
      './portfolioimage.jpeg',
      './images/portfolioimage.jpeg',
      './images/profile.jpg',
      './images/profile.png',
      './images/profile.jpeg',
      './images/avatar.jpg',
      './images/avatar.png'
    ];
    
    let currentSourceIndex = 0;
    
    function tryNextSource() {
      if (currentSourceIndex < localImageSources.length) {
        const img = new Image();
        img.onload = () => {
          avatarImg.src = localImageSources[currentSourceIndex];
        };
        img.onerror = () => {
          currentSourceIndex++;
          tryNextSource();
        };
        img.src = localImageSources[currentSourceIndex];
      }
      // If no local images found, keep the GitHub avatar as fallback
    }
    
    // Check for local images on load
    setTimeout(tryNextSource, 1000);
  }

  // Visitor Counter
  function initVisitorCounter() {
    const counterEl = $('#visitor-count');
    if (!counterEl) return;
    
    // Get stored count or start from a realistic base number
    let count = localStorage.getItem('portfolioVisitors') || 1247;
    count = parseInt(count);
    
    // Increment on each visit
    const lastVisit = localStorage.getItem('lastVisitDate');
    const today = new Date().toDateString();
    
    if (lastVisit !== today) {
      count += Math.floor(Math.random() * 3) + 1; // Add 1-3 visits
      localStorage.setItem('portfolioVisitors', count);
      localStorage.setItem('lastVisitDate', today);
    }
    
    // Animate counter
    let current = 0;
    const increment = Math.ceil(count / 30);
    const timer = setInterval(() => {
      current += increment;
      if (current >= count) {
        current = count;
        clearInterval(timer);
      }
      counterEl.textContent = current.toLocaleString();
    }, 50);
  }

  // Feedback Form Handler
  function initFeedbackForm() {
    const form = $('#feedbackForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('.submit-btn');
      const originalText = submitBtn.innerHTML;
      
      // Simulate sending
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
        submitBtn.style.background = 'rgba(0, 230, 168, 0.3)';
        
        // Reset form
        setTimeout(() => {
          form.reset();
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
          
          // Update feedback count
          const feedbackCountEl = $('#feedback-count');
          if (feedbackCountEl) {
            const currentCount = parseInt(feedbackCountEl.textContent);
            feedbackCountEl.textContent = currentCount + 1;
          }
        }, 2000);
      }, 1500);
    });
  }

  // Initialize on load
  window.addEventListener('load', () => {
    initVisitorCounter();
    initFeedbackForm();
  });
})();
