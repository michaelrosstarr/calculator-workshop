# IMY773 - Workshop

Michael Tarr u20537833

## Server Architecture and Technologies Used
![Basic Server Architecture](https://r2.sloththe.dev/zion/imy773-workshop-arch-v2.png)

* Frontend and Backend -> NextJS
* Repo and DevOps -> GitHub
* Hosting Provider (and database) -> Vercel
* Testing Frameworks -> Cypress (frontend) and Jest (general)

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
  * Addition
  * Subtraction
* Should be able to store all problems and solutions in a database.