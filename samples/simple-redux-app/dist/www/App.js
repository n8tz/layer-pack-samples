/*!
 * MIT License
 * 
 * Copyright (c) 2018 Wise Wild Web
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */!function(e){function t(t){for(var o,a,s=t[0],c=t[1],l=t[2],p=0,u=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&u.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(d&&d(t);u.length;)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},i={0:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;r.push([83,1]),n()}({111:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));n(53);function o(e,t){return void 0===e&&(e={}),t.type,e}},112:function(e,t,n){"use strict";n.r(t),t.default={selectedWidgetId:null,items:{rkUQHZrqM:{_id:"rkUQHZrqM",location:"Lisbonne",type:"WeatherWidget",size:{width:350,height:400},position:{x:403,y:111}},YDNiVOf1j:{_id:"YDNiVOf1j",type:"WeatherWidget",size:{width:350,height:400},position:{x:21,y:108},location:"paris"},FkQ3V9Hcb:{_id:"FkQ3V9Hcb",type:"WeatherWidget",size:{width:350,height:400},position:{x:771,y:108},location:"rome"},bYNiMYG_0:{_id:"bYNiMYG_0",type:"WeatherWidget",size:{width:514,height:329},position:{x:28,y:525},location:"marseille"},"5SJehewl2":{_id:"5SJehewl2",type:"WeatherWidget",size:{width:563,height:328},position:{x:558,y:526},location:"montpellier"}}}},113:function(e,t,n){"use strict";n.r(t),t.default={src:"http://api.openweathermap.org/data/2.5/weather?&APPID=ecff7b21b7305a6f88ca6c9bc4f07027&q=",selectedWidgetId:null}},114:function(e,t,n){"use strict";n.r(t),t.default={}},115:function(e,t,n){"use strict";n.r(t);var o=n(74),i=n.n(o),r=n(75),a=n.n(r),s=n(76),c=n.n(s),l=n(0),d=n.n(l);t.default=function(e){var t=e.children;return d.a.createElement(i.a,{position:"static",className:"AppBar"},d.a.createElement(a.a,null,d.a.createElement(c.a,{cvariant:"h6",color:"inherit",noWrap:!0},"Widget desk"),d.a.createElement("div",{className:"tools"},t)))}},13:function(e,t,n){"use strict";var o={},i=n(14).walknSetExport;i(o,"widgets",n(8)),i(o,"appState",n(53)),i(o,"widgets/WeatherWidget",n(51));var r=o;t.a=r},178:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var o=n(2),i=n.n(o),r=n(7),a=n.n(r),s=n(3),c=n.n(s),l=n(0),d=n.n(l),p=n(77),u={bottom:!0,bottomLeft:!0,bottomRight:!0,left:!0,right:!0,top:!0,topLeft:!0,topRight:!0},h=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).state={},t.saveState=function(e,n){var o=t.props,r=o.onWidgetUpdated,a=o.record;r(i()({},a,{size:t.state.size||a.size,position:t.state.position||a.position}))},t.select=function(e,n){var o=t.props,i=o.record,r=o.onSelect;!o.selected&&r(i)},t.drag=function(e,n){var o=t.props,i=o.record,r=o.onSelect;!o.selected&&r(i),t.setState({position:{x:n.x,y:n.y}})},t.resize=function(e,n,o,i,r){t.setState({position:r,size:{width:o.offsetWidth,height:o.offsetHeight}})},t}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.record,n=(t=void 0===t?{}:t).position,o=t.size,i=e.children,r=e.editable,a=e.selected,s=this.state;return d.a.createElement(p.a,{className:"Widget",disableDragging:!r,enableResizing:r&&u,style:{zIndex:a?2e3:1},size:s.size||o,position:s.position||n,onDragStop:this.saveState,onResizeStop:this.saveState,onDrag:this.drag,onResize:this.resize,onClick:this.select},d.a.createElement("div",{className:"content"},i))},t}(d.a.Component);h.propTypes={selected:c.a.bool,editable:c.a.bool,record:c.a.object.isRequired,onWidgetUpdated:c.a.func,onSelect:c.a.func},h.defaultProps={editable:!0,onWidgetUpdated:function(e){return!1},onSelect:function(e){return!1}}},183:function(e,t,n){var o={"./fr":184};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=r,e.exports=i,i.id=183},185:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var o,i,r,a=n(7),s=n.n(a),c=n(2),l=n.n(c),d=n(16),p=n.n(d),u=n(80),h=n.n(u),E=n(79),T=n.n(E),f=n(43),I=n.n(f),O=n(13),g=n(3),m=n.n(g),N=n(0),R=n.n(N),S=n(9),A=n(42),b=Object(S.b)((function(e,t){return{record:e.widgets.items[t.id]}}),(function(e){return l()({dispatch:e},O.a.widgets.WeatherWidget)}))((r=i=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))||this).state={},t.checkUpdate=function(){var e=t.props,n=e.dispatch,o=e.record,i=e.weatherSearch;o.location&&o.fetched<Date.now()-6e4&&n(i(o,o.location))},t.toggleEdit=function(){t.setState({editing:!t.state.editing})},t.updateSearch=function(e){var n=e.target.value,o=t.props,i=o.record,r=o.dispatch,a=o.weatherSearch;t.setState({searching:n}),n.length>2&&r(a(i,n))},t.stopPropagation=function(e){return e.stopPropagation()},t.doClose=function(e){var n=t.props,o=n.record,i=n.onClose;i&&i(o)},t}s()(t,e);var n=t.prototype;return n.componentWillMount=function(){var e=this.props,t=e.dispatch,n=e.record,o=e.weatherSearch;n.location&&!n.results&&t(o(n,n.location)),this._refreshTm=setInterval(this.checkUpdate,1e4)},n.componentWillUnmount=function(){clearInterval(this._refreshTm)},n.render=function(){var e=this.props,t=e.record,n=(e.dispatch,e.editable),o=(e.onClose,this.state),i=o.editing,r=o.searching;return R.a.createElement("div",{className:"WeatherWidget"},!i&&R.a.createElement(R.a.Fragment,null,t.results&&R.a.createElement(A.default,{weatherData:t.results})||t.fetching&&"Loading...."||"Edit me !",n&&R.a.createElement(R.a.Fragment,null,R.a.createElement(p.a,{"aria-label":"edit",className:"edit",onClick:this.toggleEdit},R.a.createElement(T.a,null)),R.a.createElement(p.a,{"aria-label":"Delete",className:"delete",onClick:this.doClose},R.a.createElement(h.a,null))))||R.a.createElement(R.a.Fragment,null,R.a.createElement("div",{className:"search"},R.a.createElement("input",{type:"text",onChange:this.updateSearch,value:void 0!==r?r:t.location,onMouseDown:this.stopPropagation})),t.fetching?"Loading....":t.results&&R.a.createElement(A.default,{weatherData:t.results}),R.a.createElement(p.a,{"aria-label":"Save",className:"save",disabled:!!t.fetching,onClick:this.toggleEdit},R.a.createElement(I.a,null))))},t}(R.a.Component),i.propTypes={record:m.a.object.isRequired,editable:m.a.bool},i.defaultProps={editable:!0},o=r))||o},212:function(e,t,n){"use strict";n.r(t);var o,i,r=n(19),a=n.n(r),s=n(7),c=n.n(s),l=n(16),d=n.n(l),p=n(81),u=n.n(p),h=n(43),E=n.n(h),T=n(13),f=n(0),I=n.n(f),O=n(9);t.default=Object(O.b)()((i=o=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))||this).state={},t.newWidget=function(e){(0,t.props.dispatch)(T.a.widgets.newWidget({type:"WeatherWidget"}))},t}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.dispatch;e.editable;return a()(this.state),I.a.createElement("div",{className:"ToolBar"},I.a.createElement(I.a.Fragment,null,I.a.createElement(d.a,{"aria-label":"new",size:"small",color:"secondary",onClick:this.newWidget},I.a.createElement(u.a,null)),"  ",I.a.createElement(d.a,{"aria-label":"SaveState",size:"small",color:"secondary",onClick:function(e){return t(T.a.appState.saveState())}},I.a.createElement(E.a,null))))},t}(I.a.Component),o.propTypes={},i))},213:function(e,t,n){var o=n(214);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(216)(o,i);o.locals&&(e.exports=o.locals)},214:function(e,t,n){(e.exports=n(215)(!1)).push([e.i,"/*!\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n *//*!\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n *//*!\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */body,html{margin:0;padding:0}.newBtn{position:absolute !important;bottom:10px;left:10px;display:inline-block}.saveBtn{position:absolute !important;bottom:10px;right:10px;display:inline-block}#app{position:absolute;width:100%;height:100%;top:0px;left:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.desk{position:absolute;width:100%;height:100%;top:0px;left:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.desk>*{pointer-events:all}.AppBar>div{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.AppBar>div .tools{float:right !important}.AppBar>div .tools svg{color:white}/*!\r\n * The MIT License (MIT)\r\n * Copyright (c) 2019. Wise Wild Web\r\n *\r\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\r\n *\r\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\r\n *\r\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\r\n *\r\n *  @author : Nathanael Braun\r\n *  @contact : n8tz.js@gmail.com\r\n */.WeatherInfos{text-align:center;height:100%;width:100%;padding-top:20px}.WeatherInfos:before{content:' ';display:inline-block;height:100%;width:1px;margin-right:-1px;vertical-align:middle;overflow:hidden}.WeatherInfos>*{text-align:left;vertical-align:middle;display:inline-block}.WeatherInfos .location{position:absolute;top:0;width:100%;text-align:center;padding-top:10px;padding-bottom:10px;background:rgba(255,255,255,0.83)}.WeatherInfos .location sub{position:absolute;top:0;right:0;padding:2px;font-style:italic;color:darkgray}.WeatherInfos .background{position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;z-index:-1}.WeatherInfos .background img{min-width:100%;min-height:100%;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.WeatherInfos .picto{display:inline-block;text-align:center;width:50%;background:rgba(255,255,255,0.83);height:100px}.WeatherInfos .picto img{margin:5px}.WeatherInfos .infos{display:inline-block;background:rgba(255,255,255,0.83);width:50%;height:100px}.WeatherInfos .infos div{margin:17px}/*!\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */.Widget{border:1px solid #E8E8E8;border-radius:10px;background:white}/*!\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */.WeatherWidget{line-height:1;text-align:center;position:absolute;width:100%;height:100%;top:0px;left:0;font-size:22px;display:inline-block;border:1px solid #E8E8E8;border-radius:10px;background:rgba(255,255,255,0.25);overflow:hidden}.WeatherWidget .edit{position:absolute;top:5px;right:5px;display:none}.WeatherWidget .delete{position:absolute;top:75px;right:5px;display:none}.WeatherWidget:hover .edit,.WeatherWidget:hover .delete{display:block}.WeatherWidget .search input{position:absolute;top:5px;width:calc(100% - 20px);height:25px;font-size:22px;text-align:center;left:10px;z-index:10;border-radius:15px}.WeatherWidget .save{position:absolute;bottom:5px;right:5px}/*!\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n *//*!\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */body,html{margin:0;padding:0}.newBtn{position:absolute !important;bottom:10px;left:10px;display:inline-block}.saveBtn{position:absolute !important;bottom:10px;right:10px;display:inline-block}#app{position:absolute;width:100%;height:100%;top:0px;left:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.desk{position:absolute;width:100%;height:100%;top:0px;left:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.desk>*{pointer-events:all}.AppBar>div{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.AppBar>div .tools{float:right !important}.AppBar>div .tools svg{color:white}\n",""])},218:function(e,t,n){"use strict";n.r(t);var o=n(7),i=n.n(o),r=n(0),a=n.n(r),s=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.helmet,n=e.content,o=e.ssrErrors,i=e.css,r=e.state,s=t&&t.htmlAttributes.toComponent(),c=t&&t.bodyAttributes.toComponent();return a.a.createElement(a.a.Fragment,null,a.a.createElement("html",s,a.a.createElement("head",null,t&&t.title.toComponent(),t&&t.meta.toComponent(),t&&t.link.toComponent(),t&&t.script.toComponent(),r&&a.a.createElement("script",{dangerouslySetInnerHTML:{__html:"window.__STATE__  = "+JSON.stringify(r)}}),i&&a.a.createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:i+""}})),a.a.createElement("body",c,a.a.createElement("div",{id:"app",dangerouslySetInnerHTML:{__html:n}}),o&&a.a.createElement("div",{id:"ssrErrors",dangerouslySetInnerHTML:{__html:o}}),a.a.createElement("script",{src:"./App.js"}),a.a.createElement("script",{src:"./App.vendors.js"}))))},t}(a.a.Component),c=n(18),l=n.n(c),d=n(49),p=n(38),u=(n(82),n(9)),h=n(12),E=n(71),T=n(72),f={},I=n(14).walknSetExport;I(f,"widgets",n(219)),I(f,"appState",n(111));var O=f,g=Object(h.combineReducers)(O);function m(e){return Object(h.createStore)(g,e,Object(E.composeWithDevTools)(Object(h.applyMiddleware)(T.a)))}var N={},R=n(14).walknSetExport;R(N,"widgets",n(112)),R(N,"appState",n(113)),R(N,"widgets/WeatherWidget",n(114));var S=N;({renderTo:function(e,t){void 0===t&&(t={});var o=m(t),i=n(69).default,r=i;l.a.render(a.a.createElement(u.a,{store:o},a.a.createElement(r,null)),e)},renderSSR:function(e,t){var o,i,r=e.state,c=(e.tpl,m(r||S)),l="",h=n(69).default;try{l=Object(d.renderToString)(a.a.createElement(u.a,{store:c},a.a.createElement(h,null))),o=c.getState(),i="<!doctype html>\n"+Object(d.renderToString)(a.a.createElement(s,{helmet:p.Helmet.renderStatic(),content:l,state:o}))}catch(e){return t(e)}t(null,i)}}).renderTo(document.getElementById("app"),window.__STATE__)},219:function(e,t,n){"use strict";n.r(t);var o=n(2),i=n.n(o),r={};(0,n(14).walknSetExport)(r,"WeatherWidget",n(97));var a=r,s=n(8);function c(e,t){var n,o;switch(void 0===e&&(e={items:{}}),t.type){case s.SELECTED_WIDGET_CHANGED:return i()({},e,{selectedWidgetId:t.wid});case s.WIDGET_CHANGED:var r=e.items[t.record._id];return i()({},e,{items:i()({},e.items,(n={},n[t.record._id]=a[r.type](r,t),n))});case s.WIDGET_NEW:return i()({},e,{items:i()({},e.items,(o={},o[t.record._id]=t.record,o))});case s.WIDGET_RM:var c=i()({},e,{items:i()({},e.items)});return delete c.items[t.wid],c;default:return e}}n.d(t,"default",(function(){return c}))},42:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(48),a=n.n(r);t.default=function(e){var t=e.weatherData;e.lastQuery;return i.a.createElement("div",{className:"WeatherInfos"},i.a.createElement("div",{className:"location"},t.name," ",i.a.createElement("sub",null,"(",a()(1e3*t.dt).fromNow(),")")),i.a.createElement("div",{className:"background"},i.a.createElement("img",{src:"https://source.unsplash.com/600x400/?day,sky,"+t.name})),i.a.createElement("div",{className:"picto"},t.weather[0]&&i.a.createElement("img",{src:"http://openweathermap.org/img/w/"+t.weather[0].icon+".png"}),i.a.createElement("br",null),t.weather[0]&&t.weather[0].description),i.a.createElement("div",{className:"infos"},i.a.createElement("div",{className:"temp"},t.main.temp,"°"),i.a.createElement("div",{className:"wind"},t.wind.speed," mh")))}},51:function(e,t,n){"use strict";n.r(t),n.d(t,"weatherSearch",(function(){return c}));var o=n(2),i=n.n(o),r=n(41),a=n.n(r),s=n(8);function c(e,t,n){return function(n,o){return n(Object(s.updateWidget)(i()({},e,{fetching:t}))),a.a.get(o().appState.src+t).then((function(r){var a=o().widgets.items[e._id];a&&a.fetching===t&&n(Object(s.updateWidget)(i()({},e,{fetching:!1,fetched:Date.now(),results:r.body,location:t})))})).catch((function(r){var a=o().widgets.items[e._id];a&&a.fetching===t&&n(Object(s.updateWidget)(i()({},e,{fetching:!1})))}))}}},53:function(e,t,n){"use strict";n.r(t),n.d(t,"SAVING_STATE",(function(){return r})),n.d(t,"saveState",(function(){return a}));var o=n(41),i=n.n(o),r="SAVING_STATE";function a(e){return function(e,t){return i.a.post("/",t()).then((function(e){console.log("Saved")})).catch((function(e){console.log("Not Saved")}))}}},69:function(e,t,n){"use strict";n.r(t);var o=n(19),i=n.n(o),r=n(7),a=n.n(r),s=n(0),c=n.n(s),l=n(13),d=n(9),p={},u=n(14).walknSetExport;u(p,"AppBar",n(115)),u(p,"Widget",n(178)),u(p,"WeatherInfos",n(42));var h=p.AppBar,E=p.Widget,T={};(0,n(14).walknSetExport)(T,"WeatherWidget",n(185));var f,I=T,O=Object(d.b)((function(e){return{widgets:e.widgets,appState:e.appState}}))(f=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))||this).state={},t.rmWidget=function(e){(0,t.props.dispatch)(l.a.widgets.rmWidget(e._id))},t.selectWidget=function(e){(0,t.props.dispatch)(l.a.widgets.selectWidget(e._id))},t.updateWidget=function(e){(0,t.props.dispatch)(l.a.widgets.updateWidget(e))},t}return a()(t,e),t.prototype.render=function(){var e=this,t=this.props.widgets,n=void 0===t?{}:t;return i()(this.state),c.a.createElement(c.a.Fragment,null,Object.keys(n.items).map((function(t){var o=I[n.items[t].type];return c.a.createElement(E,{key:t,record:n.items[t],onSelect:e.selectWidget,onWidgetUpdated:e.updateWidget,selected:t===n.selectedWidgetId},o&&c.a.createElement(o,{id:t,onClose:e.rmWidget}))})))},t}(c.a.Component))||f,g=n(38),m={};(0,n(14).walknSetExport)(m,"ToolBar",n(212));var N,R=m.ToolBar;n(213);n.d(t,"default",(function(){return S}));var S=Object(d.b)((function(e){return{appState:e.appState}}))(N=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))||this).state={},t}return a()(t,e),t.prototype.render=function(){this.props.widgets;return i()(this.state),c.a.createElement(c.a.Fragment,null,c.a.createElement(g.Helmet,null,c.a.createElement("meta",{charSet:"utf-8"}),c.a.createElement("title",null,"simple-redux-app - Weather widgets")),c.a.createElement(h,null,c.a.createElement(R,null)),c.a.createElement("div",{className:"desk"},c.a.createElement(O,null)))},t}(c.a.Component))||N},8:function(e,t,n){"use strict";n.r(t);var o=n(2),i=n.n(o),r=n(73),a=n.n(r),s={};(0,n(14).walknSetExport)(s,"WeatherWidget",n(51));var c=s.WeatherWidget;n.d(t,"WIDGET_CHANGED",(function(){return l})),n.d(t,"WIDGET_NEW",(function(){return d})),n.d(t,"WIDGET_RM",(function(){return p})),n.d(t,"SELECTED_WIDGET_CHANGED",(function(){return u})),n.d(t,"selectWidget",(function(){return h})),n.d(t,"newWidget",(function(){return E})),n.d(t,"updateWidget",(function(){return T})),n.d(t,"rmWidget",(function(){return f})),n.d(t,"WeatherWidget",(function(){return c}));var l="WIDGET_CHANGED",d="WIDGET_NEW",p="WIDGET_RM",u="SELECTED_WIDGET_CHANGED";function h(e){return{type:u,wid:e}}function E(e){return{type:d,record:i()({_id:a.a.generate(),size:{width:350,height:400},position:{x:100+~~(600*Math.random()),y:100+~~(600*Math.random())}},e)}}function T(e){return{type:l,record:e}}function f(e){return{type:p,wid:e}}},83:function(e,t,n){e.exports=n(218)},97:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var o=n(2),i=n.n(o),r=n(8);function a(e,t){switch(t.type){case r.WIDGET_CHANGED:return i()({},e,{},t.record);default:return e}}}});