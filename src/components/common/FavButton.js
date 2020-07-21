import React from 'react';
import { TiHeart,TiPlus } from 'react-icons/ti';

function FavButton(props) {
    const onClick = () => {
        document.getElementsByClassName('fav-navigation')[0].classList.add('active');
    }
    return (
        <button onClick={onClick} style={{ padding: 10, width: 50, background: 'none', border: '1px solid #333', position: 'fixed', top: 20, right: 20 }}>
            <TiHeart size={'30'} color={'tomato'} />
            <p className={'added-fav'}><TiPlus color={'green'} size={'25'}/></p>
        </button>
    )
};

export default FavButton;
