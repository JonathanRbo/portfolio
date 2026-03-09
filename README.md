# portfolio
Portfólio pessoal desenvolvido para apresentar meus projetos, habilidades e experiência como desenvolvedor Full Stack. O site conta com design moderno, animações suaves e é totalmente responsivo.

### Destaques

- Interface moderna com efeitos visuais impactantes
- Animações suaves e interativas
- 100% responsivo (mobile, tablet e desktop)
- Performance otimizada com lazy loading e caching
- UX/UI focado em conversão
- Integração em tempo real com a API do GitHub

## Funcionalidades

### Design e Interatividade
- **Background Animado**: Grid pattern com gradiente e partículas flutuantes
- **Efeito Glitch**: Texto com efeito glitch animado no nome principal
- **Texto Digitado**: Animação de digitação rotativa no hero section (Full Stack Developer, Designer & Video Editor, CEO of HTMX, Marketing Digital)
- **Hover Effects**: Efeitos visuais com shine e transform em todos os elementos interativos
- **Scroll Animations**: Elementos aparecem suavemente ao rolar (WOW.js + fadeIn, fadeInUp, fadeInLeft, fadeInRight)
- **Contadores Animados**: Números que contam de 0 até o valor final ao entrar no viewport

### Navegação
- **Menu Responsivo**: Menu hambúrguer em dispositivos móveis
- **Scroll Suave**: Navegação suave entre seções
- **Header Fixo**: Cabeçalho com backdrop blur que acompanha o scroll e reduz ao rolar

### Integração GitHub
- **API em tempo real**: Busca automática do número de repositórios públicos via GitHub API
- **Cache inteligente**: Armazena resultado no localStorage para evitar requisições desnecessárias
- **3 estados visuais**: Normal (com contagem), Loading (com spinner) e Em Desenvolvimento (fallback se API falhar)
- **Rate limit handling**: Tratamento de erro 403 com fallback gracioso

## Seções do Portfólio

### 1. Hero Section
- Nome com efeito glitch animado (CSS puro com pseudo-elementos)
- Texto dinâmico com efeito de digitação (JavaScript vanilla)
- Descrição profissional
- Dois CTAs: "Ver Projetos" e "Entre em Contato"

### 2. Estatísticas
Cards com contadores animados:
- **7** Anos de Experiência
- **N** Repositórios GitHub (via API, atualizado em tempo real)
- **20+** Tecnologias Dominadas

### 3. Sobre Mim
- Foto de perfil com borda cyan animada
- Biografia profissional completa
- Especialização em JavaScript, PHP e WordPress
- Atuação como designer e editor de vídeo
- CEO da HTMX, formado em Análise e Desenvolvimento de Sistemas

### 4. Experiência (Timeline)
Timeline interativa com 5 marcos:
- **2016-2018** — Início na Criação Digital (Certificações Adobe via Udemy)
- **2018-2023** — Designer Gráfico & Editor de Vídeo (Freelancer)
- **2023-2025** — Técnico em Desenvolvimento de Sistemas (ETEC Pedro Ferreira Alves)
- **2023-Presente** — CEO & Desenvolvedor Full Stack (HTMX)
- **2024-Presente** — Especialização em Marketing Digital (Google Digital Garage)

### 5. Projetos em Destaque
3 cards interativos com gradiente e ícones:
- **Artes Digitais** — Link para portfolio de design gráfico (Photoshop, Illustrator, CorelDRAW)
- **Edição de Vídeo** — Link para portfolio de edição (Reels, conteúdo para Instagram)
- **Código & Projetos** — Link para repositórios e landing pages no GitHub

### 6. Tecnologias & Ferramentas (Skills)
Badges organizados por categoria com nível de experiência:

#### Linguagens de Programação
- JavaScript (5+ anos)
- PHP (4+ anos)
- HTML5 & CSS3 (7+ anos)
- TypeScript (2+ anos)

#### Frameworks & CMS
- WordPress (Avançado)
- React (Intermediário)
- Node.js (Intermediário)
- MySQL (Intermediário)
- Git & GitHub (Avançado)

#### Design & Edição de Vídeo
- Photoshop (7+ anos)
- Illustrator (6+ anos)
- Premiere Pro (7+ anos)
- After Effects (6+ anos)
- DaVinci Resolve (4+ anos)
- CorelDraw (5+ anos)

#### IA & Produtividade
- Claude AI (Avançado)
- ChatGPT (Avançado)
- Prompt Engineering (Intermediário)
- Automação AI (Intermediário)

#### Marketing Digital & SEO
- SEO & Google (Intermediário)
- Google Ads (Básico)
- Social Media (Intermediário)
- Analytics (Intermediário)

### 7. Contato
- Links sociais com hover animado: GitHub, LinkedIn, Instagram, Email
- CTA principal: "Entre em Contato"

## Tecnologias Utilizadas

### Front-end
- **HTML5** — Estrutura semântica e acessível, meta tags SEO, Open Graph e Twitter Cards
- **CSS3** — Estilização moderna
  - CSS Grid & Flexbox
  - Animações keyframes (glitch, float, pulse, typing)
  - Transições suaves com transform3d
  - Gradientes complexos e backdrop-filter blur
  - Efeitos glassmorphism e shine
  - Media queries responsivas
- **JavaScript (Vanilla)** — Interatividade sem dependências
  - Intersection Observer API (contadores, animações lazy)
  - Fetch API (integração GitHub)
  - localStorage (cache de dados)
  - Typing effect customizado
  - Menu responsivo com toggle
  - Scroll listener para header dinâmico

### Frameworks & Bibliotecas
- **[Squeleton CSS v4](https://squeleton.dev)** — Framework CSS leve e moderno
  - Grid system de 12 colunas (c-xs, c-sm, c-md, c-lg)
  - Classes utilitárias (spacing, flexbox, display, width, height)
  - Componentes prontos (tooltips, animações)
- **WOW.js** — Animações on-scroll
- **Google Fonts** — Tipografia personalizada
  - Space Grotesk (texto principal)
  - JetBrains Mono (código/mono)
- **Squeleton Icons** — Conjunto de ícones integrados (iccon-*)

### SEO & Performance
- Meta tags completas (title, description, keywords, author)
- Open Graph para Facebook/WhatsApp
- Twitter Cards
- Preconnect para CDNs externos
- Lazy loading em imagens
- Scripts com `defer`

## Estrutura

```
portfolio/
├── index.html    # Página única com todo o conteúdo (HTML + CSS + JS inline)
├── imagens/      # Fotos e assets locais
└── README.md
```

## Paleta de Cores

| Variável          | Cor       | Uso                  |
|-------------------|-----------|----------------------|
| `--primary-blue`  | `#00d4ff` | Destaque principal (cyan) |
| `--dark-blue`     | `#0066ff` | Destaque secundário  |
| `--bg-black`      | `#0a0a0a` | Fundo principal      |
| `--bg-dark`       | `#111111` | Fundo alternativo    |
| `--bg-card`       | `#1a1a1a` | Fundo dos cards      |
| `--text-white`    | `#ffffff` | Texto principal      |
| `--text-gray`     | `#a0a0a0` | Texto secundário     |

## Navegação entre Portfolios

Este é o portfolio central que conecta os outros dois:

- **Portfolio Principal** ← você está aqui
- [Portfolio de Artes Digitais](https://jonathanrbo.github.io/Projetos-de-artes/) — design gráfico (interface inspirada no Photoshop)
- [Portfolio de Edição de Vídeo](https://jonathanrbo.github.io/Projetos-de-videos/) — vídeos e reels (interface inspirada no Premiere Pro)

## Autor

**Jonathan Ribeiro** — Desenvolvedor Full Stack, Designer & Editor de Vídeo | CEO da HTMX

- GitHub: [JonathanRbo](https://github.com/JonathanRbo)
- LinkedIn: [jonathan-ribeiro](https://www.linkedin.com/in/jonathan-ribeiro-a1a66a2b3)
- Instagram: [@jonathan.rbo](https://instagram.com/jonathan.rbo)
- Email: jribeirojonathan@gmail.com
