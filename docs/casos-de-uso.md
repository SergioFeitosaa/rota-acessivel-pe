# Casos de Uso

## 1. Atores
- **Usuário Visitante:** Pessoa que acessa a plataforma em busca de informações de roteiros acessíveis.

## 2. Descrição dos Casos de Uso

### UC01 - Filtrar Roteiros por Necessidades
**Ator Principal:** Usuário Visitante
**Fluxo Principal:**
1. O usuário acessa a tela de necessidades.
2. O sistema exibe categorias (Mobilidade, Visão, Audição, etc.).
3. O usuário seleciona uma ou mais necessidades e clica em "Continuar".
4. O sistema armazena a seleção temporariamente no contexto da sessão.

### UC02 - Filtrar Roteiros por Preferências
**Ator Principal:** Usuário Visitante
**Fluxo Principal:**
1. Após as necessidades, o usuário acessa a tela de preferências.
2. O usuário seleciona características desejadas no roteiro (ex.: Trajetos mais curtos).
3. O usuário clica em "Ver roteiros".
4. O sistema processa os filtros e direciona para a listagem.

### UC03 - Visualizar e Interagir com Roteiros
**Ator Principal:** Usuário Visitante
**Fluxo Principal:**
1. O sistema apresenta o roteiro mais compatível em formato de "Card".
2. O usuário pode visualizar a descrição, alertas de acesso (ex.: "Calçamento de pedra"), distância e tags.
3. O usuário pode interagir com os botões "Curti" ou "Não curti" (deslizar o card).
4. O sistema exibe o próximo roteiro da lista.
