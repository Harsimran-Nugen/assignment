type ItemCardProps = {
  label: string;
  value: number;
  className?: string;
};

export default function ItemCard({ value, label,className }: Readonly<ItemCardProps>) {
  return (
    <div className={`flex flex-col font-semibold text-center hover:text-white  text-blue-950  items-center w-64 gap-5 bg-white  hover:scale-110 hover:bg-green-800 hover:cursor-pointer transition-all ease-in-out rounded-lg shadow-white py-6 ${className}`}>
      <div className="text-xl font-serif">{label}</div>
      <p className="text-2xl opacity-80 ">{value}</p>
    </div>
  );
}
