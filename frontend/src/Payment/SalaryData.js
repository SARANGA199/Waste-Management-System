import React, { Component } from 'react'
import axios from 'axios'

export default class SalaryData extends Component {

    constructor(props){
        super(props);
        this.state={
           ReqRoute:[]
        };
      }
      
      componentDidMount(){
      
        this.retriveSalary();
      }
      
      
      
      retriveSalary(){

        axios.get("http://localhost:8070/salarys/allSalarys").then(res =>{
      
            if(res.data.success){
                alert("Success!");
                this.setState({ 
                    ReqRoute : res.data.existingSalRouter,            
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
        const URL = 'http://localhost:8070/salarys/deleteSal/'+id;
          axios.delete(URL).then((res)=>{
              alert("Deleted!");
              this. retriveSalary();
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
            <><h1>Slary Details</h1> 
            <a href="/credit-card-validation/addSalary"><button>Add new</button> </a>
            <div className="container " style={{ width: "100%" }}>
                <table className="table">

                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User ID</th>
                            <th scope="col">Pay Date</th>
                            <th scope="col">OT Hours</th>
                            <th scope="col">Total Payment</th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.state.ReqRoute.map((Reqr, index) => (

                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{Reqr.EID}</td>
                                <td>{Reqr.pDate}</td>
                                <td style={{ width: '250px' }}>{Reqr.OT_Payment}</td>
                                <td>{Reqr.TotalSalary}</td>
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