// Modul pro získávání objednávek z Flexibee API
const flexibee = require('./flexibee');
// Modul pro Node.js server
const express = require('express');
// Import knihovny axios pouze jednou
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Použití modulu `flexibee`
app.use(express.json());

// Endpoint pro získání objednávek
app.get('/api/orders', async (req, res) => {
  try {
    // Zavolání funkce `getOrders()`
    const orders = await flexibee.getOrders();

    // Vrácení objednávek v JSON formátu
    res.json(orders);
  } catch (error) {
    console.error('Chyba při získávání objednávek:', error);
    res.status(500).json({ error: 'Nastala chyba při získávání dat z Flexibee API.' });
  }
});

// Další endpointy pro faktury, vyhledávání, atd.

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




