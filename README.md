# Rota Acessível PE

**Tema:** Territórios Acessíveis — Patrimônio, Mobilidade e Experiência Digital.

A plataforma **Rota Acessível PE** tem como objetivo fornecer informações qualificadas sobre locais turísticos em Pernambuco, focando inicialmente no **Recife Antigo** e no **Centro Histórico de Olinda**. O diferencial da aplicação é mapear não apenas as informações históricas, mas as **condições de acessibilidade**, trazendo rastreabilidade sobre a fonte e a verificação dessas informações.

## 🎯 Objetivos
- Descobrir lugares históricos de Recife Antigo e Olinda.
- Filtrar locais por recursos de acessibilidade (Mobilidade, Visão, Audição, etc).
- Fornecer autonomia e confiabilidade para o planejamento de visitas de pessoas com necessidades variadas.

## 🚀 Funcionalidades Implementadas (MVP)
- ✅ Interface Front-end altamente fiel ao protótipo Figma.
- ✅ Navegação completa: Tela Inicial, Seleção de Necessidades, Preferências e Listagem interativa de roteiros.
- ✅ Arquitetura Back-end estruturada em Java 21 + Spring Boot 3.3.
- ✅ Modelagem de Dados Relacional e migrações Flyway.
- ✅ Integração entre interface e dados com fallback inteligente.

## 🛠 Tecnologias Utilizadas
**Back-end:**
- Java 21 LTS
- Spring Boot 3.3 (Web, Data JPA, Validation)
- H2 Database (In-memory - facilitador do MVP)
- Flyway (Migrações versionadas)
- Padrão arquitetural MVC/DTO (Controllers, Services, Repositories)

**Front-end:**
- React + TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React (Ícones)

## 📁 Estrutura do Repositório
Consulte a pasta `docs/` para a documentação acadêmica do projeto.
- `docs/arquitetura.md`
- `docs/api.md`
- `docs/modelo-de-dados.md`
- ...

## 💻 Como executar o projeto localmente

### Pré-requisitos
- Node.js (v18+)
- Java JDK 21
- Maven

### 1. Back-end (Spring Boot API)
1. Navegue até a pasta do back-end: `cd src/backend`
2. Execute o projeto usando o Maven Wrapper ou Maven local:
   `mvn spring-boot:run`
3. A API estará disponível em `http://localhost:8080/api/places`.
4. O banco de dados H2 pode ser acessado em `http://localhost:8080/h2-console`.

### 2. Front-end (React SPA)
1. Navegue até a pasta do front-end: `cd src/frontend`
2. Instale as dependências: `npm install`
3. Inicie o servidor de desenvolvimento: `npm run dev`
4. Acesse a aplicação no navegador via `http://localhost:5173`.

> **Nota para a Demonstração:** A interface front-end foi desenvolvida com resiliência. Caso a API Java não esteja em execução no momento do *pitch*, o front-end detectará e utilizará dados de *mock* nativos para garantir que a apresentação não sofra interrupções.

## 🌿 Fluxo de Branches (Git Flow)
Seguimos o padrão:
- `main`: versão estável.
- `develop`: integração do desenvolvimento.
- `feature/*`: desenvolvimento de novas funcionalidades.
- `fix/*`: correções de bugs.
- `docs/*`: criação e manutenção de documentação.
