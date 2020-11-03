import React, { useState, useContext } from 'react'
import MyContext from '../context/MyContext';


const Wrapper = (props) => {
    const [name, setName] = useState(' ')

    return (
        <MyContext.Provider value={{name, setName}}>
            {props.children}
        </MyContext.Provider>
    )
}

export default Wrapper;