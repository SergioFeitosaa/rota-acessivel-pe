# Documentação da API

## 1. Base URL
Local: `http://localhost:8080/api`

## 2. Endpoints

### 2.1 Listar todos os roteiros/locais
- **Rota:** `GET /places`
- **Descrição:** Retorna uma lista resumida de todos os locais cadastrados.
- **Response (200 OK):**
```json
[
  {
    "id": 1,
    "name": "Recife Antigo - Rota Cultural",
    "description": "História, arquitetura e cultura...",
    "imageUrl": "http://...",
    "difficulty": "Fácil",
    "durationMinutes": 150,
    "distanceKm": 3.2,
    "tags": ["Mobilidade", "Banheiro acessível"]
  }
]
```

### 2.2 Detalhes de um local específico
- **Rota:** `GET /places/{id}`
- **Descrição:** Retorna o detalhamento do local, incluindo as informações detalhadas e rastreáveis de acessibilidade.
- **Response (200 OK):**
```json
{
  "id": 1,
  "name": "Recife Antigo - Rota Cultural",
  "address": "Rua do Bom Jesus...",
  "latitude": -8.0628,
  "longitude": -34.8711,
  "accessibilityInfos": [
    {
      "featureName": "Mobilidade",
      "featureIcon": "wheelchair",
      "status": "PARTIAL",
      "source": "Prefeitura do Recife",
      "dateVerified": "2023-10-01",
      "comments": "Calçamento de pedra em parte da rua."
    }
  ]
}
```
