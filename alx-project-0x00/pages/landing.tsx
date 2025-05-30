import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="flex flex-col gap-2 mt-4">
        <Button title="Book now" styles="bg-blue-200 rounded-sm " />
        <Button title="Sell now" styles="bg-yellow-200 rounded-md " />
        <Button title="Explore" styles="bg-white-500 rounded-full " />
        <Button title="Click me" styles="bg-white-500 rounded-full " />
      </div>
    </div>
  );
};
export default Landing;
