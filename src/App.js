import React, { Component } from 'react'
import Cat from './components/Cat'
import Bottom from './components/Bottom'
import boxerToCatPicture from './images/boxertocat_octodex.jpg'
import brennaToCat from './images/Brennatocat.png'
import filmToCat from './images/filmtocats.png'
import fintechToCat from './images/Fintechtocat.png'
import puddleJumperCat from './images/puddle_jumper_octodex.jpg'
import sentryToCat from './images/Sentrytocat_octodex.jpg'
import person1 from './people-images/72919.jpeg'
import person2 from './people-images/4226949.png'
import person3 from './people-images/18125109.jpeg'
import person4 from './people-images/20049049.jpeg'
import person5 from './people-images/29592817.jpeg'

const App = () => {
  return (
<>
<main>
  <section class="desktop">
<section class="top-menu">
  <section class="left-menu">
  
    <a id = "github" href="https://octodex.github.com"><i class="fab fa-github"></i></a>
    <nav>
      <ul>
       <li><a id = "octo" href="https://octodex.github.com" >Octodex</a></li>
       
       <li><a href="https://octodex.github.com" >Home</a></li>
       <li>
        <a href="https://octodex.github.com/faq/">FAQ</a>
       </li>
      
      </ul>
    </nav>
  </section>
  <section class="right-menu">
  <nav>
  <ul>
    <li>
      <a href="https://twitter.com/githubdesign">Follow us on Twitter</a>
    </li>
    <li>
      <a href="https://github.com/">Back to GitHub.com</a>
    </li>
  </ul>
  </nav>
</section>
  </section>
  </section>

  <section class="mobile">
<section class="top-menu">
  <section class="left-menu">
  
    <a id = "github" href="https://octodex.github.com"><i class="fab fa-github"></i></a>
    <nav>
      <ul>
       <li><a id = "octo" href="https://octodex.github.com" >Octodex</a></li>
       
       <li><a href="https://octodex.github.com" >Home</a></li>
       <li>
        <a href="https://octodex.github.com/faq/">FAQ</a>
       </li>
      
      </ul>
    </nav>
  </section>
  <section class="right-menu">
  <nav>
  <ul>
    <li>
      <a href="https://twitter.com/githubdesign">Follow us on Twitter</a>
    </li>
  </ul>
  </nav>
</section>
  </section>
  </section>
<section class="cats">
    <ul>
      <section class="fix">
      <Cat
      image ={fintechToCat}
      />
      <Bottom
      name="#148: Fintechtocat"
      image2 ={person5}
      />
      </section>
      <section class="fix">
       <Cat
      image ={brennaToCat}/>
      <Bottom
      name="#147: Brennatocat"
      image2 ={person2}
      />
      </section>
      <section class="fix">
       <Cat
      image ={filmToCat}
      />
      <Bottom
      name="#146: Filmtocats"
      image2 ={person4}
      />
      </section>
      <section class="fix">
       <Cat
      image ={sentryToCat}
      />
      <Bottom
      name="#145: Sentrytocat"
      image2 ={person1}
      />
      </section>
      <section class="fix">
       <Cat
      image ={puddleJumperCat}
      />
      <Bottom
      name="#144: Umbrellatocat"
      image2 ={person3}
      />
      </section>
      <section class="fix">
       <Cat
      image ={boxerToCatPicture}
      />
      <Bottom
      name="#143: Boxertocat"
      image2 ={person3}
      />
      </section>
    </ul>
  </section>
  {/* <section class="cats2">
    <ul>
      <section class="fix">
      <Cat
      image ={fintechToCat}
      />
      <Bottom
      name="#148: Fintechtocat"
      image2 ={person5}
      />
      </section>
      <section class="fix">
       <Cat
      image ={brennaToCat}/>
      <Bottom
      name="#147: Brennatocat"
      image2 ={person2}
      />
      </section>
      <section class="fix">
       <Cat
      image ={filmToCat}
      />
      <Bottom
      name="#146: Filmtocats"
      image2 ={person4}
      />
      </section>
      <section class="fix">
       <Cat
      image ={sentryToCat}
      />
      <Bottom
      name="#145: Sentrytocat"
      image2 ={person1}
      />
      </section>
      <section class="fix">
       <Cat
      image ={puddleJumperCat}
      />
      <Bottom
      name="#144: Umbrellatocat"
      image2 ={person3}
      />
      </section>
      <section class="fix">
       <Cat
      image ={boxerToCatPicture}
      />
      <Bottom
      name="#143: Boxertocat"
      image2 ={person3}
      />
      </section>
    </ul>
  </section> */}
  <section class="footer">
    <hr></hr>
    <h1><i class="far fa-copyright"></i> 2012-2019 GitHub, Inc. All rights reserved.</h1>
  </section>
  </main>




</>
  )
}

export default App
