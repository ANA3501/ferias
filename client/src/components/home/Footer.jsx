import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer container">
      <Logo />
      <span>feito para viajar devagar · 2024</span>
      <a href="#top">
        voltar ao topo <ArrowUpRight size={14} />
      </a>
    </footer>
  );
}
