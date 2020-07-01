CREATE DATABASE social;

USE social;

CREATE TABLE posts(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE posts;

CREATE TABLE IF NOT EXISTS users (
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(60) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
  );

ALTER TABLE posts ADD COLUMN ref_user INT NOT NULL;  

ALTER TABLE posts ADD CONSTRAINT id_fk_user FOREIGN KEY(ref_user) REFERENCES users(id);

alter table posts modify column created_at timestamp default current_timestamp on update current_timestamp;