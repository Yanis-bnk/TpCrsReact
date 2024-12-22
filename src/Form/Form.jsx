import {useState} from "react";

export default function Form(){
    const [InputName,setInputName] = useState('')
    const [InputAge,setInputAge] = useState('')
    const [InputConditions,setInputConditions] = useState(false)
    const InputNameChange=()=>{
        setInputName(document.querySelector('#name').value)
    }
    const InputAgeChange=()=>{
        setInputAge(document.querySelector('#age').value)
    }
    const InputConditionChange=()=>{
        setInputConditions(document.querySelector('#accept').Checked)
    }
    return <div className={'container'}>
        <form >

        <div className="form-group">
                <label>Name</label>
                <input type="text" name='name' className='form-control' id="name"  onChange={InputNameChange}/>
            </div>

            <div className="form-group">
                <label>Age</label>
                <input type="text" name='city' className='form-control' id="age"  onChange={InputAgeChange}/>
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