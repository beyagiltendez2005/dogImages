document.getElementById('new-image').addEventListener('click', fetchDogImage);

function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const imgElement = document.getElementById('dog-image');
            imgElement.src = data.message;
        })
        .catch(error => console.error('Error fetching the dog image:', error));
}

// Fetch an initial image when the page loads
fetchDogImage();