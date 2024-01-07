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

export const squareButtonNames = ["con tact", "ran dom", "inspo"]
export const nonSquareButtonNames =["digital art", "paintings", "about brown+risd"]

export const nonSquareLinks = [false, false, true]
export const nonSquareNavs = [103, 102, "https://www.brown.edu/academics/brown-risd-dual-degree/home"]

function rand(max) {
    return Math.floor(Math.random() * max)
}

export const squareLinks = [true, false, true]
export const squareNavs = ["mailto:hadley_dalton@brown.edu", rand(7), "https://www.pinterest.com/hadleydalt"]