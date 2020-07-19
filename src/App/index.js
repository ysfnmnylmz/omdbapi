import React, {useState} from 'react';
import {connect} from 'react-redux';
import {getMovie} from '../store/actions/getmovie';


function App(props) {
  const [keywords, setKeywords] = useState('');
  const onChange = e => {
    setKeywords(e.target.value)
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    props.getMovie(keywords);
  };
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmit}>
          <input onChange={onChange} placeholder={'Search...'} />
          <button type={'submit'}>Search</button>
        </form>
      </header>
    </div>
  );
}

const mapStateToProps = (state) =>({
    getMovieReducer: state.getMovieReducer
});
export default connect(mapStateToProps,{getMovie}) (App);
