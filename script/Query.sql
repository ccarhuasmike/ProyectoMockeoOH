CREATE TABLE Persona(
    IdPersona INT IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(120) NOT NULL,
    Edad INT NOT NULL,
    FechaRegistro DATETIME DEFAULT GETDATE()
);

insert into Persona(Nombre,Edad,FechaRegistro) values ('Segundo Mike', 10,GETDATE())
insert into Persona(Nombre,Edad,FechaRegistro) values (' Mike', 10,GETDATE())
-- Índice recomendado
CREATE INDEX IX_Persona_Nombre ON Persona(Nombre);

select * from Persona