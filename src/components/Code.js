/* eslint react/jsx-boolean-value: 0 */
/* eslint no-unused-vars: 0 */
/* eslint react/prop-types: 0 */
/* eslint react/destructuring-assignment: 0 */
import React from "react";
import styled from "styled-components";
import Highlight, { defaultProps } from "prism-react-renderer";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const Colors = styled.div`
  .prism-code {
    font-size: 14px !important;
  }

  .token-line {
    min-height: 21px;
  }
  code[class*="language-"],
  pre[class*="language-"] {
    font-family: Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono",
      "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono",
      "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L",
      "Courier New", Courier, monospace;
    font-size: 14px;
    line-height: 1.375;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    background: #faf8f5;
    color: #728fcb;
  }

  pre[class*="language-"]::-moz-selection,
  pre[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection,
  code[class*="language-"] ::-moz-selection {
    text-shadow: none;
    background: #faf8f5;
  }

  pre[class*="language-"]::selection,
  pre[class*="language-"] ::selection,
  code[class*="language-"]::selection,
  code[class*="language-"] ::selection {
    text-shadow: none;
    background: #faf8f5;
  }

  /* Code blocks */
  pre[class*="language-"] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 0.3em;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #b6ad9a;
  }

  .token.punctuation {
    color: #b6ad9a;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.tag,
  .token.operator,
  .token.number {
    color: #063289;
  }

  .token.property,
  .token.function {
    color: #b29762;
  }

  .token.tag-id,
  .token.selector,
  .token.atrule-id {
    color: #2d2006;
  }

  code.language-javascript,
  .token.attr-name {
    color: #896724;
  }

  code.language-css,
  code.language-scss,
  .token.boolean,
  .token.string,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .language-scss .token.string,
  .style .token.string,
  .token.attr-value,
  .token.keyword,
  .token.control,
  .token.directive,
  .token.unit,
  .token.statement,
  .token.regex,
  .token.atrule {
    color: #728fcb;
  }

  .token.placeholder,
  .token.variable {
    color: #93abdc;
  }

  .token.deleted {
    text-decoration: line-through;
  }

  .token.inserted {
    border-bottom: 1px dotted #2d2006;
    text-decoration: none;
  }

  .token.italic {
    font-style: italic;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.important {
    color: #896724;
  }

  .token.entity {
    cursor: help;
  }

  pre > code.highlight {
    outline: 0.4em solid #896724;
    outline-offset: 0.4em;
  }

  /* overrides color-values for the Line Numbers plugin
   * http://prismjs.com/plugins/line-numbers/
   */
  .line-numbers .line-numbers-rows {
    border-right-color: #ece8de;
  }

  .line-numbers-rows > span:before {
    color: #cdc4b1;
  }

  /* overrides color-values for the Line Highlight plugin
   * http://prismjs.com/plugins/line-highlight/
   */
  .line-highlight {
    background: rgba(45, 32, 6, 0.2);
    background: -webkit-linear-gradient(
      left,
      rgba(45, 32, 6, 0.2) 70%,
      rgba(45, 32, 6, 0)
    );
    background: linear-gradient(
      to right,
      rgba(45, 32, 6, 0.2) 70%,
      rgba(45, 32, 6, 0)
    );
  }
`;

const Code = ({ codeString, language, ...props }) => {
  if (props["react-live"]) {
    return (
      <LiveProvider code={codeString} noInline={true}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  }
  return (
    <Colors>
      <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
        theme={null}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Colors>
  );
};

export default Code;
