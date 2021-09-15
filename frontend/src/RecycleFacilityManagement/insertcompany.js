import React, { Component } from 'react'
import axios from 'axios';

export default class insertcompany extends Component {

    constructor(props){
        super(props);
            this.state={
                companyName:"",
                companyLocation:"",
                regNumber:"",
                itemId:"",

            }

            this.state={

              items:[]
          
            }
    }

      
  componentDidMount(){
    this.retrieveItem();
  }

  retrieveItem(){
      axios.get("http://localhost:8070/item/posts").then(res =>{
        if(res.data.success){
          this.setState({
            items:res.data.existingitems
          });
        console.log(this.state.items)
          
        }
      });
 
  }

    handleinputchanges= (e)=>{
            const{name,value} = e.target;

            this.setState({
               ...this.state,
                [name]:value

            })
    }

    onSubmit = (e)=>{

        e.preventDefault();

        const {companyName,companyLocation,regNumber,itemId} = this.state;

        const data ={
            companyName:companyName,
            companyLocation:companyLocation,
            regNumber:regNumber,
            itemId:itemId,
        }

        console.log(data)

        axios.post("http://localhost:8070/Company/addcompany",data).then((res)=>{

              if(res.data.success){
                this.setState({
                  companyName:"",
                  companyLocation:"",
                  regNumber:"",
                  itemId:"",
                })
              }

        })


    }
    render() {
        return (
            <div>
               <form class="row g-3">
              <div class="col-md-6">
                <label class="form-label">Company Name</label>
                <input type="text" class="form-control" id="companyName" name="companyName" value={this.state.companyName} onChange={this.handleinputchanges} />
              </div>
              <div class="col-md-6">
                <label  class="form-label">Select Company Location</label>
                <select class="form-select" aria-label="Default select example" name="companyLocation" value={this.state.companyLocation} onChange={this.handleinputchanges}>
                <option selected>Select</option>
                <option value="Matara">Matara</option>
                <option value="Akuressa">Akuressa</option>
                <option value="Deniyaya">Deniyaya</option>
                </select>
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">Company Register Number</label>
                <input type="text" class="form-control" name="regNumber" placeholder="1234 Main St" value={this.state.regNumber} onChange={this.handleinputchanges}/>
              </div>
              <div>
              <label for="inputAddress" class="form-label">Select recycling category</label>
              <select class="form-select" aria-label="Default select example" name="itemId" value={this.state.itemId} onChange={this.handleinputchanges}>
              <option selected>Select</option>
              {this.state.items.map((items,index)=>(
                    
                <option value={items._id}>{items.category}</option>

                ))}
                </select>
                </div>
              <div class="col-12">
                  
                <button type="submit" class="btn btn-primary" onClick={this.onSubmit} >submit</button>
              </div>
            </form>
            </div>
        )
    }
}
