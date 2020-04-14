import React from "react";
import Page from './page';
import Container from "@material-ui/core/Container/Container";

const HomeComponent = (props:any) => {
    return(
        <Container maxWidth="xl">
            <Page/>
        </Container>
    );
};

export default HomeComponent