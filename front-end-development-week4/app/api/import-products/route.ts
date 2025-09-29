import { NextResponse } from 'next/server';
import axios from 'axios';
import { supabase } from '@/lib/supabase';

interface FakeStoreProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export async function POST() {
  try {
    console.log('Starting product import...');
    
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
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log(`Successfully imported ${products.length} products to Supabase!`);
    
    return NextResponse.json({ 
      message: `Successfully imported ${products.length} products`,
      count: products.length 
    });
  } catch (error) {
    console.error('Failed to import products:', error);
    return NextResponse.json({ error: 'Failed to import products' }, { status: 500 });
  }
}
