import { FC, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';
import { SpinnerProps, SpinnerType } from './Spinner';

const spinnerTypeToStyles = (type?: SpinnerType): string => {
    switch (type) {
        case SpinnerType.Screen:
            return `
                height: calc(100vh - 60px - 4rem);
                width: 100%;
            `;
        default:
            return '';
    }
};

const SpinnerContainerStyled: FC<PropsWithChildren<SpinnerProps>> = styled.div.attrs({
    className: 'spinner-container',
})<SpinnerProps>`
    ${({ type }) =>
        css`
            ${spinnerTypeToStyles(type)}
        `}
`;

export default SpinnerContainerStyled;
