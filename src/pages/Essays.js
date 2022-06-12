import "./Essays.css"
import image from "../images/post1.png"
import image2 from "../images/post2.jpg"
import Button from "../components/Button"
import post from "../components/data/post.json"

function Essays(){
    return(
        <div className="essay container">
            {post.map((data) => (
                <section id="Article">
                <div className="row">
                    <div className="col-40">
                        <img className="cover-img" src={data.img} />
                    </div>
                    <div className="col-60">
                        <div className="content">
                            <h1>{data.title}</h1>
                            <p>{data.summary}</p>
                            <Button target={data.link} content="Read More" />
                        </div>
                    </div>
                </div>
            </section>
            ))}
        </div>
    )
}

export default Essays