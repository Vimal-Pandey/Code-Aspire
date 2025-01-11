// PrivacyPolicy.jsx
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="privacy-header"
      >
        <h1>Privacy Policy</h1>
        <p>Effective Date: January 10, 2025</p>
      </motion.header>

      {/* Policy Content Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="privacy-content"
      >
        <h2>Introduction</h2>
        <p>
          This privacy policy applies to the Prism-SFA app ("Application")
          created by Code Aspire Consultancy Services ("Service Provider"). This
          Application is provided as a Free service and is intended for use "AS
          IS."
        </p>

        <h2>Information Collection and Use</h2>
        <p>
          The Application collects information such as your device's Internet
          Protocol address, pages visited, time spent on the Application, and
          your operating system. Location data is used for geolocation services,
          analytics, and third-party services to enhance functionality.
        </p>

        <h2>Third-Party Access</h2>
        <p>
          Aggregated, anonymized data may be shared with external services to
          improve the Application. Note that the Application uses third-party
          services such as Google Play Services, which have their own privacy
          policies.
        </p>

        <h2>Opt-Out Rights</h2>
        <p>
          You can stop all data collection by uninstalling the Application using
          standard uninstall processes.
        </p>

        <h2>Data Retention Policy</h2>
        <p>
          The Service Provider retains user data as long as you use the
          Application and for a reasonable period thereafter. To request data
          deletion, contact: rathore.as09@gmail.com.
        </p>

        <h2>Children</h2>
        <p>
          The Application does not knowingly collect data from children under
          13. If you believe such data has been collected, contact us
          immediately to take corrective action.
        </p>

        <h2>Security</h2>
        <p>
          The Service Provider implements physical, electronic, and procedural
          safeguards to protect your information.
        </p>

        <h2>Changes</h2>
        <p>
          This Privacy Policy may be updated periodically. Continued use of the
          Application constitutes acceptance of these changes.
        </p>

        <h2>Contact Us</h2>
        <p>For questions regarding privacy, contact: rathore.as09@gmail.com.</p>
      </motion.section>

      {/* Footer Section */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="privacy-footer"
      >
        <p>
          &copy; 2025
          <span
            style={{ marginLeft: "2px", marginRight: "2px", cursor: "default" }}
          >
            <Link href="/">Code Aspire Consultancy Services.</Link>
          </span>
           All Rights Reserved.
        </p>
      </motion.footer>
    </div>
  );
};

export default PrivacyPolicy;
