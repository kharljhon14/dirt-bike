import Link from 'next/link';

export default function HeaderNav() {
  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dirt Bike E-Commerce</h1>
        <nav>
          <ul className="flex space-x-4">
            <li className="hover:text-white cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link href="/products">Products</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link href="/payment">Payment</Link>{' '}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
