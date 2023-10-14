import HeaderNav from '@/components/HeaderNav';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsList() {
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
    <div className="container mx-auto p-4 min-h-screen space-y-10">
      <section className="text-center mt-12">
        <h3 className="text-4xl font-bold text-blue-600 mb-4">Why Choose Our Dirt Bikes?</h3>
        <p className="text-lg text-gray-600 mb-8">
          Our dirt bikes are designed for performance and durability, ensuring you can conquer any
          terrain with ease. With features like powerful engines, rugged frames, and comfortable
          seating, our bikes are the perfect companions for your outdoor adventures.
        </p>
        <p className="text-lg text-gray-600 animate-pulse">Two wheels, endless possibilities</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
            />
            <h3 className="text-2xl font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-700 mt-2">{product.description}</p>
            <div className="mt-4">
              <span className="text-2xl font-semibold text-blue-600">
                ₱ {product.price.toFixed(2)}
              </span>
              <Link href="/payment">
                <button className="bg-blue-600 text-white px-4 py-2 ml-4 rounded-full hover:bg-blue-800 transition-colors duration-300">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
