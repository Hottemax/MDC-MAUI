import{_ as s,c as a,o,a as n}from"./app.1941f121.js";const p="/assets/wrap-layout.6aaa9d56.png",C=JSON.parse('{"title":"WrapLayout","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples","link":"#examples","children":[]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[]}],"relativePath":"wrap-layout.md","lastUpdated":1675235126000}'),l={name:"wrap-layout.md"},t=n('<h1 id="wraplayout" tabindex="-1">WrapLayout <a class="header-anchor" href="#wraplayout" aria-hidden="true">#</a></h1><p>WrapLayout is a layout container that lets you position items in rows or columns, based on the orientation property. When the space is filled, the container automatically wraps items onto a new row or column.</p><p><img src="'+p+`" alt=""></p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">WrapLayout</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Orientation</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Horizontal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">Chip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">chip</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Add</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">Chip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">chip</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Add</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">Chip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">chip</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Add</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">Chip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">chip</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Add</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">Chip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">chip</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Add</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">Chip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">chip</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Add</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">Chip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">chip</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Add</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">Chip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">chip</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Add</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">WrapLayout</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><table><thead><tr><th>name</th><th>type</th><th>default</th><th>describes</th></tr></thead><tbody><tr><td>Orientation</td><td>StackOrientation</td><td>Horizontal</td><td>WrapLayout&#39;s item orientation.</td></tr><tr><td>Spacing</td><td>double</td><td>0</td><td>Adjustment WrapLayout&#39;s HorizontalSpacing and VerticalSpacing.</td></tr><tr><td>HorizontalSpacing</td><td>double</td><td>0</td><td>WrapLayout&#39;s horizontal spacing .</td></tr><tr><td>VerticalSpacing</td><td>double</td><td>0</td><td>WrapLayout&#39;s vertical spacing.</td></tr></tbody></table>`,7),e=[t];function r(c,D,F,y,i,d){return o(),a("div",null,e)}const h=s(l,[["render",r]]);export{C as __pageData,h as default};
