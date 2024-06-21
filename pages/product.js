import Image from 'next/image';
import Link from 'next/link';

export default function Widget() {
    return (
        <>
            <nav className="navbar fixed top-0 left-0 right-0 z-50 bg-zinc-900 shadow-md">
                <div className="logo">
                    <Image
                        src="/visual crafts banco.png"
                        width={150}
                        height={100}
                        alt="logo"
                    />
                </div>
                <ul className="flex space-x-4">
                    <li><Link href="#">Inicio</Link></li>
                    <li><Link href="demo">Iniciar Sesion</Link></li>
                    <li><Link href="/">Contacto</Link></li>
                    <li><Link href="#productos">Productos</Link></li>
                    <li><Link href="#precio">Descuentos</Link></li>
                </ul>
            </nav>

            <div className="bg-zinc-100 dark:bg-zinc-900 min-h-screen p-4">
                <header className="flex justify-between items-center py-4">
                    <h1 className="text-2xl font-bold">module</h1>
                    <nav>
                        <Link href="#" className="text-zinc-600 dark:text-zinc-300 mx-2">Shop</Link>
                        <Link href="#" className="text-zinc-600 dark:text-zinc-300 mx-2">About</Link>
                        <Link href="#" className="text-zinc-600 dark:text-zinc-300 mx-2">Contact</Link>
                    </nav>
                </header>
                <main className="max-w-7xl mx-auto">
                    <section className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-md flex flex-col md:flex-row">
                        <div className="flex-1">
                            <Image
                                src="https://placehold.co/400x400"
                                alt="Eames Molded Fiberglass Side Chair"
                                width={400}
                                height={400}
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                        <div className="flex-1 mt-8 md:mt-0 md:ml-8">
                            <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-200">Eames Molded Fiberglass Side Chair</h2>
                            <p className="text-zinc-600 dark:text-zinc-400 mt-4">A modern classic, the Eames Molded Fiberglass Side Chair is a stylish and comfortable addition to any space.</p>
                            <div className="mt-4">
                                <span className="text-zinc-600 dark:text-zinc-400">Colors:</span>
                                <div className="flex space-x-2 mt-2">
                                    <button className="w-8 h-8 bg-yellow-500 rounded-full"></button>
                                    <button className="w-8 h-8 bg-blue-500 rounded-full"></button>
                                    <button className="w-8 h-8 bg-purple-500 rounded-full"></button>
                                    <button className="w-8 h-8 bg-zinc-500 rounded-full"></button>
                                    <button className="w-8 h-8 bg-green-500 rounded-full"></button>
                                </div>
                            </div>
                            <div className="mt-4">
                                <span className="text-zinc-600 dark:text-zinc-400">Quantity:</span>
                                <input type="number" min="1" defaultValue="1" className="w-16 p-2 border border-zinc-300 dark:border-zinc-700 rounded-lg ml-2" />
                            </div>
                            <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg">Add to Cart</button>
                        </div>
                    </section>
                    <section className="mt-12">
                        <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200 mb-4">Related Items</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md">
                                <Image
                                    src="https://placehold.co/200x200"
                                    alt="Related Item 1"
                                    width={200}
                                    height={200}
                                    className="w-full h-auto rounded-lg"
                                />
                                <h4 className="mt-4 text-lg font-semibold text-zinc-800 dark:text-zinc-200">Kindle Paperwhite</h4>
                                <p className="text-zinc-600 dark:text-zinc-400">$129.99</p>
                            </div>
                            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md">
                                <Image
                                    src="https://placehold.co/200x200"
                                    alt="Related Item 2"
                                    width={200}
                                    height={200}
                                    className="w-full h-auto rounded-lg"
                                />
                                <h4 className="mt-4 text-lg font-semibold text-zinc-800 dark:text-zinc-200">Sonos One</h4>
                                <p className="text-zinc-600 dark:text-zinc-400">$199.99</p>
                            </div>
                            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md">
                                <Image
                                    src="https://placehold.co/200x200"
                                    alt="Related Item 3"
                                    width={200}
                                    height={200}
                                    className="w-full h-auto rounded-lg"
                                />
                                <h4 className="mt-4 text-lg font-semibold text-zinc-800 dark:text-zinc-200">Google Home</h4>
                                <p className="text-zinc-600 dark:text-zinc-400">$99.99</p>
                            </div>
                            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md">
                                <Image
                                    src="https://placehold.co/200x200"
                                    alt="Related Item 4"
                                    width={200}
                                    height={200}
                                    className="w-full h-auto rounded-lg"
                                />
                                <h4 className="mt-4 text-lg font-semibold text-zinc-800 dark:text-zinc-200">Eames Plastic Armchair</h4>
                                <p className="text-zinc-600 dark:text-zinc-400">$249.99</p>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="mt-12 py-8 text-center text-zinc-600 dark:text-zinc-400">
                    <div className="flex justify-center space-x-4">
                        <Link href="#" className="hover:underline">Terms</Link>
                        <Link href="#" className="hover:underline">Privacy</Link>
                        <Link href="#" className="hover:underline">Contact</Link>
                    </div>
                    <p className="mt-4">&copy; 2023 module. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
}
