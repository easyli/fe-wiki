import{_ as s,c as i,o as a,a9 as n}from"./chunks/framework.Disn2Jq4.js";const g=JSON.parse('{"title":"Canvas 图像变换","description":"","frontmatter":{},"headers":[],"relativePath":"visual/canvas/base/图像变换.md","filePath":"visual/canvas/base/图像变换.md","lastUpdated":1722485984000}'),e={name:"visual/canvas/base/图像变换.md"},l=n(`<h1 id="canvas-图像变换" tabindex="-1">Canvas 图像变换 <a class="header-anchor" href="#canvas-图像变换" aria-label="Permalink to &quot;Canvas 图像变换&quot;">​</a></h1><p>以下方法用于图像变换。</p><ul><li><code>CanvasRenderingContext2D.rotate()</code>：图像旋转</li><li><code>CanvasRenderingContext2D.scale()</code>：图像缩放</li><li><code>CanvasRenderingContext2D.translate()</code>：图像平移</li><li><code>CanvasRenderingContext2D.transform()</code>：通过一个变换矩阵完成图像变换</li><li><code>CanvasRenderingContext2D.setTransform()</code>：取消前面的图像变换</li></ul><h2 id="_1-rotate" tabindex="-1">1.rotate() <a class="header-anchor" href="#_1-rotate" aria-label="Permalink to &quot;1.rotate()&quot;">​</a></h2><p><code>CanvasRenderingContext2D.rotate()</code>方法用于图像旋转。它接受一个弧度值作为参数，表示顺时针旋转的度数。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">context.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">rotate</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">((</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">45</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Math.</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">PI</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 180</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">context.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">fillRect</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">70</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>上面代码会显示一个顺时针倾斜 45 度的矩形。注意，<code>rotate()</code>方法必须在<code>fillRect()</code>方法之前调用，否则是不起作用的。</p><p>旋转中心点始终是画布左上角的原点。如果要更改中心点，需要使用<code>translate()</code>方法移动画布。</p><h2 id="_2-scale" tabindex="-1">2.scale() <a class="header-anchor" href="#_2-scale" aria-label="Permalink to &quot;2.scale()&quot;">​</a></h2><p><code>CanvasRenderingContext2D.scale()</code>方法用于缩放图像。它接受两个参数，分别是<code>x</code>轴方向的缩放因子和<code>y</code>轴方向的缩放因子。默认情况下，一个单位就是一个像素，缩放因子可以缩放单位，比如缩放因子<code>0.5</code>表示将大小缩小为原来的 50%，缩放因子<code>10</code>表示放大十倍。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">context.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">scale</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">context.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">fillRect</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>上面代码中，原来的矩形是 10 x 10，缩放后展示出来是 100 x 30。</p><p>如果缩放因子为 1，就表示图像没有任何缩放。如果为-1，则表示方向翻转。<code>context.scale(-1, 1)</code>为水平翻转，<code>context.scale(1, -1)</code>表示垂直翻转。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">context.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">scale</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">context.font </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;16px serif&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">context.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">fillText</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;Hello world!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>上面代码会显示一个水平倒转的、高度放大 2 倍的<code>Hello World!</code>。</p><p>注意，负向缩放本质是坐标翻转，所针对的坐标轴就是画布左上角原点的坐标轴。</p><h2 id="_3-translate" tabindex="-1">3.translate() <a class="header-anchor" href="#_3-translate" aria-label="Permalink to &quot;3.translate()&quot;">​</a></h2><p><code>CanvasRenderingContext2D.translate()</code>方法用于平移图像。它接受两个参数，分别是 x 轴和 y 轴移动的距离（单位像素）。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">context.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">fillRect</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">context.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">translate</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">context.fillStyle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;red&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">context.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">fillRect</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_4-transform" tabindex="-1">4.transform() <a class="header-anchor" href="#_4-transform" aria-label="Permalink to &quot;4.transform()&quot;">​</a></h2><p><code>CanvasRenderingContext2D.transform()</code>方法接受一个变换矩阵的六个元素作为参数，完成缩放、旋转、移动和倾斜等变形。</p><p>它的使用格式如下。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">context.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">transform</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(a, b, c, d, e, f)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">a:水平缩放(默认值1，单位倍数)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">b:水平倾斜(默认值0，单位弧度)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">c:垂直倾斜(默认值0，单位弧度)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">d:垂直缩放(默认值1，单位倍数)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">e:水平位移(默认值0，单位像素)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">f:垂直位移(默认值0，单位像素)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">*/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>下面是一个例子。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">context.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">transform</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">context.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">fillRect</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>上面代码中，原始图形是 100 x 100 的矩形，结果缩放成 200 x 100 的矩形，并且左上角从<code>(0, 0)</code>移动到<code>(50, 50)</code>。</p><p>注意，多个<code>transform()</code>方法具有叠加效果。</p><h2 id="_5-settransform" tabindex="-1">5.setTransform() <a class="header-anchor" href="#_5-settransform" aria-label="Permalink to &quot;5.setTransform()&quot;">​</a></h2><p><code>CanvasRenderingContext2D.setTransform()</code>方法取消前面的图形变换，将画布恢复到该方法指定的状态。该方法的参数与<code>transform()</code>方法完全一致。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">context.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">translate</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">context.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">fillRect</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">context.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">setTransform</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">context.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">fillRect</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>上面代码中，第一个<code>fillRect()</code>方法绘制的矩形，左上角从<code>(0, 0)</code>平移到<code>(50, 50)</code>。<code>setTransform()</code>方法取消了这个变换（已绘制的图形不受影响），将画布恢复到默认状态（变换矩形<code>1, 0, 0, 1, 0, 0</code>），所以第二个矩形的左上角回到<code>(0, 0)</code>。</p>`,31),t=[l];function h(p,k,r,d,C,c){return a(),i("div",null,t)}const A=s(e,[["render",h]]);export{g as __pageData,A as default};
