import React, { useState } from 'react';
import OdemeYontemleri from '../components/OdemeYontemleri';

export default function Odeme() {
  const [seciliYontem, setSeciliYontem] = useState('iyzico');
  return (
    <div style={{ padding: 40 }}>
      <h2>💳 Ödeme Sayfası</h2>
      <OdemeYontemleri secili={seciliYontem} onSec={setSeciliYontem} />
    </div>
  );
}