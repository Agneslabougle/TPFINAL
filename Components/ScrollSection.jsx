import React from "react";

const ScrollSection = () => {
  return (
    <section
      className="relative h-[50vh] overflow-x-scroll snap-x snap-mandatory mt-2"
    >
      {/* Contenedor principal */}
      <div
        className="flex h-full gap-0"
        style={{
          width: "400%", // 4 videos, cada uno ocupando el 100% de su contenedor
          marginBottom: "10rem"
        }}
      >
        {/* Primer Video */}
        <div
          className="snap-start flex-shrink-0 flex flex-col items-center"
          style={{ width: "20%" }} // Cada video ocupa 25% del contenedor principal
        >
          <video
            className="w-full h-full object-cover rounded-md"
            playsInline
            autoPlay
            loop
            muted
          >
            <source src="/videos/reciclar.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Segundo Video */}
        <div
  className="snap-start flex-shrink-0 flex flex-row"
  style={{
    width: "25%",
    height: "100%",
    backgroundColor: "#172554",
    padding: "1rem",
  }}
>
  {/* Contenedor de Texto */}
  <div className="flex flex-col justify-start">
    <h3 className="text-2xl font-bold mb-3 text-white mt-20 ml-20">Recursos Relacionados</h3>
    <ul className="space-y-3 text-lg ml-20">
      <li>
        <a
          href="https://www.greenpeace.org/international/publication/62121/30x30-from-global-ocean-treaty-to-protection-at-sea/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-400 transition"
        >
          Greenpeace: 30×30: From Global Ocean Treaty to Protection at Sea
        </a>
      </li>
      <li>
        <a
          href="https://wwfwhales.org/protecting-blue-corridors"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-400 transition"
        >
          World Wildlife Fund for Nature: Protecting Blue Corridors
        </a>
      </li>
      <li>
        <a
          href="https://unfoundation.org/event/the-mpa-guide-a-framework-to-achieve-global-goals-for-the-ocean/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-400 transition"
        >
          UN Foundation: The MPA Guide
        </a>
      </li>
      <li>
        <a
          href="https://only.one/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-400 transition"
        >
          Only One: Behind the planet-wide mission to protect 30% of the ocean by 2030
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/watch?v=O0hqCvbNWG4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-400 transition"
        >
          Mission Blue: The Next Ten Years
        </a>
      </li>
    </ul>
  </div>
  <div className="flex items-center ml-60">
    <img src="/pez.jpg" alt="pez" style={{ width: "350px", height: "auto" }} />
  </div>
</div>



        {/* Tercer Video */}
        <div
          className="snap-start flex-shrink-0 flex flex-col items-center"
          style={{ width: "25%",
          height: "100%",
          backgroundColor: "#0F162D",
          padding: "1rem", }}
        >
          <h3 style={{color: "white", marginTop: "30px"}}>Agnes Labougle y Magdalena Ovejero</h3>
        </div>

        {/* Cuarto Video */}
        <div
          className="snap-start flex-shrink-0 flex flex-col items-center"
          style={{ width: "25%" }}
        >
          <video
            className="w-full h-full object-cover"
            playsInline
            autoPlay
            loop
            muted
          >
            <source src="/videos/reciclar.mp4" type="video/mp4" />
          </video>
          <div className="text-black text-sm mt-2 text-center">
            A pesar de los esfuerzos realizados por las naciones, los pequeños
            actos pueden marcar una gran diferencia.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;
