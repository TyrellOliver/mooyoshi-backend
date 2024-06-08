DROP DATABASE IF EXISTS mooyoshi_app;

CREATE DATABASE mooyoshi_app;

\c mooyoshi_app;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    category_name TEXT NOT NULL
);

CREATE TABLE locations (
    location_id SERIAL PRIMARY KEY,
    location_name TEXT NOT NULL,
    location_description TEXT,
    location_address TEXT,
    location_latitude DECIMAL(12, 10),
    location_longitude DECIMAL(12, 10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE location_categories (
    location_id INTEGER REFERENCES locations(location_id),
    category_id INTEGER REFERENCES categories(category_id),
    PRIMARY KEY (location_id, category_id)
);

CREATE TABLE events (
    event_id SERIAL PRIMARY KEY,
    event_name TEXT NOT NULL,
    event_description TEXT NOT NULL,
    event_address TEXT,
    event_latitude DECIMAL(12, 10),
    event_longitude DECIMAL(12, 10),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE favorites (
    favorite_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    location_id INTEGER REFERENCES locations(location_id),
    event_id INTEGER REFERENCES events(event_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);