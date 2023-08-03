/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import PageTitle from "./_components/ui/PageTitle"

const NotFound = () => {
  return (
    <div className="py-36">
      <h1 className="text-[24rem] font-extrabold font-serif text-center text-red">404</h1>
      <p className="font-sans text-xl text-center">Sorry, this page does not exist!</p>
      <Link
        href="/"
        className="font-sans bg-cream-30 px-8 py-2 hover:bg-coffee-80/70 transition-colors duration-100 shadow-md text-cream-10 mt-24 text-center mx-auto block w-56"
      >
        Let's go back home
      </Link>
    </div>
  )
}

export default NotFound
