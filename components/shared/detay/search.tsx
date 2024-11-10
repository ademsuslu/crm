"use client"
import React,{ useState } from 'react';


// Örnek bir arama bileşeni
export default function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const handleSearch = async () => {
    try {
      const response = await fetch(`https://crm-backend-production-e80f.up.railway.app/api/customers/search?ad=${query}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Arama işlemi başarısız oldu.');
      }
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Arama işleminde hata:', error);
    }
  };

  return (
    <div>
      <input
      className='text-black'
        type="text"
        placeholder="Enter Customer Name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Ara</button>
      
      {/* Sonuçları göster */}
      <ul>
        {results?.map((customer:any) => (
          <li className='text-white' key={customer._id}>{customer.ad} {customer.soyad}</li>
        ))}
      </ul>
    </div>
  );
}
