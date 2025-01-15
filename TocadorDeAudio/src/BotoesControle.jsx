const BotoesControle = ({voltarAudio, tocarOuPausar, avancarAudio, avancar15s, voltar15s, tocando}) => {
    return (
        <div className="caixa-botoes">
            <button className="botao" onClick={voltarAudio}>
                <i className="bi bi-skip-start-fill"></i>
            </button>
            <button className="botao" onClick={voltar15s} >
                <i className="bi bi-arrow-counterclockwise"></i>
            </button>
            <button className="botao" onClick={tocarOuPausar}> 
                <i className={"bi bi-" + (tocando ? "pause" : "play") + "-circle"}></i>
            </button>
            <button className="botao" onClick={avancar15s}>
                <i className="bi bi-arrow-clockwise"></i>
            </button>
            <button className="botao" onClick={avancarAudio}>
                <i className="bi bi-skip-end-fill"></i>
            </button>
        </div>
    );
};

export default BotoesControle;
