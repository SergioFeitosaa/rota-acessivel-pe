# Arquitetura do Sistema

## 1. Visão Geral
A plataforma Rota Acessível PE adota uma arquitetura monolítica separada entre Front-end (SPA) e Back-end (API REST). Esta abordagem foi escolhida para manter a simplicidade necessária de um MVP acadêmico, sem abrir mão de boas práticas de separação de responsabilidades.

## 2. Tecnologias
- **Front-end:** React, TypeScript, Vite, Tailwind CSS.
- **Back-end:** Java 21, Spring Boot 3.3 (Web, Data JPA).
- **Banco de Dados:** H2 Database (em memória, facilitando testes e apresentações locais). PostgreSQL planejado para produção.
- **Ferramentas:** Flyway para migrações, Maven para build, Git/GitHub para controle de versão.

## 3. Padrões Adotados
- **Camadas Back-end (MVC / N-Tier):**
  - *Controllers:* Endpoints REST (`@RestController`).
  - *Services:* Lógica de negócio e mapeamento para DTOs (`@Service`).
  - *Repositories:* Acesso a dados (`@Repository` estendendo `JpaRepository`).
  - *Domain/Entities:* Classes mapeadas para o banco de dados.
- **Padrão DTO (Data Transfer Object):** Desacoplamento entre os modelos internos de banco (Entities) e os dados enviados para o front-end, protegendo informações sensíveis e formatando retornos.
- **Mock/Fallback no Front-end:** Para resiliência em apresentações, o Front-end React tenta consumir a API Spring. Em caso de falha de conexão, uma base de mock local é acionada automaticamente.
