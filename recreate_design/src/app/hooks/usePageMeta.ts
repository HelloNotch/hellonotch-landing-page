import { useEffect } from 'react';

export const HOME_TITLE = 'Notch | Modern procurement for the teams that build and furnish spaces';
export const HOME_DESCRIPTION =
  'Notch turns spec books and plan sets into quote requests, puts vendor pricing side by side, and keeps every order on track through delivery.';

/** Keeps the tab title and description right when moving between pages in the app. */
export function usePageMeta(title: string = HOME_TITLE, description: string = HOME_DESCRIPTION) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
}
