import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of, tap } from 'rxjs';
import { Pedido } from '../models/pedido.model';
import { inject } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

let cache = new Map<string, {response:any, timestamp:number}>();
export const cacheInterceptor: HttpInterceptorFn = (req, next) => {
  
  if(endpointCacheable(req.urlWithParams, req.method)){
    let key = req.urlWithParams + localStorage.getItem('userToken');

    let cachedResponse: {response:any, timestamp:number}|undefined = cache.get(key)
    if(cachedResponse && isFreshCache(cachedResponse.timestamp)){
      
      // console.log("En cache");
      return of(new HttpResponse({body: cachedResponse.response}));
    }else{
      // console.log("Peticion real");
      
      return next(req).pipe(
        tap(e=>{
          if(e instanceof HttpResponse){
            cache.set(key, {response: e.body, timestamp: Date.now()});
          }
        })
      );
    }
    
    
  }
  return next(req);

  
};


function isFreshCache(timestamp: number){
  const MAX_TIME_CACHE = 1000*60*30;
  return (Date.now() - timestamp) < MAX_TIME_CACHE;
}
function endpointCacheable(url:string, method: string): boolean{
  if(method !== 'GET')
    return false;

  const endpointsCacheables = [
    '/api/v1/producto',
    '/api/v1/pedido',
    '/georef/api/provincias',
    '/georef/api/municipios'
  ]

  const parsedUrl: URL = new URL(url);
  const path = parsedUrl.pathname;
  // console.log(parsedUrl);
  // console.log(path);
  // console.log(endpointAllowed.find(el=> el == path));
  // console.log(endpointAllowed.find(el=> el == path)!== undefined);
  
  return (endpointsCacheables.find(el=> el === path) !== undefined);
}




export function updateItemInCache(newItem: any, type:string){
  let token = localStorage.getItem('userToken') as string;
  cache.forEach((value, key)=>{
    // console.log(value);
    // console.log(key);
    
    if(key.includes(`/${type}`) && key.endsWith(token)){
      console.log("ingreso a la url para cambiar el item");
      
      let indexItem = itemInUrl(key, newItem.id);
      
      if(indexItem !== -1){
        console.log("El item se encuentra en el cache");
        console.log(value.response.body.content[indexItem]);
        console.log(newItem);
        
        let cacheItem = cache.get(key);
        if (cacheItem && cacheItem.response.body.content) {
          cacheItem.response.body.content[indexItem] = newItem;
          cache.set(key, cacheItem);
        }
      }
    }
  })
}
function itemInUrl(url:string, idElement:number):number{
  let itemInCache = cache.get(url);
  return (itemInCache?.response.body.content as any[]).findIndex((el: any)=> el.id == idElement);
}