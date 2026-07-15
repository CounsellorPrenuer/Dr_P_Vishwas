(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,303781,i=>{"use strict";var e=i.i(160211),t=i.i(120529),o=i.i(337732),r=i.i(559429),a=i.i(907783),d=i.i(131115),s=i.i(718583),l=i.i(571905);i.i(292977),i.i(756264),i.i(225430),i.i(202758);var n=i.i(474477);i.i(683885),i.i(167333),i.i(275928),i.i(40301),i.i(617336),i.i(711508),i.i(474897),i.i(277859),i.i(989790),i.i(640161),i.i(409356),i.i(931953),i.i(330134),i.i(287716),i.i(32298),i.i(491690),i.i(795301),i.i(505399);let x=(0,l.styled)(r.Flex).withConfig({displayName:"RootFlex",componentId:"sc-1y8zfkj-0"})(({theme:i})=>{let e=i.sanity.media;return l.css`
    min-height: 100%;

    @media (max-width: ${e[3]}px) {
      position: relative;
    }
  `}),c=(0,l.styled)(d.Layer).withConfig({displayName:"SidebarMotionLayer",componentId:"sc-1y8zfkj-1"})(({theme:i})=>{let e=i.sanity.media;return l.css`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 360px;
    border-left: 1px solid var(--card-border-color);
    box-sizing: border-box;
    overflow: hidden;

    box-shadow:
      0px 6px 8px -4px var(--card-shadow-umbra-color),
      0px 12px 17px -1px var(--card-shadow-penumbra-color);

    @media (max-width: ${e[3]}px) {
      bottom: 0;
      position: absolute;
      right: 0;
      top: 0;
    }

    @media (max-width: ${e[1]}px) {
      border-left: 0;
      min-width: 100%;
      left: 0;
    }
  `});function h(i){let r,d,l,h,p,u=(0,t.c)(12),f=(0,o.useMediaIndex)(),{state:m}=(0,n.useTasksNavigation)(),{isOpen:b}=m,g=f<=1&&b?"hidden":"auto";return u[0]!==i?(r=i.renderDefault(i),u[0]=i,u[1]=r):r=u[1],u[2]!==g||u[3]!==r?(d=(0,e.jsx)(a.Box,{flex:1,height:"fill",overflow:g,children:r}),u[2]=g,u[3]=r,u[4]=d):d=u[4],u[5]!==b?(l=b&&(0,e.jsx)(c,{zOffset:100,height:"fill",children:(0,e.jsx)(n.TasksStudioSidebar,{})}),u[5]=b,u[6]=l):l=u[6],u[7]!==l?(h=(0,e.jsx)(s.AnimatePresence,{initial:!1,children:l}),u[7]=l,u[8]=h):h=u[8],u[9]!==d||u[10]!==h?(p=(0,e.jsxs)(x,{sizing:"border",height:"fill",children:[d,h]}),u[9]=d,u[10]=h,u[11]=p):p=u[11],p}i.s(["TasksStudioActiveToolLayout",0,function(i){let o,r=(0,t.c)(4),{enabled:a}=(0,n.useTasksEnabled)();if(!a){let e;return r[0]!==i?(e=i.renderDefault(i),r[0]=i,r[1]=e):e=r[1],e}return r[2]!==i?(o=(0,e.jsx)(h,{...i}),r[2]=i,r[3]=o):o=r[3],o}])}]);