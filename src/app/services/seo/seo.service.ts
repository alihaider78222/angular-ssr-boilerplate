import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SEO {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}


@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private ngTitle: Title,
    private meta: Meta,
  ) { }


  // Update Meta Tags
  updateMetaTags(seo : SEO){
    this.ngTitle.setTitle(seo?.title ?? '');
    this.meta.updateTag({ name: 'description', content:  seo?.title ?? '' });

    this.meta.updateTag({ itemprop: 'name', content: seo?.title ?? '' });
    this.meta.updateTag({ itemprop: 'description', content: seo?.description ?? '' });
    this.meta.updateTag({ property: 'og:title', content:  seo?.title ?? '' });
    this.meta.updateTag({ property: 'og:description', content: seo?.description ?? '' });
    this.meta.updateTag({ property: 'og:image', content: seo?.image ?? '' });
    this.meta.updateTag({ name: 'twitter:title', content:  seo?.title ?? '' });
    this.meta.updateTag({ name: 'twitter:description', content: seo?.description ?? '' });
    this.meta.updateTag({ name: 'twitter:image', content: seo?.image ?? '' });
  }
}
