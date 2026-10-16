export type Project = {
  title: string
  description: string
  longDescription: string
  tag: string
  techs: string[]
  link: string
  github: string
  color: string
  accent: string
  number: string
  image?: string
}

export const projects: Project[] = [
  {
    title: 'Projeto 1',
    description: 'Automação Financeira com IA Integrada ao WhatsApp para Gestão de Pagamentos.',
    longDescription: `Desenvolvimento de um fluxo de automação voltado para parte financeira, integrando ferramentas de IA com planilhas para otimizar 
    o controle de pagamentos. A solução realiza a leitura e análise automática de comprovantes, extraindo informações relevantes e atualizando os dados 
    diretamente em uma planilha, garantindo maior precisão e agilidade no processo.

    Todo o fluxo é operado via WhatsApp, permitindo o envio de comprovantes e o acompanhamento de pagamentos pendentes sem a necessidade de acessar manualmente 
    o Excel. A automação também contribui para a organização financeira, reduzindo erros operacionais, eliminando tarefas repetitivas e oferecendo maior 
    visibilidade sobre o status dos pagamentos.`,
    tag: 'Automação',
    techs: ['Python', 'N8N', 'Docker', 'Excel', 'API WhatsApp'],
    link: '#',
    github: '#',
    color: 'rgba(99, 179, 237, 0.08)',
    accent: 'rgba(99, 179, 237, 0.6)',
    number: '01',
    image: import.meta.env.BASE_URL + 'projeto1.png',
  },
  {
    title: 'Projeto 2',
    description: 'Sistema Inteligente de Gestão e Automação de Uso de Máquinas. Redução de 70% no tempo de tarefas.',
    longDescription: `Projeto focado na otimização da gestão e operação de máquinas, unindo funcionalidades de agenda com automações inteligentes. 
    A aplicação permite o planejamento e controle do uso das máquinas, organizando horários, registros de utilização e necessidades de manutenção 
    de forma centralizada. O frontend foi construído com React e a comunicação é feita via WebSocket para atualizações em tempo real.`,
    tag: 'Automação Empresarial',
    techs: ['Webhook Microsoft Teams', 'Python', 'API Google Calendar', 'Interface web'],
    link: '#',
    github: '#',
    color: 'rgba(241, 190, 108, 0.08)',
    accent: 'rgba(241, 190, 108, 0.6)',
    number: '02',
    image: import.meta.env.BASE_URL + 'projeto2.png',
  },
  {
    title: 'Projeto 3',
    description: 'CentrauPet. Plataforma de adoção de animais conectando ONGs e adotantes com perfis detalhados e gestão de pedidos.',
    longDescription: `Este projeto nasceu para centralizar e facilitar o processo de adoção de animais, conectando quem quer dar um lar a quem precisa de um. 
    A plataforma permite que tanto ONGs quanto pessoas físicas cadastrem perfis detalhados de animais, gerenciando pedidos de adoção de forma organizada.`,
    tag: 'Web',
    techs: ['React', 'TypeScript', 'PostgreSQL', 'Styled Components', 'Docker'],
    link: 'https://centraupet.com.br',
    github: '#',
    color: 'rgba(167, 139, 250, 0.08)',
    accent: 'rgba(167, 139, 250, 0.6)',
    number: '03',
    image: import.meta.env.BASE_URL + 'projeto3.png',
  },
]

export const languages = [
  { name: 'TypeScript', level: 65, color: '#3178c6' },
  { name: 'JavaScript', level: 70, color: '#f7df1e' },
  { name: 'Java', level: 80, color: '#f89820' },
  { name: 'Python', level: 75, color: '#3776ab' },
  { name: 'SQL', level: 100, color: '#336791' },
  { name: 'HTML & CSS', level: 95, color: '#e34f26' },
  { name: 'N8N', level: 95, color: '#D39826' },
]

export const experiences = [
  {
    role: 'Engenheiro de Software',
    company: 'ECOA PUC-Rio - Petrobras',
    period: '2026 — Presente',
    type: 'Estágio',
    description: 'Desenvolvimento de aplicações web, Automações de processos internos e integração de sistemas. Participação em projetos de inovação tecnológica para otimização de operações.',
    techs: ['React - TypeScript', 'N8N', 'Python'],
  },
  {
    role: 'Educador de Informática',
    company: 'SENAI',
    period: '2025 — 2025',
    type: 'PJ',
    description: 'Ministração de aulas práticas e teóricas sobre informática, desenvolvimento de material didático e suporte aos alunos em projetos de tecnologia.',
    techs: ['Educação', 'Suporte Técnico', 'Informática Básica'],
  },
  {
    role: 'Auxiliar Administrativo',
    company: 'Omega Bateria',
    period: '2024 — 2025',
    type: 'CLT',
    description: 'Suporte no sistema interno para gestão de estoque e vendas. Análise de dados e geração de relatórios para otimização de processos comerciais.',
    techs: ['SQL', 'Excel'],
  },
]

export const email = 'gabrielhb2020@gmail.com'
export const github = 'https://github.com/GabrielH-Full'
export const linkedin = 'https://linkedin.com/in/gabriel-henrique-da-silva-barboza-13931225b/'

