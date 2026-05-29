export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__text">
          &copy; {new Date().getFullYear()} Ekramul Alam. Built with{" "}
          <span className="footer__heart">♥</span> using Next.js
        </p>
      </div>
    </footer>
  );
}
