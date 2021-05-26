import * as React from "react";
export const TemplateContext = React.createContext({});

export class TemplateProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            obj: undefined
        }
    }

    componentDidMount() {

    }
    render() {
        const value = {
            obj: this.state.obj,
            changeObj: (item) => {
                this.setState({obj: item});
            },
            removeObj: () => {
                this.setState({obj: undefined})
            }
        };
        return (
            <TemplateContext.Provider value={value}>
                {this.props.children}
            </TemplateContext.Provider>
        )
    }
}
