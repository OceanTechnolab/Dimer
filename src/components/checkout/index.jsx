import FooterFour from '@/layout/footer/footer-4';
import HeaderTwo from '@/layout/header/header-two';
import React from 'react';
import CheckoutArea from './checkout-area';
import CheckoutBanner from './checkout-banner';

const Checkout = () => {
    return (
        <>
            <HeaderTwo />
            <CheckoutBanner />
            <CheckoutArea />
            <FooterFour />
            
        </>
    );
};

export default Checkout;