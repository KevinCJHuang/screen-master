import React, { useEffect, useState, useContext } from 'react';
import WorkContext from '../../contexts/work/workContext';
import UserContext from '../../contexts/user/userContext';

const WorkApp = () => {
  const workContext = useContext(WorkContext);
  const { workDone, incrementWorkDone, startTimer, terminateTimer } =
    workContext;
  const userContext = useContext(UserContext);
  const { userName, userType } = userContext;

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answerArr, setAnswerArr] = useState([]);
  const [story, setStory] = useState(0);

  const getRandomAnswer = () => {
    var rv =
      Math.floor(Math.random() * (100 - 10) + 10) +
      Math.floor(Math.random() * (100 - 10) + 10);
    while (rv === num1 + num2) {
      rv =
        Math.floor(Math.random() * (100 - 10) + 10) +
        Math.floor(Math.random() * (100 - 10) + 10);
    }
    return rv;
  };

  const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    setAnswerArr(array);
  };

  // On mount
  useEffect(() => {
    startTimer();
  }, []);

  // On Unmount
  useEffect(() => {
    return () => {
      terminateTimer();
    };
  }, []);

  useEffect(() => {
    setNum1(Math.floor(Math.random() * (100 - 10) + 10));
    setNum2(Math.floor(Math.random() * (100 - 10) + 10));
    setStory(Math.floor(Math.random() * (10 - 1) + 1));
  }, [workDone]);

  useEffect(async () => {
    const answerArr = [
      { id: 1, choice: getRandomAnswer() },
      { id: 2, choice: getRandomAnswer() },
      { id: 3, choice: getRandomAnswer() },
      { id: 4, choice: num1 + num2 },
    ];
    shuffleArray(answerArr);
  }, [num1, num2]);

  const onClick = (e) => {
    e.preventDefault();
    if (parseInt(e.target.innerHTML) === num1 + num2) {
      incrementWorkDone(story);
    }
  };

  return (
    <div className='container'>
      <div className='card border-0'>
        <div className='card-body'>
          <div className='row'>
            <div className='col-8'>
              <h5 className='mb-4'>
                What is the answer to the following operation? Please choose the
                correct answer.
              </h5>
              <h5 className='mb-4'>Story Value: {story}</h5>
              <h3 className='mb-3'>
                {num1} + {num2}
              </h3>
              {answerArr.map((answer) => (
                <div key={answer.id}>
                  <button
                    className='btn btn-outline-dark my-3'
                    style={{ width: '75px' }}
                    onClick={onClick}
                  >
                    <h4>{answer.choice}</h4>
                  </button>{' '}
                  <br></br>{' '}
                </div>
              ))}
            </div>
            <div className='col-4'>
              <div className='card'>
                <div className='card-header'>
                  <h3>Employee Info</h3>
                </div>
                <div className='card-body'>
                  <h5>
                    <strong>User Name: </strong>{' '}
                    {userName === 'E01' && 'Chengjie Huang'}
                  </h5>
                  <h5>
                    <strong>User Type: </strong> {userType}
                  </h5>
                  <h5>
                    <strong>Story Completed:</strong> {workDone}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkApp;
