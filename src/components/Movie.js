import React, { useState } from 'react';
import { connect } from 'react-redux';
import PrimaryModal from './common/PrimaryModal';
import { Container, Row, Col } from 'react-bootstrap';
import noPoster from '../assets/img/no-poster.jpg';
import { RiHeartAddLine } from 'react-icons/ri';


function Movie(props) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const renderSearchList = (data) => {
        if (data) {
            return (data.reverse().map((item, i) => item !=='' && <span key={String(i)}>{`${item},`}</span>))
        }
    }


    const { movie, addFav, searchList } = props;
    return (
        <Container>
            <Row>
                <Col xl={4} md={4} sm={6} xs={12}><img className={'img-fluid'} src={movie.Poster !== 'N/A' ? movie.Poster : noPoster} alt={movie.Title} /></Col>
                <Col xl={4} md={4} sm={6} xs={12} className={'movie-info'}>
                    <div><p>Name:</p><a href={`https://www.google.com.tr/search?tbm=vid&hl=tr&source=hp&biw=&bih=&q=${movie.Title}`} rel={"noopener noreferrer"} target={'_blank'} style={{ color: 'green' }}>{movie.Title}</a></div>
                    <div><p>Released:</p><span>{movie.Released}</span></div>
                    <div><p>Runtime:</p><span>{movie.Runtime}</span></div>
                    <div><p>Genre:</p><span>{movie.Genre}</span></div>
                    <div><p>Director:</p><span>{movie.Director}</span></div>
                    <div><p>Actors:</p><span>{movie.Actors}</span></div>
                    <div><p>Country:</p><span>{movie.Country}</span></div>
                    <div><p>Add Your Favorites:</p><a onClick={handleShow} href={'#!'}><RiHeartAddLine size={'22'} color={'tomato'} /></a></div>
                </Col>
                <Col xl={4} md={4} sm={6} xs={12} className={'search-list'}>
                    <p>Last search keywords:</p>
                    <div>{renderSearchList(searchList)}</div>
                </Col>
                <PrimaryModal show={show} setShow={setShow} addFav={addFav} movie={movie} />
            </Row>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    getMovieReducer: state.getMovieReducer
});
export default connect(mapStateToProps, null)(Movie);
