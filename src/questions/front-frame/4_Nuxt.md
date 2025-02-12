# Nuxt

## Nuxt.js和Vue.js有什么区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

* **1：** 服务端渲染：Nuxt.js支持服务端渲染，可以在服务器端生成页面，提高应用的性能和SEO优化。Vue.js是一个客户端渲染框架，页面内容是在浏览器端生成的。
* **1：** 路由配置：Nuxt.js提供了一种简单的方式来配置路由，自动生成路由配置，而Vue.js需要手动配置路由。
* **1：** 目录结构：Nuxt.js有一个约定的目录结构，使得项目组织更加清晰和易于维护。Vue.js没有明确的目录结构要求，开发者可以根据自己的需求自由组织项目结构。

## nuxt有哪些特性？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（7 分）

* **1：** 服务器端渲染(SSR)：Nuxt.js 支持服务器端渲染，可以提高网站的性能和搜索引擎优化。
* **1：** 自动路由：Nuxt.js 可以根据项目目录结构自动生成路由配置，减少手动配置的工作量。
* **1：** 预渲染：Nuxt.js 支持预渲染，可以在构建时生成静态 HTML 文件，提高网站的加载速度。
* **1：** 插件系统：Nuxt.js 提供了丰富的插件系统，可以方便地扩展功能和集成第三方库。
* **1：** 中间件：Nuxt.js 支持中间件，可以在路由处理之前或之后执行一些逻辑操作。
* **1：** 数据异步加载：Nuxt.js 支持在页面组件中异步加载数据，可以更好地控制数据的获取和展示。
* **1：** 静态文件服务：Nuxt.js 可以将静态文件直接发布到 CDN 或静态文件服务器，提高网站的访问速度。

## nuxt2和nuxt3的区别

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（6 分）

<details>

* **1：** 性能方面：<br/>
&emsp;Nuxt3：性能有显著提升。它采用了 Vite 作为默认的开发服务器和构建工具（也支持 Webpack）。Vite 利用了现代浏览器的原生 ES 模块支持，
在开发阶段可以实现更快的冷启动和热更新。例如，当修改一个组件文件时，Nuxt3 + Vite 能够几乎即时地更新页面，而不需要像 <br/>
&emsp;Nuxt2（基于 Webpack）那样进行较长时间的重新打包过程。在构建产物方面，Nuxt3 也能够生成更优化的代码，减少不必要的资源加载，从而提升页面加载速度。
Nuxt2：基于 Webpack 构建，在开发过程中，热更新速度相对较慢。每次更新代码后，Webpack 需要重新构建模块图，这可能导致几秒钟的延迟。在构建用于生产环境的项目时，
生成的代码包可能会包含一些冗余代码，影响最终的性能。
* **1：** 目录结构和文件约定：<br/>
&emsp;Nuxt3：目录结构更加灵活。它仍然支持传统的pages目录用于定义路由页面，但是引入了新的composables目录用于存放可组合函数，这些函数可以在多个组件之间共享逻辑。
例如，你可以在composables目录下创建一个useAuth.js文件，用于处理用户认证逻辑，然后在多个组件中使用这个函数。同时，Nuxt3 对layouts目录的使用也更加灵活，
允许更好地定制页面布局。<br/>
&emsp;Nuxt2：有比较固定的目录结构，pages目录下的文件直接对应路由，layouts目录主要用于定义页面布局模板，这种结构相对简单直接，但在复杂项目中灵活性稍差。
例如，在 Nuxt2 中，如果你想共享一些非路由相关的逻辑，可能需要通过插件或者在store（如果使用 Vuex）中实现，没有像 Nuxt3 的composables这样专门的目录。
* **1：** TypeScript 支持：<br/>
&emsp;Nuxt3：对 TypeScript 有更好的原生支持。整个框架的核心代码和 API 都是用 TypeScript 编写的，这使得在开发过程中能够提供更好的类型检查和自动补全功能。
例如，在定义组件的props时，TypeScript 能够准确地检查传入属性的类型是否正确，减少运行时错误。并且 Nuxt3 在很多配置文件和插件开发中也更方便地使用 TypeScript，
开发体验更加友好。<br/>
&emsp;Nuxt2：虽然也可以使用 TypeScript，但需要额外的配置和一些复杂的步骤来实现较好的类型支持。例如，在 Nuxt2 中使用 TypeScript 编写组件时，可能需要手动安
装和配置相关的 Babel 插件来处理类型转换，并且在一些插件开发和与 Vuex（如果使用）结合时，TypeScript 的集成度没有 Nuxt3 高。
* **1：** Composition API 和 Options API：<br/>
&emsp;Nuxt3：更加强调使用 Composition API。它提供了一系列的组合式函数，如useFetch用于数据获取，useState用于状态管理等。这些函数使得组件逻辑更加清晰，可
复用性更强。例如，useFetch可以在组件中轻松地获取数据，并且可以在多个组件中复用这个数据获取逻辑，而不需要像 Nuxt2 那样可能更多地依赖于 Options API 中
的mounted等生命周期钩子来实现相同的功能。<br/>
&emsp;Nuxt2：主要使用 Options API，通过data、methods、mounted等选项来定义组件。虽然也可以使用 Composition API，但没有 Nuxt3 那么自然和方便。
例如，在 Nuxt2 中使用 Composition API 可能需要额外引入 Vue 3 的相关 API，并且在与 Nuxt2 的生态（如插件、模块）结合时可能会遇到一些兼容性问题。
* **2：** Server - side Rendering (SSR) 和 Static Site Generation (SSG)：<br/>
&emsp;Nuxt3：在 SSR 和 SSG 方面有一些改进。它提供了更灵活的生成策略，例如在 SSG 中可以更好地控制预渲染的页面和数据获取方式。对于动态路由的 SSG，Nuxt3 能
够根据不同的参数更高效地生成页面。在 SSR 模式下，Nuxt3 也优化了服务器端渲染的性能和资源利用。<br/>
&emsp;Nuxt2：支持 SSR 和 SSG，但在一些复杂的场景下，如动态路由的预渲染和数据获取策略上相对 Nuxt3 不够灵活。例如，在 Nuxt2 中处理动态路由的 SSG 可能需要
更多的手动配置和复杂的逻辑来确保数据的正确获取和页面的预渲染。

</details>

## Nuxt.js的生命周期有哪些？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（5 分）

* **1：** 服务器端生命周期：
  + nuxtServerInit：在服务端初始化数据
  + middleware：中间件执行
  + validate()：验证动态路由参数
  + asyncData()：异步数据加载
  + fetch()：服务端数据获取

* **1：** Vue生命周期（服务端）：
  + beforeCreate：组件实例化之前
  + created：组件创建完成

* **1：** Vue生命周期（客户端）：
  + beforeMount：DOM挂载之前
  + mounted：DOM挂载完成
  + beforeUpdate：数据更新前
  + updated：数据更新后

* **1：** 页面特定钩子：
  + transition：页面过渡效果
  + head：设置页面元信息

* **1：** 注意事项：
  + 服务端只能访问beforeCreate和created
  + window/document只能在mounted中使用
  + asyncData/fetch在每次路由变化时都会调用

## Nuxt.js中的数据获取方式有哪些？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

* **1：** asyncData方法：
  + 在组件初始化前调用
  + 可以返回Promise
  + 返回的数据会合并到组件data中
  + 只能在页面组件中使用

  ```js
  async asyncData({ $axios }) {
    const data = await $axios.$get('/api/data')
    return { data }
  }
  ```

* **1：** fetch方法：
  + 可在任何组件中使用
  + 不直接返回数据
  + 通常用于填充Vuex状态

  ```js
  async fetch() {
    const { data } = await this.$axios.$get('/api/data')
    this.items = data
  }
  ```

* **1：** Vuex操作：
  + nuxtServerInit初始化存储
  + store中的actions获取数据
  + 支持模块化管理

  ```js
  export const actions = {
    async fetchData({ commit }) {
      const data = await this.$axios.$get('/api/data')
      commit('SET_DATA', data)
    }
  }
  ```

* **1：** API调用最佳实践：
  + 使用@nuxtjs/axios模块
  + 统一管理API请求
  + 处理错误和加载状态
  + 实现数据缓存策略

## Nuxt.js的SEO优化方案有哪些？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（5 分）

* **1：** Meta标签管理：

  ```js
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'keywords', name: 'keywords', content: this.keywords }
      ]
    }
  }
  ```

* **1：** 服务端渲染(SSR)：
  + 预渲染完整HTML
  + 更好的首屏加载
  + 搜索引擎可直接爬取内容

  ```js
  // nuxt.config.js
  export default {
    ssr: true
  }
  ```

* **1：** 静态站点生成(SSG)：
  + 构建时生成静态HTML
  + 适合内容不常更新的站点

  ```js
  // nuxt.config.js
  export default {
    target: 'static',
    generate: {
      routes: ['/posts/1', '/posts/2']
    }
  }
  ```

* **1：** 结构化数据：
  + 实现JSON-LD
  + 添加Schema.org标记
  + 提供更丰富的搜索结果

  ```js
  head() {
    return {
      script: [{
        type: 'application/ld+json',
        json: {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": this.title
        }
      }]
    }
  }
  ```

* **1：** 性能优化：
  + 图片懒加载
  + 资源预加载
  + 代码分割
  + 缓存策略

  ```js
  // nuxt.config.js
  export default {
    render: {
      http2: {
        push: true
      },
      static: {
        maxAge: 1000 * 60 * 60 * 24 * 7
      }
    }
  }
  ```

## 如何在 Nuxt.js 中配置和使用环境变量？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

* **1：** 创建.env文件：在项目根目录下创建.env文件，例如.env.development用于开发环境，.env.production用于生产环境，在文件中定
义变量，如`API_URL=<http://localhost:3000/api（开发环境下的> API 地址）`。
* **1：** 在nuxt.config.js中配置：使用@nuxtjs/dotenv模块（需先安装），在nuxt.config.js中添加如下配置：

```js
modules: [
  '@nuxtjs/dotenv'
]
```

* **1：** 在代码中使用：在组件或模块中，可以通过process.env.API_URL来获取环境变量的值，然后在发送 API 请求等操作中使用该地址，这样在
不同环境下可以方便地切换 API 地址等配置信息，而无需修改代码中的硬编码值。

## nuxt2常用的组件有哪些

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

* **1：** `<Nuxt>`Nuxt 框架中的核心组件;
* `<NuxtLink>`用于在 Nuxt 应用内部进行页面导航;
* `<ClientOnly>`只在客户端被渲染和执行;
* `<NoSSR>`用来处理不适合在服务端渲染的内容;
* `<Transition>`用于给页面或组件的切换添加过渡动画效果，增强用户体验，让页面之间的转换更加平滑自然。可以设置不同的动画类型、时长、延迟等参数。

* **1：** `<NuxtChild>`主要用于嵌套路由场景。当有多层级的路由，且子路由对应的页面需要在父路由布局中的特定位置展示时，就会用到该组件;
* `<KeepAlive>`保留组件的状态，让它在切换后依然保持之前的状态;
* `<slot>`用于实现内容分发机制。父组件可以向子组件传递内容，子组件通过slot来接收并展示这些内容.

## nuxt3常用的组件有哪些

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

<details>

* **1：** `<NuxtPage>`类似于 Nuxt2 中的Nuxt组件，是 Nuxt3 里用于渲染当前路由对应的页面组件的核心组件、
* `<NuxtLink>`用于在 Nuxt 应用内部进行页面导航；
* `<ClientOnly>`只在客户端被渲染和执行；
* `<Transition>`用于给页面或组件的切换添加过渡动画效果；
* `<KeepAlive>`保留组件的状态，让它在切换后依然保持之前的状态；
* `<Suspense>`在 Nuxt3 中用于处理异步组件的加载状态，特别是当组件需要等待一些异步操作（如异步获取数据、加载外部脚本等）完成后才能正确渲染时，Suspense 可以显示一个
占位内容（如加载提示信息），直到异步操作结束，组件成功渲染，从而提供更好的用户体验，避免页面出现长时间空白等情况；

* **1：** `<NuxtLayout>`用于指定页面所使用的布局。在 Nuxt3 中，可以创建多个不同的布局文件（.vue格式，定义了不同的页面结构样式），然后通过NuxtLayout组件来选
择具体使用哪一个布局来呈现页面。这为实现多样化的页面布局设计提供了便利，满足不同页面在结构、样式等方面的差异化需求;
* `<NoSSR>`用来处理不适合在服务端渲染的内容；
* `<slot>`用于实现内容分发机制。父组件可以向子组件传递内容，子组件通过slot来接收并展示这些内容；
* `<NuxtImg>`；
* `<NuxtPicture>`。

</details>

## 在 Nuxt3 中，怎样在服务端获取数据并传递给页面组件？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

* **1：** 可以使用 asyncData 或 fetch 方法。在页面组件中，asyncData 是一个异步函数，接收上下文 ctx，在其中获取数据后返回一个对象，该对象会与组件的
 data 合并；fetch 方法类似，但数据存储在组件实例的 $fetchState 中，例如在 asyncData 中：

 ```js
 export default { 
  async asyncData(ctx) { 
    const data = await ctx.$axios.get('/api/data'); 
    return { 
      fetchedData: data 
    }; 
  } 
}
 ```

## Nuxt3 的路由懒加载是如何实现的？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

* **1：** Nuxt3 基于 Vue Router 的懒加载功能，通过动态导入组件实现路由懒加载。
* **1：** 在定义路由时，使用箭头函数返回 `import()` 导入的组件，例如 `{ path: '/about', component: () => import('~/pages/About.vue') }`，这样在访问路
由时才会加载对应的组件代码，提高初始加载性能。

## Nuxt3 中如何定义全局样式？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

* **1：** 在 nuxt.config.ts 中通过 css 数组添加全局样式文件路径,如： `['~/assets/css/global.css']`, 使样式在整个应用中生效。

## 请解释 Nuxt3 中 nitro 的作用及关键配置项

#### 类型：`拓展`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（8 分）

<details>

* **2：** nitro 负责 Nuxt3 服务器端构建与部署核心支撑、服务端渲染（SSR）及性能优化、灵活的路由处理与适配、跨平台与多环境适配
* **1：** 指定服务器的预设模式，决定了 Nuxt3 应用最终如何构建以及适配何种类型的运行环境。例：

```js
// nuxt.config.ts
export default {
  nitro: {
    preset: 'node-server'
  }
}
//在上述配置中，选择 node-server 预设，表示应用将以适合在传统 Node.js 服务器上运行的方式进行构建，生成对应的可执行代码和相关配置。如果设置为 serverless，
// 例如 preset: 'serverless'，则会按照无服务器架构的要求对应用进行构建，以便能够部署到像 AWS Lambda 这样的无服务器环境中，nitro 会自动处理相关的代码打包、资源管理等差异，确保应用正常运行。
```

* **2：** routeRules,用于详细定义各个路由的规则，涵盖缓存策略、重定向规则、响应头设置等方面，能够根据具体的业务需求对不同路由进行定制化配置，优化路由相关的性能和用户访问逻辑。

```ts
// nuxt.config.ts
export default {
  nitro: {
    routeRules: {
      '/': {
        cache: {
          maxAge: 60 * 10 // 为首页设置缓存时间，这里是 10 分钟
        }
      },
      '/about': {
        redirect: {
          destination: '/', // 将访问 /about 页面重定向到首页
          statusCode: 302
        }
      },
      '/api/data': {
        headers: {
          'Access-Control-Allow-Origin': '*' // 为 /api/data 路由设置响应头，允许跨域访问
        }
      }
    }
  }
}
//在这个示例中，针对应用的根路由（/）设置了缓存策略，即用户首次访问后，在接下来的 10 分钟内再次访问该页面时，服务器可以直接从缓存中获取页面内容并返回，减
// 少服务器处理负担；对于 /about 页面配置了重定向规则，当用户访问该页面时会以 302 状态码重定向到首页；而 /api/data 路由则通过设置响应头，解决了该路由的跨域访问问题，方便前端与之交互。
```

* **1：** devProxy, 主要在开发环境中发挥作用，用于配置代理服务器，将前端应用发出的请求代理转发到指定的后端服务器地址，以此巧妙地解决开发过程中常见的跨域问题，使得前后端能够在本地
开发环境下顺畅地协同工作。

```ts
// nuxt.config.ts
export default {
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://localhost:3000/api', // 后端 API 服务器的实际地址
        changeOrigin: true
      }
    }
  }
}
```

* **1：** output, 可以对构建输出的相关参数进行配置，包括指定构建输出的目录、公共资源目录的设置、确定模块格式等内容，让开发者能够根据项目的实际部署需求以及目标环境的
要求，精准地定制构建结果的呈现形式。

```ts
// nuxt.config.ts
export default {
  nitro: {
    output: {
      dir: 'dist', // 设置构建输出目录为 dist
      publicDir: 'public', // 设定公共资源目录为 public
      format: 'esm' // 设置模块格式为 ESM（ECMAScript 模块），也可根据需求选择其他格式
    }
  }
}
```

* **1：** plugins, 允许开发者在 nitro 的构建流程中引入自定义的插件，这些插件能够扩展 nitro 的功能，执行诸如在服务器启动时初始化特定资源、修改请求和响应处理逻辑、与外部
系统进行集成等操作，从而为服务器端应用增添更多的灵活性和可定制性。

```ts
// nuxt.config.ts
export default {
  nitro: {
    plugins: ['./server/plugins/myPlugin.ts']
  }
}
```

</details>

## 请说明 Nuxt 中插件（plugin）的作用以及如何编写和使用一个自定义插件？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（5 分）

<details>

* **3：** Nuxt 插件的作用<br/>
&emsp;功能扩展：Nuxt 插件可以用来向项目中添加各种额外的功能，这些功能可能是 Nuxt 核心框架本身没有提供，但在实际项目开发中经常需要的。例如，集成第三方库（像引
入 axios 用于网络请求）、添加全局的混入（mixins）、注入全局的方法或属性等，以此增强项目的整体功能。<br/>
&emsp;全局共享：插件能够在整个 Nuxt 项目的多个页面和组件之间实现功能的全局共享。一旦在项目中配置并注册了插件，其提供的功能就可以在不同的组件中方便地调用，无需在
每个组件内部重复编写相同的逻辑，有助于提高代码的复用性和可维护性。<br/>
&emsp;优化配置：通过插件还可以对 Nuxt 项目进行一些底层的优化配置。比如，可以在插件里配置全局的 CSS 样式加载、设置浏览器的一些特性等，使得项目在运行时能更好地
适配不同的环境和满足特定的需求。
* **2：** 编写一个自定义插件<br/>
&emsp;在 Nuxt 项目的 plugins 目录下创建一个新的 JavaScript 文件，文件名可以根据插件的功能自行命名，例如 myPlugin.js。如果 plugins 目录不存在，则需要手动创建。<br/>
&emsp;在插件文件中，按照以下格式编写代码。插件本质上是一个函数，它接收两个参数 context 和 inject（这两个参数由 Nuxt 自动传入）。

```js
export default function (context, inject) {
  const myLogger = (message) => {
    console.log(`[MyLogger] ${message}`);
  };
  inject('myLogger', myLogger);
}
```

</details>