import React, { useState } from "react";
import { Card, Typography, Divider, Anchor, Button, Space } from "antd";
import {
  FileTextOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { key: "who-we-are", title: "Who We Are" },
    { key: "scope", title: "Scope" },
    { key: "data-collection", title: "What Data We Collect" },
    { key: "lawful-basis", title: "Why We Collect Data" },
    { key: "cookies", title: "Cookies & Tracking" },
    { key: "sharing", title: "Who We Share Data With" },
    { key: "transfers", title: "International Transfers" },
    { key: "retention", title: "Data Retention" },
    { key: "security", title: "Security" },
    { key: "rights", title: "Your Rights" },
    { key: "children", title: "Children's Privacy" },
    { key: "marketing", title: "Marketing Communications" },
    { key: "complaints", title: "Complaints" },
    { key: "changes", title: "Changes to This Policy" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
          {/* Content */}
          <div
            style={{
              flex: 1,
              minWidth: "600px",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            <Card
              style={{
                borderRadius: "12px",
                padding: "10px 40px",
              }}
            >
              <h1
                className="text-3xl font-medium text-gray-500 mb-10"
                style={{ color: "#6b7280" }}
              >
                Privacy and Cookies Statement
              </h1>

              {/* Who We Are */}
              <section id="who-we-are" style={{ marginBottom: "40px" }}>
                <Title
                  level={4}
                  style={{
                    color: "#37776f",
                    borderBottom: "1px solid #37776f",
                    paddingBottom: "8px",
                    width: "fit-content",
                  }}
                >
                  1. Who We Are
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  This Privacy Policy is issued by{" "}
                  <strong>Loolecondera.com</strong> , a digital platform
                  providing travel services, wildlife experiences in Sri Lanka.
                </Paragraph>
              </section>

              {/* Scope */}
              <section id="scope" style={{ marginBottom: "40px" }}>
                <Title
                  level={4}
                  style={{
                    color: "#37776f",
                    borderBottom: "1px solid #37776f",
                    paddingBottom: "8px",
                    width: "fit-content",
                  }}
                >
                  2. Scope of This Policy
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  This Privacy Policy covers our collection, use, and protection
                  of personal data across all Loolecondera touchpoints,
                  including:
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  • Our website and booking platform
                  <br />
                  • Mobile applications and responsive web experiences
                  <br />
                  • Customer support channels (email, chat, phone)
                  <br />
                  • Marketing communications and newsletters
                  <br />• Any other digital services we provide
                </Paragraph>
              </section>

              {/* Data Collection */}
              <section id="data-collection" style={{ marginBottom: "40px" }}>
                <Title
                  level={4}
                  style={{
                    color: "#37776f",
                    borderBottom: "1px solid #37776f",
                    paddingBottom: "8px",
                    width: "fit-content",
                  }}
                >
                  3. What Data We Collect
                </Title>

                <Title level={5} style={{ color: "#555", marginTop: "24px" }}>
                  3.1 Identity & Contact Information
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  We collect your name, email address, phone number, country of
                  residence, and passport details when required for permits or
                  special activities.
                </Paragraph>

                <Title level={5} style={{ color: "#555", marginTop: "24px" }}>
                  3.2 Payment Information
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  Payment data is processed by our PCI-compliant payment
                  providers. We do not store full credit card numbers on our
                  servers, retaining only transaction references and billing
                  information necessary for refunds and accounting.
                </Paragraph>

                <Title level={5} style={{ color: "#555", marginTop: "24px" }}>
                  3.3 Device & Usage Data
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  We collect IP addresses, device types, browser information,
                  pages viewed, session duration, approximate location, and data
                  from cookies and analytics tools.
                </Paragraph>

                <Title level={5} style={{ color: "#555", marginTop: "24px" }}>
                  3.4 Communications
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  We retain records of emails, chat messages, phone call notes,
                  and other communications for customer service and quality
                  purposes.
                </Paragraph>
              </section>

              {/* Lawful Basis */}
              <section id="lawful-basis" style={{ marginBottom: "40px" }}>
                <Title
                  level={4}
                  style={{
                    color: "#37776f",
                    borderBottom: "1px solid #37776f",
                    paddingBottom: "8px",
                    width: "fit-content",
                  }}
                >
                  4. Why We Collect Data (Lawful Bases)
                </Title>

                <Title level={5} style={{ color: "#555", marginTop: "24px" }}>
                  4.1 Contract Performance
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  We process your data to fulfill bookings, send confirmations,
                  coordinate services, process payments, handle cancellations
                  and refunds, and provide customer support.
                </Paragraph>

                <Title level={5} style={{ color: "#555", marginTop: "24px" }}>
                  4.2 Consent
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  We rely on your consent for processing optional health/dietary
                  information, marketing communications (where required), and
                  non-essential cookies.
                </Paragraph>

                <Title level={5} style={{ color: "#555", marginTop: "24px" }}>
                  4.3 Legitimate Interests
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  We process data for fraud prevention, service improvement,
                  website analytics, security monitoring, and business
                  development activities.
                </Paragraph>

                <Title level={5} style={{ color: "#555", marginTop: "24px" }}>
                  4.4 Legal Obligations
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  We retain certain data to comply with tax regulations,
                  accounting requirements, and respond to lawful requests from
                  authorities.
                </Paragraph>
              </section>

              {/* Cookies & Tracking */}
              <section id="cookies" style={{ marginBottom: "40px" }}>
                <Title
                  level={4}
                  style={{
                    color: "#37776f",
                    borderBottom: "1px solid #37776f",
                    paddingBottom: "8px",
                    width: "fit-content",
                  }}
                >
                  5. Cookies & Tracking Technologies
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  We use cookies and similar technologies to enhance your
                  experience:
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  • <strong>Essential cookies:</strong> Required for basic site
                  functionality, security, and booking processes
                  <br />• <strong>Analytics cookies:</strong> Help us understand
                  how visitors use our site to improve performance
                  <br />• <strong>Marketing cookies:</strong> Used for
                  personalized advertising and measuring campaign effectiveness
                  (with your consent)
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  <strong>Cookie Banner:</strong> "We use cookies to run our
                  site, personalize content, and analyze traffic. You can manage
                  preferences anytime." You can accept all cookies, reject
                  non-essential ones, or manage your preferences through our
                  cookie settings.
                </Paragraph>
              </section>

              {/* Data Sharing */}
              <section id="sharing" style={{ marginBottom: "40px" }}>
                <Title
                  level={4}
                  style={{
                    color: "#37776f",
                    borderBottom: "1px solid #37776f",
                    paddingBottom: "8px",
                    width: "fit-content",
                  }}
                >
                  6. Who We Share Data With
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  We share your personal data only with trusted partners who
                  help us deliver our services:
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  • <strong>Service suppliers:</strong> Tour guides,
                  transportation providers, accommodation partners, and park
                  authorities who need your information to deliver booked
                  services
                  <br />• <strong>Payment processors:</strong> PCI-compliant
                  payment providers and fraud prevention tools
                  <br />• <strong>Technology vendors:</strong> Hosting
                  providers, analytics platforms, customer support tools, and IT
                  service providers
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  All third parties are contractually required to protect your
                  data and use it only to deliver our services. We do not sell
                  personal information to unrelated third parties for their
                  marketing purposes.
                </Paragraph>
              </section>

              {/* International Transfers */}
              <section id="transfers" style={{ marginBottom: "40px" }}>
                <Title
                  level={4}
                  style={{
                    color: "#37776f",
                    borderBottom: "1px solid #37776f",
                    paddingBottom: "8px",
                    width: "fit-content",
                  }}
                >
                  7. International Data Transfers
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  Some of our service providers and technology partners may be
                  located outside Sri Lanka. When we transfer your personal data
                  internationally, we implement appropriate safeguards such as:
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  • Standard contractual clauses approved by data protection
                  authorities
                  <br />
                  • Transfers to countries with adequate data protection levels
                  <br />• Other legally recognized transfer mechanisms
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  These measures ensure your personal data receives the same
                  level of protection regardless of where it is processed.
                </Paragraph>
              </section>

              {/* Data Retention */}
              <section id="retention" style={{ marginBottom: "40px" }}>
                <Title
                  level={4}
                  style={{
                    color: "#37776f",
                    borderBottom: "1px solid #37776f",
                    paddingBottom: "8px",
                    width: "fit-content",
                  }}
                >
                  8. Data Retention
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  We retain personal data only as long as necessary for the
                  purposes outlined in this policy:
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  • <strong>Booking and financial records:</strong> Retained for
                  approximately 7 years to comply with accounting and tax
                  requirements
                  <br />• <strong>Customer support communications:</strong> Kept
                  for operational periods to ensure service quality and resolve
                  issues
                  <br />• <strong>Analytics data:</strong> Aggregated data may
                  be retained longer for business insights, but individual
                  identifiers are removed
                  <br />• <strong>Marketing data:</strong> Retained until you
                  unsubscribe or withdraw consent, then removed within a
                  reasonable timeframe
                </Paragraph>
              </section>

              {/* Security */}
              <section id="security" style={{ marginBottom: "40px" }}>
                <Title
                  level={4}
                  style={{
                    color: "#37776f",
                    borderBottom: "1px solid #37776f",
                    paddingBottom: "8px",
                    width: "fit-content",
                  }}
                >
                  9. Data Security
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  We implement comprehensive security measures to protect your
                  personal data:
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  • <strong>Encryption:</strong> Data is encrypted in transit
                  using SSL/TLS protocols and at rest using industry-standard
                  encryption
                  <br />• <strong>Access controls:</strong> Strict access
                  controls ensure only authorized personnel can access personal
                  data
                  <br />• <strong>Least privilege principle:</strong> Staff
                  access is limited to data necessary for their specific roles
                  <br />• <strong>Regular security reviews:</strong> We conduct
                  periodic security assessments and update our measures as
                  needed
                  <br />• <strong>Incident response:</strong> We have procedures
                  in place to detect, respond to, and notify about security
                  incidents
                </Paragraph>
              </section>

              {/* Your Rights */}
              <section id="rights" style={{ marginBottom: "40px" }}>
                <Title
                  level={4}
                  style={{
                    color: "#37776f",
                    borderBottom: "1px solid #37776f",
                    paddingBottom: "8px",
                    width: "fit-content",
                  }}
                >
                  10. Your Privacy Rights
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  Subject to applicable data protection laws, you have the
                  following rights regarding your personal data:
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  • <strong>Access:</strong> Request a copy of the personal data
                  we hold about you
                  <br />• <strong>Correction:</strong> Ask us to correct
                  inaccurate or incomplete data
                  <br />• <strong>Deletion:</strong> Request deletion of your
                  personal data in certain circumstances
                  <br />• <strong>Objection/Restriction:</strong> Object to or
                  restrict certain types of processing
                  <br />• <strong>Data portability:</strong> Request your data
                  in a portable format
                  <br />• <strong>Withdraw consent:</strong> Withdraw consent
                  for consent-based processing at any time
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  <strong>Making a Data Subject Request:</strong>
                  <br />
                  To exercise your rights, email us at{" "}
                  <a href="mailto:info@boswingroup.com">
                    info@boswingroup.com
                  </a>{" "}
                  with your booking ID and the email address used for your
                  booking. We will respond within the timeframes required by
                  applicable law.
                </Paragraph>
              </section>

              {/* Children */}
              <section id="children" style={{ marginBottom: "40px" }}>
                <Title
                  level={4}
                  style={{
                    color: "#37776f",
                    borderBottom: "1px solid #37776f",
                    paddingBottom: "8px",
                    width: "fit-content",
                  }}
                >
                  11. Children's Privacy
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  Our services are not directed to individuals under 18 years of
                  age, and we do not knowingly collect personal data from
                  children. If we learn that we have collected personal data
                  from a child without proper parental consent, we will delete
                  that information promptly.
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  If you believe we have collected data from a child
                  inappropriately, please contact us immediately at{" "}
                  <a href="mailto:info@boswingroup.com">info@boswingroup.com</a>
                  .
                </Paragraph>
              </section>

              {/* Marketing */}
              <section id="marketing" style={{ marginBottom: "40px" }}>
                <Title
                  level={4}
                  style={{
                    color: "#37776f",
                    borderBottom: "1px solid #37776f",
                    paddingBottom: "8px",
                    width: "fit-content",
                  }}
                >
                  12. Marketing Communications
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  We may send you marketing emails about new services, special
                  offers, and travel inspiration based on your interests and
                  booking history. You can unsubscribe from marketing
                  communications at any time by:
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  • Clicking the "unsubscribe" link in any marketing email
                  <br />• Contacting us at{" "}
                  <a href="mailto:info@boswingroup.com">info@boswingroup.com</a>
                  <br />• Managing your preferences in your account settings
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  Note that we will still send you transactional emails related
                  to your bookings (confirmations, changes, refunds, etc.) even
                  if you unsubscribe from marketing communications.
                </Paragraph>
              </section>

              {/* Complaints */}
              <section id="complaints" style={{ marginBottom: "40px" }}>
                <Title
                  level={4}
                  style={{
                    color: "#37776f",
                    borderBottom: "1px solid #37776f",
                    paddingBottom: "8px",
                    width: "fit-content",
                  }}
                >
                  13. Complaints and Concerns
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  If you have concerns about how we handle your personal data,
                  please contact us first at{" "}
                  <a href="mailto:info@boswingroup.com">info@boswingroup.com</a>
                  . We will investigate and respond to your concerns promptly.
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  You also have the right to lodge a complaint with Sri Lanka's
                  Data Protection Authority if you believe we have not addressed
                  your concerns adequately. As data protection regulations
                  continue to evolve in Sri Lanka, we comply with applicable law
                  and will update this policy as enforcement milestones change.
                </Paragraph>
              </section>

              {/* Changes */}
              <section id="changes" style={{ marginBottom: "40px" }}>
                <Title
                  level={4}
                  style={{
                    color: "#37776f",
                    borderBottom: "1px solid #37776f",
                    paddingBottom: "8px",
                    width: "fit-content",
                  }}
                >
                  14. Changes to This Privacy Policy
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices, services, or legal requirements.
                  When we make changes, we will:
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  • Post the updated policy on our website with a new "Last
                  Updated" date
                  <br />
                  • For significant changes, provide notice through our website
                  banner or email to registered users
                  <br />• Continue to protect your data in accordance with the
                  updated policy
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  We encourage you to review this Privacy Policy periodically to
                  stay informed about how we protect your personal data.
                </Paragraph>
              </section>
            </Card>
          </div>
        </div>

        {/* Last Updated Date - Bottom Right Corner */}
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: "8px 12px",
            borderRadius: "6px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            fontSize: "12px",
            color: "#666",
            fontStyle: "italic",
            zIndex: 1000,
          }}
        >
          Last Updated: September 25, 2025
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
