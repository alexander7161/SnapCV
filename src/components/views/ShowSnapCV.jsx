import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import '../../stylesheets/views/ShowSnapCV.css';


class ShowSnapCV extends Component {
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        // get access to the data with: data.get('name');

        /*
        fetch('infojobs-api', {
            method: 'POST',
            body: data
        });
        */

    }

    render() {
        return (
            <React.Fragment>
                <form class="form" onSubmit={this.handleSubmit}>
                    <Typography variant="h6" gutterBottom>
                        Your snapped CV
                    </Typography>
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="yourName"
                                name="yourName"
                                multiline
                                rowsMax="3"
                                label="Your Name"
                                defaultValue="DS"
                                fullWidth
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            Photo
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="aboutYou"
                                name="aboutYou"
                                multiline
                                rowsMax="3"
                                label="About you"
                                defaultValue="Lorem ipsum..."
                                fullWidth
                                autoComplete="fname"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="education"
                                name="education"
                                multiline
                                rowsMax="3"
                                label="Education"
                                defaultValue="Lorem ipsuuuum"
                                fullWidth
                                autoComplete="fname"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="skills"
                                name="skills"
                                multiline
                                rowsMax="3"
                                label="Skills"
                                defaultValue="lorem ipsum"
                                fullWidth
                                autoComplete="fname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="skills"
                                name="skills"
                                multiline
                                rowsMax="4"
                                label="Work experience"
                                defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                                fullWidth
                                autoComplete="fname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox color="primary" name="uploadVideo" value="yes" />}
                                label="I want to upload the Video to your CV"
                            />
                        </Grid>
                        <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            Send
                        </Button>
                        </Grid>
                    </Grid>
                </form>
            </React.Fragment>
        );
    }
}

export default ShowSnapCV;