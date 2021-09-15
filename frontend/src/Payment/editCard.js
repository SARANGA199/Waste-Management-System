import React, { Component } from 'react'
import axios from 'axios';

export default class EditCard extends Component {
    /*
        constructor(props){
            super(props);
            this.state={
                uid:"",
                cardName:"",
                cardNumber:"",
                cardType:"",
                cardExpiration:"",
                cardSecurityCode:"",
                passcardNicknameword:"",
            }
    
        }
    
    */
    
      
        constructor(props){
            
            super(props);
            //this.onSubmit = this.onSubmit.bind(this)
    
            this.state={
                
                cardName : "" ,
                cardNumber : "",
                cardType: "",
                cardExpiration: "",
                cardSecurityCode: "",
                cardNickname: ""
            }
        }
    
        handleInputChange =(e) =>{
            const {name,value} = e.target;
            this.setState({
                ...this.state,
                [name]:value
            })
        }    
    
    
        componentDidMount(){
    
            //const id = this.props.match.params.id;
            //const id = param_id;
            const id="61408760f92f8928fcf89365";
            //const queryParams = new URLSearchParams(window.location.search);
            //const id = queryParams.get('id');
    
            alert(id);
    
            axios.get(`http://localhost:8070/formcards/formcards/getCard/${id}`).then((res)=>{
        
                 if(res.data.success){
                    alert("Data fetched");
                    this.setState({
                        Card: res.data.Card,
                        cardName : res.data.formcards.cardName,
                        cardNumber:res.data.formcards.cardNumber,
                        cardType: res.data.formcards.cardType,
                        cardExpiration: res.data.formcards.cardExpiration,
                        cardSecurityCode: res.data.formcards.cardSecurityCode,
                        cardNickname: res.data.formcards.cardNickname,                   
                    });
        
                 
                 }
        
            })
         }  
    
    
      
        onSubmit = (e) =>{
            
            e.preventDefault();
    
            const id="61408760f92f8928fcf89365";
       
            const { cardName,cardNumber,cardType,cardExpiration,cardSecurityCode,cardNickname} = this.state;
             
           
            const data = {
    
                cardName : cardName ,
                cardNumber : cardNumber,
                cardType: cardType,
                cardExpiration: cardExpiration,
                cardSecurityCode: cardSecurityCode,
                cardNickname: cardNickname
            }
    
            alert(id);
            
                
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
                            cardNickname: ""   
                        }
                    )
                    //this.props.history.push('/formcards');
                    
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
    
      
        
    
     
    
        render() {
            return (
                
                <div>
                    <center>
                    <div className="container">
    
                <form id="myform" style={{width:"1900px"}}>
                
    
                <div className="col-md-4 mb-3">
                    <label htmlFor="name" className="form-label">
                    New Nickname
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    name="PackSize"
    
                    onChange = {this.handleInputChange}
                    
                    />
                </div>   
                        
                            <hr className="col-md-4 mb-4" />
    
                            <button type="submit" id= " btn1" className="btn btn-primary mb-5" onClick={this.onSubmit}>
                                Update
                            </button>
                            </form>
                            </div>
    
                            
                    
                            </center>  
                </div> 
            ) 
        }
    }