import React from 'react'
import { useState } from 'react'
import './VoteCommentPanel.css'
import VoteResult from './VoteResult'

const VoteCommentPanel = () => {
    const [yesCount, setYesCount] = useState(0);
    const [noCount, setNoCount] = useState(0);
    const [isVoteSelected, setIsVoteSelected] = useState(false);

  return (
    <>
        <div className='main-container'>
            <h1 className='main-heading'>Is this image ai generated? <br></br></h1>
            
            <div className='btn-container-yes'>
                <button className='btn-yes'>Yes</button>
            

            </div>
            <div className='btn-container-no'>
                <button className='btn-no'>No</button>
            </div>
     



        </div>
        
       
    </>
    
    
  )
}

export default VoteCommentPanel