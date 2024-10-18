import { curve, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";

const Hero = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.21rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className=" container relative">
        <div className=" relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
          <h1 className="h1 mb-6">
            Explore as possibilidades da criação de sites e IAs com a
            <span className="inline-block relative">
              AyoTechnology{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-1 lg:mb-8">
            Liberte seu potencial com a Ayotechnology. Aumente sua produtividade
            com nossa empresa de criação de sites.
          </p>
          <Button href="/pricing" white>
            Vamos começar
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

            <div>
                <img src={robot}/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
