import { Fragment } from 'react';
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as BrutariaLogo } from '../../assets/logo-bcumaya.svg';

import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <BrutariaLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        CUMPARA
                    </Link>
                    <Link className='nav-link' to='/signin'>
                        INSCRIE-TE
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation