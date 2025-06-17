import { HeartIcon, ShoppingBagIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

// Navigation items data
const navItems = [
  { text: "All Products", href: "#" },
  { text: "Serum", href: "#" },
  { text: "Sunscreen", href: "#" },
  { text: "Bundle", href: "#" },
];

// Why our products data
const productFeatures = [
  {
    id: "01",
    title: "Bio Ingredients",
    description:
      "Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.",
  },
  {
    id: "02",
    title: "Everything Natural",
    description:
      "Pure ingredients for pure skin. The Perfect solution for your skin care needs.",
  },
  {
    id: "03",
    title: "All Handmade",
    description:
      "Made with love and care. Just for you. Give your skin the tender loving care it deserves.",
  },
];

// Product data
const products = [
  {
    id: 1,
    name: "ALYA SKIN CLEANSER.",
    price: "FROM $29.99",
    image: "/alya_skin.png",
  },
  {
    id: 2,
    name: "RITUAL OF SAKURA.",
    price: "FROM $27.99",
    image: "/rituals.png",
  },
  {
    id: 3,
    name: "THE BODY LOTION.",
    price: "FROM $19.99",
    image: "/body_lotion.png",
  },
];

// New arrivals data
const newArrivals = [
  {
    id: 1,
    name: "ALYA SKIN CLEANSER.",
    price: "FROM $29.99",
    image: "/alya_skin.png",
  },
  {
    id: 2,
    name: "RITUAL OF SAKURA.",
    price: "FROM $27.99",
    image: "/rituals.png",
    darkButton: true,
  },
  {
    id: 3,
    name: "THE BODY LOTION.",
    price: "FROM $19.99",
    image: "/body_lotion.png",
  },
];

// FAQ data
const faqItems = [
  {
    question: "Are your products cruelty-free?",
    answer:
      "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
    isOpen: true,
  },
  {
    question: "Are your products safe for sensitive skin?",
    answer: "",
  },
  {
    question: "What's your return policy?",
    answer: "",
  },
  {
    question: "Do you ship internationally?",
    answer: "",
  },
  {
    question: "How do i choose the right product?",
    answer: "",
  },
];

// Product filters
const productFilters = [
  { name: "NEW ARRIVAL", active: true },
  { name: "CLEANSING", active: false },
  { name: "ACNE FIGHTER", active: false },
  { name: "ANTI AGGING", active: false },
];

// Footer links
const footerLinks = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "Youtube", href: "#" },
];

const footerPolicies = [
  { name: "Terms of Service", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Cookies Policy", href: "#" },
];

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-[#eff5e1] flex flex-row justify-center w-full">
      <div className="bg-[#eff5e1] overflow-hidden w-full max-w-[1920px] relative">
        {/* Header/Navigation */}
        <header className="flex items-center justify-between px-[100px] py-[49px]">
          <h1 className="font-extrabold text-[#2d3b36] text-3xl [font-family:'Inter',Helvetica] tracking-[0]">
            SKINCARE
          </h1>

          <nav className="flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-xl tracking-[-1.00px]"
              >
                {item.text}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#f8fee5] rounded-[20px] flex items-center justify-center">
                <ShoppingBagIcon className="w-5 h-5" />
              </div>
              <span className="ml-2 [font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-xl tracking-[-0.20px]">
                cart (1)
              </span>
            </div>

            <div className="w-10 h-10 bg-[#f8fee5] rounded-[20px] flex items-center justify-center">
              <HeartIcon className="w-5 h-5" />
            </div>

            <div className="w-10 h-10 bg-[#f8fee5] rounded-[20px] flex items-center justify-center">
              <div className="relative w-5 h-5 bg-[url(/user.png)] bg-[100%_100%]" />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative px-[100px] mt-[50px]">
          <div className="flex flex-row">
            <div className="flex flex-col max-w-[400px]">
              <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#2d3b36] text-[100px] tracking-[-3.00px] leading-[90px] mt-[67px]">
                GLOW
                <br />
                NATUR-ALLY
              </h2>
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-xl tracking-[0] leading-normal mt-[50px]">
                Transform your skincare routine with premium products that
                restore, protect, and enhance your nautural glow every day.
              </p>
              <Button className="bg-[#2d3b36] text-[#eff5e1] rounded-[100px] w-[180px] h-[60px] mt-[50px] text-xl">
                Shop Now
              </Button>
            </div>

            <div className="relative flex-1">
              <img
                className="w-[223px] h-[220px] rounded-[20px] absolute right-0"
                alt="Skin care beauty"
                src="/plum.png"
              />
            </div>
          </div>

          <div className="relative mt-[100px]">
            <div className="text-[#2d3b36] text-[370px] -ml-[80px] font-extrabold [font-family:'Inter',Helvetica] tracking-[55] leading-normal whitespace-nowrap opacity-100">
              SKINCARE
            </div>

            <div className="absolute top-[-266px] left-[600px]">
              <img
                className="w-[610px] h-[676px] object-cover rounded-[25px]"
                alt="Skincare product"
                src="/avacado.png"
              />

              <div className="relative">
                <div className="absolute bottom-[40px] left-[67px] bg-[#eff5e1] rounded-[200px] py-[30px] px-[40px] flex items-center">
                  <div className="w-[100px] h-[100px] rounded-[50px] border border-dashed border-[#2d3b36] flex items-center justify-center mr-[37px]">
                    <img
                      className="w-25 h-25 rounded-[50px]"
                      alt="Skin care beauty"
                      src="/plum.png"
                    />
                  </div>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-xl tracking-[0] leading-normal max-w-[304px]">
                    While giving you an invigorating cleansing experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="bg-[#fefff4] mt-[50px] pt-[99px] px-[100px]">
          {/* About Section */}
          <section className="mb-[100px]">
            <h2 className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-6xl tracking-[-1.20px] leading-normal mb-[30px]">
              YOUR SKIN DESERVES <br />
              THE BEST CARE.
            </h2>

            <p className="[font-family:'Inter',Helvetica] font-normal text-[#525349] text-lg tracking-[-0.36px] leading-6 mb-[50px]">
              Discover a curated collection of skincare products designed to
              rejuvenate,
              <br />
              protect, and pamper your skin. Explore our rage crafted with love
              backed
              <br />
              by science, and inspired by nature.
            </p>

            <div className="text-[53px] [font-family:'Inter',Helvetica] font-normal tracking-[-1.86px] leading-[78px] mb-[50px]">
              <p className="text-[#2d3b36] tracking-[-0.98px]">
                Experience the ultimate in skincare with our expertly formulated
                products,
                <br />
                crafted to nourish, protect, and rejuvenate your skin. Combining
                the finest
                <br />
                natural ingredients with{" "}
                <span className="text-[#2d3b364c]">
                  advanced science, our collection ensures every
                  <br />
                  skin type can achieve a radiant, healthy glow. Embrace your
                  beauty with
                  <br />
                  confidence every day. Experience the ultimate in skincare with
                  our <br />
                  expertly formulated products, crafted to nourish, protect, and
                  rejuvenate
                  <br />
                  your skin.
                </span>
              </p>
            </div>

            <Badge className="bg-[#fefff4] text-[#2d3b36] rounded-[100px] border border-solid border-[#2d3b36] px-[58px] py-5 text-xl font-normal">
              <div className="w-5 h-5 rounded-[10px] bg-[#2d3b36] mr-5"></div>
              Why Our Products
            </Badge>

            <div className="flex mt-[50px]">
              <div className="w-1/2">
                {productFeatures.map((feature, index) => (
                  <div key={index} className="mb-[50px]">
                    <div className="flex items-center mb-[20px]">
                      <span className="[background:linear-gradient(180deg,rgba(41,51,48,1)_0%,rgba(254,255,244,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-normal text-6xl tracking-[-1.20px] mr-[30px]">
                        {feature.id}
                      </span>
                      <h3 className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-6xl tracking-[-1.20px]">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#525349] text-lg tracking-[-0.36px] leading-6 ml-[113px]">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="w-1/2 relative">
                <div className="relative h-[1081px] overflow-hidden rounded-lg">
                  <img
                    className="w-full h-full object-cover"
                    alt="Skincare model"
                    src="/Jun 15, 2025, 11_52_20 PM 2.png"
                  />
                  <div className="absolute bottom-[81px] left-[234px] flex items-center bg-[#eff5e1] rounded-[200px] px-[30px] py-[20px]">
                    <div className="relative">
                      <div className="w-20 h-20 bg-[#2d3b36] rounded-[200px] flex items-center justify-center">
                        <div className="w-[90px] h-[90px] absolute top-[-5px] left-[-5px] rounded-[50px] border border-dashed border-[#2d3b36]"></div>
                        <img
                          className="w-[50px] h-[50px]"
                          alt="Award"
                          src="/award.png"
                        />
                      </div>
                    </div>
                    <div className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-xl tracking-[0] leading-normal ml-[20px]">
                      Best Skin Care Product
                      <br />
                      Award Wining
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-[64px] right-[20px] flex space-x-4">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-xl tracking-[-0.40px]">
                    SINCE 2001
                  </span>
                  <span className="ml-auto [font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-xl tracking-[-0.40px]">
                    LEARN MORE
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Best Selling Products Section */}
          <section className="mb-[100px]">
            <div className="text-center mb-[50px]">
              <h2 className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-6xl text-center tracking-[-1.20px] leading-normal">
                Skincare That Brings Out
                <br />
                Your Natural Radiance
              </h2>

              <Badge className="bg-[#fefff4] text-[#2d3b36] rounded-[100px] border border-solid border-[#2d3b36] px-[58px] py-5 text-xl font-normal mt-[30px]">
                <div className="w-5 h-5 rounded-[10px] bg-[#2d3b36] mr-5"></div>
                Best Selling Products
              </Badge>

              <div className="flex justify-end space-x-4 mt-[20px]">
                <div className="w-20 h-20 rounded-[40px] border border-solid border-[#2d3b36] flex items-center justify-center">
                  <img
                    className="w-[41px] h-[15px]"
                    alt="Arrow"
                    src="/arrow-2.png"
                  />
                </div>
                <div className="w-20 h-20 rounded-[40px] bg-[#2d3b36] flex items-center justify-center">
                  <img
                    className="w-[42px] h-[15px]"
                    alt="Arrow"
                    src="/arrow-1.png"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-[25px]">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="w-full h-[770px] rounded-none border-none overflow-hidden relative"
                >
                  <CardContent className="p-0 relative h-full">
                    <img
                      className="w-full h-full object-cover"
                      alt={product.name}
                      src={product.image}
                    />
                    <div className="absolute bottom-5 left-5 w-[calc(100%-40px)] h-[100px] bg-[#fefff4] rounded-[10px] flex items-center justify-between px-5">
                      <div>
                        <h3 className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-xl tracking-[-1.00px]">
                          {product.name}
                        </h3>
                        <p className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b3680] text-base tracking-[-0.80px] mt-[10px]">
                          {product.price}
                        </p>
                      </div>
                      <div className="w-20 h-20 bg-[#2d3b361a] rounded-[10px] flex items-center justify-center">
                        <img
                          className="w-[30px] h-[30px]"
                          alt="Cart"
                          src="cart.png"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Full Width Image Section */}
          <section className="relative mb-[100px] -mx-[100px]">
            <div className="relative">
              <img
                className="w-full h-[1146px] object-cover"
                alt="Model"
                src="/leaf_model.png"
              />
              <div className="absolute bottom-0 left-0 w-full h-[400px] rounded-[30px] [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(41,51,48,1)_100%)]">
                <div className="absolute bottom-[130px] w-full text-center">
                  <h2 className="[font-family:'Inter',Helvetica] font-normal text-[#fefff4] text-[80px] text-center tracking-[-1.60px] leading-normal">
                    Feel Beautiful Inside and Out
                    <br />
                    with Every Product.
                  </h2>
                  <Button className="bg-[#fefff4] text-[#2d3b36] rounded-[100px] w-[180px] h-[60px] mt-[40px] text-xl">
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* New Arrivals Section */}
          <section className="mb-[100px]">
            <h2 className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-6xl text-center tracking-[-1.20px] leading-normal mb-[50px]">
              Feel Beautiful Inside and Out
              <br />
              with Every Product.
            </h2>

            <div className="flex justify-center space-x-5 mb-[80px]">
              {productFilters.map((filter, index) => (
                <Button
                  key={index}
                  variant={filter.active ? "default" : "outline"}
                  className={`rounded-[100px] px-[30px] py-5 text-xl ${
                    filter.active
                      ? "bg-[#2d3b36] text-[#fefff4]"
                      : "bg-[#fefff4] text-[#2d3b36] border-[#2d3b36]"
                  }`}
                >
                  {filter.name}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-[25px]">
              {newArrivals.map((product) => (
                <Card
                  key={product.id}
                  className="w-full h-[770px] rounded-none border-none overflow-hidden relative"
                >
                  <CardContent className="p-0 relative h-full">
                    <img
                      className="w-full h-full object-cover"
                      alt={product.name}
                      src={product.image}
                    />
                    <div className="absolute bottom-5 left-5 w-[calc(100%-40px)] h-[100px] bg-[#fefff4] rounded-[10px] flex items-center justify-between px-5">
                      <div>
                        <h3 className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-xl tracking-[-1.00px]">
                          {product.name}
                        </h3>
                        <p className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b3680] text-sm tracking-[-0.70px] mt-[10px]">
                          {product.price}
                        </p>
                      </div>
                      <div
                        className={`w-20 h-20 ${product.darkButton ? "bg-[#2d3b36]" : "bg-[#2d3b361a]"} rounded-[10px] flex items-center justify-center`}
                      >
                        <img
                          className="w-[30px] h-[30px]"
                          alt="Cart"
                          src="/white_cart.png"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="flex mb-[100px]">
            <div className="w-1/2 relative">
              <div className="relative h-[900px] overflow-hidden rounded-lg">
                <img
                  className="w-full h-full object-cover"
                  alt="FAQ model"
                  src="/body_lotion.png"
                />
                <div className="absolute bottom-[39px] left-[225px] flex items-center bg-[#eff5e1] rounded-[200px] px-[30px] py-[20px]">
                  <div className="relative">
                    <div className="w-20 h-20 bg-[#2d3b36] rounded-[200px] flex items-center justify-center">
                      <div className="w-[90px] h-[90px] absolute top-[-5px] left-[-5px] rounded-[50px] border border-dashed border-[#2d3b36]"></div>
                      <div className="w-10 h-10 bg-[url(/headphone.png)] bg-[100%_100%]"></div>
                    </div>
                  </div>
                  <div className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-xl tracking-[0] leading-normal ml-[20px]">
                    24/7 We're Here
                    <br />
                    to Help You
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/2 pl-[50px]">
              <h2 className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-6xl tracking-[-1.20px] leading-normal mb-[50px]">
                Answers to Your
                <br />
                Skincare Questions, All
                <br />
                in One Place.
              </h2>

              <Badge className="bg-[#fefff4] text-[#2d3b36] rounded-[100px] border border-solid border-[#2d3b36] px-[58px] py-5 text-xl font-normal mb-[50px]">
                <div className="w-5 h-5 rounded-[10px] bg-[#2d3b36] mr-5"></div>
                Frequently Asked Question
              </Badge>

              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-solid border-[#2d3b36] rounded-[5px] mb-[10px] overflow-hidden"
                  >
                    <AccordionTrigger className="px-[29px] py-[25px] hover:no-underline">
                      <span className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-xl tracking-[0] leading-normal">
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    {item.answer && (
                      <AccordionContent className="px-[29px] pb-[25px]">
                        <p className="[font-family:'Inter',Helvetica] font-normal text-[#525349] text-sm tracking-[-0.70px] leading-normal">
                          {item.answer}
                        </p>
                      </AccordionContent>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-[#2d3b36] text-[#e7e8e0] py-[199px] px-[100px] relative overflow-hidden">
          <div className="flex justify-between mb-[200px]">
            <div>
              <h2 className="[font-family:'Inter',Helvetica] font-normal text-6xl tracking-[-1.20px] leading-normal">
                Join The Skincare
                <br />
                Community Now.
              </h2>
            </div>

            <div>
              <h3 className="[font-family:'Inter',Helvetica] font-normal text-3xl tracking-[-0.60px] leading-normal mb-[10px]">
                Get in Touch
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-normal text-6xl tracking-[-1.20px] leading-normal">
                contact.skincare.com
              </p>
            </div>
          </div>

          <div className="flex justify-between mb-[50px]">
            <div className="flex space-x-8">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="[font-family:'Inter',Helvetica] font-normal text-[#eff5e1] text-xl tracking-[-1.00px]"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex space-x-8">
              {footerPolicies.map((policy, index) => (
                <a
                  key={index}
                  href={policy.href}
                  className="[font-family:'Inter',Helvetica] font-normal text-[#eff5e1] text-xl text-right tracking-[-1.00px]"
                >
                  {policy.name}
                </a>
              ))}
            </div>
          </div>

          <div className="absolute bottom-[-305px] left-[-115px] [font-family:'Inter',Helvetica] font-bold text-[#3d4b4680] text-[420px] tracking-[0] leading-normal whitespace-nowrap">
            SKINCARE
          </div>
        </footer>
      </div>
    </div>
  );
};