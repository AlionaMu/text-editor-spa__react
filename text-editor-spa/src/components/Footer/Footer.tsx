import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <a className="footer__link" href="https://github.com/AlionaMu">
          <div className="footer__link-img" />
          <p className="footer__link-name">AlionaMu</p>
        </a>
        <p className="footer__year">2023</p>
      </div>
    </footer>
  );
};
