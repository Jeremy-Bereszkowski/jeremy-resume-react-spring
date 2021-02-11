import React from "react"
import { Parallax, ParallaxLayer } from 'react-spring/addons'



export default function Home() {
  return (
      <Parallax pages={3} scrolling={false} horizontal ref={ref => (this.parallax = ref)}>
        <ParallaxLayer offset={0} speed={0.5}>
          <span onClick={() => this.parallax.scrollTo(1)}>Layers can contain anything</span>
        </ParallaxLayer>
      </Parallax>
  )
}
