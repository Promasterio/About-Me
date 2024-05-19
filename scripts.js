<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>About Me</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="background-container">
        <canvas id="backgroundCanvas"></canvas>
    </div>
    <div class="content">
        <div class="container">
            <header>
                <h1>About Me</h1>
            </header>
            <section class="profile">
                <img src="profile.jpg" alt="Profile Picture" class="profile-img">
                <div class="bio">
                    <h2>John Doe</h2>
                    <p>Hello! I'm John Doe, a passionate web developer with a love for creating beautiful and functional websites. I specialize in front-end development and have a knack for designing user-friendly interfaces. When I'm not coding, you can find me exploring new technologies, hiking, or playing guitar.</p>
                    <button class="btn" onclick="showAlert()">Contact Me</button>
                    <button class="btn" onclick="scrollToDetails()">View Details</button>
                </div>
            </section>
            <section class="details" id="details">
                <h2>Details</h2>
                <ul>
                    <li><strong>Location:</strong> San Francisco, CA</li>
                    <li><strong>Email:</strong> john.doe@example.com</li>
                    <li><strong>Phone:</strong> (123) 456-7890</li>
                </ul>
            </section>
        </div>
    </div>
    <script src="scripts.js"></script>
</body>
</html>
