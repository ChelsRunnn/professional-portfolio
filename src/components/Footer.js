import React from 'react';

const styles = {
    color: {
        backgroundColor: `rgba(0, 0, 0, 0.2)`
    }
};

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="text-center text-white">
                {/* <!-- Grid container --> */}
                {/* <div className="container p-4 pb-0"> */}
                    <div className="mb-4">
                        {/* <!-- Linkedin --> */}
                        <a className="btn btn-outline-light btn-floating m-1" target='_blank' href="https://www.linkedin.com/in/chelsea-runacres/" role="button"
                        ><i className="fab fa-linkedin-in">LinkedIn</i
                        ></a>
                        {/* <!-- Github --> */}
                        <a className="btn btn-outline-light btn-floating m-1" target='_blank' href="https://github.com/ChelsRunnn" role="button"
                        ><i className="fab fa-github">GitHub</i
                        ></a>
                    </div>
                {/* </div> */}
            </div>
        </div>
    )
};

export default Footer


