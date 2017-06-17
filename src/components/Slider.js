import React        from 'react';

class Slider extends React.Component {

    render() {
    	

        return (
   

<div id="myCarousel" className="carousel slide">
  <ol className="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="item active">
      <img src="http://wpreact.dev/wp-content/themes/sydney/images/1.jpg" className="img-responsive" width='1500px' height='500px'/>
      <div className="container">
        <div className="carousel-caption">
          </div>
      </div>
    </div>
    <div className="item">
      <img src="http://wpreact.dev/wp-content/themes/sydney/images/2.jpg" className="img-responsive" width='1500px' height='500px'/>
      <div className="container">
        <div className="carousel-caption">
          
        </div>
      </div>
    </div>
    <div className="item">
      <img src="http://wpreact.dev/wp-content/themes/sydney/images/3.jpg" className="img-responsive" width='1500px' height='500px'/>
      <div className="container">
        <div className="carousel-caption">
          
        </div>
      </div>
    </div>
  </div>
 

  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
    <i className="glyphicon glyphicon-chevron-left"></i>
  </a>
  <a className="right carousel-control" href="#myCarousel" data-slide="next">
    <i className="glyphicon glyphicon-chevron-right"></i>
  </a>  

</div>


        );
    }

}
export default Slider;
