import React from 'react';

const MLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <main className='min-h-screen bg-gray-100'>
            {children}
        </main>
    );
};

export default MLayout;