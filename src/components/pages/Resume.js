import React, { Component } from 'react';
import Resume from '../../Documents/Resume.pdf';

class Download extends Component {

  render() {

    return (
    <section className='main vh-100'>
      <div className='container custom-container'>
        <div className='row spacer'>
          <div className='col-3'> 
            <div className='custom-wrap'>
              <div className='custom-card'>
                <h2>Formal Resume</h2>
              </div>
            </div>
          </div>
          <div className='col-9'> 
            <div className='custom-wrap'>
              <div className='custom-card'>
                <a href = {Resume} target = "_blank" className='proj'>Click here to download a PDF</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );

  }
}

export default Download;