import Footer from "../components/footer/Footer";
import {LoginForm} from "../components/forms/LoginForm";

export default function Login() {
  return (
    <div>
      <LoginForm />
      <a href="/signup">Si no tienes cuenta click aquí</a>
      <Footer/>
    </div>
  )
}
