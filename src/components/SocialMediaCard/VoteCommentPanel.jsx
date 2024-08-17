import React, { useState } from 'react';
import './VoteCommentPanel.css';
import VoteResult from './VoteResult';

const VoteSelection = (props) => {
  const { setIsVoteSelected, yesCount, setYesCount, noCount, setNoCount, setWin } = props;

  const handleYesButton = () => {
    setIsVoteSelected(true);
    setYesCount(yesCount + 1);
   
  };

  const handleNoButton = () => {
    setIsVoteSelected(true);
    setNoCount(noCount + 1);
    setWin(true)
  };

  return (
    <>
      <div className='main-container'>
        <h1 className='main-heading'>Is this image ai generated? </h1>
        <div className='btn-container-yes'>
          <button onClick={handleYesButton} className='btn-yes'>Yes</button>
        </div>
        <div className='btn-container-no'>
          <button onClick={handleNoButton} className='btn-no'>No</button>
        </div>
      </div>
    </>
  );
};

const VoteCommentPanel = () => {
  const [isVoteSelected, setIsVoteSelected] = useState(false);
  const [yesCount, setYesCount] = useState(0);
  const [noCount, setNoCount] = useState(0);
  const [win, setWin] = useState(false);

  return (
    <>
      {!isVoteSelected && (
        <VoteSelection
          setIsVoteSelected={setIsVoteSelected}
          yesCount={yesCount}
          setYesCount={setYesCount}
          noCount={noCount}
          setNoCount={setNoCount}
          setWin = {setWin}
        />
      )}
      {isVoteSelected && <VoteResult yesCount={yesCount} noCount={noCount} win={win} />}
    </>
  );
};

export default VoteCommentPanel;
