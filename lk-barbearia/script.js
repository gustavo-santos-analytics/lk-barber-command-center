    // ============================================
    // CONFIGURAÇÃO DE LINKS - Altere os URLs aqui
    // ============================================
    const LINKS = {
      vendasProdutos:    "https://docs.google.com/forms/d/e/1FAIpQLSfGWQ3RHaYGdWG6F4hlVo-tYIpGRm1BD8QMF3Tvf5Cb1sAZwA/viewform?usp=sharing&ouid=106365429052908774161",
      bancada1:          "https://docs.google.com/forms/d/e/1FAIpQLSfu5k3arIvADOMy6LnyQTIIo-JR2nP2uJSyCtiiFvDde9LTYg/viewform?usp=pp_url&entry.509369668=Bruno",
      bancada2:          "https://docs.google.com/forms/d/e/1FAIpQLSfu5k3arIvADOMy6LnyQTIIo-JR2nP2uJSyCtiiFvDde9LTYg/viewform?usp=pp_url&entry.509369668=Nauan",
      bancada3:          "https://docs.google.com/forms/d/e/1FAIpQLSfu5k3arIvADOMy6LnyQTIIo-JR2nP2uJSyCtiiFvDde9LTYg/viewform?usp=pp_url&entry.509369668=Barbeiro+3",
      custosOperacionais:"https://docs.google.com/forms/d/e/1FAIpQLSd2JJFipTlGSjOFEzNLx21-HSIQ-bXZo_7h3PMaR38lAnKcjg/viewform?usp=sharing&ouid=106365429052908774161",
      comprasInsumos:    "https://docs.google.com/forms/d/e/1FAIpQLSeB77CaazsSVRPXArE9juiDXCDQpsW5HOI3mPll3Sv7h7bqVw/viewform?usp=sharing&ouid=106365429052908774161",
      dashboard:         "",
    };

    // ============================================
    // ÍCONES SVG (Lucide equivalentes)
    // ============================================
    const ICONS = {
      shoppingBag: '<svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
      scissors:    '<svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>',
      dollarSign:  '<svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
      package:     '<svg viewBox="0 0 24 24"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
    };

    // ============================================
    // DEFINIÇÃO DOS BOTÕES
    // ============================================
    const actions = [
      { label: "Vendas de Produtos", subtitle: "Registrar vendas",   icon: ICONS.shoppingBag, href: LINKS.vendasProdutos,     delay: 0 },
      { label: "Bancada 1",         subtitle: "Atendimentos",        icon: ICONS.scissors,    href: LINKS.bancada1,            delay: 50 },
      { label: "Bancada 2",         subtitle: "Atendimentos",        icon: ICONS.scissors,    href: LINKS.bancada2,            delay: 100 },
      { label: "Bancada 3",         subtitle: "Atendimentos",        icon: ICONS.scissors,    href: LINKS.bancada3,            delay: 150 },
      { label: "Custos Operacionais", subtitle: "Controle de custos", icon: ICONS.dollarSign, href: LINKS.custosOperacionais, delay: 200 },
      { label: "Compras de Insumos", subtitle: "Registrar compras",  icon: ICONS.package,     href: LINKS.comprasInsumos,      delay: 250 },
    ];

    // ============================================
    // RENDERIZAÇÃO
    // ============================================
    const grid = document.getElementById("actionsGrid");

    actions.forEach(function(action) {
      const card = document.createElement("a");
      card.href = action.href;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
      card.className = "glass-card action-card animate-fade-up";
      card.style.animationDelay = action.delay + "ms";
      card.innerHTML =
        '<div class="action-icon-wrap">' + action.icon + '</div>' +
        '<div>' +
          '<p class="action-label">' + action.label + '</p>' +
          '<p class="action-sub">' + action.subtitle + '</p>' +
        '</div>';
      grid.appendChild(card);
    });

    // Dashboard link
    document.getElementById("dashboardBtn").href = LINKS.dashboard;

    // Ano automático
    document.getElementById("year").textContent = new Date().getFullYear();