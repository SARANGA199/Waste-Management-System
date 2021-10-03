import React from 'react'

export default function ViewOrders() {
    return (
        <div className="profile">
            <form>
             
            <center> <h1 className="Hfont"> View Delivery Orders</h1> </center>
              <br/> <br/><br/>
            <h4> You doesn't have any delivery orders at the moment..</h4> </form>

            <br/> <br/><br/>  <br/> <br/><br/> <br/> <br/><br/>
            <a className="btn btn-success"
           href={`/`}
           style={{textDecoration:'none'}}
           
           >Go Back</a>
        </div>
    )
}
