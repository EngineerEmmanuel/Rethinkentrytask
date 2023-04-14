import avatar from "../img/retink-avatar.png"

const Hero = () => {
    return ( 
        <div className="hero-con container" id="home">
            <div className="hero-text">
                <h1>Get Advanced AI  + Expert Created <span>Logos</span></h1>
                <p>Boost your sales <span>10x faster</span> with content customized by our unique partnership of <span>human creativity and AI optimization</span> </p>
                <div className="hero-btn">
                    <button>Get started</button>
                </div>
            </div>
            <div className="hero-img">
                <img src={avatar} alt="A picture"  />
            </div>
        </div>
     );
}
 
export default Hero;