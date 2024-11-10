export const sanitizeInput = (input:string) => {
    // if (typeof input !== 'string' || "number") return ''; // Sadece string verileri kabul et

    // HTML etiketlerini temizlemek için
    input = input.replace(/<[^>]*>/g, '');
  
    // SQL enjeksiyona karşı zararlı karakterleri kaldırmak için
    input = input.replace(/['";\-#=%*]/g, '');
  
    // XSS saldırılarında kullanılan özel karakterleri maskelemek için
    input = input
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;')
      .replace(/\\/g, '&#92;'); // Backslash karakterini de maskele
  
    // Gereksiz boşlukları temizleme
    input = input.trim();
  
    // Çift boşlukları tek boşluğa indirge
    input = input.replace(/\s\s+/g, ' ');
  
    // Unicode bazlı zararlı karakterleri kaldırma
    input = input.replace(/[^\x00-\x7F]/g, ''); // Sadece ASCII karakterleri kabul et
  
    return input;
      }