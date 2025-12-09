// Google Analytics 4 tracking utilities

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export interface ProductClickData {
  dollName: string;
  collection: string;
  price?: number;
  url: string;
}

export const trackProductClick = (data: ProductClickData) => {
  if (typeof window !== 'undefined' && window.gtag) {
    // GA4 recommended e-commerce event for product clicks
    window.gtag('event', 'select_item', {
      item_list_name: data.collection,
      items: [{
        item_id: data.dollName.toLowerCase().replace(/\s+/g, '-'),
        item_name: data.dollName,
        item_category: data.collection,
        price: data.price || 0,
      }]
    });
    
    // Also track as outbound click for link tracking reports
    window.gtag('event', 'click', {
      event_category: 'outbound',
      event_label: `${data.dollName} - ${data.collection}`,
      transport_type: 'beacon',
      outbound_url: data.url
    });
  }
};
