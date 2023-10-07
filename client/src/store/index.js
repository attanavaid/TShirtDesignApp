import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: "#86FCE8",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: "./app_logo.png",
    fullDecal: "./tailwind.png",
});

export default state;