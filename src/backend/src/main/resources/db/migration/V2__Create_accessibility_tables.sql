CREATE TABLE accessibility_features (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    icon VARCHAR(50)
);

CREATE TABLE place_accessibility_info (
    id SERIAL PRIMARY KEY,
    place_id INTEGER NOT NULL REFERENCES places(id),
    feature_id INTEGER NOT NULL REFERENCES accessibility_features(id),
    status VARCHAR(50) NOT NULL, -- e.g., AVAILABLE, PARTIAL, UNAVAILABLE
    source VARCHAR(255) NOT NULL,
    date_verified DATE NOT NULL,
    comments TEXT
);

-- Add some extra columns to places
ALTER TABLE places ADD COLUMN image_url TEXT;
ALTER TABLE places ADD COLUMN difficulty VARCHAR(50);
ALTER TABLE places ADD COLUMN duration_minutes INTEGER;
ALTER TABLE places ADD COLUMN distance_km DOUBLE PRECISION;

