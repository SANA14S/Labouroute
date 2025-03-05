import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Marquee from "react-fast-marquee";
import axios from "axios";
import { FaNewspaper, FaCheckCircle, FaUser, FaArrowRight } from "react-icons/fa";
import "../styles/Home.css";
import firstImage from "../assets/first.jpeg";
import secondImage from "../assets/second.png";
import thirdImage from "../assets/third.png";


function Home() {
  const images = [
    "/carousel1.jpg",
    "/carousel2.jpg",
    "/carousel3.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  // State for live news
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Fetch live news
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = "bcb589c3edf84bf79497d42efdd8fde4"; // Replace with your actual key

        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        const formattedDate = oneMonthAgo.toISOString().split("T")[0];

        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=labor OR labours OR workers OR employment OR wages OR unorganized sector&language=en&sortBy=publishedAt&domains=thehindu.com,indiatimes.com,indianexpress.com,economictimes.indiatimes.com,business-standard.com,livemint.com&apiKey=${apiKey}`
        );
  
        setNews(response.data.articles.slice(0, 4)); 
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
  
    fetchNews();
  }, []);
  
  return (
    <div className="home">
      {/* 🔹 Hero Section */}
      <div className="hero-carousel">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={3000}>
          <div className="carousel-slide">
          <img src={firstImage} alt="Labor Rights 1" />
            
           
          </div>
          <div className="carousel-slide">
          <img src={secondImage} alt="Labor Rights 2" />
              alt="Labor Rights 2"
            
           
          </div>
          <div className="carousel-slide">
            
              <img src={thirdImage} alt="Labor Rights 3" />
              alt="Labor Rights 3"
          
           
          </div>
        </Carousel>
      </div>

     

      {/* 🔹 Key Features & Grievances Section */}
      <div className="key-features">
        <h2>What <span className="highlight">LABOUROUTE</span> Offers</h2>
        <p className="subtitle">
          LABOUROUTE is a digital initiative to make life easier for workers, unions, and employers by providing a transparent and efficient grievance resolution platform.
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <FaCheckCircle className="icon" />
            <h3>Dismissal or Illegal Termination</h3>
            <p>Resolve issues related to wrongful termination.</p>
          </div>
          <div className="feature-card">
            <FaCheckCircle className="icon" />
            <h3>Delay in Payments</h3>
            <p>Ensure timely payment of wages and dues.</p>
          </div>
          <div className="feature-card">
            <FaCheckCircle className="icon" />
            <h3>Unauthorized Deductions</h3>
            <p>Address unauthorized salary deductions.</p>
          </div>
          <div className="feature-card">
            <FaCheckCircle className="icon" />
            <h3>Unauthorized Deductions</h3>
            <p>Address unauthorized salary deductions.</p>
          </div>
          <div className="feature-card">
            <FaCheckCircle className="icon" />
            <h3>Unauthorized Deductions</h3>
            <p>Address unauthorized salary deductions.</p>
          </div>
          <div className="feature-card">
            <FaCheckCircle className="icon" />
            <h3>Unauthorized Deductions</h3>
            <p>Address unauthorized salary deductions.</p>
          </div>
          <div className="feature-card">
            <FaCheckCircle className="icon" />
            <h3>Unauthorized Deductions</h3>
            <p>Address unauthorized salary deductions.</p>
          </div>
          <div className="feature-card">
            <FaCheckCircle className="icon" />
            <h3>Unauthorized Deductions</h3>
            <p>Address unauthorized salary deductions.</p>
          </div>
          <div className="feature-card">
            <FaCheckCircle className="icon" />
            <h3>Non-Payment of Benefits</h3>
            <p>Resolve issues related to maternity benefits, overtime, etc.</p>
          </div>
        </div>
      </div>

{/* 🔹 Live News Section */}
<div className="live-news">
        <h2>Live Updates</h2>
        {loading ? (
          <div className="loading">Loading news...</div>
        ) : error ? (
          <div className="error">Error: {error}</div>
        ) : (
          <div className="news-grid">
            {news.map((article, index) => (
              <div className="news-card" key={index}>
                <img
                  src={article.urlToImage || "https://via.placeholder.com/400x200?text=No+Image"}
                  alt={article.title}
                />
                <div className="news-card-content">
                  <h3>{article.title}</h3>
                  <p>{article.description || "No description available."}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more"
                  >
                    Read Full Article <FaArrowRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* 🔹 Testimonials Section */}
      <div className="testimonials">
        <h2>What People Are Saying</h2>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={4000}>
          <div className="testimonial-card">
            <FaUser className="avatar" />
            <p>"This platform helped me understand my rights as a worker. Highly recommended!"</p>
            <p className="author">- Chavi, Construction Worker</p>
          </div>
          <div className="testimonial-card">
            <FaUser className="avatar" />
            <p>"The resources here are invaluable. Thank you for your support!"</p>
            <p className="author">- Falaq, Garment Worker</p>
          </div>
          <div className="testimonial-card">
            <FaUser className="avatar" />
            <p>"I finally received my unpaid wages thanks to guidance from this website."</p>
            <p className="author">- Kartik, Factory Worker</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;