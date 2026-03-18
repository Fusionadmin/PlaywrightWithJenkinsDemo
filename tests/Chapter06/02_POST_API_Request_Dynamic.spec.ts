//Import Playwright module
import { test, expect } from '@playwright/test';

import { formatAPIRequest } from '../../src/utils/APIHelper';
import path from 'path';
import fs from 'fs';

test.use({
    baseURL: process.env.BASE_API_URL
});

//Write a test
test('Create POST API Request using dynamic api request body in Playwright', async ({ request }) => {

    //Create a POST API request body dynamically by replacing the placeholders in the template with actual values
    //Reading JSON file
    const templatePath = path.join(__dirname, '../../test-data/api_requests/Dynamic_POST_API_Request.json');
    const template = fs.readFileSync(templatePath, 'utf-8');
    const values = ['Eugene', 'Ray', 1500, 'Dinner'];
    
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

    expect(responseBody.bookingid).toBeGreaterThan(0);
    expect(responseBody.booking.firstname).toBe("Eugene");
    expect(responseBody.booking.lastname).toBe("Ray");
    expect(responseBody.booking.totalprice).toBe(1500);
    expect(responseBody.booking.depositpaid).toBe(true);
    expect(responseBody.booking.bookingdates.checkin).toBe("2024-01-01");
    expect(responseBody.booking.bookingdates.checkout).toBe("2024-01-05");
    expect(responseBody.booking.additionalneeds).toBe("Dinner");
});