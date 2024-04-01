import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      primary: string;
      secondary: string;
      error: string;
    };

    textColors: {
      primary: string;
      secondary: string;
      error: string;
    };

    metrics: {
      baseMargin: number;
      basePadding: number;
      baseRadius: number;
      screenWidth: number;
      screenHeight: number;
    };
  }
}
