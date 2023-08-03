/* eslint-disable @next/next/no-img-element */
"use client"

import { imgVariants, titleVariants, listVariants } from "../../_lib/variants/serviceVariants"
import { motion } from "framer-motion"

interface ServiceCardProps {
  name: string
  description: string[]
  image: string
}

const ServiceCard = ({ name, description, image }: ServiceCardProps) => {
  return (
    <motion.article className="w-64 h-64 bg-cover relative overflow-hidden shadow-lg" whileHover="hover" initial="initial">
      <motion.h3
        className="absolute mx-auto text-cream-10 font-sans font-black inset-0 text-center pt-4 tracking-wide shadow-sm text-2xl z-30"
        variants={titleVariants}
      >
        {name}
      </motion.h3>
      <motion.div className="absolute left-4 top-14 z-20" variants={listVariants}>
        <ul>
          {description.map((item, index) => (
            <li
              className="text-cream-10 font-sans font-bold inset-0 text-left pt-1 tracking-wide drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)] text-sm"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
      <div className="absolute inset-0 bg-coffee-90/30 z-10" />
      <motion.img src={image} alt={name} className="absolute inset-0 z-0 object-cover" variants={imgVariants} />
    </motion.article>
  )
}

export default ServiceCard
