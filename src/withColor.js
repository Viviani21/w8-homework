import React from 'react';

const withColor = (WrappedComponent)=>{
    class WithColor extends React.Component {
       
        state = { backgroundColor : 'white',
                            color: 'black',
                            buttonText: "I'm a white BUTTON",
                         };

        handleChangeColor = () => {
            this.state.backgroundColor === 'white' ? this.setState({backgroundColor:'black'}) : this.setState({ backgroundColor: 'white'});
            this.state.color === 'black' ? this.setState({color:'white'}) : this.setState({ color: 'black'});
            this.state.buttonText === "I'm a white BUTTON" ? this.setState({buttonText: "I'm a black BUTTON"}) : this.setState({ buttonText: "I'm a white BUTTON"});
        }

    render() {
        return(
         
            <WrappedComponent handleChangeColor={this.handleChangeColor} color={this.state.color}  backgroundColor={this.state.backgroundColor} buttonText={this.state.buttonText}{...this.props}/>
            )       
    }
}

    return WithColor;
}
export default withColor;