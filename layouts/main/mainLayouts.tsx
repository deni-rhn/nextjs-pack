import React, { Fragment, useState } from 'react';
import NavBar from './partials/navbar';
import Contents from './partials/content';
import FooterNav from './partials/footer';
import Loading from 'react-loading-bar';
import { Router } from 'next/router';
import { Layout } from '@components/layout';

type Props = {
    children?: any;
    page?: string;
    partials?: string;
    subPartials?: string;
}

const MainLayouts: React.FC = ({ children }: Props) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const finishNavigate = () => setIsLoading(false);

    const navigateOnProgress = () => setIsLoading(true);

    Router.events.on('routeChangeStart', () => {
        navigateOnProgress();
    });

    Router.events.on('routeChangeComplete', () => {
        finishNavigate();
    });

    return (
        <Fragment>
            <Layout>
                <Loading show={isLoading} color='#F26732' showSpinner={false} />
                <NavBar />
                <Contents>{children}</Contents>
                <FooterNav />
            </Layout>
        </Fragment>
    );
};

export default MainLayouts;
