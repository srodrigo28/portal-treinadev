export default function Home() {
  const widthVideo = 360;
  const heightVideo = 280;
  return (
    <div className="home-page">

      <header className="flex items-center gap-5 justify-center mb-5">
        <h1 className="header-home text-white text-2xl">Confira nossos </h1>
        <div className="bg-green-500 p-3 rounded-md text-white font-bold ">Conteúdos Grátis</div>
      </header>
      

      <section className=" video flex gap-5 items-center justify-center flex-wrap mb-10">
        <div className="card">
          <header className="bg-green-600 p-3 rounded-t-md text-center font-bold text-2xl"> Layouts Lindos HTML CSS3 </header>
          <iframe width={widthVideo} height={heightVideo} src="https://www.youtube.com/embed/xkPp1xIRNc0?si=eSbL6Rcv2-xKnV7y" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        
        <div className="card">
          <header className="bg-blue-600 p-3 rounded-t-md text-center font-bold text-2xl"> Layouts Lindos HTML CSS3 </header>
          <iframe width={widthVideo} height={heightVideo} src="https://www.youtube.com/embed/qpBjoqoVcIE?si=nTJrU6wQINId5Qx2" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>

        <div className="card">
          <header className="bg-red-600 p-3 rounded-t-md text-center font-bold text-2xl"> Layouts Lindos HTML CSS3 </header>
          <iframe width={widthVideo} height={heightVideo} src="https://www.youtube.com/embed/t8pnspBtudc?si=DDxR1RZrWGPL4b_7" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </section>

      <h1 className="mb-7">Configra nossos <span className="bg-blue-500 p-3 rounded-md">Projetos FullStak</span></h1>

      <section className="flex gap-5 items-center justify-center flex-wrap mb-10 ">
          <div className="card">
              <header className="bg-green-600 p-3 rounded-t-md text-center font-bold text-2xl"> ReactJS Full Api </header>
              <iframe width={widthVideo} height={heightVideo} src="https://www.youtube.com/embed/tUQDzI26TLo?si=vJ1Y_0PQxb3f1PGR" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
            
            <div className="card">
              <header className="bg-blue-600 p-3 rounded-t-md text-center font-bold text-2xl"> Java 21 Criando API 1/2 </header>
              <iframe width={widthVideo} height={heightVideo} src="https://www.youtube.com/embed/6EWE-wW6zxw?si=-Yr96Ocx5rNtQmWT" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>

            <div className="card">
            <header className="bg-red-600 p-3 rounded-t-md text-center font-bold text-2xl"> Java 21 Criando API 2/2 </header>
            <iframe width={widthVideo} height={heightVideo} src="https://www.youtube.com/embed/E93exTmHMNU?si=6-zrkQ-piXmizuU7" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
      </section>
    </div>
  );
}
