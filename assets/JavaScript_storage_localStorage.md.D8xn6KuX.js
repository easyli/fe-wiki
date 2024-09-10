import{_ as s,c as a,o as i,a9 as e}from"./chunks/framework.Disn2Jq4.js";const u=JSON.parse('{"title":"JavaScript localStorage","description":"","frontmatter":{},"headers":[],"relativePath":"JavaScript/storage/localStorage.md","filePath":"JavaScript/storage/localStorage.md","lastUpdated":1722485984000}'),l={name:"JavaScript/storage/localStorage.md"},t=e(`<h1 id="javascript-localstorage" tabindex="-1">JavaScript localStorage <a class="header-anchor" href="#javascript-localstorage" aria-label="Permalink to &quot;JavaScript localStorage&quot;">​</a></h1><p><code>localStorage</code> 是 Web Storage API 提供的一种本地存储机制，允许开发者在浏览器中存储和检索持久化的键值对数据。与 <code>sessionStorage</code> 不同，<code>localStorage</code> 中的数据在浏览器关闭后仍然存在，因此适用于需要长期保存的数据。</p><p>以下是 <code>localStorage</code> 的基本用法和一些常见操作：</p><h2 id="存储数据" tabindex="-1">存储数据 <a class="header-anchor" href="#存储数据" aria-label="Permalink to &quot;存储数据&quot;">​</a></h2><p>可以使用 <code>localStorage.setItem(key, value)</code> 方法将数据存储到 <code>localStorage</code> 中。其中，<code>key</code> 是要存储的数据的键，<code>value</code> 是对应的值。存储的值必须是字符串类型。</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">localStorage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">setItem</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;username&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;John&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">localStorage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">setItem</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;age&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;25&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="获取数据" tabindex="-1">获取数据 <a class="header-anchor" href="#获取数据" aria-label="Permalink to &quot;获取数据&quot;">​</a></h2><p>可以使用 <code>localStorage.getItem(key)</code> 方法根据键从 <code>localStorage</code> 中检索数据。如果键不存在，返回 <code>null</code>。</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> username </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> localStorage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getItem</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;username&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(username) </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 输出：John</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="更新数据" tabindex="-1">更新数据 <a class="header-anchor" href="#更新数据" aria-label="Permalink to &quot;更新数据&quot;">​</a></h2><p>可以通过重新设置相同的键来更新 <code>localStorage</code> 中的数据。</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">localStorage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">setItem</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;age&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;26&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="删除数据" tabindex="-1">删除数据 <a class="header-anchor" href="#删除数据" aria-label="Permalink to &quot;删除数据&quot;">​</a></h2><p>可以使用 <code>localStorage.removeItem(key)</code> 方法来删除指定键的数据。</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">localStorage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">removeItem</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;age&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="清除所有数据" tabindex="-1">清除所有数据 <a class="header-anchor" href="#清除所有数据" aria-label="Permalink to &quot;清除所有数据&quot;">​</a></h2><p>可以使用 <code>localStorage.clear()</code> 方法来删除 <code>localStorage</code> 中的所有数据。</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">localStorage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">clear</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ul><li><code>localStorage</code> 存储的值必须是字符串类型。如果需要存储其他数据类型（如对象或数组），可以使用 <code>JSON.stringify()</code> 方法将其转换为字符串存储，然后在需要时使用 <code>JSON.parse()</code> 方法将其还原。</li></ul><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> user </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;John&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, age: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">25</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">localStorage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">setItem</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(user))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> storedUser </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">parse</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(localStorage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getItem</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(storedUser) </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 输出：{ name: &#39;John&#39;, age: 25 }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><p><code>localStorage</code> 的存储容量是有限的，通常在几 MB 左右。因此，存储大量数据可能会导致溢出或性能问题。建议谨慎使用并根据实际需求控制数据量。</p></li><li><p><code>localStorage</code> 是基于域名的。每个域名都有独立的 <code>localStorage</code>，不同域名之间的 <code>localStorage</code> 数据是相互隔离的。</p></li><li><p>在使用 <code>localStorage</code> 时，需要注意浏览器对于隐私和安全方面的限制，例如隐私模式下的 <code>localStorage</code> 访问可能被限制。</p></li></ul><p><code>localStorage</code> 提供了一种简单而强大的在浏览器中进行本地持久化存储的方式。它可用于保存用户的首选项、配置信息、用户身份验证信息等。在实际应用中，可以根据具体需求合理使用 <code>localStorage</code> 来增强用户体验和数据持久性。</p>`,23),n=[t];function p(h,r,d,k,o,c){return i(),a("div",null,n)}const y=s(l,[["render",p]]);export{u as __pageData,y as default};
