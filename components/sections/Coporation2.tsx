import Link from 'next/link'
import Marquee from "react-fast-marquee";

export default function Coporation2() {
	return (
    <>
      <section className="section-coporation" id="git-journaling">
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-8">
              <div className="rounded-3 border border-1 position-relative overflow-hidden">
                <div className="box-linear-animation">
                  <div className="p-lg-8 p-md-6 p-3">
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
                        Projects{" "}
                      </span>
                    </div>
                    <h3 className="fw-medium">
                      <span className="text-300">Code with Purpose, </span>
                      Built for Users_{" "}
                    </h3>
                    <div className="my-5 border border-1 rounded-2 p-3">
                      {/* Carausel Scroll */}
                      <Marquee className="carouselTicker carouselTicker-left position-relative z-1">
                        <ul className="carouselTicker__list m-0">
                          <li className="carouselTicker__item">
                            Discover Dish
                          </li>
                          <li className="carouselTicker__item">
                            User Authentication
                          </li>
                          <li className="carouselTicker__item">
                            Finance Dashboard
                          </li>
                          <li className="carouselTicker__item">
                            AI-based ChatBot
                          </li>
                          <li className="carouselTicker__item">
                            Admin Dashboard
                          </li>
                        </ul>
                      </Marquee>
                      <Marquee
                        className="carouselTicker carouselTicker-right position-relative z-1"
                        direction="right"
                      >
                        <ul className="carouselTicker__list m-0">
                          <li className="carouselTicker__item">
                            Balloon Machine
                          </li>
                          <li className="carouselTicker__item">
                            Job Application Tracker
                          </li>
                          <li className="carouselTicker__item">
                            CogniqEdge Website
                          </li>
                          <li className="carouselTicker__item">
                            NextJS-Portfolio
                          </li>
                        </ul>
                      </Marquee>
                    </div>
                    <div className="d-flex flex-column flex-md-row align-items-center gap-3">
                      <div>
                        <div className="circle-1 position-relative z-0">
                          <div className="circle-2 position-absolute top-50 start-50 translate-middle z-1">
                            <div className="position-absolute top-50 start-50 translate-middle z-2">
                              <img
                                className="rounded-circle"
                                style={{ width: "150px", height: "45px" }}
                                src="assets/imgs/aman.jpg"
                                alt="aman-img"
                              />
                              <svg
                                className="text-primary-2 position-absolute bottom-0 end-0"
                                xmlns="http://www.w3.org/2000/svg"
                                width={9}
                                height={9}
                                viewBox="0 0 5 6"
                                fill="none"
                              >
                                <circle cx="3" cy={3} r="2.5" fill="#A8FF53" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <Link
                          href="#"
                          className="d-flex align-items-center gap-2"
                        >
                          <i className="ri-github-fill" />
                          <span className="text-secondary-2">verma2510</span>
                        </Link>
                        <Link
                          href="#"
                          className="d-flex align-items-center gap-2"
                        >
                          <i className="ri-phone-fill" />
                          <span className="text-secondary-2">
                            +91 9167682410
                          </span>
                        </Link>
                        <Link
                          href="#"
                          className="d-flex align-items-center gap-2"
                        >
                          <i className="ri-mail-fill" />
                          <span className="text-secondary-2">
                            verma.aman1008@gmail.com
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="position-absolute d-none d-md-block decorate">
                    <div className="rotateme">
                      <div className="circle-1-1" />
                      <div className="circle-1-2 position-absolute top-50 start-50 translate-middle">
                        <svg
                          className="mb-5 position-absolute bottom-0 start-0"
                          xmlns="http://www.w3.org/2000/svg"
                          width={9}
                          height={9}
                          viewBox="0 0 9 9"
                          fill="none"
                        >
                          <circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
                        </svg>
                      </div>
                      <div className="circle-1-3 position-absolute top-50 start-50 translate-middle ">
                        <svg
                          className="mb-3 position-absolute bottom-0 end-0"
                          xmlns="http://www.w3.org/2000/svg"
                          width={9}
                          height={9}
                          viewBox="0 0 9 9"
                          fill="none"
                        >
                          <circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 pt-lg-0 pt-5">
              <div className="bg-3 rounded-3 border border-1 p-md-6 p-3 position-relative h-100 overflow-hidden">
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
                    Git Journaling{" "}
                  </span>
                </div>
                <div className="h-100 position-relative">
                  <ul className="ps-3 d-flex flex-column justify-content-around h-100 position-relative">
                    <li className="position-relative z-1">
                      <div className="d-flex align-items-center gap-2">
                        <p className="text-300 text-nowrap">12 Mar:</p>
                        <span className="text-dark">
                          User-Auth – Authentication module with login and
                          registration.
                        </span>
                      </div>
                    </li>
                    <li className="position-relative z-1">
                      <div className="d-flex align-items-center gap-2">
                        <p className="text-300 text-nowrap">01 Mar:</p>
                        <span className="text-dark">
                          Discover-Dish – Web-based recipe and dish discovery
                          tool featuring filters and user interaction.
                        </span>
                      </div>
                    </li>
                    <li className="position-relative z-1">
                      <div className="d-flex align-items-center gap-2">
                        <p className="text-300 text-nowrap">18 Feb:</p>
                        <span className="text-dark">
                          Admin-Dashboard – React-based dashboard for managing
                          user data and analytics.
                        </span>
                      </div>
                    </li>
                    <li className="position-relative z-1">
                      <div className="d-flex align-items-center gap-2">
                        <p className="text-300 text-nowrap">08 Feb:</p>
                        <span className="text-dark">
                          Balloon-Machine – Interactive and animated balloon
                          popping game built in JavaScript.
                        </span>
                      </div>
                    </li>
                    <li className="position-relative z-1">
                      <div className="d-flex align-items-center gap-2">
                        <p className="text-300 text-nowrap">30 Oct:</p>
                        <span className="text-dark">
                          Finance-Dashboard – Visual dashboard project showing
                          financial insights and charts.
                        </span>
                      </div>
                    </li>
                  </ul>
                  <div className="line-left position-absolute border-start z-0" />
                </div>
                <div className="bg-overlay position-absolute bottom-0 start-0 z-1" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
