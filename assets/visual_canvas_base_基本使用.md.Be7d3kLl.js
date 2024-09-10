import{_ as s,c as i,o as a,a9 as n}from"./chunks/framework.Disn2Jq4.js";const C=JSON.parse('{"title":"Canvas 使用","description":"","frontmatter":{},"headers":[],"relativePath":"visual/canvas/base/基本使用.md","filePath":"visual/canvas/base/基本使用.md","lastUpdated":1722485984000}'),l={name:"visual/canvas/base/基本使用.md"},t=n(`<h1 id="canvas-使用" tabindex="-1">Canvas 使用 <a class="header-anchor" href="#canvas-使用" aria-label="Permalink to &quot;Canvas 使用&quot;">​</a></h1><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">canvas</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;canvas&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> width</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;600&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> height</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;400&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;您的浏览器不支持 Canvas&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">canvas</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// /** @type {HTMLCanvasElement} **/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 1.找到画布</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> canvas </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;canvas&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 判断是否有getContext</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">canvas.getContext) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;当前浏览器不支持canvas，请下载最新的浏览器&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">//  2.获取画笔</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> context </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> canvas.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getContext</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;2d&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(context)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 3.绘制图形</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">context.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">fillRect</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="属性方法" tabindex="-1">属性方法 <a class="header-anchor" href="#属性方法" aria-label="Permalink to &quot;属性方法&quot;">​</a></h2><ul><li>strokeStyle 设置或返回描边颜色</li><li>fillStyle 设置或返回填充颜色</li><li>stroke() 描边已定义绘图（路径）</li><li>fill() 填充当前绘图（路径）</li><li>moveTo(x,y) 把路径移动到画布中的指定点，不创建线条。</li><li>lineTo(x,y) 添加一个新点,绘制一条从当前位置到指定新点(x,y)位置的直线。</li><li>lineWidth 设置或返回当前的线条宽度</li><li>lineJoin 设置或返回两条线相交时，所创建的拐角类型</li><li>lineCap 设置或返回线条的结束端点样式</li><li>beginPath() 新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。生成路径的第一步- 叫做 beginPath()。</li><li>closePath() 闭合路径之后图形绘制命令又重新指向到上下文中。不是必需的。</li></ul>`,6),e=[t];function h(p,k,r,d,c,g){return a(),i("div",null,e)}const A=s(l,[["render",h]]);export{C as __pageData,A as default};
