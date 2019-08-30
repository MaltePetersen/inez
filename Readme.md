Technologie stack: 
Spring
Angular
Kommunikation �ber REST
Backend Start: 
Wenn Maven schon installiert ist �ber mvn spring-boot:run, 
ansonsten �ber den Maven Wrapper -> mvnw spring-boot:run.

Zum leichteren Setup der Datenbank habe ich eine in-memory Datenbank im Build von Spring die Daten l�dt. 
Diese speichert nat�rlich nicht die Daten, wenn man sie beendet, aber der Setup ist einfacher. 
Als alternative kann auch eine PostGreDB genutzt werden, dazu muss nur der Driver wieder in der pom.xml file wieder einkommentiert werden
Die properties m�ssen f�r die db in application.properties einkommentiert werden und mit der abgegelichen werden.
Das Schema wird durch Spring JPA beim ersten starten erstellt und die Daten m�ssen selbstst�ndig durch den import von data.sql eingef�gt
werden


Frontend Start: 
node.js installieren
npm install
npm start
browser �ffnen in localhost:8080