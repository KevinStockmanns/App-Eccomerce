import{f as h,h as u,q as g,w as o}from"./chunk-BC2EWL22.js";import{O as c,Pb as m,Ra as p,T as d,i as f,p as l}from"./chunk-LPK2HR6M.js";var I=(()=>{let s=class s{constructor(t){this.http=t,this.cartList=[],this._cart=new f([])}get cart(){return this._cart.asObservable()}get totalUnidades(){return this.cartList.reduce((t,e)=>t+e.versiones.reduce((i,r)=>i+r.cantidad,0),0)}get precioTotal(){return this.cartList.reduce((t,e)=>t+e.versiones.reduce((i,r)=>i+r.precio*r.cantidad,0),0)}doPedido(t){return this.http.post(`${o}/pedido`,t)}addProducto(t,e){let i=this.cartList.findIndex(r=>r.id===t.id);if(i!==-1){let r=this.cartList[i].versiones.find(n=>n.id===e);r?r.cantidad++:this.cartList[i].versiones.push(this.addVersionCart(t.versiones.find(n=>n.id===e)))}else this.cartList.push({estado:t.estado,id:t.id,nombre:t.nombre,versiones:[this.addVersionCart(t.versiones.find(r=>r.id===e))]});this._cart.next(this.cartList)}removeVersion(t,e){let i=this.cartList.find(r=>r.id===t.id);if(i){let r=i.versiones[i.versiones.findIndex(n=>n.id===e)];if(r.cantidad-=1,r.cantidad<1&&(i.versiones=i.versiones.filter(n=>n.cantidad>=1),i.versiones.length===0)){this.removeItem(i,e);return}}this._cart.next(this.cartList)}addVersion(t,e){let i=this.cartList.find(r=>r.id===t.id);i&&(i.versiones[i.versiones.findIndex(r=>r.id===e)].cantidad+=1),this._cart.next(this.cartList)}removeItem(t,e){let i=this.cartList.find(r=>r.id===t.id);i&&(i.versiones=i.versiones.filter(r=>r.id!==e)),i?.versiones.length===0&&(this.cartList=this.cartList.filter(r=>r.id!==i?.id)),this._cart.next(this.cartList)}resetCart(){this.cartList=[],this._cart.next(this.cartList)}setPedidoSelected(t){t==null&&localStorage.removeItem("pedidoSelected"),localStorage.setItem("pedidoSelected",JSON.stringify(t))}get pedidoSelected(){return JSON.parse(localStorage.getItem("pedidoSelected"))}getPedidos(){return this.http.get(`${o}/pedido`)}cancelPedido(t){return this.http.delete(`${o}/pedido/${t}`)}reactivarPedido(t){return this.http.patch(`${o}/pedido/reactivar/${t}`,null)}actualizarPedido(t,e){return this.http.put(`${o}/pedido/${t}`,e)}confirmarPedido(t,e){return this.http.patch(`${o}/pedido/${t}/confirmar`,e)}addVersionCart(t){return{id:t.id,nombre:t.nombre,estado:t.estado,imagen:t.imagen,precio:t.precio,precioDescuento:t.precioDescuento,cantidad:1,descripcion:t.descripcion}}};s.\u0275fac=function(e){return new(e||s)(d(u))},s.\u0275prov=c({token:s,factory:s.\u0275fac,providedIn:"root"});let a=s;return a})();var x=(()=>{let s=class s{constructor(t,e,i){this.http=t,this.router=e,this.cartService=i,this._isLogin=p(!1),this._usuario=p(null),this._isLogin.set(localStorage.getItem("user")!==null&&this.token!==null)}get isLogin(){return this._isLogin.asReadonly()}login(t){return this.http.post(`${o}/auth/login`,JSON.stringify(t),{headers:new h({"Content-Type":"application/json"})}).pipe(l(e=>(localStorage.setItem("userToken",e.body.token),this._isLogin.set(!0),this.getInfoUser(e.body.token),this.cartService.resetCart(),e)))}signup(t){return this.http.post(`${o}/auth/signup`,t,{headers:new h({"Content-Type":"application/json"})}).pipe(l(e=>(localStorage.setItem("userToken",e.body.token),this._isLogin.set(!0),this.getInfoUser(e.body.token),this.cartService.resetCart(),e)))}getInfoUser(t){this.http.get(`${o}/usuario`,{headers:new h({Authorization:`Bearer ${t}`})}).subscribe(e=>{this.setUsuario(e.body),this.redirectTo()})}logout(){localStorage.removeItem("userToken"),localStorage.removeItem("user"),this._isLogin.set(!1),this._usuario.set(null),this.router.navigate(["/login"]),this.cartService.resetCart()}redirectTo(){let t=this._usuario();t?.rol==="USUARIO"?this.router.navigate(["/productos"]):t?.rol==="ADMIN"||t?.rol==="SUPERADMIN"?this.router.navigate(["/dashboard"]):this.router.navigate(["/productos"])}setUsuario(t){this._usuario.set(t),localStorage.setItem("user",JSON.stringify(t))}get usuario(){if(!this._usuario()){let t=localStorage.getItem("user");t&&this._usuario.set(JSON.parse(t))}return this._usuario.asReadonly()}get token(){return localStorage.getItem("userToken")}get firstName(){return this.usuario()?.nombre.split(" ")[0]}get isAdmin(){return m(()=>{let t=this._usuario();return t?.rol==="ADMIN"||t?.rol==="SUPERADMIN"})}};s.\u0275fac=function(e){return new(e||s)(d(u),d(g),d(I))},s.\u0275prov=c({token:s,factory:s.\u0275fac,providedIn:"root"});let a=s;return a})();export{I as a,x as b};
