function getGuestNames() {
    const urlParams = new URLSearchParams(window.location.search);
    const names = urlParams.get('name');

    if (!names) return { text: 'Қонақтар', suffix: 'Сіздерді немереміз' };

    const decodedNames = decodeURIComponent(names).split(',');
    return decodedNames.length === 1
        ? { text: decodedNames[0], suffix: 'Сізді немереміз' }
        : { text: decodedNames.join(' - '), suffix: 'Сіздерді немереміз' };
}

function updateCountdown() {
    const countdownElement = document.getElementById("countdown");
    if (!countdownElement) return;

    const eventDate = new Date("2025-05-18T13:00:00").getTime();
    const now = Date.now();
    const timeLeft = eventDate - now;

    if (timeLeft <= 0) {
        countdownElement.textContent = "Мереке басталды!";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    countdownElement.textContent = `${days} күн ${hours} сағат ${minutes} минут`;
}

window.onload = function () {
    const guestInfo = getGuestNames();
    document.getElementById('guestName').innerHTML = `Құрметті ${guestInfo.text}!<br>${guestInfo.suffix}`;
    document.getElementById('footer').innerHTML = `Той иелері <br> Атасы Қуаныш <br> Апасы Гүлназ`;

    const buttonsContainer = document.getElementById('confirmationButton');
    if (buttonsContainer) {
        const googleFormUrl = "https://forms.gle/BwhMZdqBua3CfDWeA"

        buttonsContainer.innerHTML = `
            <a href="${googleFormUrl}" target="_blank" class="button confirm">Қатысуымды растау</a>
        `;
    }

    updateCountdown();
    var countdownInterval = setInterval(updateCountdown, 1000);
};