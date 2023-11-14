import Header from "components/Header";
import Nav from "common/Nav";
import Footer from "common/Footer"


export default function MainLayout({ children }) {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <main>
          <div className="max-w-7xl mx-auto py-6 lg:px-8">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
}
