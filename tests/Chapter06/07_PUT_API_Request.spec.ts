//Import Playwright module
import { test, expect } from '@playwright/test';

import { getPOSTAPIRequestBody } from '../../src/utils/APIHelper';

import { faker } from '@faker-js/faker';

import tokenAPIRequest from '../../test-data/api_requests/Token_API_Request.json';

import putAPIRequest from '../../test-data/api_requests/PUT_API_Request.json';

test.use({
    baseURL: process.env.BASE_API_URL
});

//Write a test
test('Create PUT API Request using Token API in Playwright', async ({ request }) => {

    //Create a POST API request body dynamically by replacing the placeholders in the template with actual values
    //Reading JSON file
  
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const totalPrice = faker.number.int({ min: 100, max: 5000 });
    const additionalNeeds = faker.helpers.arrayElement(['Breakfast', 'Lunch', 'Dinner', 'None']);
    
    //Create a API request body using the helper function which accepts the actual values as parameters and returns the formatted request body as string
    const postAPIRequest = await getPOSTAPIRequestBody(firstName, lastName, totalPrice,
    true, additionalNeeds, "2025-01-01", "2025-01-05")

     
    //Creating POST API request with the formatted request body
    const postAPIResponse = await request.post('/booking', { data : postAPIRequest });

    //Convert to JSON and Validate response status code
    const responseBody = await postAPIResponse.json();
    expect(postAPIResponse.status()).toBe(200);
    expect(postAPIResponse.statusText()).toBe("OK");
    expect(postAPIResponse.headers()['content-type']).toContain('application/json');
        
       
    //Convert to string and validate response body  
    console.log(`------------------------------------------------------------`);
    //Better format the response body for better readability in the console
    console.log('Response Body from POST API: '+JSON.stringify(responseBody,null,2));
 
    //Validate nested JSON response body and all the properties in the response body
    expect(responseBody.booking).toBeDefined();
    expect(responseBody.booking).toHaveProperty('firstname');
    expect(responseBody.booking).toHaveProperty('lastname');
    expect(responseBody.booking).toHaveProperty('totalprice');
    // expect(responseBody.booking).toHaveProperty('depositpaid');
    // expect(responseBody.booking).toHaveProperty('bookingdates');
    // expect(responseBody.booking.bookingdates).toHaveProperty('checkin');
    // expect(responseBody.booking.bookingdates).toHaveProperty('checkout');

    expect(responseBody.bookingid).toBeGreaterThan(0);
    expect(responseBody.booking.firstname).toBe(firstName);
    expect(responseBody.booking.lastname).toBe(lastName);
    expect(responseBody.booking.totalprice).toBe(totalPrice);
    expect(responseBody.booking.bookingdates.checkin).toBe("2025-01-01");
    expect(responseBody.booking.bookingdates.checkout).toBe("2025-01-05");
    expect(responseBody.booking.additionalneeds).toBe(additionalNeeds);
    
    //------------------------------------------------------------------------------------------------

    //GET API request using Query Parameters
    const bookingId = responseBody.bookingid;
    //Print the booking id in the console
    console.log(`Booking ID : ${bookingId}`);

    const getAPIResponse = await request.get(`/booking/${bookingId}`);

    //validate the GET API response status code and status text
    expect(getAPIResponse.status()).toBe(200);
    expect(getAPIResponse.statusText()).toBe("OK");
    expect(getAPIResponse.headers()['content-type']).toContain('application/json');

    //Convert API response to JSON
    const getAPIJSONResponse = await getAPIResponse.json();
    
    //Print the GET API response body in the console       
    console.log('Response Body from Query GET API: '+JSON.stringify(getAPIJSONResponse,null,2));
    console.log(`------------------------------------------------------------`);

    //--------------------------------------------------------------------------------------------------
    //Generate Token using the token API request body from the static JSON file
    const tokenAPIResponse = await request.post('/auth', { data : tokenAPIRequest });
    
    //validate the response status code and status text after getting Token
    expect(tokenAPIResponse.status()).toBe(200);
    expect(tokenAPIResponse.statusText()).toBe("OK");
    expect(tokenAPIResponse.headers()['content-type']).toContain('application/json');

    //Convert API response to JSON
    const tokenAPIJSONResponse = await tokenAPIResponse.json();

    //Get the token value from the response body
    const token = tokenAPIJSONResponse.token;
    console.log(`Token : ${token}`);    
    console.log(`------------------------------------------------------------`);

    //--------------------------------------------------------------------------------------------------
    
    //Create a PUT API request to update the booking details using the booking id and token generated from the previous steps
    const putAPIResponse = await request.put(`/booking/${bookingId}`, { 
        data : putAPIRequest,
        headers : {
            'Content-Type' : 'application/json',
            'Cookie' : `token=${token}`
        }
     });

    //validate the PUT API response status code and status text
    expect(putAPIResponse.status()).toBe(200);
    expect(putAPIResponse.statusText()).toBe("OK");
    expect(putAPIResponse.headers()['content-type']).toContain('application/json');

    //Convert API response to JSON
    const putAPIJSONResponse = await putAPIResponse.json();

    //Print the PUT API response body in the console as String with better formatting for better readability in the console      
    console.log('PUT API Response after update: '+JSON.stringify(putAPIJSONResponse,null,2));
    
});