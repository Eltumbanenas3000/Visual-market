'use client';
import Link from "next/link";
import React from "react";
import Spline from '@splinetool/react-spline';

export default function Home() {
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img
                        src="visual crafts banco.png"
                        width="150"
                        height="100"
                        alt="logo"
                    />
                </div>
                <ul className="flex space-x-4">
                    <li><Link href="#">Inicio</Link></li>
                    <li><Link href="#nosotros">Nosotros</Link></li>
                    <li><Link href="#contacto">Contacto</Link></li>
                    <li><Link href="#productos">Productos</Link></li>
                    <li><Link href="#precio">Precio</Link></li>
                </ul>
            </nav>
            
            <section className="text-center">
                <Spline scene="https://prod.spline.design/rYetTYNFZdeIS2I0/scene.splinecode" />
            </section>
     
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
                <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                        <img src="https://placehold.co/50x50" alt="Profile Picture" className="rounded-full mr-4" />
                        <div>
                            <h2 className="text-xl font-bold">Michael Andreuzza</h2>
                            <p className="text-sm">UI Design & Web developer</p>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Hey, welcome to my site!</h3>
                    <p>Im a digital designer, developer, and surfer from Malibu. In the digital world, I craft interfaces and dive into coding intricacies.</p>
                    <p className="mt-2">Beyond screens, I find solace and joy riding waves along Malibu's shores. My life blends tech and nature, coding sessions, and catching waves.</p>
                </div>
              
                <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg text-center">
                    <h3 className="text-3xl font-bold mb-4">Find me on</h3>
                    <div className="flex justify-center space-x-2">
                        <button className="bg-zinc-200 dark:bg-zinc-700 p-2 rounded-full">Fb</button>
                        <button className="bg-zinc-200 dark:bg-zinc-700 p-2 rounded-full">Tw</button>
                        <button className="bg-zinc-200 dark:bg-zinc-700 p-2 rounded-full">Ig</button>
                        <button className="bg-zinc-200 dark:bg-zinc-700 p-2 rounded-full">Dr</button>
                        <button className="bg-zinc-200 dark:bg-zinc-700 p-2 rounded-full">Be</button>
                    </div>
                </div>
              
                <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg text-center">
                    <h3 className="text-3xl font-bold mb-4">Grab my résumé!</h3>
                    <p className="mb-4">Unlock the doors to explore the rich tapestry of my professional journey and accomplishments.</p>
                    <button className="bg-blue-500 text-white p-2 rounded-lg">Download my CV</button>
                </div>
              
                <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg">
                    <img src="https://placehold.co/300x200" alt="Project Image" className="rounded-lg mb-4" />
                    <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-zinc-200 dark:bg-zinc-700 text-sm px-2 py-1 rounded">Astro</span>
                        <span className="bg-zinc-200 dark:bg-zinc-700 text-sm px-2 py-1 rounded">Tailwind CSS</span>
                    </div>
                    <h3 className="text-2xl font-bold">Lexington</h3>
                    <p>Pre and premium Multi-page theme and UI kits for freelancers, designers, businesses, and personal use. Beautifully crafted with Astro and Tailwind CSS — Simple & easy to customize.</p>
                </div>
              
                <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-2">Monomod</h3>
                    <p className="mb-4">Design & development subscriptions for startups.</p>
                    <p>Monomod streamlines the design process with a fixed monthly rate and limitless design requests. Say goodbye to phone calls and extensive contracts; reach out to Monomod directly at any time. Embrace flexibility, pause or terminate your subscription whenever you need.</p>
                    <img src="https://placehold.co/300x200" alt="Monomod Logo" className="rounded-lg mt-4" />
                </div>
              
                <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg text-center">
                    <img src="https://placehold.co/100x100" alt="Figma Logo" className="mx-auto mb-4" />
                    <h3 className="text-xl font-bold">Figma Community</h3>
                </div>
              
                <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg text-center">
                    <h3 className="text-2xl font-bold mb-4">Subscribe to my newsletter</h3>
                    <form className="flex flex-col space-y-2">
                        <input type="email" placeholder="Enter your email" className="p-2 rounded-lg border border-zinc-300 dark:border-zinc-700" />
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">Subscribe</button>
                    </form>
                </div>
              
                <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-4">Testimonials</h3>
                    <blockquote className="mb-4">
                        <p className="italic">"Big fan of your themes. They're well-organized, look clean, and are fast."</p>
                        <footer className="text-sm text-right">- Kevin Fossil, Developer</footer>
                    </blockquote>
                    <blockquote>
                        <p className="italic">"Amazing resource using @astrotobuild and @tailwindcss! I got it a week ago and have found the contents really useful. 5/5"</p>
                        <footer className="text-sm text-right">- James, Entrepreneur</footer>
                    </blockquote>
                </div>
              
                <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-4">As a digital designer, my expertise lies in crafting distinctive visual identities for digital products.</h3>
                    <p>I hold the belief that an engaging design begins with shared values, transparent communication, and a genuine respect for the audience.</p>
                </div>
            </div>
            
            <section className="text-center py-16">
                <img src="https://placehold.co/600x400" alt="Sneaker" className="mx-auto mb-4" />
                <h1 className="text-5xl font-bold">Sneaker</h1>
                <p className="text-xl text-zinc-500">New concept for summer</p>
            </section>
          
            <section className="py-16 bg-zinc-100 dark:bg-zinc-800">
                <h2 className="text-center text-3xl font-bold mb-8">Featured</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                    <div className="text-center">
                        <img src="https://placehold.co/200x150" alt="Product 1" className="mx-auto mb-4" />
                        <h3 className="font-semibold">Product 1</h3>
                        <p className="text-zinc-500">$100</p>
                    </div>
                    <div className="text-center">
                        <img src="https://placehold.co/200x150" alt="Product 2" className="mx-auto mb-4" />
                        <h3 className="font-semibold">Product 2</h3>
                        <p className="text-zinc-500">$120</p>
                    </div>
                    <div className="text-center">
                        <img src="https://placehold.co/200x150" alt="Product 3" className="mx-auto mb-4" />
                        <h3 className="font-semibold">Product 3</h3>
                        <p className="text-zinc-500">$90</p>
                    </div>
                    <div className="text-center">
                        <img src="https://placehold.co/200x150" alt="Product 4" className="mx-auto mb-4" />
                        <h3 className="font-semibold">Product 4</h3>
                        <p className="text-zinc-500">$110</p>
                    </div>
                </div>
            </section>
          
            <section className="py-16">
                <h2 className="text-center text-3xl font-bold mb-8">Best Seller</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                    <div className="text-center">
                        <img src="https://placehold.co/200x150" alt="Best Seller 1" className="mx-auto mb-4" />
                        <h3 className="font-semibold">Best Seller 1</h3>
                        <p className="text-zinc-500">$130</p>
                    </div>
                    <div className="text-center">
                        <img src="https://placehold.co/200x150" alt="Best Seller 2" className="mx-auto mb-4" />
                        <h3 className="font-semibold">Best Seller 2</h3>
                        <p className="text-zinc-500">$140</p>
                    </div>
                    <div className="text-center">
                        <img src="https://placehold.co/200x150" alt="Best Seller 3" className="mx-auto mb-4" />
                        <h3 className="font-semibold">Best Seller 3</h3>
                        <p className="text-zinc-500">$150</p>
                    </div>
                    <div className="text-center">
                        <img src="https://placehold.co/200x150" alt="Best Seller 4" className="mx-auto mb-4" />
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
