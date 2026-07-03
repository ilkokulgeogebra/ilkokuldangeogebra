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
