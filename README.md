# IMY773 - Workshop

My project for IMY773, which is a test-driven development assignment based around creating a hexadecimal calculator. We had to create all the tests, ui and "backend" features required.

Michael Tarr u20537833

## Server Architecture and Technologies Used
![Basic Server Architecture](https://r2.sloththe.dev/zion/772%20Workshop.png)

I am building out my application using [NextJS](https://nextjs.org/), a React based framework that offers superior performance, one of the best developer experiences and easy use. NextJS has great integration with [Vercel](https://vercel.com) which is why I chose it as the hosting provider, along side the database provider. I am using a Postgres based database since it is easy to use and integrate into NextJS and Vercel.

For testing, I am exclusively using [Jest](https://jestjs.io/). Jest works well with any Javascript based framework and has all the functionality I need. I can test my "backend" features to my frontend ones. It allows me to do end-to-end testing, testing that my frontend communicate with my backend functions, and visa versa.

## Functional Requirements
### Input & Output
* Should only accept hexadecimal values with a maximum length of 3.
* Should return only positive hexadecimal values with a maximum length of 6.
* Should not return any negative values.
* Should not return any decimal places.
* Should return the respective error messages as required.

### Calculations
* Should be able to perform the following actions between two values:
  * Multiplication
  * Division
  * 
  * Addition
  * Subtraction
* Should be able to store all problems and solutions in a database.