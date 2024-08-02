import React, {useState} from 'react';
import { Container} from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css'
import TabsComponent from "../component/Tabs";
import FirstTab from "../component/FirstTab";
import SecondTab from "../component/SecondTab";
import Third from "../component/Third";

const VALUES = {
    itemOne: "one",
    itemTwo: "two",
    itemThree: "three"
}

const GetCategories = ({value}) => {
    switch(value){
        case VALUES.itemOne:{
            return <FirstTab/>;
        }
        case VALUES.itemTwo:{
            return <SecondTab/>
        }
        case VALUES.itemThree:{
            return <Third/>
        }

        default: return <></>
    }
}

function MainPage() {

   const categoriesSelect = [
       {value: VALUES.itemOne, label: "One"},
       {value: VALUES.itemTwo, label: "Two"},
       {value: VALUES.itemThree, label: "Three"}
   ]
const [value, setValue] = useState(categoriesSelect[0].value);

    return (
        <Container>
            <TabsComponent categoriesSelect={categoriesSelect} value={value} setValue={setValue} />
            <GetCategories value={value}/>
        </Container>
    );
}

export default MainPage;