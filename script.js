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
        docuement.body.style.backgroundSize ='cover';
        docuement.body.style.backgroundPosition ='center center';
    });
