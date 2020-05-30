# Project Title

Its a simple Quiz Compeition Application build on React and Nodejs

## Getting Started
Just Download the code and you will be ready to run it with some steps

### Prerequisites

There is only one thing mainly required which is nodejs.

```
You can see the installation of nodejs for diffrent platform using this link: https://nodejs.org/en/download/
```

### Installing

A step by step series of code that tell you how to get a development env running

After installing nodejs and downloadin project
```
Go to Directory "React Assignment Flexsin/quiz-competion/
```
open terminal and go to the above directory and run 

```
npm i
```
It will install all dependcies and then run
```
npm start 
```

After Starting up frotend server which will be running at http://localhost:3000

```
Go to Directory "React Assignment Flexsin/backend/
```
open terminal and go to the above directory and run 

```
npm i
```
it will install all dependecies and then run
```
npm start 
```
Above command will start backend server which will be runnig on http://localhost:8080

## Running the tests

open Postman and make Get Request with Following url

```
http://localhost:8080/quiz/questions
```

This API hit will give me the json data here nothing to test

open Postman and make Post Request with Following url

```
http://localhost:8080/quiz/answers
```
with following JSON DATA(This json data represent id corresponding to its answer.)

This is unit testing
Test 1
```
{
  "1": "Peacock",
  "2": "Peacock",
  "3": "Mango",
  "4": "Tiger",
  "5": "Jaipur",
  "6": "Delhi"
}
```
It will give me the result which will be json which will show No of right Answers , wrong Answers, and unAnswered Questions

Test 2
Pass the json data with answers but with not all answers

```
{
  "1": "Peacock",
  "2": "Peacock",
  "3": "Mango"
}
```
This will show me number of right ans,wrong ans and question which are not answered will be returned as notAnswered Questions

End To End Testing through GUI,hit url

```
http://localhost:3000/
```
Fill all the answers or partial, it will give nice coressponding result.

## Authors

* **Naveen Rana** - *Initial work* - [MCQ COMPETITION](https://github.com/naveen700/MCQ-Competition.git)


## License

This project is not Licensed

## Acknowledgments

* This code is just for Assignment purpose.

