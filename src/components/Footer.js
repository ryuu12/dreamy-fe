import "./Footer.css"

function Footer(props) {
    return(
        <div className="footer">
            <p>Copyright &copy; {props.date} Dreamy Network</p>
        </div>
    )
}

export default Footer