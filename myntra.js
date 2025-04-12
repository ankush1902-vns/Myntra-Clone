let m = document.querySelector(".men") ;
let w = document.querySelector(".women") ;
let k1 = document.querySelector(".kids") ;
let h = document.querySelector(".home") ;
let b = document.querySelector(".beauty") ;
let g = document.querySelector(".genz") ;
let d1 = document.querySelector(".dark") ;
let i4 = document.createElement("img") ;
let m1 = document.querySelector("#men") ;
let header = document.querySelector("header") ;
header.appendChild(i4) ;
i4.style.position = "absolute" ;
i4.style.top = "128px" ;
i4.style.left = "500px" ;
i4.style.height = "200px" ;
i4.style.width = "600px" ;
i4.style.visibility = "hidden" ;
i4.style.backgroundColor = "black";
i4.src = "https://constant.myntassets.com/web/assets/img/sudio-nav-banner.png" ;
m.addEventListener("mouseover" , () =>
{
  m1.style.visibility = "visible" ;
})
w.addEventListener("mouseover" , () =>
    {
        m1.style.visibility = "visible" ;
    })
    h.addEventListener("mouseover" , () =>
        {
            m1.style.visibility = "visible" ;
        })
    b.addEventListener("mouseover" , () =>
            {
                m1.style.visibility = "visible" ;
            })
    g.addEventListener("mouseover" , () =>
                {
                    m1.style.visibility = "visible" ;
                })
                k1.addEventListener("mouseover" , () =>
                    {
                        m1.style.visibility = "visible" ;
                    })
m.addEventListener("mouseout" , () =>
{
    m1.style.visibility = "hidden" ;
})
w.addEventListener("mouseout" , () =>
    {
        m1.style.visibility = "hidden" ;
    })
    h.addEventListener("mouseout" , () =>
        {
            m1.style.visibility = "hidden" ;
        })
        b.addEventListener("mouseout" , () =>
            {
                m1.style.visibility = "hidden" ;
            })
            g.addEventListener("mouseout" , () =>
                {
                    m1.style.visibility = "hidden" ;
                })
                k1.addEventListener("mouseout" , () =>
                    {
                        m1.style.visibility = "hidden" ;
                    })
d1.addEventListener("mouseover" , () =>
{
   i4.style.visibility = "visible" ;
})
d1.addEventListener("mouseout" , () =>
{
    i4.style.visibility = "hidden" ;
})
let p = document.querySelector("#poster") ;
let p1 = document.querySelector("#photo") ;
let count = 0 ;
function f1()
{
    if(count == 0)
    {
         p1.src = "https://static.thearcweb.com/images/PROD/PROD-3ef11630-cd93-44f7-a78d-1850eb8f3fce.jpg" ;
         count = 1 ;
    }
    else if(count == 1)
    {
        p1.src = "https://www.infidigit.com/wp-content/uploads/2023/05/MYNTRA.png" ;
        count = 2 ;
    }
    else if(count == 2)
    {
        p1.src = "https://i.ytimg.com/vi/SHE7sUMi4k0/maxresdefault.jpg" ;
        count = 3 ;
    }
    else 
    {
        p1.src = "https://insights.upgrowth.in/wp-content/uploads/2024/08/Myntra.jpg" ;
        count = 0
    }
}
let all = [
    {
        images : "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/24578386/2023/8/31/ea9ba14d-6afb-4375-8bbd-6104edaddb6e1693479180955-Mast--Harbour-Men-Shirts-7431693479180490-1.jpg" ,
        name : "trending shirt",
        price : 1400 ,
        p1 : 600 
    },
    {
        images : "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/21345860/2023/1/6/43f7afa4-25ca-462e-a6c1-0f9c60b6a6601672989176345-HERENOW-Men-Shirts-9891672989175767-1.jpg" ,
        name : "Fashionable Shirt",
        price : 1200 ,
        p1 : 760
    },
    {
        images : "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10410396/2019/9/4/33f865d9-77e5-478c-88ba-f28c0f0fa2211567579282598-HERENOW-Men-Shirts-7531567579282088-1.jpg" ,
        name : "Timed Shirt",
        price : 1600 ,
        p1 : 800
    },
    {
        images : "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/14098622/2021/6/14/b8c3a54c-eb73-4967-b9cd-b95e826030361623645901058-HERENOW-Men-Blue--Maroon-Slim-Fit-Checked-Casual-Shirt-74916-1.jpg" ,
        name : "formaly shirt",
        price : 2400 ,
        p1 : 1400
    },
    {
        images : "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/30867871/2024/10/4/29247e4a-911e-4aa0-a54b-e964dd597ad01728049534112-Red-Tape-Women-Mesh-Walking-Non-Marking-Shoes-48917280495337-1.jpg" ,
        name : "New shoes",
        price : 2600 ,
        p1 : 1400
    },
    {
        images : "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/24627430/2023/8/24/4a0b590d-8c09-4798-846f-f9ea45d409b91692850222548MastHarbourMenWhiteColourblockedPUSneakers1.jpg" ,
        name : "Sketchers",
        price : 4800 ,
        p1 : 2600
    },
    {
        images : "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/29471984/2024/9/26/7327d45a-15f8-465a-9076-c8903a7660411727354885477-Red-Tape-Men-Walking-Shoes-4601727354885144-1.jpg" ,
        name : "full shoe" ,
        price : 2600 ,
        p1 : 600 
    },
    {
        images : "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/17/4j0E1s3p_55f7c70b17db41bd9884527778e6cd33.jpg" ,
        name : "Women shirt",
        price : 1400 ,
        p1 : 600 
    },
    { 
        images : "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/17/njmtB7Aq_4426ddcaa24e4e4ead18690aad173890.jpg" ,
        name : "women full",
        price : 1400 ,
        p1 : 600 
    },
    {
        images : "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/13530528/2022/4/20/bf1a2b0a-0923-4a3a-94a6-e675dcf4baec1650435702546-Roadster-Women-Shirts-6521650435701955-1.jpg" ,
        name : "full shirt",
        price : 2400 ,
        p1 : 800
    },
    {
        images : "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/21334304/2023/10/4/10d96212-4d28-447f-8ab7-cd15b91e503f1696406650695-anayna-Red-Floral-Ethnic-A-Line-Cotton-Midi-Ethnic-Dress-764-6.jpg" ,
        name : " women drees" ,
        price : 1800 ,
        p1 : 1600
    },
    {
        images : "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/25013298/2023/9/16/8439f324-e1a7-408e-9882-acb61eb504261694835981443EthnicDresses1.jpg" ,
        name : "full print" ,
        price : 4600 ,
        p1 : 3400
    },
    {
        images : "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/29582264/2024/5/17/36537350-8e17-4e15-924b-59215df5c8c61715918594907EthnicDresses1.jpg" ,
        name : "cover dress" ,
        price : 6000,
        p1 : 1200
    },
    {
        images : "https://www.mivi.in/cdn/shop/files/Earbuds_-_Desktop.png?v=1709210322&width=1500" ,
        name : "oppo earpod" ,
        price : 1800 ,
        p1 : 1600
    },
    {
        images : "https://m.media-amazon.com/images/I/61kGGxJsnaL._AC_UF1000,1000_QL80_.jpg",
        name : "body spray" ,
        price : 2600 ,
        p1 : 1800
    }
] ;
let brand = [
    {
        images : "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2024/AUGUST/26/o3koKWHF_97d3912bdd2a4e2fa29356d5aaf6c21d.jpg" ,
        name : "Stylish Fits" ,
        price : 4000 ,
        discount : "20%"
    },
    {
        images : "https://www.chicwish.com/media/catalog/product/cache/513467b41b15fb50b6e4f5b80078ef65/2/5/250219mm.31.jpg" ,
        name : "regular wearing" ,
        price : 6400 ,
        discount : "40%"
    },
    {
        images : "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15557590/2022/2/18/a88d594a-0184-4042-baad-01c2d7874cec1645166286136-Roadster-Men-Shirts-4091645166285596-1.jpg" ,
        name : "big shirt" ,
        price : 2000 ,
        discount : "10%"
    },
    {
        images : "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/28727816/2024/4/6/6e6863e1-ead6-4288-85f3-fbb49ee21f561712385457694ManiacMenV-NeckPocketsT-shirt1.jpg" ,
        name : "over sized" ,
        price : 8000 ,
        discount : "60%"
    },
    {
        images : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSilIYdKcKefouXihpfPxU2D4qkkZM0dTZeDw&s" ,
        name : "nike skechers" ,
        price : 2000 ,
        discount : "40%"
    },
    {
        images : "https://choicemandu.com/image/cache/catalog/goldstar-new/G10_208_BlackRed-1000x1000.jpg" ,
        name : "adidas over" ,
        price : 6000 ,
        discount : "60%"
    },
    {
        images : "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/25872412/2024/3/22/4049de7c-3d73-47a3-87d5-539c4f5b3aef1711087556469-Being-Human-Men-Track-Pants-9651711087555981-1.jpg" ,
        name : "Levis Fullpants" ,
        price : 8000 ,
        discount : "20%"
    },
    {
        images : "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2024/AUGUST/31/7VUbfmp3_67d5d1e5a0d347dab025a39c97d66965.jpg" ,
        name : "Oversize Pants" ,
        price : 6000 , 
        discount : "60%",
    },
    {
        images : "https://assets.ajio.com/medias/sys_master/root/20231027/pq55/653ae6bdafa4cf41f5633c3f/-1117Wx1400H-466750177-peach-MODEL.jpg" ,
        name : "zara bag" ,
        price : 4000 ,
        discount : "80%"
    },
    {
        images : "https://www.lavieworld.com/cdn/shop/products/HJGE400019L4_0_0f7b9549-c13e-4f2e-927f-6fef1f91b370.jpg?v=1736273634" ,
        name : "Gucchi Purse" ,
        price : 4600 ,
        discount : "60%" 
    },
]
      let collection = document.querySelector(".collection") ;
      let innerHTML =  " " ;
      let innerHTML3 = " " ;
      let innerHTML4 = " " ;
      let c = 0 ;
      function f4()
      {
      if( c == 0)
      {
      for(let i1 = 0 ; i1 < 5 ; i1++)
      {
        innerHtml3 = " " ;
      innerHTML += `    <div>
             <img src = "${all[i1].images}">
             <h2> ${all[i1].name} </h2>
             <h3> Starting <a> ${all[i1].price} </a> ${all[i1].p1} </h3>
        </div>` ;
      }
      collection.innerHTML = innerHTML ;
      c = 1 ;
    }
    else if(c == 1)
    {
        innerHTML = " " ;
        for(let i1 = 5 ; i1 < 10 ; i1++)
            {
            innerHTML3 += `    <div>
                   <img src = "${all[i1].images}">
                   <h2> ${all[i1].name} </h2>
                   <h3> Starting <a> ${all[i1].price} </a> ${all[i1].p1} </h3>
              </div>` ;
            }
             c = 2 ;
             collection.innerHTML = innerHTML3 ;
    }
    else 
    {
        innerHTML = " " ;
        innerHTML3 = " " ;
        for(let i1 = 10 ; i1 < all.length ; i1++)
            {
            innerHTML4 += `    <div>
                   <img src = "${all[i1].images}">
                   <h2> ${all[i1].name} </h2>
                   <h3> Starting <a> ${all[i1].price} </a> ${all[i1].p1} </h3>
              </div>` ;
            }
            c = 0 ;
            collection.innerHTML = innerHTML4 ;
    }
}
           let body = document.querySelector("body") ;
         let global = document.querySelector(".brand") ;
    let innerHTML2 = " ";
    let innerHTML7 = " " ;

        for(let i3 = 0 ; i3 < 5 ; i3++)
       {
             innerHTML7 += `<div>
             <img src = "${brand[i3].images}">
             <h2> ${brand[i3].name} </h2>
             <h3> Starting <a> ${brand[i3].price} </a> ${brand[i3].discount} </h3>
             </div>`
       }
       global.innerHTML = innerHTML7 ;
       let k = 1 ;
function f7()
    { 
        if( k == 1)
        {
        for(let i1 = 5 ; i1 < 10 ; i1++)
       {
        innerHTML2 = " " ;
             innerHTML7 += `<div>
             <img src = "${brand[i1].images}">
             <h2> ${brand[i1].name} </h2>
             <h3> Starting <a> ${brand[i1].price} </a> ${brand[i1].discount} </h3>
             </div>`
       }
            k = 0 ;
            global.innerHTML = innerHTML7 ;
                 
    }
       else 
       {
        for(let i1 = 0 ; i1 < 5 ; i1++)
            {
                  innerHTML7 = " " ;
                  innerHTML2 += `<div>
                  <img src = "${brand[i1].images}">
                  <h2> ${brand[i1].name} </h2>
                  <h3> Starting <a> ${brand[i1].price} </a> ${brand[i1].discount} </h3>
                  </div>`
            }
            global.innerHTML = innerHTML2 ;
            k = 1 ;
       }
}
  global.innerHTML = innerHTML2 ;
  let special = [
    {
        images : "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/K90240s.jpg?im=Resize,width=750" 
    } ,
    {
        images : "https://etimg.etb2bimg.com/photo/70712962.cms" 
    } ,
    {
        images : "https://mir-s3-cdn-cf.behance.net/projects/404/3a2bb7186283759.Y3JvcCw4MDgsNjMyLDAsMA.png" 
    },
    {
        images : "https://m.media-amazon.com/images/I/31jFH996IIL.jpg" 
    } ,
    {
        images : "https://www.cdnlogo.com/logos/n/59/nivea.svg" 
    } ,
    {
        images : "https://etimg.etb2bimg.com/thumb/msid-53739779,width-1200,height-900,resizemode-4/.jpg" 
    },
  ] ;
