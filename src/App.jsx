 import foto from "./assets/fotoeu.png";
 export default function PortfolioAndreRicardo() {
  const projects = [
    {
      title: "Sistema Acadêmico",
      description: "Projeto focado em organização de estudos e tarefas acadêmicas.",
      tech: "HTML, CSS, JavaScript"
    },
    {
      title: "Portfólio Web",
      description: "Site pessoal desenvolvido para apresentação profissional online.",
      tech: "React, Tailwind"
    },
    {
      title: "Pesquisa em Tecnologia",
      description: "Publicações e estudos relacionados ao desenvolvimento web.",
      tech: "GitHub Pages"
    }
  ];

  const formations = [
    "Tecnologia da Informação",
    "Cursos de Desenvolvimento Web",
    "Lógica de Programação",
    "Estruturas de Dados"
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black via-zinc-900 to-black">
        {/* EFEITO ONDA */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -bottom-24 left-0 w-[200%] h-72 bg-gradient-to-r from-zinc-800/20 via-zinc-700/10 to-zinc-800/20 blur-3xl rounded-[100%] animate-[wave_14s_ease-in-out_infinite]" />

          <div className="absolute -bottom-32 left-0 w-[200%] h-80 bg-gradient-to-r from-zinc-700/10 via-zinc-500/5 to-zinc-700/10 blur-3xl rounded-[100%] animate-[wave_18s_ease-in-out_infinite_reverse]" />
        </div>

        <style>{`
          @keyframes wave {
            0% {
              transform: translateX(0) translateY(0);
            }
            50% {
              transform: translateX(-8%) translateY(-10px);
            }
            100% {
              transform: translateX(0) translateY(0);
            }
          }
        `}</style>

        <div className="relative z-10 flex flex-col items-center">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl mb-6">
          <img
            src={foto}
            alt="Andre Ricardo"
            className="w-full h-full object-cover object-top scale-110"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          𝐴𝑛𝑑𝑟é 𝑅𝑖𝑐𝑎𝑟𝑑𝑜
        </h1>

        <p className="mt-4 text-zinc-400 text-lg md:text-2xl max-w-2xl">
          Estudante & Entusiasta da tecnologia
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <a
            href="#projetos"
            className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
          >
            Ver Projetos
          </a>

          <a
            href="#contato"
            className="border border-zinc-700 px-6 py-3 rounded-2xl hover:bg-zinc-900 transition"
          >
            Contato
          </a>
        </div>
              </div>
      </section>

      {/* SOBRE */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Sobre Mim</h2>

            <p className="text-zinc-400 leading-8 text-lg">
              Desenvolvedor em constante aprendizado, interessado em tecnologia, design e criação de projetos. Buscando evoluir minhas habilidades e transformar ideias em experiências modernas, funcionais e criativas.

            </p>

            <p className="text-zinc-400 leading-8 text-lg mt-6">
              Meu objetivo é construir experiências digitais modernas,
              responsivas e profissionais.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 shadow-2xl">
            <h3 className="text-2xl font-semibold mb-6">Tecnologias</h3>

            <div className="flex flex-wrap gap-3">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "GitHub",
                "Tailwind",
                "Node.js",
                "UI Design"
              ].map((item) => (
                <span
                  key={item}
                  className="bg-black border border-zinc-700 px-4 py-2 rounded-xl text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORMAÇÕES */}
      <section className="py-24 bg-zinc-950 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Formações Acadêmicas
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {formations.map((formation, index) => (
              <div
                key={index}
                className="bg-black border border-zinc-800 rounded-3xl p-8 hover:scale-[1.02] transition"
              >
                <h3 className="text-2xl font-semibold">{formation}</h3>
                <p className="text-zinc-400 mt-3 leading-7">
                  Formação voltada ao desenvolvimento técnico, lógico e
                  profissional na área de tecnologia.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projetos</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:-translate-y-2 transition duration-300 shadow-xl"
            >
              <div className="h-48 bg-gradient-to-br from-zinc-700 to-black" />

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-zinc-400 leading-7">
                  {project.description}
                </p>

                <div className="mt-5">
                  <span className="text-sm bg-black border border-zinc-700 px-3 py-2 rounded-xl">
                    {project.tech}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PESQUISAS */}
      <section className="py-24 bg-zinc-950 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Pesquisas & Estudos</h2>

          <p className="text-zinc-400 text-lg leading-8">
            Espaço dedicado para artigos, pesquisas acadêmicas, estudos de
            desenvolvimento web, programação e tecnologia.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-14 text-left">
            <div className="bg-black p-8 rounded-3xl border border-zinc-800">
              <h3 className="text-2xl font-semibold mb-4">
                Desenvolvimento Front-End
              </h3>

              <p className="text-zinc-400 leading-7">
                Estudos relacionados à criação de interfaces modernas,
                responsividade e experiência do usuário.
              </p>
            </div>

            <div className="bg-black p-8 rounded-3xl border border-zinc-800">
              <h3 className="text-2xl font-semibold mb-4">
                Inteligência Artificial
              </h3>

              <p className="text-zinc-400 leading-7">
                Pesquisas sobre IA, automação, ferramentas digitais e tendências
                tecnológicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contato</h2>

          <p className="text-zinc-400 text-lg mb-10">
            Entre em contato para oportunidades, projetos ou networking.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com"
              className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              className="border border-zinc-700 px-6 py-3 rounded-2xl hover:bg-zinc-900 transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:email@email.com"
              className="border border-zinc-700 px-6 py-3 rounded-2xl hover:bg-zinc-900 transition"
            >
              Email
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-8 text-center text-zinc-500 text-sm">
        © 2026 Andre Ricardo — Todos os direitos reservados.
      </footer>
    </div>
  );
}
