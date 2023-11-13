import mediaQuery from "./media";

const fontSize = {
    sm : `1.4rem`,
    md : `1.8rem`,
    lg : `2.2rem`,
    xl : `2.4rem`,
    xxl : `2.6rem`
}
const fontWeight = {
    small : 200,
    noraml : 400,
    bold : 700
}
const imgSrc = {
    logo:  "/img/TooniverseLogo.png",
    dragon: "/img/드래곤볼.jpg",
    monster: "/img/디지몬.jpg",
    잔느: "/img/신의 괴도 잔느.jpg",
    아따:"/img/아따아따.jpg",
    nesqui: "/img/천사소녀네티.png",
    fooMb : "/img/Foo_bg_mobile.png",
    fooPc : "/img/Foo_bg_pc.png",
    fooLogo : "/img/foo_logo.png"
  };
const theme = {
    mediaQuery,
    fontSize,
    fontWeight,
    imgSrc
}
export default theme;