import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Parallax from 'react-spring/renderprops-addons'
import ParallaxLayer from 'react-spring/renderprops-addons'


export default function Home() {
  return (
      <Parallax pages={3} scrolling={false} horizontal ref={ref => (this.parallax = ref)}>
        <ParallaxLayer offset={0} speed={0.5}>
          <span onClick={() => this.parallax.scrollTo(1)}>Layers can contain anything</span>
        </ParallaxLayer>
      </Parallax>
  )
}
