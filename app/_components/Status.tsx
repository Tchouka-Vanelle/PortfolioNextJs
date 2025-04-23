import { Card } from '@/components/ui/card';
import React from 'react';
import Section from './Section';
import { SIDE_PROJECTS, SideProject } from './SideProject';
import { Work, WORKS } from './Work';
import { ContactCard } from './ContactCard';

const Status = () => {
  return (
    <Section className="flex-col max-md:flex-col items-start gap-4 ">
      <div className="flex-[3] w-full ">
        <Card className=" w-full p-4 flex flex-col gap-2 ">
          <p className="text-lg text-muted-foreground border-frame">
            Side Project
          </p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject key={index} {...project} />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-2 flex flex-col w-full h-full gap-4">
        <Card className=" w-full p-4 flex flex-col gap-2 ">
          <p className="text-lg text-muted-foreground border-frame">
            Experiences
          </p>
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
          <p className="text-lg text-muted-foreground border-frame">
            Contact me
          </p>
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

export default Status;
