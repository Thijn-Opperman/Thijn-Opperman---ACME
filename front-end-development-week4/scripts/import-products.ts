import axios from 'axios';
import { supabase } from '../lib/supabase';

interface FakeStoreProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

async function importProducts() {
  try {
    console.log('Fetching products from Fake Store API...');
    
    // Haal producten op van Fake Store API
    const response = await axios.get('https://fakestoreapi.com/products');
    const products: FakeStoreProduct[] = response.data;

    console.log(`Found ${products.length} products`);

    // Importeer producten naar Supabase
    const { data, error } = await supabase
      .from('products')
      .upsert(
        products.map(product => ({
          id: product.id,
          title: product.title,
          price: product.price,
          description: product.description,
          category: product.category,
          image: product.image,
        })),
        { onConflict: 'id' }
      );

    if (error) {
      console.error('Error importing products:', error);
      return;
    }

    console.log(`Successfully imported ${products.length} products to Supabase!`);
  } catch (error) {
    console.error('Failed to import products:', error);
  }
}

// Voer het script uit als het direct wordt aangeroepen
if (require.main === module) {
  importProducts();
}

export { importProducts };
