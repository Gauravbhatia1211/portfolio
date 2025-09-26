// Extra cyberpunk effects for the portfolio
// Adds more terminal interactions, security-themed elements, and easter eggs

(function() {
  // Security Alert System
  function createSecurityAlert(message, type = 'info') {
    const alert = document.createElement('div');
    alert.className = `security-alert ${type}`;
    alert.innerHTML = `
      <div class="alert-header">
        <i class="fas fa-shield-alt"></i>
        <span>SECURITY ALERT</span>
        <span class="alert-close">×</span>
      </div>
      <div class="alert-message">${message}</div>
    `;
    
    document.body.appendChild(alert);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      if (alert.parentNode) {
        alert.classList.add('fade-out');
        setTimeout(() => alert.remove(), 500);
      }
    }, 5000);
    
    // Manual close
    alert.querySelector('.alert-close').onclick = () => {
      alert.classList.add('fade-out');
      setTimeout(() => alert.remove(), 500);
    };
  }

  // Easter Egg: Konami Code
  let konamiCode = [38,38,40,40,37,39,37,39,66,65]; // up up down down left right left right B A
  let konamiIndex = 0;
  
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        activateHackerMode();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });

  function activateHackerMode() {
    createSecurityAlert('🎉 HACKER MODE ACTIVATED! Matrix effects enhanced!', 'success');
    document.body.classList.add('hacker-mode');
    
    // Enhance matrix rain
    const canvas = document.getElementById('matrix-canvas');
    if (canvas) {
      canvas.style.opacity = '0.4';
    }
    
    // Add more particles
    if (window.pJSDom && window.pJSDom[0]) {
      window.pJSDom[0].pJS.particles.number.value = 100;
      window.pJSDom[0].pJS.fn.particlesRefresh();
    }
  }

  // Terminal Command Executor (Easter Egg)
  function createFloatingTerminal() {
    const terminal = document.createElement('div');
    terminal.className = 'floating-terminal';
    terminal.innerHTML = `
      <div class="floating-terminal-header">
        <span>root@security-research:~</span>
        <span class="close-terminal">×</span>
      </div>
      <div class="floating-terminal-body">
        <div class="terminal-output"></div>
        <div class="terminal-input-line">
          <span class="terminal-prompt">$ </span>
          <input type="text" class="terminal-input" placeholder="Enter command...">
        </div>
      </div>
    `;
    
    document.body.appendChild(terminal);
    
    const input = terminal.querySelector('.terminal-input');
    const output = terminal.querySelector('.terminal-output');
    const closeBtn = terminal.querySelector('.close-terminal');
    
    const commands = {
      'help': 'Available commands: whoami, skills, projects, contact, clear, exit, hack',
      'whoami': 'Gaurav Bhatia - Security Researcher @ Microsoft MSRC',
      'skills': 'Python | Burp Suite | Metasploit | Bug Bounty | VAPT | CTF',
      'projects': 'Vulneralysis | Python Pickle Security | ImageStegano',
      'contact': 'Email: bhatiagaurav1211@gmail.com | LinkedIn: /in/gaurav-bhatia-bb290916a',
      'clear': 'CLEAR',
      'hack': '🔓 Access granted to classified files... Just kidding! 😄',
      'exit': 'EXIT'
    };
    
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const cmd = input.value.toLowerCase().trim();
        const response = commands[cmd] || `Command not found: ${cmd}. Type 'help' for available commands.`;
        
        if (response === 'CLEAR') {
          output.innerHTML = '';
        } else if (response === 'EXIT') {
          terminal.remove();
          return;
        } else {
          output.innerHTML += `<div class="output-line">$ ${input.value}</div>`;
          output.innerHTML += `<div class="output-response">${response}</div>`;
        }
        
        input.value = '';
        output.scrollTop = output.scrollHeight;
      }
    });
    
    closeBtn.onclick = () => terminal.remove();
    input.focus();
  }

  // Add terminal hotkey (Ctrl + `)
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === '`') {
      e.preventDefault();
      if (!document.querySelector('.floating-terminal')) {
        createFloatingTerminal();
      }
    }
  });

  // Data Stream Animation
  function createDataStream() {
    const stream = document.createElement('div');
    stream.className = 'data-stream';
    
    const data = [
      '01001000 01100001 01100011 01101011',
      'CVE-2024-6577 | CRITICAL | S3_BUCKET_EXPOSURE',
      'nmap -sS -O target.domain.com',
      'python3 exploit.py --target=vulnerable.app',
      'burpsuite --proxy=127.0.0.1:8080',
      'metasploit> use exploit/multi/handler',
      'wireshark -i eth0 -f "tcp port 80"',
      '>> Vulnerability assessment complete',
      '>> 15 critical findings detected',
      'frida -U -f com.app.package -l hook.js'
    ];
    
    stream.textContent = data[Math.floor(Math.random() * data.length)];
    stream.style.left = Math.random() * window.innerWidth + 'px';
    stream.style.animationDuration = (Math.random() * 3 + 2) + 's';
    
    document.body.appendChild(stream);
    
    setTimeout(() => stream.remove(), 5000);
  }

  // Create data streams periodically
  setInterval(createDataStream, 3000);

  // Security Scan Simulation
  function runSecurityScan() {
    const messages = [
      '🔍 Port scan initiated...',
      '🛡️ Firewall analysis complete',
      '🔐 SSL certificate validated',
      '⚠️ Potential XSS vector detected',
      '✅ Security assessment complete',
      '📊 Vulnerability report generated'
    ];
    
    messages.forEach((msg, i) => {
      setTimeout(() => createSecurityAlert(msg, 'info'), i * 1000);
    });
  }

  // Add scan button (hidden feature)
  setTimeout(() => {
    if (Math.random() > 0.7) { // 30% chance
      runSecurityScan();
    }
  }, 10000);

  // Interactive CVE Details
  document.addEventListener('DOMContentLoaded', () => {
    const cveCards = document.querySelectorAll('.cve-card');
    cveCards.forEach(card => {
      card.addEventListener('click', () => {
        const cveId = card.querySelector('.cve-id').textContent;
        createSecurityAlert(`📄 CVE Details: ${cveId} - Click to view full disclosure timeline`, 'info');
      });
    });
  });

  // Add CSS for extra effects
  const extraStyles = `
    .security-alert {
      position: fixed;
      top: 20px;
      right: 20px;
      background: rgba(0, 0, 0, 0.9);
      border: 1px solid var(--primary);
      border-radius: 8px;
      padding: 16px;
      color: var(--text);
      font-family: 'Fira Code', monospace;
      font-size: 12px;
      z-index: 1001;
      max-width: 300px;
      animation: slideInRight 0.3s ease-out;
      box-shadow: 0 0 20px rgba(0, 230, 168, 0.3);
    }
    
    .security-alert.fade-out {
      animation: slideOutRight 0.5s ease-out forwards;
    }
    
    .alert-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
      color: var(--primary);
      font-weight: bold;
    }
    
    .alert-close {
      margin-left: auto;
      cursor: pointer;
      color: var(--muted);
    }
    
    .floating-terminal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 500px;
      height: 300px;
      background: #000;
      border: 2px solid var(--primary);
      border-radius: 8px;
      z-index: 1002;
      font-family: 'Fira Code', monospace;
      box-shadow: 0 0 30px rgba(0, 230, 168, 0.5);
    }
    
    .floating-terminal-header {
      background: rgba(0, 230, 168, 0.1);
      padding: 8px 12px;
      border-bottom: 1px solid var(--primary);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      color: var(--primary);
    }
    
    .floating-terminal-body {
      padding: 12px;
      height: calc(100% - 40px);
      display: flex;
      flex-direction: column;
    }
    
    .terminal-output {
      flex: 1;
      overflow-y: auto;
      font-size: 11px;
      line-height: 1.4;
    }
    
    .terminal-input-line {
      display: flex;
      align-items: center;
      margin-top: 8px;
    }
    
    .terminal-input {
      background: transparent;
      border: none;
      color: var(--text);
      font-family: inherit;
      font-size: 11px;
      flex: 1;
      outline: none;
    }
    
    .terminal-prompt {
      color: var(--primary);
      margin-right: 4px;
    }
    
    .output-line {
      color: var(--text);
      margin: 2px 0;
    }
    
    .output-response {
      color: var(--primary-2);
      margin: 2px 0 8px 0;
    }
    
    .data-stream {
      position: fixed;
      top: -50px;
      font-family: 'Fira Code', monospace;
      font-size: 10px;
      color: var(--primary);
      background: rgba(0, 0, 0, 0.8);
      padding: 4px 8px;
      border-radius: 4px;
      animation: dataStreamFall linear forwards;
      pointer-events: none;
      z-index: -1;
      opacity: 0.7;
    }
    
    .hacker-mode {
      animation: hackerModeGlow 2s ease-out;
    }
    
    @keyframes slideInRight {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes dataStreamFall {
      to { top: 100vh; opacity: 0; }
    }
    
    @keyframes hackerModeGlow {
      0%, 100% { filter: hue-rotate(0deg); }
      50% { filter: hue-rotate(120deg); }
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.textContent = extraStyles;
  document.head.appendChild(styleSheet);

})();