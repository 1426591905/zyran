import{_ as s,c as a,a0 as e,o as t}from"./chunks/framework.Canm8p3M.js";const c=JSON.parse('{"title":"vite","description":"","frontmatter":{},"headers":[],"relativePath":"src/questions/front-engineering/4_Vite.md","filePath":"src/questions/front-engineering/4_Vite.md","lastUpdated":1735025970000}'),n={name:"src/questions/front-engineering/4_Vite.md"};function h(l,i,r,p,o,d){return t(),a("div",null,i[0]||(i[0]=[e('<h1 id="vite" tabindex="-1">vite <a class="header-anchor" href="#vite" aria-label="Permalink to &quot;vite&quot;">​</a></h1><h2 id="vite-如何处理-css-模块" tabindex="-1">Vite 如何处理 CSS 模块？ <a class="header-anchor" href="#vite-如何处理-css-模块" aria-label="Permalink to &quot;Vite 如何处理 CSS 模块？&quot;">​</a></h2><h4 id="类型-架构" tabindex="-1">类型：<code>架构</code> <a class="header-anchor" href="#类型-架构" aria-label="Permalink to &quot;类型：`架构`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-2-分" tabindex="-1">解答（2 分） <a class="header-anchor" href="#解答-2-分" aria-label="Permalink to &quot;解答（2 分）&quot;">​</a></h4><ul><li><strong>2：</strong> Vite 对 CSS 模块有内置支持，会将 CSS 模块中的类名转换为唯一的哈希值，以避免全局样式冲突。并且可以通过 import 语句引入 CSS 模块，在 JavaScript 文件中使用其导出的类名对象来应用样式到相应元素。</li></ul><h2 id="vite-生产构建的主要优化策略有哪些" tabindex="-1">Vite 生产构建的主要优化策略有哪些？ <a class="header-anchor" href="#vite-生产构建的主要优化策略有哪些" aria-label="Permalink to &quot;Vite 生产构建的主要优化策略有哪些？&quot;">​</a></h2><h4 id="类型-架构-1" tabindex="-1">类型：<code>架构</code> <a class="header-anchor" href="#类型-架构-1" aria-label="Permalink to &quot;类型：`架构`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6-1" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6-1" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-6-分" tabindex="-1">解答（6 分） <a class="header-anchor" href="#解答-6-分" aria-label="Permalink to &quot;解答（6 分）&quot;">​</a></h4><details><ul><li><strong>1：</strong> 依赖预打包<br>  原理：在生产构建时，Vite 会对项目的依赖进行预打包。因为在开发阶段，Vite 利用浏览器原生的 ES 模块加载，每个依赖都是单独的模块请求。但在生产环境中，过多的小模块请求会影响性能。Vite 将多个依赖模块合并为一个或几个较大的 chunk 文件，减少 HTTP 请求数量。<br>  示例：比如一个项目使用了 lodash、axios 等多个库，Vite 会把这些库的相关模块打包到一起。假设在开发时，加载这些库可能会产生 10 个小的模块请求，经过预打包后可能只需要 1 - 2 个请求来加载这些库的代码。</li><li><strong>1：</strong> 代码压缩与混淆:<br>  原理： Vite 使用工具（如 Terser）对 JavaScript 代码进行压缩和混淆。压缩是去除代码中的空格、注释等冗余信息，减小文件体积。混淆则是将变量名、函数名等替换为更短或难以理解的名称，增加代码的安全性并且进一步减小体积。<br>  示例: 原始的 JavaScript 代码可能包含大量的注释和有意义的变量名如：</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>经过压缩和混淆后可能变成类似function n(a,b){return a + b;}的形式，文件大小也会显著减小。</p><ul><li><p><strong>1：</strong> CSS 优化:  (1)提取公共 CSS：Vite 会将多个组件或模块中相同的 CSS 样式提取出来，合并到一个或多个 CSS 文件中。这样可以避免在每个组件的 HTML 文件中重复加载相同的 CSS 代码，减少文件大小和请求次数。  (2)压缩 CSS：使用工具（如 cssnano）对 CSS 文件进行压缩，去除不必要的空格、注释，优化 CSS 属性的表示方式等。例如，将color: #ffffff;可能会被优化为color:#fff;。</p></li><li><p><strong>1：</strong> 静态资源处理:  (1)哈希处理：对静态资源（如图片、字体等）进行哈希处理。当资源内容发生变化时，其哈希值也会改变，这样可以在浏览器中实现长效缓存。浏览器可以根据资源的哈希值判断是否需要重新请求资源。  (2)优化路径和加载方式：确保在生产环境中，静态资源的路径是正确的，并且以最优的方式加载。例如，对于一些小的图片，可能会被转换为 Base64 格式嵌入到 CSS 或 HTML 文件中，减少额外的请求。</p></li><li><p><strong>2：</strong> Tree - Shaking（摇树优化）:  原理：Vite 会分析代码的依赖关系，在打包过程中去除那些没有被实际使用的代码。例如，如果在一个 JavaScript 模块中引入了一个大型库，但只使用了其中的一个小功能，Vite 会将未使用的代码部分剔除。  示例：假设一个项目引入了lodash库，但只使用了_.isEmpty函数，Vite 会在打包时将lodash中其他未使用的函数代码排除，从而减小最终打包文件的大小。</p></li></ul></details><h2 id="在-vite-项目中如何配置代理-proxy-以解决跨域问题" tabindex="-1">在 Vite 项目中如何配置代理（Proxy）以解决跨域问题？ <a class="header-anchor" href="#在-vite-项目中如何配置代理-proxy-以解决跨域问题" aria-label="Permalink to &quot;在 Vite 项目中如何配置代理（Proxy）以解决跨域问题？&quot;">​</a></h2><h4 id="类型-架构-2" tabindex="-1">类型：<code>架构</code> <a class="header-anchor" href="#类型-架构-2" aria-label="Permalink to &quot;类型：`架构`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6-2" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6-2" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-1-分" tabindex="-1">解答（1 分） <a class="header-anchor" href="#解答-1-分" aria-label="Permalink to &quot;解答（1 分）&quot;">​</a></h4><ul><li><strong>1：</strong> 在 vite.config.js 中配置 server.proxy 选项，例如：</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  server: {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    proxy: {</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &#39;/api&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        target: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http://backend-api-url&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        changeOrigin: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        rewrite</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#22863A;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">api</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这会将所有以 /api 开头的请求代理到指定的后端 API 地址，并根据 rewrite 规则修改请求路径。</span></span></code></pre></div>',17)]))}const E=s(n,[["render",h]]);export{c as __pageData,E as default};