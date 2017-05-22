import React from 'react';

import ContactFormApp from './../containers/contactFormApp.jsx';

class ContactSection extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section id="contact">
                <div className="light-bg">
                    <div className="container-fluid">
                        <div className="row contact-container">
                            <div className="col-sm-6 map-container">
                                <iframe src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ06a_oIfO1EARkQsX2nZ8Mhk&key=AIzaSyAgWNpAYisfqyIZtHC-iRH9iAakFmqFWQM"  width="100%" height="550" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="title-content">
                                            <h1>Keep in Touch</h1>
                                            <hr /><hr />
                                        </div>
                                        <ContactFormApp />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactSection;