import React, {Component} from 'react';


class AudioInterpreter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            speech: {},
            skills: []
        }
    }

    componentDidMount() {
        fetch('https://speech.googleapis.com/v1/speech:recognize?key=AIzaSyBJjGtJPYIaZLKMNOmNX-051wiCYLcw6TU', {
            method: 'post',
            body: JSON.stringify({
                "config": {
                    "languageCode": "en-US"
                },
                "audio": {
                    "content": this.props.audio}
            })
        }).then(response => {
            return response.json();
        }).then(data => {
            let result = data.results[0].alternatives[0];
            console.log(result);
            this.setState({
                speech: result
            });
            this.findSkills(result.transcript);
        });
    }

    findSkills(text) {
        text = text.toLowerCase();
        let skl = [];

        if (text.includes('java'))
            skl.push('Java');
        if (text.includes('javascript') || text.includes('java script'))
            skl.push('JavaScript');
        if (text.includes('python'))
            skl.push('Python');
        if (text.includes('c++') || text.includes('c plus plus'))
            skl.push('C++');

        this.setState({
            skills: skl
        })
    }

    render() {
        const speech = this.state.speech;
        const skills = this.state.skills;
        return (
            <div>
                <b>transcript</b>: {speech.transcript ? speech.transcript : ''}
                <br/>
                <b>skills</b>: {skills.join(', ')}
                <br/>
                <b>confidence</b>: {speech.confidence ? Math.round(speech.confidence * 100) : ''}%
            </div>
        );
    }
}

export default AudioInterpreter;