'use client';

import { useEffect } from 'react';
import css from './page.module.css';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div className={css.errorWrapper}>
      <p className={css.errorText}>Something went wrong. Please try again.</p>
      <button type="button" className={css.errorButton} onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
