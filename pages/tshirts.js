import Image from 'next/image';
import Link from "next/link";
import React from 'react';

export default function Home() {
    return (
      <>

<section className="text-center py-16">
                <Image
                            src="/playerasmarket.jpg"
                            width={400}
                            height={300}
                            alt="termos"
                            className="rounded-lg"
                        />
                <h1 className="text-5xl font-bold">Sneaker</h1>
                <p className="text-xl text-zinc-500">New concept for summer</p>
            </section>

            <section className="py-16 bg-zinc-100 dark:bg-zinc-800">
                <h2 className="text-center text-3xl font-bold mb-8">Featured</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                    <div className="text-center bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-105 duration-300">
                        <Image
                            src="/playerasmarket.jpg"
                            width={400}
                            height={300}
                            alt="termos"
                            className="rounded-lg"
                        />
                        <h3 className="font-semibold">Product 1</h3>
                        <p className="text-zinc-500">$100</p>
                    </div>
                    <div className="text-center bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-105 duration-300">
                    <Image
                            src="/playerasmarket.jpg"
                            width={400}
                            height={300}
                            alt="termos"
                            className="rounded-lg"
                        />
                        <h3 className="font-semibold">Product 2</h3>
                        <p className="text-zinc-500">$120</p>
                    </div>
                    <div className="text-center bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-105 duration-300">
                        <Image
                            src="/playerasmarket.jpg"
                            width={400}
                            height={300}
                            alt="termos"
                            className="rounded-lg"
                        />
                        <h3 className="font-semibold">Product 3</h3>
                        <p className="text-zinc-500">$90</p>
                    </div>
                    <div className="text-center bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-105 duration-300">
                        <Image
                            src="/playerasmarket.jpg"
                            width={400}
                            height={300}
                            alt="termos"
                            className="rounded-lg"
                        />
                        <h3 className="font-semibold">Product 4</h3>
                        <p className="text-zinc-500">$110</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <h2 className="text-center text-3xl font-bold mb-8">Best Seller</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                    <div className="text-center bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-105 duration-300">
                        <Image
                            src="/playerasmarket.jpg"
                            width={400}
                            height={300}
                            alt="termos"
                            className="rounded-lg"
                        />
                        <h3 className="font-semibold">Best Seller 1</h3>
                        <p className="text-zinc-500">$130</p>
                    </div>
                    <div className="text-center bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-105 duration-300">
                        <Image
                            src="/playerasmarket.jpg"
                            width={400}
                            height={300}
                            alt="termos"
                            className="rounded-lg"
                        />
                        <h3 className="font-semibold">Best Seller 2</h3>
                        <p className="text-zinc-500">$140</p>
                    </div>
                    <div className="text-center bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-105 duration-300">
                        <Image
                            src="/playerasmarket.jpg"
                            width={400}
                            height={300}
                            alt="termos"
                            className="rounded-lg"
                        />
                        <h3 className="font-semibold">Best Seller 3</h3>
                        <p className="text-zinc-500">$150</p>
                    </div>
                    <div className="text-center bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-105 duration-300">
                        <Image
                            src="/playerasmarket.jpg"
                            width={400}
                            height={300}
                            alt="termos"
                            className="rounded-lg"
                        />
                        <h3 className="font-semibold">Best Seller 4</h3>
                        <p className="text-zinc-500">$160</p>
                    </div>
                </div>
            </section>

            <footer className="py-8 bg-zinc-200 dark:bg-zinc-800 text-center">
                <p className="text-zinc-500">© 2023 FLARE. All rights reserved.</p>
            </footer>
        </>
    );
}