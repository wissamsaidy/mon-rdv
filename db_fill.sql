insert into "praticien" ("carte_vitale", "cb", "cheque", "code_postal", "convention", "duree_creneau", "email", "espece", "id", "matricule", "mot_de_passe", "nom", "photo", "prenom", "rue", "telephone", "version", "ville") values (true, false, true, '33300', NULL, 3, 'thierry.lab@gmail.com', true, '0', NULL, 'password', 'Labergère', NULL, 'Thierry', 'rue George Mandel ', NULL, 0, 'Bordeaux');
insert into "praticien" ("carte_vitale", "cb", "cheque", "code_postal", "convention", "duree_creneau", "email", "espece", "id", "matricule", "mot_de_passe", "nom", "photo", "prenom", "rue", "telephone", "version", "ville") values (true, true, true, '33700', NULL, 2, 'lp-rousseau@gmail.com', true, '1', NULL, 'password', 'Rousseau', NULL, 'Jean-Pierre', 'cours Papin', NULL, 1, 'Mérignac');
insert into "praticien" ("carte_vitale", "cb", "cheque", "code_postal", "convention", "duree_creneau", "email", "espece", "id", "matricule", "mot_de_passe", "nom", "photo", "prenom", "rue", "telephone", "version", "ville") values (true, true, true, '13000', NULL, 1, 'd.raoult@gmail.com', true, '2', NULL, 'password', 'Raoult', NULL, 'Didier', 'IHU méditerranée ', NULL, 2, 'Marseille');

insert into "motif" ("id", "libelle", "nb_creneau", "praticien_id", "version") values ('3', 'RDV Medecin Généraliste', 1, '1', 2);
insert into "motif" ("id", "libelle", "nb_creneau", "praticien_id", "version") values ('4', 'RDV Médecin Généraliste', 1, '2', 2);
insert into "motif" ("id", "libelle", "nb_creneau", "praticien_id", "version") values ('1', 'RDV PSY', 3, '0', 0);
insert into "motif" ("id", "libelle", "nb_creneau", "praticien_id", "version") values ('2', 'RDV Medecin Généraliste', 1, '0', 1);
insert into "motif" ("id", "libelle", "nb_creneau", "praticien_id", "version") values ('5', 'Check Up global', 2, '1', 3);

insert into "lieu" ("code_postal", "id", "nom", "praticien_id", "rue", "version", "ville", "virtuel") values ('33700', '0', 'Chez_moi', '0', 'rue George Mandel', 0, 'Bordeaux', false);
insert into "lieu" ("code_postal", "id", "nom", "praticien_id", "rue", "version", "ville", "virtuel") values ('', '1', NULL, '0', NULL, 1, NULL, true);
insert into "lieu" ("code_postal", "id", "nom", "praticien_id", "rue", "version", "ville", "virtuel") values ('13000', '2', 'A mon bureau', '2', 'IHU méditeranné', 2, 'Marseille', false);
insert into "lieu" ("code_postal", "id", "nom", "praticien_id", "rue", "version", "ville", "virtuel") values ('33300', '3', 'A mon cabinet', '1', 'cours Papin', 3, 'Mérignac', true);

insert into "patient" ("code_postal", "date_naissance", "email", "id", "mot_de_passe", "nom", "numeross", "prenom", "rue", "telephone", "version", "ville") values ('78600', '1990-03-02', 'prisc.daoul@gmail.com', '0', 'password', 'Daoulas', NULL, 'Priscille', 'rue parigot', NULL, 0, 'Versaille');
insert into "patient" ("code_postal", "date_naissance", "email", "id", "mot_de_passe", "nom", "numeross", "prenom", "rue", "telephone", "version", "ville") values ('33000', '1993-06-04', 'lloyd.wes@gmail.com', '1', 'password', 'Westbury', NULL, 'Lloyd', 'rue Thuyas', NULL, 0, 'Mérignac');
insert into "patient" ("code_postal", "date_naissance", "email", "id", "mot_de_passe", "nom", "numeross", "prenom", "rue", "telephone", "version", "ville") values ('92000', '1992-05-02', 'quentin.bed@gmail.com', '2', 'password', 'Beduneau', NULL, 'Quentin', 'rue Martignas', NULL, 0, 'Martignas s/ Jalles');
insert into "patient" ("code_postal", "date_naissance", "email", "id", "mot_de_passe", "nom", "numeross", "prenom", "rue", "telephone", "version", "ville") values ('93000', '1991-04-02', 'wissam.als@gmail.com', '3', 'password', 'ALSaidy', NULL, 'Wissam', 'rue Tour Eiffel', NULL, 0, 'Paris');

insert into "consultation" ("id", "motif_id", "nb_creneau", "patient_id", "praticien_id", "statut", "version") values ('0', '1', 3, '1', '0', NULL, 0);
insert into "consultation" ("id", "motif_id", "nb_creneau", "patient_id", "praticien_id", "statut", "version") values ('1', '5', 2, '0', '1', NULL, 1);
insert into "consultation" ("id", "motif_id", "nb_creneau", "patient_id", "praticien_id", "statut", "version") values ('2', '2', 1, '2', '0', NULL, 0);
insert into "consultation" ("id", "motif_id", "nb_creneau", "patient_id", "praticien_id", "statut", "version") values ('3', '3', 1, '3', '1', NULL, 0);
insert into "consultation" ("id", "motif_id", "nb_creneau", "patient_id", "praticien_id", "statut", "version") values ('4', '4', 1, '1', '2', NULL, 0);

insert into "creneau" ("consultation_id", "date_creneau", "dispo", "duree", "heure_creneau", "id", "lieu_id", "praticien_id", "version") values (NULL, '2022-05-06', true, 1, '10:00:00', '2', '0', '0', 0);
insert into "creneau" ("consultation_id", "date_creneau", "dispo", "duree", "heure_creneau", "id", "lieu_id", "praticien_id", "version") values (NULL, '2022-05-06', true, 1, '10:15:00', '1', '0', '0', 0);


insert into "praticien_specialite" ("id", "praticien_id", "specialite_id", "version") values ('0', '0', '0', 0);
insert into "praticien_specialite" ("id", "praticien_id", "specialite_id", "version") values ('1', '1', '1', 0);
insert into "praticien_specialite" ("id", "praticien_id", "specialite_id", "version") values ('2', '1', '2', 0);
insert into "praticien_specialite" ("id", "praticien_id", "specialite_id", "version") values ('3', '2', '1', 0);
insert into "praticien_specialite" ("id", "praticien_id", "specialite_id", "version") values ('4', '0', '2', 0);















