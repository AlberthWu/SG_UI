import React from 'react';

export const AppFooter = (props) => {

    return (
        <div className="layout-footer">
            <img src={props.layoutColorMode === 'light' ? 'assets/layout/images/Logo-PT-Alam-Sampurna-Makmur-Dark.png' : 'assets/layout/images/Logo-PT-Alam-Sampurna-Makmur-Light.png'} alt="Logo" height="20" className="mr-2" />
            Copyright © 2022 
            <span className="font-small font-bold ml-2 mr-2">Sampurna Group</span>
            All rights reserved.
        </div>
    );
}
