import Header from "../components/Header";


export default function Home() {
  return (
    <div>
      <Header />
      <div className="iframe-container">
        <iframe
          title="Visualização do design BIG DEAL MKT no Canva"
          loading="lazy"
          src="https://www.canva.com/design/DAGdav8Cd9g/zrDVs9TMJ_m4x-A2m5BD4w/view?embed" 
          allowFullScreen
        ></iframe>
      </div>
      <a
        href="https://www.bigdealmarketing.com.br"
        target="_blank"
        rel="noopener noreferrer"
      >
        Portfólio
      </a>{" "}
      by Felipe Zavatti
    
    </div>
  );
}
