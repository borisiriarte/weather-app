import { Glass, Location, ChevronDown, Map, Lang, Weigth } from "../assets/img";

export const navigation = [
  // { id: 1, name: "Climate", href: "/", current: true },
  {
    id: 2,
    name: "Language",
    href: "",
    icon: [ChevronDown, Lang],
    current: true,
  },
  {
    id: 3,
    name: "Units",
    href: "",
    icon: [ChevronDown, Weigth],
    current: false,
  },
  {
    id: 4,
    name: "My Locations",
    href: "locations",
    icon: [Location],
    current: false,
  },
  { id: 5, name: "Maps", href: "maps", icon: [Map], current: false },
  { id: 6, name: "Browse", href: "search", icon: [Glass], current: false },
];

export const subNavigation = [
  { id: 1, name: "Today", href: "today", current: true },
  { id: 3, name: "Hourly", href: "hourly", current: false },
  { id: 2, name: "Daily", href: "daily", current: false },
];
