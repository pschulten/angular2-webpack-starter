declare module template {

  export interface LegalEntity {
    id?: number;
    version?: number;
    revision?: any;
    name: string;
    localName?: any;
    deleted: boolean;
  }

  export interface Unicorn {
    id?: number;
    version?: number;
    legalEntity?: LegalEntity;
    name: string;
    color?: string;
    hornSize?: number;
  }

}

