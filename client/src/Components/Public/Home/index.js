import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link,withRouter } from "react-router-dom";
import { Paper,Grid,Typography } from "@material-ui/core";
import Visitor from "../../../Resources/Images/visitor.jpg";
class Home extends Component {
    render() {
        return (
            <div>
                <Grid item xs={12} container>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12} container>
                        <Grid item xl={2} lg={2} md={2} sm={2}/>
                        <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                            <Paper className="pt-5 mt-5" square={true} elevation={0}>
                                <Typography variant="h4" gutterBottom>Login to <strong>Net-Dott</strong></Typography>
                                <Typography className="mb-4" variant="body1">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</Typography>
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