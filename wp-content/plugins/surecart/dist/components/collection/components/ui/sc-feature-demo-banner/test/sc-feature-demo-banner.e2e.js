import{newE2EPage}from"@stencil/core/testing";describe("sc-feature-demo-banner",(()=>{it("renders",(async()=>{const e=await newE2EPage();await e.setContent("<sc-feature-demo-banner></sc-feature-demo-banner>");const a=await e.find("sc-feature-demo-banner");expect(a).toHaveClass("hydrated")}))}));