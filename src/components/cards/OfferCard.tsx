interface OfferCardProps {
  icon: string;
  title: string;
  description: string;
}

export const OfferCard = (props: OfferCardProps) => {
  return (
    <div className="p-1 sm:block flex flex-col items-center">
      <img src={`/icons/${props.icon}`} alt={props.title} className="mb-7" />
      <h1 className="sm:text-left text-center mb-4 text-white font-medium text-[1rem] lg:text-xl">
        {props.title}
      </h1>
      <p className="sm:text-left text-center text-white font-light text-[0.87rem] lg:text-lg">
        {props.description}
      </p>
    </div>
  );
};
