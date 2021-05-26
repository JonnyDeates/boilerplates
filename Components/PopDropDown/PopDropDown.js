import react, {Component} from 'react';
import './PopDropDown.css';

export default class PopDropDown extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            content: []
        }
    }
    componentDidMount(){
        if(this.props.content) {
            this.setState({content: this.props.content})
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.props.content !== prevProps.content) {
            this.setState({content: this.props.content});
        }
    }
    render(){
        const image = this.props.image ? <img src={this.props.image.src} alt={this.props.image.alt}/> : ''
        const style = {maxHeight: this.state.isOpen ? 21*(this.state.content.length+1) + 'px' : 0}
        return <div className='dropdown'>
            <p onClick={()=> this.setState({isOpen: !this.state.isOpen})}>{image}{this.props.title}</p>
            <div className='dropdown-content' style={style}>
            <ul>{this.state.content.map((item, i)=><li key={i}>{item}</li>)}</ul>
            </div>
        </div>
    }
}