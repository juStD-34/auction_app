import React from 'react'

import NavigationBar from './components/Navbar'
import Introduction from './components/Introduction'
import Preview from './components/Preview'
import Footers from './components/Footer'

function Home() {
  return (
    <div>
    <NavigationBar/>
    <Introduction/>
    <Preview/>
    <Footers/>
    </div>
  )
}

export default Home
