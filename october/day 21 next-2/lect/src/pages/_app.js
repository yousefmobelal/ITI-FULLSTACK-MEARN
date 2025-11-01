import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);
  if(Component.getLayout){
    return Component.getLayout( <Component {...pageProps} />)
  }
  return (
    <>
      <NavBar />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}
