import { create } from 'zustand'
// import { products } from '../data'

const useStore = create((set) => ({
  cart: [],
  bookmarks: [],
  drawer: null,
  cartLength: 0,
  bookmarkProduct: (product) => set((state) => ({
    bookmarks: (() => {
      const oldProduct = state.bookmarks.find(oldProduct => oldProduct.id === product.id)

      if(!oldProduct) return [{...product, count: 1}, ...state.bookmarks]
      
      return state.bookmarks.filter(item => item.id !== product.id)
    })()
  })),
  addToCart: (product) => set((state) => ({
    // cart: [product, ...state.cart]
    cart: (()=> {
      const sameProduct = state.cart.find(oldProduct => oldProduct.id === product.id) // check for same product
  
      if(sameProduct) { // if we found the same product increment its count value
        sameProduct.count = sameProduct.count + 1
        return [...state.cart]
      } else { // if have not added this product yet, add it to our cart,
       return [{...product, count: 1}, ...state.cart]
      }
    })(),
    cartLength: state.cartLength + 1
  })),
  removeFromCart: (product, removeAll) => set((state) => ({
    cart: (()=> {
      const sameProduct = state.cart.find(oldProduct => oldProduct.id === product.id) // check for same product
  
      if(sameProduct.count > 1 && !removeAll) { // if more than 1, decrement its count value
        sameProduct.count = sameProduct.count - 1
        return [...state.cart]
      } else { // if left 1 item, remove it completely,
       return state.cart.filter(p => p.id !== product.id)
      }
    })(),
    cartLength: state.cartLength - 1
  })),
  emptyCart: () => set(() => ({cart: [], cartLength: 0})),
  setDrawer: (product) => set(() => ({
    drawer: product
  }))
}))

export default useStore