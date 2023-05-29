create database olympo;
use olympo;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
sobrenome varchar(45),
email varchar(50),
senha varchar(45),
fkTreino int,
fkExperiencia int,
constraint fkexperiencia foreign key (fkExperiencia) references experiencia(idexperi),
constraint fktreino foreign key (fkTreino) references treino(idTreino)
);
select * from usuario;



create table treino (
idTreino int primary key auto_increment,
dias int,
minutos int
);

create table favorito (
idexperi int primary key auto_increment,
marca varchar(45),
influencer varchar(45)
);




