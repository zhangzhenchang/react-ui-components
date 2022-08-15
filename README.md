### 使用storybook构建的一套React组件库

### 分支规范
    - 开发分支 dev
    - 主分支 master

### 本地开发

```
# 安装依赖
$ npm install
# 启动storybook 开发组件
$ npm run storybook

# 利用工具创建组件 需要全局安装 fpp-ui-tool 
npm install -g fpp-ui-tool

fpp-ui-tool create 
# 或
fpp-ui-tool create componentName

# 使用 storybook 开发新组件时，组件内样式需要 手动引入 .storybook/style.js 中

```

### 说明：
dist 目录为全量包文件
lib 目录 各个组件分开打包后的文件

#### 使用方式一
```
# ui 组件使用时， 在app 中引入样式文件import './App.css';
import React from 'react'
import 'react-ui-components/dist/index.css'
import { Button, Header } from 'react-ui-components'

function App() {
  return (
    <div className="App">
      <Header />
      <Button />
    </div>
  );
}

export default App;

```
#### 使用方式二

```
# ui 组件使用时， 在app 中引入样式文件import './App.css';
import React from 'react'
import 'react-ui-components/dist/index.css'
import Button from 'react-ui-components/lib/Button'

function App() {
  return (
    <div className="App">
      <Header />
      <Button />
    </div>
  );
}

export default App;

```