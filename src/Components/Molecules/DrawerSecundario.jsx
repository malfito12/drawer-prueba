import { Collapse, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import React from 'react'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import InboxIcon from '@material-ui/icons/Inbox'
import MailIcon from '@material-ui/icons/Mail'
import SendIcon from '@material-ui/icons/Send'
import { useState } from 'react';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
const drawerWidth=240;

const useStyles=makeStyles((theme)=>({
    drawer:{
        width: drawerWidth,
        flexShrink:0
    },
    drawerPaper:{
        width: drawerWidth,
        background:'#141e30'
    },
    drawerHeader:{
        display:'flex',
        alignItems:'center',
        padding:theme.spacing(0,1),
        ...theme.mixins.toolbar,
        justifyContent:'flex-end'
    },
    diseño:{
        color:'white'
    },
    nested:{
        paddingLeft:theme.spacing(4),
        color:'white'
    }
}))

const DrawerSecundario =(props)=>{
    const classes=useStyles()

    const [abrir,setAbrir]=useState(false)
    const openOpsions=()=>{
        setAbrir(!abrir)
    }

    const ItemList=[
        {
            text:'Usuarios',
            icon:<InboxIcon color='primary'/>
        },
        {
            text:'Notas',
            icon:<MailIcon color='primary'/>
        }
    ]
    return(
        <Drawer
            className={classes.drawer}
            anchor='left'
            open={props.open}
            onClose={props.closeDrawer}
            classes={{
                paper: classes.drawerPaper
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={props.closeDrawer}>
                    <ChevronLeftIcon className={classes.diseño} />
                </IconButton>
            </div>
            <Divider/>
            <List>
                <div onClick={props.closeDrawer}>
                    <ListItem button className={classes.diseño}>
                        <ListItemIcon>
                            <SendIcon color='primary'/>
                        </ListItemIcon>
                        <ListItemText primary='Usuarios'/>
                    </ListItem>
                    <ListItem button className={classes.diseño}>
                        <ListItemIcon>
                            <SendIcon color='primary'/>
                        </ListItemIcon>
                        <ListItemText primary='Notas'/>
                    </ListItem>
                </div>
                <Divider/>
                <ListItem button onClick={openOpsions} className={classes.diseño}>
                    <ListItemIcon>
                        <SendIcon color='primary'/>
                    </ListItemIcon>
                    <ListItemText primary='Opsiones'/>
                    {abrir? <ExpandLess/>:<ExpandMore/>}
                </ListItem>
                <Collapse in={abrir} timeout='auto' unmountOnExit>
                    <List component='div' disablePadding onClick={props.closeDrawer}>
                        {ItemList.map((item)=>{
                            const {text,icon}=item
                            return(
                                <div key={text}>
                                    <ListItem button className={classes.nested}>
                                        {icon&&<ListItemIcon>{icon}</ListItemIcon>}
                                        <ListItemText primary={text}/>
                                    </ListItem>
                                </div>
                            )
                        })}
                    </List>
                </Collapse>
            </List>
        </Drawer>
    )
}

export default DrawerSecundario