create database Morantech;

use Morantech;

-- Empresas --
create table Empresa (
    idEmpresa int primary key auto_increment,
    nome varchar(45) not null,
    cnpj char(18) not null,
    telefone varchar(15) not null,
    StatusEmp char(1),
    senha varchar(45)
);

insert into
    Empresa
values
    (
        null,
        'Trans morango S.A',
        '78.745.125/0001-56',
        '(11) 2487-7845',
        'A',
        'abc111'
    ),
    (
        null,
        'Morangos Delícia Ltda',
        '12.345.678/0001-90',
        '(21) 98765-4321',
        'A',
        'def222'
    ),
    (
        null,
        'Fazenda Morango Feliz S.A',
        '23.456.789/0001-12',
        '(31) 2765-4321',
        'A',
        'casa123'
    ),
    (
        null,
        'Morango Doce Sabor Eireli',
        '34.567.890/0001-34',
        '(41) 98765-9321',
        'A',
        'bambu'
    ),
    (
        null,
        'Morangos Frescos Ltda',
        '45.678.901/0001-56',
        '(51) 93623-1235',
        'A',
        'meumorango'
    ),
    (
        null,
        'Sabor do Morango Ltda',
        '56.789.012/0001-78',
        '(71) 2123-8750',
        'I',
        'melhorsaborXD'
    ),
    (
        null,
        'Cultivar Morangos Agropecuária',
        '67.890.123/0001-90',
        '(11) 93103-0091',
        'A',
        'carrosF'
    );

-- endereços Empresas --
create table endereço (
    idEndereço int primary key auto_increment,
    fkEmpEd int,
    constraint fkEmpEd foreign key (fkEmpEd) references Empresa(idEmpresa),
    rua varchar(45),
    bairro varchar(45),
    numero varchar(12),
    cidade varchar(45),
    UF char(2),
    caixaPostal varchar(45)
);

insert into
    endereço
values
    (
        null,
        1,
        'Alamada das Cerejeiras',
        'Joanna Darc',
        '203',
        'São Paulo',
        'SP',
        null
    ),
    (
        null,
        7,
        'Rua Flor de Maio',
        'Jardim Fontalis',
        '79',
        'Piracicaba',
        'SP',
        null
    ),
    (
        null,
        2,
        'Avenida Ouro Preto',
        'Boa Esperança',
        '403',
        'Belford Roxo',
        'RJ',
        '26100-231'
    ),
    (
        null,
        3,
        'Rua Jacareípe',
        'Vila Presidente Vargas',
        '543',
        'Belo horizonte',
        'MG',
        '31950-210'
    ),
    (
        null,
        4,
        'Praça Avelina Vieira',
        'Gleba Palhano',
        '49',
        'Londrina',
        'PR',
        null
    ),
    (
        null,
        5,
        'Avenida Alexandre Rizzo',
        'DESVIO RIZZO',
        '2248',
        'Caxias do Sul',
        'RS',
        '95110‑-000'
    ),
    (
        null,
        6,
        'Alameda Durval Santos',
        'Recreio',
        '287',
        'Vitoria da Conquista',
        'BA',
        '45020‑-365'
    );

-- Usuario --
create table usuario (
    idUsuario int auto_increment,
    fkEmpUs int,
    constraint fkEmpUs foreign key (fkEmpUs) references Empresa(idEmpresa),
    constraint pkUsuario primary key (idUsuario, fkEmpUs),
    nome varchar(45),
    email varchar(45)
);

-- Login -- 
create table login (
    idLogin int auto_increment,
    fkUsuario int,
    constraint FkUsuario foreign key (fkUsuario) references usuario(idUsuario),
    fkEmpLo int,
    constraint fkEmpLo foreign key (fkEmpLo) references Empresa(idEmpresa),
    constraint pkLogin primary key (idLogin, fkEmpLo),
    email varchar(45),
    senha varchar(45)
);

-- Transporte -- 
create table transporte (
    idTransporte int primary key auto_increment,
    placa char(8),
    modelo varchar(45),
    fkEmp int,
    constraint fkEmp foreign key (fkEmp) references Empresa (idEmpresa)
);

insert into
    transporte
values
    (null, 'ABC-1234', 'Scania', 1),
    (null, 'DEF-5678', 'Mercedes-Benz', 1),
    (null, 'GHI-9012', 'Volvo', 2),
    (null, 'JKL-3456', 'Ford', 2),
    (null, 'MNO-7890', 'Volkswagen', 2),
    (null, 'PQR-1235', 'Iveco', 3),
    (null, 'STU-1356', 'Scania', 4),
    (null, 'VWX-9854', 'Mercedes-Benz', 4),
    (null, 'YZL-8450', 'Volvo', 4),
    (null, 'MNO-4685', 'Ford', 4),
    (null, 'PLA-7169', 'Volskswagen', 4),
    (null, 'ABS-2498', 'Iveco', 5),
    (null, 'OJQ-4781', 'Scania', 5),
    (null, 'AMO-6482', 'Mercedes-Benz', 5),
    (null, 'PAU-4784', 'Volvo', 5),
    (null, 'AVS-6594', 'Ford', 6),
    (null, 'RUE-3514', 'Volkswagen', 7),
    (null, 'AVC-4513', 'Iveco', 7);

-- Tipo --
create table tipo (
    idTipo int primary key auto_increment,
    categoria varchar(45),
    métrica varchar(5)
);

insert into
    tipo
values
    (null, 'temperatura', 'ºC'),
    (null, 'umidade', '%'),
    (null, 'umidade&temperatura', 'ºC,%');

-- Sensor --
create table sensor (
    idSensor int primary key auto_increment,
    modelo varchar(45),
    fkTipo int,
    constraint fkTipo foreign key (fkTipo) references tipo(idTipo),
    situaçao char(2),
    dtManutençao date,
    fktransp int,
    constraint fktransp foreign key (fktransp) references transporte(idTransporte),
    minimo varchar(45),
    maximo varchar(45)
);

insert into
    sensor
values
    (
        null,
        'Dht11',
        3,
        'A',
        null,
        1,
        '0 ºC,90%',
        '12ºC,95%'
    ),
    (
        null,
        'Dht11',
        3,
        'A',
        null,
        2,
        '0 ºC,90%',
        '12ºC,95%'
    ),
    (
        null,
        'Dht11',
        3,
        'A',
        null,
        3,
        '0 ºC,90%',
        '12ºC,95%'
    ),
    (
        null,
        'Dht11',
        3,
        'A',
        null,
        4,
        '0 ºC,90%',
        '12ºC,95%'
    ),
    (
        null,
        'Dht11',
        3,
        'A',
        null,
        5,
        '0 ºC,90%',
        '12ºC,95%'
    ),
    (
        null,
        'Dht11',
        3,
        'A',
        null,
        6,
        '0 ºC,90%',
        '12ºC,95%'
    ),
    (
        null,
        'Dht11',
        3,
        'A',
        null,
        7,
        '0 ºC,90%',
        '12ºC,95%'
    ),
    (
        null,
        'Dht11',
        3,
        'A',
        null,
        8,
        '0 ºC,90%',
        '12ºC,95%'
    ),
    (
        null,
        'Dht11',
        3,
        'A',
        null,
        9,
        '0 ºC,90%',
        '12ºC,95%'
    ),
    (
        null,
        'Dht11',
        3,
        'A',
        null,
        10,
        '0 ºC,90%',
        '12ºC,95%'
    ),
    (
        null,
        'Dht11',
        3,
        'A',
        null,
        11,
        '0 ºC,90%',
        '12ºC,95%'
    ),
    (
        null,
        'Dht11',
        3,
        'I',
        '2023-04-25',
        12,
        '0 ºC,90%',
        '12ºC,95%'
    ),
    (
        null,
        'Dht11',
        3,
        'A',
        null,
        13,
        '0 ºC,90%',
        '12ºC,95%'
    ),
    (
        null,
        'Dht11',
        3,
        'A',
        null,
        14,
        '0 ºC,90%',
        '12ºC,95%'
    ),
    (
        null,
        'Dht11',
        3,
        'A',
        null,
        15,
        '0 ºC,90%',
        '12ºC,95%'
    ),
    (
        null,
        'Dht11',
        3,
        'I',
        null,
        16,
        '0 ºC,90%',
        '12ºC,95%'
    ),
    (
        null,
        'Dht11',
        3,
        'A',
        null,
        17,
        '0 ºC,90%',
        '12ºC,95%'
    ),
    (
        null,
        'Dht11',
        3,
        'A',
        null,
        18,
        '0 ºC,90%',
        '12ºC,95%'
    );

-- Dados Sensor --
create table dadosSensor (
    idDados int auto_increment,
    fkSensor int,
    constraint fkSensor foreign key (fkSensor) references sensor(idSensor),
    constraint pkDados primary key (idDados, fkSensor),
    temperatura decimal(5, 2),
    umidade decimal(5, 2),
    dataHora timestamp default current_timestamp 
);

insert into
    dadosSensor
values
    (null, 1, 5.6, 91.2, '2023-04-04 12:40:00'),
    (null, 1, 5.2, 92.5, '2023-04-04 12:45:00'),
    (null, 3, 8.2, 94.8, '2023-04-04 12:45:00'),
    (null, 3, 7.9, 90.1, '2023-04-04 12:50:00'),
    (null, 5, 9.3, 95.8, '2023-04-05 12:03:00'),
    (null, 5, 9.5, 98.2, '2023-04-05 12:08:00'),
    (null, 2, 10.2, 97.5, '2023-04-04 12:50:00');

-- selects individuais
select
    *
from
    Empresa;

select
    *
from
    endereço;

select
    *
from
    usuario;

select
    *
from
    login;

select
    *
from
    transporte;

select
    *
from
    tipo;

select
    *
from
    sensor;

select
    *
from
    dadosSensor;

-- selects joinados
select
    *
from
    Empresa
    join endereço on idEmpresa = fkEmpEd;

select
    *
from
    transporte
    join Empresa on fkEmp = idEmpresa;

select
    *
from
    sensor
    join transporte on fkTransp = idTransporte;

select
    *
from
    sensor
    join tipo on fkTipo = idTipo;

select
    *
from
    sensor
where
    situaçao like 'I';

select
    *
from
    transporte
    join sensor on fktransp = idTransporte;

-- Select renomeados --
select
    e.idEmpresa,
    e.nome,
    e.cnpj,
    e.telefone,
    r.rua,
    r.bairro,
    r.UF
from
    Empresa as e
    join endereço as r on e.idEmpresa = r.fkEmpEd;

select
    e.idEmpresa,
    e.nome,
    e.cnpj,
    e.telefone,
    t.placa,
    t.modelo
from
    Empresa as e
    join transporte as t on e.idEmpresa = t.fkEmp;

select
    e.idEmpresa,
    e.nome,
    e.cnpj,
    e.telefone,
    t.placa,
    t.modelo,
    s.idSensor,
    s.situaçao,
    d.temperatura,
    d.umidade,
    d.dataHora
from
    Empresa as e
    join transporte as t on e.idEmpresa = t.fkEmp
    join sensor as s on t.idTransporte = fktransp
    join dadosSensor as d on s.idSensor = d.fkSensor;

-- insertUser 
-- 67890
-- insert

select * from dadosSensor;
