import "./style.css";
import WorksImg from "../images/works-img.png";

function Works(){

    return(

        <>
          <section className="works" id="works">
            <div className="works__curtain">
              <div className="container works__container">
                <div className="works__wrapper">
                    <h2 className="works__heading">bringing game to Everyone LIfe!</h2>
                    <h5 className="works__heading-small">how it works!  <span className="works__span">see</span></h5>
                    <p className="works__text">
                        InnoGames is one of the worldwide leading developers and publishers of online games. Currently, more than 400 people from over 30 countries are working in the office in Hamburg. Community management,<br/>
                        <br/>
                        development and system administration work seamlessly together. This, combined with close contact to our players, creates a strong foundation that promotes the continued
                    </p>
                    <a className="works__link" href="#home">view characters</a>
                    
                </div>
                <img className="works__img" src={WorksImg} width="619" height="575" alt=""/>
                
              </div>
            </div>
       
          </section>


        </>

    );



}
    
    export default Works;