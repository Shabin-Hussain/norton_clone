 import React from 'react'
import Header from '../components/Header'
import './Landingpage.css'



function Landingpage() {
  return (
    <>
  
   
       <div className='w-100' style={{height:'100vh',position:'relative'}}>
         

            {/* Header */}
        <div style={{ position: 'relative', zIndex: 3 }}>
          <Header /> 
        </div>




          <video src="public/video.mp4" style={{top:0,left:0,height:'100%',width:'100%',objectFit:'cover',position:'fixed',zIndex:1}} autoPlay muted loop></video> 
          
          <h1   style={{ position:'fixed',zIndex:2, textAlign:'center',left:'0px',width:'100%',top:'70%',color:'white',fontSize:'50px'}}>RETURN OF A LEGEND</h1>
           <h1 style={{position:'fixed',zIndex:2,top:'85%',left:'0px',textAlign:'center',width:'100%'}}><span style={{ fontSize: '12px',fontWeight: 'bold',border: '1px solid white',padding: '20px 50px',color: 'black',backgroundColor: 'white'}}>DISCOVER MORE</span></h1> 
          
      </div>
  
      <div className='w-100 dnt1' style={{height:'90vh',position:'relative',zIndex:4}}>
        
      </div>  

       <div className='w-100 bg-white container-fluid' style={{height:'300vh',position:'relative',zIndex:4}}>
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8 d-flex align-items-center">
               <div> <h1 className='text-start fnt1'>More Than A <br /> Motorcycle, It’s <br /> A Norton.</h1></div>
              </div>
              <div className="col-md-2"></div>
            </div>
            
          </div>
          <div className="col-md-6">
             <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-9">
               <div> <p className='text-start' style={{fontSize:'16px'}}>A Norton isn’t just built. It’s crafted. A Norton has always been more than a motorcycle. Every line, every curve and every detail is deliberate. We choose the finest materials and components for performance, then shape them through an obsession with craftsmanship that is timeless. The result isn’t noise or excess. It's presence, control, and clarity. A ride that is as precise as it is effortless.</p></div>

               <div>
                <h6 ><span style={{fontWeight:'bolder',fontSize:'12px'}}>ABOUT US</span>
                  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em"><path d="M5.63786 4.72053L11.3192 4.72045M11.3192 4.72045L11.3192 10.321M11.3192 4.72045L4.71953 11.3201" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </h6>
               </div>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>

        <div className="row " style={{marginTop:'180px'}}>
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <h1 className='text-center' ><b style={{fontSize:'50px'}}>First Edition</b></h1>
            <p className='text-center'>Introducing the exclusive First Edition models of the Manx R and Manx. Featuring full carbon fibre bodywork, precision- <br />machined billet finishes, a titanium Akrapovič exhaust system, plus a suite of unique, bespoke features.</p>
            <img className='bk1' src="public/first.webp" alt="image of bike"/>

          
            <p className='text-center' ><span type='button'  className='border bg-black text-white' style={{padding:'15px 25px'}}>WAITLIST</span></p>
          

             
          </div>
          <div className="col-md-1"></div>
        </div>

        <div className="row" style={{marginTop:'100px'}}>

        </div>
      </div>  

       <div className='w-100 bg-white dnt2' style={{height:'100vh',position:'relative',zIndex:4}}>
        
      </div>  



      <div className='w-100 bg-black' style={{height:'200vh',position:'relative',zIndex:4}}>
        
      </div>  





      
     

    
    </>
  )
}

export default Landingpage 

