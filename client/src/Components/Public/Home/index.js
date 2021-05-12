import React from 'react';
import { connect } from "react-redux";
import { Link,withRouter } from "react-router-dom";
import { Paper,Grid,Container,Typography } from "@material-ui/core";
const Home = () => {
    return (
        <div>
            <Grid item xs={12} container>
                <Paper>
                    <Container fixed>
                        <Typography>Home</Typography>
                    </Container>
                </Paper>
            </Grid>
        </div>
    );
};

export default connect()(withRouter(Home));