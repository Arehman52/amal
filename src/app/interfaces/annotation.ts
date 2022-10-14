export interface ANNOTATION {
  '@context': string;
  id: string;
  type: string;
  body: __ANNOTATION_BODY[];
  target: { selector: __SELECTOR; source?: string };
  userId?: number;
  user?: any;
  imageId?: number;
}







export interface __SELECTOR {
  type: string;
  conformsTo: string,
  value: string;
}
export interface __ANNOTATION_BODY {
  description?: string;
  name?: string;
  purpose?: string;
  type: string;
  value: string | { id: string; code: string; color: string; description: string };
}
