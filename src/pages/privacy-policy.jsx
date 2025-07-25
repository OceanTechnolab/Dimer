import Policy from '@/components/Privacy-Policy/policy';
import SEO from '@/components/seo';
import Wrapper from '@/layout/wrapper';
import React from 'react';

const index = () => {
    return (
      <Wrapper>
            <SEO pageTitle="privacy-policy" />
            <Policy/>
      </Wrapper>
    );
};

export default index;