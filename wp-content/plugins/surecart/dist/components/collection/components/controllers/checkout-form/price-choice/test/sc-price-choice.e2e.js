import{newE2EPage}from"@stencil/core/testing";describe("sc-price-choice",(()=>{it("renders",(async()=>{const e=await newE2EPage();await e.setContent("<sc-price-choice></sc-price-choice>");const c=await e.find("sc-price-choice");expect(c).toHaveClass("hydrated")}))}));