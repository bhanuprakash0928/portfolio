import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const [notification, setNotification] = useState({
    show: false,
    type: "",
    title: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const showNotification = (type, title, message) => {
    setNotification({
      show: true,
      type,
      title,
      message,
    });

    setTimeout(() => {
      setNotification({
        show: false,
        type: "",
        title: "",
        message: "",
      });
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);

    try {
      // Store the name before clearing the form
      const senderName = formData.name;

      await emailjs.send(
        "service_xk5lq6f",
        "template_fpkqi3s",
        {
          name: formData.name,
          email: formData.email,
          purpose: formData.purpose,
          message: formData.message,
        },
        "XLFBeaLxz5yBzV66R"
      );

      // Clear form after successful sending
      setFormData({
        name: "",
        email: "",
        purpose: "",
        message: "",
      });

      // Show success notification
      showNotification(
        "success",
        "Message Sent Successfully",
        `Thanks for reaching out, ${senderName}! Your message has been received. I'll get back to you as soon as possible.`
      );

    } catch (error) {
      console.error("Email sending failed:", error);

      showNotification(
        "error",
        "Message Not Sent",
        "Sorry, your message could not be sent. Please try again."
      );

    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="contact-section reveal-section"
    >

      {/* ==========================
          HEADER
      ========================== */}

      <div className="contact-header">

        <span className="badge">
          Contact
        </span>

        <h2>
          Get In Touch
        </h2>

        <p>
          Have a question, project idea, or opportunity?
          Feel free to send me a message.
        </p>

      </div>


      {/* ==========================
          CONTACT CONTAINER
      ========================== */}

      <div className="contact-container">


        {/* ==========================
            LEFT SIDE
        ========================== */}

        <div className="contact-info">

          <div className="mail-image">
            <FaEnvelope />
          </div>

          <h3>
            Contact Me
          </h3>

          <p>
            ybhanuprakashreddy2004@gmail.com
          </p>


          {/* Social Links */}

          <div className="contact-socials">

            <a
              href="https://github.com/bhanuprakash0928"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="github-icon"
            >
              <FaGithub />
            </a>


            <a
              href="https://www.linkedin.com/in/bhanu-prakash-reddy-1ab924321/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="linkedin-icon"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>


        {/* ==========================
            RIGHT SIDE FORM
        ========================== */}

        <div className="contact-form-wrapper">

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >


            {/* Name + Email */}

            <div className="form-row">

              <div className="form-group">

                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="email">
                  Your Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            {/* Purpose */}

            <div className="form-group">

              <label htmlFor="purpose">
                Purpose
              </label>

              <select
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select a purpose
                </option>

                <option value="Job Opportunity">
                  Job Opportunity
                </option>

                <option value="Project Collaboration">
                  Project Collaboration
                </option>

                <option value="Freelance Work">
                  Freelance Work
                </option>

                <option value="Internship Opportunity">
                  Internship Opportunity
                </option>

                <option value="General Inquiry">
                  General Inquiry
                </option>

                <option value="Other">
                  Other
                </option>

              </select>

            </div>


            {/* Description */}

            <div className="form-group">

              <label htmlFor="message">
                Description
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />

            </div>


            {/* Send Button */}

            <button
              type="submit"
              className="send-message-btn"
              disabled={sending}
            >

              <FaPaperPlane />

              {sending
                ? "Sending..."
                : "Send Message"}

            </button>

          </form>

        </div>

      </div>


      {/* ==========================
          NOTIFICATION POPUP
      ========================== */}

      {notification.show && (

        <div
          className={`contact-notification ${notification.type}`}
        >

          {/* Notification Icon */}

          <div className="notification-icon">

            {notification.type === "success"
              ? "✓"
              : "!"}

          </div>


          {/* Notification Content */}

          <div className="notification-content">

            <strong>
              {notification.title}
            </strong>

            <p>
              {notification.message}
            </p>

          </div>


          {/* Close Button */}

          <button
            type="button"
            className="notification-close"
            onClick={() =>
              setNotification({
                show: false,
                type: "",
                title: "",
                message: "",
              })
            }
          >
            ×
          </button>

        </div>

      )}

    </section>
  );
}

export default Contact;