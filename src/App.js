import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import Contador from "./components/Contador"
import ItemList from "./components/ItemList"
import ItemDetailContainer from "./components/ItemDetailContainer"

function App(){

  return(
    <>
<div> 
<Navbar/>
{/* <ItemListContainer/> */}
{/* <Contador stock={10} initial={0}/> */}
<br></br>
<ItemDetailContainer/>
</div>
</>
);
}

export default App;