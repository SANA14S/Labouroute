import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import Marquee from 'react-fast-marquee'; // Import Marquee for scrolling news
import '../styles/Home.css'; // Import CSS

function Home() {
  return (
    <div className="home">
      {/* Hero Carousel */}
      <div className="hero-carousel">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1577199001468-44c049e7603f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Labor Rights 1"
            />
            <p className="legend">Empowering Workers Across India</p>
          </div>
          <div>
            <img
              src="https://artyz.in/wp-content/uploads/2025/01/Your-paragraph-text-2025-01-25T173751.629.png"
              alt="Labor Rights 2"
            />
           
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1675109786596-0c20239ad292?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Labor Rights 3"
            />
            <p className="legend">Ensuring Safe Working Conditions</p>
          </div>
        </Carousel>
      </div>

      {/* Flashing News */}
      <div className="news-ticker">
        <h2>Latest News on Labor Rights in India</h2>
        <Marquee speed={50} gradient={false}>
          <p>New labor laws implemented to protect workers' rights.</p>
          <p>Government announces increased minimum wages for laborers.</p>
          <p>Protest held demanding better working conditions.</p>
          <p>Supreme Court rules in favor of workers' rights.</p>
        </Marquee>
      </div>

      <div className="content-section">
  {/* Left Section: Key Points */}
  <div className="key-points">
    <h2>What LABOUROUTE Offers</h2>
    <p>
      LABOUROUTE is a digital initiative to make the life of workmen, management, trade unions, and other stakeholders smooth by providing a user-friendly, transparent, and efficient platform for resolving grievances.
    </p>
    <div className="key-points-list">
      <h3>Key Grievances Addressed:</h3>
      <ul>
        <li>Dismissal or Illegal termination</li>
        <li>Delay in payments</li>
        <li>Unauthorized deductions</li>
        <li>Non-payment of maternity benefits</li>
        <li>Non-payment of minimum wage</li>
        <li>Non-payment of overtime allowance</li>
        <li>Non-payment of tunnel allowance</li>
        <li>Non-payment of height allowance</li>
        <li>Non-payment of hill station/winter allowance</li>
        <li>Non-payment of gratuity</li>
        <li>Non-payment of bonus</li>
        <li>Any legal dues and other matters related to employment and conditions of service</li>
      </ul>
    </div>
  </div>

  {/* Right Section: Live News or Images */}
  <div className="live-news">
    <h2>Live News</h2>
    <Marquee speed={50} gradient={false}>
      <p>New labor laws implemented to protect workers' rights.</p>
      <p>Government announces increased minimum wages for laborers.</p>
      <p>Protest held demanding better working conditions.</p>
      <p>Supreme Court rules in favor of workers' rights.</p>
    </Marquee>
    <div className="news-images">
      <img
        src="https://via.placeholder.com/400x200?text=News+Image+1"
        alt="News Image 1"
      />
      <img
        src="https://via.placeholder.com/400x200?text=News+Image+2"
        alt="News Image 2"
      />
    </div>
  </div>
</div>

      {/* Reviews Carousel */}
      <div className="reviews-carousel">
        <h2>What People Are Saying</h2>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={4000}
        >
          <div className="review-card">
            <p>"This platform has helped me understand my rights as a worker. Highly recommended!"</p>
            <p className="review-author">- Ramesh, Construction Worker</p>
          </div>
          <div className="review-card">
            <p>"The resources provided here are invaluable. Thank you for your support!"</p>
            <p className="review-author">- Sunita, Garment Worker</p>
          </div>
          <div className="review-card">
            <p>"I finally received my unpaid wages thanks to the guidance from this website."</p>
            <p className="review-author">- Rajesh, Factory Worker</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;