function Capa(props) {
  return (
    <div className="capa">
      <img className="capa" src={props.imagemCapa} alt={props.textoAlternativo} />
    </div>
  );
}

export default Capa;