import React from 'react'
import Back from '../common/back/Back'
import ProgramCard from './ProgramCard'

const ProgramHome = () => {
  return (
        <>
        <div className='body'>
        <div className='back'>
            <Back subtitle='Educational Daycare, Childcare, Preschool & After-School in Sri Lanka' title='Our Programs' />
        </div>
        <div className='margin'></div>
        <ProgramCard/>
        
        </div>
        </>
        
  )
}

export default ProgramHome