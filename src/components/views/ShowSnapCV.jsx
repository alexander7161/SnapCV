import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router";
import '../../stylesheets/views/ShowSnapCV.css';
import { getKey } from './store/actions';
import { connect } from 'react-redux'
import {setData} from "./store/actions";
class ShowSnapCV extends Component {

    componentDidMount() {
        var regex = /\?code=([^&]+)&.*/;
        const code = this.props.location.search.match(regex) && this.props.location.search.match(regex)[1] || undefined;
        code&& this.props.dispatch(getKey(code));
    }

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

    handleChange = name => event => {
        this.props.dispatch(setData({
            [name]: event.target.value,
          }));
      };
    
    render() {
        const { name, skills, aboutyou, education, experience } = this.props
        return (
            <React.Fragment>
                <form className="form" onSubmit={this.handleSubmit}>
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
                                //defaultValue="DS"
                                value={name}
                                onChange={this.handleChange("name")}
                                fullWidth
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
                                value={aboutyou}
                                onChange={this.handleChange("aboutyou")}
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
                                value={education}
                                onChange={this.handleChange("education")}
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
                                value={skills}
                                onChange={this.handleChange("skills")}
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
                                value={experience}
                                onChange={this.handleChange("experience")}
                                fullWidth
                                autoComplete="fname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="uploadVideo" value="yes" />}
                                label="I want to upload the Video to your CV"
                            />
                        </Grid>
                        <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="secondary" onClick={() => this.props.history.push('/auth')}>
                            Send
                        </Button>
                        </Grid>
                    </Grid>
                </form>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {infoJobsApiKey: state.api.infoJobs,
            name: state.cv.name,
            skills: state.cv.skills};
}
export default withRouter(connect(mapStateToProps)(ShowSnapCV));