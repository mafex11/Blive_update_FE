"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@metamask";
exports.ids = ["vendor-chunks/@metamask"];
exports.modules = {

/***/ "(ssr)/./node_modules/@metamask/detect-provider/dist/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@metamask/detect-provider/dist/index.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n/**\n * Returns a Promise that resolves to the value of window.ethereum if it is\n * set within the given timeout, or null.\n * The Promise will not reject, but an error will be thrown if invalid options\n * are provided.\n *\n * @param options - Options bag.\n * @param options.mustBeMetaMask - Whether to only look for MetaMask providers.\n * Default: false\n * @param options.silent - Whether to silence console errors. Does not affect\n * thrown errors. Default: false\n * @param options.timeout - Milliseconds to wait for 'ethereum#initialized' to\n * be dispatched. Default: 3000\n * @returns A Promise that resolves with the Provider if it is detected within\n * given timeout, otherwise null.\n */\nfunction detectEthereumProvider({ mustBeMetaMask = false, silent = false, timeout = 3000, } = {}) {\n    _validateInputs();\n    let handled = false;\n    return new Promise((resolve) => {\n        if (window.ethereum) {\n            handleEthereum();\n        }\n        else {\n            window.addEventListener('ethereum#initialized', handleEthereum, { once: true });\n            setTimeout(() => {\n                handleEthereum();\n            }, timeout);\n        }\n        function handleEthereum() {\n            if (handled) {\n                return;\n            }\n            handled = true;\n            window.removeEventListener('ethereum#initialized', handleEthereum);\n            const { ethereum } = window;\n            if (ethereum && (!mustBeMetaMask || ethereum.isMetaMask)) {\n                resolve(ethereum);\n            }\n            else {\n                const message = mustBeMetaMask && ethereum\n                    ? 'Non-MetaMask window.ethereum detected.'\n                    : 'Unable to detect window.ethereum.';\n                !silent && console.error('@metamask/detect-provider:', message);\n                resolve(null);\n            }\n        }\n    });\n    function _validateInputs() {\n        if (typeof mustBeMetaMask !== 'boolean') {\n            throw new Error(`@metamask/detect-provider: Expected option 'mustBeMetaMask' to be a boolean.`);\n        }\n        if (typeof silent !== 'boolean') {\n            throw new Error(`@metamask/detect-provider: Expected option 'silent' to be a boolean.`);\n        }\n        if (typeof timeout !== 'number') {\n            throw new Error(`@metamask/detect-provider: Expected option 'timeout' to be a number.`);\n        }\n    }\n}\nmodule.exports = detectEthereumProvider;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQWdCQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFDSCxTQUFTLHNCQUFzQixDQUErQixFQUM1RCxjQUFjLEdBQUcsS0FBSyxFQUN0QixNQUFNLEdBQUcsS0FBSyxFQUNkLE9BQU8sR0FBRyxJQUFJLEdBQ2YsR0FBRyxFQUFFO0lBRUosZUFBZSxFQUFFLENBQUM7SUFFbEIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBRXBCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUM3QixJQUFLLE1BQWlCLENBQUMsUUFBUSxFQUFFO1lBRS9CLGNBQWMsRUFBRSxDQUFDO1NBRWxCO2FBQU07WUFFTCxNQUFNLENBQUMsZ0JBQWdCLENBQ3JCLHNCQUFzQixFQUN0QixjQUFjLEVBQ2QsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQ2YsQ0FBQztZQUVGLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsY0FBYyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ2I7UUFFRCxTQUFTLGNBQWM7WUFFckIsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsT0FBTzthQUNSO1lBQ0QsT0FBTyxHQUFHLElBQUksQ0FBQztZQUVmLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBc0IsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUVuRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBZ0IsQ0FBQztZQUV0QyxJQUFJLFFBQVEsSUFBSSxDQUFDLENBQUMsY0FBYyxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDeEQsT0FBTyxDQUFDLFFBQXdCLENBQUMsQ0FBQzthQUNuQztpQkFBTTtnQkFFTCxNQUFNLE9BQU8sR0FBRyxjQUFjLElBQUksUUFBUTtvQkFDeEMsQ0FBQyxDQUFDLHdDQUF3QztvQkFDMUMsQ0FBQyxDQUFDLG1DQUFtQyxDQUFDO2dCQUV4QyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLDRCQUE0QixFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNoRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDZjtRQUNILENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILFNBQVMsZUFBZTtRQUN0QixJQUFJLE9BQU8sY0FBYyxLQUFLLFNBQVMsRUFBRTtZQUN2QyxNQUFNLElBQUksS0FBSyxDQUFDLDhFQUE4RSxDQUFDLENBQUM7U0FDakc7UUFDRCxJQUFJLE9BQU8sTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUMvQixNQUFNLElBQUksS0FBSyxDQUFDLHNFQUFzRSxDQUFDLENBQUM7U0FDekY7UUFDRCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUMvQixNQUFNLElBQUksS0FBSyxDQUFDLHNFQUFzRSxDQUFDLENBQUM7U0FDekY7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQWxGRCxpQkFBUyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBNZXRhTWFza0V0aGVyZXVtUHJvdmlkZXIge1xuICBpc01ldGFNYXNrPzogYm9vbGVhbjtcbiAgb25jZShldmVudE5hbWU6IHN0cmluZyB8IHN5bWJvbCwgbGlzdGVuZXI6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCk6IHRoaXM7XG4gIG9uKGV2ZW50TmFtZTogc3RyaW5nIHwgc3ltYm9sLCBsaXN0ZW5lcjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkKTogdGhpcztcbiAgb2ZmKGV2ZW50TmFtZTogc3RyaW5nIHwgc3ltYm9sLCBsaXN0ZW5lcjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkKTogdGhpcztcbiAgYWRkTGlzdGVuZXIoZXZlbnROYW1lOiBzdHJpbmcgfCBzeW1ib2wsIGxpc3RlbmVyOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQpOiB0aGlzO1xuICByZW1vdmVMaXN0ZW5lcihldmVudE5hbWU6IHN0cmluZyB8IHN5bWJvbCwgbGlzdGVuZXI6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCk6IHRoaXM7XG4gIHJlbW92ZUFsbExpc3RlbmVycyhldmVudD86IHN0cmluZyB8IHN5bWJvbCk6IHRoaXM7XG59XG5cbmludGVyZmFjZSBXaW5kb3cge1xuICBldGhlcmV1bT86IE1ldGFNYXNrRXRoZXJldW1Qcm92aWRlcjtcbn1cblxuZXhwb3J0ID0gZGV0ZWN0RXRoZXJldW1Qcm92aWRlcjtcblxuLyoqXG4gKiBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSB2YWx1ZSBvZiB3aW5kb3cuZXRoZXJldW0gaWYgaXQgaXNcbiAqIHNldCB3aXRoaW4gdGhlIGdpdmVuIHRpbWVvdXQsIG9yIG51bGwuXG4gKiBUaGUgUHJvbWlzZSB3aWxsIG5vdCByZWplY3QsIGJ1dCBhbiBlcnJvciB3aWxsIGJlIHRocm93biBpZiBpbnZhbGlkIG9wdGlvbnNcbiAqIGFyZSBwcm92aWRlZC5cbiAqXG4gKiBAcGFyYW0gb3B0aW9ucyAtIE9wdGlvbnMgYmFnLlxuICogQHBhcmFtIG9wdGlvbnMubXVzdEJlTWV0YU1hc2sgLSBXaGV0aGVyIHRvIG9ubHkgbG9vayBmb3IgTWV0YU1hc2sgcHJvdmlkZXJzLlxuICogRGVmYXVsdDogZmFsc2VcbiAqIEBwYXJhbSBvcHRpb25zLnNpbGVudCAtIFdoZXRoZXIgdG8gc2lsZW5jZSBjb25zb2xlIGVycm9ycy4gRG9lcyBub3QgYWZmZWN0XG4gKiB0aHJvd24gZXJyb3JzLiBEZWZhdWx0OiBmYWxzZVxuICogQHBhcmFtIG9wdGlvbnMudGltZW91dCAtIE1pbGxpc2Vjb25kcyB0byB3YWl0IGZvciAnZXRoZXJldW0jaW5pdGlhbGl6ZWQnIHRvXG4gKiBiZSBkaXNwYXRjaGVkLiBEZWZhdWx0OiAzMDAwXG4gKiBAcmV0dXJucyBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBQcm92aWRlciBpZiBpdCBpcyBkZXRlY3RlZCB3aXRoaW5cbiAqIGdpdmVuIHRpbWVvdXQsIG90aGVyd2lzZSBudWxsLlxuICovXG5mdW5jdGlvbiBkZXRlY3RFdGhlcmV1bVByb3ZpZGVyPFQgPSBNZXRhTWFza0V0aGVyZXVtUHJvdmlkZXI+KHtcbiAgbXVzdEJlTWV0YU1hc2sgPSBmYWxzZSxcbiAgc2lsZW50ID0gZmFsc2UsXG4gIHRpbWVvdXQgPSAzMDAwLFxufSA9IHt9KTogUHJvbWlzZTxUIHwgbnVsbD4ge1xuXG4gIF92YWxpZGF0ZUlucHV0cygpO1xuXG4gIGxldCBoYW5kbGVkID0gZmFsc2U7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgaWYgKCh3aW5kb3cgYXMgV2luZG93KS5ldGhlcmV1bSkge1xuXG4gICAgICBoYW5kbGVFdGhlcmV1bSgpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdldGhlcmV1bSNpbml0aWFsaXplZCcsXG4gICAgICAgIGhhbmRsZUV0aGVyZXVtLFxuICAgICAgICB7IG9uY2U6IHRydWUgfSxcbiAgICAgICk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBoYW5kbGVFdGhlcmV1bSgpO1xuICAgICAgfSwgdGltZW91dCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRXRoZXJldW0oKSB7XG5cbiAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGhhbmRsZWQgPSB0cnVlO1xuXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXRoZXJldW0jaW5pdGlhbGl6ZWQnLCBoYW5kbGVFdGhlcmV1bSk7XG5cbiAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdyBhcyBXaW5kb3c7XG5cbiAgICAgIGlmIChldGhlcmV1bSAmJiAoIW11c3RCZU1ldGFNYXNrIHx8IGV0aGVyZXVtLmlzTWV0YU1hc2spKSB7XG4gICAgICAgIHJlc29sdmUoZXRoZXJldW0gYXMgdW5rbm93biBhcyBUKTtcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IG11c3RCZU1ldGFNYXNrICYmIGV0aGVyZXVtXG4gICAgICAgICAgPyAnTm9uLU1ldGFNYXNrIHdpbmRvdy5ldGhlcmV1bSBkZXRlY3RlZC4nXG4gICAgICAgICAgOiAnVW5hYmxlIHRvIGRldGVjdCB3aW5kb3cuZXRoZXJldW0uJztcblxuICAgICAgICAhc2lsZW50ICYmIGNvbnNvbGUuZXJyb3IoJ0BtZXRhbWFzay9kZXRlY3QtcHJvdmlkZXI6JywgbWVzc2FnZSk7XG4gICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBfdmFsaWRhdGVJbnB1dHMoKSB7XG4gICAgaWYgKHR5cGVvZiBtdXN0QmVNZXRhTWFzayAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEBtZXRhbWFzay9kZXRlY3QtcHJvdmlkZXI6IEV4cGVjdGVkIG9wdGlvbiAnbXVzdEJlTWV0YU1hc2snIHRvIGJlIGEgYm9vbGVhbi5gKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzaWxlbnQgIT09ICdib29sZWFuJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBAbWV0YW1hc2svZGV0ZWN0LXByb3ZpZGVyOiBFeHBlY3RlZCBvcHRpb24gJ3NpbGVudCcgdG8gYmUgYSBib29sZWFuLmApO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRpbWVvdXQgIT09ICdudW1iZXInKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEBtZXRhbWFzay9kZXRlY3QtcHJvdmlkZXI6IEV4cGVjdGVkIG9wdGlvbiAndGltZW91dCcgdG8gYmUgYSBudW1iZXIuYCk7XG4gICAgfVxuICB9XG59XG4iXX0=//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQG1ldGFtYXNrL2RldGVjdC1wcm92aWRlci9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsMERBQTBELElBQUk7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsWUFBWTtBQUMxRjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFdBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyIsInNvdXJjZXMiOlsid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL0BtZXRhbWFzay9kZXRlY3QtcHJvdmlkZXIvZGlzdC9pbmRleC5qcz81ZmYzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSB2YWx1ZSBvZiB3aW5kb3cuZXRoZXJldW0gaWYgaXQgaXNcbiAqIHNldCB3aXRoaW4gdGhlIGdpdmVuIHRpbWVvdXQsIG9yIG51bGwuXG4gKiBUaGUgUHJvbWlzZSB3aWxsIG5vdCByZWplY3QsIGJ1dCBhbiBlcnJvciB3aWxsIGJlIHRocm93biBpZiBpbnZhbGlkIG9wdGlvbnNcbiAqIGFyZSBwcm92aWRlZC5cbiAqXG4gKiBAcGFyYW0gb3B0aW9ucyAtIE9wdGlvbnMgYmFnLlxuICogQHBhcmFtIG9wdGlvbnMubXVzdEJlTWV0YU1hc2sgLSBXaGV0aGVyIHRvIG9ubHkgbG9vayBmb3IgTWV0YU1hc2sgcHJvdmlkZXJzLlxuICogRGVmYXVsdDogZmFsc2VcbiAqIEBwYXJhbSBvcHRpb25zLnNpbGVudCAtIFdoZXRoZXIgdG8gc2lsZW5jZSBjb25zb2xlIGVycm9ycy4gRG9lcyBub3QgYWZmZWN0XG4gKiB0aHJvd24gZXJyb3JzLiBEZWZhdWx0OiBmYWxzZVxuICogQHBhcmFtIG9wdGlvbnMudGltZW91dCAtIE1pbGxpc2Vjb25kcyB0byB3YWl0IGZvciAnZXRoZXJldW0jaW5pdGlhbGl6ZWQnIHRvXG4gKiBiZSBkaXNwYXRjaGVkLiBEZWZhdWx0OiAzMDAwXG4gKiBAcmV0dXJucyBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBQcm92aWRlciBpZiBpdCBpcyBkZXRlY3RlZCB3aXRoaW5cbiAqIGdpdmVuIHRpbWVvdXQsIG90aGVyd2lzZSBudWxsLlxuICovXG5mdW5jdGlvbiBkZXRlY3RFdGhlcmV1bVByb3ZpZGVyKHsgbXVzdEJlTWV0YU1hc2sgPSBmYWxzZSwgc2lsZW50ID0gZmFsc2UsIHRpbWVvdXQgPSAzMDAwLCB9ID0ge30pIHtcbiAgICBfdmFsaWRhdGVJbnB1dHMoKTtcbiAgICBsZXQgaGFuZGxlZCA9IGZhbHNlO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgICAgICAgICBoYW5kbGVFdGhlcmV1bSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2V0aGVyZXVtI2luaXRpYWxpemVkJywgaGFuZGxlRXRoZXJldW0sIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZUV0aGVyZXVtKCk7XG4gICAgICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVFdGhlcmV1bSgpIHtcbiAgICAgICAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGFuZGxlZCA9IHRydWU7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXRoZXJldW0jaW5pdGlhbGl6ZWQnLCBoYW5kbGVFdGhlcmV1bSk7XG4gICAgICAgICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG4gICAgICAgICAgICBpZiAoZXRoZXJldW0gJiYgKCFtdXN0QmVNZXRhTWFzayB8fCBldGhlcmV1bS5pc01ldGFNYXNrKSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZXRoZXJldW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IG11c3RCZU1ldGFNYXNrICYmIGV0aGVyZXVtXG4gICAgICAgICAgICAgICAgICAgID8gJ05vbi1NZXRhTWFzayB3aW5kb3cuZXRoZXJldW0gZGV0ZWN0ZWQuJ1xuICAgICAgICAgICAgICAgICAgICA6ICdVbmFibGUgdG8gZGV0ZWN0IHdpbmRvdy5ldGhlcmV1bS4nO1xuICAgICAgICAgICAgICAgICFzaWxlbnQgJiYgY29uc29sZS5lcnJvcignQG1ldGFtYXNrL2RldGVjdC1wcm92aWRlcjonLCBtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gX3ZhbGlkYXRlSW5wdXRzKCkge1xuICAgICAgICBpZiAodHlwZW9mIG11c3RCZU1ldGFNYXNrICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQG1ldGFtYXNrL2RldGVjdC1wcm92aWRlcjogRXhwZWN0ZWQgb3B0aW9uICdtdXN0QmVNZXRhTWFzaycgdG8gYmUgYSBib29sZWFuLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygc2lsZW50ICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQG1ldGFtYXNrL2RldGVjdC1wcm92aWRlcjogRXhwZWN0ZWQgb3B0aW9uICdzaWxlbnQnIHRvIGJlIGEgYm9vbGVhbi5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRpbWVvdXQgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEBtZXRhbWFzay9kZXRlY3QtcHJvdmlkZXI6IEV4cGVjdGVkIG9wdGlvbiAndGltZW91dCcgdG8gYmUgYSBudW1iZXIuYCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRldGVjdEV0aGVyZXVtUHJvdmlkZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRV2RDUVRzN096czdPenM3T3pzN096czdPMGRCWlVjN1FVRkRTQ3hUUVVGVExITkNRVUZ6UWl4RFFVRXJRaXhGUVVNMVJDeGpRVUZqTEVkQlFVY3NTMEZCU3l4RlFVTjBRaXhOUVVGTkxFZEJRVWNzUzBGQlN5eEZRVU5rTEU5QlFVOHNSMEZCUnl4SlFVRkpMRWRCUTJZc1IwRkJSeXhGUVVGRk8wbEJSVW9zWlVGQlpTeEZRVUZGTEVOQlFVTTdTVUZGYkVJc1NVRkJTU3hQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZETzBsQlJYQkNMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNSVUZCUlR0UlFVTTNRaXhKUVVGTExFMUJRV2xDTEVOQlFVTXNVVUZCVVN4RlFVRkZPMWxCUlM5Q0xHTkJRV01zUlVGQlJTeERRVUZETzFOQlJXeENPMkZCUVUwN1dVRkZUQ3hOUVVGTkxFTkJRVU1zWjBKQlFXZENMRU5CUTNKQ0xITkNRVUZ6UWl4RlFVTjBRaXhqUVVGakxFVkJRMlFzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRU5CUTJZc1EwRkJRenRaUVVWR0xGVkJRVlVzUTBGQlF5eEhRVUZITEVWQlFVVTdaMEpCUTJRc1kwRkJZeXhGUVVGRkxFTkJRVU03V1VGRGJrSXNRMEZCUXl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8xTkJRMkk3VVVGRlJDeFRRVUZUTEdOQlFXTTdXVUZGY2tJc1NVRkJTU3hQUVVGUExFVkJRVVU3WjBKQlExZ3NUMEZCVHp0aFFVTlNPMWxCUTBRc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF6dFpRVVZtTEUxQlFVMHNRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eHpRa0ZCYzBJc1JVRkJSU3hqUVVGakxFTkJRVU1zUTBGQlF6dFpRVVZ1UlN4TlFVRk5MRVZCUVVVc1VVRkJVU3hGUVVGRkxFZEJRVWNzVFVGQlowSXNRMEZCUXp0WlFVVjBReXhKUVVGSkxGRkJRVkVzU1VGQlNTeERRVUZETEVOQlFVTXNZMEZCWXl4SlFVRkpMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zUlVGQlJUdG5Ra0ZEZUVRc1QwRkJUeXhEUVVGRExGRkJRWGRDTEVOQlFVTXNRMEZCUXp0aFFVTnVRenRwUWtGQlRUdG5Ra0ZGVEN4TlFVRk5MRTlCUVU4c1IwRkJSeXhqUVVGakxFbEJRVWtzVVVGQlVUdHZRa0ZEZUVNc1EwRkJReXhEUVVGRExIZERRVUYzUXp0dlFrRkRNVU1zUTBGQlF5eERRVUZETEcxRFFVRnRReXhEUVVGRE8yZENRVVY0UXl4RFFVRkRMRTFCUVUwc1NVRkJTU3hQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETERSQ1FVRTBRaXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzJkQ1FVTm9SU3hQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdZVUZEWmp0UlFVTklMRU5CUVVNN1NVRkRTQ3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVVZJTEZOQlFWTXNaVUZCWlR0UlFVTjBRaXhKUVVGSkxFOUJRVThzWTBGQll5eExRVUZMTEZOQlFWTXNSVUZCUlR0WlFVTjJReXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETERoRlFVRTRSU3hEUVVGRExFTkJRVU03VTBGRGFrYzdVVUZEUkN4SlFVRkpMRTlCUVU4c1RVRkJUU3hMUVVGTExGTkJRVk1zUlVGQlJUdFpRVU12UWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExITkZRVUZ6UlN4RFFVRkRMRU5CUVVNN1UwRkRla1k3VVVGRFJDeEpRVUZKTEU5QlFVOHNUMEZCVHl4TFFVRkxMRkZCUVZFc1JVRkJSVHRaUVVNdlFpeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSE5GUVVGelJTeERRVUZETEVOQlFVTTdVMEZEZWtZN1NVRkRTQ3hEUVVGRE8wRkJRMGdzUTBGQlF6dEJRV3hHUkN4cFFrRkJVeXh6UWtGQmMwSXNRMEZCUXlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHVkR1Z5Wm1GalpTQk5aWFJoVFdGemEwVjBhR1Z5WlhWdFVISnZkbWxrWlhJZ2UxeHVJQ0JwYzAxbGRHRk5ZWE5yUHpvZ1ltOXZiR1ZoYmp0Y2JpQWdiMjVqWlNobGRtVnVkRTVoYldVNklITjBjbWx1WnlCOElITjViV0p2YkN3Z2JHbHpkR1Z1WlhJNklDZ3VMaTVoY21kek9pQmhibmxiWFNrZ1BUNGdkbTlwWkNrNklIUm9hWE03WEc0Z0lHOXVLR1YyWlc1MFRtRnRaVG9nYzNSeWFXNW5JSHdnYzNsdFltOXNMQ0JzYVhOMFpXNWxjam9nS0M0dUxtRnlaM002SUdGdWVWdGRLU0E5UGlCMmIybGtLVG9nZEdocGN6dGNiaUFnYjJabUtHVjJaVzUwVG1GdFpUb2djM1J5YVc1bklId2djM2x0WW05c0xDQnNhWE4wWlc1bGNqb2dLQzR1TG1GeVozTTZJR0Z1ZVZ0ZEtTQTlQaUIyYjJsa0tUb2dkR2hwY3p0Y2JpQWdZV1JrVEdsemRHVnVaWElvWlhabGJuUk9ZVzFsT2lCemRISnBibWNnZkNCemVXMWliMndzSUd4cGMzUmxibVZ5T2lBb0xpNHVZWEpuY3pvZ1lXNTVXMTBwSUQwK0lIWnZhV1FwT2lCMGFHbHpPMXh1SUNCeVpXMXZkbVZNYVhOMFpXNWxjaWhsZG1WdWRFNWhiV1U2SUhOMGNtbHVaeUI4SUhONWJXSnZiQ3dnYkdsemRHVnVaWEk2SUNndUxpNWhjbWR6T2lCaGJubGJYU2tnUFQ0Z2RtOXBaQ2s2SUhSb2FYTTdYRzRnSUhKbGJXOTJaVUZzYkV4cGMzUmxibVZ5Y3lobGRtVnVkRDg2SUhOMGNtbHVaeUI4SUhONWJXSnZiQ2s2SUhSb2FYTTdYRzU5WEc1Y2JtbHVkR1Z5Wm1GalpTQlhhVzVrYjNjZ2UxeHVJQ0JsZEdobGNtVjFiVDg2SUUxbGRHRk5ZWE5yUlhSb1pYSmxkVzFRY205MmFXUmxjanRjYm4xY2JseHVaWGh3YjNKMElEMGdaR1YwWldOMFJYUm9aWEpsZFcxUWNtOTJhV1JsY2p0Y2JseHVMeW9xWEc0Z0tpQlNaWFIxY201eklHRWdVSEp2YldselpTQjBhR0YwSUhKbGMyOXNkbVZ6SUhSdklIUm9aU0IyWVd4MVpTQnZaaUIzYVc1a2IzY3VaWFJvWlhKbGRXMGdhV1lnYVhRZ2FYTmNiaUFxSUhObGRDQjNhWFJvYVc0Z2RHaGxJR2RwZG1WdUlIUnBiV1Z2ZFhRc0lHOXlJRzUxYkd3dVhHNGdLaUJVYUdVZ1VISnZiV2x6WlNCM2FXeHNJRzV2ZENCeVpXcGxZM1FzSUdKMWRDQmhiaUJsY25KdmNpQjNhV3hzSUdKbElIUm9jbTkzYmlCcFppQnBiblpoYkdsa0lHOXdkR2x2Ym5OY2JpQXFJR0Z5WlNCd2NtOTJhV1JsWkM1Y2JpQXFYRzRnS2lCQWNHRnlZVzBnYjNCMGFXOXVjeUF0SUU5d2RHbHZibk1nWW1GbkxseHVJQ29nUUhCaGNtRnRJRzl3ZEdsdmJuTXViWFZ6ZEVKbFRXVjBZVTFoYzJzZ0xTQlhhR1YwYUdWeUlIUnZJRzl1YkhrZ2JHOXZheUJtYjNJZ1RXVjBZVTFoYzJzZ2NISnZkbWxrWlhKekxseHVJQ29nUkdWbVlYVnNkRG9nWm1Gc2MyVmNiaUFxSUVCd1lYSmhiU0J2Y0hScGIyNXpMbk5wYkdWdWRDQXRJRmRvWlhSb1pYSWdkRzhnYzJsc1pXNWpaU0JqYjI1emIyeGxJR1Z5Y205eWN5NGdSRzlsY3lCdWIzUWdZV1ptWldOMFhHNGdLaUIwYUhKdmQyNGdaWEp5YjNKekxpQkVaV1poZFd4ME9pQm1ZV3h6WlZ4dUlDb2dRSEJoY21GdElHOXdkR2x2Ym5NdWRHbHRaVzkxZENBdElFMXBiR3hwYzJWamIyNWtjeUIwYnlCM1lXbDBJR1p2Y2lBblpYUm9aWEpsZFcwamFXNXBkR2xoYkdsNlpXUW5JSFJ2WEc0Z0tpQmlaU0JrYVhOd1lYUmphR1ZrTGlCRVpXWmhkV3gwT2lBek1EQXdYRzRnS2lCQWNtVjBkWEp1Y3lCQklGQnliMjFwYzJVZ2RHaGhkQ0J5WlhOdmJIWmxjeUIzYVhSb0lIUm9aU0JRY205MmFXUmxjaUJwWmlCcGRDQnBjeUJrWlhSbFkzUmxaQ0IzYVhSb2FXNWNiaUFxSUdkcGRtVnVJSFJwYldWdmRYUXNJRzkwYUdWeWQybHpaU0J1ZFd4c0xseHVJQ292WEc1bWRXNWpkR2x2YmlCa1pYUmxZM1JGZEdobGNtVjFiVkJ5YjNacFpHVnlQRlFnUFNCTlpYUmhUV0Z6YTBWMGFHVnlaWFZ0VUhKdmRtbGtaWEkrS0h0Y2JpQWdiWFZ6ZEVKbFRXVjBZVTFoYzJzZ1BTQm1ZV3h6WlN4Y2JpQWdjMmxzWlc1MElEMGdabUZzYzJVc1hHNGdJSFJwYldWdmRYUWdQU0F6TURBd0xGeHVmU0E5SUh0OUtUb2dVSEp2YldselpUeFVJSHdnYm5Wc2JENGdlMXh1WEc0Z0lGOTJZV3hwWkdGMFpVbHVjSFYwY3lncE8xeHVYRzRnSUd4bGRDQm9ZVzVrYkdWa0lEMGdabUZzYzJVN1hHNWNiaUFnY21WMGRYSnVJRzVsZHlCUWNtOXRhWE5sS0NoeVpYTnZiSFpsS1NBOVBpQjdYRzRnSUNBZ2FXWWdLQ2gzYVc1a2IzY2dZWE1nVjJsdVpHOTNLUzVsZEdobGNtVjFiU2tnZTF4dVhHNGdJQ0FnSUNCb1lXNWtiR1ZGZEdobGNtVjFiU2dwTzF4dVhHNGdJQ0FnZlNCbGJITmxJSHRjYmx4dUlDQWdJQ0FnZDJsdVpHOTNMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9YRzRnSUNBZ0lDQWdJQ2RsZEdobGNtVjFiU05wYm1sMGFXRnNhWHBsWkNjc1hHNGdJQ0FnSUNBZ0lHaGhibVJzWlVWMGFHVnlaWFZ0TEZ4dUlDQWdJQ0FnSUNCN0lHOXVZMlU2SUhSeWRXVWdmU3hjYmlBZ0lDQWdJQ2s3WEc1Y2JpQWdJQ0FnSUhObGRGUnBiV1Z2ZFhRb0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCb1lXNWtiR1ZGZEdobGNtVjFiU2dwTzF4dUlDQWdJQ0FnZlN3Z2RHbHRaVzkxZENrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWm5WdVkzUnBiMjRnYUdGdVpHeGxSWFJvWlhKbGRXMG9LU0I3WEc1Y2JpQWdJQ0FnSUdsbUlDaG9ZVzVrYkdWa0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lHaGhibVJzWldRZ1BTQjBjblZsTzF4dVhHNGdJQ0FnSUNCM2FXNWtiM2N1Y21WdGIzWmxSWFpsYm5STWFYTjBaVzVsY2lnblpYUm9aWEpsZFcwamFXNXBkR2xoYkdsNlpXUW5MQ0JvWVc1a2JHVkZkR2hsY21WMWJTazdYRzVjYmlBZ0lDQWdJR052Ym5OMElIc2daWFJvWlhKbGRXMGdmU0E5SUhkcGJtUnZkeUJoY3lCWGFXNWtiM2M3WEc1Y2JpQWdJQ0FnSUdsbUlDaGxkR2hsY21WMWJTQW1KaUFvSVcxMWMzUkNaVTFsZEdGTllYTnJJSHg4SUdWMGFHVnlaWFZ0TG1selRXVjBZVTFoYzJzcEtTQjdYRzRnSUNBZ0lDQWdJSEpsYzI5c2RtVW9aWFJvWlhKbGRXMGdZWE1nZFc1cmJtOTNiaUJoY3lCVUtUdGNiaUFnSUNBZ0lIMGdaV3h6WlNCN1hHNWNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2JXVnpjMkZuWlNBOUlHMTFjM1JDWlUxbGRHRk5ZWE5ySUNZbUlHVjBhR1Z5WlhWdFhHNGdJQ0FnSUNBZ0lDQWdQeUFuVG05dUxVMWxkR0ZOWVhOcklIZHBibVJ2ZHk1bGRHaGxjbVYxYlNCa1pYUmxZM1JsWkM0blhHNGdJQ0FnSUNBZ0lDQWdPaUFuVlc1aFlteGxJSFJ2SUdSbGRHVmpkQ0IzYVc1a2IzY3VaWFJvWlhKbGRXMHVKenRjYmx4dUlDQWdJQ0FnSUNBaGMybHNaVzUwSUNZbUlHTnZibk52YkdVdVpYSnliM0lvSjBCdFpYUmhiV0Z6YXk5a1pYUmxZM1F0Y0hKdmRtbGtaWEk2Snl3Z2JXVnpjMkZuWlNrN1hHNGdJQ0FnSUNBZ0lISmxjMjlzZG1Vb2JuVnNiQ2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOUtUdGNibHh1SUNCbWRXNWpkR2x2YmlCZmRtRnNhV1JoZEdWSmJuQjFkSE1vS1NCN1hHNGdJQ0FnYVdZZ0tIUjVjR1Z2WmlCdGRYTjBRbVZOWlhSaFRXRnpheUFoUFQwZ0oySnZiMnhsWVc0bktTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb1lFQnRaWFJoYldGemF5OWtaWFJsWTNRdGNISnZkbWxrWlhJNklFVjRjR1ZqZEdWa0lHOXdkR2x2YmlBbmJYVnpkRUpsVFdWMFlVMWhjMnNuSUhSdklHSmxJR0VnWW05dmJHVmhiaTVnS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUJ6YVd4bGJuUWdJVDA5SUNkaWIyOXNaV0Z1SnlrZ2UxeHVJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0dCQWJXVjBZVzFoYzJzdlpHVjBaV04wTFhCeWIzWnBaR1Z5T2lCRmVIQmxZM1JsWkNCdmNIUnBiMjRnSjNOcGJHVnVkQ2NnZEc4Z1ltVWdZU0JpYjI5c1pXRnVMbUFwTzF4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvZEhsd1pXOW1JSFJwYldWdmRYUWdJVDA5SUNkdWRXMWlaWEluS1NCN1hHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvWUVCdFpYUmhiV0Z6YXk5a1pYUmxZM1F0Y0hKdmRtbGtaWEk2SUVWNGNHVmpkR1ZrSUc5d2RHbHZiaUFuZEdsdFpXOTFkQ2NnZEc4Z1ltVWdZU0J1ZFcxaVpYSXVZQ2s3WEc0Z0lDQWdmVnh1SUNCOVhHNTlYRzRpWFgwPSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@metamask/detect-provider/dist/index.js\n");

/***/ })

};
;