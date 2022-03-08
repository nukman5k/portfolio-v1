import React from 'react'
import { BsTwitter, BsInstagram, BsLinkedin, BsFacebook, BsGithub } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <BsTwitter />
            </div>
            <div>
                <BsLinkedin />
            </div>
            <div>
                <BsGithub />
            </div>

        </div>
    )
}

export default SocialMedia