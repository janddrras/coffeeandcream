import SectionTitle from "../../_components/ui/SectionTitle"
import serviceList from "../../_lib/docs/services.json"
import ServiceCard from "../ui/ServiceCard"

const Services = () => {
  return (
    <section>
      <div className="pt-16 md:pb-32 pb-8 px-2 md:px-8">
        <SectionTitle>Services</SectionTitle>
        <p className="font-sans font-regular text-sm tracking-wide leading-8 text-center max-w-3xl mx-auto">
          I offer a variety of services to help your online business succeed. In addition to designing and developing websites I can also
          help with branding and graphic design to give your business a professional and cohesive look. With my expertise in these areas, I
          can help you create an online presence that is unique and attracts customers. I can help you choose the right domain name, hosting
          solutions, and technologies for optimal website performance and cost-effectiveness.
        </p>
        <div className="flex flex-col md:flex-row lg:justify-between pt-12 max-w-4xl mx-auto gap-4 flex-wrap items-center justify-center">
          {serviceList.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
