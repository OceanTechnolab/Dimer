import FooterFour from '@/layout/footer/footer-4';
import HeaderTwo from '@/layout/header/header-two';
import React from 'react';
import ProjectDetailsArea from './project-details-area';
import ProjectDetailsBanner from './project-details-banner';

const ProjectDetails = () => {
    return (
        <>
            <HeaderTwo />
            <ProjectDetailsBanner />
            <ProjectDetailsArea />
            <FooterFour />
        </>
    );
};

export default ProjectDetails;