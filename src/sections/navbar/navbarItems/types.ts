export interface NavLink {
    id: number;
    name: string;
    href: string;
  }
  
  export interface NavbarItemsProps {
    onClick?: () => void; 
    onPlayGameClick: () => void; 
  }
  