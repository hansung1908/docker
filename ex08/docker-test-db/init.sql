CREATE TABLE user_tb (
    id int auto_increment primary key,
    name varchar(50)
)   ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

insert into user_tb (name) values ('john');
insert into user_tb (name) values ('jane');