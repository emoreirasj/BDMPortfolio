import Header from "../components/Header";


export default function Home() {
  return (
    <div>
      <Header />
      <div className="iframe-container">
        <iframe
          title="Visualização do design BIG DEAL MKT no Figma"
          loading="lazy"
          src="https://embed.figma.com/proto/iA6FAt0LNYeOlXqJtTLq0F/BIG-DEAL-MKT?node-id=273-200&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=273%3A200&hotspot-hints=0&embed-host=share" 
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
