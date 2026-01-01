import { Callout } from '@/components/Callout';
import { CodeBlock } from '@/components/CodeBlock';
import { TableOfContents } from '@/components/TableOfContents';
import { chapters } from '@/data/chapters';

export default function HomePage() {
  return (
    <div className="layout">
      <TableOfContents chapters={chapters} />
      <main className="content">
        <header>
          <h1 className="title">Python Foundations Playbook</h1>
          <p className="subtitle">
            A beginner-friendly ebook that transforms you from curious learner to confident Python
            developer through clear explanations, practical examples, and guided practice.
          </p>
          <div className="meta">
            <span>Beginner Friendly</span>
            <span>Hands-on Examples</span>
            <span>Project Ideas</span>
          </div>
        </header>

        {chapters.map((chapter) => (
          <article key={chapter.id} id={chapter.id} className="chapter">
            <h2>{chapter.title}</h2>
            <p>{chapter.summary}</p>
            <p>{chapter.tagline}</p>

            {chapter.keyTerms && chapter.keyTerms.length > 0 ? (
              <div className="key-terms" aria-label="Key vocabulary">
                {chapter.keyTerms.map((term) => (
                  <span key={term} className="key-term">
                    {term}
                  </span>
                ))}
              </div>
            ) : null}

            {chapter.callout ? (
              <Callout type={chapter.callout.type}>{chapter.callout.text}</Callout>
            ) : null}

            <div className="chapter-grid">
              {chapter.sections.map((section) => (
                <section key={section.heading} aria-labelledby={`${chapter.id}-${section.heading}`}>
                  <h3 id={`${chapter.id}-${section.heading}`}>{section.heading}</h3>
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                  {section.list ? (
                    <ul>
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.orderedList ? (
                    <ol>
                      {section.orderedList.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ol>
                  ) : null}
                  {section.code ? <CodeBlock code={section.code} /> : null}
                  {section.callout ? (
                    <Callout type={section.callout.type}>{section.callout.text}</Callout>
                  ) : null}
                </section>
              ))}
            </div>

            {chapter.practice ? (
              <section aria-label="Practice challenge">
                <h3>Practice</h3>
                <p>{chapter.practice.prompt}</p>
                <details>
                  <summary>Show solution</summary>
                  <CodeBlock code={chapter.practice.solution} />
                </details>
              </section>
            ) : null}

            {chapter.resources && chapter.resources.length > 0 ? (
              <section aria-label="Further resources">
                <h3>Resources</h3>
                <ul className="resource-list">
                  {chapter.resources.map((resource) => (
                    <li key={resource.href}>
                      <a href={resource.href} target="_blank" rel="noreferrer">
                        {resource.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </article>
        ))}
      </main>
    </div>
  );
}
