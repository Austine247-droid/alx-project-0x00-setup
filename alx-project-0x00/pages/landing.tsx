import Card from "@/components/Card";
import Button from "@/components/Button";
const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="flex gap-4 mt-4">
        <Button title="Explore" styles="rounded-sm" />
        <Button title="Buy me" styles="rounded-md" />
        <Button title="Buy Now" styles="rounded-lg" />
        <Button title="Click Me" styles="rounded-full" />
      </div>
    </div>
  );
};
export default Landing;
