import styled from "styled-components";
import classnames from "classnames";
import { Header } from "./components/layout/header/Header";
import { Container } from "./components/shared/Container";
import { Button, ButtonVariants } from "./components/shared/Button";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { efforts, offers } from "./_db";
import { OfferCard } from "./components/cards/OfferCard";
import { IntelligenceCard } from "./components/cards/IntelligenceCard";

const GradientText = styled.h1`
  background-image: linear-gradient(to right, #b565fd, #f3dcf9);
  display: inline-block;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

const OsintH1 = styled.h1`
  line-height: 5rem;
  @media (max-width: 768px) {
    line-height: 4rem;
  }

  @media (max-width: 467px) {
    line-height: 3rem;
  }
`;

const PageBanner = styled.div`
  background-image: linear-gradient(to bottom, #000000, #1a084d);
`;

function App() {
  return (
    <>
      <Header></Header>

      {/* PAGE BANNER SECTION */}
      <PageBanner
        className={classnames(
          "min-h-[110vh]  lg:py-0 py-32 flex flex-col lg:flex-row justify-between items-center relative",
        )}
      >
        <div className="w-full md:w-auto xl:pl-[5rem] xl:pr-0 lg:pl-[3rem] lg:pr-0 px-[1rem] lg:mb-0 mb-12">
          <OsintH1 className="w-full text-white md:text-6xl  sm:text-5xl text-4xl font-extrabold mb-5 ">
            <GradientText>Supercharge</GradientText> your searches{" "}
            <br className="hidden lg:block" /> with OSINT Industries
          </OsintH1>
          <p className="lg:mb-5 mb-10 text-white xl:text-xl lg:text-lg text-[1rem]">
            The world's best OSINT platform to give you detailed information
            from over 200+ websites.
          </p>

          <div className="flex flex-row justify-start mb-10">
            <Button label={"Get started"} className="mr-5"></Button>
            <Button
              label={"Learn more"}
              variant={ButtonVariants.Transparent}
              icon={<ArrowRightIcon width={20} height={20}></ArrowRightIcon>}
            ></Button>
          </div>

          <div className="flex justify-start text-white items-center">
            <img
              src="/icons/icon-rating.svg"
              alt="Osint Rating"
              className="mr-2"
            />
            <img
              src="/icons/icon-reg-spin.svg"
              alt="Osint Spin"
              className="mr-2"
            />
            <p>5 Star Rating</p>
          </div>
        </div>
        <div className="">
          <img src="/images/world-map.svg" alt="World map" />
        </div>
      </PageBanner>

      {/* WHAT WE OFFER SECTION */}
      <Container className="mt-32 mb-52">
        <div className="grid md:grid-cols-3  sm:grid-cols-2 grid-cols-1 lg:gap-x-10 gap-x-2 gap-y-14 lg:px-10 px-2 ">
          {offers.map((offer, index) => {
            return (
              <OfferCard
                key={index}
                icon={offer.icon}
                title={offer.title}
                description={offer.description}
              ></OfferCard>
            );
          })}
        </div>
      </Container>

      {/* EFFORTLESS INTELLIGENCE */}
      <Container className="mt-32 mb-52">
        <OsintH1 className="text-center w-full text-white md:text-6xl  sm:text-5xl text-4xl font-extrabold mb-24">
          Effortless intelligence in <GradientText>three steps</GradientText>
        </OsintH1>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-10 gap-y-14 px-10 ">
          {efforts.map((effort, index) => {
            return (
              <IntelligenceCard
                key={index}
                icon={effort.icon}
                title={effort.title}
                description={effort.description}
              ></IntelligenceCard>
            );
          })}
        </div>
      </Container>
    </>
  );
}

export default App;
