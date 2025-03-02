import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{F as i}from"./FieldButton-3NkAYE_T.js";import{C as c}from"./ConfirmButton-BsRzbbFT.js";import{C as m}from"./CancelButton-maNWJoWG.js";import{S as f}from"./icon-button-cancel-DIst9dUE.js";import"./index-C9rmetsa.js";import"./index-BofL8h0e.js";const d=({onVisibleFavoriteFieldClick:r,alertConfirmMessage:l,alertCancelMessage:n})=>e.jsxs("div",{className:"favorite-field-container",children:[e.jsx("div",{className:"favorite-field-header",children:e.jsx(f,{onClick:r})}),e.jsxs("div",{className:"favorite-field-body",children:[e.jsxs("div",{className:"favorite-field-body__group",children:[e.jsx(i,{fieldName:"경영·회계·사무"}),e.jsx(i,{fieldName:"전기·전자"})]}),e.jsxs("div",{className:"favorite-field-body__group",children:[e.jsx(i,{fieldName:"금융·보험"}),e.jsx(i,{fieldName:"법률·경찰·소방·교도·국방"})]}),e.jsxs("div",{className:"favorite-field-body__group",children:[e.jsx(i,{fieldName:"보건·의료"}),e.jsx(i,{fieldName:"사회복지·종교"})]}),e.jsxs("div",{className:"favorite-field-body__group",children:[e.jsx(i,{fieldName:"문화·예술·디자인·방송"}),e.jsx(i,{fieldName:"화학·바이오"})]}),e.jsxs("div",{className:"favorite-field-body__group",children:[e.jsx(i,{fieldName:"영업판매"}),e.jsx(i,{fieldName:"건설"}),e.jsx(i,{fieldName:"기계"})]})]}),e.jsxs("div",{className:"favorite-field-footer",children:[e.jsx(m,{name:n,clickEvent:r}),e.jsx(c,{name:l,clickEvent:r})]})]});d.__docgenInfo={description:"",methods:[],displayName:"CheckFavoriteField",props:{favoriteFieldVisible:{required:!0,tsType:{name:"boolean"},description:""},onVisibleFavoriteFieldClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},alertConfirmMessage:{required:!0,tsType:{name:"string"},description:""},alertCancelMessage:{required:!0,tsType:{name:"string"},description:""}}};const C={title:"Component/CheckFavoriteField",component:d,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{favoriteFieldVisible:!0,onVisibleFavoriteFieldClick:()=>console.log("관심 분야 선택창 닫기"),alertConfirmMessage:"완료",alertCancelMessage:"취소"}};var a,o,t;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    favoriteFieldVisible: true,
    onVisibleFavoriteFieldClick: () => console.log('관심 분야 선택창 닫기'),
    alertConfirmMessage: '완료',
    alertCancelMessage: '취소'
  }
}`,...(t=(o=s.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const y=["MyPage"];export{s as MyPage,y as __namedExportsOrder,C as default};
