import React from 'react';
import '../styles/Support.css';

function Support() {
  return (
    <section className="support">
      <h2>Educational Videos</h2>
      <div className="video-grid">
        <div className="video-card">
          <img
            alt="Thumbnail of educational video 1"
            src="https://storage.googleapis.com/a1aa/image/AZsseqczxHNvKcB63mV0-6xXLCjsUOpER9SSGv5KN2M.jpg"
          />
          <h3>Video Title 1</h3>
          <p>Brief description of the video content.</p>
        </div>
        <div className="video-card">
          <img
            alt="Thumbnail of educational video 2"
            src="https://storage.googleapis.com/a1aa/image/Uu168QEmnhWYHhHLMNwXue50PgB1P75pcWj6KmzMBjs.jpg"
          />
          <h3>Video Title 2</h3>
          <p>Brief description of the video content.</p>
        </div>
        <div className="video-card">
          <img
            alt="Thumbnail of educational video 3"
            src="https://storage.googleapis.com/a1aa/image/OdyWEuhuNrDP3VtYgQcJLkYcUDNwbUF7k3SV28OfutU.jpg"
          />
          <h3>Video Title 3</h3>
          <p>Brief description of the video content.</p>
        </div>
      </div>
    </section>
  );
}

export default Support;