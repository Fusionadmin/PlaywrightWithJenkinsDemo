//Import Playwright module
import { test, expect } from '@playwright/test';

import { formatAPIRequest } from '../../src/utils/APIHelper';
import path from 'path';
import fs from 'fs';

import { faker } from '@faker-js/faker';

test.use({
    baseURL: process.env.BASE_API_URL
});

//Write a test
test('Create POST API Request using dynamic api request and on the fly dataGen in Playwright', async ({ request }) => {

    //Create a POST API request body dynamically by replacing the placeholders in the template with actual values
    //Reading JSON file
    const templatePath = path.join(__dirname, '../../test-data/api_requests/Dynamic_POST_API_Request.json');
    const template = fs.readFileSync(templatePath, 'utf-8');
    
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const totalPrice = faker.number.int({ min: 100, max: 5000 });
    const additionalNeeds = faker.helpers.arrayElement(['Breakfast', 'Lunch', 'Dinner', 'None']);
    
    const values = [firstName, lastName, totalPrice, additionalNeeds];

    //Updating the template with actual values
    const formattedRequestBody = await formatAPIRequest(template, values);
    
    //Creating POST API request with the formatted request body
    const postAPIResponse = await request.post('/booking', { data : JSON.parse(formattedRequestBody) });

    //Convert to JSON and Validate response status code
    const responseBody = await postAPIResponse.json();
    expect(postAPIResponse.status()).toBe(200);
    expect(postAPIResponse.statusText()).toBe("OK");
    expect(postAPIResponse.headers()['content-type']).toContain('application/json');
        
       
    //Convert to string and validate response body  
    console.log(`Response Body : ${JSON.stringify(responseBody)}`);
    console.log(`------------------------------------------------------------`);
    //Better format the response body for better readability in the console
    console.log('Response Body : '+JSON.stringify(responseBody,null,2));
 
    //Validate nested JSON response body and all the properties in the response body
    expect(responseBody.booking).toBeDefined();
    // expect(responseBody.booking).toHaveProperty('firstname');
    // expect(responseBody.booking).toHaveProperty('lastname');
    // expect(responseBody.booking).toHaveProperty('totalprice');
    // expect(responseBody.booking).toHaveProperty('depositpaid');
    // expect(responseBody.booking).toHaveProperty('bookingdates');
    // expect(responseBody.booking.bookingdates).toHaveProperty('checkin');
    // expect(responseBody.booking.bookingdates).toHaveProperty('checkout');

    expect(responseBody.booking.firstname).toBe(firstName);
    expect(responseBody.booking.lastname).toBe(lastName);
    expect(responseBody.booking.totalprice).toBe(totalPrice);
});