const urunler = [
    { isim: "Oyun Scripti V1", fiyat: "10$", yazar: "Ahmet" },
    { isim: "Web Paneli", fiyat: "25$", yazar: "Mehmet" }
];

const grid = document.getElementById('urun-grid');

function listele() {
    grid.innerHTML = urunler.map(u => `
        <div class="card">
            <h3>${u.isim}</h3>
            <p>Fiyat: ${u.fiyat}</p>
            <p><small>Satıcı: ${u.yazar}</small></p>
            <button>Satın Al</button>
        </div>
    `).join('');
}

// Mod Değiştirici
document.getElementById('theme-btn').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

listele();
