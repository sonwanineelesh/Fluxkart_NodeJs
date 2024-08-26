# Fluxkart Project

Fluxkart is an application designed to manage user accounts and handle contact linking, based on email and phone number.

## Getting Started

### 1. Clone the Repository

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/fluxkart.git
cd fluxkart
```
### 2. Fluxkart Application

Webservice for /identify:

```
https://fluxkart-nodejs.onrender.com/api/identify
```
A. This is the url for the POST request. This web service will return an HTTP 200 response with a JSON payload containing the consolidated contact.

Below will be the request body:
```
{
    "email": "lorraine@hillvalley.edu",
    "phoneNumber": "123456"
}
```
This request will give response as below:
```
{
    "contact": {
        "primaryContactId": 1,
        "email": [
            "lorraine@hillvalley.edu",
            "mcfly@hillvalley.edu"
        ],
        "phoneNumber": [
            "123456"
        ],
        "secondaryContactId": [
            23
        ]
    }
}
```
__________________________________________________

B. If an incoming request has either of phoneNumber or email common to an existing contact but contains new information, the service will create a “secondary” Contact row.

Example if two records are there:
```
{
id:11
phoneNumber:"919191"
email:"george@hillvalley.edu"
linkedId:null
linkPrecedence:"primary"
createdAt:2023-04-20T05:30:00.110+00:00
updatedAt:2023-04-20T05:30:00.110+00:00
deletedAt:null
},

{
id:27
phoneNumber:"717171"
email:"biffsucks@hillvalley.edu"
linkedId:null
linkPrecedence:"primary"
createdAt:2023-04-20T05:30:00.110+00:00
updatedAt:2023-04-20T05:30:00.110+00:00
deletedAt:null
}
```

Then this web service will link these two accounts by making the other account secondary and by updating the secondary account's linkedId to primary account's id.

For this web service the request body will be as given below:
```
{
    "email": "george@hillvalley.edu",
    "phoneNumber": "717171"
}
```
This will return the response as below:
```
{
    "contact": {
        "primaryContactId": 11,
        "email": [
            "george@hillvalley.edu",
            "biffsucks@hillvalley.edu"
        ],
        "phoneNumber": [
            "919191",
            "717171"
        ],
        "secondaryContactId": [
            27
        ]
    }
}
```
And the Database collection records will look like this:
```
{
id:11
phoneNumber:"919191"
email:"george@hillvalley.edu"
linkedId:null
linkPrecedence:"primary"
createdAt:2023-04-20T05:30:00.110+00:00
updatedAt:2023-04-20T05:30:00.110+00:00
deletedAt:null
},

{
id:27
phoneNumber:"717171"
email:"biffsucks@hillvalley.edu"
linkedId:11                         //this changed
linkPrecedence:"secondary"          //this changed
createdAt:2023-04-20T05:30:00.110+00:00
updatedAt:2023-04-20T05:30:00.110+00:00
deletedAt:null
}
```

That is all I have implemented, using NodeJs, Express and Mongodb cloud. 

This assignment involved developing a backend API for the Fluxkart project, focusing on managing user data such as phone numbers, emails, and IDs. Using Node.js, Express.js, and Mongoose, I implemented RESTful endpoints with robust data validation. Challenges included ensuring all required fields were present, which was resolved through Mongoose schema validation. This task enhanced my skills in backend development and API design.

All the links I am attaching below:
```
->Github Repository Link : https://github.com/sonwanineelesh/Fluxkart_NodeJs

->Render Link : https://fluxkart-nodejs.onrender.com

->Render Link with POST api : https://fluxkart-nodejs.onrender.com/api/identify
```

Thanks & Regards,

Neelesh Sonwani