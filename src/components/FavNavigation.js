import React from 'react';
import { TiTimes } from 'react-icons/ti';

function FavNavigation(props) {
    const onClick = () => {
        document.getElementsByClassName('fav-navigation')[0].classList.remove('active');
    }
    const { favList } = props;
    return (
        <div className={'fav-navigation'}>
            <TiTimes onClick={onClick} style={{ position: 'absolute', top: 20, right: 20, cursor: 'pointer' }} size={40} />
            {favList.length > 0 ? favList.map((item, i) =>
                <div key={String(i)}>
                    <p>{item.movie.Title}</p>
                    {item.userNote&& (<p>Note: {item.userNote}</p>)}
                </div>
            ): (<p>You have not added any movies to your favorites.</p>)}
        </div>
    )
};

export default FavNavigation;
