import type { Schema, Struct } from '@strapi/strapi';

export interface BaseFaqContainer extends Struct.ComponentSchema {
  collectionName: 'components_base_faq_containers';
  info: {
    displayName: 'FAQ Container';
  };
  attributes: {
    faq_entries: Schema.Attribute.Relation<
      'oneToMany',
      'api::faq-entry.faq-entry'
    >;
  };
}

export interface BaseSeo extends Struct.ComponentSchema {
  collectionName: 'components_base_seos';
  info: {
    displayName: 'Seo';
    icon: 'filter';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFeaturedBlogPost extends Struct.ComponentSchema {
  collectionName: 'components_elements_featured_blog_posts';
  info: {
    description: '';
    displayName: 'Featured Blog Post';
  };
  attributes: {
    blog_post: Schema.Attribute.Relation<
      'oneToOne',
      'api::blog-post.blog-post'
    >;
  };
}

export interface SectionsFeaturedBlogPosts extends Struct.ComponentSchema {
  collectionName: 'components_sections_featured_blog_posts';
  info: {
    description: '';
    displayName: 'Featured Blog Posts';
  };
  attributes: {
    posts: Schema.Attribute.Component<'elements.featured-blog-post', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'base.faq-container': BaseFaqContainer;
      'base.seo': BaseSeo;
      'elements.featured-blog-post': ElementsFeaturedBlogPost;
      'sections.featured-blog-posts': SectionsFeaturedBlogPosts;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
