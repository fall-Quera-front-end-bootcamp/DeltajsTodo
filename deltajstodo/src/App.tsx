/* eslint-disable tailwindcss/no-custom-classname */
import "./dist/output.css";
import Layout from "./components/Layout/Layout";

function App(): JSX.Element {
  return (
    <>
      <Layout buttonText={"ثبت‌نام"} linkText={"ثبت‌نام نکرده‌ای؟"}>
        {/* add your card */}
      </Layout>
    </>
  );
}

export default App;
