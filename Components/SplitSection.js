import React, {Component} from 'react'

export default class SplitSection extends Component {

    render() {
        const style = {display: 'flex', justifyContent: 'space-evenly'}
        const width = {maxWidth: '50%', minWidth: '50%'}
        const left = this.props.leftStyle ? <p style={{...this.props.leftStyle, ...width}}>{this.props.left}</p> :  <p style={width}>{this.props.left}</p>;
        const right = this.props.rightStyle ? <p style={{...this.props.rightStyle,...width}}>{this.props.right}</p> :  <p style={width}>{this.props.right}</p>;

        return <div style={style}>
            {left}
            {right}
        </div>
    }
}