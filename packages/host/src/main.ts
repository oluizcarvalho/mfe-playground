import { initFederation } from '@angular-architects/native-federation';

initFederation('./federation.manifest.json')
  .catch((err) => {
    console.warn('[MFE] Federation init failed (remotes may be offline):', err);
  })
  .then(() => import('./bootstrap'))
  .catch((err) => console.error('[MFE] Bootstrap failed:', err));
