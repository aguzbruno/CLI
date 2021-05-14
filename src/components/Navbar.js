import { AppBar,Toolbar,IconButton,Typography,Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
AppBar

const Navbar =()=>{
return <AppBar position="static" style={{backgroundColor:"black"}}>
<Toolbar>
 
  <Typography variant="h6" >
    The Bump
  </Typography>
  <Button style={{marginLeft:"auto"}} color="inherit">Inicio
  </Button>
  <Button style={{marginLeft:"auto"}} color="inherit">Pedidos
  </Button>
  <Button style={{marginLeft:"auto"}} color="inherit">Productos
  </Button>
  <Button style={{marginLeft:"auto"}} color="inherit">Contacto
  </Button>

  </Toolbar>
</AppBar>
};


export default Navbar;