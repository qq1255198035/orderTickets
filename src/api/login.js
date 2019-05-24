import { ajaxGet } from "@/utils/axios";
import api from '@/api/index'

export function login(){
      return ajaxGet(api.login)
}

export function getInfo(){
      return ajaxGet(api.userInfo)
}