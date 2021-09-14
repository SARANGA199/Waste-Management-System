import "./Delivery.css";
import React, { Component } from 'react'
import axios from 'axios';

export default class DriverProfile extends Component {

  constructor(props){

    super(props);
    this.onSubmit = this.onSubmit.bind(this)

    this.state={
       
      userId :" ",
      licenseId : " ",
      nearbyTown : " ",
      vehicleNo : " ",
      vehicleType : " ",
      
    

    }
}
 
onSubmit = (e) =>{

    e.preventDefault();

    const id = this.props.match.params.id;
    
    const { licenseId,nearbyTown,vehicleNo,vehicleType} = this.state;
     
   
    const data = {

       
        licenseId: licenseId,
        nearbyTown : nearbyTown,
        vehicleNo : vehicleNo,
        vehicleType :vehicleType,
        
    }

    axios.put(`http://localhost:8070/driver/updateProfile/${id}`,data).then((res) =>{
        if(res.data.success){
            alert("Successfully Updated !");
            this.setState(
                {
                  
                  licenseId : " ",
                  nearbyTown : " ",
                  vehicleNo : " ",
                  vehicleType : " ",
                 
                }
            )
            this.componentDidMount();
            
        }
    })
}

handleInputChange = (e)=>{
    const {name,value} = e.target;

    this.setState({
        ...this.state,
        [name] :value
    })


}


componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`http://localhost:8070/driver/prof/${id}`).then((res)=>{

         if(res.data.success){

            this.setState({
              licenseId : res.data.prof.licenseId,
              nearbyTown:res.data.prof.nearbyTown,
              vehicleNo: res.data.prof.vehicleNo,
              vehicleType: res.data.prof.vehicleType,
        
            });
            
         
         }

    })
 }  

onDelete= (id)=>{
    let ans = window.confirm("Are you sure want to delete your account?");
    if(ans){  
    axios.delete(`http://localhost:8070/driver/deleteProfile/${id}`).then((res)=>{
        alert("Driver Profile Successfully Deleted");
        this.props.history.push('/');
        }).catch((err)=>{
        alert(err.message);
       })
    }    

}


render() {
 return (
     <div className="profile">
         <center><h1 className="Hfont">Driver Profile</h1></center>
      
         <br></br>
      <div >
            <form onSubmit={this.onSubmit}>
            <div className="col-md-7 mb-3" style={{display:"flex"}}>
            <div className="col-md-6 mb-3 font" >
             <label htmlFor="license" className="form-label">
                Driving License ID  :
                </label></div>
                <div className="col-md-7 mb-2" >
               <input
                disabled
                type="text"
                className="form-control"
                name="licenseId"
                value= {this.state.licenseId}
                onChange = {this.handleInputChange}
                
                /></div>
            </div>
                   
                    <div className="col-md-7 mb-3 font" style={{display:"flex"}}>
                    <div className="col-md-6 mb-2">
                    <label htmlFor="location" className="form-label">
                    Nearby Location :
                    </label></div>
                 <div className="col-md-7 mb-2">
                    <select
                     className="form-select"
                     name="nearbyTown"
                     value= {this.state.nearbyTown}
                     onChange = {this.handleInputChange}
                    >
                    <option value={"Akuressa"}>Akuressa</option>
                    <option value={"Galle"}>Galle</option>
                    <option value={"Matara"}>Matara</option>
                    </select>
                    </div> </div>            


                 <div style={{display:"flex"}} className="col-md-7 mb-3">
                    <div className="col-md-6 mb-3 font">      
                     <label  htmlFor="number" className="form-label">
                          Vehicle Number :
                      </label></div>
                     <div className="col-md-7 mb-2">
                     <input
                      type="text"
                      className="form-control"
                      name="vehicleNo"
                      value= {this.state.vehicleNo}
                      required
                      onChange = {this.handleInputChange}
                                />
                            </div></div>


            
                            <div style={{display:"flex"}} className="col-md-7 mb-3" >
                            <div className="col-md-6 mb-3 font">
                        <label htmlFor="category" className="form-label">
                         Vehicle Type :
                        </label></div>
                 <div className="col-md-7 mb-2">      
                      <select
                        className="form-select"
                        name="vehicleType"
                         value= {this.state.vehicleType} 
                         onChange = {this.handleInputChange}
                             >
                             
                             <option value={"Bike"}>Bike</option>
                             <option value={"Three-Wheeler"}>Three-Wheeler</option>
                             <option value={"Truck"}>Truck</option>
                             <option value={"Van"}>Van</option>
                            
                            </select></div>
                         </div>                       
         <button type="submit" id= "btnupdate" className="btn btn-success" >
             Update & Save 
             </button>
            <hr className="col-md-10 mb-3" />
             </form>
            </div>

        <div>   <br></br> <br></br>
          <button className ="btn btn-warning"><a href="/delivery/display" style={{textDecoration:'none', color :'white'}}>View Stats </a>
             
             </button>    </div>             
             <br></br>    <br></br> 

            
             <br></br>
           <div>  <button type="button" id= "btndelete" className="btn btn-danger"
           href="/" onClick={()=> this.onDelete(this.props.match.params.id)}
           >
            Delete Driver Profile
             </button>    </div>  


    </div>
        )
    }
}
