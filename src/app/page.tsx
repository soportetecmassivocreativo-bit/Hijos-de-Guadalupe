"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Heart, Sun, Music, BookOpen, Mail, MapPin, Phone, X, Maximize2, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface GalleryItem {
  id: number;
  category: "arte" | "motricidad" | "aprendizaje" | "cuidado";
  categoryLabel: string;
  tag: string;
  title: string;
  description: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: "motricidad",
    categoryLabel: "Motricidad & Juego",
    tag: "1 a 3 años",
    title: "Juegos de Construcción & Bloques",
    description: "Desarrollo de la paciencia, coordinación ojo-mano y nociones espaciales mediante bloques de madera.",
    image: "/ninos_1.jpg"
  },
  {
    id: 2,
    category: "arte",
    categoryLabel: "Estimulación & Arte",
    tag: "8 a 24 meses",
    title: "Expresión Artística Dactilar",
    description: "Exploración libre de texturas y colores con pinturas no tóxicas para despertar la creatividad temprana.",
    image: "/ninos_2.jpg"
  },
  {
    id: 3,
    category: "aprendizaje",
    categoryLabel: "Aprendizaje & Cuentos",
    tag: "1 a 3 años",
    title: "Cuentos Gigantes & Marionetas",
    description: "Fomento del lenguaje, la imaginación y la atención auditiva a través de lecturas interactivas.",
    image: "/ninos_3.jpg"
  },
  {
    id: 4,
    category: "motricidad",
    categoryLabel: "Motricidad & Juego",
    tag: "1 a 3 años",
    title: "Recreación al Aire Libre",
    description: "Juegos grupales y movimiento al sol en nuestro área verde protegida con supervisión activa.",
    image: "/ninos_4.jpg"
  },
  {
    id: 5,
    category: "arte",
    categoryLabel: "Estimulación & Arte",
    tag: "8 a 36 meses",
    title: "Iniciación Rítmica & Música",
    description: "Exploración sonora con instrumentos infantiles, maracas, xilófonos y canciones rítmicas.",
    image: "/ninos_5.jpg"
  },
  {
    id: 6,
    category: "motricidad",
    categoryLabel: "Motricidad & Juego",
    tag: "8 a 18 meses",
    title: "Gateo & Psicomotricidad Acolchada",
    description: "Circuitos de espuma suave y túneles seguros para acompañar los primeros pasos y el tono muscular.",
    image: "/ninos_6.jpg"
  },
  {
    id: 7,
    category: "aprendizaje",
    categoryLabel: "Aprendizaje & Cuentos",
    tag: "1.5 a 3 años",
    title: "Encajes & Encajes Montessori",
    description: "Actividades de lógica y clasificación de formas geométricas para ejercitar la concentración.",
    image: "/ninos_7.jpg"
  },
  {
    id: 8,
    category: "cuidado",
    categoryLabel: "Cuidado & Descanso",
    tag: "8 a 36 meses",
    title: "Merienda Saludable & Autonomía",
    description: "Atención personalizada durante la nutrición para fomentar hábitos saludables e higiene con afecto.",
    image: "/ninos_8.jpg"
  },
  {
    id: 9,
    category: "arte",
    categoryLabel: "Estimulación & Arte",
    tag: "1 a 3 años",
    title: "Socialización & Juego Afectivo",
    description: "Espacios de juego guiado donde aprenden a compartir, empatizar y comunicarse felizmente.",
    image: "/ninos_9.jpg"
  },
  {
    id: 10,
    category: "cuidado",
    categoryLabel: "Cuidado & Descanso",
    tag: "8 a 36 meses",
    title: "Siesta en Cunas Climatizadas",
    description: "Descanso reparador y seguro en ambiente tranquilo con temperatura óptima y monitoreo constante.",
    image: "/ninos_10.jpg"
  }
];

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);



  useGSAP(() => {
    // Rule 1: Hero Entrance Cascade Stagger
    gsap.from(".hero-text", {
      y: 40,
      opacity: 0,
      duration: 1.0,
      stagger: 0.18,
      ease: "power3.out",
      delay: 0.15
    });

    gsap.from(".hero-img", {
      y: 45,
      scale: 0.96,
      opacity: 0,
      duration: 1.1,
      ease: "power3.out",
      delay: 0.35
    });

    // Continuous pronounced & fluid floating animation for main hero image
    gsap.to(".hero-img", {
      x: 28,
      y: -14,
      rotation: 1.8,
      duration: 4.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1.4
    });

    // Rule 2 & 3: Independent ScrollTrigger per Section with Smooth Easing (0.8s - 1.2s)
    const sections = gsap.utils.toArray<HTMLElement>(".fade-in-section");
    sections.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          toggleActions: "play none none none"
        },
        y: 45,
        opacity: 0,
        duration: 1.0,
        ease: "power3.out"
      });
    });

    // Staggered Entrance for Card Grids
    // Values Grid Cards
    gsap.from(`.${styles.valueCard}`, {
      scrollTrigger: {
        trigger: `.${styles.valuesGrid}`,
        start: "top 82%",
      },
      y: 35,
      opacity: 0,
      duration: 0.85,
      stagger: 0.1,
      ease: "power3.out"
    });

    // Benefits Grid Cards
    gsap.from(`.${styles.benefitCard}`, {
      scrollTrigger: {
        trigger: `.${styles.benefitsGrid}`,
        start: "top 82%",
      },
      y: 35,
      opacity: 0,
      duration: 0.85,
      stagger: 0.1,
      ease: "power3.out"
    });

    // Activities / Services Cards
    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top 82%",
      },
      y: 40,
      opacity: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: "power3.out"
    });

    // Spaces / Moments Cards
    gsap.from(`.${styles.spaceCard}`, {
      scrollTrigger: {
        trigger: `.${styles.spacesGrid}`,
        start: "top 82%",
      },
      y: 40,
      opacity: 0,
      duration: 0.9,
      stagger: 0.1,
      ease: "power3.out"
    });

    // Revamped Gallery Cards
    gsap.from(`.${styles.galleryCard}`, {
      scrollTrigger: {
        trigger: `.${styles.galleryGrid}`,
        start: "top 82%",
      },
      y: 35,
      opacity: 0,
      duration: 0.85,
      stagger: 0.08,
      ease: "power3.out"
    });

  }, { scope: container });

  return (
    <main className={styles.main} ref={container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <a href="#inicio" className={styles.logo} style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src="/logo.png"
            alt="Logo Centro de Cuidado Hijos de Guadalupe"
            width={350}
            height={115}
            style={{ objectFit: 'contain', width: 'auto', height: '115px' }}
            priority
          />
        </a>
        <div className={styles.navLinks}>
          <a href="#inicio" className={styles.navLink}>Inicio</a>
          <a href="#nosotros" className={styles.navLink}>Conócenos</a>
          <a href="#beneficios" className={styles.navLink}>Beneficios</a>
          <a href="#servicios" className={styles.navLink}>Actividades</a>
          <a href="#espacios" className={styles.navLink}>Momentos</a>
          <a href="#galeria" className={styles.navLink}>Galería</a>
        </div>
        <a href="#contacto" className={styles.contactBtn}>Contáctanos</a>
      </nav>

      {/* Hero Section - Option 1: Organic Liquid Blob + Micro-Bubbles */}
      <div className={styles.heroWrapper} style={{ overflow: 'hidden' }}>

        {/* Floating Bubble Elements */}
        <div className={styles.bubble} style={{ width: '40px', height: '40px', left: '8%', bottom: '-20px', animationDelay: '0s', animationDuration: '14s' }}></div>
        <div className={styles.bubble} style={{ width: '25px', height: '25px', left: '22%', bottom: '-20px', animationDelay: '2s', animationDuration: '11s' }}></div>
        <div className={styles.bubble} style={{ width: '50px', height: '50px', left: '42%', bottom: '-20px', animationDelay: '4s', animationDuration: '17s' }}></div>
        <div className={styles.bubble} style={{ width: '30px', height: '30px', left: '68%', bottom: '-20px', animationDelay: '1s', animationDuration: '13s' }}></div>
        <div className={styles.bubble} style={{ width: '20px', height: '20px', left: '82%', bottom: '-20px', animationDelay: '6s', animationDuration: '9s' }}></div>
        <div className={styles.bubble} style={{ width: '35px', height: '35px', left: '93%', bottom: '-20px', animationDelay: '3s', animationDuration: '12s' }}></div>

        <section id="inicio" className={`${styles.section} ${styles.hero}`}>
          <div className={styles.heroContent}>
            <h1 className={`${styles.heroTitle} hero-text`}>
              Cuidado Especializado y Amoroso para tus <span>Pequeños</span>
            </h1>
            <p className={`${styles.heroSubtitle} hero-text`}>
              En el Centro de Cuidado Hijos de Guadalupe brindamos un entorno seguro, profesional y lleno de afecto, diseñado exclusivamente para acompañar el desarrollo integral de bebés y niños desde los <strong>8 meses hasta los 3 años</strong>.
            </p>
            <div className="hero-text">
              <a href="#nosotros" className={styles.contactBtn} style={{ display: 'inline-block' }}>
                Conoce nuestro centro
              </a>
            </div>
          </div>
          <div className={`${styles.heroImageContainer} hero-img`}>
            <div className={styles.heroBlob}></div>
            <Image
              src="/portada_maestra_actividades.jpg"
              alt="Profesora con grupo de niños realizando actividades de aprendizaje"
              width={550}
              height={600}
              className={styles.heroImage}
              priority
            />
          </div>
        </section>
      </div>

      {/* About Section - Colored Background */}
      <div className={`${styles.sectionColored} ${styles.sectionNosotros}`}>

        <section id="nosotros" className={`fade-in-section`} style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <h2 className={styles.sectionTitle}>Conoce <span style={{ color: 'var(--pal-cian)' }}>Nuestro Centro</span></h2>
          
          <div className={styles.aboutGrid}>
            <div className={styles.aboutCard}>
              <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>¿Quiénes Somos?</h3>
              <p style={{ color: 'var(--color-text-light)', marginBottom: '30px' }}>
                Estamos dedicados a proporcionar un ambiente seguro, acogedor y estimulante donde los niños puedan aprender y desarrollarse integralmente, priorizando el bienestar de los más pequeños.
              </p>
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Nuestra Misión</h3>
              <p style={{ color: 'var(--color-text-light)', marginBottom: '30px' }}>
                Contribuir al desarrollo integral de las niñas y niños y el desarrollo pleno de sus potencialidades como sujetos de derechos a una vida feliz al prestar el mejor servicio de calidad e inclusión concebido para la atención temprana, en un ambiente seguro, estimulante y divertido, apoyando así el desarrollo de la familia.
              </p>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Nuestra Visión</h3>
              <p style={{ color: 'var(--color-text-light)', marginBottom: '10px' }}>
                Mejorar y crecer hasta convertirnos en el Centro de Cuidados elegido por más familias en la comunidad, donde el juego, la creatividad, la recreación, el amor, el ejemplo y la curiosidad son premisas que contribuyen a la formación de la nueva espiritualidad ciudadana para propiciar un verdadero apoyo para los padres que trabajan.
              </p>
            </div>
            <div className={styles.aboutImageWrap}>
              <div className={styles.thinScanLine}></div>
              <Image
                src="/daycare_about_1784131395091.jpg"
                alt="Maestra leyendo un cuento"
                width={600}
                height={700}
                className={styles.aboutImage}
                style={{ objectFit: 'cover', height: '100%' }}
              />
            </div>
          </div>

          {/* Nuestros Valores Institucionales */}
          <div style={{ marginTop: '60px' }}>
            <h3 style={{ fontSize: '2.2rem', textAlign: 'center', marginBottom: '30px', color: 'var(--color-text)' }}>
              Nuestros <span style={{ color: 'var(--pal-fucsia)' }}>Valores Institucionales</span>
            </h3>
            
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon} style={{ background: 'var(--pal-rosa-claro)' }}>❤️</div>
                <h4 className={styles.valueTitle}>Amor y Afecto</h4>
                <p className={styles.valueText}>Brindamos un trato cálido, amoroso y empático que hace sentir a cada niño seguro y feliz como en un segundo hogar.</p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon} style={{ background: 'var(--pal-verde-oliva)' }}>🕊️</div>
                <h4 className={styles.valueTitle}>Valores Humanos y Fe</h4>
                <p className={styles.valueText}>Fomentamos la empatía, el respeto, la fe y la solidaridad desde la primera infancia, sembrando bases éticas y espirituales para la vida.</p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon} style={{ background: 'var(--pal-cian)' }}>🤝</div>
                <h4 className={styles.valueTitle}>Respeto e Inclusión</h4>
                <p className={styles.valueText}>Respetamos el ritmo de cada pequeño de 8 meses a 3 años, promoviendo la equidad y el valor de su individualidad.</p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon} style={{ background: 'var(--pal-naranja)' }}>🎨</div>
                <h4 className={styles.valueTitle}>Creatividad y Curiosidad</h4>
                <p className={styles.valueText}>Impulsamos la imaginación y la curiosidad natural mediante el juego libre, la expresión artística y la exploración.</p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon} style={{ background: 'var(--pal-magenta)' }}>🌟</div>
                <h4 className={styles.valueTitle}>Excelencia y Ejemplo</h4>
                <p className={styles.valueText}>Mantenemos altos estándares de cuidado profesional, estimulación pedagógica oportuna y formación en valores cívicos.</p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon} style={{ background: 'var(--pal-azul)' }}>👨‍👩‍👧‍👦</div>
                <h4 className={styles.valueTitle}>Compromiso Familiar</h4>
                <p className={styles.valueText}>Acompañamos a las familias que trabajan ofreciendo un soporte ético, transparente y de constante apoyo mutuo.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Why Choose Us Section - Standalone section right below Nosotros */}
      <div className={`${styles.sectionColored} ${styles.sectionBeneficios}`}>

        <section id="beneficios" className="fade-in-section" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <h2 className={styles.sectionTitle}>¿Por qué elegir <span style={{ color: 'var(--pal-rosa-claro)' }}>Hijos de Guadalupe</span>?</h2>
          
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🛡️</div>
              <h3 className={styles.benefitTitle}>Seguridad Garantizada</h3>
              <p className={styles.benefitText}>
                Instalaciones acolchadas, ventiladas y monitoreadas diseñadas exclusivamente para edades de 8 meses a 3 años.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🎨</div>
              <h3 className={styles.benefitTitle}>Desarrollo Pedagógico y Sensorial</h3>
              <p className={styles.benefitText}>
                Planes de atención con pintura sensorial, música, desarrollo motriz y métodos Montessori interactivos adaptados a su edad.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🧩</div>
              <h3 className={styles.benefitTitle}>Materiales Adaptados</h3>
              <p className={styles.benefitText}>
                Estanterías al alcance infantil con juegos de clasificación, libros ilustrados y rompecabezas seguros.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>❤️</div>
              <h3 className={styles.benefitTitle}>Cuidado Amoroso</h3>
              <p className={styles.benefitText}>
                Un segundo hogar donde cada pequeño recibe atención personalizada, respeto y el máximo afecto.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Activities & Experiences Section - Colored Background */}
      <div className={`${styles.sectionColored} ${styles.sectionServicios}`}>

        <section id="servicios" className={`fade-in-section`} style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <h2 className={styles.sectionTitle}>Nuestras <span style={{ color: 'var(--pal-verde-brillante)' }}>Actividades</span></h2>
          <p style={{ textAlign: 'center', color: '#4a4a4a', marginTop: '-25px', marginBottom: '35px', fontSize: '1.15rem', maxWidth: '850px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.6' }}>
            Experiencias dinámicas y enriquecedoras diseñadas especialmente para potenciar el desarrollo cognitivo, emocional y físico de tu pequeño.
          </p>
          
          <div className={`${styles.servicesGrid} services-grid`}>
            {/* Activity 1 */}
            <div className={`${styles.serviceCard} service-card`}>
               <Image
                src="/service_1.jpg"
                alt="Estimulación Temprana"
                width={400}
                height={260}
                className={styles.serviceImage}
              />
              <h3 className={styles.serviceCardTitle}>Estimulación Temprana</h3>
              <p className={styles.serviceCardText}>Juegos sensoriales y ejercicios psicomotrices enfocados en el desarrollo cognitivo y afectivo en los primeros meses.</p>
            </div>

            {/* Activity 2 */}
            <div className={`${styles.serviceCard} service-card`}>
               <Image
                src="/service_2.jpg"
                alt="Arte y Expresión Libre"
                width={400}
                height={260}
                className={styles.serviceImage}
              />
              <h3 className={styles.serviceCardTitle}>Arte y Expresión Libre</h3>
              <p className={styles.serviceCardText}>Talleres de pintura táctil, moldeado con masas no tóxicas y manualidades para despertar la creatividad.</p>
            </div>

            {/* Activity 3 */}
            <div className={`${styles.serviceCard} service-card`}>
               <Image
                src="/service_3.jpg"
                alt="Música y Movimiento"
                width={400}
                height={260}
                className={styles.serviceImage}
              />
              <h3 className={styles.serviceCardTitle}>Música y Movimiento</h3>
              <p className={styles.serviceCardText}>Canciones, instrumentos infantiles y rondas rítmicas que potencian la audición, la memoria y el equilibrio.</p>
            </div>

            {/* Activity 4 */}
            <div className={`${styles.serviceCard} service-card`}>
               <Image
                src="/service_4.jpg"
                alt="Juego al Aire Libre"
                width={400}
                height={260}
                className={styles.serviceImage}
              />
              <h3 className={styles.serviceCardTitle}>Juego al Aire Libre</h3>
              <p className={styles.serviceCardText}>Recreación segura bajo el sol, juegos colectivos y áreas verdes protegidas para el contacto sano con la naturaleza.</p>
            </div>

            {/* Activity 5 */}
            <div className={`${styles.serviceCard} service-card`}>
               <Image
                src="/service_5.jpg"
                alt="Lectura y Lenguaje Temprano"
                width={400}
                height={260}
                className={styles.serviceImage}
              />
              <h3 className={styles.serviceCardTitle}>Lectura y Lenguaje</h3>
              <p className={styles.serviceCardText}>Cuentos gigantes con marionetas, narración de historias y canciones de vocalización que impulsan el habla.</p>
            </div>

            {/* Activity 6 */}
            <div className={`${styles.serviceCard} service-card`}>
               <Image
                src="/service_6.jpg"
                alt="Psicomotricidad y Coordinación"
                width={400}
                height={260}
                className={styles.serviceImage}
              />
              <h3 className={styles.serviceCardTitle}>Psicomotricidad & Gateo</h3>
              <p className={styles.serviceCardText}>Circuitos con túneles suaves, bloques de espuma y rampas acolchadas para fortalecer la coordinación y el tono muscular.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Nuestros Momentos Section */}
      <div className={`${styles.sectionColored} ${styles.sectionEspacios}`}>

        <section id="espacios" className="fade-in-section" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <h2 className={styles.sectionTitle}>Nuestros <span style={{ color: 'var(--pal-naranja)' }}>Momentos</span></h2>
          <p style={{ textAlign: 'center', color: '#4a4a4a', marginTop: '-25px', marginBottom: '35px', fontSize: '1.15rem', maxWidth: '920px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.6' }}>
            Cada instante en el día de tu pequeño está cuidadosamente estructurado para su bienestar: desde el aprendizaje guiado en el aula y la nutrición equilibrada en el comedor, hasta la siesta reparadora y la estimulación sensorial. Descubre la importancia de cada espacio y momento diseñado exclusivamente para niños de <strong>8 meses a 3 años</strong>. 🌟
          </p>

          <div className={styles.spacesGrid}>
            {/* Moment 1 */}
            <div className={styles.spaceCard}>
              <div className={styles.spaceCardImageWrap}>
                <span className={styles.spaceCardTag}>1. Llegada & Adaptación</span>
                <Image
                  src="/espacio_1.jpg"
                  alt="1. Bienvenida y Aula Principal"
                  fill
                  className={styles.spaceCardImage}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className={styles.spaceCardContent}>
                <h3 className={styles.spaceCardTitle}>1. Bienvenida y Aula Principal</h3>
                <p className={styles.spaceCardText}>
                  Llegada con amor y bienvenida matutina. Los niños inician su jornada con juego libre y socialización en un aula alegre y adaptada.
                </p>
              </div>
            </div>

            {/* Moment 2 */}
            <div className={styles.spaceCard}>
              <div className={styles.spaceCardImageWrap}>
                <span className={styles.spaceCardTag}>2. Motricidad Matutina</span>
                <Image
                  src="/espacio_4.jpg"
                  alt="2. Área de Estimulación y Psicomotricidad"
                  fill
                  className={styles.spaceCardImage}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className={styles.spaceCardContent}>
                <h3 className={styles.spaceCardTitle}>2. Estimulación y Psicomotricidad</h3>
                <p className={styles.spaceCardText}>
                  Movimiento corporal y desarrollo físico: ejercicios de gateo, primeros pasos y equilibrio en colchonetas seguras y protegidas.
                </p>
              </div>
            </div>

            {/* Moment 3 */}
            <div className={styles.spaceCard}>
              <div className={styles.spaceCardImageWrap}>
                <span className={styles.spaceCardTag}>3. Creatividad Sensorial</span>
                <Image
                  src="/idea_manitas.jpg"
                  alt="3. Pintura Sensorial y Expresión Libre"
                  fill
                  className={styles.spaceCardImage}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className={styles.spaceCardContent}>
                <h3 className={styles.spaceCardTitle}>3. Pintura Sensorial y Expresión</h3>
                <p className={styles.spaceCardText}>
                  Talleres creativos a media mañana donde los pequeños exploran libremente texturas y colores con pinturas seguras y lavables.
                </p>
              </div>
            </div>

            {/* Moment 4 */}
            <div className={styles.spaceCard}>
              <div className={styles.spaceCardImageWrap}>
                <span className={styles.spaceCardTag}>4. Nutrición & Comedor</span>
                <Image
                  src="/espacio_comida.jpg"
                  alt="4. Comedor y Meriendas Saludables"
                  fill
                  className={styles.spaceCardImage}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className={styles.spaceCardContent}>
                <h3 className={styles.spaceCardTitle}>4. Comedor & Meriendas Saludables</h3>
                <p className={styles.spaceCardText}>
                  Hora de la nutrición equilibrada y meriendas frescas. Mesitas infantiles confortables que promueven hábitos de higiene y compañía.
                </p>
              </div>
            </div>

            {/* Moment 5 */}
            <div className={styles.spaceCard}>
              <div className={styles.spaceCardImageWrap}>
                <span className={styles.spaceCardTag}>5. Lectura & Calma</span>
                <Image
                  src="/espacio_2.jpg"
                  alt="5. Rincón de Cuentos y Expresión"
                  fill
                  className={styles.spaceCardImage}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className={styles.spaceCardContent}>
                <h3 className={styles.spaceCardTitle}>5. Rincón de Cuentos y Expresión</h3>
                <p className={styles.spaceCardText}>
                  Lectura guiada de historias ilustradas en un ambiente sereno para relajar la mente antes de la siesta y fomentar el lenguaje.
                </p>
              </div>
            </div>

            {/* Moment 6 */}
            <div className={styles.spaceCard}>
              <div className={styles.spaceCardImageWrap}>
                <span className={styles.spaceCardTag}>6. Siesta Reparadora</span>
                <Image
                  src="/espacio_descanso.jpg"
                  alt="6. Siesta y Descanso Tranquilo"
                  fill
                  className={styles.spaceCardImage}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className={styles.spaceCardContent}>
                <h3 className={styles.spaceCardTitle}>6. Siesta & Descanso Tranquilo</h3>
                <p className={styles.spaceCardText}>
                  Descanso reconfortante en un ambiente tenue, climatizado y con lencería limpia para recuperar todas sus energías.
                </p>
              </div>
            </div>

            {/* Moment 7 */}
            <div className={styles.spaceCard}>
              <div className={styles.spaceCardImageWrap}>
                <span className={styles.spaceCardTag}>7. Juego Autónomo</span>
                <Image
                  src="/idea_montessori.jpg"
                  alt="7. Muebles Montessori y Juegos Clave"
                  fill
                  className={styles.spaceCardImage}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className={styles.spaceCardContent}>
                <h3 className={styles.spaceCardTitle}>7. Muebles Montessori y Juegos</h3>
                <p className={styles.spaceCardText}>
                  Actividades vespertinas de concentración y autonomía con bandejas Montessori, aros apilables y objetos táctiles de madera.
                </p>
              </div>
            </div>

            {/* Moment 8 */}
            <div className={styles.spaceCard}>
              <div className={styles.spaceCardImageWrap}>
                <span className={styles.spaceCardTag}>8. Cierre del Día</span>
                <Image
                  src="/idea_estanteria.jpg"
                  alt="8. Rincón de Rompecabezas y Despedida"
                  fill
                  className={styles.spaceCardImage}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className={styles.spaceCardContent}>
                <h3 className={styles.spaceCardTitle}>8. Rompecabezas y Despedida</h3>
                <p className={styles.spaceCardText}>
                  Cierre de la jornada con rompecabezas educativos y juegos tranquilos mientras esperan el reencuentro feliz con mamá y papá.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Revamped Experience & Life Gallery Section */}
      <div className={styles.gallerySectionWrap}>
        <section id="galeria" className={styles.galleryInner}>
          <h2 className={`${styles.sectionTitle} fade-in-section`}>
            Un Día de <span style={{ color: 'var(--pal-magenta)' }}>Amor y Crecimiento</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-light)', marginTop: '-40px', marginBottom: '35px', fontSize: '1.1rem', maxWidth: '850px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.6' }}>
            Explora las vivencias, actividades pedagógicas y momentos afectivos que acompañan el desarrollo seguro de nuestros bebés y niños (de 8 meses a 3 años). 🌟
          </p>
          
          {/* Category Filter Bar */}
          <div className={styles.filterBar}>
            <button
              onClick={() => setActiveCategory("all")}
              className={`${styles.filterBtn} ${activeCategory === "all" ? styles.filterBtnActive : ""}`}
            >
              🌟 Todas las Experiencias
            </button>
            <button
              onClick={() => setActiveCategory("arte")}
              className={`${styles.filterBtn} ${activeCategory === "arte" ? styles.filterBtnActive : ""}`}
            >
              🎨 Estimulación & Arte
            </button>
            <button
              onClick={() => setActiveCategory("motricidad")}
              className={`${styles.filterBtn} ${activeCategory === "motricidad" ? styles.filterBtnActive : ""}`}
            >
              🏃 Motricidad & Juego
            </button>
            <button
              onClick={() => setActiveCategory("aprendizaje")}
              className={`${styles.filterBtn} ${activeCategory === "aprendizaje" ? styles.filterBtnActive : ""}`}
            >
              📖 Aprendizaje & Cuentos
            </button>
            <button
              onClick={() => setActiveCategory("cuidado")}
              className={`${styles.filterBtn} ${activeCategory === "cuidado" ? styles.filterBtnActive : ""}`}
            >
              🛌 Cuidado & Descanso
            </button>
          </div>

          {/* Revamped Gallery Grid */}
          <div className={styles.galleryGrid}>
            {galleryItems
              .filter((item) => activeCategory === "all" || item.category === activeCategory)
              .map((item) => (
                <div
                  key={item.id}
                  className={styles.galleryCard}
                  onClick={() => setSelectedItem(item)}
                >
                  <div className={styles.galleryCardMedia}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className={styles.galleryImage}
                      sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                    />
                  </div>
                  <div className={styles.galleryCardBody}>
                    <div className={styles.galleryMeta}>
                      <span className={styles.galleryTag}>{item.tag}</span>
                      <span style={{ fontSize: '0.8rem', color: '#888888', fontWeight: 600 }}>{item.categoryLabel}</span>
                    </div>
                    <h3 className={styles.galleryCardTitle}>{item.title}</h3>
                    <p className={styles.galleryCardDesc}>{item.description}</p>
                    <div className={styles.galleryCardFooter}>
                      <span>Ver foto en grande</span>
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedItem && (
        <div className={styles.lightboxBackdrop} onClick={() => setSelectedItem(null)}>
          <div className={styles.lightboxCard} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.lightboxCloseBtn}
              onClick={() => setSelectedItem(null)}
              aria-label="Cerrar modal"
            >
              <X size={24} />
            </button>

            <div className={styles.lightboxMedia}>
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className={styles.lightboxBody}>
              <div className={styles.galleryMeta} style={{ marginBottom: '4px' }}>
                <span className={styles.galleryTag}>{selectedItem.tag}</span>
                <span style={{ fontSize: '0.88rem', color: 'var(--pal-magenta)', fontWeight: 700 }}>
                  {selectedItem.categoryLabel}
                </span>
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-text)' }}>
                {selectedItem.title}
              </h3>
              <p style={{ fontSize: '1.05rem', color: '#4a4a4a', lineHeight: '1.6' }}>
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer / Contact */}
      <footer id="contacto" className={`${styles.footer} fade-in-section`}>
        <div className={styles.footerGrid}>
          {/* Column 1: Logo & Socials */}
          <div className={styles.footerCol}>
            <div style={{ marginBottom: '20px' }}>
              <Image
                src="/logo.png"
                alt="Logo Centro de Cuidado Hijos de Guadalupe"
                width={400}
                height={140}
                style={{ objectFit: 'contain', width: 'auto', height: '140px' }}
              />
            </div>
            <p className={styles.footerDescription}>
              Ofrecemos cuidado infantil amoroso, seguro y de alta calidad para tus pequeños. Tu tranquilidad es nuestra prioridad.
            </p>
            <div className={styles.footerSocials}>
              <a href="https://wa.me/584246019377" target="_blank" rel="noopener noreferrer" className={styles.footerSocialIcon} aria-label="WhatsApp">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/hijosdeguadalupee/" target="_blank" rel="noopener noreferrer" className={styles.footerSocialIcon} aria-label="Instagram">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@hijosdeguadalupee" target="_blank" rel="noopener noreferrer" className={styles.footerSocialIcon} aria-label="TikTok">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Actividades */}
          <div className={styles.footerCol}>
            <h3 className={styles.footerColTitle}>Actividades</h3>
            <ul className={styles.footerList}>
              <li className={styles.footerListItem}><a href="#servicios">Estimulación Temprana</a></li>
              <li className={styles.footerListItem}><a href="#servicios">Arte y Expresión Libre</a></li>
              <li className={styles.footerListItem}><a href="#servicios">Música y Movimiento</a></li>
              <li className={styles.footerListItem}><a href="#servicios">Juego al Aire Libre</a></li>
              <li className={styles.footerListItem}><a href="#servicios">Lectura y Lenguaje</a></li>
              <li className={styles.footerListItem}><a href="#servicios">Psicomotricidad & Gateo</a></li>
            </ul>
          </div>

          {/* Column 3: Empresa */}
          <div className={styles.footerCol}>
            <h3 className={styles.footerColTitle}>Empresa</h3>
            <ul className={styles.footerList}>
              <li className={styles.footerListItem}><a href="#inicio">Inicio</a></li>
              <li className={styles.footerListItem}><a href="#nosotros">Conócenos</a></li>
              <li className={styles.footerListItem}><a href="#beneficios">Beneficios</a></li>
              <li className={styles.footerListItem}><a href="#servicios">Actividades</a></li>
              <li className={styles.footerListItem}><a href="#espacios">Momentos</a></li>
              <li className={styles.footerListItem}><a href="#galeria">Galería</a></li>
              <li className={styles.footerListItem}><a href="#contacto">Contáctanos</a></li>
            </ul>
          </div>

          {/* Column 4: Oficina Principal */}
          <div className={styles.footerCol}>
            <h3 className={styles.footerColTitle}>Oficina Principal</h3>
            <ul className={styles.footerList}>
              <li className={styles.footerListItem} style={{ alignItems: 'flex-start' }}>
                <i><MapPin size={18} style={{ marginTop: '3px' }} /></i>
                <span>Sector Los Claritos Cruce Ambulatorio Los Claritos Urbanización El Prado Casa #3 Coro Estado Falcón Venezuela</span>
              </li>
              <li className={styles.footerListItem}>
                <i><Phone size={18} /></i>
                <span>Teléfono: 0424-6019377</span>
              </li>
            </ul>
            <div className={styles.rifBox}>
              RIF: J-406119300
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Centro de Cuidado Hijos de Guadalupe. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
