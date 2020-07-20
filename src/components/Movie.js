import React, { useState } from 'react';
import { connect } from 'react-redux';
import PrimaryModal from './common/PrimaryModal';


function Movie(props) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const { movie, addFav } = props;
    return (
        <div>
            <a href={`https://www.google.com.tr/search?tbm=vid&hl=tr&source=hp&biw=&bih=&q=${movie.Title}`} rel={"noopener noreferrer"} target={'_blank'} style={{ color: 'green' }}>{`${movie.Title} - ${movie.Released}`}</a>
            <a onClick={handleShow} href={'#!'}>Kalp</a>
            <PrimaryModal show={show} setShow={setShow} addFav={addFav} movie={movie} />
        </div>
    );
}

const mapStateToProps = (state) => ({
    getMovieReducer: state.getMovieReducer
});
export default connect(mapStateToProps, null)(Movie);
