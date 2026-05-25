import test, { expect } from "@playwright/test";

test('Fetch All users from Server',async({request})=>{
    //1.send GET request with headers and Bearer Token
    const response=await request.get('https://gorest.co.in/public/v2/users',{
        headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
        'Authorization':'Bearer 4f65543af398240621063c0fbaff27f2f167e48db9184c2cedc27daf18f95b03'
        }
    });
    //2. Assert Status Code is 200 (OK)
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe('OK');
    console.log(response.statusText())
    console.log(response.status())
    //3. Parse JSON response body
    const users=await response.json();

    
    //4. Assert response is an array and log users
    expect(Array.isArray(users)).toBeTruthy();
    console.log('Total Users Fetched:',users.length);
    console.log(users);
})