declare global {
  interface Window {
    gtag: any;
  }
}

/**
 * Represents a Google Analytics event.
 */
export interface GaEvent {
  /**
   * The action for the event. Eg: shopping_cart_click, etc.
   */
  action: string;

  /**
   * The cateogory of the event. Eg: Social Media.
   */
  category?: string;

  /**
   * The label of the event.
   */
  label?: string;

  /**
   * Specific value to be used with the event.
   */
  value?: string;
}
