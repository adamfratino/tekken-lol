import { cva } from "class-variance-authority"

const twStyles =
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"

const twVariants = {
  variant: {
    default:
      "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secondary:
      "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive:
      "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
    outline: "text-foreground",
    block: "rounded-md shadow-lg",
    count: "text-xs font-bold tracking-wide",
  },
  size: {
    large: "px-6 py-2 text-base",
  },
  shade: {
    /** Hit Levels */
    h: "bg-red-light",
    hh: "bg-red-light",
    H: "bg-red-medium",
    m: "bg-yellow-light",
    mm: "bg-yellow-light",
    M: "bg-yellow-medium",
    sm: "bg-green-light",
    sp: "bg-green-medium",
    sl: "bg-green-medium",
    l: "bg-blue-light",
    L: "bg-blue-medium",
    t: "bg-teal-lighter",
    th: "bg-teal-lighter",
    throw: "bg-teal-lighter",
    "th(h)": "bg-pink-light",
    "h (th)": "bg-pink-light",
    "t(a)": "bg-pink-medium",
    "t(c)": "bg-pink-medium",
    "t(g)": "bg-pink-dark",
    "t / m": "bg-pink-dark",
    "ub(m)": "bg-purple-light",
    /** Tags */
    bbr: "bg-green-medium",
    chp: "bg-yellow-medium",
    cs: "bg-purple-lighter",
    elb: "bg-yellow-medium",
    fbr: "bg-lime-dark",
    fs: "bg-forest-medium",
    hb: "bg-orange-light",
    he: "bg-orange-light",
    hs: "bg-orange-medium",
    hom: "bg-pink-medium",
    kne: "bg-yellow-medium",
    pc: "bg-teal-medium",
    ps: "bg-red-light",
    trn: "bg-blue-lighter",
    js: "bg-purple-light",
    spk: "bg-red-lighter",
    wc: "bg-aqua-medium",
    wpn: "bg-yellow-medium",
  },
}

export const variants = cva(twStyles, {
  variants: twVariants,
  defaultVariants: {
    variant: "default",
  },
})
