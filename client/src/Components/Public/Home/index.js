import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link,withRouter } from "react-router-dom";
import { Paper,Grid,Typography } from "@material-ui/core";
import Visitor from "../../../Resources/Images/visitor.jpg";
import FormFields from "../../../Userinterface/Form/formFields";
import { update,generateData,isFormValid } from "../../../Userinterface/Form/formAction";
import MyButton from "../../../Userinterface/Button";

class Home extends Component {
    state = {
        formError:false,
        formSuccess: "",
        formData:{
            login_id:{
                element:"input",
                value:"",
                config:{
                    name:"login_id",
                    type:"email",
                    label:"Username or email",
                    required:true,
                    color:"primary",
                    fullWidth:true,
                    variant:"outlined",
                    margin:"dense",
                    // disabled:true,
                },
                validation:{
                    required:true,
                    email:true
                },
                valid:false,
                touched:false,
                validationMessage:""
            },
            password:{
                element:"input",
                value:"",
                config:{
                    name:"password",
                    type:"password",
                    label:"Password",
                    required:true,
                    color:"primary",
                    fullWidth:true,
                    variant:"outlined",
                    margin:"dense",
                    // disabled:true,
                },
                validation:{
                    required:true,
                    password:true
                },
                valid:false,
                touched:false,
                validationMessage:""
            }
        }
    }
    submitForm = (event) => {
        event.preventDefault();
        let dataToSubmit = generateData(this.state.formData,"login");
        let formIsValid =  isFormValid(this.state.formData,"login");
        if(formIsValid){
            // this.props.dispatch(singinUser(dataToSubmit)).then(response => {
            //     if(response.payload.loginSuccess){
            //         // console.log(response.payload);
            //         this.props.history.push("/users/dashboard");
            //     }else{
            //         this.setState({
            //             formError: true
            //         })
            //     }
            // })
            console.log(dataToSubmit);
        }else{
            this.setState({
                formError:true
            })
        }
    }
    updateForm = (element) => {
        const newFormdata = update(element,this.state.formData,"login");
        this.setState({
            formError: false,
            formData: newFormdata
        })
    }
    // editUpdate = (event) => {
    //     event.preventDefault();
    //     let disabled = disabledUpdate(this.state.formData,"login");
    //     this.setState({
    //         disabled: false,
    //         formData: disabled
    //     })
    // }

    render() {
        return (
            <div>
                <Grid item xs={12} container>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12} container>
                        <Grid item xl={2} lg={2} md={2} sm={2}/>
                        <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                            <Paper className="p-5 mt-5" square={true} elevation={0}>
                                <Typography className="pt-5" variant="h4" gutterBottom>Login to <strong>Net-Dott</strong></Typography>
                                <Typography className="mb-4" variant="body1">Use your Net-Dott CRM login id to Log in !</Typography>
                                <form onSubmit={(event) => this.submitForm(event)} autoComplete="off">
                                    <div className="pb-3">
                                        <FormFields
                                            id={"login_id"}
                                            formdata={this.state.formData.login_id}
                                            change={(element)=>this.updateForm(element)}
                                        />
                                    </div>
                                    <div className="pb-4">
                                        <FormFields
                                            id={"password"}
                                            formdata={this.state.formData.password}
                                            change={(element)=>this.updateForm(element)}
                                        />
                                    </div>
                                    { this.state.formError ?
                                        <div>
                                            <Typography variant="caption" display="block" gutterBottom>
                                                Please check your data
                                            </Typography>
                                        </div>
                                    :null }
                                    <div>
                                        <MyButton
                                            type="bck_link"
                                            runAction={(event)=>{this.submitForm(event)}}
                                            title="Login"
                                            variant="contained"
                                            size="medium"
                                            color="primary"
                                            fullWidth={true}
                                            disableElevation={false}
                                        />
                                    </div>
                                </form>
                            </Paper>
                        </Grid>
                        <Grid item xl={2} lg={2} md={2} sm={2}/>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <Paper className="VisitorBck" square={true} elevation={0} style={{backgroundImage:`url(${Visitor})`}}></Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default connect()(withRouter(Home));