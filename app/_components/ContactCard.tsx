import { ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export const ContactCard = (props: {
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
          <ArrowUpRight size={16} className="border-frame" />
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
