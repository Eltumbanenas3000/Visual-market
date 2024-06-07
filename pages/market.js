"use client";
import Link from "next/link";
import React from "react";
import Spline from "@splinetool/react-spline";
import Image from 'next/image';
import SwitchBtn from "@/components/switch-btn";

export default function Home() {
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
                    <li><Link href="demo.js">iniciar sesion</Link></li>
                    <li><Link href="index.js">Contacto</Link></li>
                    <li><Link href="#productos">Productos</Link></li>
                    <li><Link href="#precio">Descuetos</Link></li>
                </ul>
                <SwitchBtn/>
                           </nav>
            <section className="text-center pt-0">
                <Spline scene="https://prod.spline.design/rYetTYNFZdeIS2I0/scene.splinecode" />
            </section>
            <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-zinc-950 dark:bg-zinc-900 text-zinc-200 shadow">
                <div className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-105 duration-300 text-center">
                    <div className="flex flex-col items-center mb-4">
                        <h2 className="text-3xl font-bold mb-4">Termos</h2>
                        <Image
                            src="/termos market.jpg"
                            alt="termos"
                            width={400}
                            height={300}
                            className="rounded-lg"
                        />
                    </div>
                </div>

                <div className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-105 duration-300 text-center">
                    <h3 className="text-3xl font-bold mb-4">Playeras</h3>
                    <div className="flex justify-center space-x-2">
                    <Image
                            src="/playerasmarket.jpg"
                            width={400}
                            height={300}
                            alt="termos"
                            className="rounded-lg"
                        />
                    </div>
                </div>

                <div className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-105 duration-300 text-center">
                    <h3 className="text-3xl font-bold mb-4">Sellos</h3>
                    <div className="flex justify-center">
                    <Image
                            src="/sellosmarket.jpg"
                            width={355}
                            height={50}
                            alt="termos"
                            className="rounded-lg"
                        />
                    </div>
                </div>

                <div className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-105 duration-300">
                <h3 className="text-3xl font-bold ">Letreros neon</h3> 
                        <div className="flex justify-center">
                    <Image
                            src="/letrerosnmarket.jpg"
                            width={310}
                            height={300}
                            alt="termos"
                            className="rounded-lg"
                        />
                    </div>
                </div>

                <div className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-105 duration-300">
                    <h3 className="text-2xl font-bold mb-2">Imprimibles</h3>
                    <div className="flex justify-center">
                    <Image
                            src="/imprimibles.jpg"
                            width={310}
                            height={300}
                            alt="termos"
                            className="rounded-lg"
                        />
                    </div>
                </div>

                <div className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-105 duration-300 text-center">
                <h3 className="text-2xl font-bold mb-2">Letreros de madera</h3>
                    <div className="flex justify-center">
                <Image
                            src="/letreros.jpg"
                            width={265}
                            height={300}
                            alt="termos"
                            className="rounded-lg"
                        />
                    </div>
                </div>

                <div className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-105 duration-300 text-center">
                    <h3 className="text-2xl font-bold mb-4">Catalogo</h3>
                    <form className="flex flex-col space-y-2">
                        <input type="email" placeholder="Enter your email" className="p-2 rounded-lg border border-zinc-300 dark:border-zinc-700" />
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">Subscribe</button>
                    </form>
                </div>

                <div className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-105 duration-300">
                    <h3 className="text-2xl font-bold mb-4">Testimonios</h3>
                    <blockquote className="mb-4">
                        <p className="italic">text.</p>
                        <footer className="text-sm text-right"></footer>
                    </blockquote>
                    <blockquote>
                        <p className="italic">text</p>
                        <footer className="text-sm text-right"></footer>
                    </blockquote>
                </div>

                <div className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-105 duration-300">
                    <h3 className="text-2xl font-bold mb-4">Provedores</h3>
                    <p>text</p>
                </div>
            </div>
            </section>
            <section >
            <Spline
                scene="https://prod.spline.design/BFYxztzpBWon4nnO/scene.splinecode" 
            />
            </section>

            <section className="py-16 bg-zinc-900">
            
                <h2 className="text-center text-3xl font-bold mb-8">Featured</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                    <div className="text-center bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-105 duration-300">
                        <Image
                            src="/chante.jpg"
                            width={400}
                            height={300}
                            alt="termos"
                            className="rounded-lg"
                        />
                        <h3 className="font-semibold">Product 1</h3>
                        <p className="text-zinc-500">$100</p>
                    </div>
                    <div className="text-center bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-105 duration-300">
                    <Image
                            src="/Branding.jpg"
                            width={400}
                            height={300}
                            alt="termos"
                            className="rounded-lg"
                        />
                        <h3 className="font-semibold">Product 2</h3>
                        <p className="text-zinc-500">$120</p>
                    </div>
                    <div className="text-center bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-105 duration-300">
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
                    <div className="text-center bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-105 duration-300">
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
                    <div className="text-center bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-105 duration-300">
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
                    <div className="text-center bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-105 duration-300">
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
                    <div className="text-center bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-105 duration-300">
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
                    <div className="text-center bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-105 duration-300">
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

            <footer className="py-8 bg-zinc-800 text-center">
                <p className="text-zinc-500">© 2023 FLARE. All rights reserved.</p>
            </footer>
        </>
    );
}