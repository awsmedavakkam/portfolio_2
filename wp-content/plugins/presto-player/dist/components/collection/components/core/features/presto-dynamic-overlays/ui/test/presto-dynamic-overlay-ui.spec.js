import{newSpecPage}from"@stencil/core/testing";import{PrestoDynamicOverlayUi}from"../presto-dynamic-overlay-ui";describe("presto-dynamic-overlay-ui",(()=>{it("renders",(async()=>{const o=await newSpecPage({components:[PrestoDynamicOverlayUi],html:"<presto-dynamic-overlay-ui></presto-dynamic-overlay-ui>"});expect(o.root).toEqualHtml('\n      <presto-dynamic-overlay-ui>\n        <mock:shadow-root>\n          <span class="overlay--top-right overlay-text" part="overlay-text" style="font-size: 10px;">\n            <slot></slot>\n          </span>\n        </mock:shadow-root>\n      </presto-dynamic-overlay-ui>\n    ')}))}));