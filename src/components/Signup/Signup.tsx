import { ROUTES } from "@/constants";
import { login } from "@/helpers/user";
import { postSignup } from "@/services/postSignup";
import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    setError(null);
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = (formData.get("email") as string) ?? "";
    const password = (formData.get("password") as string) ?? "";
    const username = (formData.get("username") as string) ?? "";
    const newsletter = formData.get("newsletter") === "on";

    postSignup({ email, password, username, newsletter })
      .then((response) => {
        login(response.account.username, response.token);
        navigate(ROUTES.home);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <section className="flex flex-col w-60 gap-4">
      <h1 className="text-3xl text-center">S'inscire</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4  w-full text-sm"
      >
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          id="username"
          name="username"
          className="input-form w-full"
        />
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
        <label className="flex gap-2 text text-ink-muted">
          <input type="checkbox" id="newsLetter" name="newsletter" />
          S'inscire à la newsletter
        </label>
        <p className="text-xs text-ink-light">
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>
        <button className="button text-white p-3 hover:bg-lagoon-400">
          S'inscire
        </button>

        {error && <p className="text-xs text-error">⚠️ {error}</p>}
        <Link
          className="text-lagoon-500 text-xs text-center hover:underline hover:text-lagoon-400"
          to={ROUTES.signin}
        >
          Tu as déjà un compte ? Connecte-toi !
        </Link>
      </form>
    </section>
  );
};
