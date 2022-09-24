import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

export default function Offline(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  const message = "DraginAir is offline.. ;(\nClick the button while you wait!";
  return (
    <div>
      <p class="text-center pb-3">{message}</p>
      <div class="flex gap-2 justify-center">
        <p class="font-bold text-xl">{count}</p>
        {/* <Button onClick={() => setCount(count - 1)}>-1</Button> */}
        <Button onClick={() => setCount(count + 1)}>Moar! :D</Button>
      </div>
    </div>
  );
}
