import './App.css'
import ShopItemClass from './components/ShopItemClass'
import Item from './components/Item'

function App() {

  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemClass item={Item} />
      </div>
    </div>
  )
}

export default App
