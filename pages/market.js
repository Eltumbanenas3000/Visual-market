"use client";
import Link from "next/link";
import React from "react";
import Spline from "@splinetool/react-spline";
import Image from 'next/image';


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
                    <li><Link href="demo">iniciar sesion</Link></li>
                    <li><Link href="/">Contacto</Link></li>
                    <li><Link href="#productos">Productos</Link></li>
                    <li><Link href="#precio">Descuentos</Link></li>
                </ul>
                
                           </nav>
            <section className="text-center pt-0">
                <Spline scene="https://prod.spline.design/rYetTYNFZdeIS2I0/scene.splinecode" />
            </section>
            <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-zinc-950 dark:bg-zinc-900 text-zinc-200 shadow">
            <Link href="/bottles">
                <div className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/100 hover:m-4 transition-transform transform hover:scale-105 duration-300 text-center cursor-pointer">
                    <div className="flex flex-col items-center mb-4">
                        <h2 className="text-3xl font-bold mb-4">Termos</h2>
                        <Image
                            src="/termos market.jpg"
                            alt="termos"
                            width={370}
                            height={300}
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </Link>
            <Link href="/bottles">
            <div className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/100 hover:m-4 transition-transform transform hover:scale-105 duration-300 text-center">
           
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
            </Link>
            <Link href="/bottles">
                <div className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/100 hover:m-4 transition-transform transform hover:scale-105 duration-300 text-center">
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
            </Link>
            <Link href="/bottles">
                <div className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/100 hover:m-4 transition-transform transform hover:scale-105 duration-300">
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
            </Link>
                <Link href="/bottles">
                <div className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/100 hover:m-4 transition-transform transform hover:scale-105 duration-300">
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
                </Link>
                <Link href="/bottles">
                <div className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/100 hover:m-4 transition-transform transform hover:scale-105 duration-300 text-center">
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
                </Link>
                <div className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/100 hover:m-4 transition-transform transform hover:scale-105 duration-300 text-center">
                    <h3 className="text-2xl font-bold mb-4">Catalogo</h3>
                    <form className="flex flex-col space-y-2">
                        <input type="email" placeholder="Enter your email" className="p-2 rounded-lg border border-zinc-300 dark:border-zinc-700" />
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">Subscribe</button>
                    </form>
                </div>

                <div className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/100 hover:m-4 transition-transform transform hover:scale-105 duration-300">
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

                <div className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/100 hover:m-4 transition-transform transform hover:scale-105 duration-300">
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

            <section className="py-16 bg-zinc-900 text-zinc-200">
            
                <h2 className="text-center text-3xl font-bold mb-5">Sericios</h2>
                <h3 className="text-center font-bold mb-8">Los servicio pueden variar de precio
                dependiendo de la fase en la que se encuentre tu marca nosotros nos adaptamos para desarrollarla desde donde esté</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                    <div className="text-center bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/100 hover:m-4 transition-transform transform hover:scale-105 duration-300">
                    <div className="flex justify-center items-center"> 
                        <Image
                            src="/chante.jpg"
                            width={400}
                            height={300}
                            alt="termos"
                            className="rounded-lg"
                        />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 mt-4 text-white-900">Diseño de logo</h3>
                    <p className="text-white-300">Desarrollamos el logo de tu marca a tu gusto y semejanza,Transforma tu marca con un logo único y personalizado.
                      creamos diseños que reflejan tu esencia. 
                    Destaca entre la multitud con un logo que realmente te represente.</p>

                    </div>
                    <div className="text-center bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/100 hover:m-4 transition-transform transform hover:scale-105 duration-300">
                    <Image
                            src="/Branding.jpg"
                            width={400}
                            height={300}
                            alt="termos"
                            className="rounded-lg"
                        />
                        <h3 className="text-3xl font-bold mb-4 mt-4 text-white-900">Branding</h3>
                        <p className="text-white-300">Desarrollamos el aspecto visual de la marca y hacemos un estudio mercadológico para que solo tu 
                        descanses y disfrutes como los numeros y el renombre de tu marca sube como la espuma.</p>
                    </div>
                    <div className="text-center bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/100 hover:m-4 transition-transform transform hover:scale-105 duration-300">
                        <Image
                            src="/identidadvisual.jpg"
                            width={400}
                            height={300}
                            alt="termos"
                            className="rounded-lg"
                        />
                        <h3 className="text-3xl font-bold mb-4 mt-4 text-white-900">Identidad visual</h3>
                        <p className="text-white-300">Desarrollamos el aspecto visual de tu marca para que enamores a tu mercado primero por los ojos, 
                        creamos visuales de calidad para que tu marca no pierdad la esencia</p>
                    </div>
                    <div className="text-center bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/100 hover:m-4 transition-transform transform hover:scale-105 duration-300">
                        <Image
                            src="/brandbord.jpg"
                            width={400}
                            height={250}
                            alt="termos"
                            className="rounded-lg"
                        />
                        <h3 className="text-3xl font-bold mb-4 mt-4 text-white-900">Brandbord</h3>
                        <p className="text-white-300">El brandbord te ayuda a que tu marca tenga una plantilla estable y como fuente de recuersos para 
                        tus posts </p>
                    </div>
                </div>
            </section>

            <footer className="py-10 bg-zinc-800 text-center">
                <div className="border-t border-zinc-700 mt-4 mb-6 pt-4 flex justify-center">
                    <div className="flex space-x-4">
                        <Link href="https://www.facebook.com/?locale=es_LA" passHref>
                            
                                <Image alt="Facebook" src="/facebook.png" width={40} height={40} />
                            
                        </Link>
                        <Link href="https://github.com/Eltumbanenas3000" passHref>
                            
                                <Image alt="Github" src="/github.png" width={40} height={40} />
                            
                        </Link>
                        <Link href="https://www.instagram.com/visual._.crafts_?igsh=cmtubDdlNnV0MDk%3D&utm_source=qr" passHref>
                            
                                <Image alt="instagram" src="/instagram.png" width={40} height={40} />
                            
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    );
}