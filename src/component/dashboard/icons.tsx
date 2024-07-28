
import {
  Pizza,
  TimerOff,
  HandPlatter,
  Hotel,
  BedDouble,
} from "lucide-react";
import { IconProps } from "./types";

export const GetIcon = ({ iconName, styling, parentClass }: IconProps) => {
  const IconObject = {
    Pizza: (styling: string) => <Pizza className={styling} />,
    TimerOff: (styling: string) => <TimerOff className={styling} />,
    HandPlatter: (styling: string) => <HandPlatter className={styling} />,
    Hotel: (styling: string) => <Hotel className={styling} />,
    BedDouble: (styling: string) => <BedDouble className={styling} />,

  };

  const defaultClass =
    "flex items-center justify-center rounded-full w-12 h-12";

  return (
    <div className={`${defaultClass} ${parentClass}`}>
      {IconObject[iconName as keyof typeof IconObject](styling)}
    </div>
  );
};
