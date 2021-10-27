import React from "react";
import One from "../asset/learning space.svg";
import Two from "../asset/queries.svg";
import Three from "../asset/get inspired.svg";
import Four from "../asset/track progress.svg";
import Five from "../asset/get connected.svg";
import Six from "../asset/all platforms.svg";

export default function AboutComponent() {
  return (
    <div className='about'>
      <div className='row'>
        <h4 className='font'>
          <b>Why Maadhyams?</b>
        </h4>
        <div className='col s12 m3'>
          <img className='responsive-img' src={One} alt='bg' width='150px' />
          <h5 className='font'>Experience</h5>
          <p className='para'>
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration in some form, by
            injected humour.
          </p>
          <h6>
            <b>Check up.</b>
          </h6>
        </div>
        <div className='col s12 m3'>
          <img className='responsive-img' src={Two} alt='bg' width='150px' />
          <h5 className='font'>Ability</h5>
          <p className='para'>
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration in some form, by
            injected humour.
          </p>
          <h6>
            <b>Level Up.</b>
          </h6>
        </div>
        <div className='col s12 m3'>
          <img className='responsive-img' src={Three} alt='bg' width='150px' />
          <h5 className='font'>Access</h5>
          <p className='para'>
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration in some form, by
            injected humour.
          </p>
          <h6>
            <b>Rise Up.</b>
          </h6>
        </div>
        <div className='col s12 m3'>
          <img className='responsive-img' src={Four} alt='bg' width='150px' />
          <h5 className='font'>Reward</h5>
          <p className='para'>
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration in some form, by
            injected humour.
          </p>
          <h6>
            <b>Cash Up.</b>
          </h6>
        </div>
        <div className='col s12 m3'>
          <img className='responsive-img' src={Five} alt='bg' width='150px' />
          <h5 className='font'>Reward</h5>
          <p className='para'>
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration in some form, by
            injected humour.
          </p>
          <h6>
            <b>Cash Up.</b>
          </h6>
        </div>
        <div className='col s12 m3'>
          <img className='responsive-img' src={Six} alt='bg' width='150px' />
          <h5 className='font'>Reward</h5>
          <p className='para'>
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration in some form, by
            injected humour.
          </p>
          <h6>
            <b>Cash Up.</b>
          </h6>
        </div>
      </div>
    </div>
  );
}
