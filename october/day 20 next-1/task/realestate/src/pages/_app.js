import NavBar from "@/components/NavBar";
import { StatisticsProvider } from "@/contexts/StatisticsContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <StatisticsProvider>
      <NavBar />
      <Component {...pageProps} />
    </StatisticsProvider>
  );
}
