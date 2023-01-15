import React from 'react';
import Footer from '@components/Footer';
import Header from '@components/Header';
import { PagesContainer } from './styles';
import Routes from '../routes';

const Pages = () => (
    <PagesContainer style={{ background: '#AFACB0' }}>
        <Header isDark />
        <Header isDark={false} />
        <Routes />
        <Footer />
    </PagesContainer>
);

export default Pages;
