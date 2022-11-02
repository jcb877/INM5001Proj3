-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: fermesqc
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add fermes',7,'add_fermes'),(26,'Can change fermes',7,'change_fermes'),(27,'Can delete fermes',7,'delete_fermes'),(28,'Can view fermes',7,'view_fermes'),(29,'Can add niveau acces',8,'add_niveauacces'),(30,'Can change niveau acces',8,'change_niveauacces'),(31,'Can delete niveau acces',8,'delete_niveauacces'),(32,'Can view niveau acces',8,'view_niveauacces'),(33,'Can add usagers',9,'add_usagers'),(34,'Can change usagers',9,'change_usagers'),(35,'Can delete usagers',9,'delete_usagers'),(36,'Can view usagers',9,'view_usagers'),(37,'Can add usagers fermes',10,'add_usagersfermes'),(38,'Can change usagers fermes',10,'change_usagersfermes'),(39,'Can delete usagers fermes',10,'delete_usagersfermes'),(40,'Can view usagers fermes',10,'view_usagersfermes'),(41,'Can add experiences',11,'add_experiences'),(42,'Can change experiences',11,'change_experiences'),(43,'Can delete experiences',11,'delete_experiences'),(44,'Can view experiences',11,'view_experiences'),(45,'Can add note',12,'add_note'),(46,'Can change note',12,'change_note'),(47,'Can delete note',12,'delete_note'),(48,'Can view note',12,'view_note');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'123456','2022-10-23 00:00:00.000000',1,'Test','Yang','Wang','wy@gmail.com',1,1,'2022-10-22 00:00:00.000000');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(12,'notes','note'),(6,'sessions','session'),(11,'UsagerApp','experiences'),(7,'UsagerApp','fermes'),(8,'UsagerApp','niveauacces'),(9,'UsagerApp','usagers'),(10,'UsagerApp','usagersfermes');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'UsagerApp','0001_initial','2022-10-22 02:57:57.643988'),(2,'contenttypes','0001_initial','2022-10-22 02:57:57.659859'),(3,'auth','0001_initial','2022-10-22 02:57:57.843621'),(4,'admin','0001_initial','2022-10-22 02:57:57.897642'),(5,'admin','0002_logentry_remove_auto_add','2022-10-22 02:57:57.904754'),(6,'admin','0003_logentry_add_action_flag_choices','2022-10-22 02:57:57.911941'),(7,'contenttypes','0002_remove_content_type_name','2022-10-22 02:57:57.962240'),(8,'auth','0002_alter_permission_name_max_length','2022-10-22 02:57:57.989784'),(9,'auth','0003_alter_user_email_max_length','2022-10-22 02:57:58.006947'),(10,'auth','0004_alter_user_username_opts','2022-10-22 02:57:58.015129'),(11,'auth','0005_alter_user_last_login_null','2022-10-22 02:57:58.048141'),(12,'auth','0006_require_contenttypes_0002','2022-10-22 02:57:58.050135'),(13,'auth','0007_alter_validators_add_error_messages','2022-10-22 02:57:58.063927'),(14,'auth','0008_alter_user_username_max_length','2022-10-22 02:57:58.100772'),(15,'auth','0009_alter_user_last_name_max_length','2022-10-22 02:57:58.144998'),(16,'auth','0010_alter_group_name_max_length','2022-10-22 02:57:58.168318'),(17,'auth','0011_update_proxy_permissions','2022-10-22 02:57:58.182368'),(18,'auth','0012_alter_user_first_name_max_length','2022-10-22 02:57:58.219892'),(19,'notes','0001_initial','2022-10-22 02:57:58.248266'),(20,'sessions','0001_initial','2022-10-22 02:57:58.290281');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notes_note`
--

DROP TABLE IF EXISTS `notes_note`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notes_note` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `text` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notes_note`
--

LOCK TABLES `notes_note` WRITE;
/*!40000 ALTER TABLE `notes_note` DISABLE KEYS */;
/*!40000 ALTER TABLE `notes_note` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usagerapp_experiences`
--

DROP TABLE IF EXISTS `usagerapp_experiences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usagerapp_experiences` (
  `experienceId` int NOT NULL AUTO_INCREMENT,
  `dateExperience` date NOT NULL,
  `nomCategorie` varchar(255) NOT NULL,
  `nomSousCategorie` varchar(255) NOT NULL,
  `fermeId_id` int NOT NULL,
  PRIMARY KEY (`experienceId`),
  KEY `UsagerApp_experience_fermeId_id_937900a9_fk_UsagerApp` (`fermeId_id`),
  CONSTRAINT `UsagerApp_experience_fermeId_id_937900a9_fk_UsagerApp` FOREIGN KEY (`fermeId_id`) REFERENCES `usagerapp_fermes` (`fermeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usagerapp_experiences`
--

LOCK TABLES `usagerapp_experiences` WRITE;
/*!40000 ALTER TABLE `usagerapp_experiences` DISABLE KEYS */;
/*!40000 ALTER TABLE `usagerapp_experiences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usagerapp_fermes`
--

DROP TABLE IF EXISTS `usagerapp_fermes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usagerapp_fermes` (
  `fermeId` int NOT NULL AUTO_INCREMENT,
  `nomFerme` varchar(255) NOT NULL,
  `addresseFerme` varchar(255) NOT NULL,
  `villeFerme` varchar(255) NOT NULL,
  `provinceFerme` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`fermeId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usagerapp_fermes`
--

LOCK TABLES `usagerapp_fermes` WRITE;
/*!40000 ALTER TABLE `usagerapp_fermes` DISABLE KEYS */;
INSERT INTO `usagerapp_fermes` VALUES (1,'TestFarm','123 test Street','testCity','testProvince'),(2,'TestFarm2','1232 test Street','testCity2','testProvince'),(3,'TestFarm3','1233 test Street','testCity3','testProvince');
/*!40000 ALTER TABLE `usagerapp_fermes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usagerapp_niveauacces`
--

DROP TABLE IF EXISTS `usagerapp_niveauacces`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usagerapp_niveauacces` (
  `accesId` int NOT NULL AUTO_INCREMENT,
  `access` varchar(355) NOT NULL,
  PRIMARY KEY (`accesId`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usagerapp_niveauacces`
--

LOCK TABLES `usagerapp_niveauacces` WRITE;
/*!40000 ALTER TABLE `usagerapp_niveauacces` DISABLE KEYS */;
INSERT INTO `usagerapp_niveauacces` VALUES (1,'Admin'),(2,'Chercheur'),(3,'PI'),(19,'SuperAdmin');
/*!40000 ALTER TABLE `usagerapp_niveauacces` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usagerapp_usagers`
--

DROP TABLE IF EXISTS `usagerapp_usagers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usagerapp_usagers` (
  `usagerId` int NOT NULL AUTO_INCREMENT,
  `login` varchar(255) NOT NULL,
  `prenomUsager` varchar(255) NOT NULL,
  `nomUsager` varchar(255) NOT NULL,
  `motPasse` longtext NOT NULL,
  `accesId_id` int NOT NULL,
  PRIMARY KEY (`usagerId`),
  KEY `UsagerApp_usagers_accesId_id_42df5038_fk_UsagerApp` (`accesId_id`),
  CONSTRAINT `UsagerApp_usagers_accesId_id_42df5038_fk_UsagerApp` FOREIGN KEY (`accesId_id`) REFERENCES `usagerapp_niveauacces` (`accesId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usagerapp_usagers`
--

LOCK TABLES `usagerapp_usagers` WRITE;
/*!40000 ALTER TABLE `usagerapp_usagers` DISABLE KEYS */;
INSERT INTO `usagerapp_usagers` VALUES (1,'testAdmin','Test Y','Test W','123456',1),(2,'testChercheur','Test Y','Test W','123456',2),(3,'testPi','Test Y','Test W','123456',3),(9,'superAdmin','superAdmin','superAdmin','123456',19);
/*!40000 ALTER TABLE `usagerapp_usagers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usagerapp_usagersfermes`
--

DROP TABLE IF EXISTS `usagerapp_usagersfermes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usagerapp_usagersfermes` (
  `usagersFermesId` int NOT NULL AUTO_INCREMENT,
  `fermeId_id` int NOT NULL,
  `login_id` int NOT NULL,
  PRIMARY KEY (`usagersFermesId`),
  KEY `UsagerApp_usagersfer_fermeId_id_79533e08_fk_UsagerApp` (`fermeId_id`),
  KEY `UsagerApp_usagersfer_login_id_ca4559fa_fk_UsagerApp` (`login_id`),
  CONSTRAINT `UsagerApp_usagersfer_fermeId_id_79533e08_fk_UsagerApp` FOREIGN KEY (`fermeId_id`) REFERENCES `usagerapp_fermes` (`fermeId`),
  CONSTRAINT `UsagerApp_usagersfer_login_id_ca4559fa_fk_UsagerApp` FOREIGN KEY (`login_id`) REFERENCES `usagerapp_usagers` (`usagerId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usagerapp_usagersfermes`
--

LOCK TABLES `usagerapp_usagersfermes` WRITE;
/*!40000 ALTER TABLE `usagerapp_usagersfermes` DISABLE KEYS */;
/*!40000 ALTER TABLE `usagerapp_usagersfermes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-02  6:48:46
