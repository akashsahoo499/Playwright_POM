# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Post.spec.ts >> Posting new user
- Location: tests\Post.spec.ts:3:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 422
```

# Test source

```ts
  1  | import test, { expect } from "@playwright/test";
  2  | 
  3  | test('Posting new user',async({request})=>{
  4  |     const httpresponse=await request.post('https://gorest.co.in/public/v2/users',{
  5  |         headers:{
  6  |             'Accept':'application/json',
  7  |             'Content-Type':'application/json',
  8  |             'Authorization':'Bearer 4f65543af398240621063c0fbaff27f2f167e48db9184c2cedc27daf18f95b03'
  9  |         },
  10 |         data:{
  11 |             "name": "Tenali Ramakrishna",
  12 |             "email": "tenali123@example.com",
  13 |             "gender": "male",
  14 |             "status": "active"
  15 |         }
  16 |     })
> 17 |      expect (httpresponse.status()).toBe(201);
     |                                     ^ Error: expect(received).toBe(expected) // Object.is equality
  18 |         const newUser=await httpresponse.json();
  19 |         const userId=newUser.id;//Capture the ID
  20 |         const emailid=newUser.email;
  21 |         console.log(`Created User with ID:${userId}`);
  22 |         console.log(`Created User with ID:${emailid}`);
  23 |         console.log(newUser)
  24 | })
```