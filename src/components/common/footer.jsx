import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="card text-center" style={{marginTop: "20px", color:"#280000 ", background:"#F8F8F8"}}>
                    <div className="card-body">FOOTER</div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Footer;