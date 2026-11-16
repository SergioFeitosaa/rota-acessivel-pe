# Documento de Requisitos

## 1. Requisitos Funcionais (RF)
- **RF01:** O sistema deve permitir listar os locais históricos, culturais e turísticos cadastrados.
- **RF02:** O sistema deve exibir as condições de acessibilidade de cada local, incluindo: tipo de recurso, status, data de verificação e fonte da informação.
- **RF03:** O sistema deve permitir que o usuário filtre roteiros/locais com base em suas necessidades (ex.: Mobilidade, Visão, Audição, Sensorial).
- **RF04:** O sistema deve permitir que o usuário filtre locais por preferências (ex.: trajetos curtos, pausas, ambientes tranquilos).
- **RF05:** O sistema deve exibir os detalhes completos de um local selecionado, mostrando compatibilidade com as necessidades do usuário, distância e duração estimada.

## 2. Requisitos Não Funcionais (RNF)
- **RNF01 - Acessibilidade Digital:** A interface web deve seguir recomendações WCAG 2.2 e eMAG (contraste, HTML semântico).
- **RNF02 - Usabilidade:** O sistema deve ser responsivo (Mobile First), garantindo a fidelidade visual com o protótipo no Figma.
- **RNF03 - Desempenho e Resiliência:** O front-end deve conseguir renderizar informações básicas via dados simulados (mock) caso o back-end esteja temporariamente indisponível.
- **RNF04 - Arquitetura (Back-end):** A API deve ser desenvolvida obrigatoriamente em Java 21+ com Spring Boot 3.x, expondo serviços RESTful.
- **RNF05 - Persistência:** Os dados devem ser persistidos utilizando Spring Data JPA / Hibernate, com versionamento de banco via Flyway (utilizando H2 para o MVP local).
