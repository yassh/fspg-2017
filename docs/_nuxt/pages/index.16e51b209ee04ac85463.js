webpackJsonp([0],{"/TYz":function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=n("vwys"),e=n("rGQh"),i=!1;var c=function(t){i||n("TTnq")},r=n("VU/8")(s.a,e.a,!1,c,"data-v-2a183b29",null);r.options.__file="pages/index.vue",a.default=r.exports},DN7k:function(t,a,n){"use strict";var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("div",{staticClass:"frame"},[n("table",{staticClass:"u-bold"},[t._m(0),n("tbody",[n("tr",[n("td",{staticClass:"u-tar"},[t.inputMode?[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.rank,expression:"input.rank"}],attrs:{type:"number"},domProps:{value:t.input.rank},on:{input:function(a){a.target.composing||t.$set(t.input,"rank",a.target.value)}}})]:t._e(),t.outputMode?[t._v("\n              "+t._s(t.output.rank)+"\n            ")]:t._e()],2),n("td",[t.inputMode?[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.name,expression:"input.name"}],attrs:{type:"text"},domProps:{value:t.input.name},on:{input:function(a){a.target.composing||t.$set(t.input,"name",a.target.value)}}})]:t._e(),t.outputMode?[t._v("\n              "+t._s(t.output.name)+"\n            ")]:t._e()],2),n("td",[t._v("\n            UZB\n          ")]),n("td",{staticClass:"u-tar"},[t._v("\n            31\n          ")]),n("td",{staticClass:"u-tar"},[t._v("\n            86.01\n          ")]),n("td",{staticClass:"u-tar"},[t._v("\n            43.51\n          ")]),n("td",{staticClass:"u-tar"},[t._v("\n            42.50\n          ")]),n("td",{staticClass:"u-tar"},[t._v("\n            0.00\n          ")])])])])]),n("div",{staticClass:"frame"},[n("table",[t._m(1),n("tbody",[n("tr",[n("td",{staticClass:"u-tar"},[t._v("\n            1\n          ")]),n("td",[t.inputMode?[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.elements[0].abbr,expression:"input.elements[0].abbr"}],attrs:{type:"text"},domProps:{value:t.input.elements[0].abbr},on:{input:function(a){a.target.composing||t.$set(t.input.elements[0],"abbr",a.target.value)}}})]:t._e(),t.outputMode?[t._v("\n              "+t._s(t.output.elements[0].abbr)+"\n            ")]:t._e()],2),n("td"),n("td",{staticClass:"u-tar"},[t._v("\n            "+t._s(t.output.elements[0].baseValue)+"\n          ")]),n("td",[t.inputMode?[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.elements[0].x,expression:"input.elements[0].x"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.input.elements[0].x)?t._i(t.input.elements[0].x,null)>-1:t.input.elements[0].x},on:{change:function(a){var n=t.input.elements[0].x,s=a.target,e=!!s.checked;if(Array.isArray(n)){var i=t._i(n,null);s.checked?i<0&&t.$set(t.input.elements[0],"x",n.concat([null])):i>-1&&t.$set(t.input.elements[0],"x",n.slice(0,i).concat(n.slice(i+1)))}else t.$set(t.input.elements[0],"x",e)}}})]:t._e(),t.outputMode?[t._v("\n              "+t._s(t.output.elements[0].x?"x":"")+"\n            ")]:t._e()],2),n("td",{staticClass:"u-tar"},[t._v("\n            0.29\n          ")]),n("td"),n("td",{staticClass:"u-tac"},[t._v("\n            -1\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            0\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            1\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            0\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            1\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            0\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            0\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            0\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            1\n          ")]),n("td"),n("td"),n("td",{staticClass:"u-tar"},[t._v("\n            8.79\n          ")])]),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)])])])])};s._withStripped=!0;var e={render:s,staticRenderFns:[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("thead",[n("tr",[n("th",{staticStyle:{width:"3rem"}},[t._v("\n            Rank\n          ")]),n("th",[t._v("\n            Name\n          ")]),n("th",{staticClass:"u-tar",staticStyle:{width:"4rem"}},[t._v("\n            Nation\n          ")]),n("th",{staticClass:"u-tar",staticStyle:{width:"6rem"}},[t._v("\n            Starting Number\n          ")]),n("th",{staticClass:"u-tar",staticStyle:{width:"6rem"}},[t._v("\n            Total Segment Score\n          ")]),n("th",{staticClass:"u-tar",staticStyle:{width:"6rem"}},[t._v("\n            Total Element Score\n          ")]),n("th",{staticClass:"u-tar",staticStyle:{width:"12rem"}},[t._v("\n            Total"),n("br"),t._v("Program Component Score (factored)\n          ")]),n("th",{staticClass:"u-tar",staticStyle:{width:"7rem"}},[t._v("\n            Total Deductions\n          ")])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("thead",[n("tr",[n("th",{staticStyle:{width:"1.5rem"}},[t._v("\n            #\n          ")]),n("th",{staticStyle:{width:"20rem"}},[t._v("\n            Executed"),n("br"),t._v("Elements\n          ")]),n("th",{staticStyle:{width:"1rem"}},[n("div",{staticStyle:{transform:"rotate(-90deg)"}},[t._v("\n              Info\n            ")])]),n("th",{staticStyle:{width:"4rem"}},[t._v("\n            Base Value\n          ")]),n("th",{staticStyle:{width:"1rem"}}),n("th",{staticStyle:{width:"4rem"}},[t._v("\n            GOE\n          ")]),n("th"),n("th",{staticClass:"u-tac"},[t._v("\n            J1\n          ")]),n("th",{staticClass:"u-tac"},[t._v("\n            J2\n          ")]),n("th",{staticClass:"u-tac"},[t._v("\n            J3\n          ")]),n("th",{staticClass:"u-tac"},[t._v("\n            J4\n          ")]),n("th",{staticClass:"u-tac"},[t._v("\n            J5\n          ")]),n("th",{staticClass:"u-tac"},[t._v("\n            J6\n          ")]),n("th",{staticClass:"u-tac"},[t._v("\n            J7\n          ")]),n("th",{staticClass:"u-tac"},[t._v("\n            J8\n          ")]),n("th",{staticClass:"u-tac"},[t._v("\n            J9\n          ")]),n("th",{staticClass:"u-tac"}),n("th",{staticStyle:{width:"2.5rem"}},[t._v("\n            Ref\n          ")]),n("th",{staticClass:"u-tac",staticStyle:{width:"6rem"}},[t._v("\n            Scores of Panel\n          ")])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("tr",[n("td",{staticClass:"u-tar"},[t._v("\n            2\n          ")]),n("td",[t._v("\n            3Lz+3T\n          ")]),n("td"),n("td",{staticClass:"u-tar"},[t._v("\n            10.30\n          ")]),n("td"),n("td",{staticClass:"u-tar"},[t._v("\n            0.80\n          ")]),n("td"),n("td",{staticClass:"u-tac"},[t._v("\n            1\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            1\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            2\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            2\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            1\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            1\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            1\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            1\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            1\n          ")]),n("td"),n("td"),n("td",{staticClass:"u-tar"},[t._v("\n            11.10\n          ")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("tr",[n("td",{staticClass:"u-tar"},[t._v("\n            4\n          ")]),n("td",[t._v("\n            3F\n          ")]),n("td",[t._v("\n            !\n          ")]),n("td",{staticClass:"u-tar"},[t._v("\n            5.83\n          ")]),n("td",[t._v("\n            x\n          ")]),n("td",{staticClass:"u-tar"},[t._v("\n            0.50\n          ")]),n("td"),n("td",{staticClass:"u-tac"},[t._v("\n            1\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            1\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            1\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            1\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            1\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            0\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            0\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            1\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            -1\n          ")]),n("td"),n("td"),n("td",{staticClass:"u-tar"},[t._v("\n            6.33\n          ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td"),a("td"),a("td"),a("td",{staticClass:"u-tar u-bold"},[this._v("\n            38.23\n          ")]),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td",{staticClass:"u-tar u-bold"},[this._v("\n            43.51\n          ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td"),a("td",{staticClass:"u-bold",attrs:{colspan:"4"}},[this._v("\n            Program Components\n          ")]),a("td",{staticClass:"u-tar"},[this._v("\n            Factor\n          ")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("tr",[n("td"),n("td",{attrs:{colspan:"4"}},[t._v("\n            Skating Skills\n          ")]),n("td",{staticClass:"u-tar"},[t._v("\n            1.00\n          ")]),n("td"),n("td",{staticClass:"u-tac"},[t._v("\n            8.25\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            8.75\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            8.25\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            8.75\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            8.50\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            8.25\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            8.00\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            7.75\n          ")]),n("td",{staticClass:"u-tac"},[t._v("\n            7.50\n          ")]),n("td"),n("td"),n("td",{staticClass:"u-tar"},[t._v("\n            8.25\n          ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td"),a("td",{staticClass:"u-bold",attrs:{colspan:"4"}},[this._v("\n            Judges Total Program Component Score (factored)\n          ")]),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td",{staticClass:"u-tar u-bold"},[this._v("\n            42.50\n          ")])])}]};a.a=e},J5Tz:function(t,a,n){"use strict";var s=n("Dd8w"),e=n.n(s);function i(t){return e()({},t,{elements:t.elements.map(function(t){return e()({},t,{baseValue:function(t,a){var n=function(t){switch(t){case"3A":return 850;default:return null}}(t);return n&&Math.floor(a?1.1*n:n)}(t.abbr,t.x)})})})}a.a={props:{mode:{type:String,required:!0}},data:function(){return{input:{rank:1,name:"",elements:[{abbr:"",x:!1}]}}},computed:{output:function(){return i(this.input)},inputMode:function(){return"input"===this.mode},outputMode:function(){return"output"===this.mode}}}},PGEJ:function(t,a,n){"use strict";var s=n("J5Tz"),e=n("DN7k"),i=!1;var c=function(t){i||n("d40P")},r=n("VU/8")(s.a,e.a,!1,c,"data-v-99146a1a",null);r.options.__file="components/Protocol.vue",a.a=r.exports},TTnq:function(t,a,n){var s=n("rqdR");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("96bb87d4",s,!1,{sourceMap:!1})},d40P:function(t,a,n){var s=n("sVqF");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("530ddc2c",s,!1,{sourceMap:!1})},rGQh:function(t,a,n){"use strict";var s=function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("h1",[this._v("\n    Figure skating protocol generator 2017-2018\n  ")]),a("div",{staticClass:"mode"},[a("span",{staticClass:"mode-button",on:{click:this.toInputMode}},[this._v("\n      📝\n    ")]),a("span",{staticClass:"mode-button",on:{click:this.toOutputMode}},[this._v("\n      🖨\n    ")])]),a("Protocol",{attrs:{mode:this.mode}})],1)};s._withStripped=!0;var e={render:s,staticRenderFns:[]};a.a=e},rqdR:function(t,a,n){(t.exports=n("FZ+f")(!1)).push([t.i,".mode-button[data-v-2a183b29]{cursor:pointer}",""])},sVqF:function(t,a,n){(t.exports=n("FZ+f")(!1)).push([t.i,"table[data-v-99146a1a]{border-spacing:16px 4px;border-spacing:1rem .25rem;table-layout:fixed;width:100%}th[data-v-99146a1a]{font-weight:700;padding-bottom:8px;padding-bottom:.5rem}input[data-v-99146a1a]{width:100%}.frame[data-v-99146a1a]{border:1px solid;padding-bottom:8px;padding-bottom:.5rem;padding-top:8px;padding-top:.5rem}.frame+.frame[data-v-99146a1a]{margin-top:16px;margin-top:1rem}",""])},vwys:function(t,a,n){"use strict";var s=n("PGEJ");a.a={components:{Protocol:s.a},data:function(){return{mode:"input"}},methods:{toInputMode:function(){this.mode="input"},toOutputMode:function(){this.mode="output"}}}}});