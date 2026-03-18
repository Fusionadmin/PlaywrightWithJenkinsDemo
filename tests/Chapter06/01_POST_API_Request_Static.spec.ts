//Import Playwright module
import { test, expect } from '@playwright/test';

import  postAPIRequest from '../../test-data/api_requests/POST_API_Request.json';

test.use({
    baseURL: process.env.BASE_API_URL
});

//Write a test
test('Create POST API Request using static file in Playwright', async ({ request }) => {

    //
    const postAPIResponse = await request.post('/booking', { data : postAPIRequest });

    //Convert to JSON and Validate response status code
    const responseBody = await postAPIResponse.json();
    expect(postAPIResponse.status()).toBe(200);
    expect(postAPIResponse.statusText()).toBe("OK");
    expect(postAPIResponse.headers()['content-type']).toContain('application/json');
        
       
    //Convert to string and validate response body  
    console.log(`Response Body : ${JSON.stringify(responseBody)}`);
    console.log(`------------------------------------------------------------`);
    console.log('Response Body : '+JSON.stringify(responseBody,null,2));

    //Validate nested JSON response body and all the properties in the response body
    expect(responseBody.booking).toBeDefined();
    expect(responseBody.booking).toHaveProperty('firstname');
    expect(responseBody.booking).toHaveProperty('lastname');
    expect(responseBody.booking).toHaveProperty('totalprice');
    expect(responseBody.booking).toHaveProperty('depositpaid');
    expect(responseBody.booking).toHaveProperty('bookingdates');
    expect(responseBody.booking.bookingdates).toHaveProperty('checkin');
    expect(responseBody.booking.bookingdates).toHaveProperty('checkout');

    expect(responseBody.bookingid).toBeGreaterThan(0);
    expect(responseBody.booking.firstname).toBe(postAPIRequest.firstname);
    expect(responseBody.booking.lastname).toBe(postAPIRequest.lastname);
    expect(responseBody.booking.lastname).toBe("Last Name");
    expect(responseBody.booking.totalprice).toBe(postAPIRequest.totalprice);
    expect(responseBody.booking.depositpaid).toBe(postAPIRequest.depositpaid);
    expect(responseBody.booking.bookingdates.checkin).toBe(postAPIRequest.bookingdates.checkin);
    expect(responseBody.booking.bookingdates.checkout).toBe(postAPIRequest.bookingdates.checkout);
});