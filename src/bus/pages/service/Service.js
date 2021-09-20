import React, { Component } from 'react';
import { render } from 'react-dom';
import { Navigation } from '../../components/navigation/Navigation';
import { Layout } from '../../components/layout/Layout';
import { Title } from '../../components/title/Title';
import { StyledServiceArticle } from './StyledService';
import data from './data/data.json';

export class Service extends Component {
    render() {
        console.log(data)
        return (
            <>
                <Navigation/>
                <Layout>
                    <StyledServiceArticle>
                        <Title caption={data.caption} />
                    </StyledServiceArticle>
                </Layout>
            </>
        )
    }
}



/*export const Service = () => {
    return (
        <>
            <Navigation/>
            <Layout>
                <StyledServiceArticle>

                </StyledServiceArticle>
            </Layout>
        </>
    );
}*/
