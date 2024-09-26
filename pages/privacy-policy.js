import React from "react";
import Link from "next/link";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layout/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <NavbarTwo />

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg-4.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Privacy Policy</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="terms-of-service-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="terms-of-service-content">
                <div className="terms-of-service-image">
                  <img src="/images/terms-of-service.jpg" alt="image" />
                </div>

                <h3>
                  <span></span> Privacy Policy
                </h3>
                <p>Our website address is: https://code-aspire.com</p>
                <h3>
                  <span>1.</span> **PrismSFA Privacy Statement**
                </h3>
                <blockquote className="blockquote">
                  <p>
                    At PrismSFA, we highly value the privacy of our users and
                    prioritize safeguarding their personal, company, and
                    financial information. We aim to ensure users feel secure
                    and confident while using our products and services.
                  </p>
                </blockquote>

                <h3>
                  <span>2.</span> **Information We Collect**
                </h3>
                <blockquote className="blockquote">
                  <p>
                    We collect personal information such as names, shipping and
                    billing addresses, emails, phone numbers, store images, call
                    logs, and media when users engage with us for sales,
                    support, registration, or payments. We may store sensitive
                    information like account and purchase details as part of the
                    services provided. We may also collect technical data like
                    IP addresses, browser details, and system interactions.
                    Technologies like cookies and web beacons help us manage our
                    websites, services, advertising, and email programs.
                    Additionally, we may gather user feedback, participation in
                    community discussions, and other interactions. In some
                    cases, we may access users' contact lists, but only with
                    explicit permission. Users may also upload encrypted images
                    or videos for documentation and stock proofing purposes.
                  </p>
                </blockquote>

                <h3>
                  <span>3.</span> **Protecting Your Information**
                </h3>
                <blockquote className="blockquote">
                  <p>
                    We employ industry-standard security measures to protect
                    users' personal data from loss, misuse, or unauthorized
                    access. Our safeguards comply with applicable laws,
                    including physical, electronic, and procedural protections.
                  </p>
                </blockquote>

                <h3>
                  <span>4.</span> **Uses of Information**
                </h3>
                <blockquote className="blockquote">
                  <p>
                    We do not sell or rent users' personal information for
                    promotional or marketing purposes. Information collected is
                    used to deliver requested products and services, customize
                    user experiences, and develop new features. We may summarize
                    user data in non-personalized formats to analyse usage
                    patterns, improve our products, and support business
                    functions. We may also work with service providers who
                    Collaboratein delivering services, bound by confidentiality
                    agreements.
                  </p>
                </blockquote>

                <h3>
                  <span>5.</span> **Collection of Information in Mobile
                  Applications**
                </h3>
                <blockquote className="blockquote">
                  <p>
                    When using PrismSFA mobile apps, we may collect details like
                    phone numbers, device types, and carriers. This helps us
                    manage user accounts and provide personalized services. Some
                    location-enabled services may collect location data, but
                    only with user consent. We may also collect technical data
                    and provide automatic updates to ensure optimal performance.
                  </p>
                </blockquote>

                <h3>
                  <span>6.</span> **Web-Based, Connected, and Financial
                  Services**
                </h3>
                <blockquote className="blockquote">
                  <p>
                    PrismSFA’s products are web-enabled, requiring internet
                    access for certain features. We may collect usage
                    information to improve services, display user activity, and
                    personalize the experience. Web beacons may be used to track
                    site interactions, email responses, and offer customized
                    content.
                  </p>
                </blockquote>

                <h3>
                  <span>7.</span> **Information Security**
                </h3>
                <blockquote className="blockquote">
                  <p>
                    We ensure the confidentiality and security of personal
                    information through encryption and strict access controls.
                    Our employees are trained to handle information securely,
                    and we conduct regular audits of our security practices.
                  </p>
                </blockquote>

                <h3>
                  <span>8.</span> **Third Parties**
                </h3>
                <blockquote className="blockquote">
                  <p>
                    We may partner with third parties to provide services,
                    subject to strict confidentiality agreements. In certain
                    cases, we may disclose personal information to comply with
                    legal obligations or protect our rights. Additionally, we
                    may share anonymized user data with third parties for
                    marketing and promotional purposes.
                  </p>
                </blockquote>

                <h3>
                  <span>9.</span> **Changes and Updates**
                </h3>
                <blockquote className="blockquote">
                  <p>
                    If PrismSFA undergoes a business change, such as a sale or
                    merger, user data may be transferred as part of that
                    transaction. Users will be notified of any significant
                    changes to our privacy practices 30 days before they take
                    effect. To modify contact preferences or access account
                    information, users can email info@code-aspire.com or manage
                    their settings through their PrismSFA account.
                  </p>
                </blockquote>
                <p>
                  This e-mail or any attachments may contain confidential or
                  privileged information. Unless you are the intended recipient,
                  you may not disclose, copy or use any information herein. If
                  you have received this e-mail in error, please notify the
                  sender immediately by reply and delete the e-mail from your
                  system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTO />

      <Footer />
    </>
  );
}
