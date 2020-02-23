# ascenda-test

## Installation guide
* Install node and npm first, my node version is 10.15.3 and npm version is 6.11.3
* Run this command in the root location of the repo to install the required npm packages 
    ```
    npm install
    ```
* Run this command to start the app, the app will be started on PORT 3000 or the PORT env on the machine which it runs on
    ```
    npm run start
    ```
* Run this command to run the unit tests
    ```
    npm run test
    ```

## Live app

* URL to live app: https://infinite-sea-00527.herokuapp.com

## API
* Get all the hotels: /hotel
* Get hotels using hotel ids: /hotel?hotels=["iJhz","SjyX"]
* Get hotels using destination id: /hotel?destination=5432

## Changes made to the response format
* images: the type for an image data is now { link: string, caption: string }. This change is made so that I only need to convert the 3rd api image type.

## Summary of the code
Most of the logic are in the hotel module, so I'll be focusing on the files in the hotel module
* hotel.controller: basically the router for the application, handles routing, getting params, queries from the request. No unit test due to time constraints
* hotel.service: the logic layer, uses other classes, objects to handle the logic of finding the hotels. No unit test due to time constraints
* hotel.data.mock: contains the mock data for unit testing
* hotel.data.restructurer: contains functions to handle the restructuring of the api data to partial hotel model data. There are some O(n^2) operations that could be optimized in these functions. Already commented in the code. Also handles some data cleaning in these functions.
* hotel.data.transformer: class to handle transforming api data to full hotel model data.
* hotel.model: The type of the standard hotel model
* hotel.merger: Logic to merging hotels with similar ids. Some improvement can be made to this class to remove a few unnecessary loops
