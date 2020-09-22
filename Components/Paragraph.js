import React, {Component} from 'react'

export default class Paragraph extends Component {

    render() {
        const style = this.props.style ? this.props.style : {display: 'unset'};
        const header = this.props.header
            ? this.props.headerStyle
                ? <p style={this.props.headerStyle}>{this.props.header}</p>
                :  <p>{this.props.header}</p>
            : '';
        const body = this.props.bodyStyle ? <p style={this.props.bodyStyle}>{this.props.body}</p> :  <p>{this.props.body}</p>;

        return <div style={style}>
            <h3>{header}</h3>
            <p>{body}</p>
        </div>
    }
}