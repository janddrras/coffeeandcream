"use client"

import Container from "../../_components/ui/Container"
import Link from "next/link"
import { ImFacebook2, ImGithub, ImLinkedin } from "react-icons/im"
import { useDictionary } from "../providers/LangProvider"
import { usePathname } from "next/navigation"

const Footer = () => {
  const dict = useDictionary()
  const locale = usePathname().split("/")[1]

  return (
    <footer>
      <div className="bg-cream-30 text-coffee-80 font-sans py-20">
        <Container border={false}>
          <div className="flex flex-col md:flex-row justify-between items-center ">
            <div className="text-center md:text-left">
              <p className="text-sm mb-6">{dict.layout.footer.mail}</p>
              <a
                href="mailto:office@coffeeandcream.net"
                className="text-lg font-bold underline hover:text-cream-10  transition-colors duration-300 ease-in-out"
              >
                office@coffeeandcream.net
              </a>
            </div>
            <div className="mt-8 md:mt-0">
              <p className="text-sm mb-6 text-center md:text-right">{dict.layout.footer.social}</p>
              <div className="flex items-center md:items-end">
                <a
                  href="https://www.facebook.com/coffeeandcream.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-cream-10 mx-3 inline-block transition-colors duration-300 ease-in-out"
                  aria-label="Link to my LinkedIn page"
                >
                  <ImLinkedin />
                </a>
                <a
                  href="https://www.facebook.com/coffeeandcream.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-cream-10 mx-3 inline-block transition-colors duration-300 ease-in-out"
                  aria-label="Link to my Facebook page"
                >
                  <ImFacebook2 />
                </a>
                <a
                  href="https://www.facebook.com/coffeeandcream.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-cream-10 mx-3 md:mr-0 inline-block transition-colors duration-300 ease-in-out"
                  aria-label="Link to my Github page"
                >
                  <ImGithub />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-coffee-80 text-cream-30 text-sm font-sans py-8">
        <Container border={false}>
          <div className="flex flex-col gap-4 justify-between items-center lg:flex-row">
            <p className="inline-block text-cream-30">Copyright © Coffeeandcream srl - {new Date().getFullYear()}</p>
            <div className="flex flex-col md:flex-row items-center leading-10">
              <Link href={`/${locale}/gdpr`} className="hover:text-cream-20 hover:underline transition-all duration-300 ease-in-out">
                {dict.layout.footer.links.gdpr}
              </Link>
              <p className="mx-2 hidden sm:block"> | </p>
              <Link href={`/${locale}/terms`} className="hover:text-cream-20 hover:underline transition-all duration-300 ease-in-out">
                {dict.layout.footer.links.terms}
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
