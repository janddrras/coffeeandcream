import SectionTitle from "@/app/_components/Layout/ui/SectionTitle"
import Container from "@/app/_components/Layout/ui/Container"
import serviceList from "@/app/_lib/docs/services.json"
import ServiceCard from "../Layout/ui/ServiceCard"

const Services = () => {
  return (
    <section>
      <Container>
        <div className="pt-16 pb-32">
          <SectionTitle>Services</SectionTitle>
          <p className="font-sans font-regular text-sm tracking-wide leading-8 text-center">
            I offer a variety of services to help your online business succeed. In addition to designing and developing websites I can also
            help with branding and graphic design to give your business a professional and cohesive look. With my expertise in these areas,
            I can help you create an online presence that is unique and attracts customers. I can help you choose the right domain name,
            hosting solutions, and technologies for optimal website performance and cost-effectiveness.
          </p>
          <div className="flex justify-between pt-12">
            {serviceList.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Services
