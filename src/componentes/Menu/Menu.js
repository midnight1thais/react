import "./Menu.css"

function Menu(){

    return ( 
    <nav className="menu-vertical">
        <ul>
            <li className="botoes-meunu-vertical">Início</li>
            <li className="botoes-meunu-vertical">Em alta</li>
            <li className="botoes-meunu-vertical">Inscrições</li>
            <hr></hr>
            <li className="botoes-meunu-vertical">Originais</li>
            <li className="botoes-meunu-vertical">Histórico</li>
        </ul>
    </nav>
    );
}

export default Menu