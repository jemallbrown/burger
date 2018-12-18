-- 3. Still in the `db` folder, create a `seeds.sql` file. 
-- In this file, write insert queries to populate the `burgers` table with at least three entries.
USE burgers_db;

INSERT INTO burgers (burger_name,devoured) VALUES ('Big Mac', false);
INSERT INTO burgers (burger_name,devoured) VALUES ('Whopper', false);
INSERT INTO burgers (burger_name,devoured) VALUES ('Bacon Double Cheese', false);
INSERT INTO burgers (burger_name,devoured) VALUES ('Turkey Burger', false);
INSERT INTO burgers (burger_name,devoured) VALUES ('Veggie Burger', false);
INSERT INTO burgers (burger_name,devoured) VALUES ('California Burger', false);
INSERT INTO burgers (burger_name,devoured) VALUES ('Asiago Chedder Burger', true);
INSERT INTO burgers (burger_name,devoured) VALUES ('Stagehouse Supreme', true);
INSERT INTO burgers (burger_name,devoured) VALUES ('Hawaiian Burger', true);
