fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        const txt = jokeData.attachments[0].text;
        const display = document.getElementById('joke');
        display.innerHTML = txt;
    });


fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        document.body.style.backgroundImage = `url('${data.message}')`;
        document.body.style.backgroundSize = 'contain'; // Change to 'contain' to fit the image without stretching
        document.body.style.backgroundRepeat = 'repeat'; // Ensure the image doesn't repeat
        document.body.style.backgroundPosition = 'center'; // Center the image
    });
