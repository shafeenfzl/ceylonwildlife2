document.getElementById('newsletter_form').addEventListener('submit', function(e) {
    e.preventDefault();
    let email = document.getElementById('email').value;

    let subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
    subscriptions.push(email);
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));

    alert('You have successfully subscribed to our newsletter. Thank you.');
});

