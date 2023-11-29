import React from 'react'
import styles from '../style'
import { stats } from '../constants'

const Stats = () => (

  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 `}>

    {stats.map((stats, index) => (

      <div key={index} className={``}>

<h4>{stats.value}</h4>

      </div>

    ))}

  </section>


)

export default Stats
