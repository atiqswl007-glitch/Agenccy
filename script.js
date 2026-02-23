// script.js

const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const business = document.getElementById('business').value.trim();
    const website = document.getElementById('website').value.trim();
    const problem = document.getElementById('problem').value.trim();

    let msg = `Hi, I am ${name}.%0ABusiness: ${business}%0A`;
    if (website) msg += `Website: ${website}%0A`;
    msg += `Problem: ${problem}`;

    // USA WhatsApp number
    const waNumber = "17865353590"; // replace with your number
    const url = `https://wa.me/${waNumber}?text=${msg}`;

    window.open(url, "_blank");
});

