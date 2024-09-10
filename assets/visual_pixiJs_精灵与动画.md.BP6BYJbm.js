import{_ as s,c as i,o as a,a9 as n}from"./chunks/framework.Disn2Jq4.js";const A=JSON.parse('{"title":"PixiJs 精灵与动画","description":"","frontmatter":{},"headers":[],"relativePath":"visual/pixiJs/精灵与动画.md","filePath":"visual/pixiJs/精灵与动画.md","lastUpdated":1722485984000}'),p={name:"visual/pixiJs/精灵与动画.md"},l=n(`<h1 id="pixijs-精灵与动画" tabindex="-1">PixiJs 精灵与动画 <a class="header-anchor" href="#pixijs-精灵与动画" aria-label="Permalink to &quot;PixiJs 精灵与动画&quot;">​</a></h1><h2 id="_1-创建应用" tabindex="-1">1.创建应用 <a class="header-anchor" href="#_1-创建应用" aria-label="Permalink to &quot;1.创建应用&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 导入pixi</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> PIXI </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;pixi.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 创建应用</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> PIXI</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">Application</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">	width: window.innerWidth,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">	height: window.innerHeight,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">	backgroundColor: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0x1099bb</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">	resolution: window.devicePixelRatio </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">||</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 像素比</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 将应用画布添加到DOM中</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">document.body.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(app.view </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">as</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="_2-创建纹理与精灵" tabindex="-1">2.创建纹理与精灵 <a class="header-anchor" href="#_2-创建纹理与精灵" aria-label="Permalink to &quot;2.创建纹理与精灵&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 创建一个纹理</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> texture</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> PIXI</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.Texture.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;./vite.svg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 创建一个精灵</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> sprite</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> PIXI</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">Sprite</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(texture)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_3-设置属性" tabindex="-1">3.设置属性 <a class="header-anchor" href="#_3-设置属性" aria-label="Permalink to &quot;3.设置属性&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 锚点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">sprite.anchor.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 设置位置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">sprite.x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> app.screen.width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">sprite.y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> app.screen.height </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 旋转45度</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">sprite.rotation </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Math.</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">PI</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 设置缩放</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">sprite.scale.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 设置透明度</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">sprite.alpha </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0.6</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 将精灵添加到舞台</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">app.stage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">addChild</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(sprite)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="_4-实现动画" tabindex="-1">4.实现动画 <a class="header-anchor" href="#_4-实现动画" aria-label="Permalink to &quot;4.实现动画&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// ticker 实现动画</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">app.ticker.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">delta</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  sprite.rotation </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0.01</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> delta</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,9),e=[l];function h(t,k,r,d,c,g){return a(),i("div",null,e)}const y=s(p,[["render",h]]);export{A as __pageData,y as default};
