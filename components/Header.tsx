import { JSX } from "preact";

export function Header(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <div class="flex justify-center bg-blue-800 p-1 shadow-md">
      <img
        src="/logo.svg"
        class="w-12 h-12 text-white"
        alt="the fresh logo: a sliced lemon dripping with juice shadow-lg"
      />
      {/* <span class="font-bold text-white inline-block align-middle">
        DraginAir
      </span> */}
    </div>
  );
}
