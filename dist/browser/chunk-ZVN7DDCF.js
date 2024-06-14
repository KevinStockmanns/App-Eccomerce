import{a as Y}from"./chunk-BC2EWL22.js";import{$ as u,$a as X,Ab as p,Fb as ue,Ka as a,M as N,N as f,Na as E,O as le,P as q,R as v,Sa as d,Y as _,_ as z,a as h,b as y,fa as Z,ia as C,k as se,ma as A,mb as V,na as M,p as oe,v as ae}from"./chunk-LPK2HR6M.js";var Ce=(()=>{let e=class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}};e.\u0275fac=function(r){return new(r||e)(a(E),a(A))},e.\u0275dir=u({type:e});let i=e;return i})(),R=(()=>{let e=class e extends Ce{};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=C(e)))(s||e)}})(),e.\u0275dir=u({type:e,features:[d]});let i=e;return i})(),S=new v("");var ze={provide:S,useExisting:f(()=>Ve),multi:!0};function Ze(){let i=Y()?Y().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Xe=new v(""),Ve=(()=>{let e=class e extends Ce{constructor(t,r,s){super(t,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Ze())}writeValue(t){let r=t??"";this.setProperty("value",r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}};e.\u0275fac=function(r){return new(r||e)(a(E),a(A),a(Xe,8))},e.\u0275dir=u({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&V("input",function(l){return s._handleInput(l.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(l){return s._compositionEnd(l.target.value)})},features:[p([ze]),d]});let i=e;return i})();function g(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function De(i){return i!=null&&typeof i.length=="number"}var H=new v(""),L=new v(""),Ye=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,de=class{static min(e){return Ke(e)}static max(e){return Je(e)}static required(e){return Qe(e)}static requiredTrue(e){return et(e)}static email(e){return tt(e)}static minLength(e){return it(e)}static maxLength(e){return nt(e)}static pattern(e){return rt(e)}static nullValidator(e){return be(e)}static compose(e){return Ie(e)}static composeAsync(e){return Oe(e)}};function Ke(i){return e=>{if(g(e.value)||g(i))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<i?{min:{min:i,actual:e.value}}:null}}function Je(i){return e=>{if(g(e.value)||g(i))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>i?{max:{max:i,actual:e.value}}:null}}function Qe(i){return g(i.value)?{required:!0}:null}function et(i){return i.value===!0?null:{required:!0}}function tt(i){return g(i.value)||Ye.test(i.value)?null:{email:!0}}function it(i){return e=>g(e.value)||!De(e.value)?null:e.value.length<i?{minlength:{requiredLength:i,actualLength:e.value.length}}:null}function nt(i){return e=>De(e.value)&&e.value.length>i?{maxlength:{requiredLength:i,actualLength:e.value.length}}:null}function rt(i){if(!i)return be;let e,n;return typeof i=="string"?(n="",i.charAt(0)!=="^"&&(n+="^"),n+=i,i.charAt(i.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=i.toString(),e=i),t=>{if(g(t.value))return null;let r=t.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function be(i){return null}function Ae(i){return i!=null}function Me(i){return ue(i)?se(i):i}function Ee(i){let e={};return i.forEach(n=>{e=n!=null?h(h({},e),n):e}),Object.keys(e).length===0?null:e}function Fe(i,e){return e.map(n=>n(i))}function st(i){return!i.validate}function we(i){return i.map(e=>st(e)?e:n=>e.validate(n))}function Ie(i){if(!i)return null;let e=i.filter(Ae);return e.length==0?null:function(n){return Ee(Fe(n,e))}}function Se(i){return i!=null?Ie(we(i)):null}function Oe(i){if(!i)return null;let e=i.filter(Ae);return e.length==0?null:function(n){let t=Fe(n,e).map(Me);return ae(t).pipe(oe(Ee))}}function Ne(i){return i!=null?Oe(we(i)):null}function ce(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function Pe(i){return i._rawValidators}function xe(i){return i._rawAsyncValidators}function K(i){return i?Array.isArray(i)?i:[i]:[]}function k(i,e){return Array.isArray(i)?i.includes(e):i===e}function he(i,e){let n=K(e);return K(i).forEach(r=>{k(n,r)||n.push(r)}),n}function fe(i,e){return K(e).filter(n=>!k(i,n))}var G=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Se(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ne(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},c=class extends G{get formDirective(){return null}get path(){return null}},I=class extends G{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},T=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},ot={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ii=y(h({},ot),{"[class.ng-submitted]":"isSubmitted"}),ni=(()=>{let e=class e extends T{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(a(I,2))},e.\u0275dir=u({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&X("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[d]});let i=e;return i})(),ri=(()=>{let e=class e extends T{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(a(c,10))},e.\u0275dir=u({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&X("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[d]});let i=e;return i})();var F="VALID",P="INVALID",D="PENDING",w="DISABLED";function ee(i){return($(i)?i.validators:i)||null}function at(i){return Array.isArray(i)?Se(i):i||null}function te(i,e){return($(e)?e.asyncValidators:i)||null}function lt(i){return Array.isArray(i)?Ne(i):i||null}function $(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function ke(i,e,n){let t=i.controls;if(!(e?Object.keys(t):t).length)throw new N(1e3,"");if(!t[n])throw new N(1001,"")}function Ge(i,e,n){i._forEachChild((t,r)=>{if(n[r]===void 0)throw new N(1002,"")})}var b=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===F}get invalid(){return this.status===P}get pending(){return this.status==D}get disabled(){return this.status===w}get enabled(){return this.status!==w}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(he(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(he(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(fe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(fe(e,this._rawAsyncValidators))}hasValidator(e){return k(this._rawValidators,e)}hasAsyncValidator(e){return k(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=D,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=w,this.errors=null,this._forEachChild(t=>{t.disable(y(h({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(y(h({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(t=>t(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=F,this._forEachChild(t=>{t.enable(y(h({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(y(h({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===F||this.status===D)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?w:F}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=D,this._hasOwnPendingAsyncValidator=!0;let n=Me(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(t=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(t,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((t,r)=>t&&t._find(r),this)}getError(e,n){let t=n?this.get(n):this;return t&&t.errors?t.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new M,this.statusChanges=new M}_calculateStatus(){return this._allControlsDisabled()?w:this.errors?P:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(D)?D:this._anyControlsHaveStatus(P)?P:F}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){$(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=at(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=lt(this._rawAsyncValidators)}},j=class extends b{constructor(e,n,t){super(ee(n),te(t,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,t={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){Ge(this,!0,e),Object.keys(e).forEach(t=>{ke(this,!0,t),this.controls[t].setValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(t=>{let r=this.controls[t];r&&r.patchValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((t,r)=>{t.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,t)=>(e[t]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,t)=>t._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let t=this.controls[n];t&&e(t,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,t]of Object.entries(this.controls))if(this.contains(n)&&e(t))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,t,r)=>((t.enabled||this.disabled)&&(n[r]=t.value),n))}_reduceChildren(e,n){let t=e;return this._forEachChild((r,s)=>{t=n(t,r,s)}),t}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var J=class extends j{};var Te=new v("CallSetDisabledState",{providedIn:"root",factory:()=>ie}),ie="always";function ne(i,e){return[...e.path,i]}function pe(i,e,n=ie){re(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),dt(i,e),ht(i,e),ct(i,e),ut(i,e)}function ge(i,e,n=!0){let t=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(t),e.valueAccessor.registerOnTouched(t)),U(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function B(i,e){i.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function ut(i,e){if(e.valueAccessor.setDisabledState){let n=t=>{e.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(n),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(n)})}}function re(i,e){let n=Pe(i);e.validator!==null?i.setValidators(ce(n,e.validator)):typeof n=="function"&&i.setValidators([n]);let t=xe(i);e.asyncValidator!==null?i.setAsyncValidators(ce(t,e.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let r=()=>i.updateValueAndValidity();B(e._rawValidators,r),B(e._rawAsyncValidators,r)}function U(i,e){let n=!1;if(i!==null){if(e.validator!==null){let r=Pe(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.validator);s.length!==r.length&&(n=!0,i.setValidators(s))}}if(e.asyncValidator!==null){let r=xe(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.asyncValidator);s.length!==r.length&&(n=!0,i.setAsyncValidators(s))}}}let t=()=>{};return B(e._rawValidators,t),B(e._rawAsyncValidators,t),n}function dt(i,e){e.valueAccessor.registerOnChange(n=>{i._pendingValue=n,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&je(i,e)})}function ct(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&je(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function je(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function ht(i,e){let n=(t,r)=>{e.valueAccessor.writeValue(t),r&&e.viewToModelUpdate(t)};i.registerOnChange(n),e._registerOnDestroy(()=>{i._unregisterOnChange(n)})}function ft(i,e){i==null,re(i,e)}function pt(i,e){return U(i,e)}function gt(i,e){if(!i.hasOwnProperty("model"))return!1;let n=i.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function mt(i){return Object.getPrototypeOf(i.constructor)===R}function yt(i,e){i._syncPendingControls(),e.forEach(n=>{let t=n.control;t.updateOn==="submit"&&t._pendingChange&&(n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function vt(i,e){if(!e)return null;Array.isArray(e);let n,t,r;return e.forEach(s=>{s.constructor===Ve?n=s:mt(s)?t=s:r=s}),r||t||n||null}function _t(i,e){let n=i.indexOf(e);n>-1&&i.splice(n,1)}function me(i,e){let n=i.indexOf(e);n>-1&&i.splice(n,1)}function ye(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var x=class extends b{constructor(e=null,n,t){super(ee(n),te(t,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),$(n)&&(n.nonNullable||n.initialValueIsDefault)&&(ye(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){me(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){me(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ye(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Ct=i=>i instanceof x,Vt=(()=>{let e=class e extends c{ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return ne(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=C(e)))(s||e)}})(),e.\u0275dir=u({type:e,features:[d]});let i=e;return i})();var oi=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=u({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let i=e;return i})(),Dt={provide:S,useExisting:f(()=>bt),multi:!0},bt=(()=>{let e=class e extends R{writeValue(t){let r=t??"";this.setProperty("value",r)}registerOnChange(t){this.onChange=r=>{t(r==""?null:parseFloat(r))}}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=C(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(r,s){r&1&&V("input",function(l){return s.onChange(l.target.value)})("blur",function(){return s.onTouched()})},features:[p([Dt]),d]});let i=e;return i})();var Be=new v("");var At={provide:c,useExisting:f(()=>Ue)},Ue=(()=>{let e=class e extends c{constructor(t,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new M,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(U(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let r=this.form.get(t.path);return pe(r,t,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){ge(t.control||null,t,!1),_t(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this.submitted=!0,yt(this.form,this.directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{let r=t.control,s=this.form.get(t.path);r!==s&&(ge(r||null,t),Ct(s)&&(pe(s,t,this.callSetDisabledState),t.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let r=this.form.get(t.path);ft(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let r=this.form.get(t.path);r&&pt(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){re(this.form,this),this._oldForm&&U(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(a(H,10),a(L,10),a(Te,8))},e.\u0275dir=u({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&V("submit",function(l){return s.onSubmit(l)})("reset",function(){return s.onReset()})},inputs:{form:[_.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[p([At]),d,Z]});let i=e;return i})(),Mt={provide:c,useExisting:f(()=>Re)},Re=(()=>{let e=class e extends Vt{constructor(t,r,s){super(),this.name=null,this._parent=t,this._setValidators(r),this._setAsyncValidators(s)}_checkParentType(){Le(this._parent)}};e.\u0275fac=function(r){return new(r||e)(a(c,13),a(H,10),a(L,10))},e.\u0275dir=u({type:e,selectors:[["","formGroupName",""]],inputs:{name:[_.None,"formGroupName","name"]},features:[p([Mt]),d]});let i=e;return i})(),Et={provide:c,useExisting:f(()=>He)},He=(()=>{let e=class e extends c{constructor(t,r,s){super(),this.name=null,this._parent=t,this._setValidators(r),this._setAsyncValidators(s)}ngOnInit(){this._checkParentType(),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return ne(this.name==null?this.name:this.name.toString(),this._parent)}_checkParentType(){Le(this._parent)}};e.\u0275fac=function(r){return new(r||e)(a(c,13),a(H,10),a(L,10))},e.\u0275dir=u({type:e,selectors:[["","formArrayName",""]],inputs:{name:[_.None,"formArrayName","name"]},features:[p([Et]),d]});let i=e;return i})();function Le(i){return!(i instanceof Re)&&!(i instanceof Ue)&&!(i instanceof He)}var Ft={provide:I,useExisting:f(()=>wt)},wt=(()=>{let e=class e extends I{set isDisabled(t){}constructor(t,r,s,o,l){super(),this._ngModelWarningConfig=l,this._added=!1,this.name=null,this.update=new M,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=vt(this,o)}ngOnChanges(t){this._added||this._setUpControl(),gt(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return ne(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(a(c,13),a(H,10),a(L,10),a(S,10),a(Be,8))},e.\u0275dir=u({type:e,selectors:[["","formControlName",""]],inputs:{name:[_.None,"formControlName","name"],isDisabled:[_.None,"disabled","isDisabled"],model:[_.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[p([Ft]),d,Z]});let i=e;return i})(),It={provide:S,useExisting:f(()=>We),multi:!0};function $e(i,e){return i==null?`${e}`:(e&&typeof e=="object"&&(e="Object"),`${i}: ${e}`.slice(0,50))}function St(i){return i.split(":")[0]}var We=(()=>{let e=class e extends R{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;let r=this._getOptionId(t),s=$e(r,t);this.setProperty("value",s)}registerOnChange(t){this.onChange=r=>{this.value=this._getOptionValue(r),t(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(let r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r),t))return r;return null}_getOptionValue(t){let r=St(t);return this._optionMap.has(r)?this._optionMap.get(r):t}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=C(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(r,s){r&1&&V("change",function(l){return s.onChange(l.target.value)})("blur",function(){return s.onTouched()})},inputs:{compareWith:"compareWith"},features:[p([It]),d]});let i=e;return i})(),ai=(()=>{let e=class e{constructor(t,r,s){this._element=t,this._renderer=r,this._select=s,this._select&&(this.id=this._select._registerOption())}set ngValue(t){this._select!=null&&(this._select._optionMap.set(this.id,t),this._setElementValue($e(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._setElementValue(t),this._select&&this._select.writeValue(this._select.value)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};e.\u0275fac=function(r){return new(r||e)(a(A),a(E),a(We,9))},e.\u0275dir=u({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let i=e;return i})(),Ot={provide:S,useExisting:f(()=>qe),multi:!0};function ve(i,e){return i==null?`${e}`:(typeof e=="string"&&(e=`'${e}'`),e&&typeof e=="object"&&(e="Object"),`${i}: ${e}`.slice(0,50))}function Nt(i){return i.split(":")[0]}var qe=(()=>{let e=class e extends R{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;let r;if(Array.isArray(t)){let s=t.map(o=>this._getOptionId(o));r=(o,l)=>{o._setSelected(s.indexOf(l.toString())>-1)}}else r=(s,o)=>{s._setSelected(!1)};this._optionMap.forEach(r)}registerOnChange(t){this.onChange=r=>{let s=[],o=r.selectedOptions;if(o!==void 0){let l=o;for(let m=0;m<l.length;m++){let O=l[m],W=this._getOptionValue(O.value);s.push(W)}}else{let l=r.options;for(let m=0;m<l.length;m++){let O=l[m];if(O.selected){let W=this._getOptionValue(O.value);s.push(W)}}}this.value=s,t(s)}}_registerOption(t){let r=(this._idCounter++).toString();return this._optionMap.set(r,t),r}_getOptionId(t){for(let r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r)._value,t))return r;return null}_getOptionValue(t){let r=Nt(t);return this._optionMap.has(r)?this._optionMap.get(r)._value:t}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=C(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(r,s){r&1&&V("change",function(l){return s.onChange(l.target)})("blur",function(){return s.onTouched()})},inputs:{compareWith:"compareWith"},features:[p([Ot]),d]});let i=e;return i})(),li=(()=>{let e=class e{constructor(t,r,s){this._element=t,this._renderer=r,this._select=s,this._select&&(this.id=this._select._registerOption(this))}set ngValue(t){this._select!=null&&(this._value=t,this._setElementValue(ve(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._select?(this._value=t,this._setElementValue(ve(this.id,t)),this._select.writeValue(this._select.value)):this._setElementValue(t)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}_setSelected(t){this._renderer.setProperty(this._element.nativeElement,"selected",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};e.\u0275fac=function(r){return new(r||e)(a(A),a(E),a(qe,9))},e.\u0275dir=u({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let i=e;return i})();var Pt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=z({type:e}),e.\u0275inj=q({});let i=e;return i})(),Q=class extends b{constructor(e,n,t){super(ee(n),te(t,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,t={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(e,n={}){let t=this._adjustIndex(e);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,t={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){Ge(this,!1,e),e.forEach((t,r)=>{ke(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((t,r)=>{t.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,t)=>t._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,t)=>{e(n,t)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function _e(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var ui=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let t=new e;return t.useNonNullable=!0,t}group(t,r=null){let s=this._reduceControls(t),o={};return _e(r)?o=r:r!==null&&(o.validators=r.validator,o.asyncValidators=r.asyncValidator),new j(s,o)}record(t,r=null){let s=this._reduceControls(t);return new J(s,r)}control(t,r,s){let o={};return this.useNonNullable?(_e(r)?o=r:(o.validators=r,o.asyncValidators=s),new x(t,y(h({},o),{nonNullable:!0}))):new x(t,r,s)}array(t,r,s){let o=t.map(l=>this._createControl(l));return new Q(o,r,s)}_reduceControls(t){let r={};return Object.keys(t).forEach(s=>{r[s]=this._createControl(t[s])}),r}_createControl(t){if(t instanceof x)return t;if(t instanceof b)return t;if(Array.isArray(t)){let r=t[0],s=t.length>1?t[1]:null,o=t.length>2?t[2]:null;return this.control(r,s,o)}else return this.control(t)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=le({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var di=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:Be,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:Te,useValue:t.callSetDisabledState??ie}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=z({type:e}),e.\u0275inj=q({imports:[Pt]});let i=e;return i})();export{Ve as a,de as b,ni as c,ri as d,oi as e,bt as f,Ue as g,He as h,wt as i,We as j,ai as k,li as l,Q as m,ui as n,di as o};
