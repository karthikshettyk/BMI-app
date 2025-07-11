import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <div>
      <Header></Header>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 text-gray-800">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
            Privacy Policy
          </h1>

          <p className="mb-4">
            <strong>Effective Date:</strong> July 10,2025 <br />
            <strong>Website Name:</strong> KS BMI App <br/>
            <strong>Website Url:</strong> https://bmi-calculator-eb9ad.web.app/
          </p>

          <p className="mb-6">
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your information when you use our website.
          </p>

          {/* Section 1 */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">
              1. Information We Collect
            </h2>
            <p className="mb-2">
              <strong>a. Personal Information:</strong> Name, email address,
              phone number (only when voluntarily submitted).
            </p>
            <p>
              <strong>b. Non-Personal Information:</strong> Browser type, IP
              address, device info, pages visited, and time spent on the site.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Improve our website and services</li>
              <li>Respond to your inquiries or feedback</li>
              <li>Send updates or marketing emails (only with your consent)</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">
              3. Cookies and Tracking Technologies
            </h2>
            <p>
              We use cookies to analyze user behavior and provide a better
              experience. You can disable cookies in your browser settings.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">
              4. Third-Party Services
            </h2>
            <p>
              We may use services like Google Analytics or AdSense, which
              collect and analyze data under their own privacy policies.
            </p>
          </section>

          {/* ✅ AdSense Section (Without opt-out sentence) */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">
              5. Google AdSense
            </h2>
            <p>
              This website displays ads served by Google AdSense. Google may use
              cookies to personalize and measure ads based on your visits to
              this and other websites. For more details, please visit Google’s{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Advertising Privacy & Terms
              </a>
              .
            </p>
          </section>

          {/* Remaining Sections */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">
              6. Data Security
            </h2>
            <p>
              We implement reasonable security measures to protect your data.
              However, no internet transmission is fully secure.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">
              7. Your Rights
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request corrections or deletion of your data</li>
              <li>Opt out of communications at any time</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">
              8. Links to Other Websites
            </h2>
            <p>
              Our site may contain links to external websites. We are not
              responsible for their privacy practices or content.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">
              9. Children's Privacy
            </h2>
            <p>
              We do not knowingly collect data from children under 13. If you
              believe we have, please contact us.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this policy at any time. The updated version will be
              posted here with a new effective date.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">
              11. Contact Us
            </h2>
            <p>
              If you have any questions or concerns, contact us at: <br />
              📧 <strong>shetty.developer@gmail.com</strong>
            </p>
          </section>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PrivacyPolicy;
