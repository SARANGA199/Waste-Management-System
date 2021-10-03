import React, { Component } from 'react'
import axios from 'axios'

export default class EditSalary extends Component {

    constructor(props){
        super(props);
        this.state={
           ReqRoute:[]
        };
      }
      
      componentDidMount(){
        const UID = "zeusUser";
        this.retrivePayments(UID);
      }
      
      
      
      retrivePayments = (UID) => {
        const URL = "http://localhost:8070/userpayments/MyPayments/"+UID;
        axios.get(URL).then(res =>{
      
            if(res.data.success){

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
        let ans = window.confirm("Do you want to delete this record?");
        if(ans){
            const URL = 'http://localhost:8070/userpayments/deletePay/'+id;
            axios.delete(URL).then((res)=>{
                alert("Deleted!");
                this. retrivePayments();
            }).catch((err)=>{
                alert(err.message);
            })
        }  
      }



    render() {
        return (
            <><center><h1>My Payment History</h1> 
           
            </center>
            <div className="container " style={{ width: "100%" }}>
                <table className="table">

                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User ID</th>
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


                            </tr>


                        ))}


                    </tbody>

                </table>
            </div></>
        )
    }
}