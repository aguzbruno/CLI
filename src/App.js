import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import Contador from "./components/Contador"
function App(){

  return(
    <>
<div> 
<Navbar/>
<ItemListContainer/>
<Contador stock={10} initial={0}/>

</div>
</>
);
}

export default App;