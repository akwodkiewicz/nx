import type { NameAndDirectoryFormat } from '@nx/devkit/src/generators/artifact-name-and-directory-utils';

/**
 * Same as the @nx/react library schema, except it removes keys: style, routing, globalCss
 */
export interface Schema {
  name: string;
  directory?: string;
  skipFormat: boolean; // default is false
  skipTests: boolean; // default is false
  export: boolean; // default is false
  classComponent: boolean; // default is false
  js: boolean; // default is false
  nameAndDirectoryFormat?: NameAndDirectoryFormat;
}
