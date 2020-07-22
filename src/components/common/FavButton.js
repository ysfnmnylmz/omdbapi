import React from 'react';
import { TiHeart,TiPlus } from 'react-icons/ti';

function FavButton(props) {
    const onClick = () => {
        document.getElementsByClassName('fav-navigation')[0].classList.add('active');
    }
    return (
        <button className={'fav-collapse-btn'} onClick={onClick}>
            <TiHeart size={'30'} color={'tomato'} />
            <p className={'added-fav'}><TiPlus color={'green'} size={'25'}/></p>
        </button>
    )
};

export default FavButton;
