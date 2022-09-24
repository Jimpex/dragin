import { useEffect, useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { StreamResponse } from "../types/api/index.ts";
import Offline from "./Offline.tsx";

export default function Live() {
  const [data, setData] = useState({} as StreamResponse);
  const [error, setError] = useState("" as string | null);

  useEffect(() => {
    const checkLive = async () => {
      const response = await fetch("/api/live");
      if (response.status !== 200)
        return setError(
          "We ran into an error when attempting to check the stream's status"
        );
      setError(null);
      const data = await response.json();
      console.log(data);
      setData(data);
    };
    checkLive();

    const interval = setInterval(checkLive, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {error && (
        <p class="font-bold bg-red-400 w-full text-center text-white p-2 rounded-lg mb-5">
          {error}
        </p>
      )}
      <div class="flex gap-2 justify-center">
        {data.data == null ? (
          <Offline start={0} />
        ) : (
          <p class="font-bold text-xl">
            <div class="grid grid-cols-6">
              <p class="col-span-6 text-center mb-3">
                {data.data.name} is streaming {data.data.game}
              </p>
              <a
                target="_blank"
                href={"https://twitch.tv/" + data.data.name}
                class="col-span-2 col-start-3 px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                Watch now
              </a>
            </div>
          </p>
        )}
        {/* <Button onClick={() => setCount(count - 1)}>-1</Button> */}
        {/* <Button onClick={() => setCount(count + 1)}>Moar! :D</Button> */}
      </div>
    </div>
  );
}
