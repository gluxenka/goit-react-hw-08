import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1>Hello, this is goit-react-hw-08 app</h1>
      <p>
        Visit&nbsp;
        <a href="https://github.com/gluxenka/goit-react-hw-08">
          gluxenka/goit-react-hw-08
        </a>
        &nbsp;to view git repo
      </p>
    </div>
  );
}
