import { cn } from "@/utils/cn";
import Image from "next/image";

export default function WeatherIcon(
  props: { iconname: string }
) {
  return (
    <div title={props.iconname} {...props} className={cn("relative h-20 w-20")}>
      <Image
        width={100}
        height={100}
        alt="weather-icon"
        className="absolute h-full w-full"
        priority
        src={`https://openweathermap.org/img/wn/${props.iconname}@4x.png`}
      />
    </div>
  );
}
