function Footer() {
  return (
    <footer className="teal black">
      <div className="footer-copyright">
        <div className="container white-text">
          © {new Date().getFullYear()} Copyright Text
          {/* <a className="grey-text text-lighten-4 right" href="#!">
            Repo
          </a> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
