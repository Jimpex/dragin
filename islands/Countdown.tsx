import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import moment from "moment";
import dayjs from "dayjs";

export default function Countdown() {
  const [count, setCount] = useState("");
  const currentYear = moment().year();
  const nextYear = currentYear + 1;
  const thisBirthdayStart = moment(`${currentYear}-09-23`); //{ year: currentYear, day: 23, month: 9 });
  const thisBirthdayEnd = moment(`${currentYear}-09-24`); //{ year: currentYear, day: 24, month: 9 });
  const nextBirthdayStart = moment(`${nextYear}-09-23`); //{ year: nextYear, day: 23, month: 9 });
  console.log(
    currentYear,
    thisBirthdayStart.fromNow(),
    thisBirthdayEnd.fromNow()
  );
  // dayjs().

  return (
    <div>
      {/* <p class="text-center pb-3">{message}</p> */}
      <div class="flex gap-2 justify-center">
        <p class="font-bold text-xl">{count}</p>
        {/* <Button onClick={() => setCount(count - 1)}>-1</Button> */}
        {/* <Button onClick={() => setCount(count + 1)}>Moar! :D</Button> */}
      </div>
    </div>
  );
}
