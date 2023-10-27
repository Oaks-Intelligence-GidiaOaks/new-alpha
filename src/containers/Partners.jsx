const Partners = () => {
  const PartnerCard = ({ img }) => (
    <div className="p-6 border w-56 rounded-md">
      <img src={img} className="w-full " alt="" />
    </div>
  );

  return (
    <div className="py-24 container">
      <div className="flex flex-col gap-5 text-center">
        <h2 className="text-4xl font-pt font-bold">
          We Work With Top Companies
        </h2>
        <h3 className="text-secondary text-lg  font-roboto">
          We continue to forge strategic partnerships that enable us to advance
          and scale our offerings.
        </h3>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3   place-items-center gap-10 items-center">
        <PartnerCard img="https://www.oaksintelligence.co/_next/static/media/oaks-logo-dark.0ed9c30c.svg" />

        <PartnerCard img="./images/escrow-logo.png" />
        <PartnerCard img="./images/niccra-logo.png" />
      </div>
    </div>
  );
};

export default Partners;
