+ createStore
    
  创建store对象，包含getState，dispatch，subscribe，replaceReducer
    
+ reducer
  
  reducer 是一个计划函数，接收就得state和action，生成新的state
    
+ action
 
  action是一个对象，必须包含type字段
    
+ dispatch

    dispatch(action) 触发action，生成新的state
    
+ subscribe

  实现订阅功能，每次触发dispatch的时候，会执行订阅函数
  
+ combineReducers

  多个reducer合并一个reducer
  
+ replaceReducer

  替换reducer函数
  
+ middleware
  
  扩展dispatch函数  
     
     
+ redux流程图如下
      
        
  ![流程图](https://user-images.githubusercontent.com/12526493/48312444-8ff2e100-e5e9-11e8-844a-48ffd9933265.png)
