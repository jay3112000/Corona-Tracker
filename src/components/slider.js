import React from 'react'
import Whirligig from 'react-whirligig'
import '../components/slider.css'
const Slider = () => {
  let whirligig
  const next = () => whirligig.next()
  const prev = () => whirligig.prev()

  return (
    <div className='slider-container'>
     
      <Whirligig
        visibleSlides={3}
        gutter="1em"
        ref={(_whirligigInstance) => { whirligig = _whirligigInstance}}
      >
        
        
        <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/11/28/940213-935462-916874-corona.jpg" />
       
        <img src="https://images.firstpost.com/wp-content/uploads/2020/03/coronavirus_India_Jammu_1280_PTI.jpg" />
        
      
        
       
      </Whirligig>
     
    </div>
  )
}
export default Slider;