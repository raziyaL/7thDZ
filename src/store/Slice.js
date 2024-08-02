import {createSlice} from '@reduxjs/toolkit';


const tabsSlice = createSlice({
    name: "tabs",
    initialState:[],
    users: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({ id: Date.now(), completed: false, text: action.payload });
        },
        toggleTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload);
            if(todo){
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action) => {
            return state.filter (todo => todo.id !== action.payload);
        },


        addContact: (state, action) => {
            state.push({ id: Date.now(), name: action.payload.name, email: action.payload.email  });
        },
        editContact: (state, action) => {
            const contact = state.find(contact => contact.id === action.payload.id);
            if(contact){
                contact.name = action.payload.name
                contact.email = action.payload.email
            }
        },
        DeleteContact: (state, action) => {
            return state.filter (contact => contact.id !== action.payload);
        },
        UserInfo: (state, action) => {
            state.users.push(action.payload)
        }
    },
})


export const {addContact, UserInfo, editContact, DeleteContact,addTodo, toggleTodo, deleteTodo,}= tabsSlice.actions;
export default tabsSlice.reducer;