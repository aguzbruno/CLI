import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import Contador from "./components/Contador"
import ItemList from "./components/ItemList"

function App(){

  return(
    <>
<div> 
<Navbar/>
{/* <ItemListContainer/> */}
{/* <Contador stock={10} initial={0}/> */}
<br></br>
<ItemList/>
</div>
</>
);
}

export default App;