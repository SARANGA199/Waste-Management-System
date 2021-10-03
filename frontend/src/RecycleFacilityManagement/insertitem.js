import React, { Component } from 'react'
import axios from 'axios'
import addrecycle from './addrecycle.css'
export default class insertitem extends Component {

    constructor(props){
        super(props);
            this.state={
                itemName:"",
                category:"",
                date:"",
                description:"",
                unitPrice:""

            }
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

        const {itemName,category,date,description,unitPrice} = this.state;

        const data ={
            itemName:itemName,
            category:category,
            date:date,
            description:description,
            unitPrice:unitPrice
        }

        console.log(data)

        axios.post("http://localhost:8070/item/additem",data).then((res)=>{

              if(res.data.success){

                alert("item insert successfuly")
                  this.props.history.push("/itemdisp")
                this.setState({
                  itemName:"",
                  category:"",
                  date:"",
                  description:"",
                  unitPrice:""
                })
              }

        })


    }

    render() {
        return (
          <div class="container-fluid px-1 py-5 mx-auto">
          <div class="row d-flex justify-content-center">
              <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <div class="card">
              <h3 class="text-center mb-4" >Add new Item</h3>
               <form class="row g-3" class="form-card" onSubmit={this.onSubmit}>
              <div class="col-md-6" >
                <label style={{paddingRight:'160px'}} >Item Name</label>
                <input  type="text" class="form-control" id="itemname" name="itemName" value={this.state.itemName} onChange={this.handleinputchanges} required/>
              </div>
              <div class="col-md-6">
              <label style={{paddingRight:'180px',paddingTop:'20px'}} >Category</label>
                <input type="text" class="form-control" name="category" value={this.state.category} onChange={this.handleinputchanges} required/>
              </div>
              <div class="col-12">
              <label style={{paddingRight:'485px',paddingTop:'20px'}}   >Date</label>
                <input style={{width:'280px'}} type="date" class="form-control" name="date" placeholder="1234 Main St" value={this.state.date} onChange={this.handleinputchanges} required/>
              </div>
              <div class="col-12">
              <label style={{paddingRight:'440px',paddingTop:'20px'}}  >Description</label>
                <textarea style={{width:'400px'}} class="form-control" name="description" value={this.state.description} onChange={this.handleinputchanges}></textarea>
              </div>
              
              <label style={{paddingRight:'420px',paddingTop:'20px'}} >Unit Price(1kg)</label>
              <div style={{width:'200px'}}>
              <div class="input-group mb-3">
              <span  class="input-group-text">RS.</span>
              <input  type="number" name="unitPrice" class="form-control" aria-label="Amount (to the nearest dollar)"value={this.state.unitPrice} onChange={this.handleinputchanges} required/>
              <span class="input-group-text">.00</span>
            </div>
            </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary" class="btn-block btn-primary"  formAction="/">submit</button>
              </div>
            </form>
            </div>
            </div>
            </div>
            </div>
        )
    }
}
