# Dishlister
Allows you to find restaurants based on dish recommendations

## Installation

### Backend Installation

1. Clone [Backend repository](https://github.com/ErlcLum/dishlister-backend)

2. Start Postgres and setup database
 ``` 
 rails db:setup
 rails db:migrate
 rails db:seed
 ```
3. Start backend server on port 3001
```
rails s -p 3001
```

## Frontend Installation

### API Keys from Google Maps and Google Places APIs
 
1. You'll need to register API keys from the Google Places API and Google Maps APIs
2. Create a [dotenv](https://www.npmjs.com/package/dotenv) file to hide your api keys
3. After placing your API keys in the dotenv file, you should be able to open the application
4. Install npm dependencies and start the project
```
npm install
npm start
```

 ## Usage
 1. Log in to the application
 2. Enter a location for the application to find a restaurant of
 3. Click on a restaurant
 4. Notice the restaurant has restaurant information on it from the Google Places API
 5. You can bookmark restaurants and add reviews on certain dishes
 6. [Demo Video](https://youtu.be/tmZ79EIZ6QQ)
 
 ## Tech and Framework info
 This project is built with React.JS and Ruby on Rails 5 API & PostgresSQL
 


