import React from "react";
import Link from "next/link";

const Index = () => {
  return (
    <div>
      <h1>Olá Semana Fullstack Master!</h1>
      <div>
        <Link href="/about">
          <a>Sobre</a>
        </Link>
      </div>
    </div>
  );
};

export default Index;
