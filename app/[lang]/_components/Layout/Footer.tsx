import Container from "../../_components/ui/Container"
import Link from "next/link"
import { ImFacebook2, ImGithub, ImLinkedin } from "react-icons/im"
import type { LayoutDictionaryType } from "../../_lib/dictionaries/getLayoutDictionary"

const Footer = ({ dictionary }: { dictionary: LayoutDictionaryType }) => {
  return (
    <footer>
      <div className="bg-cream-30 text-coffee-80 font-sans py-20">
        <Container border={false}>
          <div className="flex flex-col md:flex-row justify-between items-center ">
            <div className="text-center md:text-left">
              <p className="text-sm mb-6">{dictionary.footer.mail}</p>
              <a
                href="mailto:office@coffeeandcream.net"
                className="text-lg font-bold underline hover:text-cream-10  transition-colors duration-300 ease-in-out"
              >
                office@coffeeandcream.net
              </a>
            </div>
            <div className="mt-8 md:mt-0">
              <p className="text-sm mb-6 text-center md:text-right">{dictionary.footer.social}</p>
              <div className="flex items-center md:items-end">
                <a
                  href="https://www.facebook.com/coffeeandcream.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-cream-10 mx-3 inline-block transition-colors duration-300 ease-in-out"
                >
                  <ImLinkedin />
                </a>
                <a
                  href="https://www.facebook.com/coffeeandcream.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-cream-10 mx-3 inline-block transition-colors duration-300 ease-in-out"
                >
                  <ImFacebook2 />
                </a>
                <a
                  href="https://www.facebook.com/coffeeandcream.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-cream-10 mx-3 md:mr-0 inline-block transition-colors duration-300 ease-in-out"
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
          <div className="flex flex-col md:flex-row justify-between items-center ">
            <p className="inline-block text-cream-30">Copyright © Coffeeandcream srl - {new Date().getFullYear()}</p>
            <div className="flex items-end leading-10">
              <Link href="/gdpr" className="hover:text-cream-20 hover:underline transition-all duration-300 ease-in-out">
                {dictionary.footer.links.gdpr}
              </Link>
              <p className="mx-2"> | </p>
              <Link href="/terms" className="hover:text-cream-20 hover:underline transition-all duration-300 ease-in-out">
                {dictionary.footer.links.terms}
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
