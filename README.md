Müşteri Yönetimi
   +  Müşteri bilgilerini kaydetme, düzenleme ve görüntüleme
   +  İletişim bilgileri, satın alma geçmişi, 
   +  notlar gibi detaylı müşteri profili oluşturma
   +  Müşteri etiketleme ve segmentasyon

İletişim ve Etkileşim Takibi
   + hatırlatıcı oluşturuluyor
   + Otomatik bildirimler
   + reminder delete ve detay pages yapılıcak 
    + E-posta ve SMS entegrasyonu ile müşterilere doğrudan ulaşma
    + Müşteri ile yapılan tüm etkileşimleri (e-postalar, telefon görüşmeleri, toplantılar) kaydetme

 Preferences Satış Yönetimi (satıs yonetımı magza sahıplerıne gıdecek yanı userlere) 

   + Satış fırsatlarını izleme ve yönetme (pipeline yönetimi)
   + Teklif, sözleşme ve satış süreci takibi
   + Satis Teklifi sunuldugunda  mail gonderilicek
   - ** Satış ekibi performans analizleri **

4. Görev ve İş Takibi
    Görev(TASK) oluşturma ve görevlere ekip üyeleri atama
    Görevler için hatırlatıcılar ve son tarih belirleme
    Görev tamamlama oranlarını takip etme

Pazarlama Otomasyonu
    E-posta kampanyaları planlama ve yönetme
    Kampanyaların etkisini ölçme (açılma, tıklanma oranları)
    Otomatik müşteri segmentasyonu ve hedefleme

Raporlama ve Analiz

    Müşteri davranış analizi ve satış trendleri raporlama
    Satış tahminleri ve performans değerlendirmeleri
    Pazarlama ve müşteri memnuniyeti analizleri

Destek ve Müşteri Hizmetleri Yönetimi

    Destek taleplerini kaydetme ve durumunu izleme
    Çözüm süresi ve müşteri memnuniyeti gibi ölçümler
    Sıkça Sorulan Sorular (SSS) ve bilgi tabanı yönetimi

Entegrasyonlar

    E-posta, sosyal medya, telefon sistemleri ile entegrasyon
    E-ticaret, muhasebe ve ERP sistemleriyle bağlantı
    API desteği ile diğer araçlara kolay entegrasyon

Mobil Erişim

    CRM verilerine mobil cihazlardan erişim sağlama
    Müşteri bilgilerine her yerden ulaşım
    Satış ekibi için offline erişim özellikleri

Güvenlik ve Erişim Kontrolü

    Kullanıcı rolleri ve erişim izinleri yönetimi
    Verilerin yedeklenmesi ve güvenli depolanması
    GDPR ve KVKK gibi veri gizliliği düzenlemelerine uyum

Özelleştirilebilirlik

    Kullanıcı arayüzü ve alanların kişiselleştirilebilmesi
    İş akışlarını ve otomasyonları özelleştirme imkanı
    Farklı departmanların ihtiyaçlarına göre yapılandırılabilir modüller


clerak auth custom görev ve logın degılse sadece ana sayfa ogın oldukdan sonra /dashboard vb
https://clerk.com/docs/references/nextjs/clerk-middleware#protect-routes-based-on-user-authentication-status  

# anlık olarak değişimlerine kontrol edilicek
    + bussines delete
    + bussines edit 
    + personal delete
    + personal edit
    + task delete
    + tasks edit 


# Gereken yerde 
```javascript
router.push("/bussines/task");
router.refresh();
```

#All check app
+ customer complated 
+ customer in reminder complated 
+ bussines 

+ /bussines/personal create => backendden create ıcın message donmuyor
+ /bussines/personal/detail 
+ /bussines/personal/detail => delete 
+ /bussines/personal/edit  

