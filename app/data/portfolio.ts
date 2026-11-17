/**
 * Todo o conteúdo do portfólio mora aqui — os componentes só leem deste arquivo.
 *
 * Fontes: perfil do LinkedIn (PDF), currículos e repositórios públicos do GitHub.
 * Trechos ainda em "lorem ipsum" são os que não apareciam em nenhuma fonte.
 */

export interface Social {
  label: string;
  href: string;
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  url?: string;
  summary: string;
  highlights: string[];
  stack: string[];
  /** Cargos anteriores na mesma empresa (mais recente primeiro) */
  progression?: { role: string; period: string }[];
}

export interface Project {
  title: string;
  kind: string;
  summary: string;
  /** Campos do estudo de caso — opcionais; só aparecem no card se preenchidos */
  problem?: string;
  role?: string;
  result?: string;
  stack: string[];
  repo?: string;
  demo?: string;
  /** Destaque ocupa o bloco maior do bento grid */
  featured?: boolean;
}

export interface StackGroup {
  label: string;
  items: { name: string; icon: string }[];
}

export const site = {
  name: "Felipe Rodrigues",
  role: "Software Engineer",
  /** Frases que o hero alterna com o efeito de "scramble" */
  taglines: [
    "Software Engineer",
    "APIs REST & microsserviços",
    "Mensageria · Cloud · IA",
  ],
  title: "Felipe Rodrigues | Software Engineer",
  description:
    "Engenheiro de Software com 3+ anos construindo APIs REST, microsserviços e plataformas financeiras em produção. PHP/Laravel, NestJS, Java/Spring, C#/.NET, AWS e Azure.",
  avatar: "https://github.com/FelipeRodrigues05.png",
  location: "São Paulo, Brasil",
  coords: "lat −23.55 / lng −46.63",
  timezone: "America/Sao_Paulo",
  available: true,
  availability: "Aberto a novas oportunidades",
  email: "feliperodrigues-dev@outlook.com",
  resume: "/curriculum.pdf", // arquivo em public/ — deixe "" para esconder o botão
};

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/FelipeRodrigues05", icon: "ph:github-logo" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/felipe-barbosa-rodrigues/", icon: "ph:linkedin-logo" },
  { label: "E-mail", href: `mailto:${site.email}`, icon: "ph:envelope-simple" },
];

export const about = {
  heading: "Back-ends que aguentam produção — e o que vem depois dela.",
  /** Cada palavra "acende" conforme o scroll */
  text: "Sou Engenheiro de Software com mais de 3 anos construindo APIs REST, microsserviços e plataformas financeiras em produção — incluindo 2 anos e meio numa fintech com uma plataforma SaaS white-label multitenant usada por 10 clientes. Evoluo módulos financeiros de ERP em PHP e Laravel, crio serviços em NestJS e .NET, e estudo arquitetura distribuída com Java, RabbitMQ e Kafka no NexWallet. Investigo incidentes até a causa raiz e uso agentes de IA como Claude Code e Codex no dia a dia para gerar e revisar código.",
  facts: [
    { value: "3+", label: "anos em produção" },
    { value: "20+", label: "incidentes resolvidos" },
    { value: "2s→300ms", label: "tempo de carregamento" },
    { value: "10", label: "clientes na plataforma SaaS" },
  ],
  languages: ["Português — nativo", "Inglês — C1", "Espanhol — básico", "Alemão — básico"],
  education: [
    { course: "Bacharelado em Engenharia de Software", school: "Anhanguera", period: "2026 — 2030" },
    { course: "Tecnólogo em Tecnologia da Informação", school: "Centro Universitário FAM", period: "2024 — 2026" },
    { course: "Técnico em Tecnologia da Informação", school: "CEAP", period: "2020 — 2022" },
  ],
};

export const experiences: Experience[] = [
  {
    company: "Loca9Motos",
    role: "Engenheiro de Software",
    period: "jul 2026 — atual",
    location: "São Paulo, BR",
    summary:
      "Locadora de motocicletas que depende de sistemas de gestão, rastreamento e integrações. Atuo na evolução dessas aplicações, na modernização de código legado e na organização do ambiente em Azure.",
    highlights: [
      "Arquitetura de uma fábrica de software interna com ~15 agentes de IA, com orquestrador que persiste estado, retries e auditoria em MongoDB",
      "Full stack com Angular 20 + TypeScript e C#/.NET (Azure Functions), SQL Server, Entity Framework Core e filas no Azure",
      "Sanitização dos dados enviados aos modelos e aprovação humana obrigatória antes de cada deploy",
      "Mapeamento e documentação da arquitetura: TrackSys, apps mobile e a plataforma de rastreamento iTrackSense",
    ],
    stack: ["C#", ".NET", "Angular", "TypeScript", "NestJS", "Azure", "SQL Server", "MongoDB", "Docker"],
  },
  {
    company: "Player2",
    role: "Engenheiro de Software",
    period: "mai 2026 — out 2026",
    location: "São Paulo, BR",
    summary:
      "Empresa de Trade Marketing com ERP próprio, onde vivem as rotinas financeiras e as integrações que sustentam a operação.",
    highlights: [
      "Responsável pelos módulos financeiros: contas a pagar e receber, fluxo de caixa, conciliações bancárias e balancetes",
      "Carregamento de páginas de 2 s para 300 ms corrigindo consultas N+1 no MariaDB e usando Redis como cache",
      "Fechamento mensal automatizado com relatórios e e-mails — 3 a 5 dias de trabalho manual devolvidos por ciclo",
      "Pipelines de CI no GitHub Actions (Pint + PHPStan), ambiente Docker e todos os deploys da aplicação",
    ],
    stack: ["PHP", "Laravel", "Next.js", "React", "TypeScript", "Tailwind CSS", "MariaDB", "Redis", "Docker"],
  },
  {
    company: "Impulso+",
    role: "Engenheiro de Software",
    period: "mar 2026 — mai 2026",
    location: "São Paulo, BR",
    summary:
      "Healthtech que transforma dados de sono, recuperação, estresse e bem-estar em informação acionável para gestão.",
    highlights: [
      "Integração de SDKs de saúde e biometria: ShenAI (reconhecimento facial) e FitXpress/3DLook (bioimpedância)",
      "Serviços back-end em NestJS + PostgreSQL (Prisma) com Clean Architecture para o app mobile",
      "App em Flutter e integração do SDK da MoEngage para engajamento",
      "Testes unitários com Jest, end-to-end com Cypress e CI no GitHub Actions",
    ],
    stack: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Flutter", "Jest", "Cypress"],
  },
  {
    company: "PraJá — Grupo ENTRE",
    role: "Analista de Desenvolvimento Jr.",
    period: "abr 2023 — nov 2025",
    location: "São Paulo, BR",
    url: "https://praja.net",
    summary:
      "Fintech de antecipação de recebíveis com plataforma SaaS white-label multitenant, consumida por 10 empresas clientes.",
    highlights: [
      "Mais de 20 incidentes em produção resolvidos — em geral de 20 min a 2 h — com CloudWatch, logs e análise de causa raiz",
      "Webhooks de pagamento com o Itaú, microsserviço de PDFs e módulo de invoices e extratos no AWS S3",
      "Performance com ajuste de SQL, cache e Laravel Octane; processamento assíncrono com filas no AWS SQS",
      "APIs protegidas com AWS API Gateway, deploys em ECS/Lambda/EC2/RDS e Nginx como proxy reverso",
    ],
    stack: ["PHP", "Laravel", "MySQL", "AWS", "Nginx", "GitHub Actions"],
    progression: [
      { role: "Assistente de Desenvolvimento", period: "set 2024 — set 2025" },
      { role: "Estagiário", period: "abr 2023 — ago 2024" },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "NexWallet",
    kind: "Banco digital · back-end",
    summary:
      "Back-end de um banco digital completo: PIX, cartões, investimentos, empréstimos com Tabela Price e compliance KYC/AML simulando BACEN/COAF.",
    problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    role: "Arquitetura e desenvolvimento do back-end (projeto pessoal)",
    result: "~90% de cobertura de testes unitários; migração para microsserviços com RabbitMQ (DLQ, retry, idempotência) e Kafka em andamento.",
    stack: ["Java 21", "Spring Boot", "PostgreSQL", "RabbitMQ", "Kafka", "Keycloak", "Prometheus", "Grafana"],
    repo: "https://github.com/FelipeRodrigues05/nexwallet-backend",
    featured: true,
  },
  {
    title: "Canopy",
    kind: "Processamento distribuído",
    summary:
      "Processador distribuído de apostas (BET/WIN/LOSS/REFUND/ROLLBACK) com ledger imutável e idempotência persistente.",
    problem: "Garantir consistência com múltiplas instâncias processando os mesmos eventos.",
    role: "Projeto pessoal",
    result: "Inbox/outbox transacionais e correção com múltiplas instâncias.",
    stack: ["Bun", "NestJS", "PostgreSQL", "AWS SQS"],
    repo: "https://github.com/FelipeRodrigues05/canopy",
  },
  {
    title: "Pyro",
    kind: "API · Go",
    summary: "API de notas com busca full-text e multi-tenant (pessoal e equipe).",
    role: "Projeto pessoal",
    stack: ["Go", "PostgreSQL", "Redis"],
    repo: "https://github.com/FelipeRodrigues05/pyro-backend",
  },
  {
    title: "Personal Finance",
    kind: "App · finanças pessoais",
    summary: "Aplicação de finanças pessoais construída com PHP e Filament.",
    role: "Projeto pessoal",
    stack: ["PHP", "Laravel", "Filament"],
    repo: "https://github.com/FelipeRodrigues05/personal-finance-app",
  },
  {
    title: "Simplified PicPay",
    kind: "Desafio · pagamentos",
    summary: "Versão simplificada do PicPay: transferências entre usuários e lojistas com Spring Boot.",
    role: "Projeto pessoal",
    stack: ["Java", "Spring Boot"],
    repo: "https://github.com/FelipeRodrigues05/simplified-picpay-java",
  },
];

export const stacks: StackGroup[] = [
  {
    label: "Back-end",
    items: [
      { name: "PHP", icon: "skill-icons:php-dark" },
      { name: "Laravel", icon: "skill-icons:laravel-dark" },
      { name: "Node.js", icon: "skill-icons:nodejs-dark" },
      { name: "NestJS", icon: "skill-icons:nestjs-dark" },
      { name: "Java", icon: "skill-icons:java-dark" },
      { name: "Spring", icon: "skill-icons:spring-dark" },
      { name: "C#", icon: "skill-icons:cs" },
      { name: ".NET", icon: "skill-icons:dotnet" },
    ],
  },
  {
    label: "Front-end & mobile",
    items: [
      { name: "TypeScript", icon: "skill-icons:typescript" },
      { name: "React", icon: "skill-icons:react-dark" },
      { name: "Next.js", icon: "skill-icons:nextjs-dark" },
      { name: "Angular", icon: "skill-icons:angular-dark" },
      { name: "Tailwind CSS", icon: "skill-icons:tailwindcss-dark" },
      { name: "Flutter", icon: "skill-icons:flutter-dark" },
    ],
  },
  {
    label: "Dados & mensageria",
    items: [
      { name: "PostgreSQL", icon: "skill-icons:postgresql-dark" },
      { name: "MySQL", icon: "skill-icons:mysql-dark" },
      { name: "MongoDB", icon: "skill-icons:mongodb" },
      { name: "Redis", icon: "skill-icons:redis-dark" },
      { name: "RabbitMQ", icon: "skill-icons:rabbitmq-dark" },
      { name: "Kafka", icon: "skill-icons:kafka" },
    ],
  },
  {
    label: "Cloud, DevOps & observabilidade",
    items: [
      { name: "AWS", icon: "skill-icons:aws-dark" },
      { name: "Azure", icon: "skill-icons:azure-dark" },
      { name: "Docker", icon: "skill-icons:docker" },
      { name: "GitHub Actions", icon: "skill-icons:githubactions-dark" },
      { name: "Nginx", icon: "skill-icons:nginx" },
      { name: "Linux", icon: "skill-icons:linux-dark" },
      { name: "Prometheus", icon: "skill-icons:prometheus" },
      { name: "Grafana", icon: "skill-icons:grafana-dark" },
    ],
  },
];
