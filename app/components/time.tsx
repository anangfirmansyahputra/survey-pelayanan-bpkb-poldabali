import { format } from "date-fns";
import { id } from "date-fns/locale";

import { useEffect, useState } from "react";

export default function Time() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const intervalID = setInterval(() => {
      const dateObject = new Date();

      const formattedDate = format(dateObject, "EEEE, d MMMM y, HH:mm:ss", {
        locale: id,
      });

      setTime(formattedDate);
    }, 1000);

    return () => clearInterval(intervalID); // Membersihkan interval saat komponen dibongkar
  }, []);

  return <div className="text-white text-xl">{time}</div>;
}
