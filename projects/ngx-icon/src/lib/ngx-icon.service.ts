import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any',
})
export class NgxIconService {
  constructor() {
    const allLinks =
      document.querySelectorAll<HTMLLinkElement>('link[rel=icon]');
    this._iconPath = allLinks[allLinks.length - 1].href;
    this._iconElement = allLinks[allLinks.length - 1];
  }
  /**
   * @param path The path of the icon. The path should be relative to the index.html.
   */
  setIcon(path: string): void {
    this._iconElement.href = path;
  }
  private _iconPath: string;
  private _iconElement: HTMLLinkElement;
  get iconPath() {
    return this._iconPath;
  }
  get iconElement() {
    return this._iconElement;
  }
}
