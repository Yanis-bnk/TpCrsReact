export default function FormValidation(){
    return <div className="container">
    <div className="form-outline mb-4 ">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-control" />
                   
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="email">Email address</label>
                    <input type="text" id="email" className="form-control" />
                  
                </div>

                
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" rows="4"></textarea>
                   
                </div>

           
                <div className="form-check mb-4">
                    <div className="d-flex">
                        <input className="form-check-input me-2" type="checkbox" id="acceptAllConditions"
                               />
                        <label className="form-check-label" htmlFor="acceptAllConditions">
                            Accept all conditions
                        </label>
                    </div>

                </div>
    
    
                </div>
}