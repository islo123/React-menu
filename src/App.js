import React, { useState } from "react"
import Menu from "./Menu";
import Categories from "./Categories";
import data from "./data"


const categories = ["all", ...new Set(data.map(function (item){
  return item.category
}))]

const App = function (){
  const [menuItems, setMenuItems] = useState(data)


  const filterBtn = function (category){
    if("all" === category){
      return setMenuItems(data)
    }
    const filter = data.filter(function (item){
      return item.category === category
    })
    setMenuItems(filter)
  }


  return (
    <div>
      
      <Categories filterBtn={filterBtn} categories={categories}/>
      <Menu menuItems={menuItems}/>
    </div>
  )
}
export default App;
