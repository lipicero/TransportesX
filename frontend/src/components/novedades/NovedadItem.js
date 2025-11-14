
const NovedadItem = (props) => {
    const {titulo, subtitulo, cuerpo, imagen} = props;

    return (
        <div className="novedades holder">
            <h2>{titulo}</h2>
            <h3>{subtitulo}</h3>
            {imagen && <img src={imagen} alt={titulo} />}
            <div dangerouslySetInnerHTML={{__html: cuerpo}} />
        </div>
    );
};

export default NovedadItem;
