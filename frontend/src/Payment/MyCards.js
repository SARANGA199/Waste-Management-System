import React, { Component } from 'react'
import axios from 'axios'

export default class MyCards extends Component {

    constructor(props){

        super(props);
      
        this.state={
          
           ReqRoute:[]
      
        };
      }
      
      componentDidMount(){
        const id= "ui22222";
        this.retriveCards(id);
      }
      
      
      
      retriveCards=(id)=>{
        const URL = "http://localhost:8070/formcards/getCard/"+id;
        axios.get(URL).then(res =>{
      
            if(res.data.success){
                this.setState({ 
                    ReqRoute : res.data.existingReqRouter,            
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
            const URL = 'http://localhost:8070/formcards/deleteCard/'+id;
            axios.delete(URL).then((res)=>{
                alert("Deleted!");
                this. retriveCards();
            }).catch((err)=>{
                alert(err.message);
            })
        }  
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
            <><center><h1>Saved Payment Methods</h1>
            <a href="/credit-card-validation/addcard"><button className ="btn btn-success">Add new</button> </a>
            </center>
            <div className="container " style={{ width: "100%" }}>
                <table className="table">

                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nickname</th>
                            <th scope="col">Card holder</th>
                            <th scope="col">Card number</th>
                            <th scope="col">Type</th>
                            <th scope="col">Exp Date</th>
                            


                        </tr>

                    </thead>
                    <tbody>
                        {this.state.ReqRoute.map((Reqr, index) => (

                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{Reqr.cardNickname}</td>
                                <td>{Reqr.cardName}</td>
                                <td>{Reqr.cardNickname}</td>
                                <td style={{ width: '250px' }}>{Reqr.cardType}</td>
                                <td>{Reqr.cardExpiration}</td>
                                


                               

                            </tr>


                        ))}


                    </tbody>

                </table>
            </div></>
        )
    }
}