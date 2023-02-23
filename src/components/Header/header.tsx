import "./header.scss";

interface Props {
  small: boolean;
}
export default function Header({ small }: Props) {
  return (
    <header className={`app-header ${small ? "small" : ""}`}>
      <h1 className="h4">Google Books</h1>
    </header>
  );
}
