import test, { expect } from "@playwright/test";

test('Posting new user',async({request})=>{
    const httpresponse=await request.post('https://gorest.co.in/public/v2/users',{
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization':'Bearer 4f65543af398240621063c0fbaff27f2f167e48db9184c2cedc27daf18f95b03'
        },
        data:{
            "name": "Tenali Ramakrishna",
            "email": "hyderabadtenali@example.com",
            "gender": "male",
            "status": "active"
        }
    })
     expect(httpresponse.status()).toBe(201);
        const newUser=await httpresponse.json();
        const userId=newUser.id;//Capture the ID
        const emailid=newUser.email;
        console.log(`Created User with ID:${userId}`);
        console.log(`Created User with ID:${emailid}`);
        console.log(newUser)
})