import React from 'react';
import PhotoSlide from './PhotoSlide';
import  './HomeStyle.css';


function HomePage(){


    return(

        <div >
            <div className= "text-center">
            <PhotoSlide/>
            </div>
            <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-5">
            <h6>Why ecoBin</h6>
            <hr/>
            <p class="text-justify"/>
                </div>
          
        </div>
        
      </div>
     
</footer>
            
        </div>
    )
    

}
export default HomePage;