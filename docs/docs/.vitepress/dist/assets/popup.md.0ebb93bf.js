import{_ as s,c as n,o as a,a as o}from"./app.1941f121.js";const l="/assets/popups.6eb65870.png",C=JSON.parse('{"title":"Popup","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples","link":"#examples","children":[]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[]}],"relativePath":"popup.md","lastUpdated":1675235126000}'),p={name:"popup.md"},t=o('<h1 id="popup" tabindex="-1">Popup <a class="header-anchor" href="#popup" aria-hidden="true">#</a></h1><p>Popups Displaying a modal pop-up on the window.</p><p><img src="'+l+`" alt=""></p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">Popup</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">x</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">Class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">SampleApp.Views.Dialog</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">xmlns</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://schemas.microsoft.com/dotnet/2021/maui</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">xmlns</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">x</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://schemas.microsoft.com/winfx/2009/xaml</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">xmlns</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">mdc</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">clr-namespace:Material.Components.Maui;assembly=Material.Components.Maui</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">Card</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">BackgroundColour</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{DynamicResource SurfaceColor}</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">Elevation</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">EnableTouchEvents</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">False</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">Shape</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">28</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">WidthRequest</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">350</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Grid</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">RowDefinitions</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">auto,auto,auto</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">Padding</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">24</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">Label</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">FontSize</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">24</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Base dialog title</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">Label</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#C792EA;">Grid.Row</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#C792EA;">Padding</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0,24,0,16</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#C792EA;">ForegroundColor</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{DynamicResource OnSurfaceVariantColor}</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#C792EA;">Text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">A dialog is a type of modal window that appears in front of app content to provide critical information, or ask for a decision.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">HorizontalStackLayout</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#C792EA;">Grid.Row</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#C792EA;">HorizontalOptions</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">End</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#C792EA;">Spacing</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">Button</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">x</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">Name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Cancel</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">Clicked</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Cancel_Clicked</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">FontWeight</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">500</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">Style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{DynamicResource TextButtonStyle}</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">Text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Cancel</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">Button</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">x</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">Name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Confirm</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">Clicked</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Confirm_Clicked</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">FontWeight</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">500</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">Style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{DynamicResource TextButtonStyle}</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">Text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Confirm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">HorizontalStackLayout</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Grid</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">Card</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">Popup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">//using on the page</span></span>
<span class="line"><span style="color:#A6ACCD;">var popup = new Dialog();</span></span>
<span class="line"><span style="color:#A6ACCD;">var result = await popup.ShowAtAsync(this);</span></span>
<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><table><thead><tr><th>name</th><th>type</th><th>default</th><th>describes</th></tr></thead><tbody><tr><td>Content</td><td>View</td><td></td><td>Popup&#39;s contain content.</td></tr><tr><td>HorizontalOptions</td><td>LayoutAlignment</td><td>Center</td><td>Popup&#39;s horizontalOptions.</td></tr><tr><td>VerticalOptions</td><td>LayoutAlignment</td><td>Center</td><td>Popup&#39;s verticalOptions.</td></tr><tr><td>DismissOnOutside</td><td>bool</td><td>false</td><td>close popup when touched outside the window&#39;s bounds.</td></tr><tr><td>OffsetX</td><td>int</td><td>0</td><td>Popup&#39;s offset x-coordinate based on alignment.</td></tr><tr><td>OffsetY</td><td>int</td><td>0</td><td>Popup&#39;s offset y-coordinate based on alignment.</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><table><thead><tr><th>name</th><th>describes</th><th></th></tr></thead><tbody><tr><td>ShowAtAsync(Page anchor)</td><td>show popup on the page.</td><td></td></tr><tr><td>Close(object result = default)</td><td>close popup.</td><td></td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>name</th><th>type</th></tr></thead><tbody><tr><td>Opened</td><td>EventHandler</td></tr><tr><td>Closed</td><td><code>EventHandler&lt;object&gt;</code></td></tr></tbody></table>`,11),e=[t];function c(r,D,F,y,i,d){return a(),n("div",null,e)}const h=s(p,[["render",c]]);export{C as __pageData,h as default};
