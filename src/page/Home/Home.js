import "./Home.css"
import Imagem from "../../componentes/Imagens/Imagem"
import Menu from "../../componentes/Menu/Menu"

function Home(props){

    console.log(props.reproduz)

    return (
        <main>
          <Menu/>
            <section className="painel-de-videos">
                <Imagem 
                titulo={"Video 1"}
                link={"https://picsum.photos/400/400?a=1"}
                item={props.reproduz} titulo2={"Video 2"} link2={"https://picsum.photos/400/400?a=2"} />
            </section>
        </main>
    )
}

export default Home