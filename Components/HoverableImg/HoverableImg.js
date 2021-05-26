import {Component} from 'react';
export default class HoverableImg extends Component {
    render(){
    return <img src={this.props.initialImg} alt={this.props.alt}
    onMouseOver={(e)=> e.currentTarget.src = this.props.nextImg}
    onMouseOut={(e)=> e.currentTarget.src = this.props.initialImg} />
    }
}