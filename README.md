# app-v001-frontend

## Version 0.0.1

This is the initial version. The alpha build will change before the end of this project in the middle of May 2020.

### Purpose of this version

This alpha build will be used to present some working demo to the censors at Reykjavik University.

## What is this application

The application is used to keep track of disc golf games played. It keeps track of who is playing, the score of each player and shares the information between players in real time. 

## Tools

The code is written in Visual Studio Code with a wide variety of pluggins.

We use Prettier+ESLint with a set of custom rules for code formating and to insure that the team has a unified style in the code witten.

The backend is a wide selection of different AWS services. The scope of services changes as we discover different ways to execute our vision. Currently we are looking at AWS Amplify and AppSync with its GraphQL features. The data is stored in a DynamoDB NO-SQL database and uses Cognito to authenticate the users.

The frontend uses VueJS along with some of it's packages. They are Vuex, Vue-Router and prebuilt components from Vuetify.

We try to embrace the ideas of JAM Stack for this project and make the developer environment as friendly as possible.

## The Team

Arnar Arnarson, Dagur Kristjánsson and Ægir Tómasson.

We are all computer science students at Reykjavik University.
