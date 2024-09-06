const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const stationSelect = document.getElementById('stationSelect');
const radioPlayer = document.getElementById('radioPlayer');
const backgroundImageInput = document.getElementById('backgroundImage');

// Başlangıç radyo istasyonu
radioPlayer.src = stationSelect.value;

// Radyo istasyonu değiştiğinde oynatıcı kaynağını güncelle
stationSelect.addEventListener('change', function() {
    radioPlayer.src = this.value;
    radioPlayer.play();  // Otomatik oynatma
});

// Oynat butonuna tıklanınca oynatıcıyı başlat
playButton.addEventListener('click', function() {
    radioPlayer.play();
});

// Durdur butonuna tıklanınca oynatıcıyı durdur
pauseButton.addEventListener('click', function() {
    radioPlayer.pause();
});

// Arka plan resmini kullanıcıdan yükle
backgroundImageInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        document.body.style.backgroundImage = `url(${e.target.result})`;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});
