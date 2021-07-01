import React from 'react';
import styled from 'styled-components';

const SpinnerBlock = styled.div`
	margin: 230px;
	text-align: center;
	color: #FFF;
	font-size: 72px;
	font-weight: 700;
`;

const Spinner = () => {
    return <SpinnerBlock>loading...</SpinnerBlock>
}

export default Spinner;