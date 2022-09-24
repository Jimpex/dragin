import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";
import Countdown from "../islands/Countdown.tsx";
import Live from "../islands/Live.tsx";
import Offline from "../islands/Offline.tsx";

export default function Home() {
  return (
    <div class="relative min-h-screen">
      <Header />
      <div class="p-4 mx-auto max-w-screen-md">
        {/* <Countdown /> */}
        <Live />
      </div>
      <Footer />
    </div>
  );
}
