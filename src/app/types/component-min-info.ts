import { ComponentInfo } from "./component-info";

export interface ComponentMinInfo extends Pick<ComponentInfo, 'name' | 'componentNameInUrl'> {}
