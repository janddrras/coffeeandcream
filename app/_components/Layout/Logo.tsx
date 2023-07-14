import { motion } from "framer-motion"
import type { Variants, MotionStyle } from "framer-motion"

interface LogoProps {
  size: number
  r: number
  strokeWidth?: number
  color?: string
  variant1?: Variants
  variant2?: Variants
  whileHover?: string
}

const Logo = ({ size, r, strokeWidth = 4, color = "currentColor", variant1, variant2, whileHover }: LogoProps) => {
  const strokeLength = (r: number) => 2 * Math.PI * r
  const strokeDasharray = (r: number) => `${strokeLength(r)} ${strokeLength(r)}`
  const style: MotionStyle = {
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round"
  }

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}`}
      height={`${size}`}
      viewBox={`0 0 ${size} ${size}`}
      initial="hidden"
      animate="visible"
      whileHover={whileHover}
    >
      <motion.circle
        cx={`${size / 2}`}
        cy={`${size / 2}`}
        r={`${r}`}
        style={style}
        pathLength={`${strokeLength(r)}`}
        strokeDasharray={`${strokeDasharray(r)}`}
        custom={0}
        variants={variant1}
      />
      <motion.circle
        cx={`${size / 2}`}
        cy={`${size / 2}`}
        r={`${r + r / 2 - r / 20}`}
        style={style}
        pathLength={`${strokeLength(r)}`}
        strokeDasharray={`${strokeDasharray(r)}`}
        custom={1}
        variants={variant1}
      />
      <motion.circle
        cx={`${size / 2}`}
        cy={`${size / 2}`}
        r={`${r + r - r / 10}`}
        style={style}
        pathLength={`${strokeLength(r)}`}
        strokeDasharray={`${strokeDasharray(r)}`}
        custom={2}
        variants={variant2}
      />
    </motion.svg>
  )
}

export default Logo
