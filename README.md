# TÜBİTAK GeoGebra Projesi Web Sitesi

Bu proje, kodlama bilmeden de kolayca yeni GeoGebra etkinlikleri ekleyebilmeniz için son derece basit ve anlaşılır bir yapıda hazırlanmıştır.

## Siteyi Nasıl Görüntülerim?

1. Proje klasöründeki `index.html` dosyasına çift tıklayarak varsayılan tarayıcınızda açabilirsiniz.
2. İnternet olmadan da bilgisayarınızda tüm tasarımı görebilir ve test edebilirsiniz.

## Yeni Etkinlik Nasıl Eklenir?

Sadece **`js/data.js`** dosyasını düzenlemeniz yeterlidir. HTML veya CSS bilmenize gerek yoktur.

1. `js` klasörüne girin ve `data.js` dosyasını Not Defteri (Notepad) veya herhangi bir metin editörü ile açın.
2. Dosyanın içindeki `activitiesData` listesine yeni bir etkinlik ekleyin. Format şu şekildedir:

```javascript
    {
        id: 4, // Sıra numarası
        title: "Etkinlik Başlığı",
        grade: "1. Sınıf", // Sınıf seviyesi
        description: "Etkinliğin ne işe yaradığını anlatan kısa bir açıklama.",
        link: "https://www.geogebra.org/...", // GeoGebra linkiniz
        icon: "📚" // Windows'ta (Windows Tuşu + Nokta) kısayoluyla emoji ekleyebilirsiniz
    }
```

3. Dosyayı kaydedin ve tarayıcınızda sayfayı yenileyin. Yeni etkinliğiniz tasarımda otomatik olarak belirecektir!

## Siteyi İnternette Nasıl Yayınlarım?

Bu site hiçbir sunucu kurulumuna (backend) ihtiyaç duymaz (Statik Site).
Github Pages, Netlify veya Vercel gibi tamamen **ücretsiz** platformlara bu klasörü sürükleyip bırakarak (veya yükleyerek) sitenizi saniyeler içinde tüm dünyaya açabilirsiniz.
