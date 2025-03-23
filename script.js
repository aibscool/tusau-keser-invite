function getGuestNames() {
    const urlParams = new URLSearchParams(window.location.search);
    const names = urlParams.get('name');

    if (!names) return {text: 'Қонақтар', suffix: 'Сіздерді ұлымыз'};

    const decodedNames = decodeURIComponent(names).split(',');
    if (decodedNames.length === 1) {
        return {text: decodedNames[0], suffix: 'Сізді ұлымыз'};
    } else {
        return {text: decodedNames.join(' және '), suffix: 'Сіздерді ұлымыз'};
    }
}

function updateCountdown() {
    const eventDate = new Date("2025-07-20T13:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("countdown").textContent = `${days} күн ${hours} сағат ${minutes} минут`;
}

window.onload = function () {
    const guestInfo = getGuestNames();
    document.getElementById('guestName').innerHTML = `Құрметті ${guestInfo.text}!<br>${guestInfo.suffix}`;
    updateCountdown();
    setInterval(updateCountdown, 1000);
};
