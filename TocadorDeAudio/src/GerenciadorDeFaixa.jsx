const GerenciadorDeFaixa = ({ audio, referencia, definirTempoTotal, definirTempoAtual }) => {
    return (
        <audio src={audio}
            ref={referencia}
            onLoadedMetadata={() =>
                definirTempoTotal(referencia.current.duration)
            }
            onTimeUpdate={() =>
                definirTempoAtual(referencia.current.currentTime)
            }
        />

    );
};
export default GerenciadorDeFaixa;