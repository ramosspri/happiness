// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      letter_color: string;
      light_grey: string;
      assets_red: string;
      assets_green: string;
      assets_blue: string;
      border_grey: string;
    };
    borderRadius: {
      none: string;
      normal: string;
    };

    font: {
      sizes: {
        small: string;
        medium: string;
        large: string;
        xlarge: string;
      };
      weights: {
        light: number;
        regular: number;
        bold: number;
      };
      shadow: {
        shadow_container: string;
      };
    };
  }
}
