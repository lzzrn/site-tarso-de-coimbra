import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/assets/logo.JPG";

const routes = [
  { path: "/", label: "Início" },
  { path: "/centro-educacional", label: "O Centro" },
  { path: "/academico", label: "Acadêmico" },
  { path: "/noticias-e-eventos", label: "Notícias" },
  { path: "/contato", label: "Contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "header-blur shadow-lg shadow-blue-500/5 border-b border-blue-100/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative">
              <img
                src={logo}
                alt="Logo CMAEE"
                className="w-12 h-12 rounded-xl object-cover shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow duration-300"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </div>
            <div className="hidden sm:block">
              <span className="block text-lg font-bold gradient-text">
                CMAEE
              </span>
              <span className="block text-xs text-muted-foreground -mt-0.5">
                Dr. Tarso de Coimbra
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center gap-1 p-1.5 rounded-full glass-card shadow-soft">
              {routes.map((route) => (
                <NavLink
                  key={route.path}
                  to={route.path}
                  className={({ isActive }) =>
                    `relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-slate-600 hover:text-blue-600"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <span className="absolute inset-0 rounded-full gradient-primary shadow-lg shadow-blue-500/30" />
                      )}
                      <span className="relative z-10">{route.label}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative w-12 h-12 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  <Menu className="w-6 h-6 text-blue-600" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full sm:w-[400px] border-l border-blue-100 bg-white/95 backdrop-blur-xl"
              >
                <SheetHeader className="pb-6 border-b border-blue-100">
                  <SheetTitle className="flex items-center gap-3">
                    <img
                      src={logo}
                      alt="Logo CMAEE"
                      className="w-10 h-10 rounded-xl object-cover"
                    />
                    <span className="gradient-text font-bold">
                      CMAEE Dr. Tarso de Coimbra
                    </span>
                  </SheetTitle>
                </SheetHeader>

                <nav className="mt-8 space-y-2">
                  {routes.map((route, index) => (
                    <NavLink
                      key={route.path}
                      to={route.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `group flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30"
                            : "text-slate-600 hover:bg-blue-50"
                        }`
                      }
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {({ isActive }) => (
                        <>
                          <div
                            className={`w-2 h-2 rounded-full transition-colors ${
                              isActive
                                ? "bg-white"
                                : "bg-blue-300 group-hover:bg-blue-500"
                            }`}
                          />
                          <span className="text-lg font-medium">
                            {route.label}
                          </span>
                        </>
                      )}
                    </NavLink>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="absolute bottom-8 left-6 right-6">
                  <a
                    href="https://wa.me/5535988543198"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl gradient-primary text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow"
                  >
                    Agende uma Visita
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
