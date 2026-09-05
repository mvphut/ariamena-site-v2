import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { en } from "@/content/site";

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="skip-link">
        {en.site.ui.skip}
      </a>
      <Nav c={en} />
      <main id="main">{children}</main>
      <Footer c={en} />
    </>
  );
}
