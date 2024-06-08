import Link from "next/link"
import Image from "next/image"
import React from 'react';


export default function Home() {
    return (
      <>
        <nav className="navbar">
          <div className="logo">
            <Image
              src="/visual crafts banco.png"
              alt="logo"
              width={150}
              height={100}
            />
          </div>
          <div>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
              <li><a href="#productos">Productos</a></li>
              <li><a href="#precio">Precio</a></li>
            </ul>
          </div>
        </nav>
        <header className="Nosotros"></header>
        <section className="info" id="productos">
          <div className="firstbox">
            <h2 className="title">Productos</h2>
            <p className="info">
              Descubre la magia de la personalización con Visual Crafts.
              Desde playeras y sudaderas hasta termos grabados a láser,
              letreros LED y mucho más, cada producto es una obra maestra
              única. Convierte tus ideas en realidad y deja una impresión
              duradera con nuestros volantes, tarjetas de presentación y más.
              ¡Explora nuestra colección de productos personalizados y haz
              que tu marca destaque con estilo y originalidad!
            </p>
  
            <div className="box-container">
              <div className="box">
                <h3>Sellos</h3>
                <Image
                  src="/sellos.jpg"
                  width={300}
                  height={100}
                  alt="sellos"
                />
                <p>Agiliza tus tiempos</p>
              </div>
              <div className="box">
                <h3>Letreros </h3>
                <Image
                  src="/lamparas.jpg"
                  width={300}
                  height={100}
                  alt="lamparas"
                />
                <p>Decora tu espacio</p>
              </div>
              <div className="box">
                <h3>Sudaderas</h3>
                <Image
                  src="/sudaderas.jpg"
                  width={300}
                  height={100}
                  alt="logo"
                />
                <p>Abrigate con estilo</p>
              </div>
              <div className="box">
                <h3>Playeras</h3>
                <Image
                  src="/playeras.jpg"
                  width={300}
                  height={100}
                  alt="playeras"
                />
                <p>Crea tu propia moda</p>
              </div>
              <div className="box">
                <h3>Termos</h3>
                <Image
                  src="/termos.jpg"
                  width={300}
                  height={100}
                  alt="termos"
                />
                <p>Hidratate</p>
              </div>
              <div className="box">
                <h3>Volantes</h3>
                <Image
                  src="/volantes.jpeg"
                  width={300}
                  height={100}
                  alt="volantes"
                />
                <p>Crea un identidad visual</p>
              </div>
            </div>
          </div>
        </section>
  
        <section className="about" id="nosotros">
          <h2 className="titulos">Nosotros</h2>
          <p className="info">
            Misión:
            Crear productos personalizados de alta calidad que reflejen
            la singularidad de cada cliente, inspirando a través de la
            creatividad y la originalidad.</p>
          <p>
            Visión:{}
            Ser líderes en la industria de productos personalizados,
            destacando por nuestra calidad, innovación y crecimiento
            continuo tanto a nivel nacional como internacional.
          </p>
  
  
        </section>
  
        <section className="precio" id="precio">
          <article className="contain">
            <h2 className="titulos">precio</h2>
            <p className="info">
              En Visual Crafts, nos enorgullece ofrecer productos personalizados
              de alta calidad a precios moderados y asequibles. Creemos que todos
              deberían tener acceso a artículos únicos y duraderos que reflejen
              su estilo personal, sin comprometer la calidad. Por ello, nos esforzamos
              por mantener nuestros precios accesibles para satisfacer las necesidades
              y expectativas de nuestros clientes.
            </p>
            <div className="text-center py-8">
                <Link href="/market" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105 shadow-lg">
                    Tienda
                </Link>
            </div>
          </article>
  
        </section>
        <section className="contacto" id="contacto">
          <h2 className="title">contacto</h2>
  
          <div className="information">
            <div className="mapita">
  
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1273.2548150856276!2d-106.10661545388355!3d28.725934243849153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea41793a4dbb0b%3A0xd25631ac612aff8b!2sRafael%20Bernal%2015117%2C%20Jos%C3%A9%20Mar%C3%ADa%20Ponce%20de%20Le%C3%B3n%2C%20Quintas%20Carolinas%2C%2031136%20Chihuahua%2C%20Chih.!5e0!3m2!1ses-419!2smx!4v1713334724738!5m2!1ses-419!2smx"
                width="500"
                height="430"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
  
            </div>
            <div className="form-content">
  
              <form method="" className="form-contacto">
                <label for="name">Nombre</label>
                <input style={{ width: "100%" }} type="text" name="name" id="name" />
  
                <label for="email">Correo electronico</label>
                <input type="email" name="subjet" id="subjet" />
  
                <label for="subjet">Asunto</label>
                <input type="text" name="subjet" id="subjet" />
  
                <label for="coments">Comentarios</label>
                <textarea name="coments" id="coments" cols="30" rows="5"></textarea>
  
                <button className="btn-enviar">Enviar</button>
              </form>
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