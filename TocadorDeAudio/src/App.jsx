import { useState, useRef, useEffect } from 'react' //permite o uso de variáveis de estado
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import capa333 from './assets/capaAudio.jpg'
import Capa from './Capa'
import SeletorAudios from './SeletorAudios'
import BotoesControle from './BotoesControle'
import audio from './assets/Audios/audio'
import GerenciadorDeFaixa from './GerenciadorDeFaixa'
import ContainerProgresso from './ContainerProgresso'

function App() {

  //let tocando = false; - não é possível alterar o valor de uma variável let

  //variável de estado - permite mudanças no valor
  const [tocando, definirTocando] = useState(false);
  const [audioAtual, definirAudioAtual] = useState(0);
  const [tempoTotal, definirTempoTotal] = useState(0);
  const [tempoAtual, definirTempoAtual] = useState(0);
  const tagAudio = useRef(null);
  const barraProgresso = useRef(null);

  useEffect(() => {
    if (tocando) {
      audioPlay();
    }
  }, [
    audioAtual
  ]);

  const informacoesAudio = {
    titulo: "333",
    autor: "Matuê",
    totalAudios: 3,
    audios: audio,
    capa: capa333,
    textoAlternativo: "Album 333 do Matuê",
  }

  function audioPlay() {
    tagAudio.current.play();
    definirTocando(true);
  }

  const audioPause = () => {
    tagAudio.current.pause();
    definirTocando(false);
  }

  const tocarOuPausar = () => {
    if (tocando) {
      audioPause();
    } else {
      audioPlay();
    }
  }

  const avancarAudio = () => {
    definirAudioAtual((audioAtual) => {
      if (informacoesAudio.totalAudios === audioAtual + 1) {
        definirAudioAtual(0);
      } else {
        definirAudioAtual(audioAtual + 1);
      }
    });
  }

  const voltarAudio = () => {
    definirAudioAtual((audioAtual) => {
      if (informacoesAudio.totalAudios === audioAtual - 1) {
        definirAudioAtual(0);
      } else {
        definirAudioAtual(audioAtual - 1);
      }
    });
  }

  const avancar15s = () => {
    tagAudio.current.currentTime += 15;
  }

  const voltar15s = () => {
    tagAudio.current.currentTime -= 15;
  }

  const avancarPara = (evento) => {
    const largura = barraProgresso.current.clientWidth;
    const novoTempo = (evento.nativeEvent.offsetX / largura) * tempoTotal;
    tagAudio.current.currentTime = novoTempo;
  };

  // props
  return (<>
    <Capa imagemCapa={informacoesAudio.capa} textoAlternativo={informacoesAudio.textoAlternativo} />

    <SeletorAudios audioAtual={audioAtual + 1} />

    <GerenciadorDeFaixa
      audio={informacoesAudio.audios[audioAtual]}
      referencia={tagAudio}
      definirTempoTotal={definirTempoTotal}
      definirTempoAtual={definirTempoAtual} />

    <ContainerProgresso
      tempoTotal={tempoTotal}
      tempoAtual={tempoAtual}
      referencia={barraProgresso}
      avancarPara={avancarPara}
    />

    <BotoesControle
      tocando={tocando}
      tocarOuPausar={tocarOuPausar}
      avancarAudio={avancarAudio}
      voltarAudio={voltarAudio}
      avancar15s={avancar15s}
      voltar15s={voltar15s}
    />
  </>
  )
}

export default App