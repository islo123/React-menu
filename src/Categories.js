import React from "react"

const Categories = function ({categories, filterBtn}){
  return (
    <div>
      {categories.map(function (category){
        return (
          <button onClick={function (){return filterBtn(category)}} className="filter-btn">{category}</button>
        )
      })}
    </div>
  )
}

export default Categories;