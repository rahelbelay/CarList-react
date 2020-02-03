import React from 'react'
import moment from 'moment'

class HelloWorld extends React.Component {
    state = {
        now: moment().format('LTS')
    }


    updateTime = () => {
        this.setState({
            now: moment().format('LTS')
        })
    }

    // componentDidMount() {
    //     setInterval(() => { this.updateTime() }, 1000)
    // }

    render() {
        return (
            <div>
                <b>Hello</b> {this.props.name} {this.props.test}
                The time is {this.state.now}
                <button onClick={this.updateTime}>Update time</button>
                <button onClick={this.updateTime}>Update time again</button>
            </div>
        );
    }
}

export default HelloWorld
