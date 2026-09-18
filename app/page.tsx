import { Reveal } from "@/components/portfolio/reveal";
import { ThemeToggle } from "@/components/portfolio/theme-toggle";
import { portfolio } from "@/lib/portfolio";
import { ArrowUpRight, Check, ChevronDown, CircleArrowOutUpRight, Copy, Mail } from "lucide-react";

export default function Home() {
    return (
        <main>
            <header className="site-header">
                <a className="wordmark" href="#top" aria-label="Back to top">
                    AX<span>.</span>
                </a>
                <nav aria-label="Main navigation">
                    <a href="#work">Work</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>
                <a className="availability" href="#contact">
                    <span className="status-dot" /> Available
                </a>
                <ThemeToggle />
            </header>

            <section id="top" className="hero shell">
                <div className="hero-kicker">
                    <span>01 / 04</span>
                    <span>{portfolio.location}</span>
                </div>
                <div className="hero-grid">
                    <div className="hero-copy">
                        <Reveal>
                            <p className="eyebrow">{portfolio.role}</p>
                            <h1>{portfolio.hero}</h1>
                            <p className="hero-intro">{portfolio.intro}</p>
                            <div className="hero-actions">
                                <a className="button button-primary" href="#work">
                                    See selected work <ArrowUpRight size={16} />
                                </a>
                                <a className="text-link" href={`mailto:${portfolio.email}`}>
                                    Start a conversation <Mail size={15} />
                                </a>
                            </div>
                        </Reveal>
                    </div>
                    <div className="hero-mark" aria-hidden="true">
                        <div className="hero-mark-ring" />
                        <span>
                            Build
                            <br />
                            with intent
                        </span>
                        <div className="hero-mark-line" />
                    </div>
                </div>
                <a className="scroll-cue" href="#work">
                    <ChevronDown size={15} /> Scroll to explore
                </a>
            </section>

            <section className="proof-band">
                <div className="shell proof-grid">
                    <p className="section-label">A few useful things</p>
                    {portfolio.metrics.map(metric => (
                        <div key={metric.label}>
                            <strong>{metric.value}</strong>
                            <span>{metric.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section id="work" className="section shell">
                <div className="section-heading">
                    <p className="eyebrow">02 / Selected work</p>
                    <h2>
                        Work that earns
                        <br />
                        <em>its place.</em>
                    </h2>
                    <p className="section-note">
                        Projects and case studies are being prepared. Check back soon for selected work.
                    </p>
                </div>
                <div className="project-list">
                    {portfolio.projects.length > 0 ? (
                        portfolio.projects.map((project, index) => (
                            <Reveal key={project.name} delay={index * 0.08}>
                                <article className="project-row">
                                    <div className={`project-art ${project.accent}`} aria-hidden="true">
                                        <div className="art-window">
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                        <div className="art-chart">
                                            <i />
                                            <i />
                                            <i />
                                            <i />
                                            <i />
                                        </div>
                                        <p>{project.index}</p>
                                    </div>
                                    <div className="project-content">
                                        <div className="project-meta">
                                            <span>{project.category}</span>
                                            <span>{project.index}</span>
                                        </div>
                                        <h3>{project.name}</h3>
                                        <p>{project.description}</p>
                                        <p className="project-result">
                                            <Check size={15} /> {project.result}
                                        </p>
                                        <div className="tag-list">
                                            {project.stack.map(tag => (
                                                <span key={tag}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <a className="round-link" href="#contact" aria-label={`Ask about ${project.name}`}>
                                        <ArrowUpRight size={18} />
                                    </a>
                                </article>
                            </Reveal>
                        ))
                    ) : (
                        <div className="project-placeholder">
                            <span>Coming soon</span>
                            <p>Real projects, process notes, and outcomes will live here.</p>
                        </div>
                    )}
                </div>
            </section>

            <section id="about" className="about-section">
                <div className="shell about-grid">
                    <div>
                        <p className="eyebrow">03 / The approach</p>
                        <h2>
                            Useful over
                            <br />
                            <em>impressive.</em>
                        </h2>
                    </div>
                    <div className="about-copy">
                        <p className="large-copy">{portfolio.bio}</p>
                        <p>{portfolio.approach}</p>
                        <div className="service-list">
                            {portfolio.services.map(service => (
                                <div key={service}>
                                    <Check size={15} /> {service}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section shell experience-section">
                <div className="section-heading compact-heading">
                    <p className="eyebrow">04 / Experience</p>
                    <h2>
                        A record of
                        <br />
                        <em>making things work.</em>
                    </h2>
                </div>
                <div className="experience-list">
                    {portfolio.experience.map(item => (
                        <div className="experience-row" key={item.period}>
                            <span>{item.period}</span>
                            <div>
                                <h3>{item.role}</h3>
                                <p>{item.company}</p>
                            </div>
                            <p>
                                {item.detail} {item.achievement}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="contact" className="contact-section shell">
                <div className="contact-orbit" aria-hidden="true">
                    <Copy size={18} />
                </div>
                <p className="eyebrow">Have a good one?</p>
                <h2>
                    Let&apos;s make
                    <br />
                    <em>something useful.</em>
                </h2>
                <a className="contact-email" href={`mailto:${portfolio.email}`}>
                    {portfolio.email} <ArrowUpRight size={19} />
                </a>
                <div className="contact-footer">
                    <span>{portfolio.availability}</span>
                    <div className="social-links">
                        {portfolio.socials.map(social => (
                            <a href={social.href} key={social.label} target="_blank" rel="noreferrer">
                                {social.label} <ArrowUpRight size={13} />
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="site-footer shell">
                <span>
                    © {new Date().getFullYear()} {portfolio.name}
                </span>
                <span>Built with care, shipped with intent.</span>
                <a href="#top">
                    <CircleArrowOutUpRight size={15} /> Back to top
                </a>
            </footer>
        </main>
    );
}
