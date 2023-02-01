import{_ as t,c as e,o as a,a as o}from"./app.1941f121.js";const r="/assets/navigation-drawers.78376b5b.png",F=JSON.parse('{"title":"NavigationDrawer","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples","link":"#examples","children":[]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[]},{"level":2,"title":"NavigationDrawerItem Properties","slug":"navigationdraweritem-properties","link":"#navigationdraweritem-properties","children":[]},{"level":2,"title":"NavigationDrawerItem Events","slug":"navigationdraweritem-events","link":"#navigationdraweritem-events","children":[]}],"relativePath":"navigation-drawer.md","lastUpdated":1675235126000}'),n={name:"navigation-drawer.md"},s=o('<h1 id="navigationdrawer" tabindex="-1">NavigationDrawer <a class="header-anchor" href="#navigationdrawer" aria-hidden="true">#</a></h1><p>Navigation drawers provide ergonomic access to destinations in an app.</p><p><img src="'+r+`" alt=""></p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">NavigationDrawer</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Components</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">NavigationDrawerItem</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Overview</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">LayersOutline</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ContentType</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{x:Type panels:OverviewPanel}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">NavigationDrawerItem</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Button</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">LayersOutline</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ContentType</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{x:Type panels:ButtonPanel}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">NavigationDrawer</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><table><thead><tr><th>name</th><th>type</th><th>default</th><th>describes</th></tr></thead><tbody><tr><td>Items</td><td><code>ItemCollection&lt;View&gt;</code></td><td></td><td>NavigationDrawer&#39;s items.</td></tr><tr><td>FooterItems</td><td><code>ItemCollection&lt;View&gt;</code></td><td></td><td>NavigationDrawer&#39;s footer items.</td></tr><tr><td>Title</td><td>string</td><td>empty</td><td>NavigationDrawer&#39;s title.</td></tr><tr><td>DisplayMode</td><td>DrawerDisplayMode</td><td>device</td><td>NavigationDrawer&#39;s DisplayMode, split or popup.</td></tr><tr><td>SelectedItem</td><td>NavigationDrawerItem</td><td>0</td><td>NavigationDrawer&#39;s selected item.</td></tr><tr><td>IsPaneOpen</td><td>bool</td><td>false</td><td>open NavigationDrawer&#39;s pane.</td></tr><tr><td>HasToolBar</td><td>bool</td><td>Binding DisplayMode</td><td>enable toolBar of the NavigationDrawer.</td></tr><tr><td>PaneBackGroundColour</td><td>Color</td><td>style</td><td>NavigationDrawer&#39;s pane background color.</td></tr><tr><td>ToolBarBackGroundColour</td><td>Color</td><td>style</td><td>NavigationDrawer&#39;s toolBarbackground color.</td></tr><tr><td>Command</td><td>ICommand</td><td></td><td>executed when the NavigationDrawer is SelectedItemChanged.</td></tr><tr><td>CommandParameter</td><td>object</td><td></td><td>Command&#39;s parameter.</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>name</th><th>type</th></tr></thead><tbody><tr><td>SelectedItemChanged</td><td><code>EventHandler&lt;SelectedItemChangedEventArgs&gt;</code></td></tr></tbody></table><h2 id="navigationdraweritem-properties" tabindex="-1">NavigationDrawerItem Properties <a class="header-anchor" href="#navigationdraweritem-properties" aria-hidden="true">#</a></h2><table><thead><tr><th>name</th><th>type</th><th>default</th><th>describes</th></tr></thead><tbody><tr><td>Title</td><td>string</td><td>empty</td><td>NavigationDrawerItem&#39;s title.</td></tr><tr><td>Text</td><td>string</td><td>empty</td><td>NavigationDrawerItem&#39;s Text.</td></tr><tr><td>ContentType</td><td>Type</td><td></td><td>NavigationDrawerItem&#39;s contain content type.</td></tr><tr><td>ActiveIndicatorColor</td><td></td><td>SecondaryContainerColor</td><td>NavigationDrawerItem&#39;s activeIndicator color.</td></tr><tr><td>BackgroundColour</td><td>Color</td><td>Transparent</td><td>NavigationDrawerItem&#39;s background color.</td></tr><tr><td>ForegroundColor</td><td>Color</td><td>OnSurfaceVariantColor</td><td>NavigationDrawerItem&#39;s foreground color.</td></tr><tr><td>FontFamily</td><td>string</td><td></td><td>font family of the NavigationDrawerItem&#39;s text.</td></tr><tr><td>FontSize</td><td>float</td><td>14</td><td>font size of the NavigationDrawerItem&#39;s text.</td></tr><tr><td>FontWeight</td><td>int</td><td>500</td><td>font weight of the NavigationDrawerItem&#39;s text.</td></tr><tr><td>FontItalic</td><td>bool</td><td>false</td><td>enable font italic of the NavigationDrawerItem&#39;s text.</td></tr><tr><td>RippleColor</td><td>Color</td><td>SurfaceTintColor</td><td>NavigationDrawerItem&#39;s ripple color.</td></tr></tbody></table><h2 id="navigationdraweritem-events" tabindex="-1">NavigationDrawerItem Events <a class="header-anchor" href="#navigationdraweritem-events" aria-hidden="true">#</a></h2><table><thead><tr><th>name</th><th>type</th></tr></thead><tbody><tr><td>Clicked</td><td><code>EventHandler&lt;SKTouchEventArgs&gt;</code></td></tr><tr><td>Pressed</td><td><code>EventHandler&lt;SKTouchEventArgs&gt;</code></td></tr><tr><td>Released</td><td><code>EventHandler&lt;SKTouchEventArgs&gt;</code></td></tr><tr><td>Moved</td><td><code>EventHandler&lt;SKTouchEventArgs&gt;</code></td></tr><tr><td>LongPressed</td><td><code>EventHandler&lt;SKTouchEventArgs&gt;</code></td></tr><tr><td>Entered</td><td><code>EventHandler&lt;SKTouchEventArgs&gt;</code></td></tr><tr><td>Exited</td><td><code>EventHandler&lt;SKTouchEventArgs&gt;</code></td></tr></tbody></table>`,13),d=[s];function l(i,p,c,D,h,g){return a(),e("div",null,d)}const v=t(n,[["render",l]]);export{F as __pageData,v as default};
