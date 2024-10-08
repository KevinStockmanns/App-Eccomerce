import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
import { API_URL } from '../constants';
import { ResponseWrapper } from '../models/response-wrapper.model';
import { Resumen, Token, Usuario } from '../models/usuario.model';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private _isLogin: WritableSignal<boolean> = signal(false);
  private _usuario: WritableSignal<Usuario | null> = signal(null);

  constructor(private http: HttpClient, private router: Router, private cartService: CartService) {
    this._isLogin.set(localStorage.getItem('user') !== null && this.token !== null);
  }

  get isLogin(): Signal<boolean> {
    return this._isLogin.asReadonly();
  }

  login(body: any): Observable<ResponseWrapper<Token>> {
    return this.http.post<ResponseWrapper<Token>>(`${API_URL}/auth/login`, JSON.stringify(body), {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(
      map(res => {
        localStorage.setItem('userToken', res.body.token);
        this._isLogin.set(true);
        this.getInfoUser(res.body.token);
        this.cartService.resetCart();
        return res;
      })
    );
  }

  signup(body: any) {
    return this.http.post<ResponseWrapper<Token>>(`${API_URL}/auth/signup`, body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(
      map(res => {
        localStorage.setItem('userToken', res.body.token);
        this._isLogin.set(true);
        this.getInfoUser(res.body.token);
        this.cartService.resetCart();
        return res;
      })
    );
  }

  private getInfoUser(token: string) {
    this.http.get<ResponseWrapper<Usuario>>(`${API_URL}/usuario`, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` })
    }).subscribe(res => {
      this.setUsuario(res.body);
      this.router.navigate(['/'])
    });
  }

  logout() {
    this.http.patch(`${API_URL}/auth/logout`, null).subscribe();
    localStorage.removeItem('userToken');
    localStorage.removeItem('user');
    this._isLogin.set(false);
    this._usuario.set(null); // Limpia el usuario también al hacer logout
    this.router.navigate(['/']);
    this.cartService.resetCart();
  }

  changePassword(body:any){
    return this.http.post(`${API_URL}/usuario/clave`, body);
  }
  updateUser(idUsuario:number, body:any):Observable<ResponseWrapper<Token>>{
    return this.http.put<ResponseWrapper<Token>>(`${API_URL}/usuario/${idUsuario}`, body);
  }
  forgetPassword(body:any){
    return this.http.post(`${API_URL}/usuario/forget-pass`, body);
  }
  getResumen(): Observable<ResponseWrapper<Resumen>>{
    return this.http.get<ResponseWrapper<Resumen>>(`${API_URL}/usuario/resumen`)
  }

  private redirectTo() {
    const user = this._usuario();
    if (user?.rol === 'USUARIO') {
      this.router.navigate(['/productos']);
    } else if (user?.rol === 'ADMIN' || user?.rol === 'SUPERADMIN') {
      this.router.navigate(['/cart']);
    } else {
      this.router.navigate(['/productos']);
    }
  }

  setUsuario(user: Usuario) {
    this._usuario.set(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  setUsuarioSelected(user:Usuario){
    localStorage.setItem('userSelected', JSON.stringify(user));
  }

  get usuarioSelected(): Usuario|null{
    let userSelected = localStorage.getItem('userSelected');
    if(!userSelected)
      return null;

    return JSON.parse(userSelected) as Usuario;
  }
  get usuario(): Signal<Usuario | null> {
    if (!this._usuario()) {
      const userInfo = localStorage.getItem('user');
      if (userInfo) {
        this._usuario.set(JSON.parse(userInfo) as Usuario);
      }
    }
    return this._usuario.asReadonly();
  }

  setToken(token:string){
    localStorage.setItem('userToken', token);

  }
  get token() {
    return localStorage.getItem('userToken');
  }
  get firstName(){
    return this.usuario()?.nombre.split(' ')[0];
  }
  get isAdmin(): Signal<boolean> {
    return computed(() => {
      const user = this._usuario();
      return user?.rol === 'ADMIN' || user?.rol === 'SUPERADMIN';
    });
  }
}
