Technologie stack: 
Spring
Angular
Kommunikation über REST
Backend Start: 
Wenn Maven schon installiert ist über mvn spring-boot:run, 
ansonsten über den Maven Wrapper -> mvnw spring-boot:run.

Zum leichteren Setup der Datenbank habe ich eine in-memory Datenbank im Build von Spring die Daten lädt. 
Diese speichert natürlich nicht die Daten, wenn man sie beendet, aber der Setup ist einfacher. 
Als alternative kann auch eine PostGreDB genutzt werden, dazu muss nur der Driver wieder in der pom.xml file wieder einkommentiert werden
Die properties müssen für die db in application.properties einkommentiert werden und mit der abgegelichen werden.
Das Schema wird durch Spring JPA beim ersten starten erstellt und die Daten müssen selbstständig durch den import von data.sql eingefügt
werden


Frontend Start: 
node.js installieren
npm install
npm start
browser öffnen in localhost:8080