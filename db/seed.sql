CREATE TABLE helo_users (user_id SERIAL PRIMARY KEY, username VARCHAR(50) NOT NULL, password VARCHAR(200) NOT NULL, profile_pic TEXT);

CREATE TABLE helo_posts (post_id SERIAL PRIMARY KEY, title VARCHAR(45) NOT NULL, content TEXT, img TEXT, author_id INT REFERENCES helo_users(user_id), date_created TIMESTAMP);