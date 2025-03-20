import Link from "next/link";

const Spaces = () => {
  return (
    <section className="project-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Spaces Gallery
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Explore Featured Spaces
          </h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="row justify-content-center">
              <div
                className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="project-card-items">
                  <div className="project-image">
                    <img src="assets/img/spaces/jitume.webp" alt="img" />
                  </div>
                  <div className="project-content">
                    <p>Mwana Kupona</p>
                    <h3>
                      <Link href="project-details">
                        Swahilipot Hub <br />
                        Mwana Kupona Space
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="project-card-items">
                  <div className="project-image">
                    <img src="assets/img/spaces/comm.jpg" alt="img" />
                  </div>
                  <div className="project-content">
                    <p>Community Space</p>
                    <h3>
                      <Link href="project-details">
                        Swahilipot HUB <br />
                        Community Space
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="project-card-items">
                  <div className="project-image">
                    <img src="assets/img/spaces/Mekatilili.webp" alt="img" />
                  </div>
                  <div className="project-content">
                    <p>Mekatilili</p>
                    <h3>
                      <Link href="project-details">
                        Swahilipot HUB <br />
                        Mekatilili Space
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="project-card-items">
                  <div className="project-image">
                    <img src="/assets/img/spaces/ali.webp" alt="img" />
                  </div>
                  <div className="project-content">
                    <p>Ali Mazurui Space</p>
                    <h3>
                      <Link href="project-details">
                        Swahilipot HUB <br />
                        Ali Mazurui Space
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="project-card-items">
                  <div className="project-image">
                    <img src="assets/img/spaces/Amp.webp" alt="img" />
                  </div>
                  <div className="project-content">
                    <p>Amphitheatre Space</p>
                    <h3>
                      <Link href="project-details">
                        Swahilipot HUB <br />
                        Amphitheatre Space
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spaces;
