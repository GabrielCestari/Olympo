create database olympo;
use olympo;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
sobrenome varchar(45),
email varchar(50),
senha varchar(45)
);