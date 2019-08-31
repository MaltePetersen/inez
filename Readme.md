# INEZ

This project is an interactive Shopping list. The project was started because of the code competion of [IT-Talents](https://www.it-talents.de "IT-Talents"). [The competition](https://www.it-talents.de/foerderung/code-competition/edeka-digital-code-competition-08-2019 "The competition") was hosted from the IT-Talents partner [Edeka Digital](https://digital.edeka "Edeka Digital").


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You will need Maven and Node.js to install the application here are ressources to download the appropiate versions: 
```
Node.js Download: https://nodejs.org/en/
Maven Download: https://maven.apache.org/download.cgi 
Maven Install Instructions: https://maven.apache.org/install.html
```

### Installing

A step by step series of examples that tell you how to get a development env running

Move in cmd to the backend folder 

```
cd $user/inez/backend/inez
```

Run the backend with maven

```
mvn spring-run:boot
```
Move in cmd to the frontend folder
```
cd $user/inez/frontend/inez
```
Install the depencies with node.js
```
npm install
```
Run the frontend with node.js

```
npm start
```

You can now open the web application in your webbrowser in [localhost:4200](localhost:4200 "localhost:4200")
## Running the tests

You can test the requirements of the IT-Talents competition by running a test 
### Unit test

To run a test you first have to go to the frontend folder in cmd
```
cd $user/inez/frontend/inez
```

There you can run the test with npm 
```
npm test
```
After that a new window will open in which karma will run the tests

##Approach  to Code Competition
The biggest part of the challenge im eyes was getting the data.
###Getting the Data
I used the [Edeka Nord](https://www.edekanord-shop.de/hoof "Edeka Nord") website to webscrape the producttypes, example, units, defaultAmount. After that I used the [Opentheasurus Api](https://www.openthesaurus.de/synonyme/ search?q=test&format=application/json "Opentheasurus Api") to get the sysnonyms for eacht product. The results of that are put into the db through the data.sql file in the ressources in the backend
###The application
The backend is written in java with Spring boot. While developing I ran a PostGreSql database but in the finished backend I am using a h2 in-memory-db2 to ensure that the installing of the application is as easy as possible. Nethertheless in production a PostGreSQL database would be the better choice. I have still commented the old code to deploy it via PostGre so if you want to change that just go to the pom.xml and application.properties and do so. 
The frontend is written with javascript in Angular. I used a template for the basic design which is free to use under MIT License. 
I added an extra feature to the applcation: It does not only know the unit of a product but also the normal amount which is in a package. So to say Rum is normally sold in 700 ml bottles. If you type in "1 Rum" the application will show: 
```
Rum 700 ml $example 
```
If you type in "2 Rum" it will show: 
```
Rum 1400 ml $example 
```
So the amount is multiplied with defaultAmount of the product.
I also made it possibe to save the data. I used a mail as the key because I wanted to write an email service which would the user their shopping list aswell but in the end I did not have the time to do so.
Still if you save a list in "/new-list" you can open it via "saved-lists" if you type in the mail adress you used. 
## Built With

* [Node.js](https://nodejs.org/en/) - Dependecy Management Frontend 
* [Maven](https://maven.apache.org/) - Dependency Management Backend

## Authors

* **Malte Petersen** -  [MaltePetersen](https://github.com/MaltePetersen)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Special thanks to the Project SB-Admin-BS4-Angular-8 for their great angular layout
