import React from "react";
import { useState } from "react";

function CategoryFilter({categories, setCategories, handleSelect, select, setSelect}) {

  return (
      
    <div className="categories">
       
      <h5>Category filters</h5>
      {categories.map((cat)=> {
        return <button className={select=== cat ? "selected" : ""} onClick={()=>handleSelect(cat)} key={cat} >{cat}</button>
      })}
    </div>
  )}

export default CategoryFilter;
