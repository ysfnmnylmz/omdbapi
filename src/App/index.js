import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../store/actions/getmovie';
import { asyncLocalStorage } from '../lib/helpers';


function App(props) {
  const [keywords, setKeywords] = useState('');
  const [storage, setStorage] = useState('');
  const [searchList, setSearchlist] = useState([])
  const [favList, setFavlist] = useState([])
  async function getStorage() {
    setStorage(await asyncLocalStorage.getItem('searchTypes'))
  }
  useEffect(() => {
    getStorage();
    setSearchlist(storage.split(','))
  }, [storage])


  const onChange = e => {
    setKeywords(e.target.value)
  };


  const onSubmit = (e) => {
    e.preventDefault();
    props.getMovie(keywords);
    asyncLocalStorage.setItem('searchTypes', keywords)
    getStorage();
  };
  const addFav = (e, data) => {
    e.preventDefault()
    setFavlist([...favList, data])
  }
  console.log('favlist', favList)

  const renderData = (data) => {
    if (data.movie && data.movie.Response && data.movie.Response === 'True') {
      return (<p style={{ color: 'green' }}>{`${data.movie.Title} - ${data.movie.Released}`}<a onClick={(e)=>addFav(e,data.movie.Title)} href={'#!'}>Kalp</a></p>)
    } else if (data.getMovieError && data.getMovieError) {
      return (<p style={{ color: 'red' }}>{`${data.getMovieError}`}</p>)
    }
  }
  const renderSearchList = (data) => {
    if (data) {
      return (data.map((item, i) => <p key={String(i)}>{item}</p>))
    }
  }
  const { getMovieReducer } = props;
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmit}>
          <input onChange={onChange} placeholder={'Search...'} />
          <button type={'submit'}>Search</button>
        </form>
        {/* {renderSearchList(searchList)} */}
        {getMovieReducer && renderData(getMovieReducer)}
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  getMovieReducer: state.getMovieReducer
});
export default connect(mapStateToProps, { getMovie })(App);
