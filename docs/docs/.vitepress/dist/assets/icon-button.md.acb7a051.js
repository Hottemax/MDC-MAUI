import{_ as t,c as s,o as e,a as n}from"./app.1941f121.js";const o="/assets/icon-buttons.0aae6ea2.png",h=JSON.parse('{"title":"IconButton","description":"","frontmatter":{},"headers":[{"level":2,"title":"Styles","slug":"styles","link":"#styles","children":[]},{"level":2,"title":"Examples","slug":"examples","link":"#examples","children":[]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[]}],"relativePath":"icon-button.md","lastUpdated":1675235126000}'),l={name:"icon-button.md"},a=n('<h1 id="iconbutton" tabindex="-1">IconButton <a class="header-anchor" href="#iconbutton" aria-hidden="true">#</a></h1><p>Icon buttons help users take supplementary actions with a single tap.</p><p><img src="'+o+`" alt=""></p><h2 id="styles" tabindex="-1">Styles <a class="header-anchor" href="#styles" aria-hidden="true">#</a></h2><p>There are 4 Styles of icon buttons: 1. Filled, 2. FilledTonal , 3. Outlined, 4. Standard.</p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">IconButton</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Pencil</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{DynamicResource FilledIconButtonStyle}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">IconButton</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Pencil</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{DynamicResource FilledTonalIconButtonStyle}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">IconButton</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Pencil</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{DynamicResource OutlinedIconButtonStyle}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">IconButton</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Pencil</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{DynamicResource StandardIconButtonStyle}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><table><thead><tr><th>name</th><th>type</th><th>defalut</th><th>describes</th></tr></thead><tbody><tr><td>Icon</td><td>IconKind</td><td>none</td><td>button&#39;s icon</td></tr><tr><td>IconSource</td><td>SkPicture</td><td></td><td>button&#39;s icon</td></tr><tr><td>BackgroundColour</td><td>Color</td><td>style</td><td>button&#39;s background color.</td></tr><tr><td>ForegroundColor</td><td>Color</td><td>style</td><td>button&#39;s foreground color.</td></tr><tr><td>Shape</td><td>Shape</td><td>style</td><td>corner radius of the button&#39;s border.</td></tr><tr><td>Elevation</td><td>int</td><td>style</td><td>button&#39;s elevation.</td></tr><tr><td>OutlineColor</td><td>Color</td><td>style</td><td>button&#39;s border color.</td></tr><tr><td>RippleColor</td><td>Color</td><td>style</td><td>button&#39;s ripple color.</td></tr><tr><td>ContextMenu</td><td>ContextMenu</td><td></td><td>button&#39;s context menu.</td></tr><tr><td>Style</td><td>Style</td><td>Filled</td><td>button&#39;s style</td></tr><tr><td>Command</td><td>ICommand</td><td></td><td>executed when the button is clicked.</td></tr><tr><td>CommandParameter</td><td>object</td><td></td><td>Command&#39;s parameter.</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>name</th><th>type</th></tr></thead><tbody><tr><td>Clicked</td><td><code>EventHandler&lt;SKTouchEventArgs&gt;</code></td></tr><tr><td>Pressed</td><td><code>EventHandler&lt;SKTouchEventArgs&gt;</code></td></tr><tr><td>Released</td><td><code>EventHandler&lt;SKTouchEventArgs&gt;</code></td></tr><tr><td>Moved</td><td><code>EventHandler&lt;SKTouchEventArgs&gt;</code></td></tr><tr><td>LongPressed</td><td><code>EventHandler&lt;SKTouchEventArgs&gt;</code></td></tr><tr><td>Entered</td><td><code>EventHandler&lt;SKTouchEventArgs&gt;</code></td></tr><tr><td>Exited</td><td><code>EventHandler&lt;SKTouchEventArgs&gt;</code></td></tr></tbody></table>`,11),d=[a];function r(p,c,i,y,D,F){return e(),s("div",null,d)}const m=t(l,[["render",r]]);export{h as __pageData,m as default};
