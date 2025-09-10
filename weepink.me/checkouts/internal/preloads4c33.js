
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '1427464978402328');
fbq('track', 'PageView');

// Exemplo de Purchase dinâmico (coloque isso na página de confirmação)
var orderTotal = window.orderTotal || 0.00; // substituir pela variável real do seu pedido
fbq('track', 'Purchase', { value: orderTotal, currency: 'BRL' });
</script>
<noscript><img height="1" width="1" style="display:none"
 src="https://www.facebook.com/tr?id=1427464978402328&ev=PageView&noscript=1"/></noscript>
<!-- End Meta Pixel Code -->

    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/polyfills-legacy.Xr6v2805.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/app-legacy.BtzaOnA5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/pt-BR-legacy.Bf9WhRxI.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.C1h-bfHt.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/DeliveryMethodSelectorSection-legacy.Bww5GsEW.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/useEditorShopPayNavigation-legacy.C5H251Wn.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/VaultedPayment-legacy.Cjcx9FYb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField-legacy.CiOn6eKE.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer-legacy.DiKvuuMq.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.CUUl0q2W.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.BiRG7sff.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview-legacy.DJinh9R_.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/PayButtonSection-legacy.BPGHa7Tp.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch-legacy.C5UFIJRy.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger-legacy.DeSmv11g.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/index-legacy.ChsXOjct.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  
