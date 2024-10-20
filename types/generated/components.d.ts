import type { Schema, Attribute } from '@strapi/strapi';

export interface MoleculesSeo extends Schema.Component {
  collectionName: 'components_molecules_seos';
  info: {
    displayName: 'seo';
    icon: 'chartPie';
  };
  attributes: {
    meta_title: Attribute.String;
    meta_description: Attribute.Text;
    favicon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img_OG: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    website_url: Attribute.String;
    site_name: Attribute.String;
  };
}

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

export interface AtomsTags extends Schema.Component {
  collectionName: 'components_atoms_tags';
  info: {
    displayName: 'list';
    icon: 'priceTag';
    description: '';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface AtomsSingleTechno extends Schema.Component {
  collectionName: 'components_atoms_single_technos';
  info: {
    displayName: 'single_techno';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    percent: Attribute.Integer;
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
    linkedin: Attribute.Component<'atoms.icon'>;
    malt: Attribute.Component<'molecules.list-icons', true>;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'molecules.seo': MoleculesSeo;
      'molecules.list-icons': MoleculesListIcons;
      'molecules.contact-info': MoleculesContactInfo;
      'atoms.tags': AtomsTags;
      'atoms.single-techno': AtomsSingleTechno;
      'atoms.logo': AtomsLogo;
      'atoms.legal-terms': AtomsLegalTerms;
      'atoms.icon': AtomsIcon;
      'atoms.button': AtomsButton;
      'layout.header': LayoutHeader;
      'layout.footer': LayoutFooter;
    }
  }
}
