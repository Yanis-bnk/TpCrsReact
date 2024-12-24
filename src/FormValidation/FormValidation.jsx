import {useEffect, useRef, useState} from "react";


export default function FormValidation(){

    const name = useRef()
    const email = useRef()
    const message = useRef()
    const acceptAllConditions = useRef()
    const submitForm = (e) => {
        e.preventDefault()
    }




    return <div className="container">
        <form onSubmit={submitForm}>
        <h1>Contact</h1>
    <div className="form-outline mb-4 ">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-control" ref={name}/>
                   
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="email">Email address</label>
                    <input type="text" id="email" className="form-control" ref={email}/>
                  
                </div>

                
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" rows="4" ref={message}></textarea>
                   
                </div>

           
                <div className="form-check mb-4">
                    <div className="d-flex">
                        <input className="form-check-input me-2" type="checkbox" id="acceptAllConditions" ref={acceptAllConditions}/>
                        <label className="form-check-label" htmlFor="acceptAllConditions">
                            Accept all conditions
                        </label>
                    </div>

                </div>
                <button  type="submit" className="btn btn-primary w-100 mb-4">Submit</button>
                </form>
    
    
                </div>
}