import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className=" flex justify-center items-center bg-white px-3 w-auto h-[27px] rounded-full text-blue-400">
      <p className="text-sm">{title}</p>
    </div>
  );
};

export default Pill;

// const Pill = ({ title }: PillProps) => {
//   return <div>{title}</div>;
// };

// export default Pill;
