const supabaseUrl = 'BURAYA_SUPABASE_URL_ADRESINI_YAZ'; 
const supabaseKey = 'sb_publishable_293ICFz4pQCpwCxoroVhTg_769LovHX';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function urunleriGetir() {
    const { data, error } = await supabase.from('urunler').select('*');
    const grid = document.getElementById('urun-grid');

    if (error) {
        grid.innerHTML = `<p>Hata: ${error.message}</p>`;
        return;
    }

    grid.innerHTML = data.map(u => `
        <div class="card">
            <h3>${u.isim}</h3>
            <p>Fiyat: ${u.fiyat}</p>
            <p><small>Satıcı: ${u.yazar}</small></p>
            <button>Satın Al</button>
        </div>
    `).join('');
}

// Tema değiştirici
document.getElementById('theme-btn').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

urunleriGetir();
