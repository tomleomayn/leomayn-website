import Script from 'next/script'

const CONSENT_KEY = 'leomayn_cookie_consent'

export default function GoogleTagManager() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID

  if (!gtmId) {
    return null
  }

  // Note: dangerouslySetInnerHTML is safe here as content is static, not user-provided
  return (
    <>
      {/* Consent Mode Default - Must load before GTM */}
      <Script
        id="consent-default"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // Check stored consent
            var stored = localStorage.getItem('${CONSENT_KEY}');
            var consentState = stored === 'granted' ? 'granted' : 'denied';

            // Set default consent (denied until user accepts)
            gtag('consent', 'default', {
              'analytics_storage': consentState,
              'ad_storage': consentState,
              'ad_user_data': consentState,
              'ad_personalization': consentState,
              'wait_for_update': 500
            });

            window.gtag = gtag;
          `,
        }}
      />

      {/* Google Tag Manager Script */}
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />

      {/* Google Tag Manager NoScript */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  )
}
