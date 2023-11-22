import React from 'react'
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { LiaCarSolid } from "react-icons/lia";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
function Partie2() {
  return (
    <div class="partie2">
    <img class="img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/404102713_847737936831392_3332039364568458726_n.png?stp=dst-png_s370x247&_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=VPUu1v9vMPcAX8BLG-l&_nc_oc=AQlr315gvKSn-wGHyvvFJhUFCr8WWDEvY7CeeHs4LrRDHehZeZAG5eL7d7u8iwDULsE5aIEtMPwxcIr94r4EZL-6&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRWp1KuqEnyMuGoogbB5LzfRGWKBoxJsNzJeEvgedU_mg&oe=658494EB" alt="" />
    <h4>contact</h4>
    <div id= "icons">
    <div class="icon1">
    <BsTelephone/>
    <p>+216 99107454</p>
    </div>
    <div class="icon2">
    <MdOutlineEmail />

    <p> abejjar471@gmail.com</p>
    </div>
    <div class="icon3">
    <GoLocation />

    <p>sfax.tunisie</p>
    </div>
    <div class="icon4">
    <GoPerson />
    <p>21 years old</p>
    </div>
    <div class="icon5">
    <LiaCarSolid />
    <p>license b</p>
    </div>
    </div>
    <div>
      <li>
      <h4>LONGUE</h4>
      <p>french</p>
      <p>english</p>
      <p>arabe</p>
      <p>Italian</p>
      </li>
     
    </div>
    <div id="social">
      <h4>Social networks</h4>
     <div class="icon6">
     <TiSocialFacebookCircular />
     <p>ahmed bejjar</p>
     </div>
     <div class="icon7">
     <CiInstagram />
     <p>ahmed bejjar@gmail.com</p>
     </div>
     <div class="icon8">
     <CiTwitter />
     <p>ahmed.king</p>
     </div>
    </div>
    </div>
  )
}

export default Partie2