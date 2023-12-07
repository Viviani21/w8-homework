import withColor from './withColor';

function ColorHeading(props){
    return(
        <>
        <h1 style={{
            color: props.color
        }}>
            {props.children}{" "}
        </h1>
        <p style={{
            color: props.color
        }}> Hello</p>
        <button onClick={props.handleChangeColor}>
            (toggle theme)
        </button>
        </>
    )
}
export default withColor(ColorHeading);