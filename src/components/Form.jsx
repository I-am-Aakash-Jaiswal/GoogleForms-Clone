import React from 'react'
import CheckboxComp from './subForms/CheckboxComp'
import Header from './subForms/Header'
import Mcq from './subForms/Mcq'
import ShortAnswer from './subForms/ShortAnswer'
import Paragraph from './subForms/Paragraph'
import Dropdown from './subForms/Dropdown'
import FileUpload from './subForms/FileUpload'
import LinearScale from './subForms/LinearScale'
import MultiChoice from './subForms/MultiChoice'
import TickBox from './subForms/TickBox'
import classes from "./subForms/subforms.module.scss"
import Footer from './subForms/Footer'

function Form() {
  return (<div className={classes.mainForm}>
    <Header/>
    <Mcq></Mcq>
    <CheckboxComp/>
    <ShortAnswer></ShortAnswer>
    <Paragraph></Paragraph>
    <Dropdown></Dropdown>
    <FileUpload></FileUpload>
    <LinearScale></LinearScale>
    <MultiChoice></MultiChoice>
    <TickBox></TickBox>
    <Footer></Footer>
    
  </div>

      )
}

export default Form