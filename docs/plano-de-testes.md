# Plano de Testes (Resumo)

## 1. Estratégia de Testes
O projeto foca no MVP, portanto a estratégia inicial cobre testes manuais orientados ao fluxo crítico do usuário e resiliência da interface.

## 2. Tipos de Testes Previstos
- **Testes Manuais de Interface (UI):** 
  - Verificação de fidelidade ao Figma (cores, tipografia, espaçamentos).
  - Teste de responsividade utilizando DevTools do navegador (Simulação de iPhone 14/15).
  - Validação da navegação entre telas via React Router.
- **Testes de Resiliência (Fallback):**
  - Desligar a API Spring Boot.
  - Acessar a página `/roteiros` no React.
  - **Resultado Esperado:** O Front-end não deve quebrar e deve apresentar os dados do mock nativo.
- **Testes de API (Postman/Swagger):**
  - Acessar `GET /api/places` e verificar se a estrutura do JSON corresponde ao DTO.
  - Verificar se a ordenação/dados são provenientes das migrações do Flyway (`V3__Insert_mock_data.sql`).

## 3. Testes Futuros (Pós-MVP)
- Testes Unitários Java com JUnit 5 e Mockito para as classes `Service`.
- Testes de Componentes React com Vitest e React Testing Library.
- Testes de Acessibilidade Automatizados com `axe-core`.
