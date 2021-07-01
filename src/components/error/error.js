import React from 'react';
import styled from 'styled-components';

const ErrorBlock = styled.div`
	margin: 230px;
	text-align: center;
	color: red;
	font-size: 72px;
	font-weight: 700;
`;

const Error = () => {
    return <ErrorBlock>Error :(</ErrorBlock>
}

export default Error;