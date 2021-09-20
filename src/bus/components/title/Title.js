import React, { Component } from 'react';
import { render } from 'react';
import { StyledTitleHeader, StyledTitle, StyledTitleDesc, StyledSubTitle } from './StyledTitle';


export class Title extends Component {
    render() {
        return(
            <StyledTitleHeader>
                <StyledSubTitle>{this.props.caption} + Таропсихолог, космоэнергет</StyledSubTitle>
                <StyledTitle>Светлана Ланская</StyledTitle>
                <StyledTitleDesc>Фея, которая приносит людям счастье!</StyledTitleDesc>
            </StyledTitleHeader>
        )
    }
}

/*export const Title = (props) => {
    return(
        <StyledTitleHeader>
            <StyledSubTitle>{props.title} + Таропсихолог, космоэнергет</StyledSubTitle>
            <StyledTitle>Светлана Ланская</StyledTitle>
            <StyledTitleDesc>Фея, которая приносит людям счастье!</StyledTitleDesc>
        </StyledTitleHeader>
    )
};*/
