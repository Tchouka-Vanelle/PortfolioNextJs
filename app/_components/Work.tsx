import Link from 'next/link';

export const WORKS: WorkProps[] = [
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

export type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
};
export const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md border-frame"
      />

      <div className="mr-auto">
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.role}</p>
      </div>

      <p className="text-xs text-end text-muted-foreground">{props.date}</p>
    </Link>
  );
};
