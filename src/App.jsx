import {useState} from 'react'
import './App.css'

 function App() {
  
   const [ color, setColor] = useState(  "rgba(0,0,0,0.3)")
 
 return(
  <div className='bg  bg-amber-200'>
   <div className='h-screen w-full duration-200'
   style={{backgroundColor: color}} >

     <h1 className='text-5xl text-blac justify-center inset-x-0
      py-10 flex flex-wrap font-serif decoration-double decoration-1'> Welcome To My Background Changer</h1>

      <div className='fixed flex flex-wrap justify-center bottom-12
      inset-x-0 py-2'>
        
         <div className='flex flex-wrap justify-center gap-3 
         shadow-lg bg-white px-3 py-2 rounded-3xl'>
          
              <button onClick={() => setColor('red')}
              className='outline-none px-4 py-1 shadow-lg text-white rounded-full'
              style={{backgroundColor: 'red'}}>Red</button>

              <button onClick={() => setColor('pink')}
              className='outline-none px-4 py-1 shadow-lg text-white rounded-full'
              style={{backgroundColor: 'pink'}}>Pink</button>
             
              <button onClick={() => setColor('blue')}
              className='outline-none px-4 py-1 shadow-lg text-white rounded-full'
              style={{backgroundColor: 'blue'}}>Blue</button>

              <button onClick={() => setColor('olive')}
              className='outline-none px-4 py-1 shadow-lg text-white rounded-full'
              style={{backgroundColor: 'olive'}}>olive</button>

              <button onClick={() => setColor('gray')}
              className='outline-none px-4 py-1 shadow-lg text-white rounded-full'
              style={{backgroundColor: 'gray'}}>Gray</button>

              <button onClick={() => setColor('brown')}
              className='outline-none px-4 py-1 shadow-lg text-white rounded-full'
              style={{backgroundColor: 'brown'}}>Brown</button>

              <button onClick={() => setColor('purple')}
              className='outline-none px-4 py-1 shadow-lg text-white rounded-full'
              style={{backgroundColor: '#810281'}}>Purple</button>

             <button onClick={() => setColor('orange')}
              className='outline-none px-4 py-1 shadow-lg text-white rounded-full'
              style={{backgroundColor: 'orange'}}>Orange</button>

             <button onClick={() => setColor('rgba(253,227,202, 0.35)')}
             className='outline-none px-4 py-1 shadow-lg  rounded-full'
             style={{backgroundColor: 'rgba(253,227,202, 0.8)'}}>Vanilla</button>

             <button onClick={() => setColor('rgba(255,253,208,0.35)')}
              className='outline-none px-4 py-1 shadow-lg  rounded-full'
             style={{backgroundColor: 'rgb(255, 253, 208)'}}>Cream</button>

             <button onClick={() => setColor('green')}
              className='outline-none px-4 py-1 shadow-lg text-white rounded-full'
             style={{backgroundColor: '#B1DDAD'}}>Green</button>

             <button onClick={() => setColor('rgba(255,255,45, 0.35)')}
              className='outline-none px-4 py-1 shadow-lg  rounded-full'
             style={{backgroundColor: 'yellow'}}>Yellow</button>

            
         </div>
      </div>
   </div>
 </div>
 )}

 export default App




