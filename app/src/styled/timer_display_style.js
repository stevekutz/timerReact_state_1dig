import styled, {css} from 'styled-components';

const DisplayContainerDiv = styled.div`
    
    border: 3px solid deeppink;
    width: 40%;
    color: red;
    padding:
    display: flex;
    margin: 4px auto;



`;

const DisplayDigitContainerDiv = styled.div`
    border: 5px solid purple;
    
    width: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    padding: 10px;
    margin: 4px auto;


`

const DisplayColonDiv = styled.div`
    border: 1px solid seagreen; 

    width: 5px;
`

const DisplayDigitText = styled.div`
    border: 1px solid yellow;
    width: 20px;
    color: lightgray;
    text-align: center;
    // padding: 1px;
    //margin: 4px;

`

const DisplayDigitControlContainer = styled.div`
    border: 1px solid green;

    width: 50%;
    display: flex;
    justify-content: center;
    margin: 2px auto;

`

const DisplayDigitControls = styled.div`
    border: 1px solid blue;
    
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    margin: 4px auto;

`


const DigitControlButton = styled.button`
    border: 2px solid blue;
    
    outline-style: none;
    width: 60px;    
    background: lightgrey;
    margin: 2px auto;
    padding: 1px;
    border-radius: 5px;

    :hover {
    border: 2px solid red;}

`

export {
    DisplayContainerDiv,
    DisplayDigitContainerDiv,
    DisplayColonDiv,
    DisplayDigitText,
    DisplayDigitControlContainer,
    DisplayDigitControls,
    DigitControlButton,
    

};
