import React from 'react';
import "./Title.css"
import Typed from 'react-typed';


const Title = () => {
  return (
      <div className='intro'>

    <div className='intro-left'>

    <div className='intro-leftwrapper'>
       <h2 className='intro-intr'>WELCOME TO MY WORLD.</h2>
       <h1 className='intro-name'>Hi, I'm <span>Noman Monis</span> </h1>
       <Typed className='intro-name1'
                    strings={['a Professional Coder.']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
            />
       
       <p className='intro-description'>
       I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. 
       I’m not adding motion just to spruce things up, but doing it in ways that.
       </p>

       <div className='additional'>

<div className='additional-title'>
 <h1>FIND WITH ME</h1>  

</div>
   
  <div className='images'>
         
  </div>
</div>

    </div>


   
    </div>

           {/* right */}

           <div className='intro-right'>
             <h1>Hi</h1>
           </div>


       
       </div>
  );
};

export default Title;
