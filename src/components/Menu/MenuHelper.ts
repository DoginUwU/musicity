import { IconType } from "react-icons/lib";
import {
  RiHeart3Line,
  RiHomeLine,
} from "react-icons/ri";

interface IMenuItems {
  name: string;
  icon?: IconType;
  image?: string;
  path: string;
}

interface IMenuProps {
  name: string;
  items: IMenuItems[];
}

export const MENU_ITEMS = (): IMenuProps[] => [
  {
    name: "App",
    items: [
      {
        name: "Início",
        icon: RiHomeLine,
        path: "/",
      },
    ],
  },
  {
    name: "Pessoal",
    items: [
      {
        name: "Favoritos",
        icon: RiHeart3Line,
        path: "/favorites",
      },
    ],
  },
];
