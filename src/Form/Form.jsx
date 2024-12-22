export default function Form(){
    const [InputName,setInputName] = useState('')
    const [InputAge,setInputAge] = useState('')
    const [InputConditions,setInputConditions] = useState(false)
    return <div className={'container'}>
        <form >

        <div className="form-group">
                <label>Name</label>
                <input type="text" name='name' className='form-control' id="name" />
            </div>

            <div className="form-group">
                <label>Age</label>
                <input type="text" name='city' className='form-control' id="age"/>
            </div>
            <div className="form-check">
               
                <label htmlFor="">jaccepte</label>
                <input type="checkbox" id="accept"  className='form-check' />
            </div>

            <div className="form-group">
               
            <button className="btn btn-primary">Save</button>
                
            </div>
        </form>
    </div>
}