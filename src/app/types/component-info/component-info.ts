export interface ComponentInfo {
    name: string,
    componentNameInUrl: ComponentUrlName,
    imageUrl: string,
    imageAlt: string,
    releasedDate: string,
    packageName: string,
    npmPackageUrl: string,
    gitHubUrl: string,
    docsUrl: string
}

export type ComponentUrlName = 'auth' | 'carousel' | 'coming soon'