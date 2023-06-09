create database morantech;
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

insert into empresa values
(null, 'Trans morango S.A', '78.745.125/0001-56', 'transMorango@gmail.com', 'moranguete123', 2, '(11) 2487-7845', 'A'),
(null, 'Morangos Delícia Ltda', '12.345.678/0001-90', 'morangoDelicia@gmail.com', 'moranDelicia001', 3, '(21) 98765-4321', 'A'),
(null, 'Fazenda Morango Feliz S.A', '23.456.789/0001-12', 'fazendaMoran@gmail.com', 'FazendaMorann543', 1, '(31) 2765-4321', 'A'),
(null, 'Morango Doce Sabor Eireli', '34.567.890/0001-34', 'DoceSabor@gmail.com', 'SaborDoce111', 5, '(41) 98765-9321', 'A'),
(null, 'Morangos Frescos Ltda', '45.678.901/0001-56', 'MorangosFrescos@gmail.com', 'Frescos836', 4, '(51) 93623-1235', 'A');


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

insert into endereco values 
(null, 1, 'Alamada das Cerejeiras', 'Joanna Darc', '203', 'São Paulo', 'SP', null),
(null, 2, 'Avenida Ouro Preto', 'Boa Esperança', '403', 'Belford Roxo', 'RJ', '26100-231'),
(null, 3, 'Rua Jacareípe', 'Vila Presidente Vargas', '543', 'Belo horizonte', 'MG', '31950-210'),
(null, 4, 'Praça Avelina Vieira', 'Gleba Palhano', '49', 'Londrina', 'PR', null),
(null, 5, 'Avenida Alexandre Rizzo', 'DESVIO RIZZO', '2248', 'Caxias do Sul', 'RS', '95110-000');

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

insert into transporte values
(null, 'ABC-1234','Scania', 1), 
(null, 'DEF-5678', 'Mercedes-Benz',2), 
(null, 'GHI-9012', 'Volvo', 3), 
(null, 'JKL-3456', 'Ford', 4), 
(null, 'MNO-7890', 'Volkswagen', 5);

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

insert into dadosSensor values
	(null, 1, 10.00, 88.00, default),
	(null, 1, 6.00, 93.00, default),
	(null, 1, 2.00, 98.00, default),
	(null, 1, 14.00, 84.00, default),
	(null, 1, 25.00, 76.00, default);
    

-- Parametros -- 

create table parametro (
idParametro int,
minimo decimal(5,2),
maximo decimal(5,2),
fkTransporte int,
constraint fktrans foreign key (fkTransporte) references transporte(idTransporte),
constraint pkPara primary key (idParametro , fkTransporte)
);

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