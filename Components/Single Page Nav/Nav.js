import React, {Component} from 'react';
import './Nav.css'
// Top Nav for Mobile Side Nav for
export default class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {links: []}
    }
    componentDidMount() {
        if(this.props.links){
            this.setState({links: this.props.links});
        }
    }

    render() {
        return <nav className={'nav'}>
            {this.state.links.map((link, i)=> <li key={i} onClick={()=> this.scrollTo(link.to)} >{link.name}</li>)}
        </nav>
    }
    scrollTo = (to) => window.scrollTo(0, to)
}