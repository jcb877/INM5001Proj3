-- INM5001 fermes Québec : données de tests pour valider l'applications.

INSERT INTO `fermesqc`.`usagerapp_categories`
(`categorieId`,
`nomCategorie`)
VALUES
(1,'Catégorie A'),
(2,'Catégorie B'),
(3,'Catégorie C'),
(4,'Catégorie D'),
(5,'Catégorie E');


INSERT INTO `fermesqc`.`usagerapp_souscategories`
(`sousCategorieId`,
`nomSousCategorie`,
`categorieId_id`)
VALUES
(1, 'SousCatégorie 1', 1),
(2, 'SousCatégorie 2', 3),
(3, 'SousCatégorie 3', 5),
(4, 'SousCatégorie 4', 2),
(5, 'SousCatégorie 5', 4),
(6, 'SousCatégorie 6', 1),
(7, 'SousCatégorie 7', 3),
(8, 'SousCatégorie 8', 5),
(9, 'SousCatégorie 9', 2),
(10, 'SousCatégorie 10', 4);


INSERT INTO `fermesqc`.`usagerapp_usagers`
(`usagerId`,
`mail`,
`prenomUsager`,
`nomUsager`,
`motPasse`,
`accesId_id`)
VALUES
(1000,'one@mail.com','Usager1','robot 1','',1),
(1001,'SGadmin@mail.com', 'Steve', 'Gordon', '123', '3'),
(1002,'SGchercheur@mail.com', 'Steve', 'Gordon', '123', '1'),
(1003,'JCBpi@mail.com', 'José Carlo', 'Braul', '123', '2'),
(1004,'JCBadmin@mail.com', 'José Carlo', 'Braul', '123', '3'),
(1005,'YWpi@mail.com', 'Yang', 'Wang', '123', '2'),
(1006,'YWadmin@mail.com', 'Yang', 'Wang', '123', '3'),
(1007,'JLKchercheur@mail.com', 'Jean-Louis', 'Jousso', '123', '1'),
(1008,'JLKadmin@mail.com', 'Jean-Louis', 'Jousso', '123', '3');

INSERT INTO `fermesqc`.`usagerapp_fermes`
(`fermeId`,
`nomFerme`,
`addresseFerme`,
`villeFerme`,
`provinceFerme`,
`deleted`,
`deletedDate`)
VALUES
(1,'Ferme ABC', '123 ch. du Poulet', 'St-Rémi', 'QC',null,null),
(2,'Ferme COOP régional', '324 3e rang', 'St-Philippe', 'QC',null,null),
(3,'Ferme laitière divine', '111 rang du Nord', 'Joliette', 'QC',null,null),
(4,'Ferme Lait et plus', '3456 ch du Lac', 'St-Augustin', 'ON',null,null),
(5,'Ferme 123', '123 6e avenue', 'Carignan', 'QC',null,null),
(6,'Ferme Suprême', '32 ch du Ruisseau', 'Mirabel', 'QC',null,null);

INSERT INTO `fermesqc`.`usagerapp_usagersfermes`
(`usagersFermesId`,
`fermeId_id`,
`usagerId_id`)
VALUES
(1,2,1000),
(2,1,1002),
(3,3,1004),
(4,4,1005),
(5,5,1006),
(6,6,1007);



INSERT INTO `fermesqc`.`usagerapp_vaches`
(`vacheId`,
`nomVache`,
`fermeId_id`)
VALUES
(1,'Ginette','1'),
(2,'Gertrude','1'),
(3,'Bernadette','1'),
(4,'Nominingue','1'),
(5,'Jacynthe','1');


INSERT INTO `fermesqc`.`usagerapp_experiences`
(`experienceId`,
`nomExperience`,
`dateExperience`,
`categorieId_id`,
`sousCategorieId_id`,
`vacheId_id`)
VALUES
(1,'SautHauteur','2022-12-05',2,1,1),
(2,'Elasticité','2022-11-02',5,10,2),
(3,'GrosseTruit','2022-10-22',4,9,3),
(4,'SteakNewYorkais','2022-09-26',3,8,4),
(5,'CotelletesJuteuses','2022-10-05',2,7,5);

INSERT INTO `fermesqc`.`usagerapp_notes`
(`noteId`,
`dateNote`,
`note`,
`experienceId_id`)
VALUES
(1,'2022-11-25','En santé',1),
(2,'2022-11-02','fatigé',2),
(3,'2022-12-05','forte',3),
(4,'2022-09-17','grossette',4),
(5,'2022-10-02','fertile',5);







