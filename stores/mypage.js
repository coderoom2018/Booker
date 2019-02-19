import { action, observable } from 'mobx'
import { useStaticRendering } from 'mobx-react'

// const isServer = typeof window === 'undefined'
// useStaticRendering(isServer)

export default class MypageStore {
  @observable number = 1;  // 기본 값을 1로 설정

  // constructor(isServer, initialData = {}) {
  //   this.number =
  //     initialData.number != null ? initialData.number : 1
  // }

  @action _increase = () => {
    this.number++;
  }

  @action _decrease = () => {
    this.number--;
  }
}



// let store = null
// export function initializeStore(initialData) {
//   // Always make a new store if server, otherwise state is shared between requests
//   if (isServer) {
//     return new MypageStore(isServer, initialData)
//   }
//   if (store === null) {
//     store = new MypageStore(isServer, initialData)
//   }
//   return store
// }