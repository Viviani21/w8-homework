import React, { PureComponent } from 'react';
import withColor from './withColor';

 class ColorButton extends PureComponent{

    render(){
        return(
            <div>
                <button style ={{color: this.props.color,
                                 backgroundColor :this.props.backgroundColor}} 
                                 onClick={this.props.handleChangeColor} >
                    {this.props.buttonText}
                </button>
            </div>
        )
    }
}
export default withColor(ColorButton);