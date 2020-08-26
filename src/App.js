import React from 'react'

import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import styles from './styles/modules.scss'

import Section from './components/section'
import Container from './components/container'
import Navbar from './components/navbar'
import Logo from './components/logo'
import Welcome from './features/welcome'
import Card from './features/card'
import Gallery from './features/gallery'
import Testimonial from './features/testimonial'
import Subscribe from './features/subscribe'
import AboutUs from './features/about'
import Contact from './features/contact'

function App() {
    return (
        <div className='App'>
            <Section className='header'>
                <Container>
                    <Navbar logo={<Logo size='medium' />} />
                </Container>
            </Section>
            <Section className='hero'>
                <div className='hero__overlay'>
                    <Container className='container__hero'>
                        <Welcome text='One of the most beautiful HTML5 templates' />
                    </Container>
                </div>
            </Section>
            <Section className='white'>
                <Container className='container container__cards'>
                    <Card
                        heading='Elementum laoreet'
                        text='Cras aliquet et mi id fermentum. Suspendisse eget sodales lorem, vestibulum euismod lectus.'
                        icon='faCoffee'
                    />
                    <Card
                        heading='Elementum laoreet'
                        text='Cras aliquet et mi id fermentum. Suspendisse eget sodales lorem, vestibulum euismod lectus.'
                    />
                    <Card
                        heading='Elementum laoreet'
                        text='Cras aliquet et mi id fermentum. Suspendisse eget sodales lorem, vestibulum euismod lectus.'
                    />
                </Container>
            </Section>
            <Section className='pink'>
                <Container className='container container__gallery'>
                    <Gallery heading='Our Work' />
                </Container>
            </Section>
            <Section className='white'>
                <Container className='container container__testimonials'>
                    <Testimonial />
                </Container>
            </Section>
            <Section className='subscription'>
                <div className='subscription__overlay'>
                    <Container className='container container__subscribe'>
                        <Subscribe
                            heading='Subscribe For Updates'
                            text='Join our 1000+ subscribers and get access to the latest tools, freebies, product announcements and much more!'
                        />
                    </Container>
                </div>
            </Section>
            <Section className='white'>
                <Container className='container container__about-us'>
                    <AboutUs heading='About Us' />
                </Container>
            </Section>
            <Section className='gray'>
                <Container className='container container__contact'>
                    <Contact />
                </Container>
            </Section>
            <Section className='footer'>
                <Container className='container container__footer'>
                    <span className='footer-text'>Copyright © Nobody 2020</span>
                    <div className='footer-logos'>
                        <span className='footer-logo'>tw</span>
                        <span className='footer-logo'>fb</span>
                        <span className='footer-logo'>in</span>
                    </div>
                    <span className='footer-text'>
                        Designed by{' '}
                        <a href='#' className='footer-link'>
                            nobody corp
                        </a>
                    </span>
                </Container>
            </Section>
        </div>
    )
}

export default App
