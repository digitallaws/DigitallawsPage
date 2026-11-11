import { Component, StrictMode, createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { renderToString } from "react-dom/server";
import { Link, Outlet, Route, Routes, StaticRouter, useLocation } from "react-router-dom";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
const ThemeContext = createContext(null);
function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(() => {
		if (typeof window === "undefined") return "light";
		return window.localStorage.getItem("dl-theme") ?? "light";
	});
	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		window.localStorage.setItem("dl-theme", theme);
	}, [theme]);
	const value = useMemo(() => ({
		theme,
		setTheme,
		toggle: () => setTheme(theme === "light" ? "dark" : "light")
	}), [theme]);
	return /* @__PURE__ */ jsx(ThemeContext.Provider, {
		value,
		children
	});
}
function useTheme() {
	const ctx = useContext(ThemeContext);
	if (!ctx) throw new Error("ThemeProvider requerido");
	return ctx;
}
var Logo_Claro_default = "/assets/Logo%20Claro-A5TS_N2a.png";
var Logo_Oscuro_default = "/assets/Logo%20Oscuro-CQ0qpzoo.png";
var links = [
	{
		label: "Inicio",
		to: "/"
	},
	{
		label: "Nosotros",
		to: "/#nosotros"
	},
	{
		label: "Nuestros Productos",
		to: "/productos"
	},
	{
		label: "Alianzas",
		to: "/#alianzas"
	},
	{
		label: "Seguridad",
		to: "/seguridad"
	},
	{
		label: "Contacto",
		to: "/#contacto"
	}
];
function Navbar() {
	const { theme, toggle } = useTheme();
	const [open, setOpen] = useState(false);
	const { pathname } = useLocation();
	const logo = theme === "dark" ? Logo_Claro_default : Logo_Oscuro_default;
	const isActive = (to) => to.startsWith("/#") ? false : to === "/" ? pathname === "/" : pathname.startsWith(to);
	return /* @__PURE__ */ jsxs("header", {
		className: "fixed top-0 left-0 right-0 z-50 border-b border-border bg-surface/90 backdrop-blur-xl",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 md:px-8",
			children: [
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "flex items-center gap-3 focus:outline-none",
					children: /* @__PURE__ */ jsx("img", {
						src: logo,
						alt: "Digitallaws",
						className: "h-8 w-auto"
					})
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden items-center gap-8 lg:flex",
					"aria-label": "Principal",
					children: links.map((l) => /* @__PURE__ */ jsx(Link, {
						to: l.to,
						className: `text-sm font-medium transition-colors hover:text-brand ${isActive(l.to) ? "font-semibold text-brand" : "text-text-muted"}`,
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "hidden items-center gap-3 lg:flex",
					children: [/* @__PURE__ */ jsx(ThemeToggle, {
						theme,
						toggle
					}), /* @__PURE__ */ jsx(Link, {
						to: "/#contacto",
						className: "btn-primary inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold shadow-md shadow-brand/20",
						children: "Hablemos de tu proyecto"
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 lg:hidden",
					children: [/* @__PURE__ */ jsx(ThemeToggle, {
						theme,
						toggle
					}), /* @__PURE__ */ jsx("button", {
						className: "inline-flex items-center justify-center rounded-lg p-2 text-text",
						"aria-label": "Abrir menú",
						"aria-expanded": open,
						"aria-controls": "mobile-menu",
						onClick: () => setOpen(!open),
						children: /* @__PURE__ */ jsx("span", {
							className: "material-symbols-outlined text-2xl",
							children: open ? "close" : "menu"
						})
					})]
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			id: "mobile-menu",
			className: `lg:hidden ${open ? "block" : "hidden"} border-t border-border bg-surface`,
			children: /* @__PURE__ */ jsxs("nav", {
				className: "mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4",
				children: [links.map((l) => /* @__PURE__ */ jsx(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					className: "rounded-lg px-3 py-2.5 text-sm font-medium text-text-muted transition-colors hover:bg-surface-low hover:text-brand",
					children: l.label
				}, l.to)), /* @__PURE__ */ jsx(Link, {
					to: "/#contacto",
					onClick: () => setOpen(false),
					className: "btn-primary mt-2 inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold",
					children: "Hablemos de tu proyecto"
				})]
			})
		})]
	});
}
function ThemeToggle({ theme, toggle }) {
	return /* @__PURE__ */ jsx("button", {
		onClick: toggle,
		"aria-label": theme === "dark" ? "Activar modo claro" : "Activar modo oscuro",
		className: "inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-low text-text-muted transition-colors hover:text-brand",
		children: /* @__PURE__ */ jsx("span", {
			className: "material-symbols-outlined text-xl",
			children: theme === "dark" ? "light_mode" : "dark_mode"
		})
	});
}
var columns = [{
	title: "Soluciones Comerciales",
	links: [
		{
			label: "Nuestros Productos",
			to: "/productos"
		},
		{
			label: "Seguridad & Respaldo",
			to: "/seguridad"
		},
		{
			label: "Alianzas Estratégicas",
			to: "/#alianzas"
		},
		{
			label: "PQRS",
			to: "/pqrs"
		}
	]
}, {
	title: "Compañía",
	links: [
		{
			label: "Inicio",
			to: "/"
		},
		{
			label: "Nosotros",
			to: "/#nosotros"
		},
		{
			label: "Contacto Comercial",
			to: "/#contacto"
		}
	]
}];
var trustBadges = [
	{
		icon: "schedule",
		label: "Acompañamiento Continuo"
	},
	{
		icon: "workspace_premium",
		label: "Productos Propios"
	},
	{
		icon: "support_agent",
		label: "Soporte Corporativo Activo"
	}
];
var legalLinks = [
	{
		label: "Privacidad",
		to: "/privacidad"
	},
	{
		label: "Seguridad y Privacidad",
		to: "/seguridad"
	},
	{
		label: "Términos y Condiciones",
		to: "/terminos"
	},
	{
		label: "Política de Cookies",
		to: "/cookies"
	}
];
function Footer() {
	const { theme } = useTheme();
	return /* @__PURE__ */ jsx("footer", {
		className: "w-full border-t border-border bg-surface-lowest",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-5 py-14 md:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 gap-10 md:grid-cols-12",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-4 md:col-span-5",
						children: [
							/* @__PURE__ */ jsx("img", {
								src: theme === "dark" ? Logo_Claro_default : Logo_Oscuro_default,
								alt: "Digitallaws",
								className: "h-8 w-auto self-start"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "max-w-sm text-sm leading-relaxed text-text-muted",
								children: "Tecnología empresarial: productos digitales escalables y soluciones seguras de alto impacto para organizaciones globales."
							}),
							/* @__PURE__ */ jsxs("a", {
								href: "mailto:contacto@digitalalws.com",
								className: "flex items-center gap-2 text-sm font-medium text-brand hover:underline",
								children: [/* @__PURE__ */ jsx("span", {
									className: "material-symbols-outlined text-base",
									children: "mail"
								}), "contacto@digitalalws.co"]
							})
						]
					}),
					columns.map((col) => /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-3 md:col-span-2",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-text-subtle",
							children: col.title
						}), /* @__PURE__ */ jsx("ul", {
							className: "flex flex-col gap-2",
							children: col.links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: l.to,
								className: "text-sm text-text-muted transition-colors hover:text-brand",
								children: l.label
							}) }, l.label))
						})]
					}, col.title)),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-3 md:col-span-3",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-text-subtle",
							children: "Confianza & Estado"
						}), /* @__PURE__ */ jsx("ul", {
							className: "flex flex-col gap-2.5",
							children: trustBadges.map((b) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-center gap-2 text-sm text-text-muted",
								children: [/* @__PURE__ */ jsx("span", {
									className: "material-symbols-outlined text-base text-brand",
									children: b.icon
								}), b.label]
							}, b.label))
						})]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row",
				children: [/* @__PURE__ */ jsxs("p", {
					className: "text-xs text-text-subtle",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Digitallaws. Todos los derechos reservados."
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "flex flex-wrap items-center gap-6",
					children: legalLinks.map((l) => /* @__PURE__ */ jsx(Link, {
						to: l.to,
						className: "text-xs text-text-subtle transition-colors hover:text-brand",
						children: l.label
					}, l.label))
				})]
			})]
		})
	});
}
var pages_default = {
	"/": {
		"title": "Digitallaws | Desarrollo de software en Colombia",
		"description": "Desarrollamos software a medida, soluciones jurídicas e integraciones API para empresas y entidades públicas en Colombia. Conoce Digitallaws y DIMAIL."
	},
	"/productos": {
		"title": "Productos de software y DIMAIL | Digitallaws",
		"description": "Conoce los productos de Digitallaws: DIMAIL, LegalEnvios y nuevas plataformas para comunicaciones empresariales y notificaciones electrónicas."
	},
	"/desarrollo-software": {
		"title": "Desarrollo de software a medida en Colombia | Digitallaws",
		"description": "Desarrollo de aplicaciones web y software empresarial a medida para automatizar procesos, gestionar información y conectar equipos en Colombia."
	},
	"/integraciones-api": {
		"title": "Integración API y sistemas empresariales | Digitallaws",
		"description": "Conecta plataformas y automatiza el intercambio de información con integraciones API, servicios web y desarrollo de software empresarial de Digitallaws."
	},
	"/software-juridico": {
		"title": "Software jurídico para abogados en Colombia | Digitallaws",
		"description": "Soluciones tecnológicas para abogados y organizaciones: gestión de expedientes digitales, automatización de procesos y comunicaciones electrónicas."
	},
	"/seguridad": {
		"title": "Seguridad de nuestras plataformas | Digitallaws",
		"description": "Conoce el enfoque de Digitallaws para la seguridad, protección de la información y respaldo de sus plataformas de software empresarial."
	},
	"/pqrs": {
		"title": "Peticiones, quejas, reclamos y sugerencias | Digitallaws",
		"description": "Canal de atención de Digitallaws para peticiones, quejas, reclamos y sugerencias relacionadas con nuestros servicios y plataformas."
	},
	"/privacidad": {
		"title": "Política de privacidad | Digitallaws",
		"description": "Consulta cómo Digitallaws trata los datos personales y conoce la información sobre privacidad y los canales de atención a los titulares."
	},
	"/terminos": {
		"title": "Términos y condiciones | Digitallaws",
		"description": "Consulta las condiciones de acceso y uso del sitio web y las plataformas corporativas de Digitallaws."
	},
	"/cookies": {
		"title": "Política de cookies | Digitallaws",
		"description": "Información sobre el uso de cookies en el sitio de Digitallaws y las opciones disponibles para su administración."
	}
};
var site_default = {
	url: "https://www.digitallaws.co",
	name: "Digitallaws"
};
function Seo() {
	const { pathname } = useLocation();
	useEffect(() => {
		const path = pathname.replace(/\/+$/, "") || "/";
		const page = pages_default[path];
		const title = page?.title ?? "Página no encontrada | Digitallaws";
		const description = page?.description ?? "La página solicitada no existe. Explora las soluciones de software de Digitallaws.";
		document.title = title;
		document.documentElement.lang = "es-CO";
		function meta(attribute, key, content) {
			let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
			if (!element) {
				element = document.createElement("meta");
				element.setAttribute(attribute, key);
				document.head.append(element);
			}
			element.content = content;
		}
		meta("name", "description", description);
		meta("name", "robots", page ? "index, follow" : "noindex, follow");
		meta("property", "og:title", title);
		meta("property", "og:description", description);
		meta("property", "og:type", "website");
		meta("property", "og:site_name", site_default.name);
		meta("property", "og:locale", "es_CO");
		meta("name", "twitter:card", "summary");
		meta("name", "twitter:title", title);
		meta("name", "twitter:description", description);
		document.head.querySelector("link[rel=\"canonical\"]")?.remove();
		document.head.querySelector("meta[property=\"og:url\"]")?.remove();
		if (page) {
			const canonical = document.createElement("link");
			canonical.rel = "canonical";
			canonical.href = `${site_default.url}${path}`;
			document.head.append(canonical);
			meta("property", "og:url", canonical.href);
		}
		document.getElementById("organization-schema")?.remove();
		if (page) {
			const schema = document.createElement("script");
			schema.id = "organization-schema";
			schema.type = "application/ld+json";
			schema.textContent = JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				"@id": `${site_default.url}/#organization`,
				name: site_default.name,
				url: `${site_default.url}/`,
				description: "Empresa colombiana de desarrollo de software a medida e integración de sistemas. Desarrolladora de DIMAIL y aliada tecnológica de ALFAMENSAJES."
			});
			document.head.append(schema);
		}
	}, [pathname]);
	return null;
}
function SiteLayout() {
	const scrollRef = useRef(null);
	const { pathname, hash } = useLocation();
	useEffect(() => {
		const container = scrollRef.current;
		if (!container) return;
		if (hash) {
			const el = container.querySelector(hash);
			if (el instanceof HTMLElement) {
				el.scrollIntoView({ behavior: "smooth" });
				return;
			}
		}
		container.scrollTo({
			top: 0,
			behavior: "auto"
		});
	}, [pathname, hash]);
	return /* @__PURE__ */ jsxs(ThemeProvider, { children: [/* @__PURE__ */ jsx(Seo, {}), /* @__PURE__ */ jsxs("div", {
		className: "h-svh overflow-hidden bg-canvas text-text",
		children: [/* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsxs("main", {
			ref: scrollRef,
			className: "snap-container mt-20",
			children: [/* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(Footer, {})]
		})]
	})] });
}
var DigitalLaws_Ecosistema_default = "/assets/DigitalLaws_Ecosistema-BGzSb-Jz.svg";
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		id: "inicio",
		className: "hero-bg relative w-full overflow-hidden border-b border-border py-16 lg:py-20",
		children: [/* @__PURE__ */ jsx("div", {
			"aria-hidden": true,
			className: "hero-ambient"
		}), /* @__PURE__ */ jsx("div", {
			className: "relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 md:px-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-7 lg:col-span-6",
					children: [
						/* @__PURE__ */ jsxs("span", {
							className: "inline-flex w-fit items-center gap-2 rounded-full border border-brand/25 bg-brand-tint px-3 py-1.5",
							children: [/* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-brand" }), /* @__PURE__ */ jsx("span", {
								className: "text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-brand",
								children: "Creadores de Productos Digitales"
							})]
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-text md:text-6xl lg:text-[4rem]",
							children: "Software a medida para empresas e instituciones."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "max-w-lg text-lg leading-relaxed text-text-muted",
							children: "Somos Digitallaws, una empresa colombiana de desarrollo de software e integración de sistemas. Creamos soluciones para el sector jurídico, empresas y entidades públicas que buscan automatizar sus procesos."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-center gap-3 pt-1",
							children: [/* @__PURE__ */ jsxs("a", {
								href: "#productos",
								className: "btn-primary inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold shadow-lg shadow-brand/25",
								children: [/* @__PURE__ */ jsx("span", { children: "Explorar productos" }), /* @__PURE__ */ jsx("span", {
									className: "material-symbols-outlined text-base",
									children: "arrow_forward"
								})]
							}), /* @__PURE__ */ jsx("a", {
								href: "#nosotros",
								className: "inline-flex items-center justify-center rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-text-muted transition-colors hover:bg-surface-low hover:text-text",
								children: "Conócenos"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-center gap-x-3 gap-y-1 pt-2 text-sm font-medium text-text-subtle",
							children: [
								/* @__PURE__ */ jsx("span", { children: "Productos propios" }),
								/* @__PURE__ */ jsx("span", {
									className: "text-brand/60",
									children: "·"
								}),
								/* @__PURE__ */ jsx("span", { children: "Alianzas estratégicas" }),
								/* @__PURE__ */ jsx("span", {
									className: "text-brand/60",
									children: "·"
								}),
								/* @__PURE__ */ jsx("span", { children: "Nuevos desarrollos" })
							]
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "relative lg:col-span-6",
					children: /* @__PURE__ */ jsx("img", {
						src: DigitalLaws_Ecosistema_default,
						alt: "Ecosistema de productos DigitalLaws: DIMAIL, DIMAIL Marketing, LegalEnvios y futuras plataformas, con AlfaMensajes como socio tecnológico",
						className: "mx-auto h-auto w-full max-w-2xl drop-shadow-2xl",
						loading: "eager"
					})
				})]
			})
		})]
	});
}
var pillars$1 = [
	{
		icon: "layers",
		title: "Creación de Productos Propios",
		desc: "Software propietario diseñado para resolver desafíos concretos, concebido desde el entendimiento exhaustivo de las operaciones de negocio contemporáneas.",
		tag: "Soluciones nativas"
	},
	{
		icon: "balance",
		title: "Experiencia y Solidez",
		desc: "Acompañamiento continuo y evolución sostenida de nuestras plataformas, asegurando disponibilidad, mantenimiento preventivo y servicio de excelencia.",
		tag: "Respaldo total"
	},
	{
		icon: "all_inclusive",
		title: "Visión a Largo Plazo",
		desc: "Construcción de un ecosistema digital conectado y escalable, capaz de acompañar el crecimiento y expansión de nuestros clientes corporativos de forma transparente.",
		tag: "Escalabilidad sostenida"
	}
];
function About() {
	return /* @__PURE__ */ jsx("section", {
		id: "nosotros",
		className: "w-full border-b border-border bg-surface-low py-16 lg:py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-7xl flex-col gap-12 px-5 md:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 items-end gap-6 lg:grid-cols-12",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-3 lg:col-span-8",
					children: [
						/* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-brand",
							children: [/* @__PURE__ */ jsx("span", {
								className: "material-symbols-outlined text-base",
								children: "corporate_fare"
							}), "Presentación Institucional"]
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "font-display text-3xl font-bold tracking-tight text-text md:text-4xl",
							children: "Innovación con propósito y visión sostenible."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "max-w-3xl text-lg leading-relaxed text-text-muted",
							children: "Digitallaws desarrolla software a medida, aplicaciones empresariales e integraciones API para facilitar la gestión documental y las comunicaciones electrónicas. Somos desarrolladores de DIMAIL y aliados tecnológicos de ALFAMENSAJES, conectando ingeniería de software con las necesidades de cada organización."
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "flex lg:col-span-4 lg:justify-end",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 rounded-xl border border-border bg-surface px-6 py-4 shadow-sm",
						children: [/* @__PURE__ */ jsx("span", {
							className: "material-symbols-outlined text-3xl text-brand",
							children: "verified_user"
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-sm font-bold text-text",
								children: "Confianza y Solidez"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-xs text-text-subtle",
								children: "Compromiso empresarial constante"
							})]
						})]
					})
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 gap-6 md:grid-cols-3",
				children: pillars$1.map((p) => /* @__PURE__ */ jsxs("article", {
					className: "flex flex-col justify-between gap-6 rounded-2xl border border-border bg-surface p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "flex h-14 w-14 items-center justify-center rounded-xl border border-brand/15 bg-brand-tint text-brand",
								children: /* @__PURE__ */ jsx("span", {
									className: "material-symbols-outlined text-3xl",
									children: p.icon
								})
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "font-display text-xl font-bold text-text",
								children: p.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm leading-relaxed text-text-muted",
								children: p.desc
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2 text-sm font-semibold text-brand",
						children: [/* @__PURE__ */ jsx("span", { children: p.tag }), /* @__PURE__ */ jsx("span", {
							className: "material-symbols-outlined text-base",
							children: "check"
						})]
					})]
				}, p.title))
			})]
		})
	});
}
var producto_dimail_default = "/assets/producto-dimail-DfLdV10j.png";
var producto_legalenvios_default = "/assets/producto-legalenvios-DI3y5Lfu.png";
var statusStyles = {
	available: "bg-brand-tint text-brand border-brand/25",
	development: "bg-[color:var(--color-warning)]/12 text-[color:var(--color-warning)] border-[color:var(--color-warning)]/30",
	soon: "bg-[color:var(--color-info)]/12 text-[color:var(--color-info)] border-[color:var(--color-info)]/30",
	expansion: "bg-surface-low text-text-muted border-border"
};
var products = [
	{
		icon: "mail",
		name: "DIMAIL",
		category: "Comunicaciones & Notificaciones",
		status: "available",
		statusLabel: "Solución Disponible",
		image: producto_dimail_default,
		caption: {
			icon: "verified",
			text: "Certificación con validez probatoria"
		},
		desc: "Plataforma especializada en comunicaciones y notificaciones empresariales, con soluciones digitales y físicas, seguimiento de envíos y certificación legal.",
		features: ["Trazabilidad completa de envíos físicos y electrónicos", "Acreditación legal y constancia de recepción fehaciente"],
		cta: {
			label: "Visitar DIMAIL",
			icon: "arrow_outward",
			primary: true,
			href: "https://dimail.co"
		}
	},
	{
		icon: "campaign",
		name: "DIMAIL Marketing",
		category: "Campañas & Multicanalidad",
		status: "development",
		statusLabel: "En desarrollo activo",
		pulse: true,
		caption: {
			icon: "groups",
			text: "Segmentación de audiencias y fidelización"
		},
		desc: "Plataforma de marketing y comunicaciones empresariales, orientada a campañas, gestión de contactos y comunicación multicanal.",
		features: ["Envío masivo coordinado de alta entregabilidad", "Métricas de interacción y análisis de respuesta en tiempo real"],
		cta: {
			label: "Más información",
			icon: "info",
			primary: false
		}
	},
	{
		icon: "gavel",
		name: "LegalEnvios",
		category: "Gestión Legal & Entregas Certificadas",
		status: "available",
		statusLabel: "Solución Disponible",
		image: producto_legalenvios_default,
		caption: {
			icon: "lock",
			text: "Custodia documental bajo protocolo legal"
		},
		desc: "Solución confiable de envíos certificados y gestión legal digital corporativa, estructurada para dar certeza jurídica a notificaciones críticas.",
		features: ["Fehaciencia en actos de notificación institucional", "Archivo inmutable de evidencias y acuses de recibo"],
		cta: {
			label: "Visitar LegalEnvios",
			icon: "arrow_outward",
			primary: true,
			href: "https://legalenvios.up.railway.app/"
		}
	},
	{
		icon: "rocket_launch",
		name: "Nuevas Soluciones en Camino",
		category: "Evolución e Innovación Constante",
		status: "expansion",
		statusLabel: "Portafolio en Expansión",
		caption: {
			icon: "lightbulb",
			text: "Innovación focalizada en necesidades corporativas"
		},
		desc: "Digitallaws continúa concibiendo y desarrollando nuevos productos para ampliar nuestro portafolio, brindando herramientas modernas que potencian la competitividad empresarial.",
		features: ["Investigación aplicada a retos de negocio reales", "Roadmap orientado a escalabilidad y valor sostenido"],
		cta: {
			label: "Propón tu proyecto",
			icon: "arrow_forward",
			primary: false
		}
	}
];
function Products() {
	return /* @__PURE__ */ jsx("section", {
		id: "productos",
		className: "w-full border-b border-border bg-surface py-16 lg:py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-7xl flex-col gap-12 px-5 md:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mx-auto flex max-w-2xl flex-col gap-3 text-center",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-brand",
						children: "Catálogo Ejecutivo de Soluciones"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "font-display text-3xl font-bold tracking-tight text-text md:text-4xl",
						children: "Nuestros Productos"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-lg leading-relaxed text-text-muted",
						children: "Plataformas digitales diseñadas para optimizar la comunicación, garantizar la validez legal y potenciar el rendimiento comercial de su organización."
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 gap-6 md:grid-cols-2",
				children: products.map((p) => /* @__PURE__ */ jsx(ProductCard, { product: p }, p.name))
			})]
		})
	});
}
function ProductCard({ product: p }) {
	const ctaClass = p.cta.primary ? "btn-primary inline-flex w-fit items-center gap-1.5 rounded-lg px-5 py-2.5 text-sm font-semibold shadow-md shadow-brand/20" : "inline-flex w-fit items-center gap-1.5 rounded-lg border border-border bg-surface-low px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:bg-surface-high";
	const external = Boolean(p.cta.href);
	return /* @__PURE__ */ jsxs("article", {
		className: "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-xl",
		children: [
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -right-8 -top-8 h-44 w-44 rounded-full bg-brand-tint blur-2xl"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 flex flex-col gap-6",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-md",
								children: /* @__PURE__ */ jsx("span", {
									className: "material-symbols-outlined text-xl",
									children: p.icon
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-display text-xl font-bold text-text",
									children: p.name
								}), /* @__PURE__ */ jsx("span", {
									className: "text-xs font-semibold text-brand",
									children: p.category
								})]
							})]
						}), /* @__PURE__ */ jsxs("span", {
							className: `inline-flex shrink-0 items-center gap-1.5 rounded-md border px-2.5 py-1 text-[0.6875rem] font-semibold ${statusStyles[p.status]}`,
							children: [p.pulse && /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-current" }), p.statusLabel]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "relative flex h-44 items-end overflow-hidden rounded-xl border border-border bg-slate-900 shadow-inner",
						children: [p.image ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("img", {
							src: p.image,
							alt: `Portada de ${p.name}`,
							className: "absolute inset-0 h-full w-full object-cover object-top",
							loading: "lazy"
						}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" })] }) : /* @__PURE__ */ jsx("div", {
							"aria-hidden": true,
							className: "absolute inset-0 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(37,99,235,0.35)_0%,transparent_55%)]"
						}), /* @__PURE__ */ jsxs("div", {
							className: "relative z-10 flex items-center gap-2 p-4",
							children: [/* @__PURE__ */ jsx("span", {
								className: "material-symbols-outlined text-base text-brand-400",
								children: p.caption.icon
							}), /* @__PURE__ */ jsx("span", {
								className: "text-sm font-medium text-white",
								children: p.caption.text
							})]
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm leading-relaxed text-text-muted",
						children: p.desc
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "flex flex-col gap-2",
						children: p.features.map((f) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-2 text-sm text-text-muted",
							children: [/* @__PURE__ */ jsx("span", {
								className: "material-symbols-outlined mt-0.5 text-base text-brand",
								children: "check_circle"
							}), f]
						}, f))
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "relative z-10 pt-6",
				children: /* @__PURE__ */ jsxs("a", {
					href: p.cta.href ?? "#contacto",
					...external ? {
						target: "_blank",
						rel: "noopener noreferrer"
					} : {},
					className: ctaClass,
					children: [/* @__PURE__ */ jsx("span", { children: p.cta.label }), /* @__PURE__ */ jsx("span", {
						className: "material-symbols-outlined text-base",
						children: p.cta.icon
					})]
				})
			})
		]
	});
}
var points = [{
	icon: "integration_instructions",
	title: "Integración Comercial Robusta",
	desc: "Trazabilidad de la mensajería coordinada en múltiples canales corporativos."
}, {
	icon: "handshake",
	title: "Relaciones Comerciales Consolidadas",
	desc: "Acompañamiento tecnológico y continuidad operativa garantizada."
}];
function Partners() {
	return /* @__PURE__ */ jsx("section", {
		id: "alianzas",
		className: "w-full border-b border-border bg-surface-low py-16 lg:py-24",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8",
			children: /* @__PURE__ */ jsx("div", {
				className: "rounded-3xl border border-border bg-surface p-8 shadow-sm lg:p-12",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 items-center gap-10 lg:grid-cols-12",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-6 lg:col-span-8",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-brand",
								children: [/* @__PURE__ */ jsx("span", {
									className: "material-symbols-outlined text-base",
									children: "hub"
								}), "Alianzas Estratégicas"]
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "font-display text-3xl font-bold tracking-tight text-text md:text-4xl",
								children: "Socio Tecnológico de AlfaMensajes"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "max-w-2xl text-lg leading-relaxed text-text-muted",
								children: "Colaboramos estrechamente potenciando soluciones de mensajería empresarial e integración digital para el mercado corporativo. Nuestra sinergia consolida productos estables, escalables y con respaldo operativo de primer nivel."
							}),
							/* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2",
								children: points.map((p) => /* @__PURE__ */ jsxs("div", {
									className: "flex gap-3 rounded-xl border border-border bg-surface-low p-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-brand",
										children: /* @__PURE__ */ jsx("span", {
											className: "material-symbols-outlined text-xl",
											children: p.icon
										})
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex flex-col gap-1",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-sm font-bold text-text",
											children: p.title
										}), /* @__PURE__ */ jsx("span", {
											className: "text-xs leading-relaxed text-text-subtle",
											children: p.desc
										})]
									})]
								}, p.title))
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg:col-span-4",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface-high/50 p-8 text-center",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white shadow-md",
									children: /* @__PURE__ */ jsx("span", {
										className: "material-symbols-outlined text-3xl",
										children: "swap_horiz"
									})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-col gap-1",
									children: [/* @__PURE__ */ jsx("span", {
										className: "font-display text-lg font-bold text-text",
										children: "AlfaMensajes & Digitallaws"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-xs text-text-subtle",
										children: "Sinergia Tecnológica Corporativa"
									})]
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1.5 rounded-full border border-brand/25 bg-brand-tint px-3 py-1 text-[0.6875rem] font-semibold text-brand",
									children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-brand" }), "Alianza Estratégica Activa"]
								})
							]
						})
					})]
				})
			})
		})
	});
}
var cards = [
	{
		icon: "shield",
		title: "Protección de Datos",
		desc: "Salvaguarda exhaustiva de la información sensible corporativa, aplicando estándares modernos de almacenamiento seguro y resguardo de la información."
	},
	{
		icon: "admin_panel_settings",
		title: "Privacidad Corporativa",
		desc: "Políticas estrictas de confidencialidad y tratamiento ético en la gestión de bases de contactos, notificaciones y comunicaciones comerciales."
	},
	{
		icon: "verified_user",
		title: "Confiabilidad Continua",
		desc: "Disponibilidad e interrupción y soporte corporativo calificado para garantizar que cada entrega, mensaje y proceso se ejecute sin contratiempos."
	}
];
function Security() {
	return /* @__PURE__ */ jsx("section", {
		id: "seguridad",
		className: "w-full border-b border-border bg-surface py-16 lg:py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-7xl flex-col gap-12 px-5 md:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mx-auto flex max-w-3xl flex-col gap-3 text-center",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-brand",
						children: "Seguridad y Respaldo"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "font-display text-3xl font-bold tracking-tight text-text md:text-4xl",
						children: "La confianza de nuestros clientes es el pilar de cada producto que desarrollamos."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-lg leading-relaxed text-text-muted",
						children: "Establecemos criterios rigurosos de protección y calidad que aseguran la máxima integridad en las operaciones de su empresa."
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 gap-6 md:grid-cols-3",
				children: cards.map((c) => /* @__PURE__ */ jsxs("article", {
					className: "flex flex-col gap-4 rounded-2xl border border-border bg-surface-low p-8 transition-all hover:-translate-y-0.5 hover:shadow-md",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "flex h-12 w-12 items-center justify-center rounded-xl border border-brand/15 bg-brand-tint text-brand",
							children: /* @__PURE__ */ jsx("span", {
								className: "material-symbols-outlined text-2xl",
								children: c.icon
							})
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "font-display text-xl font-bold text-text",
							children: c.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm leading-relaxed text-text-muted",
							children: c.desc
						})
					]
				}, c.title))
			})]
		})
	});
}
function ContactCTA() {
	return /* @__PURE__ */ jsx("section", {
		id: "contacto",
		className: "w-full bg-surface-low py-16 lg:py-24",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-5xl px-5 md:px-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl border border-border bg-surface p-10 text-center shadow-sm lg:p-16",
				children: [
					/* @__PURE__ */ jsx("div", {
						"aria-hidden": true,
						className: "hero-ambient"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/30",
						children: /* @__PURE__ */ jsx("span", {
							className: "material-symbols-outlined text-3xl",
							children: "forum"
						})
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "relative z-10 max-w-2xl font-display text-3xl font-bold tracking-tight text-text md:text-4xl",
						children: "El próximo gran proyecto comienza con una conversación."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "relative z-10 max-w-xl text-lg leading-relaxed text-text-muted",
						children: "Permítanos mostrarle cómo nuestras soluciones digitales pueden transformar y fortalecer las comunicaciones y operaciones de su organización."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "relative z-10 flex flex-col items-center gap-3 pt-2 sm:flex-row",
						children: [/* @__PURE__ */ jsxs("a", {
							href: "https://wa.me/573243555142",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "btn-primary inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold shadow-lg shadow-brand/25",
							children: [/* @__PURE__ */ jsx("span", { children: "Hablemos de tu proyecto" }), /* @__PURE__ */ jsx("span", {
								className: "material-symbols-outlined text-base",
								children: "arrow_forward"
							})]
						}), /* @__PURE__ */ jsxs("a", {
							href: "mailto:contacto@digitalalws.com",
							className: "inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-text-muted transition-colors hover:bg-surface-high hover:text-text",
							children: [/* @__PURE__ */ jsx("span", {
								className: "material-symbols-outlined text-base",
								children: "mail"
							}), "contacto@digitalalws.com"]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "relative z-10 flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-text-subtle",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ jsx("span", {
								className: "material-symbols-outlined text-base text-brand",
								children: "check"
							}), "Atención comercial dedicada"]
						}), /* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ jsx("span", {
								className: "material-symbols-outlined text-base text-brand",
								children: "check"
							}), "Asesoría personalizada"]
						})]
					})
				]
			})
		})
	});
}
const services = [
	{
		path: "/desarrollo-software",
		title: "Desarrollo de software a medida",
		intro: "Diseñamos aplicaciones web y sistemas de información para empresas y entidades públicas en Colombia. Partimos de tus procesos para definir una solución que acompañe la operación y el crecimiento de tu organización.",
		heading: "Software que responde a tu operación",
		paragraphs: ["Un desarrollo a medida permite organizar flujos de trabajo, centralizar información y reducir tareas manuales. El proyecto puede abarcar una aplicación empresarial, una plataforma digital o la modernización de un sistema existente.", "Antes de construir, revisamos los usuarios, las fuentes de datos y las integraciones necesarias. Con esa información definimos el alcance, las prioridades y los criterios de aceptación junto con tu equipo."],
		items: [
			"Aplicaciones web para equipos y clientes",
			"Automatización de procesos y gestión documental",
			"Conexión con sistemas existentes mediante API"
		],
		question: "¿Qué necesitamos para conversar sobre tu proyecto?",
		answer: "Cuéntanos qué proceso quieres mejorar, quiénes lo utilizan y qué herramientas emplean hoy. Podemos revisar si conviene desarrollar una solución específica o integrar las plataformas disponibles."
	},
	{
		path: "/integraciones-api",
		title: "Integración API y sistemas empresariales",
		intro: "Conectamos aplicaciones y sistemas de información para que tus equipos trabajen con datos coordinados. Las integraciones API ayudan a automatizar intercambios entre plataformas y reducir la duplicación de tareas.",
		heading: "Conecta tus plataformas con un alcance definido",
		paragraphs: ["Una integración puede conectar tu software empresarial con plataformas de comunicaciones, gestión documental o herramientas internas. Revisamos qué información debe intercambiarse, en qué dirección y con qué frecuencia.", "La viabilidad depende de las API disponibles, sus permisos y las condiciones de cada proveedor. El diseño debe contemplar autenticación, validación de datos y manejo de errores para que el intercambio sea controlado y trazable."],
		items: [
			"Integración de sistemas mediante API REST",
			"Automatización del intercambio de información",
			"Conexión de plataformas empresariales y comunicaciones"
		],
		question: "¿Se puede integrar mi sistema actual?",
		answer: "El primer paso es revisar su documentación técnica y los mecanismos de acceso que ofrece. Comparte qué plataformas necesitas conectar y qué proceso quieres automatizar para evaluar el alcance."
	},
	{
		path: "/software-juridico",
		title: "Software jurídico para abogados y organizaciones",
		intro: "Desarrollamos soluciones tecnológicas para organizar información jurídica, expedientes digitales y comunicaciones. Acompañamos a bufetes de abogados y organizaciones que buscan automatizar sus procesos de trabajo.",
		heading: "Tecnología para la gestión de información jurídica",
		paragraphs: ["Cada equipo jurídico tiene necesidades distintas de consulta, organización documental y seguimiento. El desarrollo de software a medida permite definir flujos de trabajo y permisos de acceso según la operación de la organización.", "Digitallaws es la desarrolladora de DIMAIL, una plataforma especializada en comunicaciones y notificaciones. Distinguimos el desarrollo tecnológico de los servicios de mensajería física de nuestro aliado ALFAMENSAJES, para identificar la solución adecuada en cada caso."],
		items: [
			"Organización de expedientes y documentos digitales",
			"Automatización de procesos de equipos jurídicos",
			"Integración de comunicaciones y seguimiento de envíos"
		],
		question: "¿Cómo se define una solución para mi equipo jurídico?",
		answer: "Revisamos los procesos que deseas digitalizar, el volumen de información y las herramientas actuales. Así podemos delimitar un desarrollo a medida o evaluar una plataforma del portafolio según tus necesidades."
	}
];
function ServiceLinks() {
	return /* @__PURE__ */ jsx("section", {
		id: "servicios",
		className: "border-b border-border bg-surface py-16 lg:py-20",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "font-display text-3xl font-bold text-text md:text-4xl",
				children: "Software e integración tecnológica para tu organización"
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-8 grid gap-6 md:grid-cols-3",
				children: services.map((service) => /* @__PURE__ */ jsxs("article", {
					className: "rounded-2xl border border-border bg-surface-low p-6",
					children: [
						/* @__PURE__ */ jsx("h3", {
							className: "font-display text-xl font-bold text-text",
							children: /* @__PURE__ */ jsx(Link, {
								to: service.path,
								className: "hover:text-brand",
								children: service.title
							})
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-sm leading-relaxed text-text-muted",
							children: service.intro
						}),
						/* @__PURE__ */ jsx(Link, {
							to: service.path,
							className: "mt-5 inline-block font-semibold text-brand hover:underline",
							children: "Conocer el servicio"
						})
					]
				}, service.path))
			})]
		})
	});
}
function HomePage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Hero, {}),
		/* @__PURE__ */ jsx(About, {}),
		/* @__PURE__ */ jsx(ServiceLinks, {}),
		/* @__PURE__ */ jsx(Products, {}),
		/* @__PURE__ */ jsx(Partners, {}),
		/* @__PURE__ */ jsx(Security, {}),
		/* @__PURE__ */ jsx(ContactCTA, {})
	] });
}
var metrics = [
	{
		value: "100%",
		label: "IP & Software Propio",
		accent: true
	},
	{
		value: "Alta",
		label: "Tasa de Entrega",
		accent: true
	},
	{
		value: "Digital + Física",
		label: "Comunicación Multicanal"
	},
	{
		value: "Continuo",
		label: "Acompañamiento",
		accent: true
	}
];
var dimailFeatures = [
	{
		icon: "dynamic_feed",
		title: "Gestión Multicanal",
		desc: "Email certificado, SMS prioritario y entrega física coordinada con acuse de recibo."
	},
	{
		icon: "verified_user",
		title: "Certificación Legal",
		desc: "Respaldo probatorio pleno y constancias verificables criptográficamente."
	},
	{
		icon: "sync_alt",
		title: "Integración Fácil",
		desc: "Conexión ágil vía API y conectores nativos para ERP, CRM y sistemas de cobro."
	}
];
function ProductsPage() {
	return /* @__PURE__ */ jsxs("div", {
		className: "w-full",
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "hero-bg relative w-full overflow-hidden border-b border-border py-16 lg:py-20",
				children: [/* @__PURE__ */ jsx("div", {
					"aria-hidden": true,
					className: "hero-ambient"
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative z-10 mx-auto max-w-4xl px-5 text-center md:px-8",
					children: [
						/* @__PURE__ */ jsxs("span", {
							className: "mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-brand/25 bg-brand-tint px-3 py-1.5",
							children: [/* @__PURE__ */ jsx("span", { className: "h-2 w-2 animate-pulse rounded-full bg-brand" }), /* @__PURE__ */ jsx("span", {
								className: "text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-brand",
								children: "Portafolio Corporativo de Software"
							})]
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "mt-4 font-display text-4xl font-extrabold tracking-tight text-text md:text-5xl",
							children: [
								"Plataformas y productos de software para",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-brand",
									children: "impulsar tu empresa"
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-text-muted",
							children: "Desarrollamos soluciones digitales propias que simplifican la operación, aseguran las comunicaciones corporativas y abren nuevas posibilidades de negocio."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4",
							children: metrics.map((m) => /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col items-center rounded-xl border border-border bg-surface p-4 text-center shadow-sm transition-shadow hover:shadow-md",
								children: [/* @__PURE__ */ jsx("span", {
									className: `font-display text-2xl font-bold ${m.accent ? "text-brand" : "text-text"}`,
									children: m.value
								}), /* @__PURE__ */ jsx("span", {
									className: "mt-1 text-xs font-medium text-text-subtle",
									children: m.label
								})]
							}, m.label))
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "w-full border-b border-border bg-surface py-16 lg:py-20",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-7xl px-5 md:px-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "relative overflow-hidden rounded-3xl border border-border bg-surface-low p-8 shadow-sm lg:p-12",
						children: [/* @__PURE__ */ jsx("div", {
							"aria-hidden": true,
							className: "pointer-events-none absolute -right-10 -top-10 h-80 w-80 rounded-full bg-brand-tint blur-3xl"
						}), /* @__PURE__ */ jsxs("div", {
							className: "relative z-10 flex flex-col items-start gap-8 lg:flex-row lg:items-center",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex w-full flex-col gap-5 lg:w-7/12",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-wrap items-center gap-2",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "inline-flex items-center gap-1.5 rounded-full border border-brand/25 bg-brand-tint px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wide text-brand",
											children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 animate-ping rounded-full bg-brand" }), "Disponible y en producción"]
										}), /* @__PURE__ */ jsx("span", {
											className: "rounded-full border border-border bg-surface px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wide text-text-muted",
											children: "Producto insignia"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex h-14 w-14 items-center justify-center rounded-xl bg-brand text-white shadow-md",
											children: /* @__PURE__ */ jsx("span", {
												className: "material-symbols-outlined text-3xl",
												children: "mark_email_read"
											})
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
											className: "font-display text-3xl font-bold text-text",
											children: "DIMAIL"
										}), /* @__PURE__ */ jsx("p", {
											className: "text-sm font-medium text-brand",
											children: "Comunicaciones y notificaciones con plena validez"
										})] })]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-base leading-relaxed text-text-muted",
										children: "Plataforma especializada en comunicaciones y notificaciones empresariales. Combina entrega digital y física, seguimiento trazable en tiempo real y certificación de comunicaciones para entidades financieras, legales y corporativas."
									}),
									/* @__PURE__ */ jsx("div", {
										className: "grid grid-cols-1 gap-4 pt-1 md:grid-cols-3",
										children: dimailFeatures.map((f) => /* @__PURE__ */ jsxs("div", {
											className: "flex flex-col gap-2 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-brand/40",
											children: [
												/* @__PURE__ */ jsx("div", {
													className: "flex h-9 w-9 items-center justify-center rounded-lg bg-brand-tint text-brand",
													children: /* @__PURE__ */ jsx("span", {
														className: "material-symbols-outlined text-xl",
														children: f.icon
													})
												}),
												/* @__PURE__ */ jsx("h3", {
													className: "text-sm font-bold text-text",
													children: f.title
												}),
												/* @__PURE__ */ jsx("p", {
													className: "text-xs leading-relaxed text-text-muted",
													children: f.desc
												})
											]
										}, f.title))
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-wrap items-center gap-3 pt-2",
										children: [/* @__PURE__ */ jsxs("a", {
											href: "https://dimail.co",
											target: "_blank",
											rel: "noopener noreferrer",
											className: "btn-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold shadow-lg shadow-brand/25",
											children: [/* @__PURE__ */ jsx("span", { children: "Explorar DIMAIL" }), /* @__PURE__ */ jsx("span", {
												className: "material-symbols-outlined text-base",
												children: "arrow_outward"
											})]
										}), /* @__PURE__ */ jsxs(Link, {
											to: "/#contacto",
											className: "inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-text transition-colors hover:bg-surface-high",
											children: [/* @__PURE__ */ jsx("span", {
												className: "material-symbols-outlined text-base",
												children: "calendar_today"
											}), "Solicitar demostración"]
										})]
									})
								]
							}), /* @__PURE__ */ jsx("div", {
								className: "w-full lg:w-5/12",
								children: /* @__PURE__ */ jsxs("div", {
									className: "rounded-2xl border border-border bg-surface p-5 shadow-xl",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "mb-4 flex items-center justify-between rounded-lg border border-border bg-surface-low px-3 py-2",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-1.5",
												children: [
													/* @__PURE__ */ jsx("span", { className: "h-3 w-3 rounded-full bg-rose-400" }),
													/* @__PURE__ */ jsx("span", { className: "h-3 w-3 rounded-full bg-amber-400" }),
													/* @__PURE__ */ jsx("span", { className: "h-3 w-3 rounded-full bg-emerald-400" })
												]
											}),
											/* @__PURE__ */ jsx("span", {
												className: "font-mono text-[0.6875rem] text-text-subtle",
												children: "dimail.co/panel"
											}),
											/* @__PURE__ */ jsx("span", {
												className: "material-symbols-outlined text-base text-brand",
												children: "lock"
											})
										]
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex flex-col gap-3",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ jsx("span", {
													className: "text-sm font-bold text-text",
													children: "Envío masivo certificado"
												}), /* @__PURE__ */ jsx("span", {
													className: "rounded border border-brand/20 bg-brand-tint px-2 py-0.5 text-[0.6875rem] font-semibold text-brand",
													children: "En tiempo real"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-center justify-between rounded-xl border border-border bg-surface-low p-4",
												children: [/* @__PURE__ */ jsxs("div", {
													className: "flex items-center gap-3",
													children: [/* @__PURE__ */ jsx("div", {
														className: "flex h-9 w-9 items-center justify-center rounded-lg bg-brand-tint text-brand",
														children: /* @__PURE__ */ jsx("span", {
															className: "material-symbols-outlined text-xl",
															children: "mark_email_read"
														})
													}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
														className: "text-sm font-semibold text-text",
														children: "Lote Notificaciones #9842"
													}), /* @__PURE__ */ jsx("div", {
														className: "text-xs text-text-subtle",
														children: "38.420 certificados emitidos"
													})] })]
												}), /* @__PURE__ */ jsx("span", {
													className: "font-display text-lg font-bold text-brand",
													children: "99.9%"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2 rounded-xl border border-border bg-surface-low p-4 text-sm text-text-muted",
												children: [/* @__PURE__ */ jsx("span", {
													className: "material-symbols-outlined text-base text-brand",
													children: "verified"
												}), "Constancia con validez probatoria generada"]
											})
										]
									})]
								})
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx(Products, {})
		]
	});
}
var highlights = [
	{
		icon: "verified_user",
		title: "SLA Legal Garantizado",
		desc: "Respuesta hasta 15 días hábiles según la normativa aplicable."
	},
	{
		icon: "fingerprint",
		title: "Trazabilidad Inmutable",
		desc: "Número único de radicado para el seguimiento de su caso."
	},
	{
		icon: "headset_mic",
		title: "Gestión Especializada",
		desc: "Atención directa por equipos técnicos y legales."
	}
];
var requestTypes = [
	"Petición (Derecho de Petición)",
	"Queja (Inconformidad con la atención)",
	"Reclamo (Deficiencia en servicio o plataforma)",
	"Sugerencia (Propuesta de mejora)"
];
var countries = [
	"Colombia",
	"México",
	"Chile",
	"Perú",
	"España",
	"Estados Unidos"
];
function genRadicado() {
	return `ALWS-PQRS-${(/* @__PURE__ */ new Date()).getFullYear()}-${Math.floor(1e3 + Math.random() * 9e3)}`;
}
function PqrsPage() {
	const [submitted, setSubmitted] = useState(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(genRadicado());
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "w-full",
		children: [/* @__PURE__ */ jsxs("section", {
			className: "hero-bg relative w-full overflow-hidden border-b border-border py-14 lg:py-16",
			children: [/* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: "hero-ambient"
			}), /* @__PURE__ */ jsxs("div", {
				className: "relative z-10 mx-auto max-w-4xl px-5 text-center md:px-8",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "mx-auto w-fit rounded-full border border-brand/25 bg-brand-tint px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-brand",
						children: "Atención y Servicio al Cliente"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-4 font-display text-3xl font-extrabold tracking-tight text-text md:text-4xl",
						children: "Peticiones, Quejas, Reclamos y Sugerencias"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-text-muted",
						children: "Garantizamos una atención oportuna, rigurosa y transparente a las solicitudes de nuestros usuarios, aliados y organizaciones."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3",
						children: highlights.map((h) => /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col items-center gap-2 rounded-xl border border-border bg-surface p-5 text-center shadow-sm",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "material-symbols-outlined text-2xl text-brand",
									children: h.icon
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-sm font-bold text-text",
									children: h.title
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-xs leading-relaxed text-text-subtle",
									children: h.desc
								})
							]
						}, h.title))
					})
				]
			})]
		}), /* @__PURE__ */ jsx("section", {
			className: "w-full bg-surface-low py-16 lg:py-20",
			children: /* @__PURE__ */ jsx("div", {
				className: "mx-auto max-w-3xl px-5 md:px-8",
				children: submitted ? /* @__PURE__ */ jsx(Confirmation, {
					radicado: submitted,
					onReset: () => setSubmitted(null)
				}) : /* @__PURE__ */ jsxs("form", {
					onSubmit: handleSubmit,
					className: "flex flex-col gap-8 rounded-2xl border border-border bg-surface p-6 shadow-sm md:p-8",
					children: [
						/* @__PURE__ */ jsxs("fieldset", {
							className: "flex flex-col gap-5",
							children: [/* @__PURE__ */ jsxs("legend", {
								className: "mb-2 flex items-center gap-2 font-display text-lg font-bold text-text",
								children: [/* @__PURE__ */ jsx("span", {
									className: "flex h-7 w-7 items-center justify-center rounded-full bg-brand text-sm text-white",
									children: "1"
								}), "Datos de identificación"]
							}), /* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ jsx(Field, {
										label: "Razón social / Nombre",
										name: "nombre",
										required: true
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "NIT / Documento",
										name: "documento",
										required: true
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "Correo electrónico",
										name: "correo",
										type: "email",
										required: true
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "Teléfono / WhatsApp",
										name: "telefono",
										type: "tel",
										required: true
									}),
									/* @__PURE__ */ jsx(Select, {
										label: "País",
										name: "pais",
										options: countries,
										required: true
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "Ciudad / Municipio",
										name: "ciudad",
										required: true
									})
								]
							})]
						}),
						/* @__PURE__ */ jsxs("fieldset", {
							className: "flex flex-col gap-5 border-t border-border pt-6",
							children: [
								/* @__PURE__ */ jsxs("legend", {
									className: "mb-2 flex items-center gap-2 font-display text-lg font-bold text-text",
									children: [/* @__PURE__ */ jsx("span", {
										className: "flex h-7 w-7 items-center justify-center rounded-full bg-brand text-sm text-white",
										children: "2"
									}), "Detalle del requerimiento"]
								}),
								/* @__PURE__ */ jsx(Select, {
									label: "Tipo de solicitud",
									name: "tipo",
									options: requestTypes,
									required: true
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-col gap-1.5",
									children: [/* @__PURE__ */ jsxs("label", {
										htmlFor: "detalle",
										className: "text-sm font-medium text-text",
										children: [
											"Descripción del caso",
											" ",
											/* @__PURE__ */ jsx("span", {
												className: "text-brand",
												children: "*"
											})
										]
									}), /* @__PURE__ */ jsx("textarea", {
										id: "detalle",
										name: "detalle",
										required: true,
										rows: 5,
										placeholder: "Describa su solicitud con el mayor detalle posible…",
										className: "rounded-lg border border-border bg-surface-low px-3 py-2.5 text-sm text-text outline-none transition-colors placeholder:text-text-subtle focus:border-brand focus:ring-2 focus:ring-brand/20"
									})]
								}),
								/* @__PURE__ */ jsxs("label", {
									className: "flex items-start gap-2 text-sm text-text-muted",
									children: [/* @__PURE__ */ jsx("input", {
										type: "checkbox",
										required: true,
										className: "mt-1 h-4 w-4 accent-[color:var(--color-brand)]"
									}), "Autorizo el tratamiento de mis datos conforme a la Política de Privacidad."]
								})
							]
						}),
						/* @__PURE__ */ jsxs("button", {
							type: "submit",
							className: "btn-primary inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold shadow-lg shadow-brand/25",
							children: [/* @__PURE__ */ jsx("span", { children: "Radicar solicitud" }), /* @__PURE__ */ jsx("span", {
								className: "material-symbols-outlined text-base",
								children: "send"
							})]
						})
					]
				})
			})
		})]
	});
}
function Confirmation({ radicado, onReset }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface p-10 text-center shadow-sm",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--color-success)]/15 text-[color:var(--color-success)]",
				children: /* @__PURE__ */ jsx("span", {
					className: "material-symbols-outlined text-4xl",
					children: "task_alt"
				})
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "font-display text-2xl font-bold text-text",
				children: "¡Solicitud radicada exitosamente!"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "max-w-md text-sm text-text-muted",
				children: "Su trámite ha sido registrado. Hemos enviado una constancia formal a su correo electrónico."
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-2 flex flex-col items-center gap-1 rounded-xl border border-brand/25 bg-brand-tint px-6 py-4",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-[0.6875rem] font-semibold uppercase tracking-wide text-brand",
					children: "Código de radicado oficial"
				}), /* @__PURE__ */ jsx("span", {
					className: "font-mono text-lg font-bold text-brand",
					children: radicado
				})]
			}),
			/* @__PURE__ */ jsxs("button", {
				onClick: onReset,
				className: "mt-2 inline-flex items-center gap-2 rounded-lg border border-border bg-surface-low px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:bg-surface-high",
				children: [/* @__PURE__ */ jsx("span", {
					className: "material-symbols-outlined text-base",
					children: "add"
				}), "Radicar otro requerimiento"]
			})
		]
	});
}
function Field({ label, name: name$1, type = "text", required = false }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-1.5",
		children: [/* @__PURE__ */ jsxs("label", {
			htmlFor: name$1,
			className: "text-sm font-medium text-text",
			children: [
				label,
				" ",
				required && /* @__PURE__ */ jsx("span", {
					className: "text-brand",
					children: "*"
				})
			]
		}), /* @__PURE__ */ jsx("input", {
			id: name$1,
			name: name$1,
			type,
			required,
			className: "rounded-lg border border-border bg-surface-low px-3 py-2.5 text-sm text-text outline-none transition-colors placeholder:text-text-subtle focus:border-brand focus:ring-2 focus:ring-brand/20"
		})]
	});
}
function Select({ label, name: name$1, options, required = false }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-1.5",
		children: [/* @__PURE__ */ jsxs("label", {
			htmlFor: name$1,
			className: "text-sm font-medium text-text",
			children: [
				label,
				" ",
				required && /* @__PURE__ */ jsx("span", {
					className: "text-brand",
					children: "*"
				})
			]
		}), /* @__PURE__ */ jsxs("select", {
			id: name$1,
			name: name$1,
			required,
			defaultValue: "",
			className: "rounded-lg border border-border bg-surface-low px-3 py-2.5 text-sm text-text outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20",
			children: [/* @__PURE__ */ jsx("option", {
				value: "",
				disabled: true,
				children: "Seleccione…"
			}), options.map((o) => /* @__PURE__ */ jsx("option", {
				value: o,
				children: o
			}, o))]
		})]
	});
}
var pillars = [
	{
		icon: "shield",
		title: "Protección de Datos",
		desc: "Salvaguarda exhaustiva de la información sensible corporativa, aplicando estándares modernos de almacenamiento seguro y resguardo de la información."
	},
	{
		icon: "admin_panel_settings",
		title: "Privacidad Corporativa",
		desc: "Políticas estrictas de confidencialidad y tratamiento ético en la gestión de bases de contactos, notificaciones y comunicaciones comerciales."
	},
	{
		icon: "verified_user",
		title: "Confiabilidad Continua",
		desc: "Disponibilidad sostenida y soporte corporativo calificado para garantizar que cada entrega, mensaje y proceso se ejecute sin contratiempos."
	}
];
var practices = [
	{
		icon: "encrypted",
		title: "Cifrado en tránsito y reposo",
		desc: "Las comunicaciones y los datos se protegen con cifrado estándar de la industria durante su transmisión y almacenamiento."
	},
	{
		icon: "fact_check",
		title: "Evidencia verificable",
		desc: "Cada notificación genera constancias y acuses con respaldo probatorio e integridad del mensaje."
	},
	{
		icon: "manage_accounts",
		title: "Control de accesos",
		desc: "Gestión de permisos por rol y trazabilidad de operaciones sobre las plataformas corporativas."
	},
	{
		icon: "backup",
		title: "Continuidad y respaldo",
		desc: "Procesos de respaldo y recuperación orientados a mantener la disponibilidad del servicio."
	}
];
function SecurityPage() {
	return /* @__PURE__ */ jsxs("div", {
		className: "w-full",
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "hero-bg relative w-full overflow-hidden border-b border-border py-16 lg:py-20",
				children: [/* @__PURE__ */ jsx("div", {
					"aria-hidden": true,
					className: "hero-ambient"
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative z-10 mx-auto max-w-4xl px-5 text-center md:px-8",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "mx-auto w-fit rounded-full border border-brand/25 bg-brand-tint px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-brand",
							children: "Seguridad y Respaldo"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "mt-4 font-display text-4xl font-extrabold tracking-tight text-text md:text-5xl",
							children: "La confianza de nuestros clientes es el pilar de cada producto."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-text-muted",
							children: "Establecemos criterios rigurosos de protección, privacidad y calidad que aseguran la máxima integridad en las operaciones de su empresa."
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "w-full border-b border-border bg-surface py-16 lg:py-20",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-5 md:grid-cols-3 md:px-8",
					children: pillars.map((p) => /* @__PURE__ */ jsxs("article", {
						className: "flex flex-col gap-4 rounded-2xl border border-border bg-surface-low p-8 transition-all hover:-translate-y-0.5 hover:shadow-md",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "flex h-12 w-12 items-center justify-center rounded-xl border border-brand/15 bg-brand-tint text-brand",
								children: /* @__PURE__ */ jsx("span", {
									className: "material-symbols-outlined text-2xl",
									children: p.icon
								})
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "font-display text-xl font-bold text-text",
								children: p.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm leading-relaxed text-text-muted",
								children: p.desc
							})
						]
					}, p.title))
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "w-full border-b border-border bg-surface-low py-16 lg:py-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto w-full max-w-7xl px-5 md:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mx-auto mb-10 flex max-w-2xl flex-col gap-3 text-center",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-brand",
							children: "Prácticas Operativas"
						}), /* @__PURE__ */ jsx("h2", {
							className: "font-display text-3xl font-bold tracking-tight text-text md:text-4xl",
							children: "Cómo protegemos su operación"
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 gap-6 sm:grid-cols-2",
						children: practices.map((p) => /* @__PURE__ */ jsxs("article", {
							className: "flex gap-4 rounded-2xl border border-border bg-surface p-6 shadow-sm",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-brand",
								children: /* @__PURE__ */ jsx("span", {
									className: "material-symbols-outlined text-xl",
									children: p.icon
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "font-display text-lg font-bold text-text",
									children: p.title
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm leading-relaxed text-text-muted",
									children: p.desc
								})]
							})]
						}, p.title))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "w-full bg-surface py-16 lg:py-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto w-full max-w-4xl px-5 text-center md:px-8",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "font-display text-2xl font-bold tracking-tight text-text md:text-3xl",
							children: "¿Quiere conocer nuestros estándares en detalle?"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-3 max-w-xl text-base text-text-muted",
							children: "Consulte nuestras políticas o escríbanos para una revisión conjunta de requisitos de seguridad y cumplimiento."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row",
							children: [/* @__PURE__ */ jsxs(Link, {
								to: "/privacidad",
								className: "inline-flex items-center gap-2 rounded-lg border border-border bg-surface-low px-6 py-3 text-sm font-semibold text-text transition-colors hover:bg-surface-high",
								children: [/* @__PURE__ */ jsx("span", {
									className: "material-symbols-outlined text-base",
									children: "policy"
								}), "Ver Política de Privacidad"]
							}), /* @__PURE__ */ jsxs(Link, {
								to: "/#contacto",
								className: "btn-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold shadow-lg shadow-brand/25",
								children: [/* @__PURE__ */ jsx("span", { children: "Hablemos de tu proyecto" }), /* @__PURE__ */ jsx("span", {
									className: "material-symbols-outlined text-base",
									children: "arrow_forward"
								})]
							})]
						})
					]
				})
			})
		]
	});
}
function LegalDoc({ badge, title, intro, updated, sections: sections$3 }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "hero-bg relative w-full",
		children: [/* @__PURE__ */ jsx("div", {
			"aria-hidden": true,
			className: "hero-ambient"
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 mx-auto max-w-4xl px-5 py-16 md:px-8 lg:py-20",
			children: [
				/* @__PURE__ */ jsxs("nav", {
					className: "mb-6 flex items-center gap-1.5 text-sm text-text-subtle",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/",
							className: "transition-colors hover:text-brand",
							children: "Inicio"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "material-symbols-outlined text-base",
							children: "chevron_right"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "text-text-muted",
							children: badge
						})
					]
				}),
				/* @__PURE__ */ jsxs("header", {
					className: "flex flex-col gap-4 border-b border-border pb-8",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "w-fit rounded-full border border-brand/25 bg-brand-tint px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-brand",
							children: badge
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "font-display text-3xl font-extrabold tracking-tight text-text md:text-4xl lg:text-5xl",
							children: title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "max-w-2xl text-lg leading-relaxed text-text-muted",
							children: intro
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "flex items-center gap-2 text-sm text-text-subtle",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "material-symbols-outlined text-base",
									children: "update"
								}),
								"Última actualización: ",
								updated
							]
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-10 flex flex-col gap-10",
					children: sections$3.map((s, i) => /* @__PURE__ */ jsxs("section", {
						className: "flex flex-col gap-3",
						children: [
							/* @__PURE__ */ jsxs("h2", {
								className: "font-display text-xl font-bold text-text md:text-2xl",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "mr-2 text-brand",
									children: [i + 1, "."]
								}), s.heading]
							}),
							s.paragraphs?.map((p, idx) => /* @__PURE__ */ jsx("p", {
								className: "text-base leading-relaxed text-text-muted",
								children: p
							}, idx)),
							s.bullets && /* @__PURE__ */ jsx("ul", {
								className: "flex flex-col gap-2 pt-1",
								children: s.bullets.map((b) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-2 text-base leading-relaxed text-text-muted",
									children: [/* @__PURE__ */ jsx("span", {
										className: "material-symbols-outlined mt-0.5 text-base text-brand",
										children: "check_circle"
									}), b]
								}, b))
							})
						]
					}, s.heading))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-12 flex flex-col items-start gap-4 rounded-2xl border border-border bg-surface p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("span", {
							className: "material-symbols-outlined text-2xl text-brand",
							children: "contact_support"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-sm text-text-muted",
							children: "¿Dudas sobre este documento? Escríbenos y te ayudamos."
						})]
					}), /* @__PURE__ */ jsxs(Link, {
						to: "/#contacto",
						className: "btn-primary inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-sm font-semibold",
						children: [/* @__PURE__ */ jsx("span", { children: "Contactar" }), /* @__PURE__ */ jsx("span", {
							className: "material-symbols-outlined text-base",
							children: "arrow_forward"
						})]
					})]
				})
			]
		})]
	});
}
var sections$2 = [
	{
		heading: "Responsable del tratamiento",
		paragraphs: ["Digitallaws es responsable del tratamiento de los datos personales recolectados a través de este sitio y de sus plataformas corporativas. Tratamos la información con fines legítimos, de forma proporcional y conforme a la normativa aplicable de protección de datos."]
	},
	{
		heading: "Datos que recolectamos",
		bullets: [
			"Datos de contacto comercial: nombre, empresa, correo electrónico y teléfono.",
			"Datos de uso del sitio: páginas visitadas y métricas agregadas de navegación.",
			"Datos necesarios para la prestación de servicios de comunicaciones y notificaciones."
		]
	},
	{
		heading: "Finalidad del tratamiento",
		paragraphs: ["Utilizamos los datos para atender solicitudes comerciales, prestar nuestros servicios, emitir constancias y acuses, mejorar la experiencia del sitio y cumplir obligaciones legales y contractuales."]
	},
	{
		heading: "Derechos del titular",
		paragraphs: ["El titular puede conocer, actualizar, rectificar y suprimir sus datos, así como revocar la autorización otorgada, cuando proceda. Para ejercer estos derechos puede escribir a nuestro canal de contacto oficial."]
	},
	{
		heading: "Seguridad de la información",
		paragraphs: ["Aplicamos medidas técnicas, administrativas y organizativas razonables para proteger la información frente a accesos no autorizados, pérdida o alteración, acorde con estándares corporativos de seguridad."]
	},
	{
		heading: "Conservación y transferencias",
		paragraphs: ["Conservamos los datos durante el tiempo necesario para las finalidades descritas y los plazos legales aplicables. Cualquier transferencia a terceros se realiza bajo acuerdos que preservan la confidencialidad y el uso debido de la información."]
	}
];
function PrivacyPage() {
	return /* @__PURE__ */ jsx(LegalDoc, {
		badge: "Seguridad y Privacidad",
		title: "Política de Privacidad",
		intro: "Describimos cómo Digitallaws recolecta, utiliza y protege los datos personales tratados a través de este sitio y sus plataformas.",
		updated: "Octubre de 2026",
		sections: sections$2
	});
}
var sections$1 = [
	{
		heading: "Aceptación de los términos",
		paragraphs: ["El acceso y uso de este sitio y de las plataformas de Digitallaws implica la aceptación plena de estos Términos y Condiciones. Si no está de acuerdo con ellos, le solicitamos abstenerse de utilizar los servicios."]
	},
	{
		heading: "Uso de los servicios",
		bullets: [
			"Los servicios deben utilizarse con fines lícitos y conforme a la normativa vigente.",
			"El usuario es responsable de la veracidad de la información que proporciona.",
			"No está permitido el uso que afecte la disponibilidad, seguridad o integridad de las plataformas."
		]
	},
	{
		heading: "Propiedad intelectual",
		paragraphs: ["El software, marcas, contenidos y elementos gráficos de Digitallaws son de su propiedad o cuentan con licencia. Queda prohibida su reproducción o uso no autorizado."]
	},
	{
		heading: "Niveles de servicio y disponibilidad",
		paragraphs: ["Procuramos mantener la continuidad operativa de nuestras plataformas. Los compromisos específicos de disponibilidad y soporte se definen en los acuerdos comerciales suscritos con cada cliente."]
	},
	{
		heading: "Limitación de responsabilidad",
		paragraphs: ["Digitallaws no será responsable por daños derivados del uso indebido de los servicios o por causas ajenas a su control razonable. Las certificaciones y constancias se emiten conforme a la información efectivamente procesada."]
	},
	{
		heading: "Modificaciones",
		paragraphs: ["Podemos actualizar estos Términos para reflejar cambios legales, técnicos o comerciales. Las versiones vigentes se publicarán en este sitio con su fecha de actualización."]
	}
];
function TermsPage() {
	return /* @__PURE__ */ jsx(LegalDoc, {
		badge: "Términos y Condiciones",
		title: "Términos y Condiciones de Uso",
		intro: "Condiciones que regulan el acceso y uso del sitio y de las plataformas corporativas de Digitallaws.",
		updated: "Octubre de 2026",
		sections: sections$1
	});
}
var sections = [
	{
		heading: "¿Qué son las cookies?",
		paragraphs: ["Las cookies son pequeños archivos que se almacenan en su dispositivo cuando visita un sitio web. Permiten recordar preferencias y recopilar información de uso para mejorar la experiencia de navegación."]
	},
	{
		heading: "Tipos de cookies que utilizamos",
		bullets: [
			"Esenciales: necesarias para el funcionamiento del sitio, como recordar el tema claro u oscuro.",
			"Analíticas: ayudan a entender de forma agregada cómo se usa el sitio.",
			"Funcionales: recuerdan preferencias para personalizar la experiencia."
		]
	},
	{
		heading: "Gestión de preferencias",
		paragraphs: ["Puede configurar o eliminar las cookies desde los ajustes de su navegador. Tenga en cuenta que deshabilitar ciertas cookies puede afectar algunas funciones del sitio."]
	},
	{
		heading: "Cookies de terceros",
		paragraphs: ["Algunas funcionalidades pueden apoyarse en servicios de terceros que establecen sus propias cookies. Dichos terceros son responsables de sus respectivas políticas de privacidad."]
	},
	{
		heading: "Actualizaciones de esta política",
		paragraphs: ["Esta Política de Cookies puede actualizarse periódicamente. Publicaremos cualquier cambio en esta página junto con su fecha de actualización."]
	}
];
function CookiesPage() {
	return /* @__PURE__ */ jsx(LegalDoc, {
		badge: "Política de Cookies",
		title: "Política de Cookies",
		intro: "Explicamos qué cookies utilizamos en este sitio y cómo puede gestionarlas.",
		updated: "Octubre de 2026",
		sections
	});
}
function NotFoundPage() {
	return /* @__PURE__ */ jsxs("section", {
		className: "hero-bg relative flex min-h-[70svh] w-full items-center justify-center overflow-hidden px-5",
		children: [/* @__PURE__ */ jsx("div", {
			"aria-hidden": true,
			className: "hero-ambient"
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 flex max-w-lg flex-col items-center gap-5 text-center",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "font-display text-7xl font-extrabold text-brand md:text-8xl",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "font-display text-2xl font-bold text-text md:text-3xl",
					children: "Página no encontrada"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "max-w-md text-base text-text-muted",
					children: "La ruta que buscas no existe o fue movida. Vuelve al inicio para seguir explorando nuestras soluciones."
				}),
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "btn-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold shadow-lg shadow-brand/25",
					children: [/* @__PURE__ */ jsx("span", {
						className: "material-symbols-outlined text-base",
						children: "home"
					}), "Volver al inicio"]
				})
			]
		})]
	});
}
function ServicePage({ service }) {
	return /* @__PURE__ */ jsxs("article", {
		className: "mx-auto max-w-5xl px-5 py-16 md:px-8 lg:py-20",
		children: [
			/* @__PURE__ */ jsxs("nav", {
				"aria-label": "Ruta de navegación",
				className: "mb-8 text-sm text-text-muted",
				children: [
					/* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "text-brand hover:underline",
						children: "Inicio"
					}),
					" ",
					"/ ",
					service.title
				]
			}),
			/* @__PURE__ */ jsx("h1", {
				className: "font-display text-4xl font-extrabold tracking-tight text-text md:text-5xl",
				children: service.title
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-6 text-lg leading-relaxed text-text-muted",
				children: service.intro
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "mt-12 font-display text-2xl font-bold text-text",
				children: service.heading
			}),
			service.paragraphs.map((paragraph) => /* @__PURE__ */ jsx("p", {
				className: "mt-4 leading-relaxed text-text-muted",
				children: paragraph
			}, paragraph)),
			/* @__PURE__ */ jsx("ul", {
				className: "mt-6 list-disc space-y-3 pl-6 text-text-muted",
				children: service.items.map((item) => /* @__PURE__ */ jsx("li", { children: item }, item))
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "mt-12 font-display text-2xl font-bold text-text",
				children: service.question
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-4 leading-relaxed text-text-muted",
				children: service.answer
			}),
			/* @__PURE__ */ jsx(Link, {
				to: "/#contacto",
				className: "btn-primary mt-8 inline-flex rounded-lg px-6 py-3 font-semibold",
				children: "Hablemos de tu proyecto"
			}),
			/* @__PURE__ */ jsxs("nav", {
				"aria-label": "Otras soluciones",
				className: "mt-12 flex flex-wrap gap-5 border-t border-border pt-8 text-brand",
				children: [services.filter((item) => item.path !== service.path).map((item) => /* @__PURE__ */ jsx(Link, {
					to: item.path,
					className: "hover:underline",
					children: item.title
				}, item.path)), /* @__PURE__ */ jsx(Link, {
					to: "/productos",
					className: "hover:underline",
					children: "Conoce DIMAIL y nuestros productos"
				})]
			})
		]
	});
}
function App() {
	return /* @__PURE__ */ jsx(Routes, { children: /* @__PURE__ */ jsxs(Route, {
		element: /* @__PURE__ */ jsx(SiteLayout, {}),
		children: [
			services.map((service) => /* @__PURE__ */ jsx(Route, {
				path: service.path,
				element: /* @__PURE__ */ jsx(ServicePage, { service })
			}, service.path)),
			/* @__PURE__ */ jsx(Route, {
				index: true,
				element: /* @__PURE__ */ jsx(HomePage, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "productos",
				element: /* @__PURE__ */ jsx(ProductsPage, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "pqrs",
				element: /* @__PURE__ */ jsx(PqrsPage, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "seguridad",
				element: /* @__PURE__ */ jsx(SecurityPage, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "privacidad",
				element: /* @__PURE__ */ jsx(PrivacyPage, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "terminos",
				element: /* @__PURE__ */ jsx(TermsPage, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "cookies",
				element: /* @__PURE__ */ jsx(CookiesPage, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "*",
				element: /* @__PURE__ */ jsx(NotFoundPage, {})
			})
		]
	}) });
}
var App_default = App;
function ErrorPage() {
	return /* @__PURE__ */ jsxs("section", {
		className: "hero-bg relative flex min-h-[70svh] w-full items-center justify-center overflow-hidden px-5",
		children: [/* @__PURE__ */ jsx("div", {
			"aria-hidden": true,
			className: "hero-ambient"
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 flex max-w-lg flex-col items-center gap-5 text-center",
			children: [
				/* @__PURE__ */ jsx("span", {
					"aria-hidden": "true",
					className: "material-symbols-outlined text-6xl text-brand",
					children: "warning"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "font-display text-2xl font-bold text-text md:text-3xl",
					children: "Algo salió mal"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "max-w-md text-base text-text-muted",
					children: "Ocurrió un error al mostrar esta página. Puedes volver al inicio o intentar cargarla de nuevo."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ jsxs(Link, {
						to: "/",
						className: "btn-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold shadow-lg shadow-brand/25",
						children: [/* @__PURE__ */ jsx("span", {
							className: "material-symbols-outlined text-base",
							children: "home"
						}), "Volver al inicio"]
					}), /* @__PURE__ */ jsxs("button", {
						type: "button",
						onClick: () => window.location.reload(),
						className: "inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-text transition-colors hover:bg-surface-high",
						children: [/* @__PURE__ */ jsx("span", {
							className: "material-symbols-outlined text-base",
							children: "refresh"
						}), "Recargar página"]
					})]
				})
			]
		})]
	});
}
var ErrorBoundary = class extends Component {
	constructor(..._args) {
		super(..._args);
		this.state = { hasError: false };
	}
	static getDerivedStateFromError() {
		return { hasError: true };
	}
	componentDidCatch(error, errorInfo) {
		console.error("Error al renderizar la aplicación DigitalLaws", {
			error,
			componentStack: errorInfo.componentStack
		});
	}
	render() {
		if (this.state.hasError) return /* @__PURE__ */ jsx(ErrorPage, {});
		return this.props.children;
	}
};
function render(url$1) {
	return renderToString(/* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(StaticRouter, {
		location: url$1,
		children: /* @__PURE__ */ jsx(ErrorBoundary, { children: /* @__PURE__ */ jsx(App_default, {}) })
	}) }));
}
export { render };
