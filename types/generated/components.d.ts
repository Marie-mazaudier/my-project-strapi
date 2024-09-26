import type { Schema, Attribute } from '@strapi/strapi';

export interface MoleculesListIcons extends Schema.Component {
  collectionName: 'components_molecules_list_icons';
  info: {
    displayName: 'list_icons';
    icon: 'bulletList';
  };
  attributes: {
    text: Attribute.String;
    link_text: Attribute.String;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface MoleculesContactInfo extends Schema.Component {
  collectionName: 'components_molecules_contact_infos';
  info: {
    displayName: 'Contact info';
    icon: 'phone';
  };
  attributes: {
    address: Attribute.String;
    phone: Attribute.String;
    email: Attribute.String;
  };
}

export interface LayoutHeader extends Schema.Component {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
    icon: 'layer';
    description: '';
  };
  attributes: {
    logo: Attribute.Component<'atoms.logo'>;
    github: Attribute.Component<'atoms.icon'>;
    menu: Attribute.Component<'atoms.icon'>;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'footer';
    icon: 'book';
  };
  attributes: {
    copyright: Attribute.String;
    links: Attribute.Component<'atoms.button', true>;
  };
}

export interface AtomsTags extends Schema.Component {
  collectionName: 'components_atoms_tags';
  info: {
    displayName: 'tags';
    icon: 'priceTag';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface AtomsLogo extends Schema.Component {
  collectionName: 'components_atoms_logos';
  info: {
    displayName: 'logo';
    icon: 'brush';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Attribute.String;
  };
}

export interface AtomsLegalTerms extends Schema.Component {
  collectionName: 'components_atoms_legal_terms';
  info: {
    displayName: 'legal terms';
    icon: 'book';
  };
  attributes: {
    text: Attribute.String;
    link: Attribute.String;
  };
}

export interface AtomsIcon extends Schema.Component {
  collectionName: 'components_atoms_icons';
  info: {
    displayName: 'icon';
    icon: 'star';
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images'>;
    link: Attribute.String;
  };
}

export interface AtomsButton extends Schema.Component {
  collectionName: 'components_atoms_buttons';
  info: {
    displayName: 'button';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'molecules.list-icons': MoleculesListIcons;
      'molecules.contact-info': MoleculesContactInfo;
      'layout.header': LayoutHeader;
      'layout.footer': LayoutFooter;
      'atoms.tags': AtomsTags;
      'atoms.logo': AtomsLogo;
      'atoms.legal-terms': AtomsLegalTerms;
      'atoms.icon': AtomsIcon;
      'atoms.button': AtomsButton;
    }
  }
}
