import React from "react";
import { ContactCard, CustomBanner, Footer, Header } from "../components";
import { ContactForm } from "../containers";

const Contact = () => {
  return (
    <div>
      {/* header */}
      <Header />
      {/* banner */}
      <CustomBanner image="" lead="Contact Us" nav2="Contact" />

      {/* contact cards */}
      {/* <div className=" container py-24 ">
        <div className=" md:w-5/6 grid mx-auto place-items-center grid-cols-1 md:grid-cols-2 gap-4  gap-y-8 border border-green-500">
          <ContactCard
            Icon={""}
            baseText=""
            lead1="Address"
            lead2="7 Green Lake Street Crawfordsville, IN 47933"
          />
          <ContactCard Icon={""} baseText="" lead1="" lead2="" />
          <ContactCard Icon={""} baseText="" lead1="" lead2="" />
          <ContactCard Icon={""} baseText="" lead1="" lead2="" />
        </div>
      </div> */}

      {/* contact form */}
      <ContactForm />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Contact;
