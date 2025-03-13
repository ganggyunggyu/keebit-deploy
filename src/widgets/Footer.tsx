const Footer = () => {
  return (
    <footer className="w-screen flex flex-col items-center justify-center mt-1">
      <section className="w-screen flex pt-10w py-8 font-light items-start px-4 text-main-white">
        &#9426; 2025 키빗 (주)코드클립
      </section>
      <section className="w-screen flex gap-2 px-5 pb-5">
        <a className="invert brightness-60">
          <img src="https://cdn.unicornplatform.com/static/img/icons/social/white/facebook.svg" alt="페이스북" />
        </a>
        <a className="invert brightness-60">
          <img src="https://cdn.unicornplatform.com/static/img/icons/social/white/x.svg" alt="트위터" />
        </a>
        <a className="w-5 h-5 invert brightness-60">
          <img src="https://cdn.unicornplatform.com/static/img/icons/social/white/instagram.svg" alt="인스타그램" />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
