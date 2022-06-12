import "./Button.css"

function Button(props) {
    return(
        <div>
            <a href={props.target} className="btn">{props.content}</a>
        </div>
    )
}

export default Button