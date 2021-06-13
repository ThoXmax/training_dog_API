axios.get('https://dog.ceo/api/breeds/image/random')
    .then(function(response) {
        document.getElementById("showDogImage").src = response.data.message;
    })
    .catch(function(error) {
        console.log(error);
    });