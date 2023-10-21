import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColors;
    spacing: ISpacing;
  }
}

interface IColors {
  white: string;
  grayIron100: string;
  grayIron200: string;
  grayIron300: string;
  grayIron400: string;
  grayIron500: string;
  grayIron600: string;
  grayIron700: string;
  grayIron750: string;
  grayIron800: string;
  grayIron900: string;
  purple25: string;
  purple50: string;
  purple100: string;
  purple200: string;
  purple300: string;
  purple400: string;
  purple500: string;
  purple600: string;
  purple700: string;
  purple800: string;
  purple900: string;
  red500: string;
  red600: string;
  red900: string;
  systemRed: string;
  systemGreen: string;
  systemGray: string;
  systemPurple: string;
  dataFuchsia: string;
  dataTangerine: string;
  dataSea: string;
  dataLemon: string;
  dataEmerald: string;
  dataMustard: string;
}

interface ISpacing {
  space4: string;
  space8: string;
  space12: string;
  space16: string;
  space20: string;
  space24: string;
  space32: string;
  space40: string;
  space48: string;
  space64: string;
  space80: string;
  space96: string;
  space128: string;
  space160: string;
  space192: string;
  space224: string;
  space256: string;
  space288: string;
  space320: string;
  space384: string;
}
