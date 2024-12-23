import {useState,useRef} from "react";

export default function Form(){
    const InputNameRef = useRef()
    const InputAgeRef = useRef()
    const InputCityRef = useRef()
    const InputCountryRef = useRef()
    const InputtConditionsRef = useRef()
   
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
            {(new Date).toLocaleString()}

        <div className="form-group">
                <label>Name</label>
                <input type="text" name='name' className='form-control' id="name"   ref={InputNameRef}/>
            </div>

            <div className="form-group">
                <label>Age</label>
                <input type="text" name='city' className='form-control' id="age"  ref={InputAgeRef}/>
            </div>
            <div className="form-check">
               
                <label htmlFor="">jaccepte</label>
                <input type="checkbox" id="accept"  className='form-check'  ref={InputtConditionsRef} />
            </div>
            <div className="form-group">
                <label>City</label>
                <input type="text" name='city' className='form-control' ref={InputCityRef}/>
            </div>

            <div className="form-group">
               
            <button className="btn btn-primary">Save</button>
                
            </div>
            <div className="form-group">
                <label>Country</label>
                <label htmlFor="country"></label>
                <select className="form-control" name="country" ref={InputCountryRef}>
                    <option value='MA'>Maroc</option>
                    <option value='DZ'>Algérie</option>
                    <option value='TN'>Tunisie</option>
                    <option value='OTHER'>other</option>
                </select>
            </div>
        </form>
    </div>
}