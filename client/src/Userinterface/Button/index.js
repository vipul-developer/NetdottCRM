import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
const MyButton = (props) => {
    const button = () => {
        let template = "";

        switch(props.type){
            case "default":
                template = 
                    <Link to={props.linkTo}>
                        <Button variant={!props.variant ? "contained":props.variant} color={!props.color ? "Default": props.color} size={!props.size ? "small":props.size} fullWidth={!props.fullWidth ? true : props.fullWidth} disableElevation={!props.disableElevation ? props.disableElevation : true}>
                            {props.title}
                        </Button>
                    </Link>
            break;
            case "bck_link":
                template = 
                <Button variant={!props.variant ? "contained":props.variant} color={!props.color ? "Default": props.color} size={!props.size ? "small":props.size} fullWidth={!props.fullWidth ? props.fullWidth : true} onClick={(event)=>{props.runAction(event);}} disableElevation={!props.disableElevation ? props.disableElevation : true}>
                    {props.title}
                </Button>
            break;
            default:
                template="";   
        }
        return template
    }
    return (
        <div>
            {button()}
        </div>
    );
};

export default MyButton;