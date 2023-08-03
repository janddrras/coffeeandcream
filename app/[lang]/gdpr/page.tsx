import PageTitle from "../_components/ui/PageTitle"
import SectionTitle from "../_components/ui/SectionTitle"
import Text from "../_components/ui/Text"

const gdpr = () => {
  return (
    <section className="relative w-full pt-64 lg:pb-24 pb-96 px-2">
      <div className="py-8">
        <PageTitle>Privacy Policy</PageTitle>
      </div>
      <Text>
        This Privacy Policy outlines the types of personal information that coffeeandcream.net website collect from users and how I use and
        protect that information.
      </Text>
      <SectionTitle>Information I Collect</SectionTitle>
      <Text>
        In order to provide my services, I may collect the following types of personal information from my users: - Contact information,
        such as name, email address, phone number, and mailing address. - Payment information, such as credit card numbers, billing
        addresses, and other payment details. - Information about your use of my website, including your IP address, browser type, and
        device type. - Other information you choose to provide to me, such as feedback, reviews, or comments.
      </Text>
      <SectionTitle>How I Use Your Information</SectionTitle>
      <Text>
        I use your personal information to provide and improve my services, to communicate with you about your account and my services, and
        to personalize your experience on my website. Specifically, I may use your information for the following purposes:
      </Text>
      <ul className="font-sans pt-4 leading-8 list-disc pl-12">
        <li>To process payments and complete transactions.</li>
        <li>To provide support and respond to inquiries.</li>
        <li>To personalize your experience on my website.</li>
        <li>To send promotional messages and marketing communications.</li>
        <li>To improve my website and services.</li>
      </ul>
      <SectionTitle>How I Protect Your Information</SectionTitle>
      <Text>
        I take the security of your personal information seriously and take reasonable measures to protect it from unauthorized access,
        disclosure, or misuse. I use industry-standard security technologies and procedures to help protect your information.
      </Text>
      <SectionTitle>How I Share Your Information</SectionTitle>
      <Text>
        I do not sell or rent your personal information to third parties. However, I may share your information with third-party service
        providers who help me provide my services, such as payment processors, hosting providers, and email service providers. I only share
        the minimum amount of information necessary to provide these services, and I require that these service providers maintain the
        confidentiality of your information.
      </Text>
      <SectionTitle>How I Use Cookies</SectionTitle>
      <Text>
        I use cookies and similar technologies to provide and improve my services, to analyze the use of my website, and to remember your
        preferences. You can disable cookies in your browser settings, but some parts of my website may not function properly if you do so.
      </Text>
      <SectionTitle>Your Choices</SectionTitle>
      <Text>
        You have the right to access, correct, or delete your personal information at any time. You can do this by contacting me directly.
      </Text>
      <SectionTitle>Changes to This Policy</SectionTitle>
      <Text>
        I may update this Privacy Policy from time to time to reflect changes in my practices or for other operational, legal, or regulatory
        reasons. I will notify you of any material changes by posting the updated policy on my website or by sending you an email.
      </Text>
      <SectionTitle>Contact Me</SectionTitle>
      <Text>If you have any questions or concerns about this Privacy Policy, please contact me at:</Text>
      <a href="mailto:office@coffeeandcream.net" className="font-sans underline">
        office@coffeeandcream.net
      </a>
    </section>
  )
}

export default gdpr
