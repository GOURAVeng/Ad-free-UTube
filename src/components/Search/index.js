import React from 'react';

// import SearchIcon from '@material-ui/icons/Search';
import { TextField, Container } from '@material-ui/core';

export default class Search extends React.Component {
    state = {
        searchTerm: ''   
    }

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value})    // to set searchterm directly
    }

    handleSubmit = (event) => {
        const { searchTerm } = this.state;          // getting searchTerm from state by destructuring 
        const { onFormSubmit } = this.props;        

        onFormSubmit(searchTerm);               // transfering searchTerm/state to App

        event.preventDefault();                 // prevent default refresh of page
    }

    render() {
        return (
            <Container
                maxWidth="sm"
                spacing={2}
                style={{marginTop:'10px'}}
            >
                <form onSubmit={this.handleSubmit}>       
                    <TextField fullWidth
                        size="small"
                        label="Search"
                        variant="outlined"
                        onChange={this.handleChange}
                    /> 
                </form>
            </Container>
        );
    }
}