import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link href={'/'}>CRUD REACT</Link>
          </Typography>
          <Link href="/addproducts">Add Products</Link>
          <Link href='/signup' className='marginRight:16px'>Registration</Link>

        </Toolbar>
      </AppBar>
    </Box>


  )
}

export default NavBar