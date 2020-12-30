import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" content="Contact Me" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>
            get in touch
            <form action="https://formspree.io/f/xwkwwyqp" method="POST">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="name"
                  className="form-control"
                  name="name"
                />
                <input
                  type="email"
                  placeholder="email"
                  className="form-control"
                  name="email"
                />
                <textarea
                  name="message"
                  placeholder="message"
                  className="form-control"
                  rows="5"
                ></textarea>
                <button type="submit" className="submit-btn btn">
                  submit here
                </button>
              </div>
            </form>
          </h3>
        </article>
      </section>
    </Layout>
  )
}

export default contact
