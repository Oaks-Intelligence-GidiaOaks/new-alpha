import { Footer, Header } from "../components";
import {
  AboutSummary,
  Banner,
  CallUs,
  Events,
  Partners,
  Services,
  Testimnoials,
} from "../containers";

const Home = () => {
  return (
    <div>
      <Header />
      {/* banner */}
      <Banner />

      {/* about summary */}
      <AboutSummary />

      {/* services */}
      <Services />

      {/* call us for training */}

      {/* client count */}

      {/* Portfolio */}

      {/* testimonials */}
      {/* <Testimnoials /> */}

      {/* latest events */}
      <Events />

      {/* partners */}
      <Partners />

      {/* contact cards */}
      {/* <CallUs /> */}
      <Footer />
    </div>
  );
};

export default Home;
