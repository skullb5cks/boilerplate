import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers/index'
import App from './components/App'

// action -> store -><- reducer

let store = createStore(todoApp); // store는 state tree를 갖고 있다
store.subscribe( () => console.log(store.getState()));

render(
    <Provider store={store}> 
        <App />
    </Provider>,
    document.getElementById('root')
);

// provider는 리덕스 store를 컴포넌트와 connect() 호출로 연결 시켜준다


/**
 * action: 데이터 상태 객체, 상수타입, 고정된 값
 * component: view(react)
 * container: redux 와 component를 연결
 * reducer: 상태설계, 이전 상태와 액션을 받아서 다음 상태를 반환, 객체 상태를 바꾼다
 * redux의 핵심은 이전상태와 액션을 결합하여 새로운 상태를 만드는것
 * (previousState, action) => newState
 */

if (module.hot) {
  module.hot.accept();
}
