import React, { useState } from "react";
import { Card, Typography, Divider, Anchor, Button, Space } from "antd";
import {
  FileTextOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { key: "introduction", title: "Introduction and Acceptance" },
    { key: "definitions", title: "Definitions" },
    { key: "services", title: "Services Provided" },
    { key: "responsibilities", title: "User Responsibilities" },
    { key: "bookings", title: "Bookings and Payment" },
    { key: "prices", title: "Prices and Inclusions" },
    { key: "luggage", title: "Luggage and Property" },
    { key: "health", title: "Health and Disabilities" },
    { key: "insurance", title: "Insurance" },
    { key: "liability", title: "Liability" },
    { key: "intellectual", title: "Intellectual Property" },
    { key: "privacy", title: "Privacy" },
    { key: "third-party", title: "Third-Party Links" },
    { key: "changes", title: "Changes to Terms" },
    { key: "governing", title: "Governing Law" },
    { key: "contact", title: "Contact Information" },
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
              <Title
                level={2}
                style={{
                  color: "#6b7280",
                  paddingBottom: "8px",
                  width: "fit-content",
                }}
                className="text-2xl font-normal text-gray-400 mb-10 "
              >
                Terms and Conditions
              </Title>

              {/* Introduction */}
              <section id="introduction" style={{ marginBottom: "40px" }}>
                <Title
                  level={4}
                  style={{
                    color: "#37776f",
                    borderBottom: "1px solid #37776f",
                    paddingBottom: "8px",
                    width: "fit-content",
                  }}
                >
                  1. Introduction and Acceptance of Terms
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  These Terms and Conditions ("Agreement") constitute a legally
                  binding contract between you ("the Customer") and
                  Loolecondera.com ("Loolecondera"), governing your access to
                  and use of our digital platform, including the booking of
                  travel services, wildlife experiences, leisure activities, and
                  the purchase of products offered in Sri Lanka.
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  By accessing our website, using our platform, or completing
                  any booking or purchase transaction, you confirm that you have
                  read, understood, and agreed to be bound by all provisions of
                  this Agreement. This Agreement supersedes any prior
                  agreements, representations, or understandings between you and
                  Loolecondera. If you do not agree with any part of these Terms
                  and Conditions, you must immediately discontinue use of our
                  platform and services.
                </Paragraph>
              </section>

              {/* Services */}
              <section id="services" style={{ marginBottom: "40px" }}>
                <Title
                  level={4}
                  style={{
                    color: "#37776f",
                    borderBottom: "1px solid #37776f",
                    paddingBottom: "8px",
                    width: "fit-content",
                  }}
                >
                  2. Services Provided
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  Loolecondera operates as a digital platform that directly
                  facilitates the sale of premium tea-related products.
                  Customers may browse and purchase a curated selection of fine
                  Ceylon teas, tea accessories, and other tea-inspired
                  merchandise offered through the platform. All product
                  descriptions, specifications, and inclusions are provided in
                  good faith and based on information available at the time of
                  publication. Loolecondera reserves the right to amend, update,
                  or substitute products as necessary due to circumstances
                  including, but not limited to, changes in tea harvests,
                  production limitations, supplier availability, or product
                  unavailability. Where such modifications occur, Loolecondera
                  will make reasonable efforts to notify customers promptly.
                  Substituted products will be of equal or greater value, and no
                  additional charges will be applied to the customer as a result
                  of these changes.
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  All service descriptions, itineraries, and inclusions are
                  provided in good faith based on information supplied by our
                  partners. While we endeavor to ensure accuracy, we reserve the
                  right to modify itineraries, substitute equivalent services,
                  or adjust arrangements due to circumstances including but not
                  limited to weather conditions, natural disasters, government
                  restrictions, facility closures, or supplier limitations. Such
                  modifications will be communicated promptly and will not
                  result in additional charges to the customer.
                </Paragraph>
              </section>

              {/* User Responsibilities */}
              <section id="responsibilities" style={{ marginBottom: "40px" }}>
                <Title
                  level={4}
                  style={{
                    color: "#37776f",
                    borderBottom: "1px solid #37776f",
                    paddingBottom: "8px",
                    width: "fit-content",
                  }}
                >
                  3. Customer Responsibilities and Eligibility
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  To make purchases on the Loolecondera platform, customers must
                  be at least 18 years of age and possess the legal capacity to
                  enter into binding contracts. By placing an order, the
                  customer warrants that they meet these age and legal capacity
                  requirements.
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  Customers are required to provide accurate, complete, and
                  current information during the ordering and checkout process.
                  This includes, but is not limited to, personal details,
                  contact information, shipping address, and payment details.
                  Failure to provide relevant and accurate information may
                  result in order processing complications, shipping delays,
                  additional costs, or order cancellation.
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  All purchases are non-transferable. Customers are responsible
                  for ensuring the accuracy of their order details before
                  finalising the purchase."
                </Paragraph>
              </section>

              {/* Bookings and Payment */}
              <section id="bookings" style={{ marginBottom: "40px" }}>
                <Title
                  level={4}
                  style={{
                    color: "#37776f",
                    borderBottom: "1px solid #37776f",
                    paddingBottom: "8px",
                    width: "fit-content",
                  }}
                >
                  4. Booking Process and Payment Terms
                </Title>

                <Title level={5} style={{ color: "#555", marginTop: "24px" }}>
                  4.1 Payment Security and Processing
                </Title>

                <Title level={5} style={{ color: "#555", marginTop: "24px" }}>
                  a. Accepted Payment Methods:
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  We accept various payment methods for your convenience. These
                  include major credit cards (Visa, Mastercard, American
                  Express), debit cards, and select digital wallets (e.g.,
                  SriPay). All available payment options will be displayed on
                  the checkout page.
                </Paragraph>

                <Title level={5} style={{ color: "#555", marginTop: "24px" }}>
                  b. Secure Transactions:
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  We are committed to ensuring your payment information is
                  secure. We use a trusted third-party payment processing
                  partner that is fully compliant with the highest industry
                  standards, including the Payment Card Industry Data Security
                  Standard (PCI DSS). Your sensitive payment data is encrypted
                  and handled directly by our secure payment partner, not stored
                  on our servers.
                </Paragraph>

                <Title level={5} style={{ color: "#555", marginTop: "24px" }}>
                  c. Multi-Platform Support:
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  Our secure online checkout is designed to work seamlessly
                  whether you are booking from a desktop computer, tablet, or
                  mobile device.
                </Paragraph>

                <Title level={5} style={{ color: "#555", marginTop: "24px" }}>
                  d. Fraud Prevention:
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  To ensure a safe checkout experience, our payment system
                  utilizes advanced fraud prevention and risk management tools.
                  These measures help protect you from unauthorized or
                  fraudulent transactions.
                </Paragraph>
              </section>

              {/* Prices */}
              <section id="prices" style={{ marginBottom: "40px" }}>
                <Title
                  level={4}
                  style={{
                    color: "#37776f",
                    borderBottom: "1px solid #37776f",
                    paddingBottom: "8px",
                    width: "fit-content",
                  }}
                >
                  5. Pricing, Inclusions, and Exclusions
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  All prices displayed on the Loolecondera platform are subject
                  to change without prior notice. However, the price for your
                  order is finalized and confirmed at the time of checkout.
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  Pricing is quoted in United States Dollars (USD) and Sri
                  Lankan Rupees (LKR), or as otherwise specified on the product
                  page. The price displayed includes the product itself and any
                  applicable local taxes. Please note that the listed price does
                  not include shipping fees, handling charges, customs duties,
                  or import taxes that may be applied by the destination
                  country's regulations. Any and all such additional charges are
                  the sole responsibility of the customer."
                </Paragraph>
              </section>

              {/* Transactions & Cancellations Policy */}
              <section id="transactions" style={{ marginBottom: "40px" }}>
                <Title
                  level={4}
                  style={{
                    color: "#37776f",
                    borderBottom: "1px solid #37776f",
                    paddingBottom: "8px",
                    width: "fit-content",
                  }}
                >
                  6. Transactions & Cancellations Policy
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  <Title level={5} style={{ color: "#555", marginTop: "24px" }}>
                    Booking confirmation.
                  </Title>{" "}
                  All Orders on are confirmed only after full payment via
                  accepted online methods (Alipay+, credit/debit cards) or
                  approved on-site payments.
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  <Title level={5} style={{ color: "#555", marginTop: "24px" }}>
                    Cancellations & refunds.
                  </Title>
                  <br />

                  <ul>
                    <Title
                      level={5}
                      style={{ color: "#555", marginTop: "24px" }}
                    >
                      Order Cancellation (Before Shipping):
                    </Title>{" "}
                    Customers may request to cancel an order before it has been
                    dispatched. If the cancellation is approved, a full refund
                    will be issued. Please note that once an order has been
                    packed and handed over to the shipping carrier, it cannot be
                    cancelled. Returns (After Delivery): Due to the nature of
                    our products (perishable goods and food items), we generally
                    do not accept returns or offer refunds unless the product
                    received is damaged, defective, or incorrect.
                    <br />
                    <ul>
                      <Title
                        level={5}
                        style={{ color: "#555", marginTop: "24px" }}
                      >
                        Damaged, Defective, or Incorrect Products:
                      </Title>{" "}
                      If you receive a product that is damaged, defective, or
                      not what you ordered, please contact us within [e.g., 3-5]
                      business days of delivery. You will be required to provide
                      photographic evidence of the issue. Upon verification,
                      Loolecondera will offer a replacement or a full refund,
                      including original shipping costs. Change of Mind: We are
                      unable to offer refunds or exchanges for a change of mind
                      due to health and safety regulations concerning food
                      products.
                    </ul>
                    <ul>
                      Non-Returnable Items: Certain items may be marked as
                      non-returnable (e.g., final sale items, specific
                      perishable goods) at the time of purchase.
                    </ul>
                  </ul>
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  <Title level={5} style={{ color: "#555", marginTop: "24px" }}>
                    Refund method & timing.
                  </Title>
                  the original payment method used for the purchase. The refund
                  typically appears in your account within 5–10 business days,
                  though processing times may vary depending on your bank or
                  payment provider.
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  <Title level={5} style={{ color: "#555", marginTop: "24px" }}>
                    Modifications.
                  </Title>{" "}
                  Once an order is placed, modifications (such as changes to
                  products or shipping addresses) are subject to feasibility.
                  Please contact us immediately if you require a modification.
                  We cannot guarantee changes once the order has entered the
                  processing or shipping phase.
                </Paragraph>

                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  <Title level={5} style={{ color: "#555", marginTop: "24px" }}>
                    How to cancel.
                  </Title>{" "}
                  Please contact our customer support team via email at
                  support@Loolecondera.com with your order ID and a detailed
                  explanation of your request or issue. Eligibility for
                  cancellations or returns will be determined by the timestamp
                  of your inquiry and the status of your order in our system.
                  <a href="mailto:support@Loolecondera.com">
                    support@Loolecondera.com
                  </a>{" "}
                  with your booking ID. Eligibility is determined by the
                  timestamp in our system.
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  <Title level={5} style={{ color: "#555", marginTop: "24px" }}>
                    Policy updates.
                  </Title>{" "}
                  Loolecondera reserves the right to update this policy at any
                  time, with changes effective immediately upon posting on
                  Loolecondera.com. Customers are encouraged to review this
                  policy periodically.
                </Paragraph>
              </section>

              {/* Intellectual Property */}
              <section id="intellectual" style={{ marginBottom: "40px" }}>
                <Title
                  level={4}
                  style={{
                    color: "#37776f",
                    borderBottom: "1px solid #37776f",
                    paddingBottom: "8px",
                    width: "fit-content",
                  }}
                >
                  7. Intellectual Property Rights
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  All content on the Loolecondera platform, including but not
                  limited to text, graphics, logos, photographs, videos,
                  software, and design elements, is protected by intellectual
                  property laws and remains the exclusive property of
                  Loolecondera or our licensed content providers. The
                  "Loolecondera" name and logo are registered trademarks.
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  Users are granted limited, non-exclusive, non-transferable
                  rights to access and use our content solely for personal,
                  non-commercial purposes related to potential or confirmed
                  bookings. Any unauthorized reproduction, distribution,
                  modification, or commercial use of our content is strictly
                  prohibited and may result in legal action.
                </Paragraph>
              </section>

              {/* Privacy */}
              <section id="privacy" style={{ marginBottom: "40px" }}>
                <Title
                  level={4}
                  style={{
                    color: "#37776f",
                    borderBottom: "1px solid #37776f",
                    paddingBottom: "8px",
                    width: "fit-content",
                  }}
                >
                  8. Privacy and Data Protection
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  We collect, process, and store personal information in
                  accordance with our Privacy Policy and applicable data
                  protection regulations. By using our services, you consent to
                  our data practices as outlined in our comprehensive Privacy
                  Policy, available on our website.
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  Personal information may be shared with suppliers as necessary
                  to fulfill booking arrangements and with authorized third
                  parties for payment processing and customer support. We
                  implement appropriate technical and organizational measures to
                  protect your data and do not sell personal information to
                  unrelated third parties for marketing purposes.
                </Paragraph>
              </section>

              {/* Changes to Terms */}
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
                  9. Modifications to Terms and Conditions
                </Title>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  Loolecondera reserves the right to modify these Terms and
                  Conditions at any time without prior notice. Updates will be
                  posted on our website with the revision date clearly
                  indicated. Continued use of our services following publication
                  of revised terms constitutes acceptance of the modifications.
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "justify",
                  }}
                >
                  Customers are encouraged to review these terms periodically.
                  For significant changes affecting existing bookings, we will
                  attempt to provide reasonable advance notice via email to the
                  address on file.
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
          Last Updated: September 9, 2025
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
