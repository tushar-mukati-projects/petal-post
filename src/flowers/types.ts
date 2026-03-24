export interface FlowerPalette {
  primary: string;
  secondary: string;
  accent: string;
  center: string;
  dark: string;
}

export interface FlowerSVGProps {
  palette: FlowerPalette;
  className?: string;
  size?: number;
}
