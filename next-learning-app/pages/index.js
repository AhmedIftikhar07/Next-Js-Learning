import Button from "@/componets/buttons/Button";
import Greet from "@/componets/greet/Greet";
import List from "@/componets/list/List";

export default function Home() {
  const arr = ['irem-1','irem-2','irem-3','irem-4']
  return (
    <>
      <Greet></Greet>
      {/* <Button>Save</Button> */}
      <List arr={arr}></List>
      <Button text = "Save"></Button>
    </>
  )
}
