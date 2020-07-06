import React, { useState } from "react";
import PageTitle from "../components/PageTitle";

const formInitialState = {
  name: "",
  email: "",
  whatsapp: "",
  coupon: "",
  offer: "",
  rate: 0,
};

const returnedDataInitialState = {
  showCoupon: false,
  coupon: "",
  offer: "",
};

const Feedback = () => {
  const [form, setForm] = useState(formInitialState);
  const [success, setSuccess] = useState(false);
  const [returnedData, setReturnedData] = useState(returnedDataInitialState);

  const rateNumbers = ["0", "1", "2", "3", "4", "5"];

  const save = async () => {
    try {
      const response = await fetch("/api/save-offer", {
        method: "POST",
        body: JSON.stringify(form),
      });

      const data = await response.json();

      setSuccess(true);
      setReturnedData(data);
    } catch (err) {
      //
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <PageTitle title="Pesquisa" />
      <div className="pt-6">
        <h1 className="text-center font-bold my-4 text-2xl">
          Críticas e sugestões
        </h1>
        <p className="text-center mb-6">
          O restaurante X sempre busca por atender melhor seus clientes. Por
          isso, estamos sempre abertos a ouvir a sua opinião.
        </p>
        {!success ? (
          <div className="w-1/5 mx-auto">
            <label className="font-bold">Seu nome:</label>
            <input
              type="text"
              className="p-4 block shadow bg-blue-100 my-2 rounded"
              name="name"
              onChange={handleChange}
            />
            <label className="font-bold">E-mail:</label>
            <input
              type="text"
              className="p-4 block shadow bg-blue-100 my-2 rounded"
              name="email"
              onChange={handleChange}
            />
            <label className="font-bold">Whatsapp:</label>
            <input
              type="text"
              className="p-4 block shadow bg-blue-100 my-2 rounded"
              name="whatsapp"
              onChange={handleChange}
            />

            <div className="flex py-6">
              {rateNumbers.map((number) => (
                <label className="block w-1/6 text-center" key={number}>
                  {number}
                  <br />
                  <input
                    type="radio"
                    name="rate"
                    value={number}
                    onChange={handleChange}
                  />
                </label>
              ))}
            </div>

            <button
              className="bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow"
              onClick={save}
            >
              Salvar
            </button>
          </div>
        ) : (
          <div className="w-1/5 mx-auto">
            <p className="mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3">
              Obrigado por contribuir com sua sugestão ou crítica.
            </p>
            {returnedData.showCoupon && (
              <>
                <div className="text-center border p-4 mb-4">
                  Seu cupom:
                  <br />
                  <span className="font-bold text-2xl">
                    {returnedData.coupon}
                  </span>
                </div>
                <div className="text-center border p-4 mb-4">
                  <span className="font-bold block mb-2">
                    {returnedData.offer}
                  </span>
                  <br />
                  <span className="italic">
                    Tire um print ou foto desta tela e apresente ao garçom.
                  </span>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Feedback;
