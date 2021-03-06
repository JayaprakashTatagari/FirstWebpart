export declare class WorkbenchPage {
    private _packageNameSymlinks;
    private _projectRootPath;
    private _tempFolderPath;
    private _workbenchPackagesTempPath;
    private _workbenchRootPath;
    private _cachedServeConfig;
    constructor();
    handleWorkbenchRequest(request: any, response: any): void;
    private _generateWorkbenchPageContent();
    /**
     * Generate a favicon URL. Chrome will request one if we don't give a URL, so in order to avoid an error in the
     * console we'll give a URL.
     */
    private readonly _faviconUrl;
    /**
     * Find the assembly.
     */
    private readonly _assemblyUrl;
    /**
     * Get the running project's serve.json
     */
    private readonly _serveConfig;
    private _getErrorBody(errorMessage);
    private _getPageWithBodyAndHead(body, head?);
    private _getAssemblyPath();
    private _disambiguateManifestPath(pathToDisambiguate);
    private _getUrlForPackagePath(packageName, pathInsidePackage);
    private _getUrlForPath(filePath);
    private _generateSyntheticManifests();
}
