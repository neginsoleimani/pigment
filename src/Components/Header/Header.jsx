import React from "react";
import "./header.css";
export default function Header() {
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
      <div className="header-image-box">
        <h1>محل قرار گیری تصویر</h1>
      </div>
    </div>
  );
}
