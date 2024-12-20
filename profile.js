const express = require('express');
const app = express();
app.get('/',(req,res) => {

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Profile Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .profile-container {
            background-color: #ffffff;
            width: 60%;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        .profile-container img {
            border-radius: 50%;
            width: 150px;
            height: 150px;
            object-fit: cover;
            margin-bottom: 20px;
        }

        .profile-container h1 {
            font-size: 2em;
            color: #333;
        }

        .profile-container p {
            font-size: 1.1em;
            color: #777;
        }

        .profile-container .contact-info {
            margin-top: 20px;
            text-align: left;
        }

        .profile-container .contact-info p {
            font-size: 1em;
            color: #555;
        }

        .profile-container .social-links {
            margin-top: 20px;
        }

        .profile-container .social-links a {
            text-decoration: none;
            margin: 0 10px;
            color: #fff;
            background-color: #3b5998;
            padding: 10px;
            border-radius: 50%;
            font-size: 1.5em;
        }

        .profile-container .social-links a:hover {
            background-color: #5b7fca;
        }

        .profile-container .social-links .twitter {
            background-color: #1da1f2;
        }

        .profile-container .social-links .linkedin {
            background-color: #0077b5;
        }

        .profile-container .social-links .github {
            background-color: #333;
        }
    </style>
</head>

<body>
    <div class="profile-container">
        <img src="profile-pic.jpg" alt="Profile Picture">
        <h1>John Doe</h1>
        <p>Web Developer | Tech Enthusiast | Lifelong Learner</p>

        <div class="contact-info">
            <h3>Contact Information</h3>
            <p>Email: john.doe@example.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Location: New York, USA</p>
        </div>

        <div class="social-links">
            <a href="https://www.facebook.com/johndoe" target="_blank">F</a>
            <a href="https://twitter.com/johndoe" target="_blank" class="twitter">T</a>
            <a href="https://www.linkedin.com/in/johndoe" target="_blank" class="linkedin">L</a>
            <a href="https://github.com/johndoe" target="_blank" class="github">G</a>
        </div>
    </div>
</body>

</html>

});
app.listen(3020,() => {
console.log("Server is running on port 3020")
});