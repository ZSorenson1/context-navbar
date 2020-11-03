import React, { useState, useContext } from 'react'
import MyContext from '../context/MyContext'

const Form = () => {
    const context = useContext(MyContext)

    const submitHandler = (e) => {
        e.preventDefault();
        const newName = e.target.formInput.value;
        console.log(newName);
        context.setName(newName);
    }

    return (
            <form action="" onSubmit={(e) => submitHandler(e)}>
                <div>
                    <input type="text" name="formInput"/>
                    <input type="submit"/>
                </div>
            </form>
    )
}

export default Form;
