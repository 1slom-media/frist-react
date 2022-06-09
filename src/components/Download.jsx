import './style.css';
import Card1 from "../images/card1-img.png";
import Card2 from "../images/card2-img.png";
import Card3 from "../images/card3-img.png";
import DownIMG from "../images/download-img.png";

function Download(){
    return(
        <>
            <section className="download">
              <div className="download__curtain">
                <div className="container download__container">
                    <div className="download__wrapper">
                      <h2 className="download__heading">
                        Hold different,Play different
                      </h2>
                      <h5 className="download__heading-small">
                        Playing is a new Skill
                        <span className="download__heading-span">play</span>
                      </h5>
                      <p className="download__text">
                        <span className="download__text-span">Starting a game store business</span> can be an exciting way to achieve your entrepreneurial dreams while doing something that you love. <br/>
                        <br/>
                        Game stores are <span className="download__text-span">highly specialized</span> and interesting shops selling entertainment products.
                      </p>
                      <ul className="download__cards">
                        <li className="download__card download__card-active"><img className="download__cards-img" src={Card1} width="97" height="128" alt=""/></li>
                        <li className="download__card"><img className="download__cards-img" src={Card2} width="97" height="128" alt=""/></li>
                        <li className="download__card"><img className="download__cards-img" src={Card3} width="97" height="128" alt=""/></li>
                      </ul>
                      <div className="download__line"></div>
                      <div className="download__buttons">
                        <a className="download__link" href="https://www.apple.com">try free</a>
                        <button className="download__button">Download</button>
                      </div>
                    </div>

                   <img className="download__img" src={DownIMG} width="840" height="464" alt=""/>
    
                </div>
              </div>
          </section>
        </>
    );

}

export default Download;