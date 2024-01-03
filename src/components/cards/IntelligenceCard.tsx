interface IntelligenceCardProps {
  icon: string;
  title: string;
  description: string;
}

export const IntelligenceCard = (props: IntelligenceCardProps) => {
  return (
    <div className="p-1 flex flex-col items-center">
      <img
        src={`/icons/${props.icon}`}
        alt={props.title}
        className="mb-10 lg:w-40 lg:h-40 md:w-28 md:h-28 w-20 h-20"
      />
      <h1 className="mb-5 text-center text-white font-medium text-[1rem] lg:text-xl">
        {props.title}
      </h1>
      <p className="text-white text-center font-light text-[0.87rem] lg:text-lg">
        {props.description}
      </p>
    </div>
  );
};
