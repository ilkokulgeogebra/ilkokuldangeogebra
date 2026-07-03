// Sayfa yüklendiğinde etkinlikleri oluştur
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('activities-container');

    // Eğer activitiesData boşsa veya bulunamadıysa uyarı ver
    if (!activitiesData || activitiesData.length === 0) {
        container.innerHTML = '<p style="text-align:center; grid-column: 1/-1;">Henüz etkinlik eklenmemiş.</p>';
        return;
    }

    // Her bir etkinlik için HTML kartı oluştur ve sayfaya ekle
    activitiesData.forEach(activity => {
        const card = document.createElement('div');
        card.className = 'activity-card';

        card.innerHTML = `
            <div class="card-image-placeholder">
                ${activity.icon}
            </div>
            <div class="card-content">
                <span class="card-grade">${activity.grade}</span>
                <h3 class="card-title">${activity.title}</h3>
                <p class="card-desc">${activity.description}</p>
                <a href="${activity.link}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
                    Etkinliğe Git
                </a>
            </div>
        `;

        container.appendChild(card);
    });
});

// Basit smooth scroll (Sayfa içi linklere tıklayınca yumuşak kaydırma)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Proje Raporu Sekme (Tab) Mantığı
document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Tüm aktif sınıfları kaldır
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Tıklanan butonu aktif yap
            btn.classList.add('active');

            // İlgili içeriği göster
            const targetId = btn.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            if(targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});

// Geri Bildirim Formu Mantığı
document.addEventListener('DOMContentLoaded', () => {
    const meslekSelect = document.getElementById('meslek');
    const adayGrup = document.getElementById('aday-sinif-group');
    const ogretmenGrup = document.getElementById('ogretmen-sinif-group');
    const adaySelect = document.getElementById('aday-sinif');
    const ogretmenSelect = document.getElementById('ogretmen-sinif');

    if (meslekSelect) {
        meslekSelect.addEventListener('change', function() {
            // Önce ikisini de gizle ve zorunluluğu kaldır
            adayGrup.style.display = 'none';
            ogretmenGrup.style.display = 'none';
            adaySelect.removeAttribute('required');
            ogretmenSelect.removeAttribute('required');

            if (this.value === 'Öğretmen Adayı (Öğrenci)') {
                adayGrup.style.display = 'block';
                adaySelect.setAttribute('required', 'required');
            } else if (this.value === 'Sınıf Öğretmeni (Aktif)') {
                ogretmenGrup.style.display = 'block';
                ogretmenSelect.setAttribute('required', 'required');
            }
        });
    }
});
