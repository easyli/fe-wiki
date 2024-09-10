import{_ as s,c as i,o as a,a9 as t}from"./chunks/framework.Disn2Jq4.js";const m=JSON.parse('{"title":"input","description":"","frontmatter":{},"headers":[],"relativePath":"frontEnd/html5/problem/input.md","filePath":"frontEnd/html5/problem/input.md","lastUpdated":1722485984000}'),n={name:"frontEnd/html5/problem/input.md"},p=t(`<h1 id="input" tabindex="-1">input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;input&quot;">​</a></h1><h2 id="input-type-password-浏览器自动填充账号和密码" tabindex="-1">input type=&quot;password&quot; 浏览器自动填充账号和密码 <a class="header-anchor" href="#input-type-password-浏览器自动填充账号和密码" aria-label="Permalink to &quot;input type=&quot;password&quot; 浏览器自动填充账号和密码&quot;">​</a></h2><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">a-input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;password&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;请输入登录密码&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;model.password&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>再 input 标签上设置属性 type 为 password 很容易被浏览器识别，然后自动填充以前保存的密码。这里推荐一种特别简单的方法解决这个问题。</p><p><strong>在 input 属性 type 为 text 的标签上添加下面的属性</strong><br> autoComplete=&quot;off&quot;</p><p><strong>在 input 属性 type 为 password 的标签上添加下面的属性</strong><br> autoComplete=&quot;new-password&quot;</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">a-input</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;">  autoComplete</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;new-password&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;">  type</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;password&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;">  placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;请输入登录密码&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;">  v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;model.password&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,7),e=[p];function l(h,r,o,d,k,u){return a(),i("div",null,e)}const g=s(n,[["render",l]]);export{m as __pageData,g as default};
