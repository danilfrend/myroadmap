document.addEventListener("DOMContentLoaded", function() {

    const cookieBanner = document.getElementById('cookieConsent');
    const cookieBtn = document.getElementById('cookies');

    if (localStorage.getItem('cookieConsent')) {
        cookieBanner.style.display = "none";
    } else {
        cookieBanner.style.display = "block";
    }

    if (cookieBtn) {
            cookieBtn.addEventListener("click", function() {
            localStorage.setItem('cookieConsent', 'true');
            document.getElementById('cookieConsent').style.display = "none";
        })
    };
});

