const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/OrbitControls.DHXP6WpX.js","assets/chunks/three.module.DNFzGJlS.js"])))=>i.map(i=>d[i]);
import{d as b,s as F,y as u,X as w,o as t,c as r,j as o,_ as m,I as y,a9 as E}from"./chunks/framework.BtolS5k4.js";import{S as C,P as A,B as D,M as B,a as v,W as _,A as x}from"./chunks/three.module.DNFzGJlS.js";const T=b({__name:"Scene",setup(d){const s=F();return u(async()=>{const{OrbitControls:a}=await w(async()=>{const{OrbitControls:f}=await import("./chunks/OrbitControls.DHXP6WpX.js");return{OrbitControls:f}},__vite__mapDeps([0,1])),i=new C,n=new A(75,parseInt(getComputedStyle(s.value).width)/window.innerHeight,.1,1e3);n.position.set(0,0,10),i.add(n);const e=new D(1,1,1),h=new B({color:16755200}),p=new v(e,h);i.add(p);const l=new _({canvas:s.value,alpha:!0});l.setClearColor(32767,.2),l.setSize(parseInt(getComputedStyle(s.value).width),window.innerHeight);const c=new a(n,l.domElement);function k(){c.update(),l.render(i,n),requestAnimationFrame(k)}k();const g=new x(6);i.add(g)}),(a,i)=>(t(),r("div",null,[o("canvas",{ref_key:"canvas",ref:s},null,512)]))}}),S=m(T,[["__scopeId","data-v-0af043b8"]]),q=b({__name:"Scene1",setup(d){const s=F();return u(()=>{const a=new C,i=new A(75,parseInt(getComputedStyle(s.value).width)/window.innerHeight,.1,1e3);i.position.set(0,0,10),a.add(i);const n=new D(1,1,1),e=new B({color:16755200}),h=new v(n,e);a.add(h);const p=new _({canvas:s.value,alpha:!0});p.setClearColor(32767,.2),p.setSize(parseInt(getComputedStyle(s.value).width),window.innerHeight),p.render(a,i)}),(a,i)=>(t(),r("div",null,[o("canvas",{ref_key:"canvas",ref:s},null,512)]))}}),H=m(q,[["__scopeId","data-v-dea1f00c"]]),R=b({__name:"Scene2",setup(d){const s=F();return u(async()=>{const{OrbitControls:a}=await w(async()=>{const{OrbitControls:g}=await import("./chunks/OrbitControls.DHXP6WpX.js");return{OrbitControls:g}},__vite__mapDeps([0,1])),i=new C,n=new A(75,parseInt(getComputedStyle(s.value).width)/window.innerHeight,.1,1e3);n.position.set(0,0,10),i.add(n);const e=new D(1,1,1),h=new B({color:16755200}),p=new v(e,h);i.add(p);const l=new _({canvas:s.value,alpha:!0});l.setClearColor(32767,.2),l.setSize(parseInt(getComputedStyle(s.value).width),window.innerHeight);const c=new a(n,l.domElement);function k(){c.update(),l.render(i,n),requestAnimationFrame(k)}k()}),(a,i)=>(t(),r("div",null,[o("canvas",{ref_key:"canvas",ref:s},null,512)]))}}),P=m(R,[["__scopeId","data-v-f778a1ac"]]),I=E("",3),M=E("",4),O=E("",10),G=E("",2),L=JSON.parse('{"title":"渲染场景和物体","description":"","frontmatter":{},"headers":[],"relativePath":"visual/threejs/base/渲染场景和物体.md","filePath":"visual/threejs/base/渲染场景和物体.md","lastUpdated":1722485984000}'),j={name:"visual/threejs/base/渲染场景和物体.md"},W=Object.assign(j,{setup(d){return(s,a)=>(t(),r("div",null,[I,y(H),M,y(P),O,y(S),G]))}});export{L as __pageData,W as default};
