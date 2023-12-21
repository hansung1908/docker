drop table if exists product_tb;

CREATE TABLE product_tb (
    id int auto_increment primary key,
    name varchar(50),
    price INT
)   ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

insert into product_tb (name, price) values ('banana', 1000);
insert into product_tb (name, price) values ('apple', 2000);
insert into product_tb (name, price) values ('melon', 3000);