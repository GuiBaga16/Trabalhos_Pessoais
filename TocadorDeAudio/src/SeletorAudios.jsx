function SeletorAudios(props) {
    return (
      <button className="seletor"><i class="bi bi-music-note-beamed"></i>
      <p>{`Audio ${props.audioAtual}`}</p>
      </button>
    );
  }
  
  export default SeletorAudios;