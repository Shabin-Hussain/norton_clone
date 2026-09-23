 import React from 'react'
import Header from '../components/Header'
import './Landingpage.css'
import Three60 from '../components/Three60'



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

       <div className='w-100 bg-white container-fluid' style={{height:'350vh',position:'relative',zIndex:4}}>
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

        <div className="row" style={{marginTop:'180px'}}>
            <div className="row border-bottom w-100">
              <div className="col-3">
                <div className="row">
                  <div className="col-md-6 ">
                    <img src="public/home-360-thumbnail-webp.webp" alt="Manx R" width={'90px'} className='ms-md-5'/>
                  </div>
                  <div className="col-md-6">
                    <h5 className='mt-md-3'>Manx R</h5>
                    <p className='text-secondary mt-md-2'>coming soon</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                 <div className="row">
                  <div className="col-md-6 ">
                    <img src="/pdp-hero-images-without-background-b120-desktop-2314-x-2314-px.webp" alt="Manx R" width={'90px'} className='ms-md-5'/>
                  </div>
                  <div className="col-md-6">
                    <h5 className='mt-md-3'>Manx</h5>
                    <p className='text-secondary mt-md-2'>coming soon</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                 <div className="row">
                  <div className="col-md-6 ">
                    <img src="public/atlas-360-view-thumbnail-webp.webp" alt="Manx R" width={'90px'} className='ms-md-5'/>
                  </div>
                  <div className="col-md-6">
                    <h5 className='mt-md-3'>Atlas</h5>
                    <p className='text-secondary mt-md-2'>coming soon</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                 <div className="row">
                  <div className="col-md-6 ">
                    <img src="public/pdp-hero-images-without-background-j106-desktop-2314-x-2314-px.webp" alt="Manx R" width={'90px'} className='ms-md-5'/>
                  </div>
                  <div className="col-md-6">
                    <h5 className='mt-md-3'>Atlas GT</h5>
                    <p className='text-secondary mt-md-2'>coming soon</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3 ">
                <h1 className='text-center mt-4' style={{fontSize:'60px',fontWeight:'bold'}}>1200</h1>
                <p className='text-center text-secondary' >Engine • cc</p>

                 <h1 className='text-center mt-4' style={{fontSize:'60px',fontWeight:'bold'}}>206</h1>
                <p className='text-center text-secondary' >Power • hp</p>

                 <h1 className='text-center mt-4' style={{fontSize:'60px',fontWeight:'bold'}}>130</h1>
                <p className='text-center text-secondary' >Torque • Nm</p>
              </div>
              <div className="col-md-6 ">
               <div /* className='mb-5' */ style={{ marginTop: '-60px' }}> <Three60/></div>
              </div>
              <div className="col-md-3 cname1">
                <div className=" mt-2 mt-md-5 border d-inline-flex align-items-center cname2" style={{padding:'10px 5px'}}>
                 
                    <div style={{height:'22px',width:'22px',backgroundColor:' rgb(167, 169, 172)'}}>
                    </div>
                    <h6 className='ms-2 cname'><b>Trophy Silver</b></h6>
                 
                </div>

                <div className=" mt-2 border d-inline-flex align-items-center" style={{padding:'10px 5px'}}>
                 
                    <div style={{height:'22px',width:'22px',backgroundColor:' rgb(40,39,39)'}}>
                       
                    </div>
                 
                
                    <h6 className='ms-3 cname'><b>Matrix Black</b></h6>
                 
                </div>

                <div className=" mt-2 border d-inline-flex align-items-center" style={{padding:'10px 5px'}}>
                 
                    <div style={{height:'22px',width:'22px',backgroundColor:' rgb(70,71,71)'}}>
                       
                    </div>
                 
                
                    <h6 className='ms-1 cname'><b>Celestial Grey</b></h6>
                 
                </div>

                <div className=" mt-2 border d-inline-flex align-items-center" style={{padding:'10px 5px'}}>
                 
                    <div style={{height:'22px',width:'22px',backgroundColor:' rgb(89,155,167)'}}>
                       
                    </div>
                 
                
                    <h6 className='ms-4 cname'><b>AquaGreen</b></h6>
                 
                </div>

                <div className=" mt-2 border d-inline-flex align-items-center" style={{padding:'10px 5px'}}>
                 
                   <div style={{height:'22px',width:'22px',backgroundColor:' #202124'}}>
                       
                    </div> 

            {/*         <div class="hidden md:flex w-[24px] h-[24px]" style="background: radial-gradient(circle, transparent, rgba(33, 33, 33, 0.63)), repeating-linear-gradient(135deg, rgba(33, 33, 33, 0.63) 0px, rgba(33, 33, 33, 0.63) 2px, transparent 2px, transparent 10px, rgba(33, 33, 33, 0.63) 10px, rgba(33, 33, 33, 0.63) 11px, transparent 11px, transparent 21px), repeating-linear-gradient(45deg, rgb(47, 47, 47) 0px, rgb(47, 47, 47) 4px, transparent 4px, transparent 8px), linear-gradient(90deg, rgba(33, 33, 33, 0.63), rgba(33, 33, 33, 0.63)); border: 1px solid rgb(230, 232, 234);"></div> */}
                 
                
                    <h6 className='ms-3 cname'><b>Carbon Dark</b></h6>
                 
                </div>

                <div className=" mt-2 border d-inline-flex align-items-center" style={{padding:'10px 5px'}}>
                 
                    <div style={{height:'22px',width:'22px',backgroundColor:' rgb(138,162,193)'}}>
                       
                    </div>
                 
                
                    <h6 className='ms-3 cname'><b>Glacier Blue</b></h6>
                 
                </div>
              </div>
            </div>
            <h6 className='text-center ' /* style={{marginTop:'-60px'}} */><b className='border text-white bg-black' type='button' style={{padding:'20px 30px'}}>DISCOVER MORE</b></h6>
        </div>
      </div>  

       <div className='w-100 bg-white dnt2' style={{height:'100vh',position:'relative',zIndex:4}}>
        <h1 className='ms-md-5'><b>Casual Wear</b></h1>
        <div className="row mt-5">
          <div className="col-md-1"></div>
          <div className="col-md-10 " style={{height:'420px',backgroundImage:'url("/apparelsection.webp")',backgroundSize:'cover',backgroundPosition:'center'}}>
             
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>  



      <div className='w-100 bg-black' style={{height:'200vh',position:'relative',zIndex:4}}>
        
      </div>  





      
     

    
    </>
  )
}

export default Landingpage 

