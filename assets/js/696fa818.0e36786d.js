"use strict";(self.webpackChunkstacklok=self.webpackChunkstacklok||[]).push([[5340],{64907:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(74848),i=r(28453);const a={title:"Check Artifact Provenance",sidebar_position:55},s="Check Artifact Provenance",c={id:"how-to/artifact_signatures",title:"Check Artifact Provenance",description:"With Minder you can create rules that assert that artifacts built from your",source:"@site/docs/how-to/artifact_signatures.md",sourceDirName:"how-to",slug:"/how-to/artifact_signatures",permalink:"/how-to/artifact_signatures",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:55,frontMatter:{title:"Check Artifact Provenance",sidebar_position:55},sidebar:"minder",previous:{title:"Enabling pull request reviews",permalink:"/how-to/pr_reviews"},next:{title:"Setting up a Profile for Auto-remediation",permalink:"/how-to/setup-autoremediation"}},o={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create the artifact provenance rule type",id:"create-the-artifact-provenance-rule-type",level:2},{value:"Define a simple profile that checks artifact signatures",id:"define-a-simple-profile-that-checks-artifact-signatures",level:2},{value:"Define a more advanced profile that checks artifact provenance",id:"define-a-more-advanced-profile-that-checks-artifact-provenance",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"check-artifact-provenance",children:"Check Artifact Provenance"}),"\n",(0,n.jsx)(t.p,{children:"With Minder you can create rules that assert that artifacts built from your\nrepositories are built from trusted sources and using trusted workflows based\non their cryptographically signed provenance."}),"\n",(0,n.jsxs)(t.p,{children:["This is done by creating a profile which utilizes the ",(0,n.jsx)(t.code,{children:"artifact_signature"}),"\n",(0,n.jsx)(t.code,{children:"rule_type"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"minder"})," CLI application"]}),"\n",(0,n.jsx)(t.li,{children:"A Stacklok account"}),"\n",(0,n.jsx)(t.li,{children:"An enrolled Provider (e.g., GitHub)"}),"\n",(0,n.jsxs)(t.li,{children:["A repository that produces container images. At the moment Minder's artifact signature checks are only available for container images and only the ",(0,n.jsx)(t.code,{children:"ghcr.io"})," registry is supported."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"create-the-artifact-provenance-rule-type",children:"Create the artifact provenance rule type"}),"\n",(0,n.jsxs)(t.p,{children:["Fetch all the reference rules by cloning the ",(0,n.jsx)(t.a,{href:"https://github.com/stacklok/minder-rules-and-profiles",children:"minder-rules-and-profiles repository"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"git clone https://github.com/stacklok/minder-rules-and-profiles.git\n"})}),"\n",(0,n.jsx)(t.p,{children:"In that directory you can find all the reference rules and profiles."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"cd minder-rules-and-profiles\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Create the ",(0,n.jsx)(t.code,{children:"artifact_signature"})," rule type in Minder:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"minder ruletype create -f rule-types/github/artifact_signature.yaml\n"})}),"\n",(0,n.jsx)(t.h2,{id:"define-a-simple-profile-that-checks-artifact-signatures",children:"Define a simple profile that checks artifact signatures"}),"\n",(0,n.jsx)(t.p,{children:"Next, create a profile that applies the rule type to the appropriate artifact."}),"\n",(0,n.jsxs)(t.p,{children:["The artifacts are referred to by name and tag. If the name is not specified,\nthe rule will match any artifact name. The tag can be specified either as a list\nof tags using the ",(0,n.jsx)(t.code,{children:"tags"})," parameter or as a regular expression using the ",(0,n.jsx)(t.code,{children:"tag_regex"}),"\nparameter. If both are empty, the rule will match any tag. It is an error to specify\nboth ",(0,n.jsx)(t.code,{children:"tags"})," and ",(0,n.jsx)(t.code,{children:"tag_regex"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Create a new file called ",(0,n.jsx)(t.code,{children:"profile-artifact-simple.yaml"}),". The following example would match a container\nimage named ",(0,n.jsx)(t.code,{children:"good-repo-go"})," with the ",(0,n.jsx)(t.code,{children:"latest"})," tag. The profile would pass for any artifact that\nhas a signature, regardless of who signed it."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"---\n# sample policy for validating artifact signatures\nversion: v1\ntype: profile\nname: latest-artifact-simple\ncontext:\n  provider: github\nartifact:\n  - type: artifact_signature\n    params:\n      tags: [latest]\n      name: good-repo-go\n    def:\n      is_signed: true\n      is_verified: true\n"})}),"\n",(0,n.jsx)(t.p,{children:"Create the profile in Minder:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"minder profile create -f profile-artifact-simple.yaml\n"})}),"\n",(0,n.jsx)(t.p,{children:"Once the profile is created, Minder will start checking the artifacts produced by the enrolled repositories\nand the policy status will be updated accordingly. If the artifact is not matching the expected provenance\n(for example someone pushes a new image to the registry without signing it), a\nviolation is presented via the profile status and an alert is raised."}),"\n",(0,n.jsx)(t.h2,{id:"define-a-more-advanced-profile-that-checks-artifact-provenance",children:"Define a more advanced profile that checks artifact provenance"}),"\n",(0,n.jsxs)(t.p,{children:["As the next step, let's create a profile that checks the provenance of the artifact.\nCreate a new file called ",(0,n.jsx)(t.code,{children:"profile-artifact-provenance.yaml"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The profile would pass only if the container was\nbuilt from the ",(0,n.jsx)(t.code,{children:"main"})," branch of the ",(0,n.jsx)(t.code,{children:"good-repo-go"})," repository, using the ",(0,n.jsx)(t.code,{children:"build-image-signed-ghat.yml"}),"\nworkflow using a hosted github runner."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"---\n# sample policy for validating artifact provenance\nversion: v1\ntype: profile\nname: latest-artifact-hardened\ncontext:\n  provider: github\nartifact:\n  - type: artifact_signature\n    params:\n      tags: [latest]\n      name: good-repo-go\n    def:\n      is_signed: true\n      is_verified: true\n      branch: main\n      signer_identity: build-image-signed-ghat.yml\n      runner_environment: github-hosted\n      repository: https://github.com/mytestorg/good-repo-go\n      cert_issuer: https://token.actions.githubusercontent.com\n"})}),"\n",(0,n.jsx)(t.p,{children:"Create the profile in Minder:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"minder profile create -f profile-artifact-provenance.yaml\n"})}),"\n",(0,n.jsx)(t.p,{children:"Once the profile is created, Minder will start checking the artifacts produced\nby the enrolled repositories and the policy status will be updated\naccordingly. If the artifact is not matching the expected provenance (for\nexample someone pushes a new image to the registry after having signed the\nimage with their personal account or the image is built from a different\nworkflow or a different branch), a violation is presented via the profile\nstatus and an alert is raised."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>c});var n=r(96540);const i={},a=n.createContext(i);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);