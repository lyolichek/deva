import React from 'react';
import { StyledLayout } from './StyledLayout';

export const Layout = ({ children }) => {
    return (
        <main>
            <StyledLayout>{children}</StyledLayout>
        </main>
    )
};
