import { AppBar, CssBaseline, IconButton, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'

const useStyle=makeStyles((theme)=>({
    diseño:{
        background:'#141e30'
    }
}))

const AppBarPricipal=(props)=>{
    const classes=useStyle()
    return(
        <>
        <CssBaseline/>
        <AppBar position='static' /*className={classes.diseño}*/>
            <Toolbar>
                <IconButton 
                    color='inherit'
                    aria-label='menu'
                    edge='start'
                    onClick={props.openDrawer}
                >
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
        </>
    )
}
export default AppBarPricipal