import r from"./ContentSlot.47059ab8.js";import{a as d,o as a,e as m,f as t,h as i,j as n,i as c,c as u,x as _,t as p,y as g,m as f}from"./entry.cc2dbc09.js";/* empty css                 */const h={class:"hero"},y={class:"layout"},C={class:"content"},v={class:"title"},x={class:"description"},H=d({__name:"Hero",props:{image:{type:String,default:null},imageAlt:{type:String,default:"Hero Image"},imagePosition:{type:String,default:"right"}},setup(e){return(s,N)=>{const o=r,l=g;return a(),m("section",h,[t("div",y,[t("div",C,[t("div",v,[i(o,{use:s.$slots.title,unwrap:"p"},{default:n(()=>[c(" Hero title ")]),_:1},8,["use"])]),t("div",x,[i(o,{use:s.$slots.description,unwrap:"p"},{default:n(()=>[c(" Hero description ")]),_:1},8,["use"])])]),e.image?(a(),u(l,{key:0,class:_(e.imagePosition),src:e.image,alt:e.imageAlt,width:16,height:9},null,8,["class","src","alt"])):p("",!0)])])}}}),B=f(H,[["__scopeId","data-v-6cd63235"]]);export{B as default};
