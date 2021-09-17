import React from "react";
import styled from "styled-components";

function Section({
    title,
    description,
    leftBtnText,
    rightBtnText,
    backgroundImg,
}) {
    // console.log(props);
    return (
        <Wrap bgImg={backgroundImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>{leftBtnText}</LeftButton>
                    {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg"></DownArrow>
            </Buttons>
        </Wrap>
    );
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    // background: orange;
    background-image: url("/images/model-s.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    // padding-block: 15vh;
    background-image: ${(props) => `url('/images/${props.bgImg}')`};
`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 15px;
    }
`;
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
`;

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`;

const DownArrow = styled.img`
    // margin-top: 20px;
    height: 40px;
    animation: animateDown infinite 2s;
    overflow-x: hidden;
`;

const Buttons = styled.div``;
