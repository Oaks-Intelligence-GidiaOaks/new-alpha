import { FormInput } from "../components";

const ContactForm = () => {
  return (
    <div className="py-24">
      <div className="container">
        <div className="text-center space-y-4">
          <h2 className="font-bold font-pt text-4xl">Have Any Question?</h2>

          <h6 className="text-grey">
            It is a long established fact that a reader will be distracted{" "}
            <br />
            content of a page when looking.
          </h6>
        </div>

        <form action="" className="md:w-5/6 mt-24 mx-auto">
          <div className="grid grid-cols-2 gap-5 gap-y-8">
            <FormInput placeholder="Your Name" />
            <FormInput placeholder="Your Name" />

            <textarea
              className="col-span-2 border p-3 outline-none"
              name=""
              id=""
              cols="30"
              placeholder="Message"
              rows="10"
            ></textarea>

            <div className="col-span-2 flex justify-center">
              <button className="p-5 px-6 text-white bg-secondary flex gap-3">
                <span>Submit Now</span>
                {/* Icon */}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
