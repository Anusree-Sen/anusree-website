import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/anusree-sen-55b308224/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Anusree-Sen" target="_blank"><AiFillGithub/></a>
        <a href="https://facebook.com/id=100022632162477" target="_blank"><AiFillFacebook/></a>
    </div>
  )
}

export default HeaderSocials