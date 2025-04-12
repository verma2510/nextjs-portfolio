"use client";

import React, { use, useState } from "react";
import axios from "axios";

export default function Contact2() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent< HTMLInputElement| HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post(
        "https://portfolio-backend-production-fd76.up.railway.app/send-email",
        formData
      );
      if (response.status === 200) {
        setStatus("Email sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Failed to send email. Please try again.");
    }
  };


	return (
    <>
      <section
        id="contact"
        className="section-contact-2 position-relative pb-60 overflow-hidden"
      >
        <div className="container position-relative z-1">
          <div className="row align-items-center">
            <div className="col-lg-7 pb-5 pb-lg-0">
              <div className="position-relative">
                <div className="position-relative z-2">
                  <h3 className="text-primary-2 mb-3">Let’s connect</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6 ">
                        <input
                          type="text"
                          className="form-control bg-3 border border-1 rounded-3"
                          id="name"
                          name="name"
                          placeholder="Your name"
                          aria-label="username"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control bg-3 border border-1 rounded-3"
                          id="phone"
                          name="phone"
                          placeholder="Phone"
                          aria-label="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control bg-3 border border-1 rounded-3"
                          id="email"
                          name="email"
                          placeholder="Emaill"
                          aria-label="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control bg-3 border border-1 rounded-3"
                          id="subject"
                          name="subject"
                          placeholder="Subject"
                          aria-label="subject"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-12">
                        <textarea
                          className="form-control bg-3 border border-1 rounded-3"
                          id="message"
                          name="message"
                          placeholder="Message"
                          aria-label="With textarea"
                          defaultValue={""}
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary-2 rounded-2"
                        >
                          Send Message
                          <i className="ri-arrow-right-up-line" />
                        </button>
                      </div>
                    </div>
                  </form>
                  {status && <p className="mt-3">{status}</p>}
                </div>
                <div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
              </div>
            </div>
            <div className="col-lg-5 d-flex flex-column ps-lg-8">
              <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
                <div className="d-inline-block">
                  <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                    <i className="ri-phone-fill text-primary-2 fs-26" />
                  </div>
                </div>
                <div className="ps-3 h-100">
                  <span className="text-400 fs-6">Phone Number</span>
                  <h6 className="mb-0">+91 9167682410</h6>
                </div>
                <a
                  href="tel:+91 9167682410"
                  className="position-absolute top-0 start-0 w-100 h-100"
                />
              </div>
              <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
                <div className="d-inline-block">
                  <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                    <i className="ri-mail-fill text-primary-2 fs-26" />
                  </div>
                </div>
                <div className="ps-3 h-100">
                  <span className="text-400 fs-6">Email</span>
                  <h6 className="mb-0">verma.aman1008@gmail.com</h6>
                </div>
                <a
                  href="mailto:verma.aman1008@gmail.com"
                  className="position-absolute top-0 start-0 w-100 h-100"
                />
              </div>
              <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
                <div className="d-inline-block">
                  <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                    <i className="ri-github-fill text-primary-2 fs-26" />
                  </div>
                </div>
                <div className="ps-3 h-100">
                  <span className="text-400 fs-6">GitHub</span>
                  <h6 className="mb-0">verma2510</h6>
                </div>
                <a
                  href="https://github.com/verma2510"
                  className="position-absolute top-0 start-0 w-100 h-100"
                />
              </div>
              <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
                <div className="d-inline-block">
                  <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                    <i className="ri-map-2-fill text-primary-2 fs-26" />
                  </div>
                </div>
                <div className="ps-3 h-100">
                  <span className="text-400 fs-6">Address</span>
                  <h6 className="mb-0">Navi Mumbai, Maharashtra, India</h6>
                </div>
                <a
                  href="https://maps.app.goo.gl/txTBiv2PP52qgqeH7"
                  className="position-absolute top-0 start-0 w-100 h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
