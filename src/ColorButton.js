import React, { PureComponent } from 'react';
import withColor from './withColor';

 class ColorButton extends PureComponent{

    render(){
        return(
            <div>
                <button style ={{color: this.props.color,
                                 backgroundColor :this.props.backgroundColor,
                                 padding: "8px 16px",
                                 borderRadius:
                                 "4px",
                                 fontSize:"18px",
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