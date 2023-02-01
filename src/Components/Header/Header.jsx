import React, { Component } from 'react'
import './header.css' 

export default class Header extends Component {

  constructor(){
    super()
    this.state={
      ColorData :[
        {id:1,bgColor:"linear-gradient( 135deg, #ABDCFF 10%, #0396FF 80%)"},
        {id:2,bgColor:"linear-gradient( 135deg, #5EFCE8 10%, #736EFE 80%)"},
        {id:3,bgColor:"linear-gradient( 135deg, #CE9FFC 10%, #7367F0 80%)"},
        {id:4,bgColor:"linear-gradient( 135deg, #43CBFF 10%, #9708CC 80%)"},
        {id:5,bgColor:"linear-gradient( 135deg, #F761A1 10%, #8C1BAB 80%)"},

        {id:6,bgColor:"linear-gradient( 135deg, #69FF97 10%, #00E4FF 100%)"},
        {id:7,bgColor:"linear-gradient( 135deg, #F0FF00 10%, #58CFFB 80%)"},
        {id:8,bgColor:"linear-gradient( 135deg, #FFF720 10%, #3CD500 100%)"},
        {id:9,bgColor:" linear-gradient( 135deg, #70F570 10%, #49C628 100%)"},
        {id:10,bgColor:"linear-gradient( 135deg, #79F1A4 10%, #0E5CAD 100%)"},
 
        {id:11,bgColor:"linear-gradient( 135deg, #FFF886 10%, #F072B6 100%)"},
        {id:12,bgColor:"linear-gradient( 135deg, #FFD3A5 10%, #FD6585 80%)"},
        {id:13,bgColor:"linear-gradient( 135deg, #FFA8A8 10%, #FCFF00 100%)"},
        {id:14,bgColor:"linear-gradient( 135deg, #FFE985 10%, #FA742B 100%)"},
        {id:15,bgColor:"linear-gradient( 135deg, #FDD819 10%, #E80505 100%)"},
  
      ]
    }
  }

  render() {
    return (
      <div className="header__container">
      <div className="header__title-box">
        <h1>پیگمنت روانشناسی کاربردی رنگ ها</h1>
        <h5>
          در میان انواع پیام ها، رنگ به شدت با تمام احساسات آدمی در ارتباط است و
          ضمن تحریک آن، نماد ذهنیات انتزاعی و افکار گوناگون است .  پیگمنت نه تنها
          معانی حسی هر خانواده رنگی را توضیح می دهد بلکه بیش از صد ها ترکیب
          تاثیر گذار رنگی را برای استفاده در دریافت پیام به شما معرفی می کند.
        </h5>
        <a href="#" className="btn__primary">شروع کنید</a>
      </div>
      <div className="header__image-box">
        {this.state.ColorData.map
        (
          data => 
          <span key={data.id} style={{background:`${data.bgColor}`}}></span>
        )
          }

      </div>
    </div>
    )
  }
}