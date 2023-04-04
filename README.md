# Task Manager Application (Backend)

Task Manager is a Task management Application where user can add their task and see their past added task. Now a days people are busy in their routine life so they need some Application to store their Task which are remaining to do in future. Our Application will help them to store task.

-Features of the Application
  1. Authentication Process
  2. Email Verification while Sign Up
  3. Email Aleart while every Login
  4. Task Add tool
  5. Easy to Update task after Complition
---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Step to Run Code
- #### open phpmyadmin and import test.sql file in mysql.

- #### Gmail Auth
  You can generate the App Password from your google Sequrity Manager. Copy that password and past in File.
  Make one file name with mailaccount.js in package and past account and password(Generated App Password) in file[Formate are mentioned bewlow].
  
      $ module.exports={
          user: EMAIL,
          pass: PASSWORD,
        }

- #### Run Node js project

  You can start nodejs projecct, just run the following commands.

      $ nodemon start


## Tech Stack

**Server:** Node, Express, NodeMailer 

**Database:** MySQL
