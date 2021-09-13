import React, { Component } from 'react'
import axios from 'axios';

export default class EditPickupReq extends Component {

    constructor(props){

        super(props);
        this.onSubmit = this.onSubmit.bind(this)

        this.state={
           
            rid :" ",
            PackSize : " ",
            vehicleType : " ",
            destination : " ",
            distance : " ",
            deliveryTown : " ",
            arrivalTime : " ",
            date : " ",
            
        

        }
    }


     
    onSubmit = (e) =>{

        e.preventDefault();

        const id = this.props.match.params.id;
        
        const { PackSize,vehicleType,destination,distance,deliveryTown,arrivalTime,date} = this.state;
         
       
        const data = {

           
            PackSize: PackSize,
            destination : destination,
            vehicleType : vehicleType,
            distance :distance,
            deliveryTown : deliveryTown,
            arrivalTime :arrivalTime,
            date : date
        }

        axios.put(`http://localhost:8070/routeReq/updateReqRoute/${id}`,data).then((res) =>{
            if(res.data.success){
                alert("Successfully Updated !");
                this.setState(
                    {
                      
                        PackSize : " ",
                        vehicleType : " ",
                        destination : " ",
                        distance : " ",
                        deliveryTown : " ",
                        arrivalTime : " ",
                        date : " ",
                        
                    }
                )

                this.props.history.push('/routeReq');
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
    
        axios.get(`http://localhost:8070/routeReq/Routereq/${id}`).then((res)=>{
    
             if(res.data.success){
    
                this.setState({
                    PackSize : res.data.Routereq.PackSize,
                    destination:res.data.Routereq.destination,
                    vehicleType: res.data.Routereq.vehicleType,
                    distance: res.data.Routereq.distance,
                    deliveryTown: res.data.Routereq.deliveryTown,
                    arrivalTime: res.data.Routereq.arrivalTime,
                    date: res.data.Routereq.date,

                    
                });
    
             
             }
    
        })
     }  


 

    render() {
        return (
            <div>
                <div className="container">

            <form >
            

            <div className="col-md-4 mb-3">
                <label htmlFor="name" className="form-label">
                Package Size(KG)
                </label>
                <input
                disabled
                type="text"
                className="form-control"
                name="PackSize"
                value= {this.state.PackSize}
                onChange = {this.handleInputChange}
                
                />
            </div>
            


                        
                    <div className="col-md-2 mb-3">
                                    <label htmlFor="category" className="form-label">
                                    Vehicle Type
                                    </label>
                                    <select
                                    className="form-select"
                                    name="vehicleType"
                                    value= {this.state.vehicleType}
                                    onChange = {this.handleInputChange}
                                    
                                    >
                                        <option selected>Select the Nearby Town</option>
                                        <option value={"Truck"}>Truck</option>
                                        <option value={"Van"}>Van</option>
                                        <option value={"Bike"}>Bike</option>
                                    
                                        </select>
                                    </div>  <br/><br/>             


            
                            <div className="col-md-4 mb-3">
                                <label className="form-label">
                                Destination
                                </label>
                                <input
                                disabled
                                type="text"
                                className="form-control"
                                name="destination"
                                value= {this.state.destination}
                                onChange = {this.handleInputChange}
                                
                                />
                            </div>


            
                                <div className="col-md-4 mb-3">
                                    <label className="form-label">
                                    Distance
                                    </label>
                                    <input
                                    required
                                    type="text"
                                    className="form-control"
                                    name="distance"
                                    value= {this.state.distance}
                                    onChange = {this.handleInputChange}
                                    
                                    />
                                </div>

                                        
                                <div className="col-md-2 mb-3">
                                    <label htmlFor="category" className="form-label">
                                    Delivery Town
                                    </label>
                                    <select
                                    className="form-select"
                                    name="deliveryTown"
                                    value= {this.state.deliveryTown}
                                    onChange = {this.handleInputChange}
                                    
                                                            >
                                        <option selected>Select the Nearby Town</option>
                                        <option value={"MATARA"}>MATARA</option>
                                        <option value={"GALLE"}>GALLE</option>
                                        <option value={"DIKWELLA"}>DIKWELLA</option>
                                        <option value={"AKURASSA"}>AKURASSA</option>
                                        <option value={"WALIGAMA"}>WALIGAMA</option>
                                        </select>
                                    </div>  <br/><br/>              



                                <div className="col-md-4 mb-3">
                                    <label htmlFor="name" className="form-label">
                                    Arrival Time
                                    </label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    name="arrivalTime"
                                    value= {this.state.arrivalTime}
                                    onChange = {this.handleInputChange}
                                    required
                                    
                                    />
                                </div>


                                
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="name" className="form-label">
                                    Date
                                    </label>
                                    <input
                                    type="date"
                                    className="form-control"
                                    name="date"
                                    value= {this.state.date}
                                    onChange = {this.handleInputChange}
                                
                                    
                                    />
                                </div>


                        <hr className="col-md-4 mb-3" />
                        
                        <div className="form-check ">
                            <input
                            
                            type="checkbox"
                            className="form-check-input"
                            id="save-info" 
                            required
                            />


                            <label className="col-md-4 form-check-label" htmlFor="save-info">
                            I agree with the storage and handling of my data
                            </label>
                        </div>
                        <hr className="col-md-4 mb-4" />

                        <button type="submit" id= " btn1" className="btn btn-primary mb-5" onClick={this.onSubmit}>
                            Update
                        </button>
                        </form>
                        </div>

                        
                

            </div>
        )
    }
}
