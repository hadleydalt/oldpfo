import { ThreeButtons } from './ThreeButtons'

export const colorMap = {
    "red": "rgb(234, 120, 120)",
        "red-orange": "rgb(234, 160, 120)",
        "yellow-orange": "rgb(234, 200, 120)",
        "yellow": "rgb(230, 234, 120)",
        "yellow-green": "rgb(181, 234, 120)",
        "green": "rgb(120, 234, 126)",
        "blue": "rgb(120, 234, 226)",
        "periwinkle": "rgb(120, 181, 234)",
        "indigo": "rgb(120, 120, 234)",
        "purple": "rgb(173, 120, 234)",
        "pink": "rgb(234, 120, 217)",
        "gray": "rgb(172, 172, 172)"
}

const squareButtonNames = ["op1", "op2", "op3"]
const nonSquareButtonNames =["op1", "op2", "op3"]

export const squareButtons = <ThreeButtons square={true} names={squareButtonNames} />
export const nonSquareButtons = <ThreeButtons square={false} names={nonSquareButtonNames} />