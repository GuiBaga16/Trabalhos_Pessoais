const ContainerProgresso = ({ tempoTotal, tempoAtual, referencia, avancarPara }) => {
    const formatarTempo = (segundos) => {
        const tempo = new Date(null);
        tempo.setSeconds(segundos);
        return tempo.toISOString().slice(14, 19);
    };

    return (
        <section className="container-progresso" onClick={avancarPara}>
            <div className="progresso-total" ref={referencia} onClick={avancarPara}>

                <div className="progresso-atual" style={{ width: `${(tempoAtual * 100) / tempoTotal}%` }}></div>

                <div className="marcador-posicao" style={{ left: `${(tempoAtual * 100) / tempoTotal}%` }}></div>
                
            </div>  
            <div className="metricas-tempo">
                <p>{formatarTempo(tempoAtual)}</p>
                <p>{formatarTempo(tempoTotal)}</p>
            </div>

        </section>
    )
}
export default ContainerProgresso;