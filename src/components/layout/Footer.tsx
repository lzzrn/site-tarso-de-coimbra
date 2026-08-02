import { NavLink } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Heart,
  Facebook,
  Instagram,
} from "lucide-react";
import logo from "@/assets/logo.JPG";

const quickLinks = [
  { path: "/", label: "Início" },
  { path: "/centro-educacional", label: "O Centro" },
  { path: "/academico", label: "Acadêmico" },
  { path: "/noticias-e-eventos", label: "Notícias" },
  { path: "/contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="relative mt-auto">
      {/* Top gradient line */}
      <div className="h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400" />

      {/* Main footer */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={logo}
                  alt="Logo CMAEE"
                  className="w-12 h-12 rounded-xl object-cover"
                />
                <div>
                  <span className="block text-lg font-bold">
                    CMAEE
                  </span>
                  <span className="block text-xs text-blue-300">
                    Dr. Tarso de Coimbra
                  </span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Educação bilíngue de excelência para surdos, promovendo inclusão
                e desenvolvimento integral desde 1959.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-6">
                Links Rápidos
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      className="text-slate-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 group-hover:scale-150 transition-transform duration-300" />
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-6">
                Contato
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400 text-sm">
                    R. Mario Xandó de Oliveira, 2 - São Geraldo, Poços de Caldas - MG, 37701-335
                    <br />
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <a
                    href="tel:+553536972126"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    (35) 3697-2126
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <a
                    href="mailto:tarsodecoimbra@edu.pocosdecaldas.mg.gov.br"
                    className="text-slate-400 hover:text-white transition-colors text-sm break-all"
                  >
                    tarsodecoimbra@edu.pocosdecaldas.mg.gov.br
                  </a>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-6">
                Horário de Funcionamento
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <div className="text-sm">
                    <span className="text-white font-medium">Seg - Sex</span>
                    <br />
                    <span className="text-slate-400">07:00 - 17:00</span>
                  </div>
                </li>
              </ul>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href="https://wa.me/5535988543198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Agende uma Visita
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
              <p>
                &copy; {new Date().getFullYear()} CMAEE Dr. Tarso de Coimbra.
                Todos os direitos reservados.
              </p>
              <p className="flex items-center gap-1">
                Feito com{" "}
                <Heart className="w-4 h-4 text-red-500 fill-red-500" /> pela PUC Minas - Aluna Liz Rosa Nguyen e Aluno Otávio Reis Ferrero
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
