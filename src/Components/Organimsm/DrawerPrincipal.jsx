import React, { useState } from 'react'
import AppBarPricipal from '../Molecules/AppBarPrincipal'
import DrawerSecundario from '../Molecules/DrawerSecundario'

const DrawerPrincipal =()=>{

    const [open, setOpen]=useState(false)
    const openDrawer=()=>{
        setOpen(true)
    }
    const closeDrawer=()=>{
        setOpen(false)
    }
    return(
        <>
        <AppBarPricipal openDrawer={openDrawer} />
        <DrawerSecundario closeDrawer={closeDrawer} open={open}  />
        </>
    )
}

export default DrawerPrincipal