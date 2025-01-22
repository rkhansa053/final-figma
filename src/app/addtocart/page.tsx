'use client';

import { useCart } from '@/app/CONTEXT/cartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const calculateTotal = () =>
    cart.reduce((total, item) => total + (item.price || 0) * (item.quantity || 1), 0);

  if (cart.length === 0) {
    return <h1 className="text-2xl font-bold text-center mt-10">Your cart is empty</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item._id} className="flex items-start gap-4">
              <div className="w-28 h-28 bg-gray-100 p-2 rounded-md">
                {/* Correctly access the image URL from the item object */}
                <Image
                  src={typeof item.image === 'string' ? item.image : item.image.url}
                  alt={item.productName}
                  className="w-full h-full object-contain"
                  width={100} // You can adjust width and height as needed
                  height={100}
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold">{item.productName}</h3>
                <p className="text-sm text-gray-500">${item.price}</p>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="mt-2 text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item._id, (item.quantity || 1) - 1)}
                  className="px-2 py-1 border border-gray-300"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item._id, (item.quantity || 1) + 1)}
                  className="px-2 py-1 border border-gray-300"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>
          <p>Total: ${calculateTotal()}</p>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded">
            <Link href="/checkOut">Checkout</Link>
            </button>
        </div>
      </div>
    </div>
  );
}
