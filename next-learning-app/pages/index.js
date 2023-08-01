import Button from "@/componets/buttons/Button";
import Greet from "@/componets/greet/Greet";
import List from "@/componets/list/List";
import { useState } from "react";

export default function Home() {
  const [arr,setAdd] = useState(['irem-1','irem-2','irem-3','irem-4'])

  
  const addHandler = ()=>{
    setAdd([...arr, 'new item added']);
  }
 
  return (
    <>
      <Greet></Greet>
      {/* <Button>Save</Button> */}
      <List arr={arr}></List>
      <Button text = "Add" addHandler={addHandler}></Button>
    </>
  )
}
