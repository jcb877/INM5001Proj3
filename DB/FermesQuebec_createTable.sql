
-- Creation des tables ********************************************************
CREATE TABLE NiveauAcces (
    accesId         INT(11)         AUTO_INCREMENT PRIMARY KEY,
    acces           VARCHAR(255)    NOT NULL
);

CREATE TABLE Usagers (
    login           VARCHAR(255)    NOT NULL    PRIMARY KEY,
    prenomUsager    VARCHAR(255)    NOT NULL,
    nomUsager       VARCHAR(255)    NOT NULL,
    motPasse        TEXT            NOT NULL,
    accesId         INT(11)         NOT NULL,
    FOREIGN KEY (accesId)    REFERENCES NiveauAcces(accesId)
    ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Fermes (
    fermeId         INT(11)         AUTO_INCREMENT PRIMARY KEY,
    nomFerme        VARCHAR(255)    NOT NULL,
    addresseFerme   VARCHAR(255)    NOT NULL,
    villeFerme      VARCHAR(255)    NOT NULL,
    provinceFerme   ENUM('CB', 'AB', 'SK', 'MB', 'ON', 'QC', 'NB', 'NE', 'IPE', 'TN', 'YK', 'TNW', 'NU')
);

CREATE TABLE Categories (
    nomCategorie        VARCHAR(255)    NOT NULL PRIMARY KEY
);

CREATE TABLE SousCategories (
    nomSousCategorie    VARCHAR(255)    NOT NULL PRIMARY KEY
);

CREATE TABLE Experiences (
    experienceId        INT(11)         AUTO_INCREMENT PRIMARY KEY,
    dateExperience      DATE            NOT NULL,
    nomCategorie        VARCHAR(255)    NOT NULL,
    nomSousCategorie    VARCHAR(255)    NOT NULL,
    fermeId             INT(11)         NOT NULL,
    FOREIGN KEY (fermeId)           REFERENCES Fermes(fermeId)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (nomCategorie)      REFERENCES Categories(nomCategorie)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (nomSousCategorie)  REFERENCES SousCategories(nomSousCategorie)
    ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Notes (
    noteId              INT(11)         AUTO_INCREMENT PRIMARY KEY,
    dateNote            DATE            NOT NULL,
    note                TEXT            ,
    video               VARCHAR(255)    ,
    experienceId        INT(11)         NOT NULL,
    FOREIGN KEY (experienceId)   REFERENCES Experiences(experienceId)
    ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE UsagersFermes (
    usagersFermesId     INT(11)         AUTO_INCREMENT PRIMARY KEY,
    login               VARCHAR(255)    NOT NULL,
    fermeId             INT(11)         NOT NULL,
    FOREIGN KEY (login)     REFERENCES Usagers(login)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (fermeId)   REFERENCES Fermes(fermeId)
    ON UPDATE CASCADE ON DELETE CASCADE
);
