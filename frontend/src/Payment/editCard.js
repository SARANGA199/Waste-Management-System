import React, { Component } from 'react'
import axios from 'axios';

export default class editCard extends Component {

    constructor(props){

        super(props);
        this.onSubmit = this.onSubmit.bind(this)

        this.state={
           
            cardName : "" ,
            cardNumber : "",
            cardType: "",
            cardExpiration: "",
            cardSecurityCode: "",
            cardPostalCode: ""
            
        

        }
    }


     
    onSubmit = (e) =>{
        
        e.preventDefault();

        const id = this.props.match.params.id;
   
        const { cardName,cardNumber,cardType,cardExpiration,cardSecurityCode,cardPostalCode} = this.state;
         
       
        const data = {

            cardName : cardName ,
            cardNumber : cardNumber,
            cardType: cardType,
            cardExpiration: cardExpiration,
            cardSecurityCode: cardSecurityCode,
            cardPostalCode: cardPostalCode
        }
        
            
        axios.put(`http://localhost:8070/formcards/editCard/${id}`,data).then((res) =>{

       
            if(res.data.success){
                alert("Successfully Updated !");
                this.setState(
                    {
                        cardName : "" ,
                        cardNumber : "",
                        cardType: "",
                        cardExpiration: "",
                        cardSecurityCode: "",
                        cardPostalCode: ""   
                    }
                )
                this.props.history.push('/formcards');
                
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
    
        axios.get(`http://localhost:8070/formcards/formcards/${id}`).then((res)=>{
    
             if(res.data.success){
    
                this.setState({
                    cardName : res.data.formcards.cardName,
                    cardNumber:res.data.formcards.cardNumber,
                    cardType: res.data.formcards.cardType,
                    cardExpiration: res.data.formcards.cardExpiration,
                    cardSecurityCode: res.data.formcards.cardSecurityCode,
                    cardPostalCode: res.data.formcards.cardPostalCode,                   
                });
    
             
             }
    
        })
     }  


 

    render() {
        return (
            <div>
                <div className="container">

            <form id="myform" style={{width:"1900px"}}>
            

            <div className="col-md-4 mb-3">
                <label htmlFor="name" className="form-label">
                Package Size(KG)
                </label>
                <input
                disabled
                type="text"
                className="form-control"
                name="PackSize"
                value= {this.state.cardName}
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
                                    value= {this.state.cardNumber}
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
                                value= {this.state.cardType}
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
                                    value= {this.state.cardExpiration}
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
                                    value= {this.state.cardPostalCode}
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
                                    value= {this.state.cardSecurityCode}
                                    onChange = {this.handleInputChange}
                                    required
                                    
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