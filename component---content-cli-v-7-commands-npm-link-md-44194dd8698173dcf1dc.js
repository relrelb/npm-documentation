(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{DDsH:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n("8o2o"),l=(n("q1tI"),n("7ljp")),o=n("O6H6"),i={},r={_frontmatter:i},c=o.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm link (in package dir)\nnpm link [<@scope>/]<pkg>[@<version>]\n\nalias: npm ln\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"Package linking is a two-step process."),Object(l.b)("p",null,"First, ",Object(l.b)("inlineCode",{parentName:"p"},"npm link")," in a package folder will create a symlink in the global folder\n",Object(l.b)("inlineCode",{parentName:"p"},"{prefix}/lib/node_modules/<package>")," that links to the package where the ",Object(l.b)("inlineCode",{parentName:"p"},"npm\nlink")," command was executed. It will also link any bins in the package to ",Object(l.b)("inlineCode",{parentName:"p"},"{prefix}/bin/{name}"),".\nNote that ",Object(l.b)("inlineCode",{parentName:"p"},"npm link")," uses the global prefix (see ",Object(l.b)("inlineCode",{parentName:"p"},"npm prefix -g")," for its value)."),Object(l.b)("p",null,"Next, in some other location, ",Object(l.b)("inlineCode",{parentName:"p"},"npm link package-name")," will create a\nsymbolic link from globally-installed ",Object(l.b)("inlineCode",{parentName:"p"},"package-name")," to ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules/"),"\nof the current folder."),Object(l.b)("p",null,"Note that ",Object(l.b)("inlineCode",{parentName:"p"},"package-name")," is taken from ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),",\nnot from directory name."),Object(l.b)("p",null,"The package name can be optionally prefixed with a scope. See ",Object(l.b)("a",{parentName:"p",href:"/cli/v7/using-npm/scope"},Object(l.b)("inlineCode",{parentName:"a"},"scope")),".\nThe scope must be preceded by an @-symbol and followed by a slash."),Object(l.b)("p",null,"When creating tarballs for ",Object(l.b)("inlineCode",{parentName:"p"},"npm publish"),', the linked packages are\n"snapshotted" to their current state by resolving the symbolic links.'),Object(l.b)("p",null,"This is handy for installing your own stuff, so that you can work on it and\ntest it iteratively without having to continually rebuild."),Object(l.b)("p",null,"For example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"    cd ~/projects/node-redis    # go into the package directory\n    npm link                    # creates global link\n    cd ~/projects/node-bloggy   # go into some other package directory.\n    npm link redis              # link-install the package\n")),Object(l.b)("p",null,"Now, any changes to ~/projects/node-redis will be reflected in\n~/projects/node-bloggy/node_modules/node-redis/. Note that the link should\nbe to the package name, not the directory name for that package."),Object(l.b)("p",null,"You may also shortcut the two steps in one.  For example, to do the\nabove use-case in a shorter way:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"cd ~/projects/node-bloggy  # go into the dir of your main project\nnpm link ../node-redis     # link the dir of your dependency\n")),Object(l.b)("p",null,"The second line is the equivalent of doing:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"(cd ../node-redis; npm link)\nnpm link redis\n")),Object(l.b)("p",null,"That is, it first creates a global link, and then links the global\ninstallation target into your project's ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folder."),Object(l.b)("p",null,"Note that in this case, you are referring to the directory name, ",Object(l.b)("inlineCode",{parentName:"p"},"node-redis"),",\nrather than the package name ",Object(l.b)("inlineCode",{parentName:"p"},"redis"),"."),Object(l.b)("p",null,"If your linked package is scoped (see ",Object(l.b)("a",{parentName:"p",href:"/cli/v7/using-npm/scope"},Object(l.b)("inlineCode",{parentName:"a"},"scope")),") your link command must include that scope, e.g."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm link @myorg/privatepackage\n")),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/using-npm/developers"},"npm developers")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/configuring-npm/package-json"},"package.json")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-install"},"npm install")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/configuring-npm/folders"},"npm folders")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-config"},"npm config")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/configuring-npm/npmrc"},"npmrc"))))}p.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),o=n("aOgs"),i=n("q1tI"),r=n.n(i),c=n("7ljp"),p=n("pD55"),m=n("8Aig"),s=n("ReZb"),b=n("GCVy"),d=n("+6vE");var u=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return r.a.createElement("strong",null,t)},h=n("gnlW"),f=n("mwnC"),y=n("/Rw0"),j=n("dVM4"),k=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function O(e){var t=e.items,n=e.depth;return r.a.createElement(k,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(O,{items:e.items,depth:n+1}):null)})))}O.defaultProps={depth:0};var N=O,v=n("MfeC");function E(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),o=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),o.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,i.variant.title),r.a.createElement(E.Menu,{direction:e.direction,width:e.menuWidth},o)))}E.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var w=E,x=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,k=i.title,O=i.description,E=i.status,D=i.source,W=i.additionalContributors,z=void 0===W?[]:W,M=v.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:s.a,Note:b.a,Prompt:u,PromptReply:g,Screenshot:h.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:k,description:O}),r.a.createElement(m.b,{location:a}),r.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(f.a,{location:a})),r.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},k),O))),null!=M?r.a.createElement(I,null,r.a.createElement(w,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:M,location:a})):null),n.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(N,{items:n.tableOfContents.items})):null,r.a.createElement(T,null,E||D?r.a.createElement(l.k,{mb:3,alignItems:"center"},E?r.a.createElement(j.a,{status:E}):null,r.a.createElement(l.e,{mx:"auto"}),D?r.a.createElement(y.a,{href:D}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:o.b,mr:2}):r.a.createElement(l.r,{icon:o.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(N,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(d.a,{editUrl:n.editUrl,contributors:n.contributors.concat(z.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-link-md-44194dd8698173dcf1dc.js.map