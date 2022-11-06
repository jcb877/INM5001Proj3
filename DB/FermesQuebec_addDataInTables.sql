
-- Création des niveaux d'accès
 INSERT INTO NiveauAcces VALUES
     (NULL, 'Chercheurs'),
     (NULL, 'PI'),
     (NULL, 'Admin');

-- Création des catégories
INSERT INTO Categories VALUES
    ('Catégorie A'),
    ('Catégorie B'),
    ('Catégorie C'),
    ('Catégorie D'),
    ('Catégorie E');

-- Création des sous-catégories
INSERT INTO SousCategories VALUES
    ('Catégorie 1'),
    ('Catégorie 2'),
    ('Catégorie 3'),
    ('Catégorie 4'),
    ('Catégorie 5');

-- Création des usagers
INSERT INTO Usagers VALUES
    ('SGadmin', 'Steve', 'Gordon', '123', '3'),
    ('SGchercheur', 'Steve', 'Gordon', '123', '1'),
    ('JCBpi', 'José Carlo', 'Braul', '123', '2'),
    ('JCBadmin', 'José Carlo', 'Braul', '123', '3'),
    ('YWpi', 'Yang', 'Wang', '123', '2'),
    ('YWadmin', 'Yang', 'Wang', '123', '3'),
    ('JLKchercheur', 'Jean-Louis', 'Jousso', '123', '1'),
    ('JLKadmin', 'Jean-Louis', 'Jousso', '123', '3');

INSERT INTO Fermes VALUES
    (NULL, 'Ferme ABC', '123 ch. du Poulet', 'St-Rémi', 'QC'),
    (NULL, 'Ferme COOP régional', '324 3e rang', 'St-Philippe', 'QC'),
    (NULL, 'Ferme laitière divine', '111 rang du Nord', 'Joliette', 'QC'),
    (NULL, 'Ferme Lait et plus', '3456 ch du Lac', 'St-Augustin', 'ON'),
    (NULL, 'Ferme 123', '123 6e avenue', 'Carignan', 'QC'),
    (NULL, 'Ferme Suprême', '32 ch du Ruisseau', 'Mirabel', 'QC');

INSERT INTO Experiences VALUES
    (NULL, '2022-03-13', 'Catégorie B', 'Catégorie 4', 3),
    (NULL, '2022-04-01', 'Catégorie A', 'Catégorie 3', 1),
    (NULL, '2022-05-06', 'Catégorie E', 'Catégorie 4', 1),
    (NULL, '2022-07-07', 'Catégorie C', 'Catégorie 1', 2),
    (NULL, '2022-08-09', 'Catégorie B', 'Catégorie 5', 5);

INSERT INTO Notes(dateNote, note, experienceId) VALUES
    ('2022-03-14', 'Note no 1', 1),
    ('2022-06-12', 'Note no 2', 2),
    ('2022-07-24', 'Note no 3', 3),
    ('2022-09-13', 'La vache va mieux', 1);

INSERT INTO Medias(media, noteId) VALUES
    ('c:/desktop/vache1/a1.jpg', 1),
    ('c:/desktop/vache1/a2.jpg', 1),
    ('c:/desktop/vache1/a3.jpg', 1),
    ('c:/desktop/vache1/a4.jpg', 1),
    ('c:/desktop/vache2/b1.jpg', 2),
    ('c:/desktop/vache3/c2.jpg', 3),
    ('c:/desktop/vache2/b3.jpg', 2),
    ('c:/desktop/vache1/a40.jpg', 1);

INSERT INTO UsagersFermes(login, fermeId) VALUES
    ('SGchercheur', 3),
    ('JCBadmin', 1),
    ('YWadmin', 3),
    ('JLKadmin', 5),
    ('JLKadmin', 3),
    ('SGchercheur', 1);
