var helpers=function(r){"use strict";return r.getProductMainImageUrl=function({product:r}={}){return r&&r.cover&&r.cover.media&&r.cover.media.url},r.getProductMediaGallery=function({product:r}={}){return r&&r.media?r.media.map(r=>{const t=r.media&&r.media.thumbnails&&r.media.thumbnails.find(r=>"400"==r.width),e=r.media&&r.media.thumbnails&&r.media.thumbnails.find(r=>"800"==r.width),i=r.media&&r.media.thumbnails&&r.media.thumbnails.find(r=>"1920"==r.width);return{small:{url:t?t.url:""},normal:{url:e?e.url:""},big:{url:i?i.url:""}}}):[]},r.getProductOption=function({product:r,attribute:t}={}){return r&&r.options&&r.options.find(r=>r.group&&r.group.name===t)},r.getProductOptions=function({product:r,attribute:t}={}){if(!r||!r.children||!t)return[];const e=new Map;return r.children.forEach(r=>{if(r&&r.options&&r.options.length)for(let i of r.options)i.group&&i.group.name===t&&(e.has(i.id)||e.set(i.id,{label:i.name,value:r.id,[t]:i.name}))}),Array.from(e.values())},r.getProductProperties=function({product:r}={}){return r&&r.properties?r.properties.map(r=>({name:r.group&&r.group.name||"",value:r.name})):[]},r.getProductRegularPrice=function({product:r}={}){return r&&r.price?r.price[0].gross:0},r.getProductReviews=function({product:r}={}){return r&&r.productReviews?r.productReviews.map(({id:r,externalUser:t,customerId:e,createdAt:i,content:n,points:u})=>({id:r,author:t||e,date:i,message:n,rating:u})):[]},r.isProductSimple=function({product:r}={}){return!!r&&!!r.parentId},r}({});