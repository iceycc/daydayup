console.log('hellow world')

console.log(Date)
console.log(Math)
console.log(setTimeout)
console.log(setInterval)

// console.log(requestAnimationFrame) // Error
console.log(setImmediate)

console.log(__filename) 
console.log(__dirname)

// 进程对象
// node版本号，
// hrtime
// kill
// cpuUsage
// env
// argv
console.log(process) 




// let process = {
//     title: 'C:\\WINDOWS\\system32\\cmd.exe',
//     version: 'v10.15.3',
//     versions:
//      { http_parser: '2.8.0',
//        node: '10.15.3',
//        v8: '6.8.275.32-node.51',
//        uv: '1.23.2',
//        zlib: '1.2.11',
//        ares: '1.15.0',
//        modules: '64',
//        nghttp2: '1.34.0',
//        napi: '3',
//        openssl: '1.1.0j',
//        icu: '62.1',
//        unicode: '11.0',
//        cldr: '33.1',
//        tz: '2018e' },
//     arch: 'x64',
//     platform: 'win32',
//     release:
//      { name: 'node',
//        lts: 'Dubnium',
//        sourceUrl:
//         'https://nodejs.org/download/release/v10.15.3/node-v10.15.3.tar.gz',
//        headersUrl:
//         'https://nodejs.org/download/release/v10.15.3/node-v10.15.3-headers.tar.gz',
//        libUrl:
//         'https://nodejs.org/download/release/v10.15.3/win-x64/node.lib' },
//     argv:
//      [ 'C:\\develops\\nodejs\\node.exe',
//        'd:\\code\\daydayup\\A-Node\\08\\index.js' ],
//     execArgv: [],
//     env:
//      { ALLUSERSPROFILE: 'C:\\ProgramData',
//        AMD_ENTRYPOINT: 'vs/workbench/services/extensions/node/extensionHostProcess',
//        APPDATA: 'C:\\Users\\Admin\\AppData\\Roaming',
//        APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL: 'true',
//        ChocolateyInstall: 'C:\\ProgramData\\chocolatey',
//        ChocolateyLastPathUpdate: '132182078887142406',
//        CommonProgramFiles: 'C:\\Program Files\\Common Files',
//        'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
//        CommonProgramW6432: 'C:\\Program Files\\Common Files',
//        COMPUTERNAME: 'PS-03',
//        ComSpec: 'C:\\WINDOWS\\system32\\cmd.exe',
//        DriverData: 'C:\\Windows\\System32\\Drivers\\DriverData',
//        ELECTRON_RUN_AS_NODE: '1',
//        HOMEDRIVE: 'C:',
//        HOMEPATH: '\\Users\\Admin',
//        LOCALAPPDATA: 'C:\\Users\\Admin\\AppData\\Local',
//        LOGONSERVER: '\\\\PS-03',
//        NUMBER_OF_PROCESSORS: '6',
//        OneDrive: 'C:\\Users\\Admin\\OneDrive',
//        OS: 'Windows_NT',
//        Path:
//         'D:\\DevelopApp\\Anaconda;D:\\DevelopApp\\Anaconda\\Library\\mingw-w64\\bin;D:\\DevelopApp\\Anaconda\\Library\\usr\\bin;D:\\DevelopApp\\Anaconda\\Library\\bin;D:\\DevelopApp\\Anaconda\\Scripts;D:\\DevelopApp\\Xftp6\\;D:\\DevelopApp\\xshell\\;C:\\Users\\Admin\\AppData\\Roaming\\npm\\;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\develops\\nodejs\\;C:\\develops\\Git\\cmd;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;D:\\DevelopApp\\cmder;C:\\Program Files\\Calibre2\\;C:\\Program Files\\mingw-w64\\x86_64-8.1.0-posix-seh-rt_v6-rev0\\mingw64\\bin;C:\\ProgramData\\chocolatey\\bin;%SystemRoot%\\system32;%SystemRoot%;%SystemRoot%\\System32\\Wbem;%SYSTEMROOT%\\System32\\WindowsPowerShell\\v1.0\\;%SYSTEMROOT%\\System32\\OpenSSH\\;C:\\Users\\Admin\\AppData\\Local\\Programs\\Python\\Python38-32\\Scripts\\;C:\\Users\\Admin\\AppData\\Local\\Programs\\Python\\Python38-32\\;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin\\;C:\\develops\\Microsoft VS Code\\bin;C:\\Users\\Admin\\AppData\\Local\\Microsoft\\WindowsApps;;D:\\PyCharm 2019.3.3\\bin;',
//        PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC',
//        PIPE_LOGGING: 'true',
//        PROCESSOR_ARCHITECTURE: 'AMD64',
//        PROCESSOR_IDENTIFIER: 'Intel64 Family 6 Model 158 Stepping 10, GenuineIntel',
//        PROCESSOR_LEVEL: '6',
//        PROCESSOR_REVISION: '9e0a',
//        ProgramData: 'C:\\ProgramData',
//        ProgramFiles: 'C:\\Program Files',
//        'ProgramFiles(x86)': 'C:\\Program Files (x86)',
//        ProgramW6432: 'C:\\Program Files',
//        PROMPT: '$P$G',
//        PSModulePath:
//         'C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules',
//        PUBLIC: 'C:\\Users\\Public',
//        PyCharm: 'D:\\PyCharm 2019.3.3\\bin;',
//        SESSIONNAME: 'Console',
//        SystemDrive: 'C:',
//        SystemRoot: 'C:\\WINDOWS',
//        TEMP: 'C:\\Users\\Admin\\AppData\\Local\\Temp',
//        TMP: 'C:\\Users\\Admin\\AppData\\Local\\Temp',
//        USERDOMAIN: 'PS-03',
//        USERDOMAIN_ROAMINGPROFILE: 'PS-03',
//        USERNAME: 'Admin',
//        USERPROFILE: 'C:\\Users\\Admin',
//        VERBOSE_LOGGING: 'true',
//        VSCODE_CWD: 'C:\\develops\\Microsoft VS Code',
//        VSCODE_HANDLES_UNCAUGHT_ERRORS: 'true',
//        VSCODE_IPC_HOOK:
//         '\\\\.\\pipe\\1fa9692ca970862365dc969f915639a2-1.43.0-main-sock',
//        VSCODE_IPC_HOOK_EXTHOST:
//         '\\\\.\\pipe\\vscode-ipc-38168746-57a0-4917-aa6b-c06705d551c8-sock',
//        VSCODE_LOGS:
//         'C:\\Users\\Admin\\AppData\\Roaming\\Code\\logs\\20200315T094547',
//        VSCODE_LOG_STACK: 'false',
//        VSCODE_NLS_CONFIG:
//         '{"locale":"zh-cn","availableLanguages":{},"_languagePackSupport":true}',
//        VSCODE_NODE_CACHED_DATA_DIR:
//         'C:\\Users\\Admin\\AppData\\Roaming\\Code\\CachedData\\78a4c91400152c0f27ba4d363eb56d2835f9903a',
//        VSCODE_PID: '2724',
//        WebStorm: 'D:\\DevelopApp\\WebStorm 2019.1.3\\bin;',
//        windir: 'C:\\WINDOWS' },
//     pid: 18380,
//     features:
//      { debug: false,
//        uv: true,
//        ipv6: true,
//        tls_alpn: true,
//        tls_sni: true,
//        tls_ocsp: true,
//        tls: true },
//     ppid: 7144,
//     execPath: 'C:\\develops\\nodejs\\node.exe',
//     debugPort: 9229,
//     _debugProcess: [Function: _debugProcess],
//     _debugEnd: [Function: _debugEnd],
//     _startProfilerIdleNotifier: [Function: _startProfilerIdleNotifier],
//     _stopProfilerIdleNotifier: [Function: _stopProfilerIdleNotifier],
//     abort: [Function: abort],
//     chdir: [Function: chdir],
//     umask: [Function: umask],
//     _getActiveRequests: [Function: _getActiveRequests],
//     _getActiveHandles: [Function: _getActiveHandles],
//     _kill: [Function: _kill],
//     cwd: [Function: cwd],
//     dlopen: [Function: dlopen],
//     reallyExit: [Function: reallyExit],
//     uptime: [Function: uptime],
//     _rawDebug: [Function],
//     moduleLoadList:[  ],
//     binding: [Function: binding],
//     _linkedBinding: [Function: _linkedBinding],
//     _events:[Object: null prototype],
//     _eventsCount: 3,
//     _maxListeners: undefined,
//     _fatalException: [Function],
//     domain: null,
//     _exiting: false,
//     assert: [Function: deprecated],
//     config:{ },
//     setUncaughtExceptionCaptureCallback: [Function],
//     hasUncaughtExceptionCaptureCallback: [Function],
//     emitWarning: [Function],
//     nextTick: [Function: nextTick],
//     _tickCallback: [Function: _tickCallback],
//     stdout: [Getter],
//     stderr: [Getter],
//     stdin: [Getter],
//     openStdin: [Function],
//     hrtime: { [Function: hrtime] bigint: [Function] },
//     cpuUsage: [Function: cpuUsage],
//     memoryUsage: [Function: memoryUsage],
//     exit: [Function],
//     kill: [Function],
//     argv0: 'node',
//     allowedNodeEnvironmentFlags: [Getter/Setter],
//     mainModule:
//      Module {
//        id: '.',
//        exports: {},
//        parent: null,
//        filename: 'd:\\code\\daydayup\\A-Node\\08\\index.js',
//        loaded: false,
//        children: [],
//        paths:
//         [ 'd:\\code\\daydayup\\A-Node\\08\\node_modules',
//           'd:\\code\\daydayup\\A-Node\\node_modules',
//           'd:\\code\\daydayup\\node_modules',
//           'd:\\code\\node_modules',
//           'd:\\node_modules' ] } }