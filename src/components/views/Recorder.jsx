import React from 'react';
import MediaCapturer from 'react-multimedia-capture';
import '../../stylesheets/recorder.css';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Recorder extends React.Component {
    constructor() {
        super();
        this.state = {
            granted: false,
            rejectedReason: '',
            recording: false,
            paused: false,
            replay: false
        };  

        this.handleRequest = this.handleRequest.bind(this);
        this.handleGranted = this.handleGranted.bind(this);
        this.handleDenied = this.handleDenied.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handlePause = this.handlePause.bind(this);
        this.handleResume = this.handleResume.bind(this);
        this.handleStreamClose = this.handleStreamClose.bind(this);
        this.setStreamToVideo = this.setStreamToVideo.bind(this);
        this.releaseStreamFromVideo = this.releaseStreamFromVideo.bind(this);
        this.downloadVideo = this.downloadVideo.bind(this);
        this.upload = this.upload.bind(this);
        this.showFile = this.showFile.bind(this);
    }

    handleRequest() {
        console.log('Request Recording...');
    }

    handleGranted() {
        this.setState({granted: true});
        console.log('Permission Granted!');
    }

    handleDenied(err) {
        this.setState({rejectedReason: err.name});
        console.log('Permission Denied!', err);
    }

    handleStart(stream) {
        this.setState({
            recording: true
        });

        this.setStreamToVideo(stream);
        console.log('Recording Started.');
    }

    handleStop(blob) {
        this.setState({
            recording: false,
            replay: true
        });

        this.releaseStreamFromVideo();

        console.log('Recording Stopped.');

        this.downloadVideo(blob);
    }

    handlePause() {
        this.releaseStreamFromVideo();

        this.setState({
            paused: true
        });
    }

    handleResume(stream) {
        this.setStreamToVideo(stream);

        this.setState({
            paused: false
        });
    }

    handleError(err) {
        console.log(err);
    }

    handleStreamClose() {
        this.setState({
            granted: false
        });
    }

    setStreamToVideo(stream) {
        let video = this.refs.app.querySelector('video');

        if (window.URL) {
            video.src = window.URL.createObjectURL(stream);
        }
        else {
            video.src = stream;
        }
    }

    releaseStreamFromVideo() {
        this.refs.app.querySelector('video').src = '';
    }

    redo() {
        let replayContainer = this.refs.app.querySelector('#replayContainer');
        replayContainer.innerHTML = '';
        this.setState({
            replay: false
        });
    }

    upload() {
        let x = document.createElement("INPUT");
        x.setAttribute("type", "file");
        this.refs.app.querySelector('#replayContainer').appendChild(x);
        setInterval(() => console.log(x), 20000);
    }

    showFile(input) {
        console.log(input);
    }

    downloadVideo(blob) {
        console.log(blob);
        let url = URL.createObjectURL(blob);

        let replayContainer = this.refs.app.querySelector('#replayContainer');
        replayContainer.innerHTML = '';
        let videoDOM = document.createElement('video');
        videoDOM.setAttribute('controls', '');
        let sourceDOM = document.createElement('source');
        sourceDOM.setAttribute('src', url);
        sourceDOM.setAttribute('type', 'video/webm');
        videoDOM.appendChild(sourceDOM);
        replayContainer.appendChild(videoDOM);
    }

    render() {
        const granted = this.state.granted;
        const rejectedReason = this.state.rejectedReason;
        const recording = this.state.recording;
        const paused = this.state.paused;

        let mediaCapturer = !this.state.replay ? <MediaCapturer
            constraints={{audio: true, video: true}}
            timeSlice={10}
            onRequestPermission={this.handleRequest}
            onGranted={this.handleGranted}
            onDenied={this.handleDenied}
            onStart={this.handleStart}
            onStop={this.handleStop}
            onPause={this.handlePause}
            onResume={this.handleResume}
            onError={this.handleError}
            onStreamClosed={this.handleStreamClose}
            render={({request, start, stop, pause, resume}) =>
                <div>
                    {!granted && <Button variant="contained" onClick={request}>Get Permission</Button>}
                    <Button variant="contained" className={'button-margin'} onClick={start}>Start</Button>
                    <Button variant="contained" className={'button-margin'} onClick={stop}>Stop</Button>
                    or
                    <Button variant="contained" className={'button-margin'}><input type='file' onChange={(e) => this.showFile(e.target.files[0])}/></Button>

                    {recording ? <p className={'recordingTag'}>recording</p> : null}
                    {paused ? <p className={'recordingTag'}>paused</p> : null}
                    <br/>
                    <video autoPlay></video>
                </div>
            }/> : null;

        let replayButtons = this.state.replay ? <div>
            <Button variant="contained" className={'button-margin'} onClick={this.redo.bind(this)}>Do it again</Button>
            <Button variant="contained" className={'button-margin'}>Save to my CV</Button>
        </div> : null;

        return (
            <div ref="app">
                <Typography variant='h4' className={'margin-h-1'}>Record your SnapCV!</Typography>
                <Typography varant='h5'>Tell us in 1-5 minutes about:</Typography>
                <Typography varant='h5' className={'margin-bottom-1'}>Who you are, your education, your skills and your work experience</Typography>
                {mediaCapturer}
                <div id="replayContainer"></div>
                {replayButtons}
            </div>
        );
    }
}

export default Recorder;