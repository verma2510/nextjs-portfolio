import Link from "next/link";

export default function Experience2() {
  return (
    <>
      <section id="portfolio" className="section-experience pt-5">
        <div className="container">
          <div className="rounded-3 border border-1 position-relative overflow-hidden">
            <div className="box-linear-animation position-relative z-1">
              <div className="p-lg-8 p-md-6 p-3 position-relative z-1">
                <div className="d-flex align-items-center">
                  <svg
                    className="text-primary-2 me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={5}
                    height={6}
                    viewBox="0 0 5 6"
                    fill="none"
                  >
                    <circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
                  </svg>
                  <span className="text-linear-4 d-flex align-items-center">
                    {" "}
                    Expericence{" "}
                  </span>
                </div>
                <h3>
                  1+ <span className="text-300">years of </span>
                  passion{" "}
                  <span className="text-300">
                    for <br />
                    programming techniques
                  </span>
                </h3>
                <div className="row mt-5">
                  <div className="col-lg-4">
                    <div className="d-flex flex-column gap-2">
                      <Link
                        href="#"
                        className="technology border border-1 rounded-3 p-3"
                      >
                        <div className="d-flex align-items-center gap-2">
                          <img
                            src="https://nextgeninfratech.in/static/media/NextgenLogo.72c1f5ce548d335d66bd.png"
                            alt="nextgen"
                            className="nextgen-logo"
                          />
                          <div className="d-flex flex-column ms-2">
                            <h5 className="mb-1">
                              Nextgen Infratech Solutions LLP
                            </h5>
                            <span className="text-300">
                              March, 2025 - Present
                            </span>
                            <span className="text-300">Internship</span>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="#"
                        className="technology border border-1 rounded-3 p-3"
                      >
                        <div className="d-flex align-items-center gap-2 accordo-div">
                          <img
                            src="/assets/imgs/accordo-ai.svg"
                            alt="accordo"
                            className="accordo-logo"
                          />
                          <div className="d-flex flex-column ms-2">
                            <h5 className="mb-1">Accordo.ai</h5>
                            <span className="text-300">
                              Aug, 2024 - Jan, 2025
                            </span>
                            <span className="text-300">Internship</span>
                          </div>
                        </div>
                      </Link>
                      {/* <Link
                        href="#"
                        className="technology border border-1 rounded-3 p-3"
                      >
                        <div className="d-flex align-items-center gap-2">
                          <img
                            src="assets/imgs/home-page-2/experience/amazon.svg"
                            alt="zelio"
                          />
                          <div className="d-flex flex-column ms-2">
                            <h5 className="mb-1">Amazon</h5>
                            <span className="text-300">2018 - Present</span>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="#"
                        className="technology border border-1 rounded-3 p-3"
                      >
                        <div className="d-flex align-items-center gap-2">
                          <img
                            src="assets/imgs/home-page-2/experience/payPal.svg"
                            alt="zelio"
                          />
                          <div className="d-flex flex-column ms-2">
                            <h5 className="mb-1">PayPal</h5>
                            <span className="text-300">2010 - 2012</span>
                          </div>
                        </div>
                      </Link> */}
                    </div>
                  </div>
                  <div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
                    <h6 className="text-linear-4">Full Stack Developer</h6>
                    <ul className="mt-4">
                      <li className="text-dark mb-3">
                        Led development of scalable web applications,{" "}
                        <span className="text-secondary-2">
                          optimizing performance and enhancing user experience
                        </span>{" "}
                        for a growing user base.
                      </li>
                      <li className="text-dark mb-3">
                        Implemented media-responsive design to enhance
                        interactivity and user engagement.
                      </li>
                      <li className="text-dark mb-3">
                        <span className="text-secondary-2">
                          Collaborated with development teams on GitHub
                        </span>{" "}
                        to integrate new web features seamlessly, ensuring
                        efficient{" "}
                        <span className="text-secondary-2">
                          version control{" "}
                        </span>{" "}
                        and deployment.
                      </li>
                    </ul>
                    <div className="d-flex flex-wrap align-items-center gap-3 mt-7">
                      <Link
                        href="#"
                        className="text-300 border border-1 px-3 py-1"
                      >
                        React
                      </Link>
                      <Link
                        href="#"
                        className="text-300 border border-1 px-3 py-1"
                      >
                        NodeJS
                      </Link>
                      <Link
                        href="#"
                        className="text-300 border border-1 px-3 py-1"
                      >
                        JavaScript
                      </Link>
                      <Link
                        href="#"
                        className="text-300 border border-1 px-3 py-1"
                      >
                        Tailwind CSS
                      </Link>
                      <Link
                        href="#"
                        className="text-300 border border-1 px-3 py-1"
                      >
                        GitHub
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="position-absolute top-0 start-0 z-0"
                src="assets/imgs/home-page-2/services/bg.png"
                alt="zelio"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
