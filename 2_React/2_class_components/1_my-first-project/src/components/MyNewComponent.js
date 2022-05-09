import  React , { Component} from 'react';

class MyNewComponent extends Component{
    
    constructor(props){
        super(props);
    }
    
    render() {
        return(
            <div>
                {this.props.someText}

                <h1>{this.props.header}</h1>
                {this.props.children}
            </div>
        );
    }
}

export default MyNewComponent;