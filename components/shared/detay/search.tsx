"use client"
import React,{ useState } from 'react';

const searchCustomers = async (query:string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/customers/search?ad=${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Arama işlemi başarısız oldu.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Arama işleminde hata:', error);
  }
};

// Örnek bir arama bileşeni
export default function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const data = await searchCustomers(query);
    setResults(data);
  };

  return (
    <div>
      <input
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
