import React from 'react'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact__heading'>
                <h3>Contact Us</h3>
            </div>
            <div className='contact__content'>
                <div className='contact__form'>
                    <div className='contact__form-row'>
                        <div className='contact__form-name'>
                            <input className='contact__form-field' type='text' placeholder='Name' />
                        </div>
                        <div className='contact__form-email'>
                            <input className='contact__form-field' type='text' placeholder='Email' />
                        </div>
                    </div>
                    <div className='contact__form-message'>
                        <textarea
                            className='contact__form-field contact__form-text'
                            placeholder='Message'
                            rows='4'
                        ></textarea>
                    </div>
                    <div className='contact__form-btn'>
                        <button className='link__btn-red'>Send message</button>
                    </div>
                </div>
                <div className='contact__address'>
                    <h4>Address</h4>
                    <p>
                        123, This Appartment,
                        <br /> Near Ocean Street <br />
                        New York
                    </p>
                    <div className='contact__address-info'>
                        <span>hello@world.com</span>
                        <span> +420 123 468 795</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
