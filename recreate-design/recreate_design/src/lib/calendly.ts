export const CALENDLY_EVENT_URL = 'https://calendly.com/notchdemo/60min';

const WIDGET_JS = 'https://assets.calendly.com/assets/external/widget.js';
const WIDGET_CSS = 'https://assets.calendly.com/assets/external/widget.css';

type CalendlyApi = { initPopupWidget: (opts: { url: string }) => void };

function getCalendly(): CalendlyApi | undefined {
  return (window as Window & { Calendly?: CalendlyApi }).Calendly;
}

export function ensureCalendlyAssets(): void {
  if (!document.querySelector(`link[href="${WIDGET_CSS}"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = WIDGET_CSS;
    document.head.appendChild(link);
  }
  if (!document.querySelector(`script[src="${WIDGET_JS}"]`)) {
    const script = document.createElement('script');
    script.src = WIDGET_JS;
    script.async = true;
    document.head.appendChild(script);
  }
}

function waitForCalendly(maxMs = 20000): Promise<CalendlyApi> {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const id = window.setInterval(() => {
      const cal = getCalendly();
      if (cal?.initPopupWidget) {
        window.clearInterval(id);
        resolve(cal);
        return;
      }
      if (Date.now() - start > maxMs) {
        window.clearInterval(id);
        reject(new Error('Calendly script timeout'));
      }
    }, 50);
  });
}

export async function openCalendlyPopup(): Promise<void> {
  ensureCalendlyAssets();
  try {
    const cal = await waitForCalendly();
    cal.initPopupWidget({ url: CALENDLY_EVENT_URL });
  } catch {
    console.error('[Calendly] Widget script did not load in time.');
  }
}
