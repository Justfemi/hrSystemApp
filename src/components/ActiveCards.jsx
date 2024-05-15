import Card from "./Card";
import { User } from "lucide-react";

const cardData = [
  {
    id: 1,
    title: "Number of Employees",
    count: 150, // Example value
    icon: "employee", // You can use icons if needed
  },
  {
    id: 2,
    title: "Number of Leaves",
    count: 25, // Example value
    icon: "leave", // You can use icons if needed
  },
  {
    id: 3,
    title: "Number of Projects",
    count: 10, // Example value
    icon: "project", // You can use icons if needed
  },
  // Add more data objects as needed
];

const ActiveCards = () => {
  return (
    <div className="bg-red-100 grid grid-cols-3 gap-10 py-10 px-5">
      {cardData.map((card, key) => (
        <Card key={key.id}>
          <div className="flex space-x-4">
            <User className="h-12 bg-red-400 px-5 rounded-full" />
            <div>
              <p>{card.count}</p>
              <a href="/">View detais</a>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ActiveCards;
