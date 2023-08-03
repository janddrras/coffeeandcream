import PageTitle from "../_components/ui/PageTitle"
import SectionTitle from "../_components/ui/SectionTitle"
import Text from "../_components/ui/Text"

const terms = () => {
  return (
    <section className="relative w-full pt-64 lg:pb-24 pb-96 px-2">
      <div className="py-8">
        <PageTitle>Terms of Hire</PageTitle>
      </div>
      <Text>
        These terms of hire apply to all work undertaken by Coffeeandcream. <br /> By giving authorisation to proceed with a job, you are
        consenting to these terms.
      </Text>

      <SectionTitle>1. Payment Terms</SectionTitle>
      <Text>
        1.1. A 50% deposit is payable in advance of work commencing. The balance on completion is to be paid 14 days of the invoice date.
        For larger projects, I may request a larger deposit or a staged payment schedule. Should this be the case though I will agree on
        this with you prior to commencement of my work.
      </Text>

      <Text>
        1.2. Completion is deemed to be when the site is feature complete and not necessarily when it is content complete. It is your
        responsibility to ensure that all content, logins and other material requested in order to complete the job is delivered to me on
        time.
      </Text>
      <Text>
        1.3. If the 14 days payment terms are missed, then I may withhold work or suspend services as I see fit. Intellectual property
        rights will also not be transferred, and any code, graphics, or other materials already supplied will be withdrawn.
      </Text>
      <Text>
        1.4. In the event that I am unable to deliver a completed site due to unreasonable delays in obtaining what I need from you, then I
        reserve the right to invoice in full prior to site completion or request an interim payment.
      </Text>
      <SectionTitle>2. Project Scope and Design Sign-Off</SectionTitle>
      <Text>
        2.1. It is your responsibility to ensure that your brief contains full details of the project requirements prior to obtaining a
        quote from me. Failure to do so could lead to unexpected additional time and cost requirements.
      </Text>
      <Text>
        2.2. It is strongly recommended that you give me the sight of your designs or mockups prior to commencing the project. This will
        help avoid unpleasant situations where I will have to reject your mockups due to the fact that I have already developed the layout.
      </Text>
      <Text>
        2.3. It is your responsibility to provide your designs and assets prior to instructing me to start the development. After the
        sign-off, you can no longer make amendments other than minor changes to the design.
      </Text>
      <SectionTitle>3. Amendments to agreed project scope</SectionTitle>
      <Text>
        3.1. Any changes to the project scope after the work has been quoted for will be subject to a revised quote for the additional work.
        It will also require additional time to be scheduled, which could delay delivery of the project.
      </Text>
      <Text>3.2. Additional work may be invoiced separately to the original project scope. </Text>
      <Text>3.3. Requests for additional work will not delay how or when I invoice for the original project scope. </Text>
      <SectionTitle>4. Sign-off and amends to websites before publication</SectionTitle>
      <Text>4.1. By leaving the agreed 50% deposit, you will be confirming that I can start the build. </Text>
      <Text>
        4.2. I will only accept three rounds of amendments, related to three drafts that I will provide, within the agreed project costs
        prior to publication. Any additional time or work beyond this would be subject to clause 3 of these terms. It is therefore
        recommended that you gather all amendment requests into a single concise email.
      </Text>
      <SectionTitle>5. Intellectual property rights</SectionTitle>
      <Text>
        5.1. All work delivered as part of this contract will become the property of the hirer upon receipt of full payment of all invoices.
        Until that time ownership of all code, graphics and other materials produced by me remain with myself.
      </Text>
      <Text>5.2. Property rights do not include the source code of any third-party softwares and plugins used as part of the work. </Text>
      <SectionTitle>6. Termination of contract</SectionTitle>
      <Text>
        6.1. Either party may cancel the contract at any time. I would only ever invoke this clause though in the rare circumstance that an
        unresolvable dispute arises.
      </Text>
      <Text>
        6.2. Upon termination, by either party, I will raise an invoice for all work that has been produced up to the final day of the
        contract. All code, graphics and other materials produced up to that time will then be transferred to you in line with the
        Intellectual Property Right clause above.
      </Text>
      <SectionTitle>7. Confidentiality of information</SectionTitle>
      <Text>
        Both parties agree not to disclose confidential information provided in advance of, or during the course of, the contract.
      </Text>
      <SectionTitle>8. Quality assurance</SectionTitle>
      <Text>
        8.1. Should defects in any of my work be discovered after the contract ends, I agree to rectify it free of charge within 30 days.
        This guarantee expires 30 days after the completion of the contract and excludes any of my work which has been subsequently modified
        by another party, and any third-party components used as part of the original contract.
      </Text>
      <SectionTitle>9. Temporary website hosting</SectionTitle>
      <Text>
        9.1. When developing a new website, I may choose to provide temporary hosting for the site for the duration of the build. This can
        be withdrawn at any time without notice. If you prefer to host the website on your own servers, you will need to provide necessary
        logins details and credentials before sign-off.
      </Text>
      <Text>
        9.2. If you wish to extend this temporary hosting after the build is completed, for example, if you are still sourcing content, then
        you can request this. However, I may choose to charge a fee for this.
      </Text>
      <SectionTitle>10. Data collection</SectionTitle>
      <Text>
        10.1. If the project requirements include collection and storage of personal data, then it is the responsibility of the website
        owner to be aware of what data is collected, how it is stored, how to remove it and their legal obligations for data protection. I
        will offer advice in terms of good practice and implementation, but you accept that it is not my responsibility to manage or process
        any data collected on the website.
      </Text>
      <Text>
        10.2. For marketing purposes, I reserve the right to be able to promote my personal involvement in the project during and after its
        completion. This may occur via social media channels.
      </Text>
      <Text>
        10.3. I do recognise that this may not always be appropriate, so if you have any objections to this, please consult with me prior to
        the end of the contract.
      </Text>
      <hr className="py-4" />
      <Text>
        The invalidity or unenforceability of any provisions of this Agreement shall not affect the validity or enforceability of any other
        provision of this Agreement, which shall remain in full force and Effect.
      </Text>
    </section>
  )
}

export default terms
