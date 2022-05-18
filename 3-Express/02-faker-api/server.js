const express = require("express");//import express so we can use express features
const { faker } = require('@faker-js/faker');//import faker library so we can use it to generate fake random data
const app = express(); // create our app variable which is an instance of express instance
const port = 8000; 



// app.get("/api/hello", (req,res)=>{
//     res.json({msg:"Working Now Faker"});
// })

class User{
    constructor(){
        this.id = faker.database.mongodbObjectId();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        this.phoneNumber = faker.phone.phoneNumber();

    }
}

class Company{
    constructor(){
        this.id = faker.database.mongodbObjectId();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCode(),
            country: faker.address.country()
            
        }

    }
}
app.get("/api/users/new",(req,res)=>{
    //create a user instance
    let newUser = new User();
    
    //respond with json info about the user
    res.json(newUser);
})
app.get("/api/companies/new",(req,res)=>{
    //create a company instance
    let newCompany = new Company();
    
    //respond with json info about the user
    res.json(newCompany);
})

app.get("/api/user/company",(req,res)=>{
    //create a user instance
    let newUser = new User();
    let newCompany = new Company();


    //respond with json info about the user
    res.json({newUser,newCompany});
})



//THIS LINE NEEDS TO BE AT THE BOTTOM OF THE FILE
app.listen(port,()=>console.log(`Listening on port ${port}`));