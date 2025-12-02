import Navbar from "../components/Navbar";


export default function WithLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <footer>
        footer
      </footer>
    </>
  );
}
