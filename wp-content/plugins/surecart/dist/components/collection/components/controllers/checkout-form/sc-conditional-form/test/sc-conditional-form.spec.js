import{newSpecPage}from"@stencil/core/testing";import{ScConditionalForm}from"../sc-conditional-form";describe("sc-conditional-form",(()=>{it("renders",(async()=>{const o=await newSpecPage({components:[ScConditionalForm],html:"<sc-conditional-form></sc-conditional-form>"});expect(o.root).toMatchSnapshot()}))}));