# Modelo de Dados

## 1. Diagrama Lógico Relacional (Descritivo)

A modelagem de dados foi desenhada para garantir a rastreabilidade da acessibilidade. 

### Tabela: `places` (Locais/Roteiros)
Armazena as informações turísticas e geográficas do local.
- `id` (PK)
- `name` (VARCHAR): Nome do local.
- `description` (TEXT): Descrição geral.
- `address` (VARCHAR): Endereço físico.
- `latitude` (DOUBLE) / `longitude` (DOUBLE): Coordenadas.
- `image_url` (TEXT): Link para imagem de capa.
- `difficulty` (VARCHAR): Nível de dificuldade (Fácil, Médio, Difícil).
- `duration_minutes` (INT): Tempo estimado da visita.
- `distance_km` (DOUBLE): Distância aproximada do roteiro.

### Tabela: `accessibility_features` (Recursos de Acessibilidade)
Dicionário de recursos mapeados pelo aplicativo.
- `id` (PK)
- `name` (VARCHAR): Nome (ex.: "Mobilidade", "Audição").
- `description` (VARCHAR): Descrição do recurso.
- `icon` (VARCHAR): Identificador do ícone na UI.

### Tabela: `place_accessibility_info` (Informação de Acessibilidade do Local)
Tabela associativa que vincula um local a um recurso, adicionando os dados cruciais de rastreabilidade.
- `id` (PK)
- `place_id` (FK -> places.id)
- `feature_id` (FK -> accessibility_features.id)
- `status` (VARCHAR): AVAILABLE, PARTIAL, UNAVAILABLE.
- `source` (VARCHAR): Quem verificou a informação (ex.: "Prefeitura do Recife", "Usuário Verificado").
- `date_verified` (DATE): Quando a informação foi confirmada.
- `comments` (TEXT): Observações (ex.: "Rampa com inclinação acima da norma").
