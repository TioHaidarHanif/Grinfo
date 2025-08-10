/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */


// Color palette from Figma (contoh, sesuaikan jika ada update dari Figma)
const primaryColor = '#51C17E'; // hijau utama
const secondaryColor = '#DFEE34'; // kuning sekunder
const accentColor = '#393939'; // abu gelap
const highlightColor = '#A5A3B8'; // abu terang
const backgroundLight = '#F1F0F2'; // latar terang
const backgroundDark = '#393939'; // latar gelap
const textLight = '#393939';
const textDark = '#F1F0F2';

const tintColorLight = highlightColor;
const tintColorDark = highlightColor;

export const Colors = {
  light: {
    text: textLight,
    background: backgroundLight,
    tint: tintColorLight,
    icon: accentColor,
    tabIconDefault: accentColor,
    tabIconSelected: tintColorLight,
    primary: primaryColor,
    secondary: secondaryColor,
    accent: accentColor,
    highlight: highlightColor,
  },
  dark: {
    text: textDark,
    background: backgroundDark,
    tint: tintColorDark,
    icon: accentColor,
    tabIconDefault: accentColor,
    tabIconSelected: tintColorDark,
    primary: primaryColor,
    secondary: secondaryColor,
    accent: accentColor,
    highlight: highlightColor,
  },
};
