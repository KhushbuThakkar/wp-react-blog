import React        from 'react';

class Slider extends React.Component {

    render() {
    	let allData = DataStore.getAll();

        return (
    <div id="slideshow" className="header-slider" data-speed="4000">
        <div className="slides-control">
        	<div className="slides-container">
            	<div className="slide-item">                        
            		<div className="slide-inner">
                            <div className="contain animated fadeInRightBig text-slider">
                                <h2 className="maintitle">Welcome to Sydney</h2>
                                <p className="subtitle">Feel free to look around</p>
                            </div>
	                    <a href="#primary" className="roll-button button-slider">Click to begin</a>                        
	                </div>
                </div>
                <div className="slide-item">                        
                	<div className="slide-inner">
                        <div className="contain animated fadeInRightBig text-slider">
                            <h2 className="maintitle">Ready to begin your journey?</h2>
                            <p className="subtitle">Click the button below</p>
                        </div>
                        <a href="#primary" className="roll-button button-slider">Click to begin</a> 
                    </div>                   
                </div>  
        	</div>
    	</div>        
    </div>
        );
    }

}
export default Slider;
