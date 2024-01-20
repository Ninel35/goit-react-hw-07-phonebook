import { setFilterAction } from "store/Filter/filterSlice";
import React from 'react'
import { useDispatch } from "react-redux";


const Filter = () => {
    const dispatch = useDispatch()
    
    const handlerFilter = (evt) => {
        dispatch(setFilterAction(evt.target.value))
    }
    
    return (
        <>
         
            <p>Find contacts by name</p>
            <input onChange={handlerFilter} type="text" name="filter" />
           
        </>
     
    );
};
export default Filter;