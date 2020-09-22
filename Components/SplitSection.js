import React, {Component} from 'react'

export default class SplitSection extends Component {

    render() {
        const style = {display: 'flex', justifyContent: 'space-evenly'}
        const left = this.props.leftStyle ? <p style={this.props.leftStyle}>{this.props.left}</p> :  <p>{this.props.left}</p>;
        const right = this.props.rightStyle ? <p style={this.props.rightStyle}>{this.props.right}</p> :  <p>{this.props.right}</p>;

        return <div style={style}>
            <p>{left}</p>
            <p>{right}</p>
        </div>
    }
}