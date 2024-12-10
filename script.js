document.getElementById('generateBtn').addEventListener('click', generateQuote);

function generateQuote() {
    const category = 'happiness'; // Set desired category (optional)
    const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

    fetch(url, {
        method: 'GET',
        headers: { 'X-Api-Key': 'MOEDp05G2Vu7Ki+b9zJuDA==tMxqFf4Wg3X9SzYI' }
    })
    .then(response => response.json())
    .then(data => {
        const quote = data[0].quote;
        const author = data[0].author;

        // Display the quote and author in the HTML
        document.getElementById('quote').innerText = `"${quote}"`;
        document.getElementById('author').innerText = `— ${author}`;
    })
    .catch(error => {
        console.error('Error fetching the quote:', error);
        document.getElementById('quote').innerText = "Sorry, we couldn't retrieve a quote at the moment.";
        document.getElementById('author').innerText = '';
    });
}
