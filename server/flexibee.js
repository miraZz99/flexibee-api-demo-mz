const axios = require('axios');

// URL Flexibee API pro objednávky
const FLEXIBEE_API_URL = 'https://demo.flexibee.eu/c/demo/objednavka-prijata/';

// Funkce pro získání objednávek
const getOrders = async () => {
    // Vytvoření objektu s parametry požadavku
    const params = {
      filter: {
        // Filtrovat objednávky podle stavu
        stav: 'vydana',
      },
    };
  
    // Zaslání POST požadavku na získání objednávek
    const response = await axios.post(`https://demo.flexibee.eu/c/demo/objednavka-prijata/query.json`, params, {
      headers: { 'Content-Type': 'application/json' },
    });
  
    // Vrácení objednávek v JSON formátu
    return response.data;
  };
  
  
  

module.exports = {
  getOrders,
};



