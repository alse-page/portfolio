const rawEmbedding = $input.item.json.data[0].embedding;
const vector = Array.isArray(rawEmbedding) ? rawEmbedding : Array.from(Object.values(rawEmbedding));

const product = $('Loop Over Items').item.json;

const siteUrl = "https://YOUR_WEBSITE_URL.com"; 

const productLink = `${siteUrl}/?sku=${product.SKU}`;

const contentForAI = `Product: ${product['Product Name']} | Price: $${product['Price (€)']} | Link: ${productLink} | Specs: ${product.Specifications} | Description: ${product.Description} | Suitable for: ${product['Suitable Fish']}`;

const cleanData = {
  id: parseInt(product.row_number), 
  vector: vector,                   
  payload: {
        rag_content: contentForAI,
    
        sku: product.SKU,
    title: product['Product Name'],  
    price: product['Price (€)'],
    description: product.Description,
    category: product.Category,
    specs: product.Specifications,
    fish: product['Suitable Fish'],
    availability: product.Availability
  }
};

return JSON.parse(JSON.stringify(cleanData));
