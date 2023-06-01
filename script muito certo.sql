create database olympo;
use olympo;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
sobrenome varchar(45),
email varchar(50),
senha varchar(45)
);
select * from usuario;

insert into usuario values 
(null, "felipe", "Ferrera", "felipe@gmail.com", "fe123");



create table treino (
idTreino int primary key auto_increment,
dias int,
minutos int,
fkusuario int,
constraint fkusuario foreign key (fkusuario) references usuario(idUsuario)
);

select * from treino;

create table favorito (
idexperi int primary key auto_increment,
marca varchar(45),
influencer varchar(45),
fkusuario2 int,
constraint fkusuario2 foreign key (fkusuario2) references usuario(idUsuario)
);

select * from favorito;
select marca from favorito;
select * from usuario  join favorito on idUsuario = fkusuario2;
select marca, count(marca) as votos from favorito join usuario on fkusuario2 = idUsuario group by marca;





