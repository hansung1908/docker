import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {

  const [products, setProducts] = useState([]);

  async function onLoad() {
    let response = await fetch("http://localhost:8080/products")
    let responseBody = await response.json();
    console.log("onLoad", responseBody);
    setProducts(responseBody);
  }

  // 해당 페이지가 열릴 때, 한번 실행. (초기화 메서드, 최초에 한번 실행)
  // 어떤 값이 변경될 때, 재사용 여부, 빈배열(어떤 값이든 실행)
  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div>
      <h1>상품 목록 페이지</h1>
      <hr/>
      <div>
        {products.map((product) => <Card product={product}/>)}
      </div>
    </div>
  );
}

export default App;
