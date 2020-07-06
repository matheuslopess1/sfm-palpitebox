import React from "react";
import Link from "next/link";
import PageTitle from "../components/PageTitle";

const Contact = () => {
  return (
    <>
      <PageTitle title="Contato" />
      <div>
        <h1>Contato</h1>
        <div>
          <Link href="/">
            <a>Página Inicial</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Contact;
