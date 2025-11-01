import ErrorComponent from '@/components/ErrorComponent';
import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <ErrorComponent/>
        </div>
    );
};

export default ErrorPage;
ErrorPage.getLayout = function(page){
    return <> {page}</>
}