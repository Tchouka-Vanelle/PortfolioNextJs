import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Flutter from './icons/Flutter';
import CreateReactApp from './icons/CreateReactApp';
import Angular from './icons/Angular';
import Java from './icons/Java';
import Php from './icons/Php';
import Javascript from './icons/Javascript';

export const SIDE_PROJECTS: SideProjectProps[] = [
  {
    logo: Flutter,
    title: 'E commerce App',
    description: 'A Flutter e commerce app for shop anything',
    url: 'https://github.com/Tchouka-Vanelle/flutter_eCommerce_app',
  },
  {
    logo: CreateReactApp,
    title: 'E commerce shop',
    description: 'A website in react',
    url: 'https://github.com/Tchouka-Vanelle/react_cart/tree/main/src',
    perso: true,
  },
  {
    logo: Angular,
    title: 'Appliance management',
    description: 'Angular application',
    url: 'https://github.com/Tchouka-Vanelle/gestionAppareils',
    perso: true,
  },
  {
    logo: Java,
    title: 'Memory Card',
    description: 'A java application who reproduce the memory card game',
    url: 'https://github.com/Tchouka-Vanelle/MemoryCard',
  },
  {
    logo: Php,
    title: 'Command Burger',
    description: 'A php app for order food',
    url: 'https://github.com/Tchouka-Vanelle/Commande_burger',
  },
  {
    logo: Javascript,
    title: 'Meteo by location',
    description: 'A javascript site to know the weather',
    url: '/',
    perso: true,
  },
];

export type SideProjectProps = {
  logo: React.ElementType;
  title: string;
  description: string;
  url: string;
  perso?: boolean;
};
export const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm border-frame">
        <props.logo size={20} />
      </span>

      <div>
        <div className="flex items-center gap-2 ">
          <p className="text-lg font-semibold">{props.title}</p>
          <ArrowUpRight size={16} className="border-frame" />
        </div>

        <p className="text-lg text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
