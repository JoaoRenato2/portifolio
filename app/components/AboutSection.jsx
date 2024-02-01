"use client"
import React, {useState, useTransition} from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>Python</li>
        <li>Excel</li>
        <li>Power BI</li>
        <li>SQL</li>
        <li>ETL</li>
        <li>COBOL/CICS</li>
        <li>Scrum</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Economia, IBMEC (Incompleto)</li>
        <li>Ciência da Computação, ESDHC</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Big Data - IBMEC</li>
        <li>Python para Ciência de dados - IBMEC</li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image src="/images/about.png" width={500} height={500}></Image>
        <div>
          <h2 className='text-4xl font-bold text-white mb-4'>Sobre mim</h2>
          <p className='text-base lg:text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore atque quis dicta architecto laborum placeat vitae, corporis consectetur nisi recusandae, officia voluptas, non numquam voluptate illo perspiciatis modi? A, quaerat.</p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Habilidades
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Educação
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certificações
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
