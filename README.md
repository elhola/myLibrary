# myLibrary

link to Postman testing: https://documenter.getpostman.com/view/28154196/2s9XxyQtJt

![library](https://github.com/elhola/myLibrary/assets/25703908/acb28729-e47e-4d38-bf89-c0864d72115a)

Table creation notes:

CREATE TABLE mylibrary."Book" ( book_id SERIAL PRIMARY KEY, title VARCHAR(255) NOT NULL, author_id INT REFERENCES mylibrary."Author"(author_id), genre VARCHAR(255), created_at TIMESTAMPTZ DEFAULT NOW(), updated_at TIMESTAMPTZ DEFAULT NOW());

CREATE TABLE mylibrary."Author" (author_id SERIAL PRIMARY KEY,name VARCHAR(255) NOT NULL,created_at TIMESTAMPTZ DEFAULT NOW(),updated_at TIMESTAMPTZ DEFAULT NOW());

CREATE TABLE mylibrary."Issuance" (issue_id SERIAL PRIMARY KEY,book_id INT REFERENCES mylibrary."Book"(book_id),reader_id INT REFERENCES mylibrary."Readers"(reader_id),issue_date DATE,return_date DATE,created_at TIMESTAMPTZ DEFAULT NOW(),updated_at TIMESTAMPTZ DEFAULT NOW());

CREATE TABLE mylibrary."Readers" (reader_id SERIAL PRIMARY KEY,name VARCHAR(255) NOT NULL,address VARCHAR(255),created_at TIMESTAMPTZ DEFAULT NOW(),updated_at TIMESTAMPTZ DEFAULT NOW());
