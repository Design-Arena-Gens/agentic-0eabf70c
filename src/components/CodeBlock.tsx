type CodeBlockProps = {
  code: string;
  language?: string;
};

export function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <div className="code-block" aria-label={language ? `${language} code example` : 'Code example'}>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}
