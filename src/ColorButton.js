import React, { PureComponent } from 'react';
import withColor from './withColor';

 class ColorButton extends PureComponent{

    render(){
        return(
            <div>
                <button style ={{color: this.props.color,
                                 backgroundColor :this.props.backgroundColor,
                                 padding: "20px 16px",
                                 borderRadius:
                                 "8px",
                                 fontSize:"20px",
                                 fontWeight: "bold",
                                 boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",}} 
                                 onClick={this.props.handleChangeColor} >
                    {this.props.buttonText}
                </button>
            </div>
        )
    }
}
export default withColor(ColorButton);