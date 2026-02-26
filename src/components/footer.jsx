export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="mailto:shivam.connect30@gmail.com">
          Email
        </a>

        <span className="footer-separator">•</span>

        <a
          href="https://www.linkedin.com/in/shivam-patel-5524131a0"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
         <span className="footer-separator">•</span>

         <a
          href="https://github.com/shivam-109"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>

      <p className="footer-credit">
        Developed by <strong>Shivam Patel</strong>
      </p>
    </footer>
  );
}