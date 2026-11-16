INSERT INTO accessibility_features (id, name, description, icon) VALUES
(1, 'Mobilidade', 'Evitar escadas, rampas, facilitar a circulação', 'wheelchair'),
(2, 'Visão', 'Piso tátil, áudio, orientação e contraste', 'eye'),
(3, 'Audição', 'Libras, legendas e conteúdo visual', 'ear'),
(4, 'Sensorial', 'Menos ruído, lugares tranquilos e menos estímulos', 'brain'),
(5, 'Banheiro acessível', 'Banheiro adaptado no local ou percurso', 'restroom');

INSERT INTO places (id, name, description, address, latitude, longitude, image_url, difficulty, duration_minutes, distance_km) VALUES
(1, 'Recife Antigo - Rota Cultural', 'História, arquitetura e cultura, com acessibilidade.', 'Rua do Bom Jesus, Recife - PE', -8.0628, -34.8711, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Rua_do_Bom_Jesus_-_Recife.jpg/800px-Rua_do_Bom_Jesus_-_Recife.jpg', 'Fácil', 150, 3.2),
(2, 'Centro Histórico de Olinda', 'Ladeiras, igrejas e casarios coloniais.', 'Alto da Sé, Olinda - PE', -8.0135, -34.8485, 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Olinda_panorama.jpg/800px-Olinda_panorama.jpg', 'Difícil', 240, 5.0);

INSERT INTO place_accessibility_info (place_id, feature_id, status, source, date_verified, comments) VALUES
(1, 1, 'PARTIAL', 'Prefeitura do Recife', '2023-10-01', 'Calçamento de pedra em parte da Rua do Bom Jesus.'),
(1, 5, 'AVAILABLE', 'Usuário verificado', '2023-11-15', 'Banheiro acessível no Paço do Frevo.'),
(2, 1, 'UNAVAILABLE', 'Equipe Rota Acessível', '2023-10-10', 'Muitas ladeiras e calçamento irregular dificultam a mobilidade.'),
(2, 2, 'PARTIAL', 'Prefeitura de Olinda', '2023-09-20', 'Algumas placas em Braille, mas sem piso tátil contínuo.');

-- Update sequences
SELECT setval('accessibility_features_id_seq', 5);
SELECT setval('places_id_seq', 2);
