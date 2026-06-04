import { ROUTES } from "@/constants";
import { login } from "@/helpers/user";
import { postSignin } from "@/services/postSignin";
import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

export const Signin = () => {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    setError(null);
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = (formData.get("email") as string) ?? "";
    const password = (formData.get("password") as string) ?? "";

    postSignin({ email, password })
      .then((response) => {
        login(response.account.username, response.token);

        window.location.href = ROUTES.home;
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <section className="flex flex-col w-60 gap-4">
      <h1 className="text-3xl text-center">Seconnecter</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4  w-full text-sm"
      >
        <input
          type="text"
          placeholder="Email"
          id="email"
          name="email"
          className="input-form"
          formNoValidate
        />
        <input
          type="password"
          placeholder="Mot de passe"
          id="password"
          name="password"
          className="input-form"
        />

        <button className="button text-white p-3 hover:bg-lagoon-400">
          Se connecter
        </button>

        {error && <p className="text-xs text-error">⚠️ {error}</p>}
        <Link
          className="text-lagoon-500 text-xs text-center hover:underline hover:text-lagoon-400"
          to={ROUTES.signup}
        >
          Pas encore de compte ? Inscris-toi !
        </Link>
      </form>
    </section>
  );
};
