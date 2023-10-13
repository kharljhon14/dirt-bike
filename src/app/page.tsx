import Footer from '@/components/Footer';
import HeaderNav from '@/components/HeaderNav';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const products = [
    {
      id: 1,
      name: 'Dirt Bike Model 1',
      description: 'Experience the thrill of off-roading with our top-of-the-line dirt bike model.',
      price: 96900.0,
      image: '/images/dirtbike1.png',
    },
    {
      id: 2,
      name: 'Dirt Bike Model 2',
      description: 'Unleash your adventure spirit with this rugged and powerful dirt bike.',
      price: 147900.0,
      image: '/images/dirtbike2.png',
    },
    {
      id: 3,
      name: 'Dirt Bike Model 3',
      description: 'The perfect companion for your dirt trail adventures. Get yours today!',
      price: 269900.0,
      image: '/images/dirtbike3.png',
    },
    // Add more product objects with their details
  ];

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <section className="text-center py-12">
        <h2 className="text-3xl font-semibold">Welcome to Dirt Bike E-Commerce</h2>
        <p className="text-gray-600 mt-4">Your one-stop shop for high-performance dirt bikes.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
            />
            <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <div className="mt-4">
              <span className="text-2xl font-semibold">₱ {product.price.toFixed(2)}</span>
              <button className="bg-black text-white px-4 py-2 ml-4 rounded-full hover:bg-black/90">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
