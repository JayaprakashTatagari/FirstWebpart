/// <reference types="react" />
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file PerformanceHeader.tsx
 * Sub-component for PerformanceDisplay. This component gives an overview of the performance data
 * that is detailed in the graph.
 */
import * as React from 'react';
import { IPerfItem } from '../../../../DataProviders/PerformanceDisplayStateProvider';
export interface IPerformanceHeaderProps {
    perfItems: IPerfItem[];
    overallDuration: number;
}
export default class PerformanceHeader extends React.Component<IPerformanceHeaderProps, {}> {
    private _serverResponse;
    private _appStart;
    private _renderPageDuration;
    private _renderWebparts;
    private _hasWebParts;
    constructor(props: IPerformanceHeaderProps);
    render(): React.ReactElement<IPerformanceHeaderProps>;
    /**
     * Calculate overall load times for categories:
     * Server Response
     * App Load
     * Page Render
     * Web Parts Render
     * Total
     */
    private _getPerfTimings();
}
