
import { AppBar, Toolbar, Typography } from '@mui/material';
import Image from "next/image";

export const NavBar = () =>{
  return(
    <AppBar position="static" sx={{ bgcolor: '#FFB461' }} >
      <Toolbar>
        <Image
        src={'https://res.cloudinary.com/lauram2celis/image/upload/v1669671652/pokemon/PokemonsCharacters_pf0esj.png'}
        alt="pokemon"
        height="100"
        width='200'/>
        <Typography variant="h3" component='div'> POKEMON APP </Typography>
      </Toolbar>
    </AppBar>
  )
}
export default NavBar;
