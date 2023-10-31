import type { Schema, Attribute } from '@strapi/strapi';

export interface LanguagesEn extends Schema.Component {
  collectionName: 'components_platform_ens';
  info: {
    displayName: 'en';
    description: '';
  };
  attributes: {};
}

export interface LanguagesJa extends Schema.Component {
  collectionName: 'components_platform_jas';
  info: {
    displayName: 'ja';
    description: '';
  };
  attributes: {};
}

export interface LanguagesRu extends Schema.Component {
  collectionName: 'components_languages_rus';
  info: {
    displayName: 'ru';
    description: '';
  };
  attributes: {
    ru: Attribute.Component<'platform.platform'>;
  };
}

export interface LanguagesVi extends Schema.Component {
  collectionName: 'components_platform_vis';
  info: {
    displayName: 'vi';
    icon: 'apps';
    description: '';
  };
  attributes: {
    vi: Attribute.Component<'platform.platform'>;
  };
}

export interface LanguagesZh extends Schema.Component {
  collectionName: 'components_platform_zhs';
  info: {
    displayName: 'zh';
    description: '';
  };
  attributes: {};
}

export interface PlatformPlatform extends Schema.Component {
  collectionName: 'components_platform_platforms';
  info: {
    displayName: 'platform';
  };
  attributes: {
    web: Attribute.String;
    mobi: Attribute.String;
    extension: Attribute.String;
  };
}

export interface ProductDeveloper extends Schema.Component {
  collectionName: 'components_extension_developers';
  info: {
    displayName: 'developer';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    github: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'languages.en': LanguagesEn;
      'languages.ja': LanguagesJa;
      'languages.ru': LanguagesRu;
      'languages.vi': LanguagesVi;
      'languages.zh': LanguagesZh;
      'platform.platform': PlatformPlatform;
      'product.developer': ProductDeveloper;
    }
  }
}
