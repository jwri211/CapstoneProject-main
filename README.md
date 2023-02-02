# Capstone Project for Diploma in Software Development
 October - December 2022
 
 This is a website for a south african organisation called R&E Foundation, designed and coded using agile methodologies by our four student team.
 We used MERN stack of technologies, leveraging a Mongo Database for users and testimonials, Express to run the API, React to develop the components that are on
 the pages and served up using node.js
 
The overall project took around two months to complete as a team, and we designed the website from the ground up. For the front end, we used a CDN version of Tailwind  to learn how that works, and we are happy with the way the website looks.

### My Contributions John Wright
I was responsible for parts of the front end, having familiarised myself with back end in a previous project [(MusicHub)](https://github.com/jwri211/MusicHub) and wanting to learn more about it. The code I was specifically in charge of completing was:

- [Navbar](https://github.com/jwri211/CapstoneProject-main/blob/main/client/src/Components/NavBar.jsx)
- [Testimony Page](https://github.com/jwri211/CapstoneProject-main/blob/main/client/src/Components/Pages/Testimony.jsx)
- [Create Testimony Page](https://github.com/jwri211/CapstoneProject-main/blob/main/client/src/Components/Pages/CreateTestimony.jsx)
- [Edit Testimony](https://github.com/jwri211/CapstoneProject-main/blob/main/client/src/Components/Pages/EditTestimony.jsx)
 
I pitched in by helping team members in other areas too! I also documented the comments on each page of code.
 
### Team Members

- [Dwain Aiolupotea](https://github.com/daiolupo)
- [John Wright](https://github.com/jwri211)
- [Leone Kruze](https://github.com/Lkra201)
- [Brayden Dawson](https://github.com/Brayds-Dev)

### How to run:

Before starting the app for the first time, open a terminal and enter into the project.
- Enter into the client folder
- run "npm install"
- Enter into the server folder
- run "npm install"

- While inside the client folder "npm start" will start the front end server with the application.
- While inside the server folder "npm run devStart" will start the back-end server.

(using a split terminal to see client and server command lines at once helps here.)

Please note if cloning repo from github. The project will need a '.env' file created holding the secret keys and strings for this project. <br />
The file path used will be /server/.env. <br />
Inside this file you will need to add... <br />
- PORT = 'Desired port number'
- MONGO_URI = 'Specific connection string for mongo atlas account'
- SECRET = 'Any random generated token or phrase'

