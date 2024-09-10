import{_ as s,c as i,o as a,a9 as n}from"./chunks/framework.Disn2Jq4.js";const y=JSON.parse('{"title":"数组去重","description":"","frontmatter":{},"headers":[],"relativePath":"JavaScript/core/duplicate.md","filePath":"JavaScript/core/duplicate.md","lastUpdated":1722485984000}'),h={name:"JavaScript/core/duplicate.md"},l=n(`<h1 id="数组去重" tabindex="-1">数组去重 <a class="header-anchor" href="#数组去重" aria-label="Permalink to &quot;数组去重&quot;">​</a></h1><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> arr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">17</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;true&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, {}, {}]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// =&gt; [1, &#39;1&#39;, 17, true, false, &#39;true&#39;, &#39;a&#39;, {}, {}]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_1-使用-set" tabindex="-1">1. 使用 set <a class="header-anchor" href="#_1-使用-set" aria-label="Permalink to &quot;1. 使用 set&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> array</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> uniqueArray</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">...new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> Set</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(array)]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(uniqueArray)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 输出: [1, 2, 3, 4, 5]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_2-for-循环" tabindex="-1">2. for 循环 <a class="header-anchor" href="#_2-for-循环" aria-label="Permalink to &quot;2. for 循环&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> unique</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> len </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> arr.</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">length</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> len; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">; j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> len; j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (arr[i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> arr[j]) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        arr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">splice</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(j, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // 每删除一个树，j--保证j的值经过自加后不变。同时，len--，减少循环次数提升性能</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        len</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">--</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">--</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> arr</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">unique</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">])</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 输出: [1, 2, 3, 4, 5]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="_3-使用-indexof" tabindex="-1">3. 使用 indexOf <a class="header-anchor" href="#_3-使用-indexof" aria-label="Permalink to &quot;3. 使用 indexOf&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> unique</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> []</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> arr.</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">indexOf</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(arr[i]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">===</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(arr[i])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> res</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_4-使用-include" tabindex="-1">4. 使用 include <a class="header-anchor" href="#_4-使用-include" aria-label="Permalink to &quot;4. 使用 include&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> unique</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> []</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> arr.</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(arr[i])) res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(arr[i])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> res</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_5-使用-filter" tabindex="-1">5. 使用 filter <a class="header-anchor" href="#_5-使用-filter" aria-label="Permalink to &quot;5. 使用 filter&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> unique</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> arr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">item</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">index</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> arr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">indexOf</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(item) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> index</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_6-使用-map" tabindex="-1">6. 使用 Map <a class="header-anchor" href="#_6-使用-map" aria-label="Permalink to &quot;6. 使用 Map&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> unique</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> map</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> Map</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> []</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> arr.</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">has</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(arr[i])) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(arr[i], </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(arr[i])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> res</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,14),p=[l];function k(t,e,r,d,A,g){return a(),i("div",null,p)}const D=s(h,[["render",k]]);export{y as __pageData,D as default};
