
import labels from './../../settings/labels.json';

export function getText(text) {
  try {
    return labels[text];
  } catch(ex){
    console.warn('[GetText]: '+ ex);
    return [];
  }
}