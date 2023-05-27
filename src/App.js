import "./style.css"

import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";
import Home from "./page/Home/Home";


function App(){
  
  function reproduzVideo(){
    alert("O vídeo está sendo reproduzido")
  }

  return (
   <body>
      <div className="tela-inteira">
       <Header/>

      <Home reproduz={reproduzVideo}/>

      <Footer/>
      </div>
    </body>
  );
}

export default App;
