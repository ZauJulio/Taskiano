import React, { memo } from 'react';

import Markdown from 'react-markdown';

import gfm from 'remark-gfm';
import math from 'remark-math';
import katex from 'rehype-katex';

import styles from './styles.module.scss';

interface IMarkdownPreview {
  className?: string;
  showLabel?: boolean;
  note?: string;
}

const MarkdownPreviewFC = (props: IMarkdownPreview) => {
  return (
    <div className={styles.notePreviewContainer}>
      {props.showLabel && <label>Preview</label>}

      <Markdown
        className={`${styles.markdown} ${props.className}`}
        rehypePlugins={[katex]}
        remarkPlugins={[gfm, math]}
        skipHtml={true}
      >
        {props.note ?? ''}
      </Markdown>
    </div>
  );
};

const MarkdownPreview = memo(MarkdownPreviewFC);
export default MarkdownPreview;
