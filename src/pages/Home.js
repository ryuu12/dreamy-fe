import "./Home.css"
import cover from "../images/cover.jpg";
import cover2 from "../images/cover2.jpg"
import Button from "../components/Button";
import people1 from "../images/people1.png";
import people2 from "../images/people2.png";

function Home(){
    return (
        <div className="home container">
            <section id="Header">
                <div className="row">
                    <div className="col-30">
                        <img className="cover-img" src={cover} />
                    </div>
                    <div className="col-70">
                        <div className="content">
                            <h1>Writing down skepticism</h1>
                            <p>Dreamy is a place for those who have a love for research and share their result with other people regardless of their educational background, whether it’s related to STEM, history, culture, or even some small things around us. We believe that everybody must have something that they are interested in and be excited about exploring more about it.</p>
                            <Button target="/" content="Become Contributors" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="Main">
                <div className="row">
                    <div className="col-70">
                        <div className="content">
                            <h1>Not merely research</h1>
                            <p>Research is only a part of the whole dreamy purpose. Our contributors love writing essays and conducting a special reports on a certain topics/phenomena. That’s why we always try to keep the authenticity of writing from a common person’s perspective, not a company or a certain community interest.</p>
                        </div>
                    </div>
                    <div className="col-30">
                        <img className="cover-img" src={cover2} />
                    </div>
                </div>
            </section>
            <section id="People">
                <h1>Our Core Team</h1>
                <div className="row">
                    <div className="col-25">
                        <div className="ppl-card">
                            <img className="ppl-img" src={people1} />
                            <p><i class="bi bi-twitter"></i> rayhanrusyd</p>
                        </div>
                    </div>
                    <div className="col-25">
                        <div className="ppl-card">
                            <img className="ppl-img" src={people2} />
                            <p><i class="bi bi-twitter"></i> ex_undis_solum</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home