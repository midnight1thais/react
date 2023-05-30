import "./Imagem.css"

function Imagem(props){
    
    console.log(props.item)
    return ( 
    <>
    <div className="box-pagina-principal media1" onClick={props.item}>
    <img src={props.link} alt=""></img>
    <h4>{props.titulo}</h4>
    </div>

    <div className="box-pagina-principal media2" onClick={props.item}>
    <img src={props.link2} alt=""></img>
    <h4>{props.titulo2}</h4>
    </div>
    </>
    );
}

export default Imagem