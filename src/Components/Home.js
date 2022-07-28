import React from "react";
import Banner from "../elements/banner_final.png";
import Product from "./Product.js";
import Apple from "../elements/apple.jpg";
import Stickers from "../elements/stickers.jpg";
import Watch from "../elements/watch.jpg";
import Guitar from "../elements/guitar.jpg";
import Headphone from "../elements/headphone.jpeg";
import Led from "../elements/led.jpg";
import Oneplus from "../elements/oneplus.jpg";
import Perfume from "../elements/perfume.jpg";
import Nike from "../elements/nike.jpg";
import Tshirt from "../elements/tshirt.jpg";
import Rog from "../elements/rog.jpg";
import Dress from "../elements/dress.jpg";
import Samsung from "../elements/samsung1.jpg";
import Mi from "../elements/mi.jpg";
import Oled from "../elements/4k.jpg";

import "./Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <a
            href="https://www.primevideo.com/?ref_=dvm_pds_amz_in_as_s_g_176"
            target="_blank"
            rel="noreferrer"
          >
            <img className="home__image" src={Banner} alt="logo"></img>
          </a>

          <div className=" home__row row1">
            <Product
              id="1"
              title="Asus Rog Strix Gaming Laptop"
              price={1200}
              image={Rog}
              rating={4}
            />

            <Product
              id="2"
              title="OnePlus Watch"
              price={100}
              image={Oneplus}
              rating={3}
            />

            <Product
              id="3"
              title="Nike Mag Self-lacing Shoes"
              price={6000}
              image={Nike}
              rating={5}
            />

            <Product
              id="4"
              title="Anime Printed T-shirt"
              price={15}
              image={Tshirt}
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
              id="5"
              title=" Asus Gaming HeadPhones 0ms latency"
              price={50}
              image={Headphone}
              rating={4}
            />

            <Product
              id="6"
              title="Conner Ives Gown"
              price={1000}
              image={Dress}
              rating={3}
            />

            <Product
              id="7"
              title="Henrix 38C Dual Truss Rod Guitar"
              price={65}
              image={Guitar}
              rating={4}
            />

            <Product
              id="8"
              title="Nothing Phone 1"
              price={1200}
              image="https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/p2uhlkcbkliwuoao_1656586334.jpeg"
              rating={5}
            />
          </div>

          <div className="home__row">
            <Product
              id="9"
              title="IPhone 13 512GB Storage Pearl Red"
              price={1500}
              image={Apple}
              rating={5}
            />
            <Product
              id="10"
              title="Apple Watch Series S"
              price={700}
              image={Watch}
              rating={5}
            />
            <Product
              id="11"
              title="007 Channel Ladies Perfume"
              price={200}
              image={Perfume}
              rating={4}
            />
            <Product
              id="12"
              title="Anime Stickers Pack of 100"
              price={10}
              image={Stickers}
              rating={4}
            />
          </div>

          <div className="home__row">
            <Product
              id="13"
              title="Samsung Odyssey Android TV"
              price={900}
              image={Samsung}
              rating={3}
            />

            <Product
              id="14"
              title="Sony Qled LED Tv Vivid Picture Quality"
              price={1300}
              image={Led}
              rating={5}
            />

            <Product
              id="15"
              title="MI Qled Round Display 4k Quality"
              price={800}
              image={Mi}
              rating={4}
            />

            <Product
              id="16"
              title="Sony 8k Oled TV with 4GB RAM"
              price={1250}
              image={Oled}
              rating={5}
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <p className="footer__p">
          All Rights Are Reserved to 'Saksham Srivastava'
        </p>
      </div>
    </>
  );
}

export default Home;
