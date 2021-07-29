import React, { useState, useEffect, useContext } from 'react';
import AlertContext from '../../contexts/alert/alertContext';

var relaxInterval;
const RelaxApp = () => {
  const [searchText, setSearchText] = useState('cat');
  const alertContext = useContext(AlertContext);

  const onChange = (e) => setSearchText(e.target.value);
  const search = (e) => {
    e.preventDefault();

    clearInterval(relaxInterval);
    relaxInterval = setInterval(() => {
      var image = document.getElementById('image');
      image.src =
        `https://source.unsplash.com/1600x900/?${searchText},` +
        new Date().getTime();
    }, 5000);
    alertContext.setAlert(`Image theme set to ${searchText}`, 'success');
  };

  useEffect(() => {
    relaxInterval = setInterval(() => {
      var image = document.getElementById('image');
      image.src =
        `https://source.unsplash.com/1600x900/?${searchText},` +
        new Date().getTime();
    }, 5000);
  }, []);

  useEffect(() => {
    return () => {
      clearInterval(relaxInterval);
    };
  }, []);

  return (
    <div className='container'>
      <div className='card border-0'>
        <div className='card-body'>
          <h3 className='mb-4'>
            Choose your favourite image theme, and take a break.
          </h3>
          <form className='form-inline' onSubmit={search}>
            <input
              className='form-control'
              type='text'
              value={searchText}
              onChange={onChange}
              placeholder='Type image theme...'
            />
            <input
              type='submit'
              value='Search'
              className='btn btn-primary ml-3'
            />
          </form>
          <br></br>
          <img
            className='card-img-top'
            src='https://source.unsplash.com/1600x900/?cat'
            alt=''
            id='image'
            style={{ maxHeight: '100%', maxWidth: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default RelaxApp;
