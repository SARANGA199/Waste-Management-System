import "./Delivery.css";
import React, { Component } from 'react'
import axios from 'axios';

export default class ViewOrders extends Component {


    constructor(props){

        super(props);
       
    
        this.state={
           
          destination :" ",
    
        }
    }

    componentDidMount(){

        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8070/trip/check/${id}`).then((res)=>{
    
             if(res.data.success){
    
                this.setState({
                  destination : res.data.check.destination,
                  
            
                });
                
             
             }else{
                 alert("No orders")
             }
    
        })
     }

     onDelete= (id)=>{
   
        let ans = window.confirm("Are you sure want to decline delivery?");
        if(ans){  
        axios.delete(`http://localhost:8070/trip/deleteTrip/${id}`).then((res)=>{
            alert("You declined the delivery job");
            this.props.history.push('/');
            }).catch((err)=>{
            alert(err.message);
           })
        }    
    
    }


    next= (id)=>{
   

        const data = {

       
            driverId:id,
            deliveryLocation:this.state.destination
            
        }
        axios.post(`http://localhost:8070/delivery/addDelivery`,data).then((res) =>{
            if(res.data.success){
                alert("Successfully Added !");
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

        axios.delete(`http://localhost:8070/trip/deleteTrip/${id}`).then((res)=>{
           
            
            }).catch((err)=>{
            alert(err.message);
           })
            
    
    }
    

    render() {
        return (
            <div>
                <div className="profile">
            <form>
          
            <center> <h1 className="Hfont"> Your Orders</h1> </center>
              <br/> <br/><br/>
              <div className="col-md-8 mb-3 font">

              <label htmlFor="license" className="form-label">
                Delivery Order Location 
                </label>

          <textarea
           type="text"
           name="licenseId"
           value={this.state.destination}
           
           
        />
        <br></br>  <br></br> <br></br>
        <div style={{display:"flex"}}>
        <div className="col-md-9 mb-3">
         <a className="btn btn-success"
        
          type="button"
          onClick={()=> this.next(this.props.match.params.id)}
          href="http://localhost:3000/driver/collect"
          style={{textDecoration:'none'}}
           
           >Accept Delivery</a>
         </div>
         <div className="col-md-9 mb-3">    
         <button type="button" id= "btndelete" className="btn btn-danger"
           href="/" onClick={()=> this.onDelete(this.props.match.params.id)}
           style={{textDecoration:'none'}}
           >
               Decline Delivery
           </button>
           
           </div>
           </div>
              
        </div>


           
           </form> 

            <br/> <br/><br/>  <br/> 
            <a className="btn btn-success"
           href={`/`}
           style={{textDecoration:'none'}}
           
           >Go Back</a>
        </div>
            </div>
        )
    }
}
