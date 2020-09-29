import React, {Component} from 'react'

export default class List extends Component {

    render() {
        const style = this.props.style ? this.props.style : {display: 'block'};
        const header = this.props.header
            ? this.props.headerStyle
                ? <p style={this.props.headerStyle}>{this.props.header}</p>
                : <p>{this.props.header}</p>
            : '';
        const mappedList = this.props.list.map((item, i) => <li key={i}>{item}</li>);
        const orderedList = this.props.listStyle ? <ol style={this.props.listStyle}>{mappedList}</ol> : <ol>{mappedList}</ol>;
        const unorderedList = this.props.listStyle ? <ul style={this.props.listStyle}>{mappedList}</ul> : <ul>{mappedList}</ul>;
        const list = this.props.orderedList ? orderedList : unorderedList
        return <div style={style}>
            <h3>{header}</h3>
            {list}
        </div>
    }
}