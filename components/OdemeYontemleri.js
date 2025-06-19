import React from 'react';

export default function OdemeYontemleri({ secili, onSec }) {
  const yontemler = [
    { id: 'iyzico', ad: 'Kredi Kartı (iyzico)', aciklama: 'Güvenli ödeme altyapısı' },
    { id: 'havale', ad: 'Havale / EFT', aciklama: 'IBAN bilgileri ödeme sonrası gösterilir' },
    { id: 'kapida', ad: 'Kapıda Ödeme', aciklama: 'Teslimat sırasında ödeyin' },
  ];

  return (
    <div className="space-y-3">
      {yontemler.map((y) => (
        <label
          key={y.id}
          className={\`block border p-3 rounded cursor-pointer \${secili === y.id ? 'border-blue-500' : 'border-gray-300'}\`}
        >
          <input
            type="radio"
            name="odeme"
            value={y.id}
            checked={secili === y.id}
            onChange={() => onSec(y.id)}
            className="mr-2"
          />
          <strong>{y.ad}</strong>
          <div className="text-sm text-gray-500">{y.aciklama}</div>
        </label>
      ))}
    </div>
  );
}