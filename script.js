function getGuestNames() {
    const urlParams = new URLSearchParams(window.location.search);
    const names = urlParams.get('name');

    if (!names) return { text: 'Қонақтар', suffix: 'Сіздерді ұлымыз', footer: 'Сіздерді осы ерекше күні күтеміз!' };

    const decodedNames = decodeURIComponent(names).split(',');
    if (decodedNames.length === 1) {
        return { text: decodedNames[0], suffix: 'Сізді ұлымыз', footer: 'Сізді осы ерекше күні күтеміз!' };
    } else {
        return { text: decodedNames.join(' және '), suffix: 'Сіздерді ұлымыз', footer: 'Сіздерді осы ерекше күні күтеміз!' };
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

window.onload = function() {
    const guestInfo = getGuestNames();
    document.getElementById('guestName').textContent = `Құрметті ${guestInfo.text}! ${guestInfo.suffix} Райымбек тұсаукесеріне шақырамыз.`;
    document.getElementById('footer').textContent = guestInfo.footer;

    updateCountdown();
    setInterval(updateCountdown, 1000);
};
