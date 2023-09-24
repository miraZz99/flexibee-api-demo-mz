import React, { useEffect, useState } from 'react';
import axios from 'axios';

function OrderList() {
  const [orders, setOrders] = useState([]);
  const vydana = 'objednavka-vydana';

  useEffect(() => {
    // Získání objednávek z backendu
    axios.get('/api/orders')
      .then(response => {
        setOrders(response.data.winstrom[vydana]);
      })
      .catch(error => {
        console.error('Chyba při načítání objednávek:', error);
      });
  }, []);

  return (
    // Povinné sloupečky jsou uživatel, kód, kontaktJmeno, 
    // fakturační údaje (město, stát, ulice, psč, ič, dič), forma dopravy, způsob platby, stav, všechny položky (kód, název), 
    // celková cena objednávky a faktura (pokud je).
    <div>
      <h2>Seznam objednávek</h2>
      <table>
        <thead>
          <tr>
            <th>Uživatel</th>
            <th>Kód</th>
            <th>kontaktJmeno</th>
            {/* <th>Fakturační údaje</th> */}
            <th>Forma dopravy</th>
            <th>Stav</th>
            {/* <th>Všechny položky</th> */}
            <th>Celková cena objednávky</th>
            <th>Faktura</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map(order => (
            <tr key={order.id}>
              <td>{order.uzivatel.slice(5)}</td>
              <td>{order.kod}</td>
              <td>{order.kontaktJmeno}</td>
              <td>{order.formaDopravy.slice(5)}</td>
              <td>{order.stavDoklObch.slice(5)}</td>
              <td>{order.sumCelkem}Kč</td>
              <td>{order.bezPolozek}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderList;




