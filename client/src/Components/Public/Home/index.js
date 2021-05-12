import React from 'react';
import { connect } from "react-redux";
import { Link,withRouter } from "react-router-dom";
import { Paper,Grid,Container,Typography } from "@material-ui/core";
import Visitor from "../../../Resources/Images/visitor.jpg";
const Home = () => {
    return (
        <div>
            <Grid item xs={12} container>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <Paper className="p-5 text-center" square={true} elevation={0}>
                            <Typography>Home</Typography>
                        </Paper>
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <Paper className="VisitorBck" style={{backgroundImage:`url(${Visitor})`}}></Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default connect()(withRouter(Home));