export const translations = {
  pt: {
    navbar: {
      projects: "Projetos",
      about: "Sobre mim",
      college: "Faculdade",
      contact: "Contato"
    },
    hero: {
      role: "Full Stack • Eng. Computação",
      btnProjects: "Ver Projetos",
      btnContact: "Contato"
    },
    projects: {
      title: "Projetos em Destaque",
      viewMore: "Ver Mais",
      viewLess: "Ver Menos",
      techs: "Tecnologias",
      objective: "Objetivo",
      challenges: "Desafios",
      repository: "Repositório",
      liveProject: "Projeto ao Vivo",
      projectsData: [
        {
          category: "Hub Literário Full Stack",
          description: "Uma plataforma inspirada em Athena, a deusa da sabedoria. Funciona como um hub literário pessoal onde o leitor acompanha seu progresso, descobre novos títulos via API e desbloqueia conquistas. O projeto combate a desorganização literária com um dashboard gamificado.",
          objective: "Estimular o hábito da leitura através de organização visual e gamificação. O foco foi criar um sistema completo onde o usuário gerencia 'estantes virtuais' (Lendo, Quero Ler, Lidos) e visualiza estatísticas de leitura.",
          challenges: "A integração entre Frontend (Vercel) e Backend (Render) gerou desafios complexos de CORS e Deploy, que foram resolvidos com configurações de proxy e headers seguros. Além disso, implementar a autenticação via JWT e a lógica de 'Badges' gamificadas exigiu um gerenciamento de estado avançado."
        },
        {
          category: "Plataforma Educacional Interativa",
          description: "Plataforma educativa criada do zero, unindo animações, design infantil e jogos interativos para tornar o aprendizado mais divertido. Inclui três jogos completos — memória, matemática e quiz histórico — com progressão, placares, mascotes e feedback em tempo real. Interface inspirada em livros de recortes e totalmente responsiva.",
          objective: "Transformar conteúdos educacionais em experiências lúdicas e intuitivas, acessíveis para crianças em fase de alfabetização.",
          challenges: "Criar uma interface intuitiva para crianças que ainda não leem fluentemente, implementar lógica de jogos em JavaScript e garantir responsividade com muitos elementos visuais e animações."
        },
        {
          category: "E-commerce Full Stack",
          description: "Loja online para a marca de cosméticos Aderia. Seleção inteligente com filtros por tipo de pele, preço e categoria. Carrinho de compras funcional, integração com Stripe para pagamentos e dashboard administrativo para gerenciar produtos. Design moderno com foco em conversão.",
          objective: "Criar uma experiência de compra fluida e intuitiva, permitindo que clientes encontrem produtos com facilidade e completem compras com segurança.",
          challenges: "Implementar sistema de pagamento com Stripe, gerenciar estado complexo do carrinho, otimizar performance de imagens de produtos e criar um painel admin completo."
        },
        {
          category: "App de Gestão Financeira",
          description: "Aplicativo para controle de finanças pessoais. Permite adicionar receitas e despesas, categorizar gastos, visualizar gráficos de evolução financeira e receber insights sobre hábitos de consumo. Design intuitivo com modo escuro.",
          objective: "Ajudar usuários a entender melhor seus hábitos financeiros e tomar decisões mais conscientes sobre gastos.",
          challenges: "Implementar gráficos dinâmicos, garantir persistência de dados, criar filtros eficientes e otimizar o cálculo de estatísticas."
        }
      ]
    },
    about: {
      slide1: {
        title: "Quem Sou Eu",
        bio: "Olá! Sou Alice Barbosa, uma desenvolvedora apaixonada por criar soluções digitais inovadoras e acessíveis. Com formação em Engenharia da Computação e experiência em desenvolvimento full stack, combino criatividade técnica com design centrado no usuário."
      },
      slide2: {
        title: "Habilidades Técnicas",
        frontend: "Front-end",
        backend: "Back-end",
        data: "Dados"
      },
      slide3: {
        title: "Soft Skills",
        collaboration: "Colaboração",
        problemSolving: "Resolução de Problemas",
        adaptability: "Adaptabilidade",
        creativity: "Criatividade",
        communication: "Comunicação",
        empathy: "Empatia"
      },
      slide4: {
        title: "Interesses & Freelance",
        interests: "Estou sempre interessada em",
        freelance: "Estou disponível para"
      }
    },
    college: {
      title: "Projeto Acadêmico – EcoArduino",
      role: "Voluntária • 07/2024 – Presente",
      projectAbout: "Sobre o Projeto",
      projectDesc1: "O EcoArduino é uma iniciativa acadêmica que combina tecnologia, sustentabilidade e reaproveitamento de componentes eletrônicos.",
      projectDesc2: "O objetivo é criar dispositivos funcionais utilizando peças reutilizadas, mostrando que inovação e consciência ambiental podem caminhar juntas.",
      myContributions: "Minhas Contribuições",
      contrib1: "Web: Criação do site oficial com tutoriais interativos.",
      contrib2: "Prototipagem: Montagem e testes de sensores com Arduino.",
      contrib3: "Documentação: Produção de guias para replicabilidade.",
      videoTitle: "Demo do Protótipo",
      siteLink: "O Site",
      siteDesc: "ecoarduino.netlify.app",
      behind: "Bastidores",
      label1: "Montagem",
      label2: "Testes",
      label3: "Estudos",
      label4: "Protótipo"
    },
    contact: {
      title: "Vamos Conversar?",
      message: "Estou sempre aberta a novas oportunidades, parcerias e conversas sobre tecnologia, desenvolvimento web, UI/UX e projetos criativos.",
      message2: "Ficarei muito feliz em receber sua mensagem! Seja para um projeto ou apenas para trocar uma ideia.",
      formTitle: "Envie uma mensagem",
      email: "alicebarbosadev@gmail.com",
      linkedin: "/alicebarbosa0101",
      github: "/alicebsrz",
      whatsapp: "WhatsApp (Iniciar Chat)",
      formName: "Seu Nome",
      formNamePlaceholder: "Ex: Alice Barbosa",
      formEmail: "Seu E-mail",
      formEmailPlaceholder: "exemplo@email.com",
      formMessage: "Sua Mensagem",
      formMessagePlaceholder: "Como posso te ajudar hoje?",
      submitBtn: "Enviar mensagem"
    }
  },
  en: {
    navbar: {
      projects: "Projects",
      about: "About Me",
      college: "Education",
      contact: "Contact"
    },
    hero: {
      role: "Full Stack • Comp. Engineering",
      btnProjects: "View Projects",
      btnContact: "Get in Touch"
    },
    projects: {
      title: "Featured Projects",
      viewMore: "View More",
      viewLess: "View Less",
      techs: "Technologies",
      objective: "Objective",
      challenges: "Challenges",
      repository: "Repository",
      liveProject: "Live Project",
      projectsData: [
        {
          category: "Literary Hub Full Stack",
          description: "A platform inspired by Athena, the goddess of wisdom. It works as a personal literary hub where readers track their progress, discover new titles via API, and unlock achievements. The project combats literary disorganization with a gamified dashboard.",
          objective: "Stimulate the reading habit through visual organization and gamification. The focus was to create a complete system where users manage 'virtual bookshelves' (Reading, Want to Read, Read) and visualize reading statistics.",
          challenges: "Integration between Frontend (Vercel) and Backend (Render) created complex CORS and deployment challenges, resolved with proxy configurations and secure headers. Additionally, implementing JWT authentication and gamified 'Badge' logic required advanced state management."
        },
        {
          category: "Interactive Educational Platform",
          description: "Educational platform created from scratch, combining animations, playful design, and interactive games to make learning more fun. Includes three complete games — memory, math, and history quiz — with progression, leaderboards, mascots, and real-time feedback. Interface inspired by scrapbooks and fully responsive.",
          objective: "Transform educational content into playful and intuitive experiences, accessible for children in the literacy stage.",
          challenges: "Create an intuitive interface for children who don't yet read fluently, implement game logic in JavaScript, and ensure responsiveness with many visual elements and animations."
        },
        {
          category: "Full Stack E-commerce",
          description: "Online store for the Aderia cosmetics brand. Smart selection with filters by skin type, price, and category. Functional shopping cart, Stripe integration for payments, and admin dashboard to manage products. Modern design focused on conversion.",
          objective: "Create a smooth and intuitive shopping experience, allowing customers to find products easily and complete purchases securely.",
          challenges: "Implement Stripe payment system, manage complex cart state, optimize product image performance, and create a complete admin panel."
        },
        {
          category: "Financial Management App",
          description: "Application for personal finance control. Allows adding income and expenses, categorizing spending, viewing financial evolution graphs, and receiving insights into consumption habits. Intuitive design with dark mode.",
          objective: "Help users better understand their financial habits and make more conscious spending decisions.",
          challenges: "Implement dynamic graphs, ensure data persistence, create efficient filters, and optimize statistics calculation."
        }
      ]
    },
    about: {
      slide1: {
        title: "About Me",
        bio: "Hi! I'm Alice Barbosa, a developer passionate about creating innovative and accessible digital solutions. With a background in Computer Engineering and full stack development experience, I combine technical creativity with user-centered design."
      },
      slide2: {
        title: "Technical Skills",
        frontend: "Front-end",
        backend: "Back-end",
        data: "Data"
      },
      slide3: {
        title: "Soft Skills",
        collaboration: "Collaboration",
        problemSolving: "Problem Solving",
        adaptability: "Adaptability",
        creativity: "Creativity",
        communication: "Communication",
        empathy: "Empathy"
      },
      slide4: {
        title: "Interests & Freelance",
        interests: "I'm always interested in",
        freelance: "I'm available for"
      }
    },
    college: {
      title: "Academic Project – EcoArduino",
      role: "Volunteer • 07/2024 – Present",
      projectAbout: "About the Project",
      projectDesc1: "EcoArduino is an academic initiative that combines technology, sustainability, and the reuse of electronic components.",
      projectDesc2: "The goal is to create functional devices using recycled parts, demonstrating that innovation and environmental awareness can go hand in hand.",
      myContributions: "My Contributions",
      contrib1: "Web: Creation of the official website with interactive tutorials.",
      contrib2: "Prototyping: Assembly and testing of sensors with Arduino.",
      contrib3: "Documentation: Production of guides for replicability.",
      videoTitle: "Prototype Demo",
      siteLink: "The Website",
      siteDesc: "ecoarduino.netlify.app",
      behind: "Behind the Scenes",
      label1: "Assembly",
      label2: "Testing",
      label3: "Studies",
      label4: "Prototype"
    },
    contact: {
      title: "Let's Talk?",
      message: "I'm always open to new opportunities, partnerships, and conversations about technology, web development, UI/UX, and creative projects.",
      message2: "I'll be very happy to receive your message! Whether for a project or just to exchange ideas.",
      formTitle: "Send me a message",
      email: "alicebarbosadev@gmail.com",
      linkedin: "/alicebarbosa0101",
      github: "/alicebsrz",
      whatsapp: "WhatsApp (Start Chat)",
      formName: "Your Name",
      formNamePlaceholder: "Ex: Alice Barbosa",
      formEmail: "Your Email",
      formEmailPlaceholder: "example@email.com",
      formMessage: "Your Message",
      formMessagePlaceholder: "How can I help you today?",
      submitBtn: "Send message"
    }
  }
};
