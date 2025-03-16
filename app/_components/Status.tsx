import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import React from 'react';
import Flutter from './icons/Flutter';
import CreateReactApp from './icons/CreateReactApp';
import Java from './icons/Java';
import Php from './icons/Php';
import Javascript from './icons/Javascript';
import Link from 'next/link';
import Section from './Section';
import { ArrowUpRight } from 'lucide-react';
import Angular from './icons/Angular';

const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4 ">
      <div className="flex-[3] w-full ">
        <Card className=" w-full p-4 flex flex-col gap-2 ">
          <p className="text-lg text-muted-foreground ">Side Project</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject key={index} {...project} />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-2 flex flex-col w-full h-full gap-4">
        <Card className=" w-full p-4 flex flex-col gap-2 ">
          <p className="text-lg text-muted-foreground ">Experiences</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work
                key={index}
                image={work.image}
                title={work.title}
                role={work.role}
                date={work.date}
                url={work.url}
              />
            ))}
          </div>
        </Card>
        <Card className=" w-full p-4 flex flex-col gap-2 ">
          <p className="text-lg text-muted-foreground ">Contact me</p>
          <ContactCard
            name="Tchouka Vanelle"
            image="../images/linkedin-icon.svg"
            mediumImage="../images/linkedin-icon.svg"
            description="tchoukavanelle@gmail.com"
          />
        </Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
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

type SideProjectProps = {
  logo: React.ElementType;
  title: string;
  description: string;
  url: string;
  perso?: boolean;
};
const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.logo size={20} />
      </span>

      <div>
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
          {props.perso && (
            <Badge variant="secondary" className="p-4">
              {' '}
              Perso{' '}
            </Badge>
          )}

          <ArrowUpRight size={16} />
        </div>

        <p className="text-lg text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

const WORKS: WorkProps[] = [
  {
    image: '../images/nkah.jpg',
    title: 'MULTIPURPOSE INTERNSHIP - COMMERCIAL ASSISTANCE',
    role: 'intern',
    date: '06/2021-09/2021',
    url: 'https://www.groupnkahengineering.com/',
  },
  {
    image: '../images/carrier.png',
    title: 'FULLSATCK DEVELOPER IN APPRENTICESHIP',
    role: 'infull-stack developera lternatetern',
    date: '2023-2025',
    url: 'https://www.carrier.com/carrier/en/worldwide/',
  },
];

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
};
const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />

      <div className="mr-auto">
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.role}</p>
      </div>

      <p className="text-xs text-end text-muted-foreground">{props.date}</p>
    </Link>
  );
};

const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
}) => {
  return (
    <Card className="p-3 bg-accent/10 flex items-start gap-4">
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={props.image}
            alt={props.name}
            className="w-10 h-10 rounded-full object-contain"
          />
          <img
            src={props.mediumImage}
            alt={props.name}
            className=" w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
          />
        </div>

        <Link href="https://www.linkedin.com/in/vanelle-ivanna-tchouka-8b101a244/">
          <ArrowUpRight size={16} />
        </Link>
      </div>
      <div>
        <div className="mr-auto">
          <p className="text-lg font-semibold">{props.name}</p>
          <p className="text-sm text-muted-foreground">{props.description}</p>
        </div>
      </div>
    </Card>
  );
};

export default Status;
