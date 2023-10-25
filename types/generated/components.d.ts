import type { Schema, Attribute } from '@strapi/strapi';

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
      'product.developer': ProductDeveloper;
    }
  }
}
