CREATE TABLE userss(

    id SERIAL PRIMARY KEY,
    name VARCHAR(225) NOT NULL, 
    email VARCHAR(225) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

INSERT INTO users (name, email) 
    VALUES ('nico gonzalez', 'nico@gmail.com'),  ('Cami', 'cami@gmail.com');

SELECT * FROM users;