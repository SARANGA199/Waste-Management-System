import React, { Component } from 'react'
import axios from 'axios'

export default class PaymentData extends Component {

    constructor(props){
        super(props);
        this.state={
           ReqRoute:[]
        };
      }
      
      componentDidMount(){
      
        this.retrivePayments();
      }
      
      
      
      retrivePayments(){

        axios.get("http://localhost:8070/userpayments/allPayments").then(res =>{
      
            if(res.data.success){
                alert("Success!");
                this.setState({
                     
                    ReqRoute : res.data.existingPayRouter,            
                  });
    
              }
              else{
                alert("Failed!");
              }
          
        }).catch((err)=>{
            alert(err.message)
        })
      }
      

      onDelete = (id)=>{
        alert('http://localhost:8070/formcards/deleteCard/${id}');
        const URL = 'http://localhost:8070/userpayments/deletePay/'+id;
          axios.delete(URL).then((res)=>{
              alert("Deleted!");
              this. retrivePayments();
          }).catch((err)=>{
              alert(err.message);
          })
      }

      deleteCard(){

        axios.delete("http://localhost:8070/formcards/delete/${Reqr._id}").then(res =>{
      
            if(res.data.success){
                alert("Delete Success!");
                this.setState({  
                    ReqRoute : res.data.existingReqRouter
                  });
    
              }
              else{
                alert("Delete Failed!");
              }
          
        }).catch((err)=>{
            alert(err.message)
        })
      }

    render() {
        return (
            <><h1>My Payment Methods</h1> 
            <a href="/credit-card-validation/UserPayForm"><button>Add new</button> </a>
            <div className="container " style={{ width: "100%" }}>
                <table className="table">

                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User IDr</th>
                            <th scope="col">Trip Count</th>
                            <th scope="col">Total Payment</th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.state.ReqRoute.map((Reqr, index) => (

                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{Reqr.uid}</td>
                                <td>{Reqr.TripCount}</td>
                                <td style={{ width: '250px' }}>{Reqr.amount}</td>

                                <td>

                                    <a className="btn btn-warning" href={`credit-card-validation/editCard/${Reqr._id}`}>
                                        <i className="fas fa-edit"></i>&nbsp;Edit
                                    </a>
                                    &nbsp;
                                    <a className="btn btn-danger" onClick={() => this.onDelete(Reqr._id)}>
                                        <i className="fas fa-trash-alt"></i>&nbsp;Delete
                                    </a>

                                </td>

                            </tr>


                        ))}


                    </tbody>

                </table>
            </div></>
        )
    }
}