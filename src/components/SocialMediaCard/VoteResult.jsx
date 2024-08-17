import React from 'react'
import './VoteResult.css'
const VoteMessage = ({message}) => {
    

    return (
        <div>
            {message}

        </div>
    )

}
const VoteResult = (props) => {
    const {yesCount, noCount, win}  = props;
  return (
    <>
    <div className='vote-result-container'>
        <div>VoteResult</div>
        <div>Voted Yes: {yesCount}</div>
        <div>Voted No: {noCount} </div>
        <div>Vote Total: {yesCount + noCount}</div>
        {!win && <VoteMessage message={" Wrong! this image is not Ai generated "}/>}
        {win && <VoteMessage message={" Correct! this image is not Ai generated "}/>}
        <p>This painting was made by a human named Michael Angelo</p>
        


    </div>



    </>
    

  )
}

export default VoteResult