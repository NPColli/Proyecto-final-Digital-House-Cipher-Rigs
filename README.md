Tematica del sitio: Ecommerce de ASIC, Rigs y hardware para minar criptomonedas.
Publico objetivo: Personas con inversiones grandes y medianas en la criptomineria de Bitcoin y Ethereum.

Referentes:
* Productos y Clientes: https://www.mundorig.com/ar, https://www.ironrigs.com.ar/, https://arminersargentina.mercadoshops.com.ar/, https://www.bitmain.com/
* Estetica: https://www.bitmain.com/ , https://www.tesla.com/
* Funcionalidades: https://cryptohousing360.com/

Integrantes:
* Nicolás Colli: Soy técnico químico y trabajo como operario en una central eléctrica, y empecé a estudiar programación con la idea de hacer un cambio de carrera. Me apasionan tanto la música como los videojuegos, y colecciono mucho de las dos cosas.
* Alan Bruno: Tengo 25 años, soy Lic. en publicidad y actualmente estoy trabajando como Project Manager. Empecé a estudiar programación con la idea de hacer un cambio de carrera. En mi tiempo libre me gusta tocar la guitarra y mirar series y peliculas, además de jugar a los videojuegos.

Trello: https://trello.com/b/58Dg6Dj5/cipher-rigs

CÓMO EJECUTAR EL PROYECTO CIPHER:

Precondiciones: Tener instalado en la computadora: VSCode, Xampp y MySql Workbench.

0- Ejecutar Xampp y hacer clic en "start" al servicio "MySql"

![imagen](https://github.com/albruno-dev/-grupo_1_CipherRigs/blob/main/public/img/tutorial/xampp.JPG?raw=true)

1- Abrir el gestor de base de datos instalado, realizar una nueva conexión:

![imagen](https://github.com/albruno-dev/-grupo_1_CipherRigs/blob/main/public/img/tutorial/mysql.JPG?raw=true)

2- Abrir un nuevo tab para ingresar queries. Ejecutar los scripts para crear la estructura de la base de datos y el contenido. Los scripts se encuentran en las rutas del proyecto:

grupo_1_CipherRigs/database/cypherrigs.sql

grupo_1_CipherRigs/database/cypherdata.sql

![imagen](https://github.com/albruno-dev/-grupo_1_CipherRigs/blob/main/public/img/tutorial/data.JPG?raw=true)

3- Abrir VSCode. En la carpeta donde se desee descargar el proyecto, realizar clic derecho en "open in integrated terminal".

4- En la ruta del paso anterior, ejecutar el siguiente comando en la terminal y aguardar a que se descargue el proyecto:

git clone https://github.com/albruno-dev/-grupo_1_CipherRigs.git

5- Instalar las dependencias utilizadas en el proyecto. Utilizando la consola, posicionarse en el directorio "/grupo_1_CipherRigs" y ejecutar el siguiente comando:

npm install

![imagen](https://github.com/albruno-dev/-grupo_1_CipherRigs/blob/main/public/img/tutorial/npminstall.JPG?raw=true)

6- Iniciar el servidor ejecutando el comando:

npm start

![imagen](https://github.com/albruno-dev/-grupo_1_CipherRigs/blob/main/public/img/tutorial/npmstart.JPG?raw=true)

7- Para visualizar el proyecto, abrir un browser y en la barra de direcciones ingresar a:

http://localhost:3000/

8- Para utilizar usuarios precargados en el archivo cypherdata.sql ingresar estos datos:

Usuario con permisos de admin: admin@cipher.com, password: Admin123

Usuario común: usuario@cipher.com, password: Testuser123

CÓMO EJECUTAR EL PROYECTO DASHBOARD:

Precondiciones: Tener ejecutando el proyecto CIPHER (ver sección anterior)
0- Instalar las dependencias utilizadas en el proyecto dashboard. Utilizando la consola, posicionarse en el directorio "/grupo_1_CipherRigs/dashboard" y ejecutar el comando:

npm install

![imagen](https://github.com/albruno-dev/-grupo_1_CipherRigs/blob/main/public/img/tutorial/npminstall.JPG?raw=true)

1- Para iniciar el servidor ejecutar el comando:

npm start

![imagen](https://github.com/albruno-dev/-grupo_1_CipherRigs/blob/main/public/img/tutorial/npmstart.JPG?raw=true)