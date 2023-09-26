export { default as ThemeRegistry } from './ThemeRegistry'


export type Visual = {
  boxShadow?: string;
  textShadow?: string;
  borderRadius?: string;
  opacity?: number;
  overflow?: string;
};

declare module "@mui/material" {
  export interface Palette {
    stars?: {
      [key: string]: string;
    };
    gradient?: {
      [key: string]: string;
    };
    visual?: Record<string, Visual>;
  }
  export interface TypeBackground {
    background: {
      [key: string]: string;
    };
  }
  export interface TypeText {
    [key: string]: string;
  }

  export interface Theme {
    background: {
      [key: string]: string;
    };

    dimensions: {
      page: {
        height: string;
      };
      header: {
        height: string;
      };
      footer: {
        height: string;
      };
    };
  }
}

