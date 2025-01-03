import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="iframe-container">
        <iframe
          loading="lazy"
          src="https://www.canva.com/design/DAGYiy7kEKM/RAX0eoOsnlLjA1W1mmmgdA/view?embed"
          allowFullScreen
          allow="fullscreen"
        ></iframe>
      </div>
      <a
        href="https://www.canva.com/design/DAGYiy7kEKM/RAX0eoOsnlLjA1W1mmmgdA/view?utm_content=DAGYiy7kEKM&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Projetos
      </a>{" "}
      by Felipe Zavatti
    
    </div>
  );
}
