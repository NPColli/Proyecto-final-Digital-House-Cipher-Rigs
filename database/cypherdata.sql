USE cypherrigs;

LOCK TABLES `asics` WRITE;
INSERT INTO `asics` (`id_asic`,`titulo`,`precio`,`especificaciones`,`image`,`status`,`cartId`,`cantidad`) VALUES (1,'Bitcoin Miner S19 Pro',6,'Hashrate, TH/s 110 ± 3%\r\nPotencia en la pared','group-1660287658969.png',NULL,NULL,NULL);
INSERT INTO `asics` (`id_asic`,`titulo`,`precio`,`especificaciones`,`image`,`status`,`cartId`,`cantidad`) VALUES (2,'Bitcoin Miner T19',1596,'','group-1660773892476.png',1,NULL,NULL);
INSERT INTO `asics` (`id_asic`,`titulo`,`precio`,`especificaciones`,`image`,`status`,`cartId`,`cantidad`) VALUES (3,'Bitcoin Miner S15 WT Cooling',1500,'Function: BTC','group-1660772011213.png',1,NULL,NULL);
UNLOCK TABLES;

LOCK TABLES `rigs` WRITE;
INSERT INTO `rigs` (`id_rigs`,`titulo`,`precio`,`especificaciones`,`image`,`status`,`cartId`,`cantidad`) VALUES (1,'ETH/ETC Miner E9',9999,'','group-1660288664173.png',NULL,NULL,NULL);
INSERT INTO `rigs` (`id_rigs`,`titulo`,`precio`,`especificaciones`,`image`,`status`,`cartId`,`cantidad`) VALUES (2,'Miner RTX 2060 x54',3000,'','group-1660289127857.png',NULL,NULL,NULL);
INSERT INTO `rigs` (`id_rigs`,`titulo`,`precio`,`especificaciones`,`image`,`status`,`cartId`,`cantidad`) VALUES (3,'Miner RX 5700 x6',2500,'Función \r\nETH/ETC Ethash \r\nEspecificaciones\r\n','group-1660289283516.png',NULL,NULL,NULL);
INSERT INTO `rigs` (`id_rigs`,`titulo`,`precio`,`especificaciones`,`image`,`status`,`cartId`,`cantidad`) VALUES (4,'MINER RX 5700 X12',6500,'Función \r\nETH/ETC Ethash\r\nEspecificaciones\r\nx','group-1660289420773.png',NULL,NULL,NULL);
INSERT INTO `rigs` (`id_rigs`,`titulo`,`precio`,`especificaciones`,`image`,`status`,`cartId`,`cantidad`) VALUES (5,'Rig Test',1111,'test ','group-1660778003309.png',1,NULL,NULL);

UNLOCK TABLES;
LOCK TABLES `users` WRITE;
INSERT INTO `users` (`user_id`,`email`,`nombre`,`apellido`,`password`,`rol`,`categoria`) VALUES (1,'admin@cipher.com','Admin','Cipher','$2a$10$6zzeidnkJ78T671gI4bK5uJXi8eWlnX7OssX/g/ePUC2DSv2xibTa',0,0);
INSERT INTO `users` (`user_id`,`email`,`nombre`,`apellido`,`password`,`rol`,`categoria`) VALUES (2,'usuario@cipher.com','Usuario','Cipher','$2a$10$/ElScWCCUVmmgR04vVzc4.IzdNJylUSB5d7JvkzWzru6CMLs10pdO',1,0);
UNLOCK TABLES;