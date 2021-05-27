import React from 'react';
import './css/bootstrap.min.css';
import './css/main.css';
import Frame2471 from './images/illustrations/SVG/Frame 2471.svg';
import Frame2472 from './images/illustrations/PNG/Frame 2472.png';
import Frame2473 from './images/illustrations/PNG/Frame 2473.png';
import Frame2468 from './images/illustrations/SVG/Frame 2468.svg';
import footer from './images/Footer/Rectangle 13.png'


function App() {
  return (
    <div className="App">
      <>
  {/*Navbar*/}
  <nav className="navbar navbar-expand-lg fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Kardia Headline</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
        <span className="navbar-toggler-icon" />&gt;
      </button>
      <div className="collapse navbar-collapse" id="main_nav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#who" smooth={true}>Who We Are</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#philo">Philosophy</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#value">Value Proposition</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#ports">Our Portfolios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#parts">Our Partners</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/*Header*/}
  <header className="header">
    <div className="overlay" />
    <div className="background">
      <img src={Frame2471} alt="home bg"/>
    </div>
    <div className="container">
      <div className="description">
        <h1>Connecting <br />the decentralized world.</h1>
        <p>Here we focus on providing you the best
          <br />conditions for your dream projects to
          <br />prosper in.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="column1">
        <img src={require('./images/Grayscale logos/PNG/spl.png').default} alt="spl"/>
      </div>
      <div className="column2">
        <img src={require("./images/Grayscale logos/PNG/aioz.png").default} alt="aioz"/>
      </div>
      <div className="column3">
        <img src={require("./images/Grayscale logos/PNG/atlas.png").default} alt="atlas"/>
      </div>
      <div className="column4">
        <img src={require("./images/Grayscale logos/PNG/fatfi.png").default} alt="fatfi"/>
      </div>
      <div className="column5">
        <img src={require("./images/Grayscale logos/PNG/globe.png").default} alt="globe"/>
      </div>
      <div className="column6">
        <img src={require("./images/Grayscale logos/PNG/kickpad.png").default} alt="kickpad"/>
      </div>
      <div className="column7">
        <img src={require("./images/Grayscale logos/PNG/nfttech.png").default} alt="nfttech"/>
      </div>
      <div className="column8">
        <img src={require("./images/Grayscale logos/PNG/roseon.png").default} alt="roseon"/>
      </div>
      <div className="column9">
        <img src={require("./images/Grayscale logos/PNG/showcase.png").default} alt="showcase"/>
      </div>
    </div>
  </header>
  {/*Section 1 Who we are*/}
  <div className="who">
    <h1 id="who">Who We Are</h1>
    <img src={Frame2472} alt="who bg" />
    <div className="w-container">
      <div className="w-container1">
        <div className="who-panel who-card">
          <h2>Investment arm of KardiaChain</h2>
          <p>
            Kardia Ventures is a dedicated Crypto-centric fund and served 
            as the Investment Arm for KardiaChain, 
            the leading blockchain technology company in Vietnam. 
          </p>
        </div> 
      </div>
      <div className="w-containerX2">
        <div className="w-container2">
          <div className="who-panel who-card">
            <h2>Our Expertise</h2>
            <p>
              The Kardia Ventures team is experienced in 
              both traditional finance and emergent blockchain technology. 
              We target investments in Seed, Private and Public Rounds launched by promising projects that seek 
              to decentralize the global economy and add value to the blockchain 
              ecosystem.
            </p>
          </div>
        </div>
        <div className="w-container3">
          <div className="who-panel who-card">
            <h2>Our Mission</h2>
            <p>
              Kardia Ventures is built based on our strong belief 
              in blockchain technology to disrupt existing industries 
              and create immense business opportunities. 
              The rise of decentralized trust based networks 
              will not only transform existing industries beyond recognition, 
              it also has the power to provide billions of underserved people 
              with access to financial services.
            </p>
          </div>
        </div>
      </div>  
    </div>
  </div>
  {/*Section 2 Our investment*/}
  <div className="philo">
    <img src={Frame2473} height={2400} alt="philo bg" />
    <h2 id="philo">FROM THE GROUND UP</h2>
    <h3>Our Investment Philosophy</h3>
    <div className="ph-container1">
      <div className="philo-panel philo-card">
        <h4>Do. Dare. Deliver.</h4>
        <p>
          We are the dreamers, doers, 
          and disruptor who wish to push the world
          toward a better future.
        </p>
      </div>
    </div>
    <div className="ph-container2">
      <div className="philo-panel philo-card">
        <h4>Inspire the Bold</h4>
        <p>
          Born out of KardiaChain, we value 
          and support pioneers and doers 
          to push the edges of the ecosystem 
          and drive value and progress.
        </p>
      </div>
    </div>
    <div className="ph-container3">
      <div className="philo-panel philo-card">
        <h4>Macro Vision, Micro Execution</h4>
        <p>
          Our investment team and advisors lineup have very deep understanding 
          of the industry trend and actively support our entrepreneurs’ vision, 
          mission and implementation.
        </p>
      </div>
    </div>
    <div className="ph-container4">
      <div className="philo-panel philo-card">
        <h4>Propel New Disruptor</h4>
        <p>
          We cut through the noise to find 
          and back entrepreneurs and companies eager to be part of 
          the greatest technological revolution
          of our lifetimes since the Internet.
        </p>
      </div>
    </div>
  </div>
  {/* Section 3 Value Pros*/}
  <div className="value">
    <h2 id="value">FROM OUR EXPERIENCE FOUNDERS</h2>
    <h3>Strategic Value Proposition</h3>
    <div className="v-container1">
      <div className="value-panel value-card">
        <h4>Regional Development</h4>
        <p>
          KardiaChain is well-known in Vietnam and 
          Southeast Asia region for its technology and innovation focus. 
          A strategic partnership with KardiaChain 
          help accelerate new projects and expand user adoption.
        </p>
      </div>
    </div>
    <div className="v-container2">
      <div className="value-panel value-card">
        <h4>Vietnam Focus</h4>
        <p>
          Strategic partner with largest enterprises in Vietnam,
          which range from e-commerce, telecommunications, banking, real estate, 
          gaming, and other industries.
        </p>
      </div>
    </div>
    <div className="v-container3">
      <div className="value-panel value-card">
        <h4>Media Network</h4>
        <p>
          Strong affiliation with media and other enterprise partners 
          that can draw public awareness and ensure successful launch.
        </p>
      </div>
    </div>
    <div className="v-container4">
      <div className="value-panel value-card">
        <h4>Technical Support</h4>
        <p>
          Our in-house top-notch technical team 
          can help to integrate your project into Kardia ecosystem 
          to gain immediate access to 100,000+ 
          daily active users via Kai Membership Integration.
        </p>
      </div>
    </div>
  </div>
  {/*Section 4 Portfolios*/}
  <div className="ports">
    <h2 id="ports">Our Portfolios</h2>
    <div className="po-container">
      <div className="p-row1">
        <div className="po-column1">
          <img src={require("./images/Color logos/PNG/Frame 2437color logos.png").default} alt="spl"/>
        </div>
        <div className="po-column2">
          <img src={require("./images/Color logos/PNG/Frame 2458color logos.png").default} alt="atlas"/>
        </div>
        <div className="po-column3">
          <img src={require("./images/Color logos/PNG/Frame 2321color logos.png").default}  alt="aioz"/>
        </div>
        <div className="po-column4">
          <img src={require("./images/Color logos/PNG/fatficolor logos.png").default}  alt="fatfi"/>
        </div>
        <div className="po-column5">
          <img src={require("./images/Color logos/PNG/globecolor logos.png").default}  alt="globe"/>
        </div>
        <div className="po-column6">
          <img src={require("./images/Color logos/PNG/Frame 2440color logos.png").default} alt="kickpad"  />
        </div>
      </div>
      <div className="p-row2">    
        <div className="po-column7">
          <img src={require("./images/Color logos/PNG/nft-tech-logo-1 1color logos.png").default} alt="nfttech" />
        </div>
        <div className="po-column8">
          <img src={require("./images/Color logos/PNG/Frame 2441color logos.png").default} alt="roseon" />
        </div>
        <div className="po-column9">
          <img src={require("./images/Color logos/PNG/Frame 2442color logos.png").default} alt="showcase"  />
        </div>
      </div>
    </div> 
  </div>
  {/*Section 5 Partners*/} 
  <div className="parts">
    <h2 id="parts">Our Partners</h2>
    <div className="pa-container">
      <div className="pa-row1">
        <div className="pa-column1">
          <img src={require("./images/Color logos/PNG/Frame 2446color logos.png").default} alt="LG"  />
        </div>
      </div>
    </div>
  </div>
  {/*Email*/}
  <div className="email">
    <div className="email-container">
      <form>
        <div className="subscribe">
          <h1>Receive our latest news!</h1>
          <p>Subscribe to receive our weekly newsletter and exciting news.</p>
        </div>
        <div className="frame">
          <div className="bottom">
            <input type="text" className="form-control" placeholder="Your email" name />
            <button type="button" className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  {/*Footer*/}
  <footer className="footer">
    <div className="footer-container">
      <img src={footer} width={1510} height="100%" alt="footer bg"/>
    </div>
  </footer>
</>

    </div>
  );
}

export default App;
