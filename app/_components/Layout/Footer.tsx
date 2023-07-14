import Container from "./Container"
import { ImFacebook2, ImGithub, ImLinkedin } from "react-icons/im"

const Footer = () => {
  return (
    <footer>
      <div className="bg-cream-30 text-coffee-80 font-sans py-20">
        <Container border={false}>
          <div className="flex flex-col md:flex-row justify-between items-center ">
            <div className="text-center md:text-left">
              <p className="text-sm mb-6">Contact me at:</p>
              <a
                href="mailto:office@coffeeandcream.net"
                className="text-lg font-bold underline hover:text-cream-10  transition-colors duration-300 ease-in-out"
              >
                office@coffeeandcream.net
              </a>
            </div>
            <div className="mt-8 md:mt-0">
              <p className="text-sm mb-6 text-center md:text-right">Follow me at:</p>
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
              <a href="/" className="hover:text-cream-20 hover:underline transition-all duration-300 ease-in-out">
                Privacy Policy
              </a>
              <p className="mx-2"> | </p>
              <a href="/" className="hover:text-cream-20 hover:underline transition-all duration-300 ease-in-out">
                Terms of Hire
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
