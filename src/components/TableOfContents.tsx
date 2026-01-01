import type { Chapter } from '@/data/chapters';

type TableOfContentsProps = {
  chapters: Chapter[];
};

export function TableOfContents({ chapters }: TableOfContentsProps) {
  return (
    <nav className="toc" aria-label="Table of contents">
      <h2>Chapters</h2>
      <ul>
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <a href={`#${chapter.id}`}>{chapter.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
