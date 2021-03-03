import React from 'react';
//import './timerdisplay.css'

import {
    DisplayContainerDiv,
    DisplayDigitContainerDiv,
    DisplayColonDiv,
    DisplayDigitText,
    DisplayDigitControlContainer,
    DisplayDigitControls,
    DigitControlButton,

} from '../styled/timer_display_style';


const TimerDisplay = (props) => {

    return (
            <div>
                <DisplayContainerDiv>
                    <DisplayDigitContainerDiv>
                        <DisplayDigitText> {props.min_tens} </DisplayDigitText>
                        <DisplayDigitText> {props.min_ones} </DisplayDigitText>
                        <DisplayColonDiv> {props.colon} </DisplayColonDiv>
                        <DisplayDigitText> {props.sec_tens} </DisplayDigitText>
                        <DisplayDigitText> {props.sec_ones} </DisplayDigitText>
                    
                    
                    </DisplayDigitContainerDiv>
                
                    <DisplayDigitControlContainer>
                        <DisplayDigitControls>
                            <DigitControlButton onClick = {props.incMin_handler}> Inc Min </DigitControlButton>
                            <DigitControlButton> Dec Min </DigitControlButton>
                        </DisplayDigitControls>
                        <DisplayDigitControls>
                            <DigitControlButton> Inc Sec </DigitControlButton>
                            <DigitControlButton> Dec Sec </DigitControlButton>
                        </DisplayDigitControls>
                    </DisplayDigitControlContainer>    


                    

                    
                
                </DisplayContainerDiv>
            
            
            
            </div>

    )


}


export default TimerDisplay;