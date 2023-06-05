create database Morantech;
use Morantech;

show tables;


-- Empresas --

create table empresa (
idEmpresa int primary key auto_increment,
nome varchar(45) not null,
cnpj char(18) not null,
email varchar(45),
senha varchar(45),
qtdSensores varchar(45),
telefone varchar(15) not null,
statusEmp char(1)
);

-- endereços Empresas --


create table endereco (
idEndereco int primary key auto_increment,
fkEmpEd int,
constraint fkEmpEd foreign key (fkEmpEd)
references empresa(idEmpresa),
logradouro varchar(45),
bairro varchar(45),
numero varchar(12),
cidade varchar(45),
UF char(2),
cep varchar(9)
);


-- Usuario --

create table usuario (
idUsuario int auto_increment,
fkEmpUs int,
constraint fkEmpUs foreign key (fkEmpUs)
references empresa(idEmpresa),
constraint pkUsuario primary key (idUsuario, fkEmpUs),
cargo varchar(45),
nome varchar(45),
email varchar(45),
senha varchar(45)
); 


-- Transporte -- 

create table transporte (
idTransporte int primary key auto_increment,
placa char(8),
modelo varchar(45),
fkEmp int,
constraint fkEmp foreign key (fkEmp) 
references empresa (idEmpresa)
);

-- Sensor --

create table sensor (
idSensor int primary key auto_increment,
modelo varchar(45),
situacao char(2),
dtManutencao date,
categoria varchar(45) default 'Temperatura/Umidade', 
metricaTemperatura decimal(5,2),
metricaUmidade decimal(5,2),
fktransp int,
constraint fktransp foreign key (fktransp)
references transporte(idTransporte)
);

insert into sensor values 
(null, 'DHT11', 'A', '2023-05-15', null, 7.28, 92.3, 1),
(null, 'DHT11', 'A', '2023-06-21', null, 11.6, 88.44, 2),
(null, 'DHT11', 'A', '2023-05-29', null, 17.79, 79.1, 5),
(null, 'DHT11', 'A', '2023-08-08', null, 15.83, 83.9, 3),
(null, 'DHT11', 'A', '2023-10-10', null, 4.5, 95.8, 4);

-- Dados Sensor --

create table dadosSensor (
idDados int auto_increment,
fkSensor int,
constraint fkSensor foreign key (fkSensor)
references sensor(idSensor),
constraint pkDados primary key (idDados, fkSensor),
temperatura decimal(5,2),
umidade decimal(5,2),
dataHora timestamp
);

alter table dadosSensor modify column dataHora datetime default current_timestamp;

-- feedBacks --
create table feedback (
idFeedback int,
titulo varchar(30),
statusFeed varchar(45),
conteudo varchar(1000),
fkEmpresa int,
foreign key (fkEmpresa) references empresa(idEmpresa)
);

-- selects individuais

select * from empresa;
select * from endereço;
select * from usuario;

select * from transporte;

select * from sensor;
select * from dadosSensor;

-- selects joinados

select * from empresa join endereço
on idEmpresa = fkEmpEd;

select * from transporte join empresa
on fkEmp = idEmpresa;

select * from sensor join transporte
on fkTransp = idTransporte;


select * from sensor where situaçao like 'I';

select nome as 'nome empresa' from empresa join endereço 
	on idEmpresa = fkEmpEd  where endereço.UF = 'SP' ;
    
select * from transporte join sensor 
	on fktransp = idTransporte;
    
select * from empresa join endereco
on idEmpresa = fkEmpEd
join transporte on fkEmp = idEmpresa;