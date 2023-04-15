(()=>{"use strict";var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};function e(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}function n(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(u){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(c=0)),c;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return c.label++,{value:s[1],done:!1};case 5:c.label++,r=s[1],s=[0];continue;case 7:s=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){c=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){c.label=s[1];break}if(6===s[0]&&c.label<o[1]){c.label=o[1],o=s;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(s);break}o[2]&&c.ops.pop(),c.trys.pop();continue}s=e.call(t,c)}catch(t){s=[6,t],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}}function r(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),c=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)c.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return c}function i(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}function c(t){return this instanceof c?(this.v=t,this):new c(t)}function s(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(t,e||[]),i=[];return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r;function s(t){o[t]&&(r[t]=function(e){return new Promise((function(n,r){i.push([t,e,n,r])>1||u(t,e)}))})}function u(t,e){try{(n=o[t](e)).value instanceof c?Promise.resolve(n.value.v).then(a,l):f(i[0][2],n)}catch(t){f(i[0][3],t)}var n}function a(t){u("next",t)}function l(t){u("throw",t)}function f(t,e){t(e),i.shift(),i.length&&u(i[0][0],i[0][1])}}function u(t){return"function"==typeof t}function a(t){var e=t((function(t){Error.call(t),t.stack=(new Error).stack}));return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}Object.create,Object.create;var l=a((function(t){return function(e){t(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e}}));function f(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var d=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}var e;return t.prototype.unsubscribe=function(){var t,e,n,c,s;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var f=r(a),d=f.next();!d.done;d=f.next())d.value.remove(this)}catch(e){t={error:e}}finally{try{d&&!d.done&&(e=f.return)&&e.call(f)}finally{if(t)throw t.error}}else a.remove(this);var p=this.initialTeardown;if(u(p))try{p()}catch(t){s=t instanceof l?t.errors:[t]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var b=r(h),y=b.next();!y.done;y=b.next()){var m=y.value;try{v(m)}catch(t){s=null!=s?s:[],t instanceof l?s=i(i([],o(s)),o(t.errors)):s.push(t)}}}catch(t){n={error:t}}finally{try{y&&!y.done&&(c=b.return)&&c.call(b)}finally{if(n)throw n.error}}}if(s)throw new l(s)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)v(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=null!==(n=this._finalizers)&&void 0!==n?n:[]).push(e)}},t.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},t.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},t.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&f(e,t)},t.prototype.remove=function(e){var n=this._finalizers;n&&f(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=((e=new t).closed=!0,e),t}(),p=d.EMPTY;function h(t){return t instanceof d||t&&"closed"in t&&u(t.remove)&&u(t.add)&&u(t.unsubscribe)}function v(t){u(t)?t():t.unsubscribe()}var b=null,y=null,m=void 0,S=!1,w=!1,g={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var c=g.delegate;return(null==c?void 0:c.setTimeout)?c.setTimeout.apply(c,i([t,e],o(n))):setTimeout.apply(void 0,i([t,e],o(n)))},clearTimeout:function(t){var e=g.delegate;return((null==e?void 0:e.clearTimeout)||clearTimeout)(t)},delegate:void 0};function x(t){g.setTimeout((function(){if(!b)throw t;b(t)}))}function k(){}var _=E("C",void 0,void 0);function E(t,e,n){return{kind:t,value:e,error:n}}var T=null;function O(t){if(S){var e=!T;if(e&&(T={errorThrown:!1,error:null}),t(),e){var n=T,r=n.errorThrown,o=n.error;if(T=null,r)throw o}}else t()}var C=function(t){function n(e){var n=t.call(this)||this;return n.isStopped=!1,e?(n.destination=e,h(e)&&e.add(n)):n.destination=q,n}return e(n,t),n.create=function(t,e,n){return new L(t,e,n)},n.prototype.next=function(t){this.isStopped?j(function(t){return E("N",t,void 0)}(t),this):this._next(t)},n.prototype.error=function(t){this.isStopped?j(E("E",void 0,t),this):(this.isStopped=!0,this._error(t))},n.prototype.complete=function(){this.isStopped?j(_,this):(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(t){this.destination.next(t)},n.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(d),A=Function.prototype.bind;function I(t,e){return A.call(t,e)}var P=function(){function t(t){this.partialObserver=t}return t.prototype.next=function(t){var e=this.partialObserver;if(e.next)try{e.next(t)}catch(t){N(t)}},t.prototype.error=function(t){var e=this.partialObserver;if(e.error)try{e.error(t)}catch(t){N(t)}else N(t)},t.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(t){N(t)}},t}(),L=function(t){function n(e,n,r){var o,i,c=t.call(this)||this;return u(e)||!e?o={next:null!=e?e:void 0,error:null!=n?n:void 0,complete:null!=r?r:void 0}:c&&w?((i=Object.create(e)).unsubscribe=function(){return c.unsubscribe()},o={next:e.next&&I(e.next,i),error:e.error&&I(e.error,i),complete:e.complete&&I(e.complete,i)}):o=e,c.destination=new P(o),c}return e(n,t),n}(C);function N(t){var e;S?(e=t,S&&T&&(T.errorThrown=!0,T.error=e)):x(t)}function j(t,e){var n=y;n&&g.setTimeout((function(){return n(t,e)}))}var q={closed:!0,next:k,error:function(t){throw t},complete:k},z="function"==typeof Symbol&&Symbol.observable||"@@observable";function U(t){return t}function F(t){return 0===t.length?U:1===t.length?t[0]:function(e){return t.reduce((function(t,e){return e(t)}),e)}}var R=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(t,e,n){var r,o=this,i=(r=t)&&r instanceof C||function(t){return t&&u(t.next)&&u(t.error)&&u(t.complete)}(r)&&h(r)?t:new L(t,e,n);return O((function(){var t=o,e=t.operator,n=t.source;i.add(e?e.call(i,n):n?o._subscribe(i):o._trySubscribe(i))})),i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},t.prototype.forEach=function(t,e){var n=this;return new(e=$(e))((function(e,r){var o=new L({next:function(e){try{t(e)}catch(t){r(t),o.unsubscribe()}},error:r,complete:e});n.subscribe(o)}))},t.prototype._subscribe=function(t){var e;return null===(e=this.source)||void 0===e?void 0:e.subscribe(t)},t.prototype[z]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return F(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=$(t))((function(t,n){var r;e.subscribe((function(t){return r=t}),(function(t){return n(t)}),(function(){return t(r)}))}))},t.create=function(e){return new t(e)},t}();function $(t){var e;return null!==(e=null!=t?t:m)&&void 0!==e?e:Promise}var Y=a((function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}})),B=function(t){function n(){var e=t.call(this)||this;return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return e(n,t),n.prototype.lift=function(t){var e=new J(this,this);return e.operator=t,e},n.prototype._throwIfClosed=function(){if(this.closed)throw new Y},n.prototype.next=function(t){var e=this;O((function(){var n,o;if(e._throwIfClosed(),!e.isStopped){e.currentObservers||(e.currentObservers=Array.from(e.observers));try{for(var i=r(e.currentObservers),c=i.next();!c.done;c=i.next())c.value.next(t)}catch(t){n={error:t}}finally{try{c&&!c.done&&(o=i.return)&&o.call(i)}finally{if(n)throw n.error}}}}))},n.prototype.error=function(t){var e=this;O((function(){if(e._throwIfClosed(),!e.isStopped){e.hasError=e.isStopped=!0,e.thrownError=t;for(var n=e.observers;n.length;)n.shift().error(t)}}))},n.prototype.complete=function(){var t=this;O((function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var e=t.observers;e.length;)e.shift().complete()}}))},n.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(n.prototype,"observed",{get:function(){var t;return(null===(t=this.observers)||void 0===t?void 0:t.length)>0},enumerable:!1,configurable:!0}),n.prototype._trySubscribe=function(e){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,e)},n.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},n.prototype._innerSubscribe=function(t){var e=this,n=this,r=n.hasError,o=n.isStopped,i=n.observers;return r||o?p:(this.currentObservers=null,i.push(t),new d((function(){e.currentObservers=null,f(i,t)})))},n.prototype._checkFinalizedStatuses=function(t){var e=this,n=e.hasError,r=e.thrownError,o=e.isStopped;n?t.error(r):o&&t.complete()},n.prototype.asObservable=function(){var t=new R;return t.source=this,t},n.create=function(t,e){return new J(t,e)},n}(R),J=function(t){function n(e,n){var r=t.call(this)||this;return r.destination=e,r.source=n,r}return e(n,t),n.prototype.next=function(t){var e,n;null===(n=null===(e=this.destination)||void 0===e?void 0:e.next)||void 0===n||n.call(e,t)},n.prototype.error=function(t){var e,n;null===(n=null===(e=this.destination)||void 0===e?void 0:e.error)||void 0===n||n.call(e,t)},n.prototype.complete=function(){var t,e;null===(e=null===(t=this.destination)||void 0===t?void 0:t.complete)||void 0===e||e.call(t)},n.prototype._subscribe=function(t){var e,n;return null!==(n=null===(e=this.source)||void 0===e?void 0:e.subscribe(t))&&void 0!==n?n:p},n}(B);function M(t){return function(e){if(function(t){return u(null==t?void 0:t.lift)}(e))return e.lift((function(e){try{return t(e,this)}catch(t){this.error(t)}}));throw new TypeError("Unable to lift unknown Observable type")}}function D(t,e,n,r,o){return new K(t,e,n,r,o)}var K=function(t){function n(e,n,r,o,i,c){var s=t.call(this,e)||this;return s.onFinalize=i,s.shouldUnsubscribe=c,s._next=n?function(t){try{n(t)}catch(t){e.error(t)}}:t.prototype._next,s._error=o?function(t){try{o(t)}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._error,s._complete=r?function(){try{r()}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._complete,s}return e(n,t),n.prototype.unsubscribe=function(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;t.prototype.unsubscribe.call(this),!n&&(null===(e=this.onFinalize)||void 0===e||e.call(this))}},n}(C),V=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function Z(t){return u(null==t?void 0:t.then)}function G(t){return u(t[z])}function H(t){return Symbol.asyncIterator&&u(null==t?void 0:t[Symbol.asyncIterator])}function Q(t){return new TypeError("You provided "+(null!==t&&"object"==typeof t?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}var W="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function X(t){return u(null==t?void 0:t[W])}function tt(t){return s(this,arguments,(function(){var e,r,o;return n(this,(function(n){switch(n.label){case 0:e=t.getReader(),n.label=1;case 1:n.trys.push([1,,9,10]),n.label=2;case 2:return[4,c(e.read())];case 3:return r=n.sent(),o=r.value,r.done?[4,c(void 0)]:[3,5];case 4:return[2,n.sent()];case 5:return[4,c(o)];case 6:return[4,n.sent()];case 7:return n.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}}))}))}function et(t){return u(null==t?void 0:t.getReader)}function nt(t){if(t instanceof R)return t;if(null!=t){if(G(t))return i=t,new R((function(t){var e=i[z]();if(u(e.subscribe))return e.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if(V(t))return o=t,new R((function(t){for(var e=0;e<o.length&&!t.closed;e++)t.next(o[e]);t.complete()}));if(Z(t))return n=t,new R((function(t){n.then((function(e){t.closed||(t.next(e),t.complete())}),(function(e){return t.error(e)})).then(null,x)}));if(H(t))return rt(t);if(X(t))return e=t,new R((function(t){var n,o;try{for(var i=r(e),c=i.next();!c.done;c=i.next()){var s=c.value;if(t.next(s),t.closed)return}}catch(t){n={error:t}}finally{try{c&&!c.done&&(o=i.return)&&o.call(i)}finally{if(n)throw n.error}}t.complete()}));if(et(t))return rt(tt(t))}var e,n,o,i;throw Q(t)}function rt(t){return new R((function(e){(function(t,e){var o,i,c,s,u,a,l,f;return u=this,a=void 0,f=function(){var u,a;return n(this,(function(n){switch(n.label){case 0:n.trys.push([0,5,6,11]),o=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=r(t),e={},o("next"),o("throw"),o("return"),e[Symbol.asyncIterator]=function(){return this},e);function o(n){e[n]=t[n]&&function(e){return new Promise((function(r,o){!function(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)}(r,o,(e=t[n](e)).done,e.value)}))}}}(t),n.label=1;case 1:return[4,o.next()];case 2:if((i=n.sent()).done)return[3,4];if(u=i.value,e.next(u),e.closed)return[2];n.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=n.sent(),c={error:a},[3,11];case 6:return n.trys.push([6,,9,10]),i&&!i.done&&(s=o.return)?[4,s.call(o)]:[3,8];case 7:n.sent(),n.label=8;case 8:return[3,10];case 9:if(c)throw c.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}}))},new((l=void 0)||(l=Promise))((function(t,e){function n(t){try{o(f.next(t))}catch(t){e(t)}}function r(t){try{o(f.throw(t))}catch(t){e(t)}}function o(e){var o;e.done?t(e.value):(o=e.value,o instanceof l?o:new l((function(t){t(o)}))).then(n,r)}o((f=f.apply(u,a||[])).next())}))})(t,e).catch((function(t){return e.error(t)}))}))}function ot(t,e,n,r,o){void 0===r&&(r=0),void 0===o&&(o=!1);var i=e.schedule((function(){n(),o?t.add(this.schedule(null,r)):this.unsubscribe()}),r);if(t.add(i),!o)return i}function it(t,e,n){return void 0===n&&(n=1/0),u(e)?it((function(n,r){return function(t,e){return M((function(e,n){var r=0;e.subscribe(D(n,(function(e){n.next(t.call(undefined,e,r++))})))}))}((function(t,o){return e(n,t,r,o)}))(nt(t(n,r)))}),n):("number"==typeof e&&(n=e),M((function(e,r){return function(t,e,n,r,o,i,c,s){var u=[],a=0,l=0,f=!1,d=function(){!f||u.length||a||e.complete()},p=function(t){return a<r?h(t):u.push(t)},h=function(t){a++;var o=!1;nt(n(t,l++)).subscribe(D(e,(function(t){e.next(t)}),(function(){o=!0}),void 0,(function(){if(o)try{a--;for(;u.length&&a<r;)t=void 0,t=u.shift(),h(t);d()}catch(t){e.error(t)}var t})))};return t.subscribe(D(e,p,(function(){f=!0,d()}))),function(){}}(e,r,t,n)})))}function ct(){return void 0===(t=1)&&(t=1/0),it(U,t);var t}function st(t){return(n=(e=t)[e.length-1])&&u(n.schedule)?t.pop():void 0;var e,n}function ut(t,e){return void 0===e&&(e=0),M((function(n,r){n.subscribe(D(r,(function(n){return ot(r,t,(function(){return r.next(n)}),e)}),(function(){return ot(r,t,(function(){return r.complete()}),e)}),(function(n){return ot(r,t,(function(){return r.error(n)}),e)})))}))}function at(t,e){return void 0===e&&(e=0),M((function(n,r){r.add(t.schedule((function(){return n.subscribe(r)}),e))}))}function lt(t,e){if(!t)throw new Error("Iterable cannot be null");return new R((function(n){ot(n,e,(function(){var r=t[Symbol.asyncIterator]();ot(n,e,(function(){r.next().then((function(t){t.done?n.complete():n.next(t.value)}))}),0,!0)}))}))}function ft(t,e){return e?function(t,e){if(null!=t){if(G(t))return function(t,e){return nt(t).pipe(at(e),ut(e))}(t,e);if(V(t))return function(t,e){return new R((function(n){var r=0;return e.schedule((function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())}))}))}(t,e);if(Z(t))return function(t,e){return nt(t).pipe(at(e),ut(e))}(t,e);if(H(t))return lt(t,e);if(X(t))return function(t,e){return new R((function(n){var r;return ot(n,e,(function(){r=t[W](),ot(n,e,(function(){var t,e,o;try{e=(t=r.next()).value,o=t.done}catch(t){return void n.error(t)}o?n.complete():n.next(e)}),0,!0)})),function(){return u(null==r?void 0:r.return)&&r.return()}}))}(t,e);if(et(t))return function(t,e){return lt(tt(t),e)}(t,e)}throw Q(t)}(t,e):nt(t)}function dt(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return ct()(ft(t,st(t)))}function pt(t,e,n,r,o){return function(i,c){var s=n,u=e,a=0;i.subscribe(D(c,(function(e){var n=a++;u=s?t(u,e,n):(s=!0,e),r&&c.next(u)}),o&&function(){s&&c.next(u),c.complete()}))}}function ht(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!0!==e){if(!1!==e){var c=new L({next:function(){c.unsubscribe(),t()}});return nt(e.apply(void 0,i([],o(n)))).subscribe(c)}}else t()}class vt{constructor(t){this.container=t}renderStats(t){const e=vt.creatingStateObject(t);document.querySelectorAll(".list-item-stat").forEach((t=>t.remove())),e.forEach((t=>this.renderStatNote(t)))}renderStatNote(t){const e=document.createElement("UL"),n=document.createElement("LI"),r=document.createElement("P"),o=document.createElement("LI"),i=document.createElement("P");e.classList.add("list-item-stat"),e.setAttribute("id",t.id),n.classList.add("name"),r.classList.add("name-title"),o.classList.add("count"),i.classList.add("quantity"),r.textContent=t.name,i.textContent=t.count,this.container.appendChild(e),e.append(n),e.append(o),n.append(r),o.append(i)}static creatingStateObject(t){return t.projects.map((t=>{const e=t.tasks.filter((t=>!1===t.done)).length,{id:n,name:r}=t;return{id:n,name:r,count:e}}))}}document.querySelector("body").style.backgroundImage="url(assets/253f7b15dd6eb9ac37984ada287333f9.jpg)";const bt=new class{constructor(){this.ACTIONS={ClickOpenSelect:"OPENSELECT",ClickCloseSelect:"CLOSESELECT",ClickCompleteTask:"COMPLETETASK",ClickOpenTask:"OPENTASK"},this.actions$=new B,this.stateSelect$=this.actions$.asObservable().pipe(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=st(t);return M((function(e,r){(n?dt(t,e,n):dt(t,e)).subscribe(r)}))}({type:"INITIALIZATION"}),function(t,e){return M(pt(t,e,arguments.length>=2,!0))}(((t,e)=>this.reduce(t,e)),{select:!1,status:!1,payload:null}),function(t){void 0===t&&(t={});var e=t.connector,n=void 0===e?function(){return new B}:e,r=t.resetOnError,o=void 0===r||r,i=t.resetOnComplete,c=void 0===i||i,s=t.resetOnRefCountZero,u=void 0===s||s;return function(t){var e,r,i,s=0,a=!1,l=!1,f=function(){null==r||r.unsubscribe(),r=void 0},d=function(){f(),e=i=void 0,a=l=!1},p=function(){var t=e;d(),null==t||t.unsubscribe()};return M((function(t,h){s++,l||a||f();var v=i=null!=i?i:n();h.add((function(){0!=--s||l||a||(r=ht(p,u))})),v.subscribe(h),!e&&s>0&&(e=new L({next:function(t){return v.next(t)},error:function(t){l=!0,f(),r=ht(d,o,t),v.error(t)},complete:function(){a=!0,f(),r=ht(d,c),v.complete()}}),nt(t).subscribe(e))}))(t)}}())}reduce(t,e){const{payload:n}=e;switch(e.type){case this.ACTIONS.ClickOpenSelect:return{...t,select:!0};case this.ACTIONS.ClickCloseSelect:return{...t,select:!1};case this.ACTIONS.ClickCompleteTask:return{...t,status:!0,payload:n};case this.ACTIONS.ClickOpenTask:return{...t,status:!1,payload:n};default:return t}}dispatch(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.actions$.next({type:t,payload:e})}openSelect(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.dispatch(this.ACTIONS.ClickOpenSelect,t)}closeSelect(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.dispatch(this.ACTIONS.ClickCloseSelect,t)}completeTask(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.dispatch(this.ACTIONS.ClickCompleteTask,t)}openTask(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.dispatch(this.ACTIONS.ClickOpenTask,t)}},yt=new class{constructor(){this.storage=localStorage}preStartStorageBase(){this.storage.setItem("data",JSON.stringify({projects:[{id:1,name:"REST Backend",tasks:[{id:5,name:"Push Notifications",done:!1},{id:6,name:"Apple Pay Support",done:!0},{id:7,name:"|18n",done:!1},{id:8,name:"AppStore Publication",done:!0}]},{id:2,name:"Frontend",tasks:[{id:9,name:"Push Notifications",done:!1},{id:10,name:"Apple Pay Support",done:!1},{id:11,name:"|18n",done:!1},{id:12,name:"AppStore Publication",done:!1},{id:13,name:"Push Notifications",done:!1},{id:14,name:"Apple Pay Support",done:!1},{id:15,name:"|18n",done:!1},{id:16,name:"AppStore Publication",done:!0},{id:17,name:"AppStore Publication",done:!1}]},{id:3,name:"Android App",tasks:[{id:18,name:"Push Notifications",done:!0},{id:19,name:"Apple Pay Support",done:!1},{id:20,name:"|18n",done:!1},{id:21,name:"AppStore Publication",done:!1},{id:22,name:"AppStore Publication",done:!1},{id:23,name:"AppStore Publication",done:!1},{id:24,name:"AppStore Publication",done:!1}]},{id:4,name:"iOS App",tasks:[{id:25,name:"Push Notifications",done:!0},{id:26,name:"Apple Pay Support",done:!1},{id:27,name:"|18n",done:!1},{id:28,name:"AppStore Publication",done:!1}]}]}))}saveStatus(t,e){const n=this.load();n.projects.forEach((n=>{n.tasks.forEach((n=>{n.id===Number(t)&&(n.done=e)}))})),this.storage.setItem("data",JSON.stringify(n))}load(){try{return JSON.parse(this.storage.getItem("data"))}catch(t){throw new Error("Invalid data")}}loadTaskId(t){const e=this.load();try{return e.projects.filter((e=>e.name===t))[0].id}catch(t){throw new Error("Invalid data")}}removeStorage(){this.storage.clear()}};yt.preStartStorageBase();const mt=yt.load(),St=document.querySelector(".container-stats"),wt=document.querySelector(".container-tasks"),gt=new vt(St),xt=new class{constructor(t,e,n){this.container=t,this.storage=n,this.store=e,this._checkComplete=this.checkComplete.bind(this)}renderTask(t){const e=this.creatingTaskObject(t);document.querySelectorAll(".list-item-task").forEach((t=>t.remove())),e.forEach((t=>this.renderTaskNote(t)))}renderTaskNote(t){const e=document.createElement("UL"),n=document.createElement("LI"),r=document.createElement("DIV"),o=document.createElement("LI"),i=document.createElement("P");e.classList.add("list-item-task"),e.setAttribute("id",t.id),n.classList.add("status"),r.classList.add("task-status"),r.setAttribute("status",t.done),"true"===r.getAttribute("status")&&(r.textContent="✓"),r.addEventListener("click",this._checkComplete),o.classList.add("name"),i.classList.add("name-title"),i.textContent=t.name,this.container.appendChild(e),e.append(n),e.append(o),n.append(r),o.append(i)}checkComplete(t){const e=t.target;"false"===e.getAttribute("status")?this.store.completeTask(e):this.store.openTask(e)}creatingTaskObject(t){return this.storage.load().projects.filter((e=>e.id===t))[0].tasks}}(wt,bt,yt);gt.renderStats(mt),xt.renderTask(2),document.querySelector(".title-active-task").textContent="Frontend",document.querySelector(".title-active-task").addEventListener("click",(()=>{document.querySelector(".select-container")?bt.closeSelect():bt.openSelect()})),bt.stateSelect$.subscribe((t=>{if(t.select?(()=>{if(!document.querySelector(".select-container")){const t=document.querySelector(".title-active-task"),e=document.createElement("DIV");e.classList.add("select-container"),mt.projects.map((e=>e.name!==t.textContent&&e.name)).forEach((n=>{if(n){const r=document.createElement("P");r.classList.add("select-paragraph"),r.textContent=n,r.addEventListener("click",(e=>{const n=e.target.textContent;t.textContent=n;const r=yt.loadTaskId(n);xt.renderTask(r),bt.closeSelect()})),e.append(r)}})),wt.prepend(e)}})():document.querySelector(".select-container")&&document.querySelector(".select-container").remove(),null!==t.payload){const e=t.payload,n=e.closest(".list-item-task").getAttribute("id");t.status?(e.setAttribute("status",!0),e.textContent="✓",yt.saveStatus(n,t.status),gt.renderStats(yt.load())):(e.setAttribute("status",!1),e.textContent="",yt.saveStatus(n,t.status),gt.renderStats(yt.load()))}}))})();
//# sourceMappingURL=main.js.map