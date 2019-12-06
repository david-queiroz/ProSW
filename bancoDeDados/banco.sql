-- banco de dados ProSW

drop table executivo;

CREATE TABLE executivo(
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(30) NOT NULL,
codigo VARCHAR(4) NOT NULL,
status VARCHAR(50),
data varchar(30)
);


SELECT * FROM ProSW.executivo;


