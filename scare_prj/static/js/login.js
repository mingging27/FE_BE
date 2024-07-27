window.onload = function() {
    {% if login_failed %}
    document.getElementById('error-message').style.display = 'flex';
    {% endif %}
}