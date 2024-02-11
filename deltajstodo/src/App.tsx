/* eslint-disable tailwindcss/no-custom-classname */
import "./dist/output.css";
import Layout from "./components/Layout/Layout";
import AuthCard from "./components/Card/AuthCard";
import Input from "./components/Input/Input";
import FormButton from "./components/Buttons/FormButton";

function App(): JSX.Element {
  return (
    <>
      <Layout buttonText={"ثبت‌نام"} linkText={"ثبت‌نام نکرده‌ای؟"}>
        <AuthCard>
          <h1>ثبت نام</h1>
          <Input name="نام کاربری" type="password" />
          <FormButton text="ورود" />
          <Input name="نام کاربری" type="password" />
        </AuthCard>
      </Layout>
    </>
  );
}

export default App;
