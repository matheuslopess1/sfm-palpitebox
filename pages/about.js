import React from "react";
import Link from "next/link";
import PageTitle from "../components/PageTitle";

const About = () => {
  return (
    <>
      <PageTitle title="Sobre" />
      <div>
        <h1>Sobre</h1>
        <div>
          <Link href="/">
            <a>Página Inicial</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
