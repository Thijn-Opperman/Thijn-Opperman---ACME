'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

import { poppins } from "../fonts";

import { productType, CreateProductType } from "../../types/product";
import { truncate, formatPrice } from "../../_lib/scripts";
import { getProducts, createProduct } from "../../lib/api";

export default function ProductsPage() {
  const [products, setProducts] = useState<productType[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState<CreateProductType>({
    title: '',
    price: 0,
    description: '',
    image: '',
    category: '',
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await createProduct(formData);
      setFormData({
        title: '',
        price: 0,
        description: '',
        image: '',
        category: '',
      });
      setShowAddForm(false);
      fetchProducts(); // Refresh the products list
    } catch (error) {
      console.error('Failed to create product:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) || 0 : value
    }));
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-950 dark:to-black"
      />
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-500/10"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-200/40 blur-3xl dark:bg-fuchsia-500/10"
      />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Page header */}
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Browse our collection of products
            </h1>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="inline-flex items-center rounded-xl bg-indigo-600 px-5 py-3 text-white font-semibold shadow hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
            >
              {showAddForm ? 'Cancel' : 'Add Product'}
            </button>
          </div>
        </header>

        {/* Add Product Form */}
        {showAddForm && (
          <div className="mb-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Product Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    placeholder="Enter product title"
                  />
                </div>

                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Price (€)
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    min="0"
                    step="0.01"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    placeholder="0.00"
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  >
                    <option value="">Select a category</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                    <option value="jewelery">Jewelry</option>
                    <option value="electronics">Electronics</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Image URL
                  </label>
                  <input
                    type="url"
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  placeholder="Enter product description"
                />
              </div>

              <div className="flex items-center justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Adding...' : 'Add Product'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-lg">Loading products...</div>
          </div>
        ) : (
          /* Products Grid */
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">No products found. Add your first product above!</p>
              </div>
            ) : (
              products.map((product: productType) => (
                <article
                  key={product.id}
                  className="rounded-2xl bg-white border border-gray-300 shadow-sm overflow-hidden flex flex-col dark:bg-gray-900 dark:border-gray-800"
                >
                  <div className="h-40 grid place-items-center">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <h2 className={`${poppins.className} font-semibold text-lg`}>
                      {product.title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {truncate(product.description, 100)}
                    </p>
                    <div className="mt-auto text-sm font-bold mb-2">
                      € {formatPrice(product.price)}
                    </div>
                    <Link
                      href={`/products/${product.id}`}
                      className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700"
                    >
                      View
                    </Link>
                  </div>
                </article>
              ))
            )}
          </div>
        )}
      </main>
    </section>
  );
}
