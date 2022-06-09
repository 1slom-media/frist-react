import './style.css';

function Features(){
    return(
      <>
          <section className="features" id='features'>
           <div className="container">
              <h3 className="features__heading">
                Contrary to popular belief, Lorem Ipsum is not simply random text
              </h3>
             <p className="features__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
             </p>
              <ul className="features__list">
                <li className="features__item">
                    <div className="circle circleone"></div>
                    <h4 className="features__item-heading">Game perspective</h4>
                    <p className="features__item-text">
                        the other hand, we denounce with righteous indignation and dislike men who.
                    </p>
                </li>
                
                <li className="features__item features__item-active">
                    <div className="circle circletwo"></div>
                    <h4 className="features__item-heading">Well Documented</h4>
                    <p className="features__item-text">
                        the other hand, we denounce with righteous indignation and dislike men who.
                    </p> 
                </li>
                
                <li className="features__item">
                    <div className="circle circlethree"></div>
                    <h4 className="features__item-heading">Subtle Animations</h4>
                    <p className="features__item-text">
                        the other hand, we denounce with righteous indignation and dislike men who.
                    </p>
                </li>
              </ul>
            
            </div>
         </section>
      </>  
    );
}

export default Features;
