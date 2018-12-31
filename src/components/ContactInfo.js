import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return(
            <section>
                <div className="contactinfo">
                    <a href="#" className="contactinfo__single" target="_blank">
                        <i className="ion-ios-location-outline contactinfo__icon"></i>
                        <span className="contactinfo__title">Mexico City, Mexico</span>
                    </a>
                    <a href="#" className="contactinfo__single" target="_blank">
                        <i className="ion-ios-email-outline contactinfo__icon"></i>
                        <span className="contactinfo__title">ing.villa.jimenez@gmail.com</span>
                    </a>
                    <a href="#" className="contactinfo__single" target="_blank">
                        <i className="ion-social-github-outline contactinfo__icon"></i>
                        <span className="contactinfo__title">ingvillajimenez</span>
                    </a>
                    <a href="#" className="contactinfo__single" target="_blank">
                        <i className="ion-social-linkedin-outline contactinfo__icon"></i>
                        <span className="contactinfo__title">juan-alberto-villa-jiménez-793b0035</span>
                    </a>
                </div>
            </section>
        );
    }
}

export default ContactInfo;