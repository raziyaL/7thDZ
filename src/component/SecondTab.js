import React, {useEffect, useState} from 'react';
import {Container, Dialog, DialogContent, List, ListItem, ListItemText, TextField, DialogActions, DialogTitle, IconButton, Button,} from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/EditOutlined";
import {useDispatch, useSelector} from "react-redux";
import {addContact, editContact, DeleteContact} from "../store/Slice";


function SecondTab() {


    const [ open, setOpen] = useState(false);
    const [ name, setName ] = useState("");
    const [email, setEmail ] = useState("");
    const [editId, setEditId ] = useState(null);
    const [editName, setEditName] = useState("");
    const [ editEmail, setEditEmail ] = useState("");
    const contacts = useSelector(state => state.tabsSlice)
    const dispatch = useDispatch()

    const handleAddContact = ()=>{
        if(name.trim() && email.trim()){
            dispatch(addContact({name, email}))
            setName("")
            setEmail("")
        }
    }

    const handleEditContact = (contact)=>{
        setEditId(contact.id)
        setEditName(contact.name)
        setEditEmail(contact.email)
        setOpen(true)
    }

    const handleSaveContacts = ()=>{
        dispatch(editContact({id: editId, name: editName, email: editEmail}))
        setOpen(false)
    }

    return (
        <Container>
            <h1>Enter your contacts</h1>
            <TextField
                label="name"
                variant="outlined"
                value={name}
                onChange={e => setName(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="email"
                variant="outlined"
                value={email}
                onChange={e => setEmail(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button
            variant="contained" color="primary" onClick={handleAddContact}
            >add
            </Button>
            <List style={{display:"flex", justifyContent:"space-between", width:"500px", margin: "0 auto"}}>
                {contacts.map(contact=>(
                    <div key={contact.id}>
                        <img style={{width:"100px", height:"100px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png" alt=""/>
                        <ListItemText primary={contact.name} secondary={contact.email} />
                        <IconButton edge="end" onClick={()=>handleEditContact(contact)}>
                            <EditIcon/>
                        </IconButton>
                        <IconButton edge="end" onClick={()=>dispatch(DeleteContact(contact.id))}>
                            <DeleteIcon/>
                        </IconButton>
                    </div>
                ))}
            </List>
            <Dialog open={open} onClose={()=>setOpen(false)} style={{height:"600px"}}>
                <DialogTitle>edit</DialogTitle>
                <DialogContent>
                    <TextField
                        label="name"
                        variant="outlined"
                        value={editName}
                        onChange={e => setEditName(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="email"
                        variant="outlined"
                        value={editEmail}
                        onChange={e => setEditEmail(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=> setOpen(false)} color="primary">
                        cancel
                    </Button>
                    <Button onClick={handleSaveContacts} color="primary">
                        save
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}

export default SecondTab;