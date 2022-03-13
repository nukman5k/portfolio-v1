import React from 'react'
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <BsTwitter onClick={() => window.open('https://twitter.com/isgaqagaqa')}/>
            </div>
            <div>
                <BsLinkedin onClick={() => window.open('https://www.linkedin.com/in/nda-kunene/')}/>
            </div>
            <div>
                <BsGithub onClick={() => window.open('https://github.com/nukman5k')}/>
            </div>

        </div>
    )
}

export default SocialMedia