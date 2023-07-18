import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Card from "./components/card";
import Footer from "./components/footer";
import Kyiv from "./img/Rectangle 77.png";
import Berlin from "./img/Rectangle 84.png";
import Norway from "./img/Rectangle 78.png";
import ImgLocation from "./img/placeholder.png";

export default function App() {
  return (
      <div>
        <Header />
          <div className='card-container'>
              <Card
              name = "Maidan Nezalezhnosti"
              date = "27 May, 2021 - 8 Jun, 2021"
              description = "Maidan Nezalezhnosti, also known as Independence Square, is a central square located in the heart of Kyiv, the capital city of Ukraine. The square holds great historical and cultural significance for the country."
              img2 = {ImgLocation}
              img = {Kyiv}
              link = "https://www.google.com.ua/maps/place/Independence+Square,+Kyiv,+02000/@50.4505318,30.5229899,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipO5lmbQXS8HfeOWvzjakgk-8HRG-n6kp72Lg8fL!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipO5lmbQXS8HfeOWvzjakgk-8HRG-n6kp72Lg8fL%3Dw114-h86-k-no!7i4608!8i3456!4m11!1m2!2m1!1sgoogle+maps+maidan+nezalezhnosti!3m7!1s0x40d4ce50f8b6e3c3:0xb528dc4d6dadc4f8!8m2!3d50.4505318!4d30.5229899!10e5!15sCiBnb29nbGUgbWFwcyBtYWlkYW4gbmV6YWxlemhub3N0aSIDiAEBWhYiFG1haWRhbiBuZXphbGV6aG5vc3RpkgELdG93bl9zcXVhcmXgAQA!16zL20vMDVic3Mx?entry=ttu"
              location = "Ukraine"/>

              <Card
                  name = "The Brandenburg Gate"
                  date = "27 May, 2021 - 8 Jun, 2021"
                  description = "The Brandenburg Gate is a historic monument located in Berlin, Germany. It is one of the most famous landmarks in the city and holds significant historical and cultural importance."
                  img = {Berlin}
                  img2 = {ImgLocation}
                  link = "https://www.google.com.ua/maps/place/Brandenburg+Gate/@52.5162778,13.3751292,17z/data=!3m2!4b1!5s0x47a851c6f6399a69:0xcda158542550640e!4m6!3m5!1s0x47a851c655f20989:0x26bbfb4e84674c63!8m2!3d52.5162746!4d13.3777041!16zL20vMDE0a2Y4?entry=ttu"
                  location = "Germany"
              />

              <Card
                  name = "Geirangerfjord"
                  date = "01 Oct, 2021 - 18 Nov, 2021"
                  description = "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
                  img = {Norway}
                  img2 = {ImgLocation}
                  link = "https://www.google.com.ua/maps/place/Geirangerfjord/@62.1047779,6.7455934,10z/data=!3m1!4b1!4m6!3m5!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817!16zL20vMDZ4eXFi?entry=ttu"
                  location = "NORWAY"
              />
          </div>
          <Footer />
      </div>
  );
}


