import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Movie from '../components/Movie';
import FavNavigation from '../components/FavNavigation';
import FavButton from '../components/common/FavButton';
import { getMovie } from '../store/actions/getmovie';
import { asyncLocalStorage } from '../lib/helpers';
import { BsSearch } from 'react-icons/bs';
import '../assets/main.scss';


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
    if (storage) {
      setSearchlist(storage.split(','))
    }
  }, [storage])


  const onChange = e => {
    setKeywords(e.target.value)
  };


  const onSubmit = (e) => {
    e.preventDefault();
    props.getMovie(keywords);
    asyncLocalStorage.setItem('searchTypes', keywords)
    getStorage();
    document.getElementsByClassName('search-form')[0].classList.add('active');
  };
  const addFav = (e, data, note) => {
    e.preventDefault()
    const movieData = {
      movie: data,
      userNote: note
    }
    setFavlist([...favList, movieData])
  }

  const renderData = (data) => {
    if (data.movie && data.movie.Response && data.movie.Response === 'True') {
      return (<Movie searchList={searchList} movie={data.movie} addFav={addFav} />)
    } else if (data.getMovieError) {
      return (<p style={{ color: 'red' }}>{`${data.getMovieError}`}</p>)
    }
  }
  const { getMovieReducer } = props;
  return (
    <div className="movie-search-app" style={{position:'relative', overflowX:'hidden'}}>
      <div className={'search-form container'} >
        <form onSubmit={onSubmit}>
          <input onChange={onChange} placeholder={'Search...'} />
          <button className={'search-form_btn'} type={'submit'}><BsSearch size={'22'} /></button>
        </form>
        <small>Movie Search App by omdbapi.com</small>
      </div>
      {getMovieReducer && renderData(getMovieReducer)}
      <FavNavigation favList={favList}/>
      <FavButton/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  getMovieReducer: state.getMovieReducer
});
export default connect(mapStateToProps, { getMovie })(App);
