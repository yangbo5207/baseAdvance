const store = {}
const events = {}

// 往store中添加一个状态值，并确保传入一个初始值
export const registerState = (status, value) => {
  if (store[status]) {
    throw new Error('状态已经存在。')
    return;
  }
  store[status] = value;
  return value;
}

// 获取整个状态树
export const getStore = () => store

// 获取某个状态的值
export const getState = status => store[status]

// 设置某个状态的值
export const setState = (status, value) => {
  store[status] = value;
  dispatch(status, value);
  return value;
}

// 将状态值与事件绑定在一起，通过status-events 的形式保存在events对象中
export const bind = (status, eventFn) => {
  events[status] = eventFn;
}

// 移除绑定
export const remove = status => {
  events[status] = null;
  return status;
}

export const dispatch = (status, value) => {
  if (!events[status]) {
    throw new Error('未绑定任何事件！')
  }
  events[status](value);
  return value;
}