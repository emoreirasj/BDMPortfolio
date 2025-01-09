import Header from "../components/Header";


export default function Home() {
  return (
    <div>
      <Header />
      <div className="iframe-container">
        <iframe
          loading="lazy"
          src="https://www.canva.com/design/DAGalug2LKg/HSt5I7XYvj4YG1msKpD5hA/view?embed"          allowFullScreen
          allow="fullscreen"
        ></iframe>
      </div>
      <a
href="https://www.canva.com/design/DAGalug2LKg/HSt5I7XYvj4YG1msKpD5hA/view?utm_content=DAGalug2LKg&utm_campaign=designshare&utm_medium=embeds&utm_source=link"        target="_blank"
        rel="noopener noreferrer"
      >
        Projetos
      </a>{" "}
      by Felipe Zavatti
    
    </div>
  );
}
