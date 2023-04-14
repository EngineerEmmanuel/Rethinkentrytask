import artificialIntelligencePic from "../img/artificial-intelligence-image.png";
import filePic from "../img/brand-identity-image.png";
import know from "../img/be-informed-image.png";
import receive from "../img/receive-and-review-image.png";
import monitor from "../img/publish-and-monitor-image.png";
const Process = () => {
    return ( 
        <div className="pro-con container" id="process">
            <div className="first-process-con">
                <div className="process1">
                    <div className="process1-img-con">
                    <img src={artificialIntelligencePic} alt="A logo of artificial intelligence" />

                    </div>
                    <h4>Make AI-assited Content Choices</h4>
                    <p>Access and order from an extensive catalogue in any language and on your budget`s terms. If unsure, our AI guides you to the best.</p>
                </div>
                <div className="process2">
                <div className="process2-img-con">
                    <img src={filePic} alt="Pictures of files" />

                    </div>
                    <h4>Upload And Maintain Your Brand Identity</h4>
                    <p>Add your preferences and brand assets to ensure that the content is consistent with your brand identity. No brand assets? we can make some for you.</p>
                </div>
                <div className="process3">
                <div className="process3-img-con">
                    <img src={know} alt="A logo of artificial intelligence" />

                    </div>
                    <h4>Be Informed As We Create</h4>
                    <p>Your details are translated and sent to the AI, FP, or both (per your choice) as you relax and receive continuous updates.</p>
                </div>
            </div>
            <div className="second-pro-con container">
                <div className="second-pro1-con">
                    <div className="second-pro1-img-con">
                        <img src={receive} alt="" />
                    </div>
                    <h4>Receive And Review</h4>
                    <p>The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.</p>

                </div>
                <div className="second-pro2-con">
                <div className="second-pro2-img-con">
                        <img src={monitor} alt="" />
                    </div>
                    <h4>Publish And Monitor Your Content`s Progress</h4>
                    <p>The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.</p>
                </div>
            </div>
        </div>
     );
}
 
export default Process;