import React from 'react'
import './SocialMediaCard.css'
import VoteCommentPanel from './VoteCommentPanel';
import { useState } from 'react';

const SocialMediaCard = () => {
    const [isImageClicked, setIsImageClicked] = useState(false);

    const handleImageClick = () => {
        if(isImageClicked){
            setIsImageClicked(false)

        }else{
            setIsImageClicked(true)
        }
       
        
    }
    return (
        <>
         <div className='card-container'>
                <div className='card'>
                         <img onClick={handleImageClick} src='./src/components/SocialMediaCard/imgs/adrianna-geo-1rBg5YSi00c-unsplash.jpg' alt='Description of image' />

                </div>
                        
               

        </div>
        <div className='vote-panel'>
           {isImageClicked && <VoteCommentPanel/>}

        </div>

        </>
       
    )

}

export default SocialMediaCard