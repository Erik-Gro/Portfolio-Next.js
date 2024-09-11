export interface NavLink {
    id: number;
    name: string;
    href: string;
  }
  
  export interface NavbarItemsProps {
    onClick?: () => void; // Function for click events, no arguments
    onPlayGameClick: () => void; // Function for play game button click
  }
  