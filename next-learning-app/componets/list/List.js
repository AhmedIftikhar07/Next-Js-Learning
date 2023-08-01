import React from 'react'
import Item from '../item/Item'

const List = (props) => {
    const items = props.arr.map(item=>{
        return <Item key={item} text = {item}></Item>
    })
  return (
    <div>
      <ul>
        {items}
      </ul>
    </div>
  )
}

export default List
