import React from "react";
import Slider from "react-slick";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <Header />
      <Navbar />

      {/* HOME SECTION */}
      <section id="home" className="slider" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="container">
          <div className="row">
            <Slider {...settings}>
              {/* Slide 1 */}
              <div className="item item-first">
                <div className="caption text-center">
                  <div className="col-md-offset-1 col-md-10">
                    <h3>Let's make your life happier</h3>
                    <h1>Healthy Living</h1>
                    <a
                      href="#team"
                      className="section-btn btn btn-default smoothScroll"
                    >
                      Meet Our Doctors
                    </a>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="item item-second">
                <div className="caption text-center">
                  <div className="col-md-offset-1 col-md-10">
                    <h3>Aenean luctus lobortis tellus</h3>
                    <h1>New Lifestyle</h1>
                    <a
                      href="#about"
                      className="section-btn btn btn-default btn-gray smoothScroll"
                    >
                      More About Us
                    </a>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="item item-third">
                <div className="caption text-center">
                  <div className="col-md-offset-1 col-md-10">
                    <h3>Pellentesque nec libero nisi</h3>
                    <h1>Your Health Benefits</h1>
                    <a
                      href="#news"
                      className="section-btn btn btn-default btn-blue smoothScroll"
                    >
                      Read Stories
                    </a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Footer goes here */}
      <Footer />
    </>
  );
}

export default Home;
