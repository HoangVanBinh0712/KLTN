-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: kltn_career_website
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `achievement`
--

DROP TABLE IF EXISTS `achievement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `achievement` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `type` int NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `image_id` bigint DEFAULT NULL,
  `owner_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKqssc8sm1lsm8qq80q7kjkeh70` (`image_id`),
  KEY `FK86x40nioyti4mcpa74y4vmowv` (`owner_id`),
  CONSTRAINT `FK86x40nioyti4mcpa74y4vmowv` FOREIGN KEY (`owner_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKqssc8sm1lsm8qq80q7kjkeh70` FOREIGN KEY (`image_id`) REFERENCES `media_resource` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `achievement`
--

LOCK TABLES `achievement` WRITE;
/*!40000 ALTER TABLE `achievement` DISABLE KEYS */;
INSERT INTO `achievement` VALUES (3,'Achievement 1',1,'https://www.youtube.com/watch?v=xypzmu5mMPY&list=RDMMZuk5zGv5Un4&index=10',NULL,1),(4,'Running Viet Race',0,'https://www.youtube.com/watch?v=X7sSE3yCNLI&list=RDMMZuk5zGv5Un4&index=11',23,1),(5,'string',0,'string',25,1);
/*!40000 ALTER TABLE `achievement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `banner`
--

DROP TABLE IF EXISTS `banner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banner` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK104qa85ws27ig3yxsc0j9idax` (`image_id`),
  CONSTRAINT `FK104qa85ws27ig3yxsc0j9idax` FOREIGN KEY (`image_id`) REFERENCES `media_resource` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banner`
--

LOCK TABLES `banner` WRITE;
/*!40000 ALTER TABLE `banner` DISABLE KEYS */;
/*!40000 ALTER TABLE `banner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog`
--

DROP TABLE IF EXISTS `blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `date` datetime(6) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog`
--

LOCK TABLES `blog` WRITE;
/*!40000 ALTER TABLE `blog` DISABLE KEYS */;
/*!40000 ALTER TABLE `blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,'Binh Duong'),(2,'Vung Tau');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `date` datetime(6) DEFAULT NULL,
  `post_id` bigint DEFAULT NULL,
  `reply_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKs1slvnkuemjsq2kj4h3vhx7i1` (`post_id`),
  KEY `FKaux3hl25n3q64ww0612uk786n` (`reply_id`),
  KEY `FK8kcum44fvpupyw6f5baccx25c` (`user_id`),
  CONSTRAINT `FK8kcum44fvpupyw6f5baccx25c` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKaux3hl25n3q64ww0612uk786n` FOREIGN KEY (`reply_id`) REFERENCES `comment` (`id`),
  CONSTRAINT `FKs1slvnkuemjsq2kj4h3vhx7i1` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,'Good','2023-01-07 13:48:28.168000',2,NULL,1),(2,'Qua hay','2023-01-07 13:48:39.579000',2,NULL,1),(3,'Good cho nao ban ?','2023-01-07 13:49:13.545000',2,1,1),(4,'Good thi good thoi cang the','2023-01-07 13:50:19.187000',2,1,4),(5,'hay cho nao ban ?','2023-11-07 13:50:52.788000',2,2,1),(6,'Sieu hay','2023-11-07 13:51:02.591000',2,2,4),(7,'Sieu hay','2023-02-07 13:53:22.879000',2,2,4),(8,'Xin chao !','2023-01-08 12:15:46.183000',2,NULL,3);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cvsubmit`
--

DROP TABLE IF EXISTS `cvsubmit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cvsubmit` (
  `media_id` bigint NOT NULL,
  `post_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  `date` datetime(6) DEFAULT NULL,
  `match_percent` bigint DEFAULT NULL,
  PRIMARY KEY (`media_id`,`post_id`,`user_id`),
  KEY `FKqku9e8075xelp7tm8ilymcu1x` (`post_id`),
  KEY `FKt99c8dc7ivt24v2lef9neah3j` (`media_id`,`user_id`),
  CONSTRAINT `FKqku9e8075xelp7tm8ilymcu1x` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`),
  CONSTRAINT `FKt99c8dc7ivt24v2lef9neah3j` FOREIGN KEY (`media_id`, `user_id`) REFERENCES `profile` (`media_id`, `user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cvsubmit`
--

LOCK TABLES `cvsubmit` WRITE;
/*!40000 ALTER TABLE `cvsubmit` DISABLE KEYS */;
INSERT INTO `cvsubmit` VALUES (17,2,4,'2023-01-08 12:08:19.827000',14),(19,4,1,'2023-01-14 22:38:02.394000',14);
/*!40000 ALTER TABLE `cvsubmit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cvviewed`
--

DROP TABLE IF EXISTS `cvviewed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cvviewed` (
  `media_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  `viewer_id` bigint NOT NULL,
  `date` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`media_id`,`user_id`,`viewer_id`),
  KEY `FKprobctjn4mux6h55xa26ti2ap` (`viewer_id`),
  CONSTRAINT `FKn7o0hjdtqrj1sctj4rsk7qavh` FOREIGN KEY (`media_id`, `user_id`) REFERENCES `profile` (`media_id`, `user_id`),
  CONSTRAINT `FKprobctjn4mux6h55xa26ti2ap` FOREIGN KEY (`viewer_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cvviewed`
--

LOCK TABLES `cvviewed` WRITE;
/*!40000 ALTER TABLE `cvviewed` DISABLE KEYS */;
INSERT INTO `cvviewed` VALUES (17,4,3,'2023-01-08 12:11:20.244000'),(17,4,5,'2023-01-08 12:11:20.244000'),(18,4,3,'2023-01-08 12:11:20.244000'),(18,4,5,'2023-01-08 12:11:20.244000');
/*!40000 ALTER TABLE `cvviewed` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `follow`
--

DROP TABLE IF EXISTS `follow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `follow` (
  `post_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  `date` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`post_id`,`user_id`),
  KEY `FKjby6aprc2rh3sxi3qu46jb22q` (`user_id`),
  CONSTRAINT `FKjby6aprc2rh3sxi3qu46jb22q` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKpbytwogrbn0l2cgqil249c9u4` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `follow`
--

LOCK TABLES `follow` WRITE;
/*!40000 ALTER TABLE `follow` DISABLE KEYS */;
INSERT INTO `follow` VALUES (2,1,'2023-01-07 12:13:41.831000'),(2,4,'2023-01-08 12:08:09.198000'),(4,1,'2023-01-07 12:11:43.912000'),(4,4,'2023-01-07 12:15:08.189000'),(5,1,'2023-01-07 12:11:45.732000');
/*!40000 ALTER TABLE `follow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `follow_user`
--

DROP TABLE IF EXISTS `follow_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `follow_user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `date` datetime(6) DEFAULT NULL,
  `follower_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK5v1c5c5e8o2om43stdn7grt15` (`user_id`,`follower_id`),
  KEY `FKnq61ygj2kbyecwfd2oy7r8di5` (`follower_id`),
  CONSTRAINT `FKglag07bsig33or7njtttnoqy9` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKnq61ygj2kbyecwfd2oy7r8di5` FOREIGN KEY (`follower_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `follow_user`
--

LOCK TABLES `follow_user` WRITE;
/*!40000 ALTER TABLE `follow_user` DISABLE KEYS */;
INSERT INTO `follow_user` VALUES (5,'2023-01-10 22:34:48.139000',1,5),(6,'2023-01-10 22:34:45.653000',2,3),(7,'2023-01-10 22:34:48.139000',2,5),(8,'2023-01-10 22:47:45.510000',1,3);
/*!40000 ALTER TABLE `follow_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `industry`
--

DROP TABLE IF EXISTS `industry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `industry` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `parent_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKq0jbh4n1a2m8k4k691vw24ir8` (`parent_id`),
  CONSTRAINT `FKq0jbh4n1a2m8k4k691vw24ir8` FOREIGN KEY (`parent_id`) REFERENCES `industry` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `industry`
--

LOCK TABLES `industry` WRITE;
/*!40000 ALTER TABLE `industry` DISABLE KEYS */;
INSERT INTO `industry` VALUES (3,'IT',NULL),(5,'IT-BE',NULL);
/*!40000 ALTER TABLE `industry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `media_resource`
--

DROP TABLE IF EXISTS `media_resource`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `media_resource` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `public_id` varchar(255) DEFAULT NULL,
  `resource_type` varchar(255) DEFAULT NULL,
  `url` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `media_resource`
--

LOCK TABLES `media_resource` WRITE;
/*!40000 ALTER TABLE `media_resource` DISABLE KEYS */;
INSERT INTO `media_resource` VALUES (6,'pkamcxwnysg4qeccmbxp','image','https://res.cloudinary.com/dh0hs3o2a/image/upload/v1672988934/pkamcxwnysg4qeccmbxp.jpg'),(8,'fxtpukaapclptdy5miof','image','https://res.cloudinary.com/dh0hs3o2a/image/upload/v1672989053/fxtpukaapclptdy5miof.png'),(17,'qvi636rtvl7jlfhjnu5f','image','https://res.cloudinary.com/dh0hs3o2a/image/upload/v1673146190/qvi636rtvl7jlfhjnu5f.pdf'),(18,'kyl5s7lmduoar8sv5f2c','image','https://res.cloudinary.com/dh0hs3o2a/image/upload/v1673146220/kyl5s7lmduoar8sv5f2c.pdf'),(19,'rphkxbmaskwopxim45zk','image','https://res.cloudinary.com/dh0hs3o2a/image/upload/v1673147832/rphkxbmaskwopxim45zk.pdf'),(23,'spa99evbuz1p5nn8rqqb','image','https://res.cloudinary.com/dh0hs3o2a/image/upload/v1673534466/spa99evbuz1p5nn8rqqb.jpg'),(25,'b9fk8q4sxksvsnhomddk','image','https://res.cloudinary.com/dh0hs3o2a/image/upload/v1673535008/b9fk8q4sxksvsnhomddk.png');
/*!40000 ALTER TABLE `media_resource` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notification`
--

DROP TABLE IF EXISTS `notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notification` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `date` datetime(6) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `post_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKn1l10g2mvj4r1qs93k952fshe` (`post_id`),
  KEY `FKb0yvoep4h4k92ipon31wmdf7e` (`user_id`),
  CONSTRAINT `FKb0yvoep4h4k92ipon31wmdf7e` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKn1l10g2mvj4r1qs93k952fshe` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification`
--

LOCK TABLES `notification` WRITE;
/*!40000 ALTER TABLE `notification` DISABLE KEYS */;
INSERT INTO `notification` VALUES (1,'2023-01-14 13:15:29.123000','Payment success with order: ',NULL,3),(2,'2023-01-14 21:09:00.670000','Your followed company has posted a new job !',14,1),(3,'2023-01-14 21:09:01.021000','Your followed company has posted a new job !',14,2),(4,'2023-01-14 21:10:35.582000','Payment success with order: PAYID-MPBLPRA43R40014UP153315M',NULL,3),(5,'2023-01-14 21:15:23.996000','1 User has Submitted their CV to your post !',4,3),(6,'2023-01-14 21:17:01.087000','Admin has accepted your post !',9,3),(7,'2023-01-14 21:17:02.604000','Admin has accepted your post !',10,3),(8,'2023-01-14 21:17:03.929000','Admin has accepted your post !',11,3),(9,'2023-01-14 21:17:05.980000','Admin has accepted your post !',12,3),(10,'2023-01-14 21:17:14.355000','Admin has Delete your post !',9,3),(11,'2023-01-14 21:17:34.573000','Admin has accepted your post !',9,3),(12,'2023-01-14 21:24:31.185000','You have changed your password through Reset password.',NULL,1),(13,'2023-01-14 21:25:12.687000','You have confirmed your email address.',NULL,1),(14,'2023-01-14 22:03:42.586000','Admin has Delete your post !',14,3),(15,'2023-01-14 22:05:36.161000','Admin has accepted your post !',14,3),(16,'2023-01-14 22:07:15.634000','Admin has Delete your post !',14,3),(17,'2023-01-14 22:19:27.935000','Your followed company has posted a new job !',15,1),(18,'2023-01-14 22:19:27.935000','Your followed company has posted a new job !',15,2),(19,'2023-01-14 22:19:27.935000','1 User has Submitted their CV to your post !',4,3),(20,'2023-01-14 22:25:30.980000','Payment success with order: PAYID-MPBMQ3I6DG11331TX434040N',NULL,3),(21,'2023-01-14 22:34:02.638000','Your followed company has posted a new job !',16,1),(23,'2023-01-14 22:38:03.065000','1 User has Submitted their CV to your post !',4,3),(24,'2023-01-14 22:40:21.162000','Admin has Delete your post !',14,3),(25,'2023-01-14 22:40:26.018000','Admin has accepted your post !',14,3),(26,'2023-01-14 22:40:43.398000','Admin has accepted your post !',14,3);
/*!40000 ALTER TABLE `notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `accepted_date` datetime(6) DEFAULT NULL,
  `benifit` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `contact` varchar(255) DEFAULT NULL,
  `create_date` datetime(6) DEFAULT NULL,
  `currency` varchar(30) NOT NULL,
  `description` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `experience` varchar(255) NOT NULL,
  `expiration_date` datetime(6) NOT NULL,
  `gender` int NOT NULL,
  `location` varchar(200) NOT NULL,
  `method` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `recruit` bigint DEFAULT NULL,
  `requirement` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `salary` bigint DEFAULT NULL,
  `status` varchar(30) NOT NULL,
  `title` varchar(200) DEFAULT NULL,
  `view_count` int DEFAULT NULL,
  `accepted_by` bigint DEFAULT NULL,
  `author` bigint DEFAULT NULL,
  `city` bigint DEFAULT NULL,
  `industry` bigint DEFAULT NULL,
  `service_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKtocx2s7uy9ivf6m60l8qj984c` (`accepted_by`),
  KEY `FKt7refuxfvwatrlcwobvc634fc` (`author`),
  KEY `FKgujw94bnvv7w9j8eyd4mymrtf` (`city`),
  KEY `FKp5dwme3c1f3nuco85k8agpng3` (`industry`),
  KEY `FK26koi7ni7nrc8bgqn94hd5sju` (`service_id`),
  CONSTRAINT `FK26koi7ni7nrc8bgqn94hd5sju` FOREIGN KEY (`service_id`) REFERENCES `service` (`id`),
  CONSTRAINT `FKgujw94bnvv7w9j8eyd4mymrtf` FOREIGN KEY (`city`) REFERENCES `city` (`id`),
  CONSTRAINT `FKp5dwme3c1f3nuco85k8agpng3` FOREIGN KEY (`industry`) REFERENCES `industry` (`id`),
  CONSTRAINT `FKt7refuxfvwatrlcwobvc634fc` FOREIGN KEY (`author`) REFERENCES `user` (`id`),
  CONSTRAINT `FKtocx2s7uy9ivf6m60l8qj984c` FOREIGN KEY (`accepted_by`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'2023-01-07 11:01:14.665000','Bao hiem suc khoe','MrBinh: 0337445599','2023-01-07 10:56:01.339000','AGREEMENT','Mặc áo vào thứ anh cần là nụ cười của em ?','THREE_YEAR','2023-03-06 00:00:00.000000',0,'Binh An, Di an','FULL_TIME','Manager',15,'Toeic 650+ or Ielts 6.0+',NULL,'DELETED_BY_ADMIN','Second title',NULL,2,3,1,5,3),(2,'2023-01-07 11:01:17.143000','Bao hiem suc khoe','MrBinh: 0337445596','2023-02-07 11:02:28.165000','USD','Mặc áo vào thứ anh cần là nụ cười của em ?','NONE','2023-03-07 00:00:00.000000',0,'Binh An, Di an','FULL_TIME','Staff',5,'Toeic 550+ or Ielts 5.5+',1000,'ACTIVE','First title',NULL,2,3,1,3,3),(4,'2023-01-07 11:14:08.058000','Bao hiem suc khoe','MrBinh: 0337445596','2023-03-06 16:40:59.598000','USD','Mặc áo vào thứ anh cần là nụ cười của em ?','NONE','2023-02-06 00:00:00.000000',0,'Binh An, Di an','FULL_TIME','Staff',5,'Toeic 550+ or Ielts 5.5+',1000,'ACTIVE','First title',NULL,2,3,1,3,3),(5,'2023-01-07 11:14:06.631000','Bao hiem suc khoe','MrBinh: 0337445596','2023-03-06 16:42:01.807000','USD','Mặc áo vào thứ anh cần là nụ cười của em ?','NONE','2023-03-06 00:00:00.000000',0,'Binh An, Di an','FULL_TIME','Staff',5,'Toeic 550+ or Ielts 5.5+',1000,'ACTIVE','First title',NULL,2,3,1,3,3),(8,NULL,'Bao hiem suc khoe','MrBinh: 0337445596','2023-01-06 16:45:40.870000','USD','Mặc áo vào thứ anh cần là nụ cười của em ?','NONE','2023-01-06 00:00:00.000000',0,'Binh An, Di an','FULL_TIME','Staff',5,'Toeic 550+ or Ielts 5.5+',1000,'WAIT_FOR_ACCEPT','First title',NULL,NULL,3,1,3,3),(9,'2023-01-14 21:17:34.543000','string','string','2023-01-14 21:02:28.486000','AGREEMENT','string','NONE','2023-03-14 00:00:00.000000',0,'Di An','FULL_TIME','Staff',10,'string',1000,'ACTIVE','string',0,2,3,1,3,3),(10,'2023-01-14 21:17:02.578000','string','string','2023-01-14 21:04:40.412000','AGREEMENT','string','NONE','2023-03-14 00:00:00.000000',0,'Di An','FULL_TIME','Staff',10,'string',1000,'ACTIVE','string',0,2,3,1,3,3),(11,'2023-01-14 21:17:03.895000','string','string','2023-01-14 21:06:51.034000','AGREEMENT','string','NONE','2023-03-14 00:00:00.000000',0,'Di An','FULL_TIME','Staff',10,'string',1000,'ACTIVE','string',0,2,3,1,3,3),(12,'2023-01-14 21:17:05.934000','string','string','2023-01-14 21:07:12.817000','AGREEMENT','string','NONE','2023-03-14 00:00:00.000000',0,'Di An','FULL_TIME','Staff',10,'string',1000,'ACTIVE','string',0,2,3,1,3,3),(14,'2023-01-14 22:40:43.380000','string','string','2023-01-14 21:08:52.529000','AGREEMENT','string','NONE','2023-03-14 00:00:00.000000',0,'Di An','FULL_TIME','Staff',10,'string',1000,'ACTIVE','string',0,2,3,1,3,3),(15,NULL,'string','string','2023-01-14 22:17:01.740000','AGREEMENT','string','NONE','2023-03-14 00:00:00.000000',0,'Di An','FULL_TIME','Staff',10,'string',NULL,'WAIT_FOR_ACCEPT','string',0,NULL,3,1,3,3),(16,NULL,'string','string','2023-01-14 22:34:02.493000','AGREEMENT','string','NONE','2023-03-14 00:00:00.000000',0,'Di An','FULL_TIME','Staff',10,'string',NULL,'WAIT_FOR_ACCEPT','string',0,NULL,3,1,3,3);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile`
--

DROP TABLE IF EXISTS `profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile` (
  `media_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  `experience` int DEFAULT NULL,
  `is_public` tinyint(1) NOT NULL DEFAULT '0',
  `last_modified` datetime(6) NOT NULL,
  `method` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `position` int DEFAULT NULL,
  PRIMARY KEY (`media_id`,`user_id`),
  KEY `FKawh070wpue34wqvytjqr4hj5e` (`user_id`),
  CONSTRAINT `FKawh070wpue34wqvytjqr4hj5e` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKqitv6qsbqikwwp1h8sgku01vb` FOREIGN KEY (`media_id`) REFERENCES `media_resource` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile`
--

LOCK TABLES `profile` WRITE;
/*!40000 ALTER TABLE `profile` DISABLE KEYS */;
INSERT INTO `profile` VALUES (17,4,3,1,'2023-01-08 09:49:49.230000',2,'CV Frontend',1),(18,4,0,1,'2023-01-08 12:04:41.995000',0,'CV Frontend',0),(19,1,0,1,'2023-01-08 10:17:13.354000',1,'CV Backend',0);
/*!40000 ALTER TABLE `profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `report`
--

DROP TABLE IF EXISTS `report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `report` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `date` datetime(6) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `handle` tinyint(1) DEFAULT '0',
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `report_contet` varchar(255) DEFAULT NULL,
  `post_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKnuqod1y014fp5bmqjeoffcgqy` (`post_id`),
  CONSTRAINT `FKnuqod1y014fp5bmqjeoffcgqy` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `report`
--

LOCK TABLES `report` WRITE;
/*!40000 ALTER TABLE `report` DISABLE KEYS */;
INSERT INTO `report` VALUES (2,'2023-01-14 11:24:42.247000','binhhv@gmail.com',0,'Demo report','0337445596','string',1),(4,'2023-01-14 11:24:42.247000','binhhv@gmail.com',0,'Demo report','0337445596','string',1),(5,'2023-01-14 11:24:42.247000','binhhv@gmail.com',0,'Demo report','0337445596','string',2),(6,'2023-01-14 11:24:48.997000','binhhv@gmail.com',0,'Demo report','0337445596','string',4),(7,'2023-01-14 11:24:54.491000','binhhv@gmail.com',1,'Demo report','0337445596','string',5);
/*!40000 ALTER TABLE `report` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service`
--

DROP TABLE IF EXISTS `service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `active` tinyint(1) DEFAULT '1',
  `created_date` datetime(6) DEFAULT NULL,
  `currency` varchar(30) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `post_duration` bigint NOT NULL,
  `price` double NOT NULL,
  `type` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service`
--

LOCK TABLES `service` WRITE;
/*!40000 ALTER TABLE `service` DISABLE KEYS */;
INSERT INTO `service` VALUES (1,1,'2023-01-06 15:20:28.387000','USD','Great treating for user !','First Serivce',1,10,'BASIC'),(2,1,'2023-01-06 15:20:39.626000','USD','Great treating for user !','First Serivce',2,15,'BASIC'),(3,1,'2023-01-06 15:20:48.540000','USD','Great treating for user !','First Serivce',2,30,'PREMIUM'),(4,1,'2023-01-06 15:20:49.094000','USD','Great treating for user !','Second Serivce',1,8,'BASIC');
/*!40000 ALTER TABLE `service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `active` bit(1) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `code` varchar(20) DEFAULT NULL,
  `description` varchar(2000) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `email_confirm` bit(1) DEFAULT NULL,
  `name` varchar(120) DEFAULT NULL,
  `password` varchar(120) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `role` int DEFAULT NULL,
  `service_expiration_date` datetime(6) DEFAULT NULL,
  `avatar_id` bigint DEFAULT NULL,
  `city_id` bigint DEFAULT NULL,
  `industry_id` bigint DEFAULT NULL,
  `current_service` bigint DEFAULT NULL,
  `create_date` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_ob8kqyqqgmefl0aco34akdtpe` (`email`),
  KEY `FK64ydoqa8wkadupx8aci0k4v2h` (`avatar_id`),
  KEY `FK29eqyw0gxw5r4f1ommy11nd9i` (`city_id`),
  KEY `FK5b4jwu5ti1o1mtwrhka28wmrp` (`industry_id`),
  KEY `FKiqx6maqf4rf527o7oejjoip3t` (`current_service`),
  CONSTRAINT `FK29eqyw0gxw5r4f1ommy11nd9i` FOREIGN KEY (`city_id`) REFERENCES `city` (`id`),
  CONSTRAINT `FK5b4jwu5ti1o1mtwrhka28wmrp` FOREIGN KEY (`industry_id`) REFERENCES `industry` (`id`),
  CONSTRAINT `FK64ydoqa8wkadupx8aci0k4v2h` FOREIGN KEY (`avatar_id`) REFERENCES `media_resource` (`id`),
  CONSTRAINT `FKiqx6maqf4rf527o7oejjoip3t` FOREIGN KEY (`current_service`) REFERENCES `service` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,_binary '','Di An','',NULL,'thebest11447@gmail.com',_binary '','Hoang Van Binh','$2a$10$8Ry6KyH/G6NnsJG4CUfcJuloLa4nn8AWAzxgFRmSuIkY/Qq.4w/.S','0337445595',0,NULL,6,1,3,NULL,'2023-01-07 16:28:14.691000'),(2,_binary '',NULL,NULL,NULL,'binhhv@admin.com',_binary '\0','Hoang Van Binh','$2a$10$JcIWLoWBJZY5JiqbhdpOT.DfdVY6ncSHg/s13cV8bLxird6jPGOF.',NULL,2,NULL,NULL,NULL,NULL,NULL,'2023-01-07 16:28:14.691000'),(3,_binary '','Ba ria',NULL,'Phiên bản V583 - Lễ Hội Giáng Sinh sẽ được cập nhật vào ngày 22/12/2022 với các tính năng được mở rộng cùng trang bị mới với sức mạnh chiến đấu lớn. Nhanh tay tham gia cùng Võ Lâm Chi Mộng trải nghiệm các hoạt động mới.','19110170@student.hcmute.edu.vn',_binary '','Binh Company','$2a$10$YiXzKiBd1sYJdfiv8VLMPOgRh2nud9W20j6EgSpSdJT.rsBCQNtty','0337445596',1,'2024-11-07 00:00:00.000000',8,2,3,3,'2023-02-07 16:28:14.691000'),(4,_binary '',NULL,NULL,NULL,'symanh@gmail.com',_binary '\0','Thieu Sy Manh','$2a$10$qr2JNAH5jeicebzdE4xbku4BDxpAQEkBt1nICWp.wJgjLAWxZaWwC',NULL,0,NULL,NULL,NULL,NULL,NULL,'2023-11-07 16:28:14.691000'),(5,_binary '','Ba ria',NULL,'','binhhv1@company.com',_binary '\0','Binh Company','$2a$10$YiXzKiBd1sYJdfiv8VLMPOgRh2nud9W20j6EgSpSdJT.rsBCQNtty','0337445597',1,'2024-08-07 00:00:00.000000',NULL,2,3,1,'2023-01-07 16:28:14.691000');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_order`
--

DROP TABLE IF EXISTS `user_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_order` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime(6) DEFAULT NULL,
  `currency` varchar(30) NOT NULL,
  `duration` int NOT NULL,
  `note` varchar(255) DEFAULT NULL,
  `paid_date` datetime(6) DEFAULT NULL,
  `price` double NOT NULL,
  `status` varchar(30) NOT NULL,
  `total` double NOT NULL,
  `service_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `payment_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKc0udsp041ygmlpgo354elsw0n` (`service_id`),
  KEY `FKj86u1x7csa8yd68ql2y1ibrou` (`user_id`),
  CONSTRAINT `FKc0udsp041ygmlpgo354elsw0n` FOREIGN KEY (`service_id`) REFERENCES `service` (`id`),
  CONSTRAINT `FKj86u1x7csa8yd68ql2y1ibrou` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_order`
--

LOCK TABLES `user_order` WRITE;
/*!40000 ALTER TABLE `user_order` DISABLE KEYS */;
INSERT INTO `user_order` VALUES (6,'2023-02-07 16:09:31.336000','USD',3,'Update service form Sat Jan 07 16:09:47 ICT 2023 to Fri Apr 07 00:00:00 ICT 2023 .','2023-01-07 16:09:47.802000',30,'PAID',90,3,3,NULL),(7,'2023-01-07 16:10:36.135000','USD',1,NULL,NULL,30,'WAIT_FOR_PAYMENT',30,3,3,NULL),(8,'2023-01-07 16:15:03.508000','USD',1,NULL,NULL,30,'WAIT_FOR_PAYMENT',30,3,3,NULL),(9,'2023-01-07 16:27:59.396000','USD',1,'Update service form 2023-04-07 00:00:00.0 to Sun May 07 00:00:00 ICT 2023 .','2023-01-07 16:28:14.691000',30,'PAID',30,3,3,NULL),(10,'2023-01-07 16:31:25.213000','USD',1,'Rent new service for 1 month(s).','2023-01-07 16:31:40.006000',10,'PAID',10,1,5,NULL),(11,'2023-02-07 16:31:34.464000','USD',1,NULL,NULL,10,'WAIT_FOR_PAYMENT',10,1,5,NULL),(12,'2023-02-07 16:32:38.844000','USD',2,'Update service form 2023-05-07 00:00:00.0 to Fri Jul 07 00:00:00 ICT 2023 .','2023-01-07 16:32:55.737000',30,'PAID',60,3,3,NULL),(13,'2023-02-07 16:33:22.443000','USD',2,'Update service form 2023-07-07 00:00:00.0 to Thu Sep 07 00:00:00 ICT 2023 .','2023-01-07 16:33:52.078000',30,'PAID',60,3,3,NULL),(14,'2023-01-07 16:34:12.128000','USD',2,'Update service form 2023-09-07 00:00:00.0 to Tue Nov 07 00:00:00 ICT 2023 .','2023-01-07 16:34:28.140000',30,'PAID',60,3,3,NULL),(15,'2023-01-07 16:34:34.805000','USD',2,'Update service form 2023-11-07 00:00:00.0 to Sun Jan 07 00:00:00 ICT 2024 .','2023-01-07 16:34:50.912000',30,'PAID',60,3,3,NULL),(16,'2023-01-07 16:37:03.016000','USD',2,'Update service form 2023-02-07 00:00:00.0 to Fri Apr 07 00:00:00 ICT 2023 .','2023-01-07 16:38:40.291000',10,'PAID',20,1,5,NULL),(17,'2023-01-07 16:38:53.259000','USD',16,'Update service form 2023-04-07 00:00:00.0 to Wed Aug 07 00:00:00 ICT 2024 .','2023-01-07 16:39:16.348000',10,'PAID',160,1,5,NULL),(18,'2023-01-07 16:56:26.361000','USD',3,'Update service form 2024-01-07 00:00:00.0 to Sun Apr 07 00:00:00 ICT 2024 .','2023-01-07 16:56:49.636000',30,'PAID',90,3,3,'https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-9SU84262HK017315S'),(19,'2023-01-07 16:57:15.705000','USD',3,'Update service form 2024-04-07 00:00:00.0 to Sun Jul 07 00:00:00 ICT 2024 .','2023-01-07 16:57:49.457000',30,'PAID',90,3,3,'https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-8F810563N8340874Y'),(20,'2023-01-08 12:14:15.135000','USD',1,'Update service form 2024-07-07 00:00:00.0 to Wed Aug 07 00:00:00 ICT 2024 .','2023-01-08 12:14:50.576000',30,'PAID',30,3,3,'https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-1GX40613JY288623X'),(21,'2023-01-14 13:14:58.832000','USD',1,'Update service form 2024-08-07 00:00:00.0 to Sat Sep 07 00:00:00 ICT 2024 .','2023-01-14 13:15:29.162000',30,'PAID',30,3,3,'https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-14L25492XW3845649'),(22,'2023-01-14 21:10:10.353000','USD',1,'Update service form 2024-09-07 00:00:00.0 to Mon Oct 07 00:00:00 ICT 2024 .','2023-01-14 21:10:35.615000',30,'PAID',30,3,3,'https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-4MG319750A497430W'),(23,'2023-01-14 22:21:15.688000','USD',1,'Update service form 2024-10-07 00:00:00.0 to Thu Nov 07 00:00:00 ICT 2024 .','2023-01-14 22:25:31.015000',30,'PAID',30,3,3,'https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-4W063672F6831210X');
/*!40000 ALTER TABLE `user_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `view_page`
--

DROP TABLE IF EXISTS `view_page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `view_page` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `date` datetime(6) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `viewer_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKjmfpmhbyyqioqgm7fpwp0k6wk` (`user_id`),
  KEY `FKmmbkugjryqkg496vmevrbb5wo` (`viewer_id`),
  CONSTRAINT `FKjmfpmhbyyqioqgm7fpwp0k6wk` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKmmbkugjryqkg496vmevrbb5wo` FOREIGN KEY (`viewer_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `view_page`
--

LOCK TABLES `view_page` WRITE;
/*!40000 ALTER TABLE `view_page` DISABLE KEYS */;
INSERT INTO `view_page` VALUES (3,'2023-01-08 11:55:03.258000',3,1),(4,'2023-01-08 12:03:22.842000',3,4),(5,'2023-01-08 12:03:42.351000',5,4),(6,'2023-01-08 12:07:16.361000',5,4),(7,'2023-02-08 12:03:22.842000',3,4),(8,'2023-03-08 12:03:22.842000',3,4);
/*!40000 ALTER TABLE `view_page` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-16 21:23:41
