import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-700 p-4">
      <div className="container mx-auto text-center font-bold text-white">
        Projeto desenvolvido por: Matheus Inocêncio /{" "}
        <a
          className="hover:underline"
          href="https://www.linkedin.com/in/matheusilopes"
        >
          LinkedIn
        </a>{" "}
        /
        <a
          className="hover:underline"
          href="https://www.github.com/matheuslopess1"
        >
          GitHub
        </a>
        <div className="mt-2">
          <img
            className="inline p-4"
            src="/logo_semana_fsm.png"
            style={{ maxWidth: "214px" }}
          />
          <img
            className="inline p-4"
            src="/logo_devpleno.png"
            style={{ maxWidth: "240px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
