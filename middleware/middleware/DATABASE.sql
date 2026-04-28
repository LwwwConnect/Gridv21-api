-- DATABASE.sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255)
);

CREATE TABLE permits (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  details TEXT
);

-- Add more tables as needed
