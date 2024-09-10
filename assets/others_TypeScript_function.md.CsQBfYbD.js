import{_ as s,c as i,o as a,a9 as n}from"./chunks/framework.Disn2Jq4.js";const C=JSON.parse('{"title":"函数","description":"","frontmatter":{},"headers":[],"relativePath":"others/TypeScript/function.md","filePath":"others/TypeScript/function.md","lastUpdated":1722485984000}'),h={name:"others/TypeScript/function.md"},k=n(`<h1 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h1><blockquote><p>函数涉及的类型实际上指的是：<code>函数参数</code>和<code>返回值</code>的类型</p></blockquote><h2 id="函数的类型" tabindex="-1">函数的类型 <a class="header-anchor" href="#函数的类型" aria-label="Permalink to &quot;函数的类型&quot;">​</a></h2><p>js的函数</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 命名函数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> y</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 匿名函数 箭头函数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">let</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> myAdd</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> y;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>为上面那个函数添加类型：</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> y</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">let</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> myAdd</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> y</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="可选参数" tabindex="-1">可选参数<code>?</code> <a class="header-anchor" href="#可选参数" aria-label="Permalink to &quot;可选参数\`?\`&quot;">​</a></h2><p>通过<code>?</code>表示该参数为可选参数</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> x;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> fn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> age</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">fn</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;zs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="默认参数" tabindex="-1">默认参数 <a class="header-anchor" href="#默认参数" aria-label="Permalink to &quot;默认参数&quot;">​</a></h2><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 20</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> y;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 30</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="剩余参数" tabindex="-1">剩余参数 <a class="header-anchor" href="#剩余参数" aria-label="Permalink to &quot;剩余参数&quot;">​</a></h2><p>必要参数，默认参数和可选参数有个共同点：它们表示某一个参数。 有时，你想同时操作多个参数，或者你并不知道会有多少参数传递进来。 在 JavaScript 里，你可以使用 arguments 来访问所有传入的参数。</p><p>在 TypeScript 里，你可以把所有参数收集到一个变量里：</p><p>剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。 编译器创建参数数组，名字是你在省略号（ ...）后面给定的名字，你可以在函数体内使用这个数组。</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> fn1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">array</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[],</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">items</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[])</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(array,items)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> items</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">fn1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(a,</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;4&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;5&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;6&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// [ 1, 2, 3 ] [ &#39;4&#39;, &#39;5&#39;, &#39;6&#39; ]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> info</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">args</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[]) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(x, args);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">info</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;abc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;c&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">//abc [ &#39;c&#39;, &#39;b&#39;, &#39;a&#39; ]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="函数重载" tabindex="-1">函数重载 <a class="header-anchor" href="#函数重载" aria-label="Permalink to &quot;函数重载&quot;">​</a></h2><p>重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 重载函数声明</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> number</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 定义函数实现</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 x + y</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;string&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> &amp;&amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;string&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> y</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;number&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> &amp;&amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;number&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> y</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// console.log(add(1, &#39;a&#39;)) // error</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>如果参数类型不同，则参数类型应设置为 any。<br> 参数数量不同你可以将不同的参数设置为可选。</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> fn</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">params</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> void</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> fn</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">params</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">params2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> void</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> fn</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">params</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">params2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(params)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(params2)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">fn</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">123</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">fn</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;123&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">456</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,22),l=[k];function p(t,e,r,d,g,y){return a(),i("div",null,l)}const D=s(h,[["render",p]]);export{C as __pageData,D as default};
