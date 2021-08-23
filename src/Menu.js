import React from "react"

const Menu = function ({menuItems}){
  return (
    <div>
      {menuItems.map(function ({img, title}){
        return (
          <div className="menuItem">
              <img className="photo" src={img} alt={title}/>
              <h3>{title}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Menu;