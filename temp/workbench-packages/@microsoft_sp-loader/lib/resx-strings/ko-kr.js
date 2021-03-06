define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "이 페이지에서 응용 프로그램을 로드할 수 없습니다. 다시 시도하려면 브라우저의 [뒤로] 단추를 사용하세요. 문제가 지속될 경우 사이트의 관리자에게 연락하고 [기술 세부 사항]의 정보를 제공하세요.",
      "platformFailedToLoadError": "***Platform failed to load. Id: \"{0}\", name: \"{1}\"",
      "platformFailedToLoadWithMessageError": "***Platform failed to load. Id: \"{0}\", name: \"{1}\".\r\nError: {2}",
      "applicationFailedToInitializeError": "***Error initializing application. Error: {0}",
      "invalidPreloadedDataError": "***Invalid preloaded data.",
      "manifestNotFoundByIdError": "***Manifest not found for component id \"{0}\".",
      "manifestNotFoundError": "***Manifest not found for component id \"{0}\" and version \"{1}\".",
      "systemConfigDisabledError": "***System.config() is not supported. Use a manifest to specify the configuration.",
      "loadComponentLog": "***Loading component \"{0}\" ({1}).",
      "loadComponentEndLog": "***Component \"{0}\" ({1}) loaded.",
      "loadComponentRetryLog": "***Loading component \"{0}\" ({1}). Attempt {2} of {3}.",
      "loadComponentError": "***Failed to load component \"{0}\" ({1}).\r\nOriginal error: {2}",
      "loadComponentMaxRetriesError": "***Attempted to load component \"{0}\" ({1}) {2} times without success.",
      "loadComponentDependencyError": "***Failed to load component dependency \"{0}\" from component \"{1}\" ({2}).\r\nOriginal error: {3}",
      "loadComponentDependencyFailoverPathError": "***Failed to load component dependency \"{0}\" with failover path \"{1}\" from component \"{2}\" ({3}).\r\nOriginal error: {4}",
      "loadPathDependencyLog": "***Loading path dependency \"{0}\" from component \"{1}\" ({2})",
      "loadPathDependencyError": "***Failed to load path dependency \"{0}\" from component \"{1}\" ({2}).\r\nOriginal error: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "***Failed to load path dependency \"{0}\" from component \"{1}\" ({2}) due to another dependency that failed to load.",
      "loadEntryPointError": "***Failed to load entry point from component \"{0}\" ({1}).\r\nOriginal error: {2}",
      "loadComponentReturnsEmptyError": "***loadComponent() returned an empty object for component \"{0}\" ({1}).",
      "loadComponentReturnsDefaultEmptyError": "***loadComponent() returned an object with an empty default property for component \"{0}\" ({1}).",
      "moduleHasUndeclaredDependencyError": "***The entry point for component \"{0}\" ({1}) has a dependency on \"{2}\" that is not declared in the manifest.",
      "loadScriptWithStringError": "***loadScript function doesn't allow a string as 2nd parameter. Use ILoadScriptOptions instead.",
      "tooManyManifestsError": "***{0} manifests (versions {1}) found for component \"{2}\".",
      "tooManyCompatibleVersionsError": "***{0} compatible versions ({1}) found for component \"{2}\" version \"{3}\".",
      "tooManyComponentsError": "***Too many components found for id \"{0}\".",
      "noComponentFoundError": "***No component found for id \"{0}\".",
      "deleteComponentLog": "***Deleting component \"{0}\" version \"{1}\" from the store.",
      "browserNotSupportedError": "***This version of your browser is not supported.\r\nPlease update your browser to the latest version.",
      "ie9OrOlderNotSupportedError": "***This page does not support Internet Explorer releases older than version 10. Please update your web browser.",
      "firefox43OrOlderNotSupportedError": "***This page does not support Mozilla Firefox releases older than version 44. Please update your web browser.",
      "resourceNotFoundError": "***Resource \"{0}\" not found in loader configuration of manifest for component \"{1}\" ({2}).",
      "noFailoverPathError": "***Cannot call resolveAddress() on a component with no failover path",
      "urlStatusLocalhostFileNotFoundError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The file was not found in the server.\r\nMake sure that you are running 'gulp serve'.",
      "urlStatusFileNotFoundError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The file was not found in the server.",
      "urlStatusForbiddenError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The access to the file is forbidden.",
      "urlStatusClientErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was an error requesting the file.",
      "urlStatusServerErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a problem in the server.",
      "urlStatusLocalhostNetworkErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem.\r\nMake sure that you are running 'gulp serve' and you have run 'gulp trust-dev-cert'.",
      "urlStatusHttpsNetworkErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem.\r\nThis may be a problem with a HTTPS certificate. Make sure you have the right certificate.",
      "urlStatusNetworkErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem.",
      "urlStatusUndefinedError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}) because of unknown problems.",
      "isUndefinedValidateError": "***The value for \"{0}\" must not be undefined",
      "failedToCreateGlobalVariableError": "***Failed to create global variable \"{0}\" from script \"{1}\"",
      "dependencyLoadError": "***Failed to load module '{0}' because dependency {1} was not loaded",
      "missingPathDependencyError": "***Missing path dependency \"{0}\" from component \"{1}\" ({2}). Existing path dependencies: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "***Error loading debug script. Ensure the server is running and the \"{0}\" parameter URL is correct.",
      "errorLoadingDebugScriptHTTP": "***Error loading debug script. Ensure the server is running, the \"{0}\" parameter URL is correct, and loading unsafe scripts is allowed. Also consider using a development certificate and serving debug scripts over HTTPS.",
      "errorLoadingDebugScriptMalformed": "***Error loading debug script. The debug URL ({0}) appears to be malformed.",
      "errorLoadingDebugScriptUnknown": "***Unknown error loading a debug script.",
      "errorLoadingDebugLoaderTitle": "***Error loading debug loader.",
      "errorLoadingDebugManifestTitle": "***Error loading debug manifests.",
      "errorLoadingUnknownTitle": "***Error loading debug scripts."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "***Missing component or initializer function.",
      "closeDeveloperToolsAriaLabel": "***Close developer tools."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "경고!",
      "warningLine1": "이 도구를 사용하면 다른 사람이 개인 Office 365 데이터(문서, 전자 메일, 대화 등)에 액세스할 수 있는 잠재적 보안 위협에 노출될 수 있습니다. 계속하기 전에 이 도구에 액세스하도록 요청한 사람이나 조직을 신뢰할 수 있는지 확인하세요.",
      "warningLine2": "자세히 알아보기: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "***An error occured loading debug manifests.",
      "debugManifestErrorDismissButtonText": "***Dismiss"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "디버그 스크립트를 허용하시겠습니까?",
      "allowDebugLoaderTitle": "***Allow debug loader?",
      "allowDebugLoaderAndManifestsTitle": "디버그 로더와 디버그 스크립트를 허용하시겠습니까?",
      "debugManifestLoadingWarning": "경고: 이 페이지에는 로드될 경우 사용자의 컴퓨터를 손상할 수 있는 안전하지 않은 스크립트가 포함되어 있습니다. 개발자를 신뢰하며 위험성을 이해하는 경우 이외에는 계속하지 않는 것이 좋습니다.",
      "debugManifestLoadingWarning2": "확실하지 않은 경우 {0}을(를) 클릭하세요.",
      "debugManifestLoadingConfirm": "디버그 스크립트 로드",
      "debugManifestLoadingCancel": "디버그 스크립트 로드 안 함",
      "debugManifestLoadingCalloutText": "잘 모르는 경우 여기를 클릭하세요."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "***Loading...",
      "developerToolsTabLoadingUnknownError": "***Unknown error loading developer tools module."
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "성능",
      "ErrorAccessingPerfDataErrorMessage": "성능 데이터를 검색할 수 없음: 개체가 null이거나 정의되지 않았습니다.",
      "ErrorAccessingRedirectDataErrorMessage": "HTTP 리디렉션 성능 데이터에 액세스하는 동안 문제가 발생했습니다.",
      "ErrorParsingPercievedLatencyErrorMessage": "인지된 대기 시간 데이터를 구문 분석하는 중 오류가 발생했습니다.",
      "ErrorParsingApiDataErrorMessage": "API 데이터를 구문 분석하는 중 오류가 발생했습니다.",
      "UnkownPerformanceDataErrorMessage": "알 수 없는 오류 발생: {0}",
      "DefaultWebPartName": "웹 파트",
      "ServerResponseLabel": "서버 응답",
      "ApplicationInitializationLabel": "응용 프로그램 초기화",
      "ScriptFetchEvalLabel": "스크립트 가져오기 및 평가",
      "SpLoaderStartLabel": "SPFx 초기화",
      "PageRenderLabel": "페이지 렌더링",
      "LeftNavRenderLabel": "왼쪽 탐색 렌더링",
      "CanvasRenderLabel": "캔버스 렌더링",
      "LayoutRenderLabel": "레이아웃 렌더링",
      "RedirectResponseLabel": "리디렉션 응답",
      "AppLoadLabel": "응용 프로그램 로드",
      "RenderWebPartsLabel": "웹 파트 렌더링",
      "TotalRenderTimeLabel": "합계",
      "GeneralErrorMessage": "죄송합니다. 성능 데이터를 검색하는 동안 오류가 발생했습니다.",
      "ErrorMessagePrefix": "오류 메시지: {0}",
      "PerformanceDataHint": "참고: 웹 파트를 추가하거나 제거한 후에 업데이트된 성능 데이터를 보려면 페이지를 새로 고치세요.",
      "ModulesLoadedLegendLabel": "로드된 모듈",
      "InitializationLegendLabel": "초기화",
      "RenderTimeLegendLabel": "렌더링 시간",
      "InitializationTimeLabel": "***Initialization time",
      "ModuleLoadingTimeLabel": "***Module loading time",
      "ModuleLazyLoadingDelayLabel": "***Module loading delayed",
      "DataFetchTimeLabel": "***Data fetch time",
      "DataFetchLegendLabel": "데이터 가져오기",
      "ItemsColumnHeader": "항목",
      "DurationColumnHeader": "기간",
      "MillisecondsUnitLabel": "{0}ms",
      "NAPlaceholder": "N/A"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "매니페스트",
      "noManifestSelected": "선택된 매니페스트가 없습니다."
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "추적",
      "EmptyTraceData": "로드된 추적이 없습니다.",
      "ExportCSVButtonLabel": "CSV 내보내기",
      "LevelHeaderLabel": "수준",
      "MessageHeaderLabel": "메시지",
      "ScopeHeaderLabel": "범위",
      "SourceHeaderLabel": "소스",
      "TimestampHeaderLabel": "타임스탬프",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "추적 데이터에 액세스하는 중 문제가 발생했습니다."
    }
  };

  strings.default = strings;
  return strings;
});