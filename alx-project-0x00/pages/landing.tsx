import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button
        title="Book now"
        styles="bg-blue-200 sm:rounded-sm sm:bg-green-500"
      />
      <Button
        title="Sell now"
        styles="bg-yellow-200 md:rounded-md md:bg-red-500"
      />
      <Button
        title="Explore"
        styles="bg-white-500 lg:rounded-full lg:bg-purple-500"
      />
    </div>
  );
};
export default Landing;
