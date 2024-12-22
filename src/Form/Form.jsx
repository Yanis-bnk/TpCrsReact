import {useState} from "react";

export default function Form(){
   
    const [InputConditions,setInputConditions] = useState(false)
    const [formValues,setformValues] = useState('')
    const handelChange=(e)=>{
        const id = e.currentTarget.id
        const value= e.currentTarget.value
        setformValues(prevState=>{
            return {...prevState,...{[id]:value}}
        })
        console.log(formValues)
    }
    
    const InputConditionChange=()=>{
        setInputConditions(document.querySelector('#accept').Checked)
    }
    return <div className={'container'}>
        <form >

        <div className="form-group">
                <label>Name</label>
                <input type="text" name='name' className='form-control' id="name"  onChange={handelChange}/>
            </div>

            <div className="form-group">
                <label>Age</label>
                <input type="text" name='city' className='form-control' id="age"  onChange={handelChange}/>
            </div>
            <div className="form-check">
               
                <label htmlFor="">jaccepte</label>
                <input type="checkbox" id="accept"  className='form-check'  onChange={InputConditionChange} />
            </div>

            <div className="form-group">
               
            <button className="btn btn-primary">Save</button>
                
            </div>
        </form>
    </div>
}