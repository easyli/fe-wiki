import{_ as s,c as i,o as a,a9 as n}from"./chunks/framework.Disn2Jq4.js";const A=JSON.parse('{"title":"内置对象 Number","description":"","frontmatter":{},"headers":[],"relativePath":"JavaScript/内置对象/Number.md","filePath":"JavaScript/内置对象/Number.md","lastUpdated":1722485984000}'),e={name:"JavaScript/内置对象/Number.md"},l=n(`<h1 id="内置对象-number" tabindex="-1">内置对象 Number <a class="header-anchor" href="#内置对象-number" aria-label="Permalink to &quot;内置对象 Number&quot;">​</a></h1><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><ol><li><code>Number.MAX_VALUE</code>：表示 JavaScript 中能表示的最大数值，约为 1.79 × 10^308。</li><li><code>Number.MIN_VALUE</code>：表示 JavaScript 中能表示的最小正数值，约为 5 × 10^-324。</li><li><code>Number.POSITIVE_INFINITY</code>：表示正无穷大，当一个数超过了<code>Number.MAX_VALUE</code>时，将返回<code>Infinity</code>。</li><li><code>Number.NEGATIVE_INFINITY</code>：表示负无穷大，当一个负数超过了<code>-Number.MAX_VALUE</code>时，将返回<code>-Infinity</code>。</li><li><code>Number.NaN</code>：表示非数值（Not-a-Number），当进行非法的数学运算时，将返回<code>NaN</code>。</li></ol><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><ol><li><p><code>Number.isNaN(num)</code>：判断给定的值是否为<code>NaN</code>（非数值）。如果是<code>NaN</code>，则返回<code>true</code>，否则返回<code>false</code>。</p></li><li><p><code>Number.isFinite(num)</code>：判断给定的值是否为有限数值。如果是有限数值，即不是<code>Infinity</code>、<code>-Infinity</code>或<code>NaN</code>，则返回<code>true</code>，否则返回<code>false</code>。</p></li><li><p><code>Number.parseInt(string, radix)</code>：将字符串转换为整数，<code>radix</code>表示进制数（可选，默认为 10）。</p></li><li><p><code>Number.parseFloat(string)</code>：将字符串转换为浮点数。</p></li><li><p><code>Number.prototype.toFixed(digits)</code>：将数值转换为指定小数位数的字符串表示。<code>digits</code>表示保留的小数位数。</p></li><li><p><code>Number.prototype.toPrecision(precision)</code>：将数值转换为指定精度的字符串表示。<code>precision</code>表示有效位数。</p></li><li><p><code>Number.prototype.toString(radix)</code>：将数值转换为字符串。<code>radix</code>表示进制数（可选，默认为 10）。</p></li><li><p><code>Number.prototype.valueOf()</code>：返回<code>Number</code>对象的原始数值。</p></li></ol><p>示例代码：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> num</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 42.345</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(Number.MAX_VALUE) </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 输出：1.7976931348623157e+308</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(Number.MIN_VALUE) </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 输出：5e-324</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(Number.POSITIVE_INFINITY) </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 输出：Infinity</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(Number.NEGATIVE_INFINITY) </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 输出：-Infinity</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(Number.NaN) </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 输出：NaN</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(Number.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">isNaN</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(num)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 输出：false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(Number.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">isFinite</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(num)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 输出：true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(Number.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">parseInt</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;42&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 输出：42</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(Number.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">parseFloat</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;42.345&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 输出：42.345</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(num.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">toFixed</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 输出：42.35</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(num.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">toPrecision</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 输出：42.35</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(num.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 输出：101010.0101111011011001</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(num.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">valueOf</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()) </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 输出：42.345</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>这些是<code>Number</code>对象的一些常用属性和方法。通过使用这些属性和方法，可以在 JavaScript 中更方便地处理数字和数值相关的操作。</p>`,8),p=[l];function h(t,k,r,d,o,c){return a(),i("div",null,p)}const C=s(e,[["render",h]]);export{A as __pageData,C as default};
