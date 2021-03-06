define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "نمی تواند برنامه را در این صفحه بارگذاری کند. از دکمه بازگشت مرورگر برای کوشش دوباره استفاده کنید. اگر مشکل هنوز هم وجود داشت با سرپرست سایت به تماس شده و به آنها معلومات را با جزئیات تخنیکی بدهید.",
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
      "warningHeading": "اخطار!",
      "warningLine1": "استفاده از این وسیله شما را در معرض تهدیدات امنیتی احتمالی قرار می دهد که می تواند باعث شود که دیگران به داده های شخصی Office 365 شما (مدارک، ایمیل ها، گفتگوها و بیشتر) دسترسی پیدا کنند. قبل از ادامه، مطمئن شوید که شما شخص یا سازمان که از شما درخواست کرده به این وسیله دسترسی پیدا کنید، مورد اعتماد تان هست.",
      "warningLine2": "آموختن بیشتر در اینجا: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "***An error occured loading debug manifests.",
      "debugManifestErrorDismissButtonText": "***Dismiss"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "اسکرپت های عیب زدایی اجازه داده شوند؟",
      "allowDebugLoaderTitle": "***Allow debug loader?",
      "allowDebugLoaderAndManifestsTitle": "به بار گذاری کننده عیب زدایی و اسکرپت عیب زدایی اجازه داده شود؟",
      "debugManifestLoadingWarning": "اخطار: این صفحه حاوی اسکرپت های نا امن هستند، که اگر بارگذاری شوند، می توانند بصورت بالقوه کامپیوتر شما را آسیب بزنند. ادامه ندهید مگر اینکه انکشاف دهنده مورد اعتماد شما باشد و از خطرات آن آگاه باشید.",
      "debugManifestLoadingWarning2": "اگر مطمئن نیستید، بالای {0} کلیک کنید.",
      "debugManifestLoadingConfirm": "بارگذاری کردن اسکرپت های عیب زدایی",
      "debugManifestLoadingCancel": "اسکرپت های عیب زدایی کردن را بارگذاری نکنید",
      "debugManifestLoadingCalloutText": "اگر نمی دانید چه کار کنید، اینجا کلیک کنید."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "***Loading...",
      "developerToolsTabLoadingUnknownError": "***Unknown error loading developer tools module."
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "کارآیی",
      "ErrorAccessingPerfDataErrorMessage": "عدم توانایی بدست آوردن داده های کارایی: شیی خالی و یا تعریف نشده است.",
      "ErrorAccessingRedirectDataErrorMessage": "در هنگام دستیابی به داده های کارایی هدایت دوباره HTTP مشکلی وجود داشت.",
      "ErrorParsingPercievedLatencyErrorMessage": "در هنگام تجزیه داده ها در مورد درک رکود خطا دریافت شد.",
      "ErrorParsingApiDataErrorMessage": "در هنگام تجزیه داده های API، یک خطا دریافت شد.",
      "UnkownPerformanceDataErrorMessage": "یک خطای نامعلوم رخ داد: {0}",
      "DefaultWebPartName": "بخش وب",
      "ServerResponseLabel": "پاسخگویی سرور",
      "ApplicationInitializationLabel": "در حال آغازبه کار برنامه",
      "ScriptFetchEvalLabel": "واکشی اسکرپت و ارزیابی",
      "SpLoaderStartLabel": "آغاز کار SPFx",
      "PageRenderLabel": "ارائه صفحه",
      "LeftNavRenderLabel": "ارایه راهیابی چپ",
      "CanvasRenderLabel": "ارائه بوم نقاشی",
      "LayoutRenderLabel": "ارائه طرح بندی",
      "RedirectResponseLabel": "پاسخ هدایت دوباره",
      "AppLoadLabel": "بارگذاری برنامه",
      "RenderWebPartsLabel": "ارایه بخش های وب",
      "TotalRenderTimeLabel": "مجموعی",
      "GeneralErrorMessage": "متاسفیم، در هنگام بدست آوردن داده های کارایی خطایی رخ داد.",
      "ErrorMessagePrefix": "پیام خطا: {0}",
      "PerformanceDataHint": "یادداشت: بعد از اضافه کردن یا دور ساختن یک بخش وب، صفحه را بصورت مجدد تازه کنید تا داده های کارآیی بهنگام شده را ببینید.",
      "ModulesLoadedLegendLabel": "ماژول های بارگذاری شده",
      "InitializationLegendLabel": "آغاز کردن",
      "RenderTimeLegendLabel": "زمان ارائه",
      "InitializationTimeLabel": "***Initialization time",
      "ModuleLoadingTimeLabel": "***Module loading time",
      "ModuleLazyLoadingDelayLabel": "***Module loading delayed",
      "DataFetchTimeLabel": "***Data fetch time",
      "DataFetchLegendLabel": "واکشی داده ها",
      "ItemsColumnHeader": "عناصر",
      "DurationColumnHeader": "مدت زمان",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "در دسترس نیست"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "نمایش ها",
      "noManifestSelected": "انتخاب نشدن نمایش"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "ردیابی کردن",
      "EmptyTraceData": "ردیابی ها بارگذاری نشده اند.",
      "ExportCSVButtonLabel": "صدور CSV",
      "LevelHeaderLabel": "سطح",
      "MessageHeaderLabel": "پیام",
      "ScopeHeaderLabel": "محدوده",
      "SourceHeaderLabel": "منبع",
      "TimestampHeaderLabel": "مهرزمان",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "در قسمت دسترسی به داده های ردیابی مشکلی وجود داشت."
    }
  };

  strings.default = strings;
  return strings;
});