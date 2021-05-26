import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [],
            copyright: ''
        }
    }

    componentDidMount() {
        if (this.props.footer)
            this.setState({
                links: this.props.footer.links,
                copyright: this.props.footer.copyright
            });
    }
    render() {
        return (
            <div className={'footer-wrapper'}>
                <div className='footer'>
                    {this.state.links.map((link,i)=><img key={i} onClick={()=> window.open(link.to)} 
                    src={link.src} title={link.name} alt={link.name} />)}
                </div>
                <p>{this.state.copyright}</p>

            </div>
        );
    }
}

export default Footer;
