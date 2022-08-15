import React,{useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './index';
import Icon from '../Icon'
import Form from "../Form";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DataEntry/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    // size: {
    //   description: '尺寸',
    //   defaultValue: 'medium',
    //   control: {
    //     type: 'select',
    //     options: [ 'small', 'medium', 'large'],
    //   },
    // },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => {
  const [inputVal, setInputVal] = useState('');
  const [type, setType] = useState('password');
  const handleChange = (val)=>{
    console.log('val',val)
    setInputVal(val)
  }
  const handleOnAddon = ()=>{

  }
  const handleChangeType = (val)=>{
    if(val==='show'){
      setType('text')
    }else{
      setType('password')
    }
  }
  return (
      <Input {...args} value={inputVal} type={type} onChange={handleChange} onChangeType={handleChangeType}  />
  )
}
const Template2: ComponentStory<typeof Input> = (args) => {
  const [inputVal, setInputVal] = useState('');
  const [type, setType] = useState('password');
  const [verificationCodeLoading, setVerificationCodeLoading] = useState(false);
  const [verificationCodeTrgger, setVerificationCodeTrgger] = useState(false);
  const handleChange = (val)=>{
    console.log('val',val)
    setInputVal(val)
  }
  const handleOnAddon = ()=>{

  }

  const handleChangeType = (val)=>{
    if(val==='show'){
      setType('text')
    }else{
      setType('password')
    }
  }
  const handleSendVerificationCode = () => {
    setVerificationCodeLoading(true)
    setTimeout(()=>{
      setVerificationCodeLoading(false)
      setVerificationCodeTrgger(true)
    },2000)
    setVerificationCodeTrgger(false) // 触发成功之后一定要置为false
  }
  return (
      <Input {...args}
             value={inputVal}
             verificationCodeLoading={verificationCodeLoading}
             verificationCodeTrgger={verificationCodeTrgger}
             onChange={handleChange}
             onChangeType={handleChangeType}
             sendVerificationCode={handleSendVerificationCode}
      />
  )
}
const Template3: ComponentStory<typeof Input> = (args) => {
  const [inputVal, setInputVal] = useState('123');
  const [type, setType] = useState('password');
  const handleChange = (val)=>{
    console.log('val',val)
    setInputVal(val)
  }
  const handleOnAddon = ()=>{

  }

  return (
      <Input {...args} value={inputVal} error={inputVal===''} errorText={inputVal===''?'您输入的不能为空':''} onChange={handleChange}   />
  )
}

export const error = Template3.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
error.args = {
  value:'',
  label: 'Input',
  onChange:()=>{}
};

export const disabled = Template.bind({});
disabled.args = {
  disabled: true,
  placeholder:'当前输入框不可编辑'
};

export const password = Template.bind({});
password.args = {
  placeholder:'login_Password',
  name:"password",
  passwordIcon:true,
  allowClear:true,
  value:'',
  onChange:() => {
  },
  onChangeType:() => {
  }
};

export const textarea = Template2.bind({});
textarea.args = {
  disabled: true,
  placeholder:'textarea',
  type:"textarea",
  name:"textarea",
  value:'',
  onChange:() => {
  }
};

export const search = Template.bind({});
search.args = {
  placeholder:'login_Password',
  name:"search",
  value:'',
  prefix:'Search',
  suffix:'a-Crosssign',
  allowClear:true,
  groupAddon:'copy',
  passwordIcon:true,
  onAddon:() => {
  },
  onChange:() => {
  }
};


export const verificationCode = Template2.bind({});
verificationCode.args = {
  placeholder:'verificationCode',
  name:"verificationCode",
  value:'',
  allowClear:true,
  verificationCode:true,
  verificationCodeLoading:false,
  verificationCodeTrgger:false,
  verificationCodeTime:3,
  verificationCodeText:'Send',
  sendVerificationCode:()=>{},
  onAddon:() => {
  },
  onChange:() => {
  }
};