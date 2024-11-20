import Link from "next/link";
import Image from "next/image";
import React from 'react';

export default function Home() {
  return (
    <>
      <nav className="navbar bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo">
            <Image
              src="/visual crafts banco.png"
              alt="logo"
              width={150}
              height={100}
            />
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <Link href="#">
                  Inicio
                </Link>
              </li>
              <li>
              <Link href="demo">iniciar sesion</Link>
              </li>
              <li>
                <Link href="#contacto">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="#productos">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="#precio">
                  Precio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="Nosotros"></header>
      <section className="info bg-zinc-900 text-white py-8" id="productos">
        <div className="container mx-auto">
          <div className="text-center py-4">
            <h1 className="text-3xl font-bold">PRODUCTOS</h1>
            <p className="mt-4 px-4">Descubre la magia de la personalización con Visual Craft. Desde playeras y sudaderas hasta termos grabados a láser, letreros LED y mucho más, cada producto es una creación única. Convierte las ideas en realidad y deja que impriman duradera en nuestra vida diaria, trabajo de personalización y más. Explora nuestro catálogo de productos personalizados y haz que tu marca destaque con estilo y originalidad.</p>
          </div>
          <div className="flex flex-wrap justify-center py-4">
            {[
              { src: "/sellos.jpg", title: "Sellos", description: "Agiliza tus tiempos" },
              { src: "/neon.jpg", title: "Letreros", description: "Decora tu espacio" },
              { src: "/sudaderas.jpg", title: "Sudaderas", description: "Abrígate con estilo" },
              { src: "/playeras.jpg", title: "Playeras", description: "Crea tu propia moda" },
              { src: "/termos.jpg", title: "Termos", description: "Hidrátate" },
              { src: "/volantes.jpeg", title: "Volantes", description: "Crea una identidad visual" }
            ].map((product, index) => (
              <div key={index} className="m-4">
                <Image src={product.src} alt={product.title} width={150} height={150} className="rounded-lg" />
                <h2 className="text-xl font-bold mt-2">{product.title}</h2>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center py-4">
            <h1 className="text-3xl font-bold">NOSOTROS</h1>
            <p className="mt-4 px-4">Misión: Crear productos personalizados de alta calidad que reflejen la originalidad de cada cliente, respetando a través de la creatividad y la originalidad.</p>
            <p className="mt-4 px-4">Visión: Ser líderes en la industria de productos personalizados, destacando por nuestra calidad, innovación y crecimiento tanto a nivel nacional como internacional.</p>
          </div>
          <div className="precio">
          <div className="text-center py-4" id="precio">
            <h1 className="text-3xl font-bold">PRECIO</h1>
            <p className="mt-4 px-4">En Visual Craft, nos enorgullece ofrecer productos personalizados de alta calidad a precios accesibles y asequibles. Creemos que todos deberían tener acceso a artículos únicos y exclusivos que reflejen su estilo, sin comprometer el bolsillo. Además, nos esforzamos por mantener nuestros precios justos y transparentes, para que siempre sepas exactamente lo que estás pagando.</p>
            <Link href="/market" passHref>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">Tienda</button>
            </Link>
          </div>
          </div>
          <div className="text-center py-4" id="contacto">
            <h1 className="text-3xl font-bold">CONTACTO</h1>
            <div className="flex flex-col md:flex-row justify-center items-center mt-4 space-x-0 md:space-x-8 space-y-4 md:space-y-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531585!3d-37.81627917975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6b1e4e4e0e1!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1633076374008!5m2!1sen!2sau" 
                width="500" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
              <form className="mt-2 max-w-md w-full" action="https://formsubmit.co/b796c75fa0ec59a21ac83cc199300835" method="POST">
                <div className="mb-4">
                  <label className="block text-left" htmlFor="name">Nombre</label>
                  <input className="w-full p-2 border border-zinc-300 rounded-lg" type="text" id="name" name="name" />
                </div>
                <div className="mb-4">
                  <label className="block text-left" htmlFor="email">Correo electrónico</label>
                  <input className="w-full p-2 border border-zinc-300 rounded-lg" type="email" id="email" name="email" />
                </div>
                <div className="mb-4">
                  <label className="block text-left" htmlFor="subject">Asunto</label>
                  <input className="w-full p-2 border border-zinc-300 rounded-lg" type="text" id="subject" name="subject" />
                </div>
                <div className="mb-4">
                  <label className="block text-left" htmlFor="comments">Comentarios</label>
                  <input className="w-full p-2 border border-zinc-300 rounded-lg" type="text" id="comments" name="comments" />
                </div>
                <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-black transition-colors duration-300">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-10 bg-zinc-800 text-center">
        <div className="container mx-auto border-t border-zinc-700 mt-4 mb-6 pt-4 flex justify-center">
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/profile.php?id=61555967793962" passHref>
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
