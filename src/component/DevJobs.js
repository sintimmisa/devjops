import React from 'react'

import Data from '../data/data.json';
import styles from './devjobs.module.css';

const DevJobs = (props) => {
  return (
    <div className={styles.container}>
        <div className={styles.card}>
          <div className="job_logo">
          <img src={props.logo} alt="job_logo" className='job_logo'></img>

          </div>
          
          < div className='postedAt_contract_type'>
            <p className="postedAt">{props.postedAt}</p>
            <p className="contract_type">{props.contract}</p>
        </div>
        <h2>{props.position}</h2>
        <p>{props.company}</p>
        <div className='location'>{props.location}</div>
        </div>
    
    
    </div>
  )
}

export default DevJobs;
